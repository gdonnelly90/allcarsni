import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import SimpleSearch from '../components/search/SimpleSearch';
import home_logo from '../assets/img/red_white_logo.png';
import home_logo2 from '../assets/img/brown_logo.png';
import home_car from '../assets/img/fullwidth/bugatti_back1b.jpg';
import LatestNews from '../components/common/LatestNews';
import SellYourCar from '../components/SellYourCar';

const Home2 = () => {
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
            />
            <p>Electric</p>
          </MDBCol>
          <MDBCol md='2 text-center'>
            <img
              className='icon-suv'
              src={require('../assets/img/icons/suv.webp')}
            />
            <p>SUV</p>
          </MDBCol>{' '}
          <MDBCol md='2 text-center'>
            <img
              className='icon-hatchback'
              src={require('../assets/img/icons/hatchback.webp')}
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
            />
            <p>Coupe</p>
          </MDBCol>
          <MDBCol md='2 text-center'>
            <img
              className='icon-estate'
              src={require('../assets/img/icons/estate.webp')}
            />
            <p>Estate</p>
          </MDBCol>{' '}
          <MDBCol md='2 text-center'>
            <img
              className='icon-convertible'
              src={require('../assets/img/icons/convertible.webp')}
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
              <Button
                variant='outline-secondary'
                size='lg'
                // style={{ backgroundColor: '#c53030' }}
              >
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
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/zonda.jpg')}
          />
        </MDBCol>{' '}
        <MDBCol className='column3-home' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/mclaren2.jpg')}
          />
        </MDBCol>
        <MDBCol className='column4-home' md='3 text-center'>
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
          <div
            className='image-home-solid-1'
            style={{ width: '100%', height: '450px' }}
          >
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

{
  /* <div className='image-home-car-1-overlay'>
<ul>
  <li>
    <a href='#'>
      <i className='fa fa-link'></i>
    </a>
  </li>
  <li>
    <a href='#'>
      <i className='fa fa-dashboard'></i>
    </a>
  </li>
</ul>
</div>
<div className='car-list'>
<ul className='list-inline'>
  <li>
    <i className='fa fa-registered'></i> 2021
  </li>
  <li>
    <i className='fa fa-cog'></i> Manual{' '}
  </li>
  <li>
    <i className='fa fa-dashboard'></i> 6,000 mi
  </li>
</ul>
</div> */
}

{
  /* <MDBCol className='sell-car-quick pb-5'>
  <div className='home-sell-contents'>test</div>
  <img
    className='icon-hatchback'
    src={require('../assets/img/woman_selling.jpg')}
  />
</MDBCol>; */
}

//       <MDBRow className='column-main-cars-home pb-5' md='12'>
//   <MDBCol className='column-main-cars-home pb-5' md='12 text-center'>
//     {/* <SellYourCar /> */}
//     <MDBCol md='12'>Test</MDBCol>
//   </MDBCol>
//   <MDBCol md='6'>
//     <img
//       className='icon-hatchback'
//       src={require('../assets/img/woman_selling.jpg')}
//     />
//     {/* </MDBCol> */}
//   </MDBCol>
// </MDBRow>
