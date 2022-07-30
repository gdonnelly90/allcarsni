import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Hyperlink } from '../components/common/Hyperlink';
import { loginUser } from '../context/appContext/actions';
import { useAppState, useAppDispatch } from '../context/appContext';
import { SuccessBanner } from '../components/common/SuccessBanner';
import { ErrorBanner } from '../components/common/ErrorBanner';

export const Login = () => {
  const dispatch = useAppDispatch();
  const { loading, errorMessage } = useAppState();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const LoginSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    validationSchema: LoginSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const res = await loginUser(dispatch, values);
        const { response = {} } = res;
        if (response?.status === 400) {
          setError(true);
        } else {
          setSuccess(true);
          setTimeout(() => {
            navigate('/');
          }, 700);
        }
      } catch (error) {
        console.log(errorMessage);
        setError(true);
        console.log(error);
      }
    },
  });

  useEffect(() => {
    document.body.classList.add('app-login');

    return () => {
      document.body.classList.remove('app-login');
    };
  });

  return (
    <section className='the-register-wrapper w-100 vh-100 mx-auto'>
      <div className='d-flex flex-row justify-content-center align-items-center h-100'>
        <div className='d-flex flex-column align-item-center container'>
          <div className='row card col-md-6 offset-md-3 shadow bg-body rounded'>
            <div className='bg--red-gradient h-1'></div>
            <div className='p-3'>
              <div className='text-center mb-2'>
                <img
                  src={require('../assets/img/red_white_logo.png')}
                  style={{ width: '25%' }}
                />
              </div>
              <h1 className='mt-5 mb-5 text-center'>Login into your account</h1>
              {/* <p className='text-center'>
                Don't have an account?{' '}
                <Hyperlink text='Sign up now' to='/register' />
              </p> */}
              <div className='card-body'>
                {success && <SuccessBanner text='Login successful...' />}
                {error && <ErrorBanner text='An error has occurred...' />}
                <Form onSubmit={formik.handleSubmit}>
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
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control
                      id='password'
                      name='password'
                      type='password'
                      placeholder='Password'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      isInvalid={
                        formik.touched.password && formik.errors.password
                      }
                    />
                    <Form.Control.Feedback type='invalid'>
                      {formik.errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className='mt-5 mb-2 text-center'>
                    Need to sign up? <Link to={'/register'}>Register</Link>
                  </div>
                  <div className='mb-4 text-center'>
                    Return to browse? <Link to={'/'}>click here</Link>
                  </div>
                  <div className='d-grid gap-2'></div>
                  <Button variant='primary' type='submit'>
                    {loading ? (
                      <span className='d-flex justify-content-center align-items-center'>
                        <FontAwesomeIcon icon={faCircleNotch} spin />
                        <span className='ml-2'>Loading...</span>
                      </span>
                    ) : (
                      <span>Sign in</span>
                    )}
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
