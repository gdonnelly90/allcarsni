import apiClient from '../utils/httpService';

// get all vehicles
export const fetchAllVehicles = async (query) => {
  try {
    console.log('Vehicle Service Query');
    console.log(query);
    const response = await apiClient.get(`/api/v1/vehicles?${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: [],
    };
  }
};

// get individual car by id
export const fetchVehicleById = async (id) => {
  try {
    const response = await apiClient.get(`/api/v1/vehicles/${id}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

// get vehicles by bodyType
export const fetchVehiclesByBodyType = async (bodyType) => {
  try {
    const response = await apiClient.get(`/api/v1/vehicles/${bodyType}`);
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

// get all electric Vehicles
export const fetchElectricVehicles = async () => {
  try {
    const response = await apiClient.get('/api/v1/vehicles?fuelType=Electric');
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

export const fetchVehicleByRegistration = async (registrationNumber) => {
  try {
    const response = await apiClient.get(`/api/v1/vehicles/registration/${registrationNumber}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postVehicle = async (vehicle) => {
  try {
    const { data } = await apiClient.post('/api/v1/vehicles', vehicle);
    return data;
  } catch (error) {
    return error;
  }
};

// function to get all filter data
export const fetchFilterData = async () => {
  try {
    const makePromise = apiClient.get('/api/v1/filters/vehicle/makes');
    const colourPromise = apiClient.get('/api/v1/filters/vehicle/colours');
    //   const bodyStylePromise = apiClient.get('/api/v1/filters/vehicle/bodystyles');
    //   const cenginseSpectPromise = apiClient.get('/api/v1/filters/vehicle/enginespecs');

    // promise all - resolves when all querries have fulfilled get inital filter data
    const [makes, colours] = await Promise.all([makePromise, colourPromise]);

    // const { data } = await apiClient.get('/api/v1/filters/vehicle/makes');
    return [makes.data, colours.data];
  } catch (error) {
    return error;
  }
};

export const fetchVehicleModelsByMake = async (make) => {
  try {
    const { data } = await apiClient.get(`api/v1/filters/vehicle/${make}/models`);
    return data;
  } catch (error) {
    return error;
  }
};

// // get all vehicles
// export const fetchAllVehicles = async (pageNumber, query = '') => {
//   try {
//     const url = `${ROOT_URL}/v1/vehicles?page=${pageNumber}`;
//     url = query ? `${url}?${query}` : url;
//     const response = await apiClient.get(url);
//     // const response = await apiClient.get(`/api/v1/vehicles?page=${pageNumber}`);
//     // const response = await apiClient.get('/api/v1/vehicles');
//     return response.data?.vehicles;
//   } catch (error) {
//     console.log(error);
//     return {
//       success: false,
//       data: [],
//     };
//   }
// };
