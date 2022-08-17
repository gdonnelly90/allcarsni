import { isEmpty, round } from 'lodash-es';
import { pascalCase } from 'pascal-case';

// - data processing function for UKVehicleData - ie normalising our data for our DB
const formatUKVehicleData = (data) => {
  let masterData = {};
  if (!isEmpty(data)) {
    const {
      technicalDetails: { dimensions, general, performance, consumption },
      vehicleRegistration,
      vehicleStatus,
      smmtDetails,
    } = data;
    masterData = {
      make: vehicleRegistration?.make || '',
      model: smmtDetails?.range || '',
      modelVariant: general?.seriesDescription || '',
      variant: smmtDetails?.modelVariant || '',
      transmission: vehicleRegistration?.transmissionType || '',
      fuelType: pascalCase(vehicleRegistration?.fuelType) || '',
      aspiration: general?.engine?.aspiration || '',
      bodyType: pascalCase(vehicleRegistration?.doorPlanLiteral) || '',
      engineSize: +round(smmtDetails?.nominalEngineCapacity, 1) || 0,
      enginePower: performance?.power?.bhp || 0,
      gears: smmtDetails?.numberOfGears || 0,
      numberOfDoors: dimensions?.numberOfDoors || 0,
      colour: pascalCase(vehicleRegistration?.colour) || '',
      numberOfSeats: dimensions?.numberOfSeats || 0,
      zeroToSixtyTime: performance?.acceleration?.zeroTo60Mph || 0,
      annualTax: 0,
      driveTrain: general?.drivingAxle || '',
      fuelConsumption: consumption?.combined?.mpg || 0,
      insuranceGroup: '',
      emissions: vehicleStatus?.motVed?.vedCo2Emissions || 0,
      ulezCompliant: general?.euroStatus === '6' ? true : false,
      euroStatus: general?.euroStatus || '',
      year: +vehicleRegistration?.yearOfManufacture || null,
    };
  }
  return masterData;
};

export default {
  formatUKVehicleData,
};
