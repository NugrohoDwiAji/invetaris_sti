import React,{useEffect, useState} from "react";
import CardAlat from "../components/CardAlat";
import { useParams } from "react-router-dom";
import { getBarang } from "../services/barang.services";
import { getRole } from "../services/auth.services";

const LandingPage = () => {
  const [dataBarang, setdataBarang] = useState([])
  

  const{judul} = useParams()
 

  useEffect(() => {
    
    getBarang(judul, (res)=>{
      setdataBarang(res)
    })
  }, [judul])
  

  return (
    <div className="p-3 flex flex-col items-center">
      <h1 className="text-center text-2xl font-bold pb-6">{judul}</h1>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-7 lg:gap-y-14 gap-x-2 lg:gap-x-10">
        {dataBarang.map((item,index)=>(
          <CardAlat title={item.nama} unit={item.penempatan} tahun={new Date(item.tahun).toISOString().split("T")[0]} img={item.img} key={index} link={item.link} id={item.id_barang} jenis={judul}/>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
