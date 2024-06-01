import mongoose, { Schema } from "mongoose";

const userComityListSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comitys: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comity",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const UserComityList = mongoose.model(
  "UserComityList",
  userComityListSchema
);
