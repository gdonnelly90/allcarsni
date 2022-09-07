import axios from 'axios';
import { isEmpty } from 'lodash-es';
import camelcaseKeys from 'camelcase-keys';
import vehicleService from './vehicle.service.js';
import { Storage } from '@google-cloud/storage';

export const fileStatus = {
  UPLOADED: 'UPLOADED',
  ERROR: 'ERROR',
  QUARANTINED: 'QUARANTINED',
};

const fetchUkVehicleData = async (registrationNumber) => {
  try {
    // construct the full URL
    const url = `${process.env.UK_VEHICLE_DATA_URL}${process.env.UK_VEHICLE_DATA_API_KEY}&key_VRM=${registrationNumber}`;
    // call 3rd party provider for vehicle data
    const response = await axios.get(url);
    if (!isEmpty(response)) {
      // format the uk vehicle data into a consistent format of camelcase keys
      const formattedResponse = camelcaseKeys(response.data, { deep: true });
      // deconstruct the statuscode and check if success
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

export const uploadImage = (file) =>
  new Promise((resolve, reject) => {
    // setup stroage account details
    const storage = new Storage({
      projectId: process.env.GCLOUD_PROJECT_ID,
      credentials: {
        client_email: process.env.GCLOUD_CLIENT_EMAIL,
        private_key: process.env.GCLOUD_PRIVATE_KEY,
      },
    });
    // select the bucket in GCP once storage instance declared.
    const bucket = storage.bucket(process.env.GCLOUD_BUCKET);

    let { originalname, mimetype, fieldname, buffer } = file;
    // create unique file name
    const fileTypeArr = mimetype.split('/');

    originalname = `${fieldname}.${fileTypeArr[1]}`;
    // deconstruct file details for upload
    const blob = bucket.file(originalname);
    // create writestream
    const blobStream = blob.createWriteStream({
      resumable: false,
    });
    blobStream
      .on('finish', () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        resolve(publicUrl);
      })
      .on('error', () => {
        reject(`Unable to upload image, something went wrong`);
      })
      .end(buffer);
  });

export default {
  fetchUkVehicleData,
  uploadImage,
};
