import React from "react";
import Button from "../components/Button";
import { signup } from "../services/auth.services";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
const navigate = useNavigate()

  const [username, setusername] = useState()
const [email, setemail] = useState()
const [password, setpassword] = useState()

const handleSignup = async()=>{
  const data ={
    username,
    email,
    password
  };
  signup(data,(res)=>{
    console.log(res)
    alert(res)
    navigate("/")

  })
}

  return (
    <div className="px-7 lg:flex lg:flex-row-reverse">
      <img src="/Logo.jpg" alt="" className="h-[180px] m-auto  lg:h-screen" />
      <div className="lg:px-36 lg:w-1/2  lg:mt-5">
        <h1 className="text-3xl font-bold my-5">Sign Up</h1>
        <p>Silahkan daftarkan akun anda.</p>
        <form action="" className="flex flex-col gap-2 mt-5">
          <label htmlFor="username" >
            Username
          </label>
          <input
          onChange={(e)=>setusername(e.target.value)}
            type="email"
            name="username"
            className="inset-2 ring-2 ring-outlineinsert bg-fillInsert focus:bg-white h-8 p-1 outline-none rounded-md"
          />
          <label htmlFor="email">
            Email
          </label>
          <input
          onChange={(e)=>setemail(e.target.value)}
            type="email"
            name="email"
            className="inset-2 ring-2 ring-outlineinsert bg-fillInsert focus:bg-white h-8 p-1 outline-none rounded-md"
          />
          <label htmlFor="password" >
            Password
          </label>
          <input
          onChange={(e)=>setpassword(e.target.value)}
            type="password"
            name="password"
            className="inset-2 ring-2 ring-outlineinsert bg-fillInsert focus:bg-white h-8 p-1 outline-none rounded-md"
          />
          {/* <label htmlFor="confirmpass">
            Confirom Password
          </label>
          <input
            type="password"
            name="confirmpass"
            className="inset-2 ring-2 ring-outlineinsert bg-fillInsert focus:bg-white h-8 p-1 outline-none rounded-md "
          /> */}
          <Button onClick={handleSignup}>Sign Up</Button>
        </form>
        <div className=" flex gap-2 items-center mt-4">
          <hr className="h-[3px] rounded-full w-full bg-gray-200" />
          <h3>OR</h3>
          <hr className="h-[3px] rounded-full bg-gray-200 w-full" />
        </div>
        <div className="flex gap-1 text-md mt-3">
          <h1>You have an account?</h1>
          <a href="/" className="text-blue-500">
            Sign In
          </a>
        </div>
        <h1 className="text-gray-400 text-center mt-28 lg:hidden">
          @2024 PLN RESERVED
        </h1>
      </div>
    </div>
  );
};

export default SignupPage;
