import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Form, Button } from 'react-bootstrap';
import queryString from 'query-string';

export const SearchSimple = ({ makes, models, onSearchValueChange }) => {
  let navigate = useNavigate();

  const [activeMake, setActiveMake] = useState('');
  const [activeModel, setActiveModel] = useState('');

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

  let query = window.location.search;

  // const stringifyUrl = (obj) => {
  //   return queryString.stringify(obj);
  // };

  const commitSimpleFilters = (params) => {
    // console.log('PARAMS');
    // console.log(params);
    // console.log('-------');
    navigate(`/search${params}`);
  };

  return (
    <section className='search-wrapper'>
      <div className='container'>
        {/* <form action='#' method='post' novalidate='novalidate'> */}
        <Row className='mb-3'>
          <div className='col-lg-12'>
            {/* <div className='row justify-content-center'> */}
            <Row className='filter-row-homepage justify-content-center mb-3'>
              <div className='col-lg-3 col-md-3 col-sm-12'>
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
              <div className='col-lg-3 col-md-3 col-sm-12'>
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
              </div>
              <div className='col-lg-1 col-md-1 col-sm-1 mt-3'>
                {/* <button type='submit' className='btn btn-danger wrn-btn'>
                  Search
                </button> */}
                {/* <Button variant='warning' type='button' onClick={() => commitSimpleFilters(query)}>
                  {' '} */}
                {/* </Button> */}
                {/* <Button variant='primary' type='submit'></Button> */}
                <Button variant='primary' onClick={() => commitSimpleFilters(query)}>
                  Search
                </Button>
              </div>
            </Row>
          </div>
        </Row>
      </div>
    </section>
  );
};
