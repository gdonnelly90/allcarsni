import React from 'react';
import Container from 'react-bootstrap';
import {
  MDBRow,
  MDBCol,
  MDBAccordion,
  MDBAccordionItem,
} from 'mdb-react-ui-kit';
import CarCarousel from './CarCarousel';
import image1 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_2.jpg';
import image2 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_3.jpg';
import ContactSeller from '../car/ContactSeller';
import { AiFillCar } from 'react-icons/ai';
import { TbEngine } from 'react-icons/tb';
import { GiGearStick } from 'react-icons/gi';
import { IoIosSpeedometer } from 'react-icons/io';
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import { FaGasPump } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa';
import FinanceCalculator from '../common/FinanceCalculator';
import CarDetailCarousel from '../CarDetailCarousel';
// import CarDetailSlickCarousel from '../CarDetailSlickCarousel';
// import { MdAirlineSeatReclineExtra } from 'react-icons/md';

const CarDetail = () => {
  return (
    <div>
      <MDBRow className='car-imagery-row pt-5' md='12'>
        <MDBCol className='car-imagery-col1 pb-3' md='8'>
          <CarCarousel className='carousel-image-cardetails' />
        </MDBCol>
        <MDBCol className='car-imagery-col1' md='4'>
          <MDBRow className='car-imagery-row1' md='12'>
            <img
              className='second-image-cardetails'
              style={{ width: '100%', height: '268px' }}
              src={image1}
              alt='second image'
            />
          </MDBRow>
          <MDBRow className='car-imagery-row1 pt-3' md='12'>
            <img
              className='third-image-cardetails'
              style={{ width: '100%', height: '268px' }}
              src={image2}
              alt='third image'
            />
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <MDBRow className='car-icon-display pt-5' md='12'>
        <MDBCol className='price-row-cardetails' md='3'>
          <h1 className='car-price-cardetails'>£3,500,000</h1>
        </MDBCol>
        <MDBCol className='pb-3' md='2'>
          <MDBRow className='cardetails-icons-icon text-center'>
            <AiFillCar size='26px' />
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1 pb-2'>
            <h5>Hyper car</h5>
          </MDBRow>
        </MDBCol>
        <MDBCol className='pb-3' md='1'>
          <MDBRow className='cardetails-icons-icon text-center'>
            <BsFillCalendar2DateFill size='20px' />
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1 pb-2'>
            <h5>2018</h5>
          </MDBRow>
        </MDBCol>
        <MDBCol className='pb-3' md='1'>
          <MDBRow className='cardetails-icons-icon text-center'>
            <IoIosSpeedometer size='25px' />
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1'>
            <h5>35,000</h5>
          </MDBRow>
        </MDBCol>
        <MDBCol className='pb-3' md='1'>
          <MDBRow className='cardetails-icons-icon text-center'>
            <FaGasPump size='20px' />
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1'>
            <h5>Petrol</h5>
          </MDBRow>
        </MDBCol>
        <MDBCol className='pb-3' md='1'>
          <MDBRow className='cardetails-icons-icon text-center'>
            <GiGearStick size='22px' />
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1'>
            <h5>Auto</h5>
          </MDBRow>
        </MDBCol>
        <MDBCol className='pb-3' md='1'>
          <MDBRow className='cardetails-icons-icon text-center'>
            <h6 className='mt-1'>BHP</h6>
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1'>
            <h5>1000</h5>
          </MDBRow>
        </MDBCol>
        <MDBCol className='pb-3' md='1'>
          <MDBRow className='cardetails-icons-icon text-center'>
            {/* <i class='fa-regular fa-engine'></i> */}
            <TbEngine size='25px' />
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1'>
            <h5>5L</h5>
          </MDBRow>
        </MDBCol>
      </MDBRow>

      {/* overview and contact / finance sections */}
      <MDBRow>
        <MDBCol className='pt-5' md='8'>
          <div className='accordion-sections'>
            <h1 className=''>Overview</h1>
            <MDBAccordion initialActive={1}>
              <MDBAccordionItem
                collapseId={1}
                headerTitle='Description'
                className='accordion-title'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                laoreet, orci eget congue semper, est nunc tincidunt nulla, eu
                consequat tellus nunc sit amet lectus. Mauris pretium euismod
                nibh sed aliquam. Integer blandit metus a aliquet hendrerit. Sed
                id nisl eget ante hendrerit scelerisque et eget neque. Etiam
                sollicitudin urna vel diam egestas vehicula. Donec condimentum
                felis at metus eleifend tempus. Nullam in placerat ligula, eu
                luctus lacus. Fusce mattis tortor a dui ultrices, vitae
                porttitor enim dictum. Morbi hendrerit tempor ante a malesuada.
                Aenean sed sapien gravida, rutrum odio at, viverra massa.
                Suspendisse quis ante est. Nunc in nisi commodo, feugiat enim
                eget, tempus sem. Aenean varius dolor ut eros pharetra
                imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc laoreet, orci eget congue semper, est nunc tincidunt
                nulla, eu consequat tellus nunc sit amet lectus. Mauris pretium
                euismod nibh sed aliquam. Integer blandit metus a aliquet
                hendrerit. Sed id nisl eget ante hendrerit scelerisque et eget
                neque. Etiam sollicitudin urna vel diam egestas vehicula. Donec
                condimentum felis at metus eleifend tempus. Nullam in placerat
                ligula, eu luctus lacus. Fusce mattis tortor a dui ultrices,
                vitae porttitor enim dictum. Morbi hendrerit tempor ante a
                malesuada. Aenean sed sapien gravida, rutrum odio at, viverra
                massa. Suspendisse quis ante est. Nunc in nisi commodo, feugiat
                enim eget, tempus sem. Aenean varius dolor ut eros pharetra
                imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc laoreet, orci eget congue semper, est nunc tincidunt
                nulla, eu consequat tellus nunc sit amet lectus. Mauris pretium
                euismod nibh sed aliquam. Integer blandit metus a aliquet
                hendrerit. Sed id nisl eget ante hendrerit scelerisque et eget
                neque. Etiam sollicitudin urna vel diam egestas vehicula. Donec
                condimentum felis at metus eleifend tempus. Nullam in placerat
                ligula, eu luctus lacus. Fusce mattis tortor a dui ultrices,
                vitae porttitor enim dictum. Morbi hendrerit tempor ante a
                malesuada. Aenean sed sapien gravida, rutrum odio at, viverra
                massa. Suspendisse quis ante est. Nunc in nisi commodo, feugiat
                enim eget, tempus sem. Aenean varius dolor ut eros pharetra
                imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc laoreet, orci eget congue semper, est nunc tincidunt
                nulla, eu consequat tellus nunc sit amet lectus. Mauris pretium
                euismod nibh sed aliquam. Integer blandit metus a aliquet
                hendrerit. Sed id nisl eget ante hendrerit scelerisque et eget
                neque. Etiam sollicitudin urna vel diam egestas vehicula. Donec
                condimentum felis at metus eleifend tempus. Nullam in placerat
                ligula, eu luctus lacus. Fusce mattis tortor a dui ultrices,
                vitae porttitor enim dictum. Morbi hendrerit tempor ante a
                malesuada. Aenean sed sapien gravida, rutrum odio at, viverra
                massa. Suspendisse quis ante est. Nunc in nisi commodo, feugiat
                enim eget, tempus sem. Aenean varius dolor ut eros pharetra
                imperdiet.
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId={2}
                headerTitle='Specification'
                className='accordion-title'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                laoreet, orci eget congue semper, est nunc tincidunt nulla, eu
                consequat tellus nunc sit amet lectus. Mauris pretium euismod
                nibh sed aliquam. Integer blandit metus a aliquet hendrerit. Sed
                id nisl eget ante hendrerit scelerisque et eget neque. Etiam
                sollicitudin urna vel diam egestas vehicula. Donec condimentum
                felis at metus eleifend tempus. Nullam in placerat ligula, eu
                luctus lacus. Fusce mattis tortor a dui ultrices, vitae
                porttitor enim dictum. Morbi hendrerit tempor ante a malesuada.
                Aenean sed sapien gravida, rutrum odio at, viverra massa.
                Suspendisse quis ante est. Nunc in nisi commodo, feugiat enim
                eget, tempus sem. Aenean varius dolor ut eros pharetra
                imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc laoreet, orci eget congue semper, est nunc tincidunt
                nulla, eu consequat tellus nunc sit amet lectus. Mauris pretium
                euismod nibh sed aliquam. Integer blandit metus a aliquet
                hendrerit. Sed id nisl eget ante hendrerit scelerisque et eget
                neque. Etiam sollicitudin urna vel diam egestas vehicula. Donec
                condimentum felis at metus eleifend tempus. Nullam in placerat
                ligula, eu luctus lacus. Fusce mattis tortor a dui ultrices,
                vitae porttitor enim dictum. Morbi hendrerit tempor ante a
                malesuada. Aenean sed sapien gravida, rutrum odio at, viverra
                massa. Suspendisse quis ante est. Nunc in nisi commodo, feugiat
                enim eget, tempus sem. Aenean varius dolor ut eros pharetra
                imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc laoreet, orci eget congue semper, est nunc tincidunt
                nulla, eu consequat tellus nunc sit amet lectus. Mauris pretium
                euismod nibh sed aliquam. Integer blandit metus a aliquet
                hendrerit. Sed id nisl eget ante hendrerit scelerisque et eget
                neque. Etiam sollicitudin urna vel diam egestas vehicula. Donec
                condimentum felis at metus eleifend tempus. Nullam in placerat
                ligula, eu luctus lacus. Fusce mattis tortor a dui ultrices,
                vitae porttitor enim dictum. Morbi hendrerit tempor ante a
                malesuada. Aenean sed sapien gravida, rutrum odio at, viverra
                massa. Suspendisse quis ante est. Nunc in nisi commodo, feugiat
                enim eget, tempus sem. Aenean varius dolor ut eros pharetra
                imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc laoreet, orci eget congue semper, est nunc tincidunt
                nulla, eu consequat tellus nunc sit amet lectus. Mauris pretium
                euismod nibh sed aliquam. Integer blandit metus a aliquet
                hendrerit. Sed id nisl eget ante hendrerit scelerisque et eget
                neque. Etiam sollicitudin urna vel diam egestas vehicula. Donec
                condimentum felis at metus eleifend tempus. Nullam in placerat
                ligula, eu luctus lacus. Fusce mattis tortor a dui ultrices,
                vitae porttitor enim dictum. Morbi hendrerit tempor ante a
                malesuada. Aenean sed sapien gravida, rutrum odio at, viverra
                massa. Suspendisse quis ante est. Nunc in nisi commodo, feugiat
                enim eget, tempus sem. Aenean varius dolor ut eros pharetra
                imperdiet.
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId={3}
                headerTitle='Features'
                className='accordion-title'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                laoreet, orci eget congue semper, est nunc tincidunt nulla, eu
                consequat tellus nunc sit amet lectus. Mauris pretium euismod
                nibh sed aliquam. Integer blandit metus a aliquet hendrerit. Sed
                id nisl eget ante hendrerit scelerisque et eget neque. Etiam
                sollicitudin urna vel diam egestas vehicula. Donec condimentum
                felis at metus eleifend tempus. Nullam in placerat ligula, eu
                luctus lacus. Fusce mattis tortor a dui ultrices, vitae
                porttitor enim dictum. Morbi hendrerit tempor ante a malesuada.
                Aenean sed sapien gravida, rutrum odio at, viverra massa.
                Suspendisse quis ante est. Nunc in nisi commodo, feugiat enim
                eget, tempus sem. Aenean varius dolor ut eros pharetra
                imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc laoreet, orci eget congue semper, est nunc tincidunt
                nulla, eu consequat tellus nunc sit amet lectus. Mauris pretium
                euismod nibh sed aliquam. Integer blandit metus a aliquet
                hendrerit. Sed id nisl eget ante hendrerit scelerisque et eget
                neque. Etiam sollicitudin urna vel diam egestas vehicula. Donec
                condimentum felis at metus eleifend tempus. Nullam in placerat
                ligula, eu luctus lacus. Fusce mattis tortor a dui ultrices,
                vitae porttitor enim dictum. Morbi hendrerit tempor ante a
                malesuada. Aenean sed sapien gravida, rutrum odio at, viverra
                massa. Suspendisse quis ante est. Nunc in nisi commodo, feugiat
                enim eget, tempus sem. Aenean varius dolor ut eros pharetra
                imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc laoreet, orci eget congue semper, est nunc tincidunt
                nulla, eu consequat tellus nunc sit amet lectus. Mauris pretium
                euismod nibh sed aliquam. Integer blandit metus a aliquet
                hendrerit. Sed id nisl eget ante hendrerit scelerisque et eget
                neque. Etiam sollicitudin urna vel diam egestas vehicula. Donec
                condimentum felis at metus eleifend tempus. Nullam in placerat
                ligula, eu luctus lacus. Fusce mattis tortor a dui ultrices,
                vitae porttitor enim dictum. Morbi hendrerit tempor ante a
                malesuada. Aenean sed sapien gravida, rutrum odio at, viverra
                massa. Suspendisse quis ante est. Nunc in nisi commodo, feugiat
                enim eget, tempus sem. Aenean varius dolor ut eros pharetra
                imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc laoreet, orci eget congue semper, est nunc tincidunt
                nulla, eu consequat tellus nunc sit amet lectus. Mauris pretium
                euismod nibh sed aliquam. Integer blandit metus a aliquet
                hendrerit. Sed id nisl eget ante hendrerit scelerisque et eget
                neque. Etiam sollicitudin urna vel diam egestas vehicula. Donec
                condimentum felis at metus eleifend tempus. Nullam in placerat
                ligula, eu luctus lacus. Fusce mattis tortor a dui ultrices,
                vitae porttitor enim dictum. Morbi hendrerit tempor ante a
                malesuada. Aenean sed sapien gravida, rutrum odio at, viverra
                massa. Suspendisse quis ante est. Nunc in nisi commodo, feugiat
                enim eget, tempus sem. Aenean varius dolor ut eros pharetra
                imperdiet.
              </MDBAccordionItem>
            </MDBAccordion>
          </div>
        </MDBCol>
        <MDBCol className='pt-5' md='4'>
          <MDBRow className='mainContainer'>
            <ContactSeller />
          </MDBRow>
          <MDBRow className='mainContainer2'>
            <h1 className='pt-2'>Finance Example</h1>
            <FinanceCalculator />
          </MDBRow>
        </MDBCol>
        <MDBCol className='similar-for-sale pt-5' md='12'>
          <h1 className='pt-2'>Similar For Sale</h1>
          <CarDetailCarousel />
          {/* <CarDetailSlickCarousel /> */}
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default CarDetail;
