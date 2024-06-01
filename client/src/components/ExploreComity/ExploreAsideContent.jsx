import React, { useState } from "react";
import {Clickable, SearchBar} from "../index";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
const ExploreAsideContent = () => {
  const categories = [
    {
      icon: "🌐",
      category: "All"
    },
    {
      icon: "🎬",
      category: "Entertainment"
    },
    {
      icon: "💻",
      category: "Technology"
    },
    {
      icon: "⚽",
      category: "Sports & Fitness"
    },
    {
      icon: "✈️",
      category: "Travel"
    },
    {
      icon: "🍔",
      category: "Food"
    },
    {
      icon: "🎮",
      category: "Gaming"
    },
    {
      icon: "🎧",
      category: "Music"
    },
    {
      icon: "🎨", 
      category: "Art"
    },
    {
      icon: "📖",
      category: "Education"
    },
    {
      icon: "❤️",
      category: "Health"
    },
    {
      icon: "📈",
      category: "Business & Finance"
    }
  ];
  const TrendingComitys = [
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
  // expandable state for categories
  const [categoryExpand, setCategoryExpand] = useState(false)
  const toggleCategoryExpland = () => {
    setCategoryExpand((prev) => !prev)
  }
  return (
    <aside className="h-full px-3 py-2 overflow-y-auto custom-scrollbar">
      <div className="flex flex-col">
        {/* Search */}
        <div className='mb-3'>
            <SearchBar placeholder="Explore Comitys"/>
        </div>
        <hr className="border-b border-slate-300 dark:border-slate-700" />

        {/* Comity Categories */}
        <div className="flex flex-col my-3 text-nowrap">
          <p className="font-cata text-gray-500 font-semibold text-xl px-2 my-1">
            Comity Categories
          </p>
          <div className={`${categoryExpand ? "" : "max-h-80 overflow-hidden"}`}>
          {categories.map((category)=>(
            <div key={category.category} className="font-cata text-lg">
              <Clickable preText={category.icon} text={category.category}/>
            </div>
          ))}
          </div>
          <button className="font-cata dark:text-slate-100 font-semibold" onClick={toggleCategoryExpland}>{categoryExpand ? (<p className="flex gap-2 justify-center items-center"><MdExpandLess /><span>Show less</span></p>) : (<p className="flex gap-2 justify-center items-center"><MdExpandMore /><span>Show more</span></p>)}</button>
        </div>
        <hr className="border-b border-slate-300 dark:border-slate-700" />

        {/* Recent Events */}
        <div className="flex flex-col my-3 text-nowrap">
          <p className="font-cata text-gray-500 font-semibold text-xl px-2 my-1">
            Trending Comitys
          </p>
          {TrendingComitys.map((data) => (
            <div className="flex-none " key={data.title}>
              <Clickable
                className="flex-none text-lg"
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
      </div>
    </aside>
  );
};

export default ExploreAsideContent;
