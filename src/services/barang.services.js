import axios from "axios";

const host = import.meta.env.VITE_HOST;

export const inputBarang = async(data, callback) => {
try {
    await axios.post(`${host}/barang`, data, {
        headers:{
          "Content-Type":"multipart/form-data"
        }
    }).then((res)=>{
        callback(res.data)
    })
} catch (error) {
    callback(error)
}

}

export const getBarang = async(data, callback) =>{
    try {
        await axios.get(`${host}/barang/${data}/`).then((res)=>{
            callback(res.data.datas)
        })
    } catch (error) {
        callback(error)
    }
}

export const getDetailBarang = async(id, nama, callback) =>{
    try {
        await axios.get(`${host}/barang/${id}/${nama}`).then((res)=>{
            callback(res.data.datas)
        })
    } catch (error) {
        callback(error)
    }
}

// DELETE
export const deleteBarang = async(id,tb , callback) =>{
    try {
        await axios.delete(`${host}/barang/delete/${id}/${tb}`,  ).then((res)=>{
            callback(res)
        })
    } catch (error) {
        callback(error)
    }
}