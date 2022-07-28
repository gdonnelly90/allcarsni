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
      <MDBRow className='car-overview-row1 pt-3' md='12'>
        <MDBRow className='my-5'>
          <MDBCol md='8'>
            <div className='accordion-sections'>
              <h1>Overview</h1>
              <MDBAccordion initialActive={1}>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle='Description'
                  className='accordion-title'
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  laoreet, orci eget congue semper, est nunc tincidunt nulla, eu
                  consequat tellus nunc sit amet lectus. Mauris pretium euismod
                  nibh sed aliquam. Integer blandit metus a aliquet hendrerit.
                  Sed id nisl eget ante hendrerit scelerisque et eget neque.
                  Etiam sollicitudin urna vel diam egestas vehicula. Donec
                  condimentum felis at metus eleifend tempus. Nullam in placerat
                  ligula, eu luctus lacus. Fusce mattis tortor a dui ultrices,
                  vitae porttitor enim dictum. Morbi hendrerit tempor ante a
                  malesuada. Aenean sed sapien gravida, rutrum odio at, viverra
                  massa. Suspendisse quis ante est. Nunc in nisi commodo,
                  feugiat enim eget, tempus sem. Aenean varius dolor ut eros
                  pharetra imperdiet.
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={2}
                  headerTitle='Specification'
                  className='accordion-title'
                >
                  Sed id nisl eget ante hendrerit scelerisque et eget neque.
                  Etiam sollicitudin urna vel diam egestas vehicula. Donec
                  condimentum felis at metus eleifend tempus. Nullam in placerat
                  ligula, eu luctus lacus. Fusce mattis tortor a dui ultrices,
                  vitae porttitor enim dictum.
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={3}
                  headerTitle='Features'
                  className='accordion-title'
                >
                  Morbi hendrerit tempor ante a malesuada. Aenean sed sapien
                  gravida, rutrum odio at, viverra massa. Suspendisse quis ante
                  est.
                </MDBAccordionItem>
              </MDBAccordion>
            </div>
          </MDBCol>
          <MDBCol className='contact-seller-insert' md='4'>
            <ContactSeller />
          </MDBCol>
        </MDBRow>
      </MDBRow>
    </div>
  );
};

export default CarDetail;

//   <MDBRow className='slider-desc-row' md='12'>
//     <MDBCol md='8'>Slider</MDBCol>
//     <MDBCol md='4'>Desc</MDBCol>
//   </MDBRow>
//   <MDBRow className='overview-contact-row' md='12'>
//     <MDBCol md='8'>Overview</MDBCol>
//     <MDBCol md='4'>Conatct Seller</MDBCol>
//   </MDBRow>

//   <Carousel.Item>
//<img className='d-block w-100' src={placeholder} alt='Second slide' />
//<Carousel.Caption>
