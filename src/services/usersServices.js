import AXIOS_CONFIG from "../utils/axiosConfig";

const getUsers = async () => {
  try {
    const response = await AXIOS_CONFIG.get("users/users_list");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch users");
  }
};

export default getUsers;