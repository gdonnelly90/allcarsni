import apiClient from '../utils/httpService';

// get all vehicles
export const fetchAllUsers = async () => {
  try {
    const response = await apiClient.get('/api/v1/users');
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

// get user by ID
export const updateUser = async (id) => {
  try {
    const response = await apiClient.put(`/api/v1/users/${id}`);
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};
