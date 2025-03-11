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



  export const deleteProcedure = async (procedure_id) => {
    try {
      const response = await AXIOS_CONFIG.delete(`procedures/procedure_details/${procedure_id}`);
      return response.status === 204; // Return `true` if successfully deleted
    } catch (error) {
      console.error("Delete failed:", error);
      return false;
    }
  };


  export const getProcedureSteps = async (procedure_id) =>{
    try{
      const response = await AXIOS_CONFIG.get(`procedures/procedure/${procedure_id}/steps`);
      return response.data.response
      console.log(response)
    }catch(error){
      console.log(error)
    }
  }
  


  export const createProcedureStep = async (procedure_id, procedureStepData) => {
    try {
      const response = await AXIOS_CONFIG.post(
        `procedures/procedure/${procedure_id}/steps`, 
        procedureStepData
      );
  
      if (response.status === 201) {  // Use 201 for "Created" instead of 200
        toast.success("Procedure step added");
        return response.data;  // Return data to use it in the calling function
      }
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      toast.error("An error has occurred. Check console for details.");
      throw error;  // Rethrow for better error handling in the caller
    }
  };


  export const getStepById = async (step_id) => {
    try{
      const response = await AXIOS_CONFIG.get(`procedures/procedure/steps/${step_id}`) ; 
      return response.data.response
    }catch(error){
      console.log(error)
    }
  }