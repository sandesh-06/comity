import React from "react";

const EventSVG = ({ height, width }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill="#F4B400" />
        <path
          d="M7 2V6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 2V6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3 10H21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="7" y="13" width="2" height="2" rx="1" fill="white" />
        <rect x="11" y="13" width="2" height="2" rx="1" fill="white" />
        <rect x="15" y="13" width="2" height="2" rx="1" fill="white" />
        <rect x="7" y="17" width="2" height="2" rx="1" fill="white" />
        <rect x="11" y="17" width="2" height="2" rx="1" fill="white" />
        <rect x="15" y="17" width="2" height="2" rx="1" fill="white" />
      </svg>
    </>
  );
};

export default EventSVG;
