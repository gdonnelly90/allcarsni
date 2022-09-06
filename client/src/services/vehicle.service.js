import apiClient from '../utils/httpService';

// get all vehicles
export const fetchAllVehicles = async (query) => {
  try {
    // console.log('Vehicle Service Query');
    // console.log(query);
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

// get all electric Vehicles
export const fetchElectricVehicles = async () => {
  try {
    const response = await apiClient.get('/api/v1/vehicles?fuelType=Electric');
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

// Fetch user favourite vehicles - ie stock
export const fetchUserFavouriteVehicles = async (userId) => {
  try {
    const response = await apiClient.get(`api/v1/vehicles/favourites/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

// get all Vehicles by reg plate
export const fetchVehicleByRegistration = async (registrationNumber) => {
  try {
    const response = await apiClient.get(`/api/v1/vehicles/registration/${registrationNumber}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Fetch customer vehicles - ie stock
export const fetchCustomerVehicles = async () => {
  try {
    const { data } = await apiClient.get('api/v1/vehicles/customer');
    return data;
  } catch (error) {
    return error;
  }
};

// create a new vehicle
export const postVehicle = async (vehicle) => {
  try {
    const { data } = await apiClient.post('/api/v1/vehicles', vehicle);
    return data;
  } catch (error) {
    return error;
  }
};

export const uploadVehiclePhotos = async (formData, headers) => {
  try {
    console.log('6. API CLIENT');
    console.log(formData);
    const { data } = await apiClient.post('/api/v1/vehicles/files', formData, headers);
    console.log(`7. DATA FROM UPLOAD VEHICLE ${data}`);
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
    const bodyTypePromise = apiClient.get('/api/v1/filters/vehicle/bodyTypes');
    const fuelTypePromise = apiClient.get('/api/v1/filters/vehicle/fuelTypes');

    // promise all - resolves when all querries have fulfilled get inital filter data
    const [makes, colours, bodyTypes, fuelTypes] = await Promise.all([
      makePromise,
      colourPromise,
      bodyTypePromise,
      fuelTypePromise,
    ]);

    return [makes.data, colours.data, bodyTypes.data, fuelTypes.data];
  } catch (error) {
    return error;
  }
};

// get all models based on make selected
export const fetchVehicleModelsByMake = async (make) => {
  try {
    const { data } = await apiClient.get(`api/v1/filters/vehicle/${make}/models`);
    return data;
  } catch (error) {
    return error;
  }
};

// get all bodyTypes based on make and model selected
export const fetchVehicleModelsByBodyType = async (make) => {
  try {
    const { data } = await apiClient.get(`api/v1/filters/vehicle/${make}/models/bodyTypes`);
    return data;
  } catch (error) {
    return error;
  }
};

// get all fuel types based on make and model selected
export const fetchVehicleFuelType = async (make, model) => {
  try {
    const { data } = await apiClient.get(`api/v1/filters/vehicle/${make}/${model}/fuelTypes`);
    return data;
  } catch (error) {
    return error;
  }
};

// get all fuel types based on make and model selected
export const fetchVehicleCount = async () => {
  try {
    const { data } = await apiClient.get('api/v1/vehicles/status');
    return data;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

// get 10 random cars
export const fetchCarouselVehicles = async () => {
  try {
    const { data } = await apiClient.get('/api/v1/vehicles/random');
    return data;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

// delete a vehicle
export const deleteSelectedVehicle = async (id) => {
  try {
    const response = await apiClient.delete(`/api/v1/vehicles/${id}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

// return a vehicle price
export const fetchVehiclePrice = async () => {
  try {
    const min = 30000;
    const max = 60000;

    const response = Math.floor(Math.random() * (max - min + 1)) + min;

    return response;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

// get vehicles by bodyType
// export const fetchVehiclesByBodyType = async (bodyType) => {
//   try {
//     const response = await apiClient.get(`/api/v1/vehicles/${bodyType}`);
//   } catch (error) {
//     console.error(error.message);
//     return error.message;
//   }
// };
