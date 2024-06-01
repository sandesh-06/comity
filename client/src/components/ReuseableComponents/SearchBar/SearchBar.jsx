import React from "react";
import './SearchBar.css'

import { FaSearch } from "react-icons/fa";
const SearchBar = ({divClass="", inputClass="", placeholder="Search Comity"}) => {
  return (
    <div className={`w-full ${divClass}`}>
      <div className={`searchBox bg-gray-200 dark:bg-gray-900 ${inputClass} shadow-md`}>
       <input
          className="searchInput font-cata font-semibold text-black dark:text-white placeholder:text-slate-500 placeholder:font-semibold w-3/4"
          type="text"
          name=""
          placeholder={placeholder}
        />
       <div className="w-1/4 text-end pr-1">
       <button className="searchButton bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-sm flex-none">
         <div className="flex justify-center items-center">
            <FaSearch  />
         </div>
        </button>
       </div>
      </div>
    </div>
  );
};

export default SearchBar;
