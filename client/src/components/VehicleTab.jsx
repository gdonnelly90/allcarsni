import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { isEmpty } from 'lodash';
import { VehicleForm } from './VehicleForm';
import { postVehicle, uploadVehiclePhotos } from '../services/vehicle.service';
import { toast } from 'react-toastify';
import { APP_TABS } from '../utils/constants';

export const VehicleTab = ({ handleTabSelect }) => {
  const uploadFiles = async (files, vehicleId) => {
    if (!isEmpty(files)) {
      console.log(`3. HAVE FILES`);
      // seetup new form data for posting to axios
      let formData = new FormData();
      // append files to formData
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        formData.append(file.fileId, file);
      }
      formData.append('id', vehicleId);
      // set headers for files *** important for image upload ***
      const headers = { 'Content-Type': 'multipart/form-data' };
      // do post
      try {
        await uploadVehiclePhotos(formData, headers);
        formik.resetForm();
        toast.success('Vehicle images uploaded');
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const createVehicle = async (vehicle, formik) => {
    try {
      window.scrollTo(0, 0);
      const { _id: vehicleId } = await postVehicle(vehicle);
      console.log('VEHICLEID');
      console.log(vehicleId);
      await uploadFiles(vehicle.images, vehicleId);

      formik.resetForm();
      toast.success('Vehicle listing created');
      setTimeout(() => {
        window.reload();
        handleTabSelect(`${APP_TABS.STOCK}`);
      }, 700);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const validationSchema = Yup.object().shape({
    registrationNumber: Yup.string().required(),
    title: Yup.string().required(),
    description: Yup.string().required(),
    specification: Yup.string(),
    features: Yup.string(),
    price: Yup.number().required(),
    mileage: Yup.number().required(),
    make: Yup.string().required(),
    model: Yup.string().required(),
    modelVariant: Yup.string().required(),
    year: Yup.number().required(),
    variant: Yup.string().required(),
    bodyType: Yup.string().required(),
    colour: Yup.string().required(),
    fuelType: Yup.string().required(),
    fuelConsumption: Yup.number().required(),
    enginePower: Yup.number().required(),
    engineSize: Yup.number().required(),
    gears: Yup.number().required(),
    transmission: Yup.string().required(),
    aspiration: Yup.string().required(),
    numberOfDoors: Yup.number().required(),
    numberOfSeats: Yup.number().required(),
    zeroToSixtyTime: Yup.number().required(),
    annualTax: Yup.number().required(),
    driveTrain: Yup.string().required(),
    insuranceGroup: Yup.string(),
    emissions: Yup.number().required(),
    ulezCompliant: Yup.bool(),
    euroStatus: Yup.string().required(),
    status: Yup.string().required(),
    images: Yup.array(),
  });

  const formik = useFormik({
    validationSchema,
    initialValues: {
      registrationNumber: '',
      title: null,
      description: null,
      specification: null,
      features: null,
      price: null,
      mileage: null,
      make: '',
      model: '',
      year: null,
      modelVariant: '',
      variant: '',
      colour: '',
      bodyType: '',
      fuelType: '',
      fuelConsumption: null,
      gears: null,
      transmission: null,
      aspiration: '',
      engineSize: null,
      enginePower: null,
      numberOfDoors: null,
      numberOfSeats: null,
      zeroToSixtyTime: null,
      annualTax: null,
      driveTrain: '',
      insuranceGroup: '',
      emissions: null,
      ulezCompliant: false,
      euroStatus: null,
      status: '',
      images: [],
    },
    onSubmit: (formValues) => {
      createVehicle(formValues, formik);
    },
  });

  return <VehicleForm formik={formik} />;
};
