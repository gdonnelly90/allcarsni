import axios from 'axios';
import fs from 'fs';
import { isEmpty } from 'lodash-es';
import camelcaseKeys from 'camelcase-keys';
import vehicleService from './vehicle.service.js';
import { Storage } from '@google-cloud/storage';
import { removeDirectoryContents } from '../../utils/util.js';
import path from 'path';

// load process env - may not need in prod
// load config
const __dirname = path.resolve();
console.log(__dirname);

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

export const uploadPhotos = async (vehicle, files) => {
  console.log('4. UploadPhotos check process env GCP BUCKET');
  console.log(`${process.env.GCLOUD_BUCKET}`);
  console.log('4A. process env');
  console.log(process.env.PORT);

  let newFileArray = [];
  // GCP Storage - could have these values passed in as params to configure different storage
  const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    credentials: {
      client_email: process.env.GCLOUD_CLIENT_EMAIL,
      private_key: process.env.GCLOUD_PRIVATE_KEY,
    },
  });
  console.log('5. UploadPhotos - storage init');
  console.log(storage);

  // select the bucket in GCP once storage instance declared.
  const bucket = storage.bucket(process.env.GCLOUD_BUCKET);

  console.log('6. UploadPhotos - bucket init');

  // the uniquie folder name - this case the vehicleId || some asset since it will be unique
  const folder = vehicle.id;
  // tmp-file
  const directoryPath = process.env.TMP_DIR;
  console.log(`7. UploadPhotos - directoryPath: ${directoryPath}`);

  // loop through file list and upload each file to storage bucket
  files.forEach(async (file) => {
    // store files on files system
    console.log(
      `8. UploadPhotos - writeToDirectory: ${__dirname}/${directoryPath}/${file.filename}`
    );

    await fs.writeFile(`${__dirname}/${directoryPath}/${file.filename}`, file);

    console.log('8A BUCKET UPLOADING');

    try {
      const response = await bucket.upload(
        `${__dirname}/${directoryPath}/${file.filename}`,
        {
          destination: `${folder}/${file.filename}`,
        }
      );
      console.log(`9. UploadPhotos - RESPONE FROM BUCKET ${response}`);
      console.log(
        `10 UploadPhotos ${file} uploaded to ${process.env.GCLOUD_BUCKET}`
      );
      newFileArray = [
        ...newFileArray,
        { ...response, fileId: file.id, owner: vehicle.user },
      ];
    } catch (error) {
      console.log('ERROR IN UPLOAD');
      console.log(error);
    }
  });
  // removeDirectoryContents(`${directoryPath}`);

  console.log('RETURING NEW FILES AFTER UPLOAD');
  console.log(newFileArray);

  return newFileArray;
};

export default {
  fetchUkVehicleData,
  uploadPhotos,
};
