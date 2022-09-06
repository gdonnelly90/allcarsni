import React from 'react';
import { Container } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import EnterRegBox from './EnterRegBox';

// designing the sell your car feature
const SellYourCar = () => {
  return (
    <div className='sell-car-quick pt-5'>
      <Container>
        <MDBRow md='12'>
          <MDBCol md='3'></MDBCol>
          <MDBCol md='8'>
            <div className='sell-car-text'>
              <div className='sell-car-icon pt-2'>
                <i className='sellicon fa-solid fa-car-on fa-xl'></i>
              </div>
              <div className='sell-car-text1'>SELL YOUR CAR</div>
              <div className='sell-car-text2 pb-3'>
                <span className='sell-car-text2'>GET AN AVERAGE </span>
                <span className='selling-blue'>VALUATION</span>
                <span className='sell-car-text2'> NOW </span>
              </div>
              <div className='sell-car-text3'>
                <p>enter licence plate below</p>
              </div>
              <EnterRegBox />
            </div>
          </MDBCol>
          <MDBCol md='1'></MDBCol>
        </MDBRow>
      </Container>
    </div>
  );
};

export default SellYourCar;
