import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { currencyFormat } from '../../utils/helpers';
import { toast } from 'react-toastify';
import { isEmpty } from 'lodash';
import Image1 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_1.jpg';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { putFavourites } from '../../services/favourite.service';
import { useAppState, useAppDispatch } from '../../context/appContext/context';
import { AuthContext } from '../../context/AuthContext';
import { deleteSelectedVehicle } from '../../services/vehicle.service';

//adding individual data points to set a 'vehicle'
const CarCard = ({ vehicle }) => {
  const { user, isAuthenticated } = useAppState();
  const auth = useContext(AuthContext);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const [isFavourite, setIsFavourite] = useState(false);

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
    favourites,
    images,
  } = vehicle;

  const toggleFavourite = async () => {
    try {
      console.log('--_id carcard here----');
      console.log(_id);
      setIsFavourite((prev) => !prev);
      putFavourites(_id);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onVehicleClick = () => {
    navigate(`/vehicle/${_id}`);
  };

  const getImagePrimary = () => {
    if (!isEmpty(images)) {
      return images[0].url;
    }
    return Image1;
  };

  const displayFavourite = () => {
    const favourite = [...favourites].some((f) => f.user === user.id) || isFavourite;
    return favourite ? <AiFillHeart /> : <AiOutlineHeart />;
  };

  const deleteListing = async () => {
    try {
      const data = await deleteSelectedVehicle(_id);
      return toast.success('Vehicle sold');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const editListing = async () => {
    try {
      // const data = await deleteSelectedVehicle(_id);
      // return toast.success('Vehicle edited');
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // watch for favourite change to rerender
    displayFavourite();
  }, [isFavourite]);

  return (
    <Card className='card-div-class rounded'>
      <Card.Img src={getImagePrimary()} variant='top' onClick={() => onVehicleClick()} />
      {isAuthenticated && user.id !== vehicle.user ? (
        <div className='car-card-favourite-icon' onClick={() => toggleFavourite()}>
          {displayFavourite()}
        </div>
      ) : null}
      {isAuthenticated && user.id === vehicle.user ? (
        <div className='car-card-delete-icon'>
          <AiFillDelete onClick={() => deleteListing()} />
        </div>
      ) : null}
      {isAuthenticated && user.id === vehicle.user ? (
        <div className='car-card-edit-icon'>
          <AiFillEdit onClick={() => editListing()} />
        </div>
      ) : null}
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
            <p className='card-footer-text'>Seller Distance (from you)</p>
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

// <div className='car-card-delete-icon'>
//   <AiFillDelete onClick={() => deleteListing()} />
// </div>;
