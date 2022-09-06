import React, { useEffect, useState } from 'react';
// import { useAppState, useAppDispatch } from '../../context/appContext/context';
import { useParams } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CarCarousel from './CarCarousel';
import image1 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_2.jpg';
import image2 from '../../assets/img/cars/Ferrari_LaFerrari_Aperta_3.jpg';
// import { ContactSeller } from '../car/ContactSeller';
import { ContactSeller2 } from '../car/ContactSeller2';
import { AiFillCar } from 'react-icons/ai';
import { TbEngine } from 'react-icons/tb';
import { GiGearStick } from 'react-icons/gi';
import { IoIosSpeedometer } from 'react-icons/io';
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import { FaGasPump } from 'react-icons/fa';
import FinanceCalculator from '../common/FinanceCalculator';
import { currencyFormat } from '../../utils/helpers';
import { fetchVehicleById } from '../../services/vehicle.service';
import { CarDetailCarousel } from '../CarDetailCarousel';
import { fetchCarouselVehicles } from '../../services/vehicle.service';
import { toast } from 'react-toastify';

export const CarDetail = () => {
  // const { user, isAuthenticated } = useAppState();
  const [carouselVehicles, setCarouselVehicles] = useState([]);
  const [vehicle, setVehicle] = useState({});
  const params = useParams();

  const getVehicle = async () => {
    try {
      const vehicle = await fetchVehicleById(params.id);
      setVehicle(vehicle);
    } catch (error) {
      console.log(error);
    }
  };

  const getCarouselVehicles = async () => {
    try {
      const carouselVehicles = await fetchCarouselVehicles();
      setCarouselVehicles(carouselVehicles);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getVehicle();
    getCarouselVehicles();
  }, []);

  return (
    <div>
      <MDBRow className='car-imagery-row pt-5' md='12'>
        <MDBCol className='car-imagery-col1 pb-3' md='8'>
          <CarCarousel images={vehicle.images} className='carousel-image-cardetails' />
        </MDBCol>
        <MDBCol className='car-imagery-col1' md='4'>
          <MDBRow className='car-imagery-row1' md='12'>
            <img
              className='second-image-cardetails'
              style={{ width: '100%', height: '268px' }}
              src={vehicle?.images?.length > 0 ? vehicle?.images[4]?.url : image1}
              alt='second pic'
            />
          </MDBRow>
          <MDBRow className='car-imagery-row1 pt-3' md='12'>
            <img
              className='third-image-cardetails'
              style={{ width: '100%', height: '268px' }}
              src={vehicle?.images?.length > 0 ? vehicle?.images[5]?.url : image2}
              alt='third pic'
            />
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <MDBRow className='car-icon-display pt-5'>
        <MDBCol className='price-row-cardetails' md='5'>
          <h1 className='car-price-cardetails'>{currencyFormat(vehicle.price)}</h1>
        </MDBCol>
        <MDBCol className='pb-3' md='1'>
          <MDBRow className='cardetails-icons-icon text-center'>
            <AiFillCar size='26px' />
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1 pb-2'>
            <h5>{vehicle.bodyType}</h5>
          </MDBRow>
        </MDBCol>
        <MDBCol className='pb-3' md='1'>
          <MDBRow className='cardetails-icons-icon text-center'>
            <BsFillCalendar2DateFill size='20px' />
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1 pb-2'>
            <h5>{vehicle.year}</h5>
          </MDBRow>
        </MDBCol>
        <MDBCol className='pb-3' md='1'>
          <MDBRow className='cardetails-icons-icon text-center'>
            <IoIosSpeedometer size='25px' />
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1'>
            <h5>{vehicle.mileage}</h5>
          </MDBRow>
        </MDBCol>
        <MDBCol className='pb-3' md='1'>
          <MDBRow className='cardetails-icons-icon text-center'>
            <FaGasPump size='20px' />
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1'>
            <h5>{vehicle.fuelType}</h5>
          </MDBRow>
        </MDBCol>
        <MDBCol className='pb-3' md='1'>
          <MDBRow className='cardetails-icons-icon text-center'>
            <GiGearStick size='22px' />
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1'>
            <h5>{vehicle.transmission}</h5>
          </MDBRow>
        </MDBCol>
        <MDBCol className='pb-3' md='1'>
          <MDBRow className='cardetails-icons-icon text-center'>
            <h6 className='mt-1'>BHP</h6>
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1'>
            <h5>{vehicle.enginePower}</h5>
          </MDBRow>
        </MDBCol>
        <MDBCol className='pb-3' md='1'>
          <MDBRow className='cardetails-icons-icon text-center'>
            <TbEngine size='25px' />
          </MDBRow>
          <MDBRow className='cardetails-icons-icon text-center pt-1'>
            <h5>{vehicle.engineSize}</h5>
          </MDBRow>
        </MDBCol>
      </MDBRow>

      {/* overview and contact / finance sections */}
      <MDBRow>
        <MDBCol className='pt-5' md='8'>
          <div className='accordion' id='accordionExample'>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingOne'>
                <button
                  className='accordion-button'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseOne'
                  aria-expanded='true'
                  aria-controls='collapseOne'>
                  Description
                </button>
              </h2>
              <div
                id='collapseOne'
                className='accordion-collapse collapse show'
                aria-labelledby='headingOne'
                data-bs-parent='#accordionExample'>
                <div className='accordion-body'>{vehicle.description}</div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingTwo'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseTwo'
                  aria-expanded='false'
                  aria-controls='collapseTwo'>
                  Specification
                </button>
              </h2>
              <div
                id='collapseTwo'
                className='accordion-collapse collapse'
                aria-labelledby='headingTwo'
                data-bs-parent='#accordionExample'>
                <div className='accordion-body'>{vehicle.specification}</div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingThree'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseThree'
                  aria-expanded='false'
                  aria-controls='collapseThree'>
                  Features
                </button>
              </h2>
              <div
                id='collapseThree'
                className='accordion-collapse collapse'
                aria-labelledby='headingThree'
                data-bs-parent='#accordionExample'>
                <div className='accordion-body'>{vehicle.features}</div>
              </div>
            </div>
          </div>
        </MDBCol>
        <MDBCol className='pt-5' md='4'>
          <MDBRow className='mainContainer'>
            {/* <ContactSeller /> */}
            <ContactSeller2 vehicle={vehicle} />
          </MDBRow>
          <MDBRow className='mainContainer2'>
            <h1 className='pt-2'>Finance Example</h1>
            <FinanceCalculator />
          </MDBRow>
        </MDBCol>
        <MDBCol className='similar-for-sale pt-5 pb-5' md='12'>
          <h1 className='pt-2'>Similar For Sale</h1>
          <CarDetailCarousel carouselVehicles={carouselVehicles} />
        </MDBCol>
      </MDBRow>
    </div>
  );
};
