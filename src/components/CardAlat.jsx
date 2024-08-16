import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import {
  deleteBarang,
  getBarang,
  getDetailBarang,
} from "../services/barang.services";
import { getRole } from "../services/auth.services";

const token = localStorage.getItem("token");

const CardAlat = ({ title, unit, tahun, img, link, id, jenis }) => {
  const [isAdmin, setisAdmin] = useState();
  const [canEdit, setcanEdit] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!id && !jenis) {
      console.log("id atau jenis tidak ada");
    } else {
      deleteBarang(id, jenis, (res) => {
        console.log(res);
        window.location.reload();
      });
    }
  };

  const handleAdmin = () => {
    if (isAdmin === "admin") {
      setcanEdit(true);
    } else {
      setcanEdit(false);
    }
  };
  const handleUpdate = () => {
    navigate("/input");
    getDetailBarang(jenis, title, (res) => {
      localStorage.setItem("data", res);
    });
  };

  useEffect(() => {
    setisAdmin(getRole(token));
    handleAdmin();
  }, [isAdmin]);

  return (
    <button className="w-28 lg:w-48 hover:scale-105 hover:shadow-xl shadow-md rounded-lg pb-2 lg:pb-4">
      <img
        src={img}
        alt=""
        className="h-48 w-full"
        onClick={() => navigate(link)}
      />
      <div className="px-2">
        <h1 className="text-xs lg:text-sm font-semibold mt-2 text-start">
          {title}
        </h1>
        <div className="text-[0.6rem] lg:text-xs flex justify-between mt-4">
          <h3>{unit}</h3>
          <h3>{tahun}</h3>
        </div>
        <div
          className={`${
            canEdit ? "flex" : "hidden"
          } gap-2 mt-2 relative bottom-0 `}
        >
         
          <Button onClick={() => handleDelete()}>Delete</Button>
        </div>
      </div>
    </button>
  );
};

export default CardAlat;
