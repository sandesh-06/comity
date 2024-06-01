import React from "react";
import { useSelector } from "react-redux";

const ProfileName = ({className=""}) => {
  const userDetails = useSelector((state)=>state.auth.user)
  console.log("user", userDetails)
  return (
    <div className={`font-cata flex gap-6 rounded-md items-center text-lg hover:bg-gray-200 dark:hover:bg-slate-700 hover:cursor-pointer text-slate-700 dark:text-slate-50 ${className}`}>
      <img
        src="https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715594618/Comity/WhatsApp_Image_2024-05-13_at_15.33.30_8c5ee323_wxtxwk.jpg"
        alt=""
        width="30px"
        height="30px"
        className="rounded-full"
      />
      <p className="">{userDetails?.fullname}</p>
    </div>
  );
};

export default ProfileName;
