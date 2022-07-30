import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import 'yup-phone';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { register } from '../../context/appContext/actions';
import { useAppState, useAppDispatch } from '../../context/appContext';
import { SuccessBanner } from '../common/SuccessBanner';
import { ErrorBanner } from '../common/ErrorBanner';

export const RegisterIndividual = () => {
  const dispatch = useAppDispatch();
  const { loading, errorMessage } = useAppState();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const RegisterSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Your first name is required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Your surname is required'),
    // mobile: Yup.string().phone('UK').required('Phone number is required'),
    mobile: Yup.string().required('Phone number is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password is too short - should be 6 chars minimum'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('You need to fill this bit in'),
  });

  const formik = useFormik({
    validationSchema: RegisterSchema,
    initialValues: {
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async (values) => {
      try {
        await register(dispatch, values);
        setSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 700);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    },
  });

  useEffect(() => {
    document.body.classList.add('app-register');

    return () => {
      document.body.classList.remove('app-register');
    };
  });

  return (
    <div>
      {success && <SuccessBanner text={'Account created...'} />}
      {error && <ErrorBanner text={'Error creating account'} />}
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='firstName'>First Name</Form.Label>
          <Form.Control
            id='firstName'
            name='firstName'
            type='text'
            className='form-handle-xxs'
            placeholder='First Name'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            isInvalid={formik.touched.firstName && formik.errors.firstName}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='lastName'>Last Name</Form.Label>
          <Form.Control
            id='lastName'
            name='lastName'
            type='text'
            className='form-handle-xxs'
            placeholder='Surname'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            isInvalid={formik.touched.lastName && formik.errors.lastName}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            id='email'
            name='email'
            type='email'
            placeholder='Email address'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            isInvalid={formik.touched.email && formik.errors.email}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='mobile'>Mobile Number</Form.Label>
          <Form.Control
            id='mobile'
            name='mobile'
            type='text'
            placeholder='Mobile Number'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
            isInvalid={formik.touched.mobile && formik.errors.mobile}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.mobile}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            id='password'
            name='password'
            type='password'
            className='form-handle-xxs'
            placeholder='Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isInvalid={formik.touched.password && formik.errors.password}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='confirmPassword'>Confirm Password</Form.Label>
          <Form.Control
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            className='form-handle-xxs'
            placeholder='Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            isInvalid={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>
        <div className='mt-5 mb-2 text-center'>
          Already have an account <Link to={'/login'}>Login In</Link>
        </div>
        <div className='mb-4 text-center'>
          Return to browse? <Link to={'/'}>click here</Link>
        </div>
        <Button variant='primary' type='submit'>
          {loading ? (
            <span className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faCircleNotch} spin />
              <span className='ml-2'>Loading...</span>
            </span>
          ) : (
            <span>Register</span>
          )}
        </Button>
      </Form>
    </div>
  );
};
