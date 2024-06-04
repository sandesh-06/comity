import mongoose, { Schema } from "mongoose";

const memberSchema = new Schema(
  {
    comity: {
      type: Schema.Types.ObjectId,
      ref: "Comity",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["owner", "member"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Member = mongoose.model("Member", memberSchema);
