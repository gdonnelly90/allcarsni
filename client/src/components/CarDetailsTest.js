import React from 'react';
import CarCarousel from './car/CarCarousel';
import SlickCarousel from './car/SlickCarousel';
import { FaGasPump } from 'react-icons/fa';
import { GiGearStickPattern } from 'react-icons/gi';
import { GiNetworkBars } from 'react-icons/gi';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAccordion,
  MDBAccordionItem,
} from 'mdb-react-ui-kit';

import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  ListGroup,
} from 'react-bootstrap';
import placeholder from '../assets/img/placeholder.jpg';

// designign the layout of the cardetails page
const CarDetails = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol md='8'>
          <div className='bg-grey'>
            <SlickCarousel />
            {/* <MDBRow>Overview</MDBRow>
            <MDBRow>Features Component</MDBRow>
            <MDBRow>Description</MDBRow> */}
          </div>
        </MDBCol>
        <MDBCol md='4'>
          <div className='bg-grey car-spec'>
            <h1>Audi A6 Avant</h1>
            <h2>2.0 TDI Ultra Black Edition 5dr</h2>
            <div className='pb-3'>Car Info</div>
            {/* <MDBRow>Make and Model</MDBRow>
          <MDBRow>Year</MDBRow>
          <MDBRow>Spec</MDBRow>
          <MDBRow>Price</MDBRow>
          <MDBRow>Monthly Price Calculator Component</MDBRow> */}
            {/* <MDBRow>Message Seller Component</MDBRow> */}
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className='my-5'>
        <MDBCol md='8'>
          <div className='bg-grey'>
            <h1>Overview</h1>
            <MDBAccordion initialActive={1}>
              <MDBAccordionItem
                collapseId={1}
                headerTitle='Description'
                className='accordion-title'
              >
                Body
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId={2}
                headerTitle='Specification'
                className='accordion-title'
              >
                Body
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId={3}
                headerTitle='Features'
                className='accordion-title'
              >
                Body
              </MDBAccordionItem>
            </MDBAccordion>
          </div>
        </MDBCol>
        <MDBCol md='4'>
          <div className='bg-grey'>
            <h1>SellerDetails</h1>
            <MDBCol className='bg-light-grey my-2 py-3' md='12'>
              <h4>Seller Details Body</h4>
            </MDBCol>
            {/* <MDBRow className='my-2'> */}
            <MDBCol className='bg-light-grey my-2 py-3' md='12'>
              <h4>Finance Calculator</h4>
            </MDBCol>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default CarDetails;
