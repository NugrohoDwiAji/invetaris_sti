import React,{useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { inputBarang } from "../services/barang.services";




const InputPage = () => {
  const [response, setresponse] = useState()
  const [preview, setpreview] = useState("");
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

  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setdataBarang((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setpreview(URL.createObjectURL(file));
    setdataBarang((prevFile)=>({
      ...prevFile,
      file:file
    }))
};

const handleSubmit = ()=>{
  if (dataBarang.file) {
    
  } else {
    
  }
  console.log(dataBarang)
  inputBarang(dataBarang,(res)=>{
    setresponse(res.message)
  })
  setTimeout(() => {
    window.location.reload()
  }, 1500);
}

  return (
    <div className="px-10 pb-10 lg:flex lg:flex-col items-center">
      <h1 className="text-xl font-bold text-center my-5">Pengiputan Unit</h1>
      <form action="" className="flex flex-col gap-5 lg:flex-row">
        <div className="lg:w-96 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="nama">Nama Barang</label>
          <input
          onChange={handleChange}
            type="text"
            name="nama"
            className="inset-2 ring-2 ring-outlineinsert bg-fillInsert focus:bg-white h-8 p-1 outline-none rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="noseri">Serial Number</label>
          <input
          onChange={handleChange}
            type="text"
            name="noseri"
            className="inset-2 ring-2 ring-outlineinsert bg-fillInsert focus:bg-white h-8 p-1 outline-none rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tahun">Tahun</label>
          <input
          onChange={handleChange}
            type="date"
            name="tahun"
            className="inset-2 ring-2 ring-outlineinsert bg-fillInsert focus:bg-white h-8 p-1 outline-none rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="mac">mac Address</label>
          <input
          onChange={handleChange}
            type="text"
            name="mac"
            className="inset-2 ring-2 ring-outlineinsert bg-fillInsert focus:bg-white h-8 p-1 outline-none rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="os">Versi Os</label>
          <input
          onChange={handleChange}
            type="text"
            name="os"
            className="inset-2 ring-2 ring-outlineinsert bg-fillInsert focus:bg-white h-8 p-1 outline-none rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="penempatan">Penempatan Unit</label>
          <input
          onChange={handleChange}
            type="text"
            name="penempatan"
            className="inset-2 ring-2 ring-outlineinsert bg-fillInsert focus:bg-white h-8 p-1 outline-none rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="deskripsi">Deskripsi</label>
          <TextareaAutosize
          onChange={handleChange}
          name="deskripsi"
            minRows={4}
            maxRows={6}
            className="inset-2 ring-2 ring-outlineinsert bg-fillInsert focus:bg-white h-8 p-1 outline-none rounded-md"
            placeholder="Masukan Deskripsi Barang..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="jenis">Jenis</label>
          <select className="inset-2 ring-2 ring-outlineinsert bg-fillInsert focus:bg-white h-8 p-1 outline-none rounded-md" name="jenis" onChange={handleChange}>
            <option value="mikrotik">Mikrotik</option>
            <option value="cisco">Cisco</option>
            <option value="fortiget">Fortiget</option>
            <option value="junifer">Junifer</option>
            <option value="alto">Alto</option>
            <option value="accesspoint">Akses Point</option>
          </select>
        </div>
        </div>
        <div className="flex flex-col gap-2 lg:relative">
          <div className="lg:flex lg:flex-col">
          <label htmlFor="img">Img</label>
          <input type="file" name="file" id="file"className="my-3" onChange={handleFileChange} required title="Harus di isi"/>
          </div>
          <img
            src={preview}
            alt=""
            className="h-48 w-48 lg:h-56 lg:w-56 bg-fillInsert rounded-xl border-2 border-outlineinsert"
            hidden={preview ? false: true}
            
          />
        </div>

        <div className="flex gap-5">
        <Button className="py-2 bg-red-500 rounded-md  w-full text-white h-fit px-4" onClick={()=>navigate("/")}>Cancel</Button>
        <Button onClick={handleSubmit}>Create</Button>
        </div>
      </form>
      <div className="absolute top-44 bg-white">
      <h1 className="text-3xl text-green-400 p-4">{response}</h1>
      </div>
    </div>
  );
};

export default InputPage;
