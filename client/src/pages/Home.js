import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import homepage_main from '../assets/img/homepage_main.jpg';
import home_hero from '../assets/img/home-hero.png';

const Home = () => {
  return (
    <>
      <MDBRow md='12'>
        <div className='home-row-1 text-center'>
          <img
            // src={homepage_main}
            src={home_hero}
            alt='Home Page Main Image'
            class='responsive'
          />
        </div>
      </MDBRow>
      <MDBRow md='12'>
        <div className='home-row-2 text-center'>
          <h1>Row 2</h1>
        </div>
      </MDBRow>
      <MDBRow md='12'>
        <div className='home-row-3 text-center'>
          <h1>Row 3</h1>
        </div>
      </MDBRow>
      <MDBRow md='12'>
        <MDBCol md='4'>
          <div className='home-col-1 text-center'>
            <h2>Col 1</h2>
          </div>
        </MDBCol>
        <MDBCol md='4'>
          <div className='home-col-2 text-center'>
            <h2>Col 2</h2>
          </div>
        </MDBCol>
        <MDBCol md='4'>
          <div className='home-col-3 text-center'>
            <h2>Col 3</h2>
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default Home;
