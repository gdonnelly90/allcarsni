import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CarModal from '../CarModal';
import SidePanel from './SidePanel';

const ResultsGrid = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol md='3'>
          <SidePanel />
        </MDBCol>
        <MDBCol md='9'>
          <div className='pb-3'>Search Results</div>
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
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default ResultsGrid;

// <Card.Img src={placeholder} variant='top' />

{
  /* <MDBContainer>
  <MDBRow>
    <MDBCol size='3'>3 widths</MDBCol>
    <MDBCol col='9'>9 widths</MDBCol>
  </MDBRow>
</MDBContainer> */
}
