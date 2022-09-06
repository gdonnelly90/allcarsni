import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormInput } from '../components/formComponents/FormInput';
import { Label } from '../components/formComponents/Label';

// outlining the schema
const CarRegSchema = Yup.object().shape({
  reg: Yup.string().required('Reg is required'),
});

const EnterRegBox = () => {
  return (
    <div className='button-container-reg'>
      <Formik
        initialValues={{
          enterReg: '',
        }}>
        <Form className='enter-reg'>
          <div className='mb-3'>
            <FormInput
              id='enter-reg'
              fieldType='input'
              ariaLabel='enter-reg'
              name='enter-reg'
              type='text'
              placeholder='ENTER PLATE'
            />
          </div>
        </Form>
      </Formik>
      <Button
        className='enter-reg-button'
        variant='light'
        type='submit'
        // disabled={!formik.dirty}
      >
        Press to get an approximate price...
      </Button>
    </div>
  );
};

export default EnterRegBox;
