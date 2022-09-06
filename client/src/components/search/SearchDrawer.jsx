import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { PRICE_MILEAGE_FIGURE } from '../../utils/constants';
import { Checkbox } from './Checkbox';
import { Box } from '@mui/material';

export const SearchDrawer = ({
  makes,
  models,
  colours,
  bodyTypes,
  fuelTypes,
  onSearchValueChange,
}) => {
  const [activeStatus, setActiveStatus] = useState('');
  const [activeMake, setActiveMake] = useState('');
  const [activeModel, setActiveModel] = useState('');
  const [activeColour, setActiveColour] = useState('');
  const [activeMinPrice, setActiveMinPrice] = useState('');
  const [activeMaxPrice, setActiveMaxPrice] = useState('');
  const [activeBodyType, setActiveBodyType] = useState('');
  const [activeMaxMileage, setActiveMaxMileage] = useState('');
  const [activeFuelType, setActiveFuelType] = useState('');

  const onStatusChange = (e) => {
    console.log('CONSOLE LOG E');
    console.log(e);
    const {
      target: { value },
    } = e;
    setActiveStatus(value, activeStatus);
    onSearchValueChange({ key: 'isNewCar', value: 'true' });
    // the field in the car model is called 'isNewCar' and its a boolean
  };

  // const onFavouriteChange = (e) => {
  //   console.log('CONSOLE LOG E');
  //   console.log(e);
  //   const {
  //     target: { value },
  //   } = e;
  //   setActiveStatus(value, activeStatus);
  //   onSearchValueChange({ key: 'favourites', value: 'true' });
  //   // the field in the car model is called 'isNewCar' and its a boolean
  // };

  const onMakeChange = (e) => {
    const {
      target: { value },
    } = e;
    setActiveMake(value);
    onSearchValueChange({ key: 'make', value });
  };

  const onModelChange = (e) => {
    const {
      target: { value },
    } = e;
    setActiveModel(value);
    onSearchValueChange({ key: 'model', value });
  };

  const onColourChange = (e) => {
    const {
      target: { value },
    } = e;
    setActiveColour(value);
    onSearchValueChange({ key: 'colour', value });
  };

  const onMinPriceChange = (e) => {
    const {
      target: { value },
    } = e;
    setActiveMinPrice(value);
    onSearchValueChange({ key: 'price[gte]', value });
  };

  const onMaxPriceChange = (e) => {
    const {
      target: { value },
    } = e;
    setActiveMaxPrice(value);
    onSearchValueChange({ key: 'price[lte]', value });
  };

  const onBodyTypeChange = (e) => {
    const {
      target: { value },
    } = e;
    setActiveBodyType(value);
    onSearchValueChange({ key: 'bodyType', value });
  };

  const onMileageChange = (e) => {
    const {
      target: { value },
    } = e;
    setActiveMaxMileage(value);
    onSearchValueChange({ key: 'mileage[lte]', value });
  };

  const onFuelTypeChange = (e) => {
    const {
      target: { value },
    } = e;
    setActiveFuelType(value);
    onSearchValueChange({ key: 'fuelType', value });
  };

  const resetFilters = () => {
    // window.history.replaceState(null, '', '/search?page=1');
    // window.location.reload('/search?page=1');
    window.location.href = '/search?page=1';
  };

  return (
    <div className='search-drawer-container p-5'>
      <div className='siderbar-text'>Filters</div>

      <Box className='reset-filters-button mb-5'>
        <Button onClick={resetFilters}>Reset</Button>
      </Box>

      <div className='dropdown'>
        <p className='siderbar-filter-text mt-3'>Car Status</p>
        <Checkbox label=' Select New Cars only' onChange={(e) => onStatusChange(e)} />
        {/* <p></p>
        <Checkbox label=' Select Favourites only' onChange={(e) => onFavouriteChange(e)} /> */}

        <p className='siderbar-filter-text mt-5'>Make & Model</p>
        <div>
          <Form.Select
            className='filter-holder-text mt-3'
            aria-label='select dropdown'
            id='make'
            name='make'
            onChange={(e) => onMakeChange(e)}>
            <option value='' defaultValue=''>
              Make:
            </option>
            {makes &&
              makes.map((make, i) => (
                <option key={i} value={make} selected={activeMake == make}>
                  {make}
                </option>
              ))}
          </Form.Select>
        </div>
      </div>

      <Form.Select
        className='filter-holder-text mt-3'
        aria-label='select dropdown'
        id='model'
        name='model'
        onChange={(e) => onModelChange(e)}>
        <option value='' defaultValue=''>
          Model:
        </option>
        {models &&
          models.map((model, i) => (
            <option key={i} value={model} selected={activeModel == model}>
              {model}
            </option>
          ))}
      </Form.Select>

      <p className='siderbar-filter-text mt-5'>Colour Selection</p>
      <div>
        <Form.Select
          className='filter-holder-text mt-3'
          aria-label='select dropdown'
          id='colours'
          name='colours'
          onChange={(e) => onColourChange(e)}>
          <option value='' defaultValue=''>
            Colour
          </option>
          {colours &&
            colours.map((colour, i) => (
              <option key={i} value={colour} selected={activeColour == colour}>
                {colour}
              </option>
            ))}
        </Form.Select>
      </div>

      <p className='siderbar-filter-text mt-5'>Pricing Range</p>
      <div>
        <Form.Select
          className='filter-holder-text mt-3'
          aria-label='select dropdown'
          id='minPrice'
          name='minPrice'
          onChange={(e) => onMinPriceChange(e)}>
          <option>Min Price:</option>
          <option
            selected={activeMinPrice === PRICE_MILEAGE_FIGURE.TWO}
            value={PRICE_MILEAGE_FIGURE.TWO}>
            {PRICE_MILEAGE_FIGURE.TWO}
          </option>
          <option
            selected={activeMinPrice === PRICE_MILEAGE_FIGURE.THREE}
            value={PRICE_MILEAGE_FIGURE.THREE}>
            {PRICE_MILEAGE_FIGURE.THREE}
          </option>
          <option
            selected={activeMinPrice === PRICE_MILEAGE_FIGURE.SEVEN}
            value={PRICE_MILEAGE_FIGURE.SEVEN}>
            {PRICE_MILEAGE_FIGURE.SEVEN}
          </option>
        </Form.Select>

        <Form.Select
          className='filter-holder-text mt-3'
          aria-label='select dropdown'
          id='maxPrice'
          name='maxPrice'
          onChange={(e) => onMaxPriceChange(e)}>
          <option>Max Price:</option>
          <option
            selected={activeMaxPrice === PRICE_MILEAGE_FIGURE.SIX}
            value={PRICE_MILEAGE_FIGURE.SIX}>
            {PRICE_MILEAGE_FIGURE.SIX}
          </option>
          <option
            selected={activeMaxPrice === PRICE_MILEAGE_FIGURE.THIRTEEN}
            value={PRICE_MILEAGE_FIGURE.THIRTEEN}>
            {PRICE_MILEAGE_FIGURE.THIRTEEN}
          </option>
          <option
            selected={activeMaxPrice === PRICE_MILEAGE_FIGURE.TWENTYONE}
            value={PRICE_MILEAGE_FIGURE.TWENTYONE}>
            {PRICE_MILEAGE_FIGURE.TWENTYONE}
          </option>
        </Form.Select>
      </div>

      <p className='siderbar-filter-text mt-5'>Body Styles</p>
      <div>
        <Form.Select
          className='filter-holder-text mt-3'
          aria-label='select dropdown'
          id='bodyType'
          name='bodyType'
          onChange={(e) => onBodyTypeChange(e)}>
          <option value='' defaultValue=''>
            Body Types:
          </option>
          {bodyTypes &&
            bodyTypes.map((bodyType, i) => (
              <option key={i} value={bodyType} selected={activeBodyType == bodyType}>
                {bodyType}
              </option>
            ))}
        </Form.Select>
      </div>

      <p className='siderbar-filter-text mt-5'>Engine Spec's</p>
      <div>
        <Form.Select
          className='filter-holder-text mt-3'
          aria-label='select dropdown'
          id='maxMileage'
          name='maxMileage'
          onChange={(e) => onMileageChange(e)}>
          <option>Max Mileage:</option>
          <option
            selected={activeMaxMileage === PRICE_MILEAGE_FIGURE.FIVE}
            value={PRICE_MILEAGE_FIGURE.FIVE}>
            {PRICE_MILEAGE_FIGURE.FIVE}
          </option>
          <option
            selected={activeMaxMileage === PRICE_MILEAGE_FIGURE.ELEVEN}
            value={PRICE_MILEAGE_FIGURE.ELEVEN}>
            {PRICE_MILEAGE_FIGURE.ELEVEN}
          </option>
          <option
            selected={activeMaxMileage === PRICE_MILEAGE_FIGURE.SEVENTEEN}
            value={PRICE_MILEAGE_FIGURE.SEVENTEEN}>
            {PRICE_MILEAGE_FIGURE.SEVENTEEN}
          </option>
        </Form.Select>
      </div>

      <Form.Select
        className='filter-holder-text mt-3'
        aria-label='select dropdown'
        id='fuelType'
        name='fuelType'
        onChange={(e) => onFuelTypeChange(e)}>
        <option value='' defaultValue=''>
          Fuel Types:
        </option>
        {fuelTypes &&
          fuelTypes.map((fuelType, i) => (
            <option key={i} value={fuelType} selected={activeFuelType == fuelType}>
              {fuelType}
            </option>
          ))}
      </Form.Select>
    </div>
  );
};
