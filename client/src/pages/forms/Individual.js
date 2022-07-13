import React, { useState, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { FormInput } from '../../components/formComponents/FormInput';
import { Label } from '../../components/formComponents/Label';

const InvididualSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invaild email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords do not match'
  ),
});

const Individual = () => {
  return (
    <Formik
      initialValues={{
        businessName: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        telephone: '',
        companyRegNumber: '',
        vatNumber: '',
        address: '',
        postcode: '',
        isAdmin: '',
      }}
    >
      {() => (
        <div className='form-login-wrapper'>
          <Form className='mt-8 form-login card p-5'>
            <div className='account-selection'>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='Name' />
                </div>
                <FormInput
                  id='name'
                  fieldType='input'
                  ariaLabel='name'
                  name='name'
                  type='text'
                  placeholder='Name'
                />
              </div>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='Email' />
                </div>
                <FormInput
                  id='email'
                  fieldType='input'
                  ariaLabel='Email'
                  name='email'
                  type='text'
                  placeholder='Email'
                />
              </div>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='Password' />
                </div>
                <FormInput
                  id='password'
                  fieldType='input'
                  ariaLabel='Password'
                  name='password'
                  type='password'
                  placeholder='Password'
                />
              </div>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='Retype Password' />
                </div>
                <FormInput
                  id='confirmPassword'
                  fieldType='input'
                  ariaLabel='ConfirmPassword'
                  name='confirmPassword'
                  type='password'
                  placeholder='Confirm Password'
                />
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Individual;
