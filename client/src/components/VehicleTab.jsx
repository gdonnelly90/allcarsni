import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { VehicleForm } from './VehicleForm';
import { postVehicle } from '../services/vehicle.service';
import { toast } from 'react-toastify';
import { APP_TABS } from '../utils/constants';

export const VehicleTab = ({ handleTabSelect }) => {
  const createVehicle = async (vehicle, formik) => {
    try {
      window.scrollTo(0, 0);
      await postVehicle(vehicle);
      formik.resetForm();
      toast.success('Vehicle listing created');
      setTimeout(() => {
        handleTabSelect(`${APP_TABS.STOCK}`);
      }, 700);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const validationSchema = Yup.object().shape({
    registrationNumber: Yup.string().required(),
    price: Yup.number().required(),
    mileage: Yup.number().required(),
    make: Yup.string().required(),
    model: Yup.string().required(),
    modelVariant: Yup.string(),
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
  });

  const formik = useFormik({
    validationSchema,
    initialValues: {
      registrationNumber: '',
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
    },
    onSubmit: (formValues) => {
      console.log(formValues);
      createVehicle(formValues, formik);
    },
  });

  return <VehicleForm formik={formik} />;
};
