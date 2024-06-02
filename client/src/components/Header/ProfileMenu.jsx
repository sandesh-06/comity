import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { ThemeButton, ProfileName } from "../index";
import { useLogoutMutation } from "../../redux/apiSlices/users/userApiSlice";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/stateSlices/authSlice";
import {createPortal} from 'react-dom'

const ProfileMenu = ({ className = "" }) => {
  const menuList = [
    {
      text: "Profile Settings",
      link: "",
    },
    {
      text: "Help and Support",
      link: "",
    },
    {
      text: "Give Feedback",
      link: "",
    },
    {
      text: "Logout",
      link: "",
    },
  ];
  const [logout, { isError, isLoading }] = useLogoutMutation();

  const dispatch = useDispatch()
  const handleLogOut = async()=>{
    try {
      const response = await logout().unwrap()
      if(response.success) dispatch(logoutUser())
    } catch (error) {
      // console.log(error)
    }
  }
  return (
    // PORTAL IS USED TO RENDER THE COMPONENT AT ANY SPECIFIC PLACE IN THE DOM TREE, HERE WE ARE RENDERING IT AT BODY, THIS IS DONE TO ACHIEVE THE STACKING CONTEXT.
    createPortal(<menu className={`${className} w-1/2 sm:w-1/3 lg:w-1/5 absolute`}>
      <div className="menu-item bg-white shadow-md shadow-gray-300 dark:shadow-black text-slate-700 dark:bg-slate-900 dark:text-slate-50 font-semibold font-cata p-3 rounded-lg">
        {/* Profile */}
        <ProfileName className="px-2 py-3" />
        {/* Toggle Theme for mobile */}
        <div className="menu-item w-full flex items-center justify-between px-2 md:hidden">
          <p className="menu-item">Theme</p>
          <ThemeButton />
        </div>
        {/* Menu Items */}
        <div className="menu-item mt-3 text-[1rem]">
          <ul className="menu-item">
            {menuList.map((item) => (
              <div
                key={item.text}
                className="menu-item my-2 py-3 px-2 flex justify-between items-center rounded-md hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700"
              >
                {item.text === "Logout" ? (
                  <button onClick={handleLogOut} className="flex justify-between w-full">
                    <li className="menu-item">{item.text}</li> 
                    <MdLogout size="20px"/>
                  </button>
                ) : (
                    <>
                    <li className='menu-item'>{item.text}</li>
                    <FaChevronRight />
                    </>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </menu>,
    document.body
  )
)
};

export default ProfileMenu;
