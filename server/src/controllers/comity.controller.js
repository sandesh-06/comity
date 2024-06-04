import {
  asyncHandler,
  ApiError,
  ApiResponse,
  uploadOnCloudinary,
} from "../utils/index.js";
import { User } from "../models/user/User.model.js";
import { Comity } from "../models/comitys/comity.model.js";
import { Member } from "../models/comitys/member.model.js";
import { v2 as cloudinary } from "cloudinary";
import { JoinRequest } from "../models/comitys/joinRequest.model.js";
import { UserComityList } from "../models/user/userComitys.model.js";

//COMITY CRUD
//1. Create comity
export const createComity = asyncHandler(async (req, res) => {
  //1. get user id from the middleware
  const userId = req.user?._id;

  //2. check if user is exists and proceed
  const user = await User.findById(userId);
  if (!user) throw new ApiError(404, "User not found");

  //3. get comity details
  const { comityName, description, isPrivate, category } = req.body;
  if (!comityName || !description || !isPrivate || !category)
    throw new ApiError(400, "All fields are required");

  //4. check if comity already exists
  const doesComityExists = await Comity.findOne({ comityName });
  if (doesComityExists) throw new ApiError(403, "Comity name has been taken");

  //5. upload profile image and cover(if exists) stored in local path
  //just like how express provides "req.body", multer provides "req.files"
  const profileLocalPath = req.files?.profileImage
    ? req.files.profileImage[0].path
    : "";

  //since the cover image is optional, first check if cover image is present in req.files
  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  //since avatar is required, throw error if avatar is not found
  if (!profileLocalPath) throw new ApiError(400, "Profile Image is required!");

  const profile = await uploadOnCloudinary(profileLocalPath, "comity-profiles");
  const coverImage = await uploadOnCloudinary(
    coverImageLocalPath,
    "comity-covers"
  ); //if coverImageLocalPath is not present, cloudinary ignores automatically

  //just double checking
  if (!profile) throw new ApiError(400, "Profile is required!");

  //6. store all the details to db
  const comity = await Comity.create({
    comityName,
    description,
    profileImage: profile.url,
    coverImage: coverImage?.url || "",
    owner: userId,
    isPrivate,
    category,
  });

  //7. Update the membership to owner in Member schema
  const member = await Member.create({
    comity: comity._id,
    user: userId,
    role: "owner",
  });
  //8. return the data
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        comity,
        member,
      },
      "Comity has been created successfully"
    )
  );
});

//2. Get comity details
export const getComityDetails = asyncHandler(async (req, res) => {
  //1. get the comity id and check if comity exists
  const { comityId } = req.params;
  if (!comityId)
    throw new ApiError(400, "Comity ID missing to fetch comity details");

  const comity = await Comity.findById(comityId);
  if (!comity) throw new ApiError(404, "Comity doesn't exists");

  //2. get the details
  return res
    .status(200)
    .json(new ApiResponse(200, comity, "Comity details fetched successfully"));
});

//3. Delete comity
export const deleteComity = asyncHandler(async (req, res) => {
  //1. get the comity id and check if comity exists
  const { comityId } = req.params;
  if (!comityId) throw new ApiError(400, "Comity ID missing to delete comity");
  const userId = req.user?._id;

  //2. find the comity
  const comity = await Comity.findById(comityId);
  if (!comity) throw new ApiError(404, "Comity doesn't exists");

  //3. check if the user is the owner of the comity
  const member = await Member.findOne({ comity: comityId, role: "owner" });
  if (member && String(member.user) !== String(userId))
    throw new ApiError(403, "Only comity owners can delete/update a comity");

  //4. remove all comity data
  await comity.removeAllComityData();

  //5. delete the comity
  await Comity.findByIdAndDelete(comityId);

  //6. get the response
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Comity deleted successfully"));
});

//4. update comity details
export const updateComityDetails = asyncHandler(async (req, res) => {
  //1. get the comity id that needs an update
  const { comityId } = req.params;
  const userId = req.user?._id;
  const doesComityExists = await Comity.findById(comityId);
  if (!doesComityExists) throw new ApiError(404, "Comity not found");

  //2. get all the details that can be updated
  const { description, isPrivate } = req.body;

  if (!description && isPrivate === undefined)
    throw new ApiError(403, "There's no details provided for update");

  //3. check if the user is the owner of the comity
  const member = await Member.findOne({ comity: comityId, role: "owner" });
  if (member && String(member.user) !== String(userId))
    throw new ApiError(403, "Only comity owners can delete/update a comity");

  //4. Create an object with only the fields that are to be updated
  const updates = {};
  if (description) updates.description = description;
  if (isPrivate !== undefined) updates.isPrivate = isPrivate;

  //5. Update only those fields which need an update
  const updatedComity = await Comity.findByIdAndUpdate(comityId, updates, {
    new: true, // To return the updated document
    runValidators: true, // To run schema validations
  });

  //6. Return the updated comity details
  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedComity, "Comity details updated successfully")
    );
});

//5. update comity profile or cover
export const updateComityImages = asyncHandler(async (req, res) => {
  //1. check if comity exists
  const { comityId } = req.params;
  const userId = req.user?._id;
  if (!comityId) throw new ApiError(403, "Comity Id is missing for update");

  const comity = await Comity.findById(comityId);
  if (!comity) throw new ApiError(404, "Comity not found");

  //2. check if the user is the owner of the comity
  const member = await Member.findOne({ comity: comityId, role: "owner" });
  if (member && String(member.user) !== String(userId))
    throw new ApiError(403, "Only comity owners can delete/update a comity");

  //3. check if there are images to be uploaded
  const profileFilePath = req.files?.profileImage
    ? req.files.profileImage[0].path
    : "";
  const coverImageFilePath = req.files?.coverImage
    ? req.files.coverImage[0].path
    : "";

  if (!profileFilePath && !coverImageFilePath)
    throw new ApiError(403, "No image found to be updated");

  //4. delete already existing image from cloudinary
  let updates = {};
  //if profile is to be updated, delete already existing profile from cloudinary
  if (profileFilePath !== "") {
    const profileUrl = cloudinary.url(comity.profileImage);

    // match the image id in the url using regex
    const match = profileUrl.match(/\/v\d+\/(.+?)\.\w+$/);

    // if match found, store it in publicId and delete the existing image
    if (match && match[1]) {
      const imageId = match[1];
      await cloudinary.uploader.destroy(imageId);

      //upload the file to cloudinary
      const profile = await uploadOnCloudinary(
        profileFilePath,
        "comity-profiles"
      );
      if (!profile.url)
        throw new ApiError(
          500,
          "Error while uploading comity profile to cloudinary"
        );

      //add the profile url to updates
      updates.profileImage = profile.url;
    } else {
      console.error("Failed to extract image ID from the existing avatar URL.");
    }
  }
  //if cover is to be updated, delete already existing cover from cloudinary
  if (coverImageFilePath !== "") {
    const coverImageUrl = cloudinary.url(comity.profileImage);

    // match the image id in the url using regex
    const match = coverImageUrl.match(/\/v\d+\/(.+?)\.\w+$/);

    // if match found, store it in publicId and delete the existing image
    if (match && match[1]) {
      const imageId = match[1];
      await cloudinary.uploader.destroy(imageId);

      //upload the file to cloudinary
      const coverImage = await uploadOnCloudinary(
        coverImageFilePath,
        "comity-covers"
      );
      if (!coverImage.url)
        throw new ApiError(
          500,
          "Error while uploading cover image to cloudinary"
        );

      //add the profile url to updates
      updates.coverImage = coverImage.url;
    } else {
      console.error("Failed to extract image ID from the existing avatar URL.");
    }
  }

  //5. upload the new image
  const updatedComity = await Comity.findByIdAndUpdate(comityId, updates, {
    new: true,
  });

  //6. update the image in db
  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedComity, "Image has been updated successfully")
    );
});

//FOR PRIVATE COMITIES
//6. get all pending requests
export const getAllPendingRequests = asyncHandler(async (req, res) => {
  //1. get the comityId and check if comity exists
  const { comityId } = req.params;
  const comity = await Comity.findById(comityId);
  if (!comity) throw new ApiError(404, "Comity not found");

  //2. check if the comity is private
  if (!comity.isPrivate)
    throw new ApiError(403, "Comity is not a private comity");

  //3. get all the requests
  const allRequests = await JoinRequest.find({
    comity: comityId,
    status: "pending",
  }).select("user status");
  if (!allRequests || allRequests.length === 0)
    throw new ApiError(404, "There are no pending requests");

  //4. send response
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        allRequests,
        "All join requests for the comity is fetched"
      )
    );
});

//7. handle join requests
export const handleJoinRequest = asyncHandler(async (req, res) => {
  //1. get the request id and check if it exists
  const { requestId } = req.params;
  const joinRequest = await JoinRequest.findById(requestId);
  if (!joinRequest) throw new ApiError(404, "Request doesn't exist");

  //2. check if it's a pending request
  if (joinRequest.status !== "pending")
    throw new ApiError(402, "This request has been resolved");

  //3. get the request status
  const { status } = req.body;
  if (status !== "approved" && status !== "rejected")
    throw new ApiError(400, "Invalid status to handle the request");

  //3. check if the user and comity exists
  // get the user from the request and check if they exist
  const userId = joinRequest.user;
  const user = await User.findOne(userId);
  if (!user) throw new ApiError(404, "User not found");

  // get the comity and check if it exists
  const comityId = joinRequest.comity;
  const comity = await Comity.findOne(comityId);
  if (!comity) throw new ApiError(404, "Comity not found");

   //4. change the status to rejected
   joinRequest.status = "rejected";
   await joinRequest.save();

  //4. handle approved status
  if (status === "approved") {
    //since the comity list is already created in the joinRequest query, we need not create here.
    //1. get the user comity list
    const userComityList = await UserComityList.findById(user.userComityList);
    if (!userComityList) throw new ApiError(404, "User comity list not found");

    //2. add the comityId to user's comity list
    userComityList.comitys.push(comityId);
    await userComityList.save();

    //3. updated the status to approved
    joinRequest.status = "approved";
    await joinRequest.save();

    //4. Update the member of this user for the comity
    await Member.create({
      user: userId,
      comity: comityId,
      role: "member",
    });

    //5. send response
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          `${comity.comityName} comity has ${status} your request`
        )
      );
  }

});
