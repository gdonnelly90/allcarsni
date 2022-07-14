import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import placeholder from '../assets/img/placeholder.jpg';

const CarModal = () => {
  return (
    <Container>
      <div className='car-modal'>
        <div>
          <Image src={placeholder} fluid />
        </div>
        <p></p>
        <div className='car-modal'>
          <h4>Make and Model</h4>
        </div>
        <div className='mileage'>Mileage</div>
        <div className='car-modal'>Make and Model</div>
        <div className='car-modal'>Make and Model</div>
      </div>
    </Container>
  );
};

export default CarModal;

// <div className='row'>
//   <div className='col-sm-6 col-xl-4'>
//     <div className='car-listing'>
//       <div className='thumb'>
//         <div className='tag'>FEATURED</div>
//         src=
//         {require('../assets/img/cars/Porsche_911_TurboS_1.jpg')}
//         <div className='thmb_cntnt2'>
//           <ul className='mb0'>
//             <li className='list-inline-item'>
//               <a className='text-white' href='#'>
//                 <span className='flaticon-photo-camera mr3'></span> 22
//               </a>
//             </li>
//             <li className='list-inline-item'>
//               <a className='text-white' href='#'>
//                 <span className='flaticon-play-button mr3'></span> 3
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className='thmb_cntnt3'>
//           <ul className='mb0'>
//             <li className='list-inline-item'>
//               <a href='#'>
//                 <span className='flaticon-shuffle-arrows'></span>
//               </a>
//             </li>
//             <li className='list-inline-item'>
//               <a href='#'>
//                 <span className='flaticon-heart'></span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className='details'>
//         <div className='wrapper'>
//           <h5 className='price'>$129</h5>
//           <h6 className='title'>
//             <a href='page-car-single-v1.html'>Volvo XC90 - 2020</a>
//           </h6>
//           <div className='listign_review'>
//             <ul className='mb0'>
//               <li className='list-inline-item'>
//                 <a href='#'>
//                   <i className='fa fa-star'></i>
//                 </a>
//               </li>
//               <li className='list-inline-item'>
//                 <a href='#'>
//                   <i className='fa fa-star'></i>
//                 </a>
//               </li>
//               <li className='list-inline-item'>
//                 <a href='#'>
//                   <i className='fa fa-star'></i>
//                 </a>
//               </li>
//               <li className='list-inline-item'>
//                 <a href='#'>
//                   <i className='fa fa-star'></i>
//                 </a>
//               </li>
//               <li className='list-inline-item'>
//                 <a href='#'>
//                   <i className='fa fa-star'></i>
//                 </a>
//               </li>
//               <li className='list-inline-item'>
//                 <a href='#'>4.7</a>
//               </li>
//               <li className='list-inline-item'>(684 reviews)</li>
//             </ul>
//           </div>
//         </div>
//         <div className='listing_footer'>
//           <ul className='mb0'>
//             <li className='list-inline-item'>
//               <a href='#'>
//                 <span className='flaticon-road-perspective me-2'></span>
//                 77362
//               </a>
//             </li>
//             <li className='list-inline-item'>
//               <a href='#'>
//                 <span className='flaticon-gas-station me-2'></span>
//                 Diesel
//               </a>
//             </li>
//             <li className='list-inline-item'>
//               <a href='#'>
//                 <span className='flaticon-gear me-2'></span>
//                 Automatic
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
