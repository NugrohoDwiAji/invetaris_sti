import React,{useState} from "react";
import Button from "../components/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { signin } from "../services/auth.services";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [message, setmessage] = useState()

  const handleLogin = () => {
    const data = {
      email,
      password,
    };
    signin(data, (status, res) => {
      if (status) {
        localStorage.setItem("token",res);
        navigate("/landingPage/Mikrotik");
      } else {
        setmessage(res)
      }
    });
  };

  return (
    <div className=" static px-7 lg:flex lg:flex-row-reverse">
      <img src="/Logo.jpg" alt="" className="h-[180px] m-auto  lg:h-screen" />
      <div className="lg:px-36 lg:w-1/2  lg:mt-24">
        <h1 className="text-3xl font-bold my-5">Welcome Back</h1>
        <p>Selamat datang disistem inventaris devisi STI PLN UIW NTB.</p>
        <form action="" className="flex flex-col gap-2 mt-5">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
          onChange={(e)=>setemail(e.target.value)}
            id="email"
            type="email"
            name="email"
            className="inset-1 ring-1 ring-outlineinsert bg-fillInsert focus:bg-white h-8 py-1 px-2 outline-none rounded-md"
          />
          <label htmlFor="password" className="">
            Password
          </label>
          <input
          onChange={(e)=>setpassword(e.target.value)}
            id="password"
            type="password"
            name="password"
            className="inset-1 ring-1 ring-outlineinsert bg-fillInsert focus:bg-white h-8 p-1 outline-none rounded-md "
          />
          <h1 className="text-red-500 text-sm">{message}</h1>
          <div className="mt-10">
          <Button onClick={handleLogin}>Sign in</Button>
          </div>
        </form>
        <div className=" flex gap-2 items-center mt-4">
          <hr className="h-[3px] rounded-full w-full bg-gray-200" />
          <h3>OR</h3>
          <hr className="h-[3px] rounded-full bg-gray-200 w-full" />
        </div>
        <div className="flex gap-1 text-md mt-3">
          <h1>Dont't you have an account?</h1>
          <a href="/signup" className="text-blue-500">
            Sign Up
          </a>
        </div>
        <h1 className="text-gray-400 text-center mt-28 lg:mt-10">
          @2024 PLN RESERVED
        </h1>
      </div>
    </div>
  );
};

export default LoginPage;
