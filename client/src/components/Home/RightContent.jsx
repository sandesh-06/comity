import React from "react";
import { Clickable, SearchBar } from "../index";
import { FaBookmark } from "react-icons/fa";

const RightContent = () => {
  const eventsReminder = [
    {
      event: "Beach Cleaning",
      img: "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266157/cld-sample-5.jpg",
      timeRemaining: "2 days",
    },
    {
      event: "Long Time No See!",
      img: "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266120/sample.jpg",
      timeRemaining: "5 days",
    },
    {
      event: "Beach Cleaning",
      img: "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266157/cld-sample-5.jpg",
      timeRemaining: "2 days",
    },
    {
      event: "Long Time No See!",
      img: "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266120/sample.jpg",
      timeRemaining: "5 days",
    },
  ];

  const myComitys = [
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
  ];
  return (
    <aside className="max-h-[calc(100vh-8vh)] px-3 overflow-y-scroll scroll-smooth custom-scrollbar lg:w-4/5">
      <div className="flex flex-col">
        {/* Search */}
        <div className="w-full flex justify-end mt-2">
          <SearchBar divClass="flex-none" />
          {/* <input type="search" name="" id="" /> */}
        </div>
        <hr className="border-b border-slate-300 dark:border-slate-700 my-4" />

        {/* Saved Posts */}
        <div className="">
          <div className=" text-xl">
            <Clickable
              className="px-4 text-nowrap"
              text="Saved Posts"
              postText={<FaBookmark />}
            />
          </div>
        </div>
        <hr className="border-b border-slate-300 dark:border-slate-700 my-4" />

        {/* Event reminders */}
        <div>
          <div className="">
            <p className="font-cata text-gray-500 font-semibold text-xl px-2 my-1">
              Event Reminder
            </p>
            {eventsReminder.map((event) => (
              <div className="" key={event.event}>
                <Clickable
                  innerClass="truncate"
                  text={event.event}
                  preText={
                    <img
                      className="rounded-full"
                      src={event.img}
                      width="30px"
                      height="30px"
                    />
                  }
                  postText={
                    <p className="text-slate-500 text-nowrap px-2">
                      in {event.timeRemaining}
                    </p>
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <hr className="border-b border-slate-300 dark:border-slate-700 my-4" />

        {/* comity quick access */}
        <div>
          <div className="w-full truncate">
            <p className="font-cata text-gray-500 font-semibold text-xl px-2 my-1 text-nowrap">
              Comity Quick Access
            </p>
            {myComitys.map((data) => (
            <div className="flex-none" key={data.title}>
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
        </div>
      </div>
    </aside>
  );
};

export default RightContent;
