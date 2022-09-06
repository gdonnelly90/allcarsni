import React from 'react';
import { Container } from 'react-bootstrap';
import CarCard from '../components/car/CarCard';

export const FavouritesTab = ({ favouriteVehicles }) => {
  // console.log('FTAB VEHICLES DATA');
  // console.log(favouriteVehicles);

  return (
    <div>
      <Container className='stock-listing-page'>
        <div>Favourites Tab</div>
        {/* {favouriteVehicles &&
          favouriteVehicles.map((vehicle, i) => (
            <CarCard key={i} vehicle={vehicle} />
          ))} */}
      </Container>
    </div>
  );
};
