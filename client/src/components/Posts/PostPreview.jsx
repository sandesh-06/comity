// PostPreview.jsx
import React from "react";

const PostPreview = ({ post }) => {
  return (
    <div className="w-full h-full overflow-hidden cursor-pointer bg-white dark:bg-slate-900 rounded-md shadow-xl">
      {/* Username and profile */}
      <div className="p-2 flex gap-3 items-center">
        <div className="w-8 h-8 flex-shrink-0 overflow-hidden rounded-full">
          {" "}
          <img
            src={post.userImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <p className="dark:text-white font-medium hover:underline text-nowrap truncate">
          {post.username}
        </p>
        {/* Post content */}
      </div>
      {post.type === "image" ? (
        <img
          src={post.content}
          alt="Post"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full p-4 text-center dark:text-white">
          {post.content}
        </div>
      )}
    </div>
  );
};

export default PostPreview;
