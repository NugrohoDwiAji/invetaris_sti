import axios from "axios";
import { jwtDecode } from "jwt-decode";

const host = import.meta.env.VITE_HOST;

export const signup = async (data, callback) =>{
    try {
        await axios.post(`${host}/signup`, data).then((res)=>{
            callback(res.data.datas)
        })
    } catch (error) {
        callback(error)
    }
}

export const signin = async (data, callback)=>{
    try {
        await axios.post(`${host}/signin`, data).then((res)=>{
            callback(true, res.data.datas)
        })
    } catch (error) {
        callback(false, "Periksa kembali email dan password")
    }
}

export const getRole = (token) => {
    if (!token || typeof token !== "string") {
      console.warn("Invalid or missing token");
      return null; // Mengembalikan null jika token tidak ada, bukan string, atau tidak valid
    }
  
    try {
      const decoded = jwtDecode(token);
      return decoded.role; // Asumsikan 'userName' adalah bagian dari payload JWT
    } catch (error) {
      console.error("Error decoding token:", error);
      return null; // Mengembalikan null jika terjadi kesalahan saat mendekode token
    }
  };