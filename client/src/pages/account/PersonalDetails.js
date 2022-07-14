import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// import { AuthContext } from '../context/AuthContext';
// import { updateUser } from '../services/api';
import { Label } from '../../components/formComponents/Label';
import { FormInput } from '../../components/formComponents/FormInput';
import AccountNavbar from '../../components/AccountNavbar';

const UserSchema = Yup.object().shape({
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

const PersonalDetails = () => {
  return (
    <Container>
      <AccountNavbar />
      <Formik
        // initialValues={{
        //   firstName: userInfo.firstName ?? '',
        //   lastName: userInfo.lastName ?? '',
        //   email: userInfo.email ?? '',
        //   password: '',
        //   confirmPassword: '',
        // }}
        // onSubmit={(values, actions) => submitProfile(values, actions)}
        // validationSchema={UserSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
      >
        {(formik) => (
          <Form>
            <div className='w-100'></div>
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
                  ariaLabel='lastName'
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
                  ariaLabel='email'
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
            <Button
              className='me-2'
              variant='warning'
              type='submit'
              disabled={!formik.dirty}
            >
              Update profile
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default PersonalDetails;
