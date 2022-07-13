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

const Register = ({ setAlert, register, isAuthenticated }) => {
  const accountTypes = [
    { id: 1, label: 'Individual Seller', value: 'individualSeller' },
    { id: 2, label: 'Trader Seller', value: 'tradeSeller' },
    { id: 3, label: 'Dealership Seller', value: 'dealershipSeller' },
  ];

  const [selectedAccountId, setAccountId] = useState(1);

  return (
    <section className='container'>
      <h1 className='large text-primary'>Account Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account By Selecting Your Type
        Below
      </p>
      <div className='account-selection'>
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

      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  registerTradeSeller: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default Register;
