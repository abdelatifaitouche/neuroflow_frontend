import AXIOS_CONFIG from '../utils/axiosConfig'



export const getProfile = async () => {
    try {
        const response = await AXIOS_CONFIG.get('auth/profile');

        return response.data.profileData

    }catch(error){
        return error
    }
}