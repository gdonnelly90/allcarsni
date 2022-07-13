import React, { useState, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormInput } from '../../components/formComponents/FormInput';
import { Label } from '../../components/formComponents/Label';

const DealerSellerSchema = Yup.object().shape({
  businessName: Yup.string().required('Name is required'),
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invaild email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords do not match'
  ),
  telephone: Yup.string().required('Telephone is required'),
  companyRegNumber: Yup.string().required(
    'Company Registration Number is required'
  ),
  vatNumber: Yup.string.required('VAT Number is required'),
  address: Yup.string().required('Address is required'),
  postcode: Yup.string().required('Postcode is required'),
});

const DealerSeller = () => {
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
        allowedToSellQty: 1000,
        role: 'dealerSeller',
      }}
    >
      {() => (
        <div className='form-login-wrapper'>
          <Form className='mt-8 form-login card p-5'>
            <div className='account-selection'>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='Business Name' />
                </div>
                <FormInput
                  id='businessName'
                  fieldType='input'
                  ariaLabel='businessName'
                  name='businessName'
                  type='text'
                  placeholder='Business Name'
                />
              </div>
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
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='Telephone' />
                </div>
                <FormInput
                  id='telephone'
                  fieldType='input'
                  ariaLabel='telephone'
                  name='telephone'
                  type='text'
                  placeholder='Telephone'
                />
              </div>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='Company Registration Number' />
                </div>
                <FormInput
                  id='companyRegNumber'
                  fieldType='input'
                  ariaLabel='companyRegNumber'
                  name='companyRegNumber'
                  type='text'
                  placeholder='Company Registration Number'
                />
              </div>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='VAT Number' />
                </div>
                <FormInput
                  id='vatNumber'
                  fieldType='input'
                  ariaLabel='vatNumber'
                  name='vatNumber'
                  type='text'
                  placeholder='VAT Number'
                />
              </div>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='Address' />
                </div>
                <FormInput
                  id='address'
                  fieldType='input'
                  ariaLabel='address'
                  name='address'
                  type='text'
                  placeholder='Address'
                />
              </div>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='Postcode' />
                </div>
                <FormInput
                  id='postcode'
                  fieldType='input'
                  ariaLabel='postcode'
                  name='postcode'
                  type='text'
                  placeholder='Postcode'
                />
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default DealerSeller;
