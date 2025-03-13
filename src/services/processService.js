import AXIOS_CONFIG from "@/utils/axiosConfig";







export const getProcess = async () => {
    try{
        const response = await AXIOS_CONFIG.get("teamflow/process")
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}