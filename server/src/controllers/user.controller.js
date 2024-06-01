import {
  asyncHandler,
  ApiError,
  ApiResponse,
  transporter,
} from "../utils/index.js";
import { User } from "../models/user/User.model.js";
import bcrypt from "bcrypt";

//1. create account
export const createAccount = asyncHandler(async (req, res) => {
  //1. Get the details
  const { fullname, email, username, password, confirmPassword } = req.body;
  //if any details is missing return err
  if (
    //if a field exists, but after trimming if it's "", then the field is missing
    [username, fullname, email, password, confirmPassword].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  //2. Check if user already exists
  const doesAccountExists = await User.findOne({$or: [{username}, {email}]});
  if (doesAccountExists) throw new ApiError(409, "Account already exists!");

  //3. Check if password matches
  if (password != confirmPassword)
    throw new ApiError("409", "Password doesn't match");

  //4. hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  //4. Create account
  const user = await User.create({
    fullname,
    email,
    username,
    password: hashedPassword,
  });
  //5. Send response to client
  return res
    .status(200)
    .json(new ApiResponse(200, "Account has been successfully created!"));
});

//2. login
const generateTokens = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    //before saving, the default is to check if every required field exists or not. So here we just care about saving the refreshToken.
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Error while generating tokens during login!");
  }
};
export const loginAccount = asyncHandler(async (req, res) => {
  //1. get the details
  const { username, password } = req.body;
  if (!username || !password)
    throw new ApiError(409, "Missing Credentials while login!");

  //2. check if user exists
  const user = await User.findOne({username});
  if (!user) throw new ApiError(404, "Invalid Credentials!");

  //3. check if password correct
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) throw new ApiError(404, "Invalid Credentails!");

  //4. generate tokens
  const { accessToken, refreshToken } = await generateTokens(user._id);

  //5. get user details
  const userDetails = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  // console.log(userDetails)
  //6. grant access
  const cookieOption = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOption)
    .cookie("refreshToken", refreshToken, cookieOption)
    .json(
      new ApiResponse(
        200,
        {
          user: userDetails,
          accessToken,
          refreshToken,
        },
        "User login successfull"
      )
    );
});

//3. forgot password
export const sendOTP = asyncHandler(async (req, res) => {
  //1. get the email
  const { email } = req.body;
  if (!email)
    throw new ApiError(401, "Email is required for OTP verification!");

  //2. check if email exists in db
  const user = await User.findOne({ email });
  if (!user) throw new ApiError(404, "Account doesn't exist");

  //3. generate otp
  const otp = user.generateOTP();
  console.log(otp);
  await user.save({ validateBeforeSave: false });

  //4. send otp
  const mailOptions = {
    from: {
      name: "Comity Team",
      address: process.env.NODEMAILER_MAIL_ID,
    },
    to: user.email,
    subject: "Password Reset OTP",
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <div style="font-size: 20px; font-weight: bold;">
          <span style="background: linear-gradient(90deg, #804dee, #f77eb9); color: transparent; background-clip: text">
            COMITY
          </span>
        </div>
      </div>
      <h2 style="color: #333; text-align: center;">Password Reset Request</h2>
      <p style="font-size: 16px; color: #555;">Dear ${user.fullname},</p>
      <p style="font-size: 16px; color: #555;">
        We received a request to reset your password. Please use the OTP below to reset your password.
      </p>
      <div style="text-align: center; margin: 20px 0;">
        <span style="display: inline-block; padding: 10px 20px; font-size: 20px; color: #fff; background-color: #34a853; border-radius: 5px;">
          ${otp}
        </span>
      </div>
      <p style="font-size: 16px; color: #555;">
        If you did not request a password reset, please ignore this email.
      </p>
      <p style="font-size: 16px; color: #555;">
        Best regards,<br>
        The Comity Team
      </p>
      <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #aaa;">
        <p>© 2024 Comity. All rights reserved.</p>
      </div>
    </div>
    `,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Failed to send OTP", err.message);
      return res
        .status(500)
        .json(new ApiError(500, "Failed to generate OTP for password reset"));
    } else
      return res
        .status(200)
        .json(new ApiResponse(200, {}, "OTP sent successfully!"));
  });
});
export const verifyAndChangePassword = asyncHandler(async (req, res) => {
  //1. get the mail, otp and password
  const { email, newPassword, otp } = req.body;
  if (!email || !newPassword || !otp)
    throw new ApiError(400, "Please enter the details to reset password");

  //2. check if user exists
  const user = await User.findOne({ email });
  if (!user) throw new ApiError(404, "EmailID entered is not found");

  //3. verify otp from databse
  const isOTPValid = user.validateOTP(otp);
  if (!isOTPValid) throw new ApiError(401, "OTP entered is incorrect!");

  //4. change the password
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await User.findByIdAndUpdate(
    user._id,
    {
      password: hashedPassword,
      $unset: { otp: 1 },
    },
    { new: true }
  ); //will be automatically hashed before saving.

  return res
    .status(200)
    .json(new ApiResponse(200, "Password reset is susccessfull!"));
});

//4. logout
export const logoutUser = asyncHandler(async (req, res) => {
  //1. get the user from req.user (from verifyJWT)
  const userId = req.user?._id;

  //2. access the user in db and unset refresh token
  const user = await User.findByIdAndUpdate(
    userId,
    {
      $unset: { refreshToken: 1 },
    },
    { new: true }
  );

  const cookieOption = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", cookieOption)
    .clearCookie("refreshToken", cookieOption)
    .json(new ApiResponse(200, {}, "User logged out Successfully!"));
});

//5. change password
export const changePassword = asyncHandler(async (req, res) => {
  //1. check if user is logged in
  const userId = req.user?._id;
  if (!userId) throw new ApiError(400, "You are not logged in!");

  //2. get old password, and new password
  const { oldPassword, newPassword, confirmPassword } = req.body;
  if (!oldPassword || !newPassword || !confirmPassword)
    throw new ApiError(409, "Missing details for password change");

  //3. check if the password matches
  if (newPassword !== confirmPassword)
    throw new ApiError(409, "Passwords doesn't match");

  //4. new password should not be equal to old password
  if (oldPassword === newPassword)
    throw new ApiError(403, "New password cannot be the same as the old one");

  //5. hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  //6. change password
  const user = await User.findByIdAndUpdate(userId, {
    password: hashedPassword,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, {}, "Password has been successfully changed"));
});
