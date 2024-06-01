import React from "react";

const ThoughtsSVG = ({ height, width }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 8C2 5.23858 4.23858 3 7 3H17C19.7614 3 22 5.23858 22 8V14C22 16.7614 19.7614 19 17 19H6.5L3 21.5V8Z"
          fill="#34A853"
        />
        <path
          d="M7 8H17"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7 11H17"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7 14H13"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default ThoughtsSVG;
