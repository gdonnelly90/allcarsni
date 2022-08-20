import React, { useState, UseEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { PRICE_MILEAGE_FIGURE } from '../../utils/constants';
import { MAKE } from '../../utils/constants';
import { MODEL } from '../../utils/constants';
import { COLOUR } from '../../utils/constants';
import { FUEL_TYPE } from '../../utils/constants';
import { BODYTYPE } from '../../utils/constants';

export const SearchDrawer = ({ makes, onSearchValueChange }) => {
  let navigate = useNavigate();
  const [activeMake, setActiveMake] = useState('');

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
    // setActiveMake(value);
    // onSearchValueChange({ key: 'model', value });
  };

  const onColourChange = (e) => {
    const {
      target: { value },
    } = e;
    // setActiveMake(value);
    // onSearchValueChange({ key: 'make', value });
  };

  const onMinPriceChange = (e) => {
    const {
      target: { value },
    } = e;
    // setActiveMake(value);
    // onSearchValueChange({ key: 'model', value });
  };

  const onMaxPriceChange = (e) => {
    const {
      target: { value },
    } = e;
    // setActiveMake(value);
    // onSearchValueChange({ key: 'make', value });
  };

  const onMileageChange = (e) => {
    const {
      target: { value },
    } = e;
    // setActiveMake(value);
    // onSearchValueChange({ key: 'model', value });
  };

  const onFuelChange = (e) => {
    const {
      target: { value },
    } = e;
    // setActiveMake(value);
    // onSearchValueChange({ key: 'make', value });
  };

  const onColourClick = (colour) => {
    navigate(`?colour=${colour}`);
  };

  const onMinPriceClick = (price) => {
    navigate(`?price[gte]=${price}`);
  };

  const onMaxPriceClick = (price) => {
    navigate(`?price[lte]=${price}`);
  };

  const onMaxMileageClick = (mileage) => {
    navigate(`?mileage[lte]=${mileage}`);
  };

  const onFuelTypeClick = (fuelType) => {
    navigate(`?fuelType=${fuelType}`);
  };

  return (
    <div className='search-drawer-container p-5'>
      <p className='siderbar-text'>Filters</p>
      <div className='dropdown'>
        <p className='siderbar-filter-text'>Make & Model</p>
        <div>
          <Form.Select
            aria-label='Default select example'
            id='make'
            name='make'
            onChange={(e) => onMakeChange(e)}>
            <option value='' defaultValue={''}>
              Make
            </option>
            {makes.map((make, i) => (
              <option key={i} value={make} selected={activeMake == make}>
                {make}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>
      <Form.Select
        className='mt-3'
        aria-label='Default select example'
        id='model'
        name='model'
        onChange={(e) => onModelChange(e)}>
        <option>Model</option>
        // change activeMake to activeModel
        <option selected={activeMake === MODEL.MODEL1} value={MODEL.MODEL1}>
          {MODEL.MODEL1}
        </option>
        <option selected={activeMake === MODEL.MODEL2} value={MODEL.MODEL2}>
          {MODEL.MODEL2}
        </option>
        <option selected={activeMake === MODEL.MODEL3} value={MODEL.MODEL3}>
          {MODEL.MODEL3}
        </option>
      </Form.Select>
      <p className='siderbar-filter-text mt-5'>Colour</p>
      <div>
        <Form.Select
          className='mt-3'
          aria-label='Default select example'
          id='colour'
          name='colour'
          onChange={(e) => onColourChange(e)}>
          <option>Colour</option>
          <option selected={activeMake === COLOUR.WHITE} value={COLOUR.WHITE}>
            {COLOUR.WHITE}
          </option>
          <option selected={activeMake === COLOUR.BLACK} value={COLOUR.BLACK}>
            {COLOUR.BLACK}
          </option>
          <option selected={activeMake === COLOUR.GREY} value={COLOUR.GREY}>
            {COLOUR.GREY}
          </option>
        </Form.Select>
      </div>
      <p className='siderbar-filter-text mt-5'>Price</p>
      <div>
        <Form.Select
          className='mt-3'
          aria-label='Default select example'
          id='minPrice'
          name='minPrice'
          onChange={(e) => onMinPriceChange(e)}>
          <option>Min Price</option>
          <option
            selected={activeMake === PRICE_MILEAGE_FIGURE.ONE}
            value={PRICE_MILEAGE_FIGURE.ONE}>
            {PRICE_MILEAGE_FIGURE.ONE}
          </option>
          <option
            selected={activeMake === PRICE_MILEAGE_FIGURE.THREE}
            value={PRICE_MILEAGE_FIGURE.THREE}>
            {PRICE_MILEAGE_FIGURE.THREE}
          </option>
          <option
            selected={activeMake === PRICE_MILEAGE_FIGURE.ELEVEN}
            value={PRICE_MILEAGE_FIGURE.ELEVEN}>
            {PRICE_MILEAGE_FIGURE.ELEVEN}
          </option>
        </Form.Select>
        <Form.Select
          className='mt-3'
          aria-label='Default select example'
          id='maxPrice'
          name='maxPrice'
          onChange={(e) => onMinPriceChange(e)}>
          <option>Max Price</option>
          <option
            selected={activeMake === PRICE_MILEAGE_FIGURE.FIVE}
            value={PRICE_MILEAGE_FIGURE.FIVE}>
            {PRICE_MILEAGE_FIGURE.FIVE}
          </option>
          <option
            selected={activeMake === PRICE_MILEAGE_FIGURE.THIRTEEN}
            value={PRICE_MILEAGE_FIGURE.THIRTEEN}>
            {PRICE_MILEAGE_FIGURE.THIRTEEN}
          </option>
          <option
            selected={activeMake === PRICE_MILEAGE_FIGURE.TWENTYONE}
            value={PRICE_MILEAGE_FIGURE.TWENTYONE}>
            {PRICE_MILEAGE_FIGURE.TWENTYONE}
          </option>
        </Form.Select>
      </div>
      <p className='siderbar-filter-text mt-5'>Body Style</p>
      <div>
        <Form.Select
          className='mt-3'
          aria-label='Default select example'
          id='colour'
          name='colour'
          onChange={(e) => onColourChange(e)}>
          <option>Body style</option>
          <option selected={activeMake === BODYTYPE.CONVERTIBLE} value={BODYTYPE.CONVERTIBLE}>
            {BODYTYPE.CONVERTIBLE}
          </option>
          <option selected={activeMake === BODYTYPE.SALOON} value={BODYTYPE.SALOON}>
            {BODYTYPE.SALOON}
          </option>
          <option selected={activeMake === BODYTYPE.SUV} value={BODYTYPE.SUV}>
            {BODYTYPE.SUV}
          </option>
        </Form.Select>
      </div>
      <p className='siderbar-filter-text mt-5'>Price</p>
      <div></div>
      {/* <div className='dropdown'>
        <p className='siderbar-filter-text mt-5'>Colour</p>
        <button
          className='drawer-button dropdown-toggle rounded'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          Colour
        </button>
        <ul className='dropdown-menu'>
          <li>
            <a className='dropdown-item' onClick={() => onColourClick(PRICE_MILEAGE_FIGURE.FIVE)}>
              White
            </a>
          </li>
          <li>
            <a className='dropdown-item' onClick={() => onColourClick(COLOUR.BLACK)}>
              Black
            </a>
          </li>
          <li>
            <a className='dropdown-item' onClick={() => onColourClick(COLOUR.GREY)}>
              Grey
            </a>
          </li>
        </ul>
        {/* <hr style={{ width: '100%', size: '3px', color: '#c53030' }} /> */}

      <div className='dropdown'>
        <p className='siderbar-filter-text mt-5'>Price</p>
        <button
          className='drawer-button dropdown-toggle rounded'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          Minimum Price
        </button>
        <ul className='dropdown-menu'>
          <li>
            <a className='dropdown-item' onClick={() => onMinPriceClick(PRICE_MILEAGE_FIGURE.ONE)}>
              0
            </a>
          </li>
          <li>
            <a
              className='dropdown-item'
              onClick={() => onMinPriceClick(PRICE_MILEAGE_FIGURE.THREE)}>
              10000
            </a>
          </li>
          <li>
            <a
              className='dropdown-item'
              onClick={() => onMinPriceClick(PRICE_MILEAGE_FIGURE.SEVEN)}>
              30000
            </a>
          </li>
        </ul>
      </div>
      <div className='dropdown'>
        <button
          className='drawer-button dropdown-toggle rounded mt-4'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          Maximum Price
        </button>
        <ul className='dropdown-menu'>
          <li>
            <a className='dropdown-item' onClick={() => onMaxPriceClick(PRICE_MILEAGE_FIGURE.FIVE)}>
              20000
            </a>
          </li>
          <li>
            <a
              className='dropdown-item'
              onClick={() => onMaxPriceClick(PRICE_MILEAGE_FIGURE.ELEVEN)}>
              50000
            </a>
          </li>
          <li>
            <a
              className='dropdown-item'
              onClick={() => onMaxPriceClick(PRICE_MILEAGE_FIGURE.TWENTYONE)}>
              100000
            </a>
          </li>
        </ul>
        {/* <hr style={{ width: '100%', size: '3px', color: '#c53030' }} /> */}
      </div>

      <div className='dropdown'>
        <p className='siderbar-filter-text mt-5'>Engine Specs</p>
        <button
          className='drawer-button dropdown-toggle rounded'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          Max Mileage
        </button>
        <ul className='dropdown-menu'>
          <li>
            <a
              className='dropdown-item'
              onClick={() => onMaxMileageClick(PRICE_MILEAGE_FIGURE.FIVE)}>
              20000
            </a>
          </li>
          <li>
            <a
              className='dropdown-item'
              onClick={() => onMaxMileageClick(PRICE_MILEAGE_FIGURE.ELEVEN)}>
              50000
            </a>
          </li>
          <li>
            <a
              className='dropdown-item'
              onClick={() => onMaxMileageClick(PRICE_MILEAGE_FIGURE.SEVENTEEN)}>
              80000
            </a>
          </li>
        </ul>
      </div>
      <div className='dropdown'>
        <button
          className='drawer-button dropdown-toggle rounded mt-4'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          Fuel Type
        </button>
        <ul className='dropdown-menu'>
          <li>
            <a className='dropdown-item' onClick={() => onFuelTypeClick(FUEL_TYPE.ELECTRIC)}>
              Electric
            </a>
          </li>
          <li>
            <a className='dropdown-item' onClick={() => onFuelTypeClick(FUEL_TYPE.PETROL)}>
              Petrol
            </a>
          </li>
          <li>
            <a className='dropdown-item' onClick={() => onFuelTypeClick(FUEL_TYPE.DIESEL)}>
              Diesel
            </a>
          </li>
        </ul>
        {/* <hr style={{ width: '100%', size: '3px', color: '#c53030' }} /> */}
      </div>
    </div>
  );
};
