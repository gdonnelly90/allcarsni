import React from 'react';
import { Row } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import home_logo from '../assets/img/logo.png';
import home_car from '../assets/img/fullwidth/bugatti_back3.jpg';

const Home2 = () => {
  return (
    <div className='home-row-1 text-center'>
      <img className='home-logo pb-5' src={home_logo} />
      <img
        src={home_car}
        alt='Home Page Main Image'
        // className='responsive'
      />
    </div>
  );
};

export default Home2;

{
  /* <div className='home-row-1'>
  <img className='home-logo' src={require('../assets/img/logo.png')} />
  <img src={home_car} alt='Home Page Main Image' className='responsive' />
</div> */
}

<main role='main' id='top'>
  <div className='home-logo-image'>
    <img className='home-logo' src={home_logo} />
  </div>

  <div className='home-car'>
    <img className='home-car-img' src={home_car} />
  </div>
</main>;
