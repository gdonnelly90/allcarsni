import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CarModal from '../car/CarModal';
import CarCard from '../car/CarCard';
import SidePanel from './SidePanel';
import SideFilter from './SideFilter';

const ResultsGrid = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol md='3'>
          {/* <SidePanel /> */}
          <SideFilter />
        </MDBCol>
        <MDBCol md='9'>
          <div className='pb-3'>Search Results</div>
          <MDBRow>
            <MDBCol className='card1-column-class pb-3' md='4'>
              <CarCard />
            </MDBCol>
            <MDBCol className='card1-column-class pb-3' md='4'>
              <CarCard />
            </MDBCol>
            <MDBCol className='card1-column-clas pb-3' md='4'>
              <CarCard />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className='card1-column-class pb-3' md='4'>
              <CarCard />
            </MDBCol>
            <MDBCol className='card1-column-class pb-3' md='4'>
              <CarCard />
            </MDBCol>
            <MDBCol className='card1-column-class pb-3' md='4'>
              <CarCard />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className='card1-column-class pb-3' md='4'>
              <CarCard />
            </MDBCol>
            <MDBCol className='card1-column-class pb-3' md='4'>
              <CarCard />
            </MDBCol>
            <MDBCol className='card1-column-class pb-3' md='4'>
              <CarCard />
            </MDBCol>
          </MDBRow>
          {/* <MDBRow>
            <MDBCol md='4'>
              <CarModal />
            </MDBCol>
            <MDBCol md='4'>
              <CarModal />
            </MDBCol>
            <MDBCol md='4'>
              <CarModal />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='4'>
              <CarModal />
            </MDBCol>
            <MDBCol md='4'>
              <CarModal />
            </MDBCol>
            <MDBCol md='4'>
              <CarModal />
            </MDBCol>
          </MDBRow> */}
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default ResultsGrid;
