import React, { useState, useEffect, useRef } from "react";
import { GoHomeFill } from "react-icons/go";
import { MdTravelExplore, MdGroups } from "react-icons/md";
import EventIcon from "@mui/icons-material/Event";
import { ThemeButton } from "../index";
import { SiGithub } from "react-icons/si";
import ProfileMenu from "./ProfileMenu";
import { NavLink } from "react-router-dom";
const Header = () => {
  // STATES AND FUNCITONS
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const toggleShowMenu = () => {
    setShowProfileMenu((prevState) => !prevState);
  };

  const profileRef = useRef(null);
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
      path: "/",
    },
    {
      text: "Explore Comitys",
      icon: <MdTravelExplore size="30px" />,
      path: "/explore-comity",
    },
    {
      text: "Joined Comitys",
      icon: <MdGroups size="30px" />,
      path: "/my-comitys",
    },
    {
      text: "Events",
      icon: <EventIcon sx={{ fontSize: "30px" }} />,
      path: "/comity-events",
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full">
        <div className="bg-slate-50 dark:bg-slate-900 flex justify-between items-center h-16 sm:h-16 px-3 md:px-5 relative shadow-md">
          {/* Logo */}
          <NavLink to="/">
            <div className="hover:cursor-pointer">
              <h1 className="text-start">
                <span className="font-hamSmith text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  COMITY
                </span>
              </h1>
            </div>
          </NavLink>

          {/* NavItems */}
          <div className="h-full hidden sm:block w-full">
            <ul className="flex justify-center items-center h-full md:gap-4 xl:gap-10">
              {navItems.map((item) => (
                <li
                  key={item.text}
                  className="h-full flex items-center pt-4 w-24"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "border-b-2 border-b-purple-500 text-purple-500 dark:text-purple-400 dark:border-b-purple-400"
                          : "text-slate-700 dark:text-slate-300"
                      } hover:text-purple-500 hover:cursor-pointer group dark:hover:text-purple-400 w-full h-full`
                    }
                  >
                    <div className="flex flex-col items-center justify-center">
                      <p className="">{item.icon}</p>
                      <p className="hidden absolute group-hover:block bottom-[-30px] bg-purple-600 rounded-md font-cata font-semibold text-purple-100 my-1 px-2 bg-opacity-80">
                        {item.text}
                      </p>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme and profile */}
          <div className="text-slate-900 flex justify-end gap-7 md:gap-5 lg:gap-10 dark:text-white">
            {/* Github */}
            <div className="hover:cursor-pointer">
              <a
                href="https://github.com/sandesh-06"
                className="no-underline"
                target="_blank"
              >
                <SiGithub
                  size="30px"
                  className="hover:text-purple-500 dark:hover:text-purple-300"
                />
              </a>
            </div>

            {/* Profile */}
            {/* className = menu-item is to prevent the profile menu from closing if clicked inside menu */}
            <div
              className="menu-item rounded-full flex-none hover:cursor-pointer flex flex-col justify-between items-center gap-0"
              onClick={toggleShowMenu}
              ref={profileRef}
            >
              <img
                src="https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715594618/Comity/WhatsApp_Image_2024-05-13_at_15.33.30_8c5ee323_wxtxwk.jpg"
                alt=""
                className="h-[32px] w-[32px] rounded-full"
              />
            </div>

            {/* Profile Menu */}
            <ProfileMenu
              className={`${
                showProfileMenu ? "block" : "hidden"
              } absolute right-4 top-[3.5rem] md:right-28 menu-item z-50`}
            />

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
            <ul className="flex justify-center items-center h-full md:gap-4 xl:gap-10">
              {navItems.map((item) => (
                <li
                  key={item.text}
                  className="h-full flex items-center pt-4 w-24"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? " text-purple-500 dark:text-purple-400"
                          : "text-slate-700 dark:text-slate-300"
                      } hover:text-purple-500 hover:cursor-pointer group dark:hover:text-purple-400 w-full h-full`
                    }
                  >
                    <div className="flex flex-col items-center justify-center">
                      <p className="">{item.icon}</p>
                      <p className="hidden absolute group-hover:block bottom-[-30px] bg-purple-600 rounded-md font-cata font-semibold text-purple-100 my-1 px-2 bg-opacity-80">
                        {item.text}
                      </p>
                    </div>
                  </NavLink>
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
