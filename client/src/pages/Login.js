import React, { useState, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { FormSuccess } from '../components/formComponents/FormSuccess';
import { ErrorAlert } from '../components/formComponents/ErrorAlert';
import { FormInput } from '../components/formComponents/FormInput';
import { Label } from '../components/formComponents/Label';
import { toast } from 'react-toastify';

const RegisterSchema = Yup.object().shape({
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

const Login = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
    >
      {() => (
        <div className='form-login-wrapper'>
          <Form className='mt-8 form-login card p-5'>
            <div className='form-login text-center mb-2'>
              <img
                src={require('../assets/img/profilePic.jpg')}
                alt='Top 500 lgo'
              />
            </div>
            <div className='d flex justify-content-center text-center mb-2'>
              <h4>Sign In</h4>
            </div>
            <div className='w-full'>
              {/* {signUpSuccess && <FormSuccess text={signUpSuccess} />}
              {signUpError && <ErrorAlert text={signUpError} />} */}
            </div>
            <div>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='First name' />
                </div>
                <FormInput
                  fieldType='input'
                  ariaLabel='firstName'
                  name='firstName'
                  type='text'
                  placeholder=''
                />
              </div>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='Last name' />
                </div>
                <FormInput
                  fieldType='input'
                  ariaLabel='LastName'
                  name='lastName'
                  type='text'
                  placeholder=''
                />
              </div>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='Email' />
                </div>
                <FormInput
                  fieldType='input'
                  ariaLabel='Email'
                  name='email'
                  type='text'
                  placeholder=''
                />
              </div>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='Password' />
                </div>
                <FormInput
                  fieldType='input'
                  ariaLabel='Password'
                  name='password'
                  type='password'
                  placeholder=''
                />
              </div>
              <div className='mb-3'>
                <div className='mb-1'>
                  <Label text='Retype Password' />
                </div>
                <FormInput
                  fieldType='input'
                  ariaLabel='ConfirmPassword'
                  name='confirmPassword'
                  type='password'
                  placeholder=''
                />
              </div>
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

export default Login;
