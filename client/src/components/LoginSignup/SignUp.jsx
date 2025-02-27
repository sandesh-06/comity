import React, { useState } from "react";
import { Input, Button } from "../index";
import { FaUser, FaLock, FaUnlock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useCreateAccountMutation } from "../../redux/apiSlices/users/userApiSlice";
import { useNavigate } from "react-router-dom";

const SignUp = ({setShowLogin}) => {
  const [msg, setMsg] = useState({
    status: false, //false - error; true - no error
    message: ""
  });

  const { register, handleSubmit, watch } = useForm();
  const watchFields = watch();
  const [createAccount, { isError, isLoading }] = useCreateAccountMutation();

  const SignupSubmit = async(formData) => {
    try {
      if(formData.password !== formData.confirmPassword){
        setMsg({message:"Passwords should match"})
      }
      else{
        const data = await createAccount(formData).unwrap();
        setMsg({status: true, message: "Account created successfully!"})
        setTimeout(() => {
          setShowLogin(true)
        }, 2000);
      };
    } catch (error) {
      console.log(error.data.message);
      setMsg({message:error.data.message})
    }
  };
  return (
    <div className="flex mx-auto justify-between">

      {/* The Form */}
      <div className="p-6 flex-2 flex flex-col justify-center max-w-fit md:px-6 rounded-l items-center">
        <h1 className="mb-6 text-center">
          <span className="font-hamSmith text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            COMITY
          </span>
          <p className="text-slate-500 font-cata font-bold">
            Create an account
          </p>
        </h1>
        {/* Error message */}
        {msg && msg.message &&  (<h1 className={`font-cata text-white text-md font-medium p-2 rounded-sm shadow-lg ${msg.status ? "bg-green-600" : "bg-red-600"}`}>{msg.message}</h1>)}
        <form onSubmit={handleSubmit(SignupSubmit)} className="text-center">
          <Input
            label={<MdDriveFileRenameOutline size="25px" />}
            placeholder="Full Name"
            type="text"
            className="text-white my-5 bg-transparent border-b border-black border-t-0 border-r-0 border-l-0 focus:bg-transparent focus:border-b-purple-500 placeholder:text-slate-500 w-60"
            required={true}
            {...register("fullname", { required: true })}
          />
          <Input
            label={<IoMail size="25px" />}
            placeholder="Email"
            type="email"
            className="text-white my-5 bg-transparent border-b border-black border-t-0 border-r-0 border-l-0 focus:bg-transparent focus:border-b-purple-500 placeholder:text-slate-500 w-60"
            required={true}
            {...register("email", { required: true })}
          />
          <Input
            label={<FaUser size="25px" />}
            placeholder="Username"
            className="text-white my-5 bg-transparent border-b border-black border-t-0 border-r-0 border-l-0 focus:bg-transparent focus:border-b-purple-500 placeholder:text-slate-500 w-60"
            required={true}
            {...register("username", { required: true })}
          />
          <Input
            label={<FaLock size="25px" />}
            type="password"
            placeholder="Password"
            className="text-white my-5 bg-transparent border-b border-black border-t-0 border-r-0 border-l-0 focus:bg-transparent focus:border-b-purple-500 placeholder:text-slate-500 w-60"
            required={true}
            {...register("password", { required: true })}
          />
          <Input
            label={
              watchFields.password === watchFields.confirmPassword ? (
                <FaLock size="25px" />
              ) : (
                <FaUnlock size="25px" />
              )
            }
            type="password"
            placeholder="Confirm Password"
            className="text-white my-5 bg-transparent border-b border-black border-t-0 border-r-0 border-l-0 focus:bg-transparent focus:border-b-purple-500 placeholder:text-slate-500 w-60"
            required={true}
            {...register("confirmPassword", { required: true })}
          />
          {watchFields && watchFields.confirmPassword !== watchFields.password ? (
            <div className="text-red-500">Password does not match</div>
          ) : (
            <div className="text-green-500">Password match</div>
          )}
          <Button
            type="submit"
            bgColor="bg-purple-300"
            className="font-cata font-semibold mt-2 hover:bg-purple-500 transition duration-300 ease-in-out"
          >
            Sign Up
          </Button>
        </form>

        {/* Sign up cue */}
        <div className="mt-10">
          <p className="font-cata text-white text-sm lg:text-lg">
            Already have an account?{" "}
            <span className="text-purple-400 italic hover:cursor-pointer hover:text-purple-300" onClick={()=>setShowLogin(true)}>
              Login
            </span>
          </p>
        </div>
      </div>

      {/* The Image */}
      <div className="hidden md:block flex-none w-1/3">
        <img
          src="https://res.cloudinary.com/sandesh-06/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1715449156/Comity/pexels-veeterzy-114979_tphtop.jpg"
          alt=""
          className="rounded-r-lg h-full"
        />
      </div>
    </div>
  );
};

export default SignUp;
