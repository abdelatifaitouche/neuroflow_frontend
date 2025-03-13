import AXIOS_CONFIG from "@/utils/axiosConfig";

export const getProcess = async () => {
  try {
    const response = await AXIOS_CONFIG.get("teamflow/process");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getProcessDetails = async (process_id) => {
  try {
    const response = await AXIOS_CONFIG.get(
      `teamflow/process/process_details/${process_id}`
    );
    return response.data.response;
  } catch (error) {
    console.log(error);
  }
};

export const createProcess = (data) => {
  AXIOS_CONFIG.post("teamflow/process/", data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
