import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, //to optimize searching in db
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    profilePicture: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    otp:{type:String},
    savedPosts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true,
      },
    ],
  },
  { timestamps: true }
);


//CUSTOM METHOS
//1. To verify the password
userSchema.methods.isPasswordCorrect = async function (password) {
  const res = await bcrypt.compare(this.password, password)
  console.log(res)
  return res;
  //return a boolean
};

//2. writing our own method in mongoose to generate access and refresh token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    //payload
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },

    //secret code
    process.env.ACCESS_TOKEN_SECRET,

    //expiry time
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    //payload
    {
      _id: this._id,
    },

    //secret code
    process.env.REFRESH_TOKEN_SECRET,

    //expiry time of refresh is usually greater than access
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

//3. OTP generation and verification
userSchema.methods.generateOTP = function () {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  this.otp = otp;
  return otp;
};

userSchema.methods.validateOTP = function (otp) {
  return this.otp === otp
};
export const User = mongoose.model("User", userSchema);
