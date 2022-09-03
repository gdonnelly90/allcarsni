import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import home_logo from '../assets/img/red_white_logo.png';
import home_car from '../assets/img/fullwidth/bugatti_back1b.jpg';
import LatestNews from '../components/common/LatestNews';
import SellYourCar from '../components/SellYourCar';
import { BODYTYPE } from '../utils/constants';
import {
  fetchAllVehicles,
  fetchFilterData,
  fetchVehicleModelsByMake,
} from '../services/vehicle.service';
import { SearchSimple } from '../components/search/SearchSimple';
import queryString from 'query-string';
import { toast } from 'react-toastify';
import woman from '../assets/img/woman_selling.jpg';

export const Home2 = ({}) => {
  let navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [query, setQuery] = useState({});
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);

  // function to get all cars
  const onBrowseCarsClick = () => {
    navigate('search?page=1');
  };

  // function to get all electric cars by icon click
  const onElectricIconClick = () => {
    navigate('search?fuelType=Electric&page=1');
  };

  // function to get all cars based on bodyType icon click
  const onBodyTypeClick = (bodyType) => {
    navigate(`search?bodyType=${bodyType}&page=1`);
  };

  // get all the vehicles so we can get make and model
  const getVehicles = async (queryParams) => {
    try {
      const vehicles = await fetchAllVehicles(queryString.stringify(queryParams));
      setVehicles(vehicles);
      window.scrollTo(0, 0);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // function to get all models
  const getModels = async (model) => {
    try {
      const response = await fetchVehicleModelsByMake(model);
      setModels(response);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // function to get all filter data
  const getInitialFilterData = async () => {
    try {
      const [makes] = await fetchFilterData();
      setMakes(makes);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSearchValueChange = (param) => {
    const { key, value } = param;

    // if param.key is of make - call model api
    if (key === 'make') {
      getModels(value);
    }

    const query = window.location.search;
    // return object of query string to make it easier to process
    const parsedQuery = { ...queryString.parse(query), page: 1, [`${key}`]: value };
    setURL(parsedQuery);
    // set local query
    // setQuery(parsedQuery);
  };

  const stringifyUrl = (obj) => {
    return queryString.stringify(obj);
  };

  const setURL = (params) => {
    window.history.replaceState(null, '', `/search?${stringifyUrl(params)}`);
  };

  const buildQuery = () => {
    // will get the full query string from the URL
    const windowSearch = window.location.search;

    const fullQuery = { ...queryString.parse(windowSearch) };
    // set the query string needed for API call

    getVehicles(fullQuery);
  };

  useEffect(() => {
    buildQuery();
  }, [query]);

  useEffect(() => {
    getInitialFilterData();
  }, []);

  return (
    <MDBCol>
      <MDBRow className='hero-column-home' md='12'>
        <div className='home-image-logo-row'>
          <SearchSimple makes={makes} models={models} onSearchValueChange={onSearchValueChange} />
          {/* <SimpleSearch /> */}
          <img className='home-logo' src={home_logo} />
          <img className='home-car' src={home_car} />
        </div>
      </MDBRow>

      {/* Car type */}
      <MDBRow md='12'>
        <div className='home-row-3 text-center'>
          <h1>Quick Search By Body Style</h1>
        </div>
        <MDBRow md='12'>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='2 text-center'>
            <img
              className='icon-electric'
              src={require('../assets/img/icons/electric.webp')}
              onClick={() => onElectricIconClick()}
            />
            <p>Electric</p>
          </MDBCol>
          <MDBCol md='2 text-center'>
            <img
              className='icon-suv'
              src={require('../assets/img/icons/suv.webp')}
              onClick={() => onBodyTypeClick(BODYTYPE.SUV)}
            />
            <p>SUV</p>
          </MDBCol>{' '}
          <MDBCol md='2 text-center'>
            <img
              className='icon-hatchback'
              src={require('../assets/img/icons/hatchback.webp')}
              onClick={() => onBodyTypeClick(BODYTYPE.HATCHBACK)}
            />
            <p>Hatchback</p>
          </MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
        </MDBRow>
        <MDBRow md='12'>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='2 text-center'>
            <img
              className='icon-coupe'
              src={require('../assets/img/icons/coupe.webp')}
              onClick={() => onBodyTypeClick(BODYTYPE.SALOON)}
            />
            <p>Saloon</p>
          </MDBCol>
          <MDBCol md='2 text-center'>
            <img
              className='icon-estate'
              src={require('../assets/img/icons/estate.webp')}
              onClick={() => onBodyTypeClick(BODYTYPE.ESTATE)}
            />
            <p>Estate</p>
          </MDBCol>{' '}
          <MDBCol md='2 text-center'>
            <img
              className='icon-convertible'
              src={require('../assets/img/icons/convertible.webp')}
              onClick={() => onBodyTypeClick(BODYTYPE.CONVERTIBLE)}
            />
            <p>Convertible</p>
          </MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
          <MDBCol md='1'></MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div className='home-button gap-2 text-center'>
              <Button variant='outline-secondary' size='lg' onClick={() => onBrowseCarsClick()}>
                Browse all cars
              </Button>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBRow>

      {/* row of car pictures */}
      <MDBRow className='column-main-cars-home pt-5' md='12'>
        <MDBCol className='column1-home' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/bugatti_dubai2.jpg')}
          />
        </MDBCol>
        <MDBCol className='column2-home' md='3 text-center'>
          <img className='image-home-car-1' src={require('../assets/img/fullwidth/zonda.jpg')} />
        </MDBCol>{' '}
        <MDBCol className='column3-home' md='3 text-center'>
          <img className='image-home-car-1' src={require('../assets/img/fullwidth/mclaren2.jpg')} />
        </MDBCol>
        <MDBCol className='column4-home' md='3 text-center'>
          <img className='image-home-car-1' src={require('../assets/img/fullwidth/sf90.jpg')} />
        </MDBCol>
        <MDBCol className='column5-home' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/koenigsegg.jpg')}
          />
        </MDBCol>
        <MDBCol className='column6-home' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/laferrari.jpg')}
          />
        </MDBCol>{' '}
        <MDBCol className='column7-home' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/bugatti_blue.jpg')}
          />
        </MDBCol>
        <MDBCol className='column8-home' md='3 text-center'>
          <img
            className='image-home-car-1'
            src={require('../assets/img/fullwidth/911_turbo.jpg')}
          />
        </MDBCol>
      </MDBRow>
      {/* latest news feature */}
      <MDBRow className='column-main-cars-home pb-5' md='12'>
        <LatestNews />
      </MDBRow>
      {/* sell your car elements */}
      <MDBRow className='column-main-cars-home pt-5 pb-5' md='12'>
        <MDBCol className='column1-home' md='7 text-center'>
          <div className='image-home-solid-1' style={{ width: '100%', height: '450px' }}>
            <SellYourCar />
          </div>
        </MDBCol>
        <MDBCol className='column2-home' md='5 text-center'>
          <img
            className='image-home-car-1'
            style={{ width: '100%', height: '450px' }}
            src={woman}
          />
        </MDBCol>
      </MDBRow>
    </MDBCol>
  );
};
