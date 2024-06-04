import React from "react";
import {
  ComityDetails,
  ComityPosts,
  ComityAbout,
  ComityEvents,
} from "../../components";
const ComityPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Comity Details (Top section) */}
      <div style={{ backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?nature)' }} className="w-full flex justify-center bg-no-repeat bg-cover">
        <ComityDetails />
      </div>

      {/* About comity (left section) */}
      <div className="w-full flex justify-between gap-2 sm:px-2 py-2">
        <div className="w-1/3 hidden lg:block">
          <ComityAbout />
        </div>

        {/* Comity posts */}
        <ComityPosts />

        {/* Comity events (right) */}
        <div className="w-1/3 hidden md:block">
          <ComityEvents />
        </div>
      </div>
    </div>
  );
};

export default ComityPage;
