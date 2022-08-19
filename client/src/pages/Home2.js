import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import SimpleSearch from '../components/search/SimpleSearch';
import home_logo from '../assets/img/red_white_logo.png';
import home_car from '../assets/img/fullwidth/bugatti_back1b.jpg';
import LatestNews from '../components/common/LatestNews';
import SellYourCar from '../components/SellYourCar';
import { BODYTYPE } from '../utils/constants';

const Home2 = () => {
  let navigate = useNavigate();

  const onBrowseCarsClick = () => {
    navigate('search/');
  };

  const onElectricIconClick = () => {
    navigate('search?fuelType=Electric');
  };
  const onBodyTypeClick = (bodyType) => {
    navigate(`search?bodyType=${bodyType}`);
  };

  return (
    <MDBCol>
      <MDBRow className='hero-column-home' md='12'>
        <div className='home-image-logo-row'>
          <SimpleSearch />
          <img className='home-logo' src={home_logo} />
          <img className='home-car' src={home_car} />
        </div>
      </MDBRow>

      {/* Car type */}
      <MDBRow md='12'>
        <div className='home-row-3 text-center'>
          <h1>Search by body style</h1>
        </div>
        <MDBRow md='12'>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='2 text-center'>
            <img
              className='icon-electric'
              src={require('../assets/img/icons/electric.webp')}
              onClick={() => onElectricIconClick()}
            />
            <p>Electric</p>
          </MDBCol>
          <MDBCol md='2 text-center'>
            <img
              className='icon-suv'
              src={require('../assets/img/icons/suv.webp')}
              onClick={() => onBodyTypeClick(BODYTYPE.SUV)}
            />
            <p>SUV</p>
          </MDBCol>{' '}
          <MDBCol md='2 text-center'>
            <img
              className='icon-hatchback'
              src={require('../assets/img/icons/hatchback.webp')}
              onClick={() => onBodyTypeClick(BODYTYPE.HATCHBACK)}
            />
            <p>Hatchback</p>
          </MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
        </MDBRow>
        <MDBRow md='12'>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='2 text-center'>
            <img
              className='icon-ccoupe'
              src={require('../assets/img/icons/coupe.webp')}
              onClick={() => onBodyTypeClick(BODYTYPE.SALOON)}
            />
            <p>Saloon</p>
          </MDBCol>
          <MDBCol md='2 text-center'>
            <img
              className='icon-estate'
              src={require('../assets/img/icons/estate.webp')}
              onClick={() => onBodyTypeClick(BODYTYPE.ESTATE)}
            />
            <p>Estate</p>
          </MDBCol>{' '}
          <MDBCol md='2 text-center'>
            <img
              className='icon-convertible'
              src={require('../assets/img/icons/convertible.webp')}
              onClick={() => onBodyTypeClick(BODYTYPE.CONVERTIBLE)}
            />
            <p>Convertible</p>
          </MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div className='home-button gap-2 text-center'>
              <Button variant='outline-secondary' size='lg' onClick={() => onBrowseCarsClick()}>
                Browse all cars
              </Button>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBRow>

      {/* row of car pictures */}
      <MDBRow className='column-main-cars-home pt-5' md='12'>
        <MDBCol className='column1-home' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/bugatti_dubai2.jpg')}
          />
        </MDBCol>
        <MDBCol className='column2-home' md='3 text-center'>
          <img className='image-home-car-1' src={require('../assets/img/fullwidth/zonda.jpg')} />
        </MDBCol>{' '}
        <MDBCol className='column3-home' md='3 text-center'>
          <img className='image-home-car-1' src={require('../assets/img/fullwidth/mclaren2.jpg')} />
        </MDBCol>
        <MDBCol className='column4-home' md='3 text-center'>
          <img className='image-home-car-1' src={require('../assets/img/fullwidth/sf90.jpg')} />
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
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/911_turbo.jpg')}
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className='column-main-cars-home pb-5' md='12'>
        <LatestNews />
      </MDBRow>
      {/* sell your car elements */}
      <MDBRow className='column-main-cars-home pt-5 pb-5' md='12'>
        <MDBCol className='column1-home' md='7 text-center'>
          <div className='image-home-solid-1' style={{ width: '100%', height: '450px' }}>
            <SellYourCar />
          </div>
        </MDBCol>
        <MDBCol className='column2-home' md='5 text-center'>
          <img
            className='image-home-car-1'
            style={{ width: '100%', height: '450px' }}
            src={require('../assets/img/woman_selling.jpg')}
          />
        </MDBCol>
      </MDBRow>
    </MDBCol>
  );
};

export default Home2;
