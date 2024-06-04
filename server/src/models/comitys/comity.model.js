import mongoose, { Schema } from "mongoose";
import { Post } from "../comitys/post.model.js"
import { Like } from "../comitys/like.model.js"
import { Comment } from "../comitys/comment.model.js"
import { JoinRequest } from "../comitys/joinRequest.model.js"
import { Member } from "../comitys/member.model.js"
import { UserComityList } from "../user/userComitys.model.js"
const comitySchema = new Schema(
  {
    comityName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    profileImage:{
      type: String,
      required: true
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

//before deleting a comity, remove all it's related information
comitySchema.methods.removeAllComityData = async function() {
    const comityId = this._id;

    // Remove all posts related to the comity
    await Post.deleteMany({ comity: comityId });

    // Remove all comments related to the comity's posts
    await Comment.deleteMany({ comity: comityId });

    // Remove all likes related to the comity's posts
    await Like.deleteMany({ comity: comityId });

    // Remove all join requests related to the comity
    await JoinRequest.deleteMany({ comity: comityId });

    //Remove all members from the comity
    await Member.deleteMany({comity: comityId})

    // Remove the comity from all user comity lists
    await UserComityList.updateMany(
      { comitys: comityId },
      { $pull: { comitys: comityId } }
    );
};

export const Comity = mongoose.model("Comity", comitySchema);
