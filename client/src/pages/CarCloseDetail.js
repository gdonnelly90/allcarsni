import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import CarDetail from '../components/car/CarDetail';

// calling the car details component
const CarCloseDetail = () => {
  return (
    <div>
      <MDBContainer>
        <CarDetail />
      </MDBContainer>
    </div>
  );
};

export default CarCloseDetail;
