import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
const PostCard = ({ post }) => {
  return (
    <div className="bg-slate-50 shadow-xl dark:bg-slate-900 dark:shadow-md rounded-lg w-full lg:w-4/5 my-2 pb-5 text-slate-800 dark:text-slate-100 font-cata lett">
      {/* Post header */}
      <div className="p-4 flex items-center pb-0">
        <img
          className="rounded-full"
          src={post.userImage}
          alt={post.username}
          width={"35px"}
          height={"35px"}
        />
        <div className="ml-1 w-full flex justify-between items-center">
          <h2 className="font-semibold dark:text-slate-300">{post.username}</h2>
          <p className="text-gray-600 dark:text-slate-500 font-semibold">
            {post.date}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="px-5 dark:text-slate-100 pb-3 text-black font-medium">
        <p className="mt-5">{post.content}</p>
      </div>

      {/* Image */}
      {post.postImage ? (
        <div className="w-full h-[50vh] sm:h-[60vh] flex items-center justify-center bg-gray-300 dark:bg-[#000000bf] flex-none ">
          <img
            className="w-full max-h-full object-contain"
            src={post.postImage}
            alt="Post"
          />
        </div>
      ) : (
        ""
      )}

      {/* Like, comment, save option */}
      <div className=" px-4 flex flex-col justify-between items-center">
        {/* Likes and comment count */}
        <div className="w-full flex justify-between border-b border-b-slate-600 py-2 text-slate-700 dark:text-slate-300 font-ubuntu">
          <p>{post.likes} likes</p>
          <p>4 comments</p>
        </div>
        <div className="flex w-full justify-evenly pt-3 font-semibold text-gray-600 dark:text-slate-500">
          <button className="  mr-4 flex justify-end items-center gap-1 text-lg">
            <FaRegHeart size={"25px"} />
            <span>Like</span>
          </button>
          <button className="  mr-4 flex justify-end items-center gap-1 text-lg">
            <FaRegComment size={"25px"} />
            <span>Comment</span>
          </button>
          <button className="flex justify-end items-center gap-1 text-lg">
            <FaRegBookmark size={"25px"} />
            <span>Save</span>
          </button>
        </div>
      </div>

      {/* <div className="p-4 bg-slate-900">
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 rounded-full"
            src={post.comments[0].userImage}
            alt={post.comments[0].username}
          />
          <div className="ml-4">
            <h3 className="font-bold">{post.comments[0].username}</h3>
            <p>{post.comments[0].content}</p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={post.comments[1].userImage}
            alt={post.comments[1].username}
          />
          <div className="ml-4">
            <h3 className="font-bold">{post.comments[1].username}</h3>
            <p>{post.comments[1].content}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PostCard;
