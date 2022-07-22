import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import SimpleSearch from '../components/search/SimpleSearch';
import SimpleSearch2 from '../components/search/SimpleSearch2';
import homepage_main from '../assets/img/homepage_main.jpg';
import home_hero from '../assets/img/home-hero.png';
import BlueBoxComponent from '../components/layout/BlueBoxComponent';

const Home = () => {
  return (
    <>
      <MDBRow md='12'>
        <div className='home-row-1 text-center'>
          <img
            className='home-logo pb-5'
            src={require('../assets/img/logo.png')}
          />
          <img
            // src={homepage_main}
            src={home_hero}
            alt='Home Page Main Image'
            className='responsive'
          />
        </div>
      </MDBRow>
      <MDBRow md='12'>
        <MDBCol>
          <div className='home-row-2'>
            {/* <SimpleSearch /> */}
            <SimpleSearch2 />
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow md='12'>
        <div className='home-row-3 text-center'>
          <h1>Shop by car shape</h1>
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
            <div className='home-button gap-2 text-center pt-4 pb-5'>
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
      <MDBRow md='12'>
        <div className='blie-box-row pb-4'>
          <BlueBoxComponent />
        </div>
      </MDBRow>
      <MDBRow md='12'>
        <MDBCol md='4'>
          <div className='home-col-1 text-center'>
            <img src={require('../assets/img/cars/Bugatti_1.jpg')} />
          </div>
        </MDBCol>
        <MDBCol md='4'>
          <div className='home-col-2 text-center'>
            <img src={require('../assets/img/cars/Lamborghini_Urus_1.jpg')} />
          </div>
        </MDBCol>
        <MDBCol md='4'>
          <div className='home-col-3 text-center'>
            <img src={require('../assets/img/cars/Mercedes_S65_1.jpg')} />
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default Home;
