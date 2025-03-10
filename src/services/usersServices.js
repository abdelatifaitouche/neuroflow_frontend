import AXIOS_CONFIG from '../utils/axiosConfig'








const getUsers =  async () =>{
    try{
        const response = await AXIOS_CONFIG.get('users/users_list')
        return response.data
    }catch(error){

    }
}

export default getUsers ; 


