import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "../index";
import { FaUser, FaLock } from "react-icons/fa";
const Login = ({showLogin, setShowLogin}) => {
  const { register, handleSubmit, control } = useForm();
  return (
    <div className="flex h-1/2 mx-auto bg-slate-700 rounded-lg shadow-2xl ">
      {/* The Image */}
      <div className="hidden flex-none w-1/3 sm:inline-block">
        <img
          src="https://res.cloudinary.com/sandesh-06/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1715449156/pexels-veeterzy-114979_tphtop.jpg"
          alt=""
          className="rounded-l-lg h-full"
        />
      </div>

      {/* The Form */}
      <div className="p-6 flex-1 flex flex-col justify-center max-w-fit md:px-6 rounded-l items-center">
        <h1 className="mb-6 text-center md:text-start">
          <span className="font-hamSmith text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            COMITY
          </span>
          <p className="text-slate-500 font-cata font-bold">
            Login to your account
          </p>
        </h1>
        <form action="" className="text-center">
          <Input
            label={<FaUser size="25px" />}
            placeholder="Username"
            className="text-white my-5 bg-transparent border-b border-black border-t-0 border-r-0 border-l-0 focus:bg-transparent focus:border-b-purple-500 placeholder:text-slate-500 w-60"
          />
          <Input
            label={<FaLock size="25px" />}
            type="password"
            placeholder="Password"
            className="text-white my-5 bg-transparent border-b border-black border-t-0 border-r-0 border-l-0 focus:bg-transparent focus:border-b-purple-500 placeholder:text-slate-500 w-60"
          />

          <Button
            type="submit"
            bgColor="bg-purple-300"
            className="font-cata font-semibold mt-2 hover:bg-purple-500 transition duration-300 ease-in-out"
          >
            Login
          </Button>
        </form>

        {/* Sign up cue */}
        <div className="mt-10">
          <p className="font-cata text-white text-sm lg:text-lg">
            Don't have an account? <span className="text-purple-400 italic hover:cursor-pointer hover:text-purple-300" onClick={(showLogin)=>setShowLogin(false)}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
