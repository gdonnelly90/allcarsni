import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Image1 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_1.jpg';
import { AiFillHeart } from 'react-icons/ai';
import { putFavourites } from '../../services/favourite.service';

//adding the individual data points to set a 'vehicle'
const CarCard = ({ vehicle }) => {
  let navigate = useNavigate();
  const [favourite, setFavourite] = useState(vehicle.favourite);

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
    favourites,
  } = vehicle;

  console.log('---vehicle favourites-----');
  console.log(vehicle.favourites);

  const getVehicleId = async () => {
    try {
      putFavourites(_id);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onVehicleClick = () => {
    navigate(`/vehicle/${_id}`);
  };
  return (
    // <LinkContainer to=':id'>
    // <Card className='card-div-class rounded' onClick={() => onVehicleClick()}>
    <Card className='card-div-class rounded'>
      <Card.Img src={Image1} variant='top' onClick={() => onVehicleClick()} />
      <div className='car-card-favourite-icon' onClick={() => getVehicleId()}>
        <OverlayTrigger
          overlay={
            <Tooltip id='favourite'>
              {' '}
              {`${favourite ? 'You favourited this car' : 'Add to favourites!'}`}
            </Tooltip>
          }
          placement='top'>
          <div className={`${favourite ? 'fill-red' : ''}`}>
            <AiFillHeart />
          </div>
        </OverlayTrigger>
      </div>
      <Card.Body onClick={() => onVehicleClick()}>
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
        <div onClick={() => onVehicleClick()}>
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
