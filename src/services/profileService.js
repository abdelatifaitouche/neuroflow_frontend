import axios from "axios";




const API_URL = 'http://127.0.0.1:8000/api/auth/';


const axiosInstance = axios.create({
    baseURL : 'http://127.0.0.1:8000/api/auth/' ,
    withCredentials : true , 
    headers: {
      "Content-Type": "application/json",
    },
  })



export const getProfile = async () => {
    try {
        const response = await axiosInstance.get('/profile');

        return response.data.profileData

    }catch(error){
        return error
    }
}