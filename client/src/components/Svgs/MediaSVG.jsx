import React from "react";

const MediaSVG = ({height, width}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="#4285F4" />
        <circle cx="8" cy="8" r="2" fill="white" />
        <path d="M21 19L17 13L13 17L9 11L3 19H21Z" fill="white" />
      </svg>
    </>
  );
};

export default MediaSVG
