import APIClient from '../utils/httpService';

export const fetchSubscriptions = async () => {
  try {
    const response = await APIClient.get('/api/v1/subscriptiontypes');
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
