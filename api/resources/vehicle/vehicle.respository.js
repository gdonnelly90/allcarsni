import axios from 'axios';
import { isEmpty } from 'lodash-es';
import camelcaseKeys from 'camelcase-keys';
import vehicleService from './vehicle.service.js';

const fetchUkVehicleData = async (registrationNumber) => {
  try {
    // construct the full URL
    const url = `${process.env.UK_VEHICLE_DATA_URL}${process.env.UK_VEHICLE_DATA_API_KEY}&key_VRM=${registrationNumber}`;
    // call 3rd party provider for vehicle data
    const response = await axios.get(url);
    if (!isEmpty(response)) {
      // format the uk vehicle data into a consistent format of camelcase keys
      const formattedResponse = camelcaseKeys(response.data, { deep: true });
      // deconstruct out the statuscode and check if success
      const {
        response: { statusCode, dataItems },
      } = formattedResponse;
      // if ok - process the data
      if (statusCode === 'Success') {
        // uk vehicle data processor - format the data for optimal response
        const vehicleData = vehicleService.formatUKVehicleData(dataItems);
        // pass data back to route
        return vehicleData;
      }
      return {};
    }
    return {};
  } catch (error) {
    return error;
  }
};

export default {
  fetchUkVehicleData,
};
