import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Card } from 'react-bootstrap';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Image1 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_1.jpg';

//adding the individual data points to set a 'vehicle'
const CarCard = ({ vehicle }) => {
  let navigate = useNavigate();

  const {
    _id,
    price,
    make,
    model,
    variant,
    year,
    engineSize,
    enginePower,
    gearbox,
    fuelType,
    mileage,
    numberOfOwners,
  } = vehicle;
  // console.log(vehicle);

  const onVehicleClick = () => {
    navigate(`/vehicle/${_id}`);
  };
  return (
    // <LinkContainer to=':id'>
    <Card className='card-div-class rounded' onClick={() => onVehicleClick()}>
      <Card.Img src={Image1} variant='top' />
      <Card.Body>
        <div className='card-top-text'>
          <OverlayTrigger overlay={<Tooltip id='price'>Price</Tooltip>} placement='right'>
            <div>{price}</div>
          </OverlayTrigger>
        </div>
        <OverlayTrigger
          overlay={<Tooltip id='price'>Make, Model and Variant</Tooltip>}
          placement='right'>
          <div>
            {make} {model} {variant}
          </div>
        </OverlayTrigger>
        <div>
          {/* <li className='card-small-elements mt-2'>2019</li> */}
          <li className='card-small-elements mt-2'>{year}</li>
          <li className='card-small-elements'>{engineSize}L</li>
          <li className='card-small-elements'>{enginePower} BHP</li>
          <li className='card-small-elements'>{gearbox}</li>
        </div>
        <div className='pt-1'>
          <li className='card-small-elements'>{fuelType}</li>
          <li className='card-small-elements'>{mileage} miles</li>
          <li className='card-small-elements'>{numberOfOwners} owners</li>
        </div>
      </Card.Body>
      <MDBRow className='pt-4'>
        <MDBCol md='7'>
          <p className='card-seller-distance'>Charles Hurst (2,220)</p>
        </MDBCol>
        <MDBCol md='5'>
          <p className='card-seller-distance'>999 miles away</p>
        </MDBCol>
      </MDBRow>
    </Card>
    // </LinkContainer>
  );
};

export default CarCard;

// <Card.Body>
//  <Card.Title className='card-title-div'>£3,500,000</Card.Title>
// <div className='card-top-text'>£3,500,000</div>
// <p className='card-description-text mt-2'>
//   Ferari LaFerrari Aperta Ferari LaFerrari Aperta
// </p>
// <div>
//   <li className='card-small-elements mt-2'>2019</li>
//   <li className='card-small-elements'>3.0 L</li>
//   <li className='card-small-elements'>528 BHP</li>
//   <li className='card-small-elements'>Manual</li>
// </div>
// <div className='pt-1'>
//   <li className='card-small-elements'>Petrol</li>
//   <li className='card-small-elements'>40,500 miles</li>
//   <li className='card-small-elements'>2 owners</li>
// </div>
// </Card.Body>

{
  /* <Button disabled className='price-button-car-card mt-3'>
  <div className='card-price-text'>£3,500,000</div>
</Button> */
}

// <h3>£39,995</h3>
// <h4>BMW 3 Series M3 Saloon Competition DCT Euro 6 - Full History</h4>
// <ul>
//   <li>2019</li>
//   <li>40,500 miles</li>
//   <li>3.0L</li>
//   <li>528BHP</li>
//   <li>Manual</li>
//   <li>Petrol</li>
//   <li>2 owners</li>
// </ul>
