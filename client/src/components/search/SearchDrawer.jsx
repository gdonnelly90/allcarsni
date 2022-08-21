import React, { useState, UseEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { PRICE_MILEAGE_FIGURE } from '../../utils/constants';
// import { MAKE } from '../../utils/constants';
import { STATUS } from '../../utils/constants';
import { MODEL } from '../../utils/constants';
// import { COLOUR } from '../../utils/constants';
import { FUEL_TYPE } from '../../utils/constants';
import { BODYTYPE } from '../../utils/constants';
import { Checkbox } from './Checkbox';

export const SearchDrawer = ({ makes, models, colours, onSearchValueChange }) => {
  // let navigate = useNavigate();
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

  const onBodyChange = (e) => {
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

  const onFuelChange = (e) => {
    const {
      target: { value },
    } = e;
    setActiveFuelType(value);
    onSearchValueChange({ key: 'fuelType', value });
  };

  // const handleCheck = (e) => {
  //   // const {target: { value },
  //   // } = e;
  //   if (e.{target: { value }}.checked) {
  //     setActiveStatus(value, activeStatus);
  //     onSearchValueChange({ key: 'isNewCar', value: 'true' });
  //   }
  // };

  return (
    <div className='search-drawer-container p-5'>
      <p className='siderbar-text'>Filters</p>
      <div className='dropdown'>
        <p className='siderbar-filter-text mt-3'>Car Status</p>
        <Checkbox label=' Select for New Cars only' onChange={(e) => onStatusChange(e)} />
        {/* <p className='siderbar-filter-text mt-2'>Select for New Cars Only</p> */}
        {/* <div class='form-check mb20'>
          <input class='form-check-input' type='checkbox' value='' id='flexCheckPetrolSbp' />
          <label class='form-check-label' for='flexCheckPetrolSbp'>
            Select for New Cars Only
          </label>
        </div> */}
        {/* input value='isNewCar' type='checkbox' onChange={handleCheck} /> */}
        {/* Vegetarisma Farm <input type='checkbox' checked /> <span className='check'></span>{' '} */}
        {/* <div>
          <Form.Select
            className='filter-holder-text'
            aria-label='select dropdown'
            id='status'
            name='status'
            onChange={(e) => onStatusChange(e)}>
            <option>Select New or Used Condition</option>
            <option selected={activeStatus === STATUS.NEW} value={STATUS.TRUE}>
              {STATUS.NEW}
            </option>
            <option selected={activeStatus === STATUS.USED} value={STATUS.FALSE}>
              {STATUS.USED}
            </option>
          </Form.Select>
        </div> */}
        <p className='siderbar-filter-text mt-5'>Make & Model</p>
        <div>
          <Form.Select
            className='filter-holder-text mt-3'
            aria-label='select dropdown'
            id='make'
            name='make'
            onChange={(e) => onMakeChange(e)}>
            <option value='' defaultValue={''}>
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
        <option value='' defaultValue={''}>
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
          <option value='' defaultValue={''}>
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
          onChange={(e) => onBodyChange(e)}>
          <option>Body Style:</option>
          <option selected={activeBodyType === BODYTYPE.ESTATE} value={BODYTYPE.ESTATE}>
            {BODYTYPE.ESTATE}
          </option>
          <option selected={activeBodyType === BODYTYPE.SALOON} value={BODYTYPE.SALOON}>
            {BODYTYPE.SALOON}
          </option>
          <option selected={activeBodyType === BODYTYPE.SUV} value={BODYTYPE.SUV}>
            {BODYTYPE.SUV}
          </option>
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
        onChange={(e) => onFuelChange(e)}>
        <option>Fuel Type:</option>
        <option selected={activeFuelType === FUEL_TYPE.ELECTRIC} value={FUEL_TYPE.ELECTRIC}>
          {FUEL_TYPE.ELECTRIC}
        </option>
        <option selected={activeFuelType === FUEL_TYPE.PETROL} value={FUEL_TYPE.PETROL}>
          {FUEL_TYPE.PETROL}
        </option>
        <option selected={activeFuelType === FUEL_TYPE.DIESEL} value={FUEL_TYPE.DIESEL}>
          {FUEL_TYPE.DIESEL}
        </option>
      </Form.Select>
    </div>
  );
};

{
  /* <p className='siderbar-filter-text mt-5'>Engine Specs</p>
<button
  className='drawer-button dropdown-toggle rounded'
  type='button'
  data-bs-toggle='dropdown'
  aria-expanded='false'>
  Max Mileage
</button>
<ul className='dropdown-menu'>
  <li>
    <a className='dropdown-item' onClick={() => onMileageChange(PRICE_MILEAGE_FIGURE.FIVE)}>
      20000
    </a>
  </li>
  <li>
    <a className='dropdown-item' onClick={() => onMileageChange(PRICE_MILEAGE_FIGURE.ELEVEN)}>
      50000
    </a>
  </li>
  <li>
    <a
      className='dropdown-item'
      onClick={() => onMileageChange(PRICE_MILEAGE_FIGURE.SEVENTEEN)}>
      80000
    </a>
  </li>
</ul> */
}

// <div className='dropdown'>
//   <button
//     className='drawer-button dropdown-toggle rounded mt-4'
//     type='button'
//     data-bs-toggle='dropdown'
//     aria-expanded='false'>
//     Fuel Type
//   </button>
//   <ul className='dropdown-menu'>
//     <li>
//       <a className='dropdown-item' onClick={() => onFuelChange(FUEL_TYPE.ELECTRIC)}>
//         Electric
//       </a>
//     </li>
//     <li>
//       <a className='dropdown-item' onClick={() => onFuelChange(FUEL_TYPE.PETROL)}>
//         Petrol
//       </a>
//     </li>
//     <li>
//       <a className='dropdown-item' onClick={() => onFuelChange(FUEL_TYPE.DIESEL)}>
//         Diesel
//       </a>
//     </li>
//   </ul>
// </div>

// const onColourClick = (colour) => {
//   navigate(`?colour=${colour}`);
// };

// const onMinPriceClick = (price) => {
//   navigate(`?price[gte]=${price}`);
// };

// const onMaxPriceClick = (price) => {
//   navigate(`?price[lte]=${price}`);
// };

// const onMaxMileageClick = (mileage) => {
//   navigate(`?mileage[lte]=${mileage}`);
// };

// const onFuelTypeClick = (fuelType) => {
//   navigate(`?fuelType=${fuelType}`);
// };
