import mongoose, { Schema } from "mongoose";


const postSchema = new Schema(
  {
    comity: {
      type:  Schema.Types.ObjectId,
      ref: 'Comity',
      required: true,
    },
    content:{
        type: String,
        required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    description:{
        type: String,
    }
  },
  { timestamps: true }
);


export const Post = mongoose.model("Post", postSchema);
