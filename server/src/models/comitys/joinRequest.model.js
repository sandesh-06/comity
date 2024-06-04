import mongoose, { Schema } from "mongoose";

const joinRequestSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comity: {
      type: Schema.Types.ObjectId,
      ref: "Comity",
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    }
  },
  { timestamps: true }
);

export const JoinRequest = mongoose.model("JoinRequest", joinRequestSchema);
