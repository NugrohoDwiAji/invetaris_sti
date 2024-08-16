import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBarang, getDetailBarang } from "../services/barang.services";

const DetailAlat = () => {
  const [dataBarang, setdataBarang] = useState({
    nama:"",
    noseri:"",
    tahun:"",
    mac:"",
    os:"",
    penempatan:"",
    deskripsi:"",
    jenis:"",
    file:""
  })
  const [respon, setrespon] = useState()
  const { id, nama } = useParams();

  useEffect(() => {
    getDetailBarang(id, nama, (res) => {
      if (!res) {
        console.log("belum ada respon")
      } else {
        setrespon(res)
        setdataBarang({
          nama:res[0].nama,
          noseri:res[0].no_seri,
          tahun:new Date(res[0].tahun).toISOString().split("T")[0],
          mac:res[0].mac_address,
          os:res[0].versi_os,
          penempatan:res[0].penempatan,
          deskripsi:res[0].deskripsi,
          jenis:id,
          file:res[0].img
        }); 
      }
    });
  }, [nama]);
 
  

  return (
    <div className="mt-10 px-7 lg:max-w-[800px] lg:m-auto">
      <img
        src={dataBarang.file}
        alt=""
        className="bg-gray-300 w-screen h-32 lg:h-[33rem] relative"
      />
      <h1 className="text-xl lg:text-2xl font-bold mt-3">
        {dataBarang.nama}
      </h1>
      <p className="text-sm lg:text-lg mt-3">
        {dataBarang.deskripsi}
      </p>
      <div className="mt-5 mb-20 text-sm lg:text-base flex flex-col gap-2 lg:w-[60%]  border-2 shadow-lg shadow-gray-300/50 rounded-lg p-4">
        <div className="grid grid-cols-2 ">
          <h1>Nomor Seri</h1>
          <h1>{dataBarang.noseri}</h1>
        </div>
        <div className="grid grid-cols-2">
          <h1>Mac Address </h1>
          <h1>{dataBarang.mac}</h1>
        </div>
        <div className="grid grid-cols-2">
          <h1>Versi OS </h1>
          <h1>{dataBarang.os}</h1>
        </div>
        <div className="grid grid-cols-2">
          <h1>Penempatan </h1>
          <h1>{dataBarang.penempatan}</h1>
        </div>
        <div className="grid grid-cols-2">
          <h1>Tahun Pembelian </h1>
          <h1>{dataBarang.tahun}</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailAlat;
