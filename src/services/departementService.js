import axios from "axios";





const axiosInstance = axios.create({
    baseURL : 'http://127.0.0.1:8000/api/departements/' ,
    withCredentials : true , 
    headers: {
      "Content-Type": "application/json",
    },
  })



export const getDepartement = async () =>{
    try{
        const response = await axiosInstance.get("/departements_list")

        return response.data.departements

    }catch(error){
        console.log("error from department fetching" , error)
    }
}