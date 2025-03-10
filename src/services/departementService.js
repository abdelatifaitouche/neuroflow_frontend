
import AXIOS_CONFIG from '../utils/axiosConfig'




export const getDepartement = async () =>{
    try{
        const response = await AXIOS_CONFIG.get("/departements_list")

        return response.data.departements

    }catch(error){
        console.log("error from department fetching" , error)
    }
}