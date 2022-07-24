import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import home_logo from '../assets/img/logo.png';
import home_car from '../assets/img/fullwidth/bugatti_back3.jpg';
import SimpleSearch2 from '../components/search/SimpleSearch2';

const Home2 = () => {
  return (
    <MDBCol>
      <MDBRow md='12'>
        <div className='home-image-logo-row'>
          <img className='home-car pb-5' src={home_car} />
          {/* <img className='home-logo' src={home_logo} /> */}
        </div>
      </MDBRow>
      <MDBRow md='12'>
        <div className='home-row-3 pb-5 text-center'>
          <h1>Shop by car type</h1>
        </div>
        <MDBRow md='12'>
          <MDBCol md='4 text-center'>
            <img
              className='icon-electric'
              src={require('../assets/img/icons/electric.webp')}
            />
            <p>Electric</p>
          </MDBCol>
          <MDBCol md='4 text-center'>
            <img
              className='icon-suv'
              src={require('../assets/img/icons/suv.webp')}
            />
            <p>SUV</p>
          </MDBCol>{' '}
          <MDBCol md='4 text-center'>
            <img
              className='icon-hatchback'
              src={require('../assets/img/icons/hatchback.webp')}
            />
            <p>Hatchback</p>
          </MDBCol>
        </MDBRow>
        <MDBRow md='12'>
          <MDBCol md='4 text-center'>
            <img
              className='icon-ccoupe'
              src={require('../assets/img/icons/coupe.webp')}
            />
            <p>Coupe</p>
          </MDBCol>
          <MDBCol md='4 text-center'>
            <img
              className='icon-estate'
              src={require('../assets/img/icons/estate.webp')}
            />
            <p>Estate</p>
          </MDBCol>{' '}
          <MDBCol md='4 text-center'>
            <img
              className='icon-convertible'
              src={require('../assets/img/icons/convertible.webp')}
            />
            <p>Convertible</p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div className='home-button gap-2 text-center pt-5 pb-5'>
              <Button
                className='home-button-browse'
                variant='primary'
                type='submit'
              >
                Browse all cars
              </Button>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBRow>

      {/* row of car pictures */}
      <MDBRow md='12'>
        <MDBCol className='column1-home max-vw-10' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/bugatti_dubai2.jpg')}
          />
        </MDBCol>
        <MDBCol className='column2-home max-vw-10' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/zonda.jpg')}
          />
        </MDBCol>{' '}
        <MDBCol className='column3-home max-vw-10' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/mclaren2.jpg')}
          />
        </MDBCol>
        <MDBCol className='column4-home max-vw-5' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/sf90.jpg')}
          />
        </MDBCol>
        <MDBCol className='column5-home' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/koenigsegg.jpg')}
          />
        </MDBCol>
        <MDBCol className='column6-home' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/laferrari.jpg')}
          />
        </MDBCol>{' '}
        <MDBCol className='column7-home' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/bugatti_blue.jpg')}
          />
        </MDBCol>
        <MDBCol className='column8-home' md='3 text-center'>
          <img
            className='icon-hatchback'
            src={require('../assets/img/fullwidth/911_turbo.jpg')}
          />
        </MDBCol>
      </MDBRow>
    </MDBCol>
  );
};

export default Home2;
