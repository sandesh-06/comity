import React from "react";
import {Clickable} from "../index"
const ComityEvents = ({ className = "" }) => {
    const eventsReminder = [
        {
          event: "Members Meet Up",
          img: "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266157/cld-sample-5.jpg",
          timeRemaining: "2 days",
        },
        {
          event: "Verbal word play",
          img: "https://res.cloudinary.com/sandesh-06/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703266120/sample.jpg",
          timeRemaining: "5 days",
        },
      ];
  return (
    <div
      className={`w-full mb-2 bg-white dark:bg-slate-900 rounded-lg shadow-lg sticky top-1 p-2 dark:text-slate-300 font-cata ${className}`}
    >
         {/* Upcoming Events */}
         <div>
          <div className="">
            <p className="font-cata text-gray-500 font-semibold text-xl px-2 my-1">
              Upcoming Events
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
         {/* Recent Events */}
    </div>
  );
};

export default ComityEvents;
