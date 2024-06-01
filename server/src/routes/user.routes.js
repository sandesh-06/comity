import { Router } from "express";
import { verifyJWT } from "../middlewares/verify.middleware.js";
import {
    changePassword,
    createAccount,
    loginAccount,
    logoutUser,
    sendOTP,
    verifyAndChangePassword
} from "../controllers/user.controller.js"

const router = Router()

//1. Create account
router.post("/create-account",createAccount);
//2. Login 
router.post("/login", loginAccount);
//3. Forgot password
router.post("/forgot-password/send-otp", sendOTP);
router.post("/forgot-password/verify-otp", verifyAndChangePassword);

//protected routes
//4. logout
router.post("/logout", verifyJWT, logoutUser);
//5. change password
router.post("/change-password", verifyJWT, changePassword);




export default router