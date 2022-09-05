import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { currencyFormat } from '../../utils/helpers';
import { toast } from 'react-toastify';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Image1 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_1.jpg';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { putFavourites } from '../../services/favourite.service';
import { isEmpty } from 'lodash';
import { useAppState, useAppDispatch } from '../../context/appContext/context';

//adding the individual data points to set a 'vehicle'
const CarCard = ({ vehicle }) => {
  // appstate context lift out the  userId = id
  // const { id = '' } = app.user - this is the currently logged in user

  const { user } = useAppState();
  let navigate = useNavigate();
  const [favourite, setFavourite] = useState(vehicle.favourites);
  const [isFavourite, setIsFavourite] = useState(vehicle.favourites);

  const {
    _id,
    price,
    make,
    model,
    variant,
    modelVariant,
    year,
    engineSize,
    enginePower,
    transmission,
    fuelType,
    mileage,
    numberOfOwners,
    // favourites,
  } = vehicle;

  const getVehicleId = async () => {
    try {
      putFavourites(_id);
      toggleHeart();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onVehicleClick = () => {
    navigate(`/vehicle/${_id}`);
  };

  // favourites.user.filter((favourite) => favourite.user.toString() === req.user.id).length > 0;

  const toggleHeart = async () => {
    if (
      vehicle.favourites.filter((favourite) => favourite.user.toString() === user.id).length > 0
    ) {
      <AiFillHeart />;
    }
  };

  // useEffect(() => {
  //   // setFavourites();
  //   checkFavourites();
  // }, []);

  return (
    <Card className='card-div-class rounded'>
      <Card.Img src={Image1} variant='top' onClick={() => onVehicleClick()} />
      {/* <div className='car-card-favourite-icon' onClick={() => getVehicleId()}> */}
      <div className='car-card-favourite-icon'>
        <AiOutlineHeart onClick={() => getVehicleId()} />
      </div>
      <Card.Body onClick={() => onVehicleClick()}>
        <div className='card-top-text'>
          <div>{currencyFormat(price)}</div>
        </div>
        <div className='mb-2'>
          {make} {model} {variant} {modelVariant || ''}
        </div>
        <div onClick={() => onVehicleClick()}>
          {/* <li className='card-small-elements mt-2'>2019</li> */}
          <li className='card-small-elements mt-2'>{year}</li>
          <li className='card-small-elements'>{engineSize}L</li>
          <li className='card-small-elements'>{enginePower} BHP</li>
          <li className='card-small-elements'>{transmission}</li>
        </div>
        <div className='pt-1'>
          <li className='card-small-elements'>{fuelType}</li>
          <li className='card-small-elements'>{mileage} miles</li>
          <li className='card-small-elements'>{numberOfOwners} owners</li>
        </div>
      </Card.Body>
      <hr className='my-4' />
      <Container>
        <Row>
          <Col md={7}>
            <p className='card-footer-text'>Charles Hurst (2,220)</p>
          </Col>
          <Col md={5}>
            <p className='card-footer-text text-end'>
              {(Math.random() * 100).toFixed(2)} miles away
            </p>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default CarCard;

{
  /* <OverlayTrigger
          overlay={
            <Tooltip id='favourite'>
              {' '}
              {`${favourite ? 'You favourited this car' : 'Add to favourites!'}`}
            </Tooltip>
          }
          placement='top'>
          <div className='fill-red-heart'>
            <span>{favourites.length > 0 && <span>{favourites.length}</span>}</span>
            </div>
          </OverlayTrigger> */
}
{
  /* <AiOutlineHeart /> */
}
{
  /* {setFavourite()} */
}

// new function setFavourite
// const setFavouriute = () => {}
// if(isEmpty(id)) { return out <div></div>}
// else - we know user is logged in - we want check if the current user id is in the list of vehicle.favourites
// const isFavourite favourites.some(f => f.user === id);
// return isFavourite ? <AiFillHeart /> : <AiOutlineHeart />
// Cars.find({ 'favourites.user': mongoose.Types.ObjectId('62e7fc9bba5f9bac64897a83') } )
// console.log('---VEHC USER');
// console.log(vehicle.favourites.user);

// const checkFavourites = () => {
//   console.log('---called---');
//   if (!isEmpty(user.id)) {
//     return isFavourite ? <AiFillHeart /> : <AiOutlineHeart />;
//   }
// };
// const { user, id } = favourite;

// console.log('fAVOURITE');
// console.log(favourite);
// console.log('fAVOURITE USER');
// console.log(user);
// const testValue =
//   vehicle.favourites.some((favourite) => favourite.user.toString() === user.id).length > 0;
// console.log('testValue');
// console.log(testValue);

// const setFavourites = () => {
//   if (
//     // this returns true
//     vehicle.favourites.filter((favourite) => favourite.user.toString() === user.id).length > 0 ===
//     true
//   ) {
//     <AiFillHeart />;
//   } else {
//     <AiOutlineHeart />;
//   }
// };

// if (isEmpty(vehicle.favourites)) {
//   console.log('Vehicle Doesnt have a favourite');
// } else {
//   console.log('VEHICLE');
//   console.log(vehicle._id);
// }

// console.log('VEHICLE');
// console.log(vehicle.favourites.user);
// if (vehicle.favourites) console.log(vehicle.favourites);

//   if (isEmpty(id)) {
//     return <div></div>;
//   } else {
//     const isFavourite = favourites.some((f) => f.user === id);
//     return isFavourite ? <AiFillHeart /> : <AiOutlineHeart />;
//   }
// };
// console.log('---vehicle favourites-----');
// console.log(vehicle.favourites);
