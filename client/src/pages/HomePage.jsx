import React from "react";
import { LeftContent } from "../components";

const HomePage = () => {
  return (
    <main className="w-screen h-screen overflow-y-auto  pt-16 bg-slate-100 dark:bg-slate-800">
      <div>
        {/* Left Side Contents */}
        <LeftContent/>
        {/* Posts */}

        {/* Right Side Contents */}
      </div>
    </main>
  );
};

export default HomePage;
