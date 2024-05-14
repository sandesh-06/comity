import React from "react";
import { ProfileName, Clickable } from "../index";
import { MdGroupAdd } from "react-icons/md";
const LeftContent = () => {
  const dummySuggestionData = [
    {
      img: "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266157/cld-sample-4.jpg",
      title: "Fitness Freaks",
    },
    {
      img: "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266156/cld-sample-3.jpg",
      title: "Let's go drive!",
    },
    {
      img: "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266156/cld-sample-2.jpg",
      title: "We share thoughts.",
    },
    {
      img: "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266157/cld-sample-4.jpg",
      title: "Mematorians",
    },
    {
      img: "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266156/cld-sample-3.jpg",
      title: "SportzMen",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col h-full px-3 w-1/5 my-2">
        {/* Profile */}
      <div className="dark:border-b-gray-600 text-center">
        <ProfileName className="px-2 py-4 font-semibold dark:text-slate-100" />
      </div>
      <hr className="border-b border-slate-300 dark:border-slate-700" />

      {/* Comity Suggestions */}
      <div className="flex flex-col my-3 text-nowrap">
        <p className="font-cata text-gray-500 font-semibold text-xl px-2 my-1">
          Comity Suggestions
        </p>
        {dummySuggestionData.map((data) => (
          <div className="flex-none" key={data.title}>
            <Clickable
              className="flex-none"
              preText={
                <img
                  className="rounded-full"
                  src={data.img}
                  width="30px"
                  height="30px"
                />
              }
              text={data.title}
            />
          </div>
        ))}
      </div>
      <hr className="border-b border-slate-300 dark:border-slate-700" />

      {/* Recent Events */}
      <div className="flex flex-col my-3 text-nowrap">
        <p className="font-cata text-gray-500 font-semibold text-xl px-2 my-1">
          Recent Events
        </p>
        {dummySuggestionData.map((data) => (
          <div className="flex-none" key={data.title}>
            <Clickable
              className="flex-none"
              preText={
                <img
                  className="rounded-full"
                  src={data.img}
                  width="30px"
                  height="30px"
                />
              }
              text={data.title}
            />
          </div>
        ))}
      </div>
      <hr className="border-b border-slate-300 dark:border-slate-700" />

      {/* Start Comity Button */}
      <div className="font-cata text-lg px-2 mt-5 font-bold hover:cursor-pointer text-nowrap flex-none">
        <div className="flex gap-2 items-center bg-gray-300 text-slate-800 hover:bg-gray-200 dark:text-slate-50 dark:bg-slate-600 px-3 py-2 rounded-md dark:hover:bg-slate-700 xl:w-3/4">
          <div>
            <MdGroupAdd size="25px"/>
          </div>
          <button>Start A Comity</button>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
