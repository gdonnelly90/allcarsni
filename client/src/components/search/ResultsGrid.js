import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CarModal from '../car/CarModal';
import CarCard from '../car/CarCard';
import SidePanel from './SidePanel';
import SideFilter from './SideFilter';

const ResultsGrid = () => {
  return (
    <>
      <SideFilter />
      <CarCard />
    </>
  );
};

export default ResultsGrid;

// <MDBRow>
//       <MDBCol md='3'>
//         {/* <SidePanel /> */}
//         <SideFilter />
//       </MDBCol>
//       <MDBCol md='9'>
//         <div className='pb-3'>Search Results</div>
//         <MDBRow>
//           <MDBCol className='card1-column-class pb-3' md='4'>
//             <CarCard />
//           </MDBCol>
//           <MDBCol className='card1-column-class pb-3' md='4'>
//             <CarCard />
//           </MDBCol>
//           <MDBCol className='card1-column-class pb-3' md='4'>
//             <CarCard />
//           </MDBCol>
//         </MDBRow>
//         <MDBRow>
//           <MDBCol className='card1-column-class pb-3' md='4'>
//             <CarCard />
//           </MDBCol>
//           <MDBCol className='card1-column-class pb-3' md='4'>
//             <CarCard />
//           </MDBCol>
//           <MDBCol className='card1-column-class pb-3' md='4'>
//             <CarCard />
//           </MDBCol>
//         </MDBRow>
//         <MDBRow>
//           <MDBCol className='card1-column-class pb-3' md='4'>
//             <CarCard />
//           </MDBCol>
//           <MDBCol className='card1-column-class pb-3' md='4'>
//             <CarCard />
//           </MDBCol>
//           <MDBCol className='card1-column-class pb-3' md='4'>
//             <CarCard />
//           </MDBCol>
//         </MDBRow>
//       </MDBCol>
//     </MDBRow>
