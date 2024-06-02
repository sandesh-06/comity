import React from "react";
import { MdPublic, MdOutlinePublicOff } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ComityAbout = ({ className = "" }) => {
  return (
    <div
      className={`w-full mb-2 bg-white shadow-lg dark:bg-slate-900 rounded-lg sticky top-1 p-2 dark:text-slate-300 font-cata ${className}`}
    >
        {/* About */}
      <h2 className="text-2xl font-medium">About</h2>
      <div className="py-4 text-lg">
        <h2 className="dark:text-slate-200 font-bold">We Share Thoughts.</h2>
        <p>
          This comity is a comity for the comity by the people in the avalanche.
        </p>
      </div>

        {/* Comity Status */}
      <div className="my-2">
        <p className="flex gap-1 items-start text-lg">
          <MdPublic size={"28px"} className="flex-shrink-0"/>
          <p className="font-medium">
            <p>Public</p>
            <p>Anyone can see who's in the group and what they post.</p>
          </p>
        </p>
      </div>

      {/* Visible / no */}
      <div className="my-2">
        <p className="flex gap-1 items-start text-lg">
          <FaEye size={"25px"} />
          <p className="font-medium">
            <p>Visible</p>
            <p>Anyone can find this group.</p>
          </p>
        </p>
      </div>
    </div>
  );
};

export default ComityAbout;
