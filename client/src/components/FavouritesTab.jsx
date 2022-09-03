import React from 'react';
import { Container } from 'react-bootstrap';
import CarCard from '../components/car/CarCard';

export const FavouritesTab = ({ vehicles }) => {
  console.log('*****VEHC FAV TAB*****');
  console.log(vehicles);

  const [one, two, three, four, five, six, seven] = vehicles;
  // console.log('*****VEHC ID*****');
  // console.log(one.vehicleId);
  // console.log(two.vehicleId);

  const vehicleArray = [one.vehicleId, two.vehicleId];
  console.log(vehicleArray);
  return (
    <div className='bg-light py-5 min-vh-100'>
      <Container>
        <div className='row'>
          {vehicles &&
            vehicles.map((vehicle) => {
              if (vehicle.favourite) {
                return <CarCard vehicle={vehicle} />;
              }
            })}
        </div>
      </Container>
    </div>
  );
};
