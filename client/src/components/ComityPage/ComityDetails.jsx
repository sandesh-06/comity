import React from "react";
import { MdPublic, MdOutlinePublicOff } from "react-icons/md";
const ComityDetails = () => {
  // Posts, member, status section
  const det = [
    {
      top: "23",
      bottom: "posts",
    },
    {
      top: "11k",
      bottom: "members",
    },
    {
      top: "3",
      bottom: "events",
    },
  ];
  return (
    <div className="w-full font-cata dark:text-slate-50 text-slate-950 flex flex-col-reverse sm:flex-row-reverse md:flex-row gap-3 sm:gap-20 justify-between sm:justify-center items-center py-10 px-5 shadow-lg bg-[#ffffffbb] dark:bg-[#0f172acd]">
      {/* Details Part */}
      <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
        <p className="hidden md:block text-3xl font-bold">We share thoughts.</p>
        {/* Posts, Members, Status */}
        <div className="flex gap-3 sm:gap-8 font-sans text-xl sm:text-2xl">
          {det.map((item) => (
            <p key={item.bottom} className="flex gap-1 sm:gap-2">
              <span className="font-semibold">{item.top}</span>
              <span className="text-slate-600 dark:text-slate-400 font-medium">
                {item.bottom}
              </span>
            </p>
          ))}
        </div>
        <p className="sm:hidden font-semibold text-lg drop-shadow-sm">
          This comity is a comity for the comity by the people in the avalanche.
        </p>
        {/* Join & Role */}
        <div className="px-2 sm:px-0 flex mt-2 gap-8 text-2xl w-full justify-center md:justify-start">
          <button className="bg-purple-500 hover:bg-purple-600 w-full py-2 rounded-md font-medium text-slate-100 dark:text-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            Join Comity
          </button>
        </div>

        {/* Description between for sm  */}
        {/* <p className="hidden sm:block md:hidden font-semibold text-lg">
      This comity is a comity for the comity by the people in the avalanche.
    </p> */}
      </div>

      {/* Image Part */}
      <div className="flex flex-col items-center gap-3">
        {/* Image & Name */}
        <p className="dark:text-slate-200 font-bold text-2xl sm:hidden">
          We Share Thoughts.
        </p>
        <div className="w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden rounded-full shadow-lg">
          <img
            src="https://res.cloudinary.com/sandesh-06/image/upload/v1703266151/samples/man-on-a-street.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Comity name for sm */}
        <p className="dark:text-slate-200 font-bold text-xl text-nowrap hidden sm:block md:hidden">
          We Share Thoughts.
        </p>
      </div>
    </div>
  );
};

export default ComityDetails;
