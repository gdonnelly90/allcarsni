import apiClient from '../utils/httpService';

// post favourite
export const putFavourites = async (vehicleId) => {
  try {
    // console.log('PUT FAVES CALLED');
    const { data } = await apiClient.put(`/api/v1/vehicles/favourites/${vehicleId}`);
    return data;
  } catch (error) {
    return error;
  }
};

// get favourites
// export const getFavourites = async (userId) => {
//   try {
//     const { data } = await apiClient.put(`/api/v1/vehicles/favourites/${userId}`);
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

// get favourites
export const getFavourites = async (vehicleId) => {
  try {
    const { data } = await apiClient.put(`/api/v1/vehicles/favourites/${vehicleId}`);
    return data;
  } catch (error) {
    return error;
  }
};

// get all favourites
export const fetchFavourites = async () => {
  try {
    const response = await apiClient.get('/api/v1/favourites');
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: [],
    };
  }
};

// post favourite TWO
export const updateFavourite = async (_id, formData) => {
  try {
    const { data } = await apiClient.post('/api/v1/favourites/', formData);
    return data;
  } catch (error) {
    return error;
  }
};
