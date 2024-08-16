import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary h-40 lg:h-48 relative bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-3 px-12">
      <div className="flex flex-col items-center lg:gap-3">
        <img src="/Logo-pln.png" alt="" className="h-12 w-9 lg:h-16 lg:w-12" />
        <div className="flex text-sm lg:text-base text-white gap-3">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Contact Us</a>
        </div>
        <div></div>
      </div>
      <hr className=" bg-slate-300 w-full" />
      <h2 className="text-slate-100 text-[0.6rem] lg:text-sm">
        Copyright STI PLN UIW NTB
      </h2>
    </div>
  );
};

export default Footer;
