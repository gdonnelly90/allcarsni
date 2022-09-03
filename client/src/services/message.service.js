import apiClient from '../utils/httpService';

// create a new message
export const postMessage = async (vehicleId, formData) => {
  try {
    const { data } = await apiClient.post(`/api/v1/messages/${vehicleId}`, formData);
    // console.log('---DATA---');
    // console.log({ data });
    return data;
  } catch (error) {
    return error;
  }
};

// get all messages for recipient
export const fetchRecipientMessages = async () => {
  try {
    const response = await apiClient.get('/api/v1/messages');
    console.log('-----RESPONSE MESS SERVICE-----');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
};

// get user from vehicleId
export const getUser = async (id) => {
  try {
    const { data } = await apiClient.get(`/api/v1/vehicles/${id}`);
    // console.log('---MESS SERV ID----');
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
