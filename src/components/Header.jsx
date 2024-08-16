import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";
import Button from "./Button";
import { getRole } from "../services/auth.services";

const menu = [
  { text: "Mikrotik", link:"/landingPage/Mikrotik" },
  { text: "Cisco", link:"/landingPage/Cisco" },
  { text: "Fortiget", link:"/landingPage/Fortiget" },
  { text: "Junifer" ,link:"/landingPage/Junifer"},
  { text: "Alto" ,link:"/landingPage/Alto"},
  { text: "Access Point",link:"/landingPage/AccessPoint" },
];
const token = localStorage.getItem("token");
const Header = () => {
  const [hidemenu, sethidemenu] = useState(true);
  const [isAdmin, setisAdmin] = useState();
  const [canEdit, setcanEdit] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () =>{
    localStorage.removeItem("token");
    navigate("/")
  }
  const handleAdmin = () => {
    if (isAdmin === "admin") {
      setcanEdit(true);
    } else {
      setcanEdit(false);
    }
  };

  useEffect(() => {
    setisAdmin(getRole(token));
    handleAdmin()
  }, [isAdmin]);
  return (
    <div className="lg:flex lg:justify-between">
      <div className="hidden lg:flex bg-primary px-5 gap-5 h-16 ">
        <Button className="text-white hover:scale-110" onClick={handleLogout}>Log Out</Button>
      </div>
      <div className="hidden lg:h-16 w-[40rem] lg:flex  text-md justify-evenly text-secondary items-center border-b-primary border-b-2 ">
      {menu.map((item) => (
            <Button className=" hover:scale-105" onClick={()=>navigate(item.link)}>
              {item.text}
            </Button>
          ))}
      </div>
      <div className={canEdit?"":"hidden"}>
          <Button className="flex gap-2 justify-center items-center lg:h-fit lg:mt-5 hover:scale-110 text-primary " onClick={()=>navigate("/input")}>Add<FaSquarePlus /></Button>
      </div>
      <div
        className="bg-primary w-2/5 absolute left-0 top-16 p-3 rounded-br-xl  transform transition-transform z-50"
        hidden={hidemenu}
      >
        <div className="flex flex-col gap-3">
          {menu.map((item, index) => (
            <Button className="border-2 border-secondary rounded-lg text-white py-1 hover:scale-105" onClick={()=>navigate(item.link)}>
              {item.text} 
            </Button>
          ))}
        </div>
        <div className="flex gap-3 mt-5 ">
          <Button onClick={handleLogout}>Log Out</Button>
        </div>
      </div>
      <div className=" relative lg:static">
        <button
          className=" absolute mt-1 ml-2 lg:hidden"
          onClick={() => sethidemenu(!hidemenu)}
        >
          {hidemenu ? (
            <RxHamburgerMenu size={40} color="white" />
          ) : (
            <RxCross2 size={40} color="white" />
          )}
        </button>
        <img src="/header1.jpg" alt="" className="lg:h-20" />
      </div>
    </div>
  );
};

export default Header;
