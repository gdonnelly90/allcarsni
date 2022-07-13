import React, { useState, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
// import { FormSuccess } from '../components/formComponents/FormSuccess';
// import { ErrorAlert } from '../components/formComponents/ErrorAlert';
import { FormInput } from '../components/formComponents/FormInput';
import { Label } from '../components/formComponents/Label';
// import { toast } from 'react-toastify';

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

const Register = () => {
  const accountTypes = [
    { id: 1, label: 'Individual Seller ', value: 'individualSeller' },
    { id: 2, label: 'Trader Seller ', value: 'tradeSeller' },
    { id: 3, label: 'Dealership Seller ', value: 'dealershipSeller' },
  ];

  const [selectedAccountId, setAccountId] = useState(1);

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
            <div className='form-login text-center mb-2'>
              <img
                src={require('../assets/img/Mainlogo_25mm.png')}
                alt='AllCarsNI Logo'
              />
            </div>
            <div className='d flex justify-content-center text-center mb-5'>
              <h2>Sign Up</h2>
            </div>
            <div className='w-full'>
              {/* {signUpSuccess && <FormSuccess text={signUpSuccess} />}
              {signUpError && <ErrorAlert text={signUpError} />} */}
            </div>
            {/* <div> */}
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
              {/* </div>
            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field type='radio' name='user-type' value='Individual' />
                Individual
              </label>
              <label>
                <Field type='radio' name='user-type' value='Trade Seller' />
                Trade Seller
              </label>
              <label>
                <Field type='radio' name='user-type' value='Dealer Seller' />
                Dealer Seller
              </label> */}
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

export default Register;
