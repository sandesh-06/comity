import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const Opening = () => {
  const [typeEffect] = useTypewriter({
    words: ["OMMUNITY", "OME UNITY", "OMITY"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 70,
  });

  return (
    <div className="flex flex-col w-full flex-wrap md:w-1/2  justify-center items-center relative">
      {/* The Type Effect */}
      <div className="text-[3rem] xl:text-[6rem] font-hamSmith text-purple-200 brightness-110">
        {typeEffect === "OMITY" ? (
          <span className="font-hamSmith text-[3rem] xl:text-[6rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text brightness-110">
            C{typeEffect}
          </span>
        ) : (
          <span>C{typeEffect}</span>
        )}
      </div>

      {/* Subheading */}
      <div className="">
        <p className="font-hamSmith italic text-[1.5rem] xl:text-[2rem] text-purple-50">
          For A Change
        </p>
      </div>
    </div>
  );
};

export default Opening;
