import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayouts = ({ showHader }) => {
  return (
    <div>
      {showHader && <Header/>}
      <Outlet />
      {showHader && <Footer/>}
    </div>
  );
};

export default MainLayouts;
