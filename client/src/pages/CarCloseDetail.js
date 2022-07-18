import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import CarDetails from '../components/CarDetails';
import CarDetailsTest from '../components/CarDetailsTest';

// calling the car details component
const CarCloseDetail = () => {
  return (
    <div>
      <MDBContainer>
        {/* <CarDetails /> */}
        <CarDetailsTest />
      </MDBContainer>
    </div>
  );
};

export default CarCloseDetail;
