import React from 'react';
import { Row } from 'react-bootstrap';
import home_image from '../assets/img/fullwidth/bugatti_back3.jpg';

const Home2 = () => {
  return (
    <main role='main' id='top'>
      <div className='py3'>
        <div className='main-gradient-colour'>
          <Row md='12'>
            <div className='home-row-1 text-center'>
              <img
                className='home-logo pb-5'
                src={require('../assets/img/logo.png')}
              />
              <img
                src={home_image}
                alt='Home Page Main Image'
                className='responsive'
              />
            </div>
          </Row>
        </div>
      </div>
    </main>
  );
};

export default Home2;

{
  /* // <section className='home-image'>
              // <>
              //   <a className='home-row-1 text-center'>
              //     <img
              //       className='home-logo pb-5'
              //       src={require('../assets/img/logo.png')}
              //     />
              //   </a>
              //   <a className='text-center'>
              //     <img src={require('../assets/img/fullwidth/bugatti_back3.jpg')} />
              //   </a>
              // </>
// src={require('../assets/img/logo.png')} */
}
