import React, { useState, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { FormInput } from '../components/formComponents/FormInput';
import { Label } from '../components/formComponents/Label';
import PropTypes from 'prop-types';
import Individual from './forms/Individual';
import TradeSeller from './forms/TradeSeller';
import DealerSeller from './forms/DealerSeller';

const RegisterTest = () => {
  const accountTypes = [
    { id: 1, label: 'Individual Seller ', value: 'individualSeller' },
    { id: 2, label: 'Trader Seller ', value: 'tradeSeller' },
    { id: 3, label: 'Dealership Seller ', value: 'dealershipSeller' },
  ];

  const [selectedAccountId, setAccountId] = useState(1);

  return (
    <Formik>
      {() => (
        <div className='form-login-wrapper'>
          <Form className='mt-8 form-login card p-5'>
            <div className='form-login text-center mb-2'>
              <img
                src={require('../assets/img/Mainlogo_25mm.png')}
                alt='AllCarsNI Logo'
              />
            </div>
            <div className='d flex justify-content-center text-center mb-5'>
              <h2>Sign Up</h2>
            </div>
            <div className='w-full'></div>
            <div className='account-selection'>
              <div id='my-radio-group'>
                <h4>Are you an individual, trade seller or dealer seller?</h4>{' '}
              </div>
              <ul>
                {accountTypes.map((option, index) => (
                  <li key={index}>
                    <label>
                      {option.label}
                      <input
                        className='account-checkbox'
                        name={option.value}
                        checked={selectedAccountId === option.id}
                        onChange={() => setAccountId(option.id)}
                        type='checkbox'
                      />
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {selectedAccountId === 1 && <Individual />}
              {selectedAccountId === 2 && <TradeSeller />}
              {selectedAccountId === 3 && <DealerSeller />}
            </div>
            <div className='mb-2 text-center'>
              Already have an account <Link to={'/login'}>Login In</Link>
            </div>
            <div className='mb-4 text-center'>
              Return to browse? <Link to={'/'}>click here</Link>
            </div>
            <div className='d-grid gap-2'>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterTest;
