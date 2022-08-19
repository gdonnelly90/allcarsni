import React, { useContext } from 'react';
import { useAppState, useAppDispatch } from '../../context/appContext/context';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import { updateUser } from '../../services/user.service';
import * as Yup from 'yup';
import { Label } from '../formComponents/Label';
import { FormInput } from '../formComponents/FormInput';

const UserSchema = Yup.object().shape({
  firstName: Yup.string().required('Name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string(),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match'),
});

export const PersonalDetails = () => {
  const dispatch = useAppDispatch();
  let { user } = useAppState();
  const navigate = useNavigate();

  // function to update data on DB
  const submitProfile = async (userValues, actions) => {
    try {
      // set new user object
      user = { ...user, ...userValues };
      // call update user
      const response = await updateUser(user);
      // reset fields
      actions.setFieldValue('password', '');
      actions.setFieldValue('confirmPassword', '');
      // show toast message
      toast.success(response.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // main body
  return (
    // filling fields with current existing DB data
    <Formik
      initialValues={{
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        email: user.email ?? '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={(values, actions) => submitProfile(values, actions)}
      validationSchema={UserSchema}>
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
          <Button className='me-2' variant='warning' type='submit' disabled={!formik.dirty}>
            Update profile
          </Button>
        </Form>
      )}
    </Formik>
  );
};
