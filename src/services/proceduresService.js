import axios from "axios";
import { navigate } from "react-router-dom";
import { toast } from "sonner";



const API_URL = 'http://127.0.0.1:8000/api/procedures/procedures_list/';


const axiosInstance = axios.create({
    baseURL : 'http://127.0.0.1:8000/api/procedures/' ,
    withCredentials : true , 
    headers: {
      "Content-Type": "application/json",
    },
  })


  
  export const getProcedures = async () => {
    try {
      const response = await axiosInstance.get("/procedures_list");
      return response.data.response; // Return the data correctly
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      return null; // Return null or handle errors appropriately
    }
  };




  export const createProcedure =  (data) =>{


    axiosInstance.post("/procedures_list/" , data).then((response)=>{
        toast("created ")
        navigate(-1)
    }).catch((error)=>{
        toast(error.message)
    })


    
  }

  