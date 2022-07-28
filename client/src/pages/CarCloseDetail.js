import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CarDetail from '../components/car/CarDetail';
import CarDetailsTest from '../components/car/CarDetailsTest';

// calling the car details component
const CarCloseDetail = () => {
  return (
    <div>
      <MDBContainer>
        <CarDetail />
        {/* <CarDetailsTest /> */}
      </MDBContainer>
    </div>
  );
};

export default CarCloseDetail;
