import { toast } from "sonner";
import AXIOS_CONFIG from '../utils/axiosConfig'

  
  export const getProcedures = async () => {
    try {
      const response = await AXIOS_CONFIG.get("procedures/procedures_list");
      return response.data.response; // Return the data correctly
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      return null; // Return null or handle errors appropriately
    }
  };




  export const createProcedure =  (data) =>{


    AXIOS_CONFIG.post("procedures/procedures_list/" , data).then((response)=>{
        toast("created ")
    }).catch((error)=>{
        toast(error.message)
    })


    
  }

  export const getProcedureDetails = async (procedure_id) =>{
    try{
      const response = await AXIOS_CONFIG.get(`procedures/procedure_details/${procedure_id}`)
      return response.data.response
    }catch(error){
      console.log(error)
        }
  }



  export const getProcedureSteps = async (procedure_id) =>{
    try{
      const response = await AXIOS_CONFIG.get(`procedures/procedure/${procedure_id}/steps`);
      return response.data.response
      console.log(response)
    }catch(error){
      console.log(error)
    }
  }
  


  export const createProcedureStep = async (procedure_id , procedureStepData) => {
    AXIOS_CONFIG.post(`procedures/procedure/${procedure_id}/steps` , procedureStepData)
    .then((response)=>{
      if(response.status === 200){
        toast("Procedure step added")
      }
    })
    .catch((error)=>{
      toast("an error has occured")
    })
  }



  export const getStepById = async (step_id) => {
    try{
      const response = await AXIOS_CONFIG.get(`procedures/procedure/steps/${step_id}`) ; 
      return response.data.response
    }catch(error){
      console.log(error)
    }
  }