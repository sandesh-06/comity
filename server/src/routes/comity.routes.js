import { Router } from "express";
import { verifyJWT, upload } from "../middlewares/index.js";
import {
  createComity,
  deleteComity,
  getAllPendingRequests,
  getComityDetails,
  handleJoinRequest,
  updateComityDetails,
  updateComityImages,
} from "../controllers/comity.controller.js";

const router = Router();

//1. Create comity
router.post(
  "/create-comity",
  verifyJWT,
  upload.fields([
    {
      name: "profileImage",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  createComity
)
//2. get comity details
router.get("/get-comity-details/:comityId", verifyJWT, getComityDetails);
//3. delete comity
router.delete("/delete-comity/:comityId", verifyJWT, deleteComity);
//3. update comity details
router.patch(
  "/update-comity-details/:comityId",
  verifyJWT,
  updateComityDetails
);
//4. update comity images
router.patch(
  "/update-comity-images/:comityId",
  verifyJWT,
  upload.fields([
    {
      name: "profileImage",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  updateComityImages
);

//5. get all join request
router.get("/get-all-join-requests/:comityId", verifyJWT, getAllPendingRequests)
//6. handle join request
router.post("/handle-join-request/:requestId", verifyJWT, handleJoinRequest)

export default router;
