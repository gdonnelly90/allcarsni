import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import { AuthContext } from '../../context/AuthContext';
import { updateUser } from '../../services/user.service';
import * as Yup from 'yup';
import { Label } from '../formComponents/Label';
import { FormInput } from '../formComponents/FormInput';

// const UserSchema = Yup.object().shape({
//   firstName: Yup.string().required('Name is required'),
//   lastName: Yup.string().required('Last name is required'),
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   password: Yup.string(),
//   confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match'),
// });

export const PersonalDetails = () => {
  // export const PersonalDetails = ({ auth }) => {
  // const auth = useContext(AuthContext);
  // const { authState } = auth;
  // // console.log(auth)
  // const { token, userInfo } = authState;
  // const header = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  // Submit the profile updates PUT /api/user/update
  // const submitProfile = async (userValues, actions) => {
  //   try {
  //     // set new user object
  //     const user = { ...userInfo, ...userValues };
  //     // call update user
  //     const response = await updateUser(user, header);
  //     // update context with new values
  //     auth.setAuthState({ ...authState, userInfo: user });
  //     // reset fields
  //     actions.setFieldValue('password', '');
  //     actions.setFieldValue('confirmPassword', '');
  //     // show toast message
  //     toast.success(response.message);
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        // firstName: userInfo.firstName ?? '',
        // lastName: userInfo.lastName ?? '',
        // email: userInfo.email ?? '',
        // password: '',
        // confirmPassword: '',
      }}>
      {/* onSubmit={(values, actions) => submitProfile(values, actions)}
       validationSchema={UserSchema}>
       {(formik) => ( */}
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
