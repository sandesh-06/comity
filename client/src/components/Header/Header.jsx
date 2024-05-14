import React, { useState, useEffect, useRef } from "react";
import { GoHomeFill } from "react-icons/go";
import { MdTravelExplore, MdGroups } from "react-icons/md";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { ThemeButton } from "../index";
import { SiGithub } from "react-icons/si";
import ProfileMenu from "./ProfileMenu";
const Header = () => {
  // STATES AND FUNCITONS
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const toggleShowMenu = ()=>{
    setShowProfileMenu((prevState)=> !prevState)
  }

  const profileRef  = useRef(null)
  // Function to handle click outside of menu and profile image
  const handleClickOutside = (event) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target) &&
      !event.target.classList.contains("menu-item")
    ) {
      setShowProfileMenu(false);
    }
  };
  useEffect(() => {
    // Attach event listener when the component mounts
    document.addEventListener("click", handleClickOutside);
    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const navItems = [
    {
      text: "Home",
      icon: <GoHomeFill size="30px" />,
    },
    {
      text: "Explore Comitys",
      icon: <MdTravelExplore size="30px" />,
    },
    {
      text: "Joined Comitys",
      icon: <MdGroups size="30px" />,
    },
    {
      text: "Events",
      icon: <BsFillCalendar2EventFill size="26px" />,
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full shadow-md ">
        <div className="bg-slate-50 dark:bg-slate-900 flex justify-between items-center h-16 sm:h-16 px-5 relative">
          {/* Logo */}
          <div className="w-1/3 sm:w-1/4 lg:w-1/6 hover:cursor-pointer">
            <h1 className="text-center md:text-start">
              <span className="font-hamSmith text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                COMITY
              </span>
            </h1>
          </div>

          {/* NavItems */}
          <div className="h-full hidden sm:block w-1/3 lg:w-1/4">
            <ul className="flex justify-evenly items-center h-full">
              {navItems.map((item) => (
                <li
                  key={item.text}
                  className="text-slate-700 hover:text-purple-500 hover:border-purple-500 w-1/4 h-full flex justify-center items-center mx-1 hover:border-b-4 hover:cursor-pointer group dark:text-slate-300 dark:hover:text-purple-300 dark:hover:border-b-purple-300 "
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
          <div className="text-slate-900 flex justify-end w-1/3 sm:w-1/4 lg:w-1/6 gap-7 md:gap-5 lg:gap-10 dark:text-white">

            {/* Github */}
            <div className="hover:cursor-pointer">
              <a href="https://github.com/sandesh-06" className="no-underline" target="_blank">
              <SiGithub size="30px" className="hover:text-purple-500 dark:hover:text-purple-300"/>
              </a>
            </div>

            {/* Profile */}
            {/* className = menu-item is to prevent the profile menu from closing if clicked inside menu */}
            <div className="menu-item rounded-full flex-none hover:cursor-pointer flex flex-col justify-between items-center gap-0" onClick={toggleShowMenu} ref={profileRef}>
                <img src="https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715594618/Comity/WhatsApp_Image_2024-05-13_at_15.33.30_8c5ee323_wxtxwk.jpg" alt="" className="h-[32px] w-[32px] rounded-full"/>
            </div>

            {/* Profile Menu */}
            <ProfileMenu className={`${showProfileMenu ? "block" : "hidden"} absolute right-4 top-[3.5rem] md:right-28 menu-item`}  />

            {/* Theme */}
            <div className="hidden md:block">
              <ThemeButton />
            </div>
          </div>
        </div>
      </header>

      {/* Nav Items in footer for mobile devices */}
      <footer className="sm:hidden fixed bottom-0 left-0 w-full shadow-sm dark:shadow-slate-700">
        <div className="bg-slate-50 dark:bg-slate-900 flex justify-between items-center h-16 px-5">
          {/* NavItems */}
          <div className="h-full w-full">
            <ul className="flex justify-evenly items-center h-full py-3">
              {navItems.map((item) => (
                 <li
                 key={item.text}
                 className="text-slate-700 hover:text-purple-500  w-1/4 h-full flex justify-center items-center mx-1 hover:cursor-pointer group dark:text-slate-300 dark:hover:text-purple-300 "
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
