import mongoose, { Schema } from "mongoose";


const comitySchema = new Schema(
  {
    comityname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
    },
    profileImage:{
      type: String,
    },
    coverImage:{
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    isPrivate:{
        type: Boolean,
        required: true
    },
    category:{
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);


export const Comity = mongoose.model("Comity", comitySchema);
