import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdTravelExplore, MdGroups } from "react-icons/md";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { ThemeButton } from "../index";
import { SiGithub } from "react-icons/si";
const Header = () => {
  const navItems = [
    {
      text: "Home",
      icon: <GoHomeFill size="25px" />,
    },
    {
      text: "Explore Comitys",
      icon: <MdTravelExplore size="25px" />,
    },
    {
      text: "Joined Comitys",
      icon: <MdGroups size="29px" />,
    },
    {
      text: "Events",
      icon: <BsFillCalendar2EventFill size="20px" />,
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full shadow-md shadow-slate-700">
        <div className="bg-slate-900 flex justify-between items-center h-16 sm:h-20 px-5 relative">
          {/* Logo */}
          <div className="w-1/3 sm:w-1/4 lg:w-1/6">
            <h1 className="text-center md:text-start">
              <span className="font-hamSmith text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                COMITY
              </span>
            </h1>
          </div>

          {/* NavItems */}
          <div className="h-full hidden sm:block w-1/3 lg:w-1/4">
            <ul className="flex justify-evenly items-center h-full py-3">
              {navItems.map((item) => (
                <li
                  key={item.text}
                  className="text-slate-300 w-1/4 h-full flex justify-center items-center mx-1 hover:text-purple-300 hover:border-b-4 hover:border-b-purple-300 hover:cursor-pointer group"
                >
                  <div className="flex flex-col items-center justify-center">
                    <p className="mr-1">{item.icon}</p>
                    <p className="hidden absolute group-hover:block bottom-[-30px] bg-purple-600 rounded-md font-cata font-semibold text-purple-100 my-1 px-2">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme and profile */}
          <div className="text-white flex w-1/3 sm:w-1/4 lg:w-1/6 justify-evenly lg:justify-between space-x-8 lg:space-x-0">

            {/* Profile */}
            <div className="rounded-full">
                <img src="https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715594618/Comity/WhatsApp_Image_2024-05-13_at_15.33.30_8c5ee323_wxtxwk.jpg" alt="" className="h-[32px] w-[32px] rounded-full"/>
            </div>

            {/* Github */}
            <div><SiGithub size="30px" className="hover:text-purple-300"/></div>

            {/* Theme */}
            <div className="hidden md:block">
              <ThemeButton />
            </div>
          </div>
        </div>
      </header>

      {/* Nav Items in footer for mobile devices */}
      <footer className="sm:hidden fixed bottom-0 left-0 w-full shadow-sm shadow-slate-700">
        <div className="bg-slate-900 flex justify-between items-center h-16 px-5">
          {/* NavItems */}
          <div className="h-full w-full">
            <ul className="flex justify-evenly items-center h-full py-3">
              {navItems.map((item) => (
                <li
                  key={item.text}
                  className="text-slate-300 w-1/4 h-full flex justify-center items-center mx-1 hover:text-purple-300  hover:cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center">
                    <p className="mr-1">{item.icon}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Header;
