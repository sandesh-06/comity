import React from "react";
import { LoginWithSignup, Opening, Footer } from "../components";

const OpeningPage = () => {
  return (
    <main className="flex flex-col justify-between min-h-screen bg-opening bg-cover">
      <div></div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Opening />
        <LoginWithSignup />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default OpeningPage;
