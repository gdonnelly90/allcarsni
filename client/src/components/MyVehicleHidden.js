import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormInput } from '../components/formComponents/FormInput';
import { Label } from '../components/formComponents/Label';

// outlining the schema
const CarRegSchema = Yup.object().shape({
  reg: Yup.string().required('Reg is required'),
  mileage: Yup.string(),
});

// designing the hidden car feature
const MyVehicleHidden = () => {
  return (
    <Container>
      <Row xs={1} sm={2} md={2}>
        <Col>
          <Formik
            initialValues={{
              enterReg: '',
              enterMileage: '',
            }}
          >
            <Form className='mt-8 form-login card p-5'>
              <div className='hidden-vehicle'>
                <div className='mb-3'>
                  <div className='mb-1'>{/* <Label text='ENTER REG' /> */}</div>
                  <FormInput
                    id='enterReg'
                    fieldType='input'
                    ariaLabel='enterReg'
                    name='enterReg'
                    type='text'
                    placeholder='ENTER REG'
                  />
                </div>
              </div>
            </Form>
          </Formik>
        </Col>
        <Col>
          <Formik
            initialValues={{
              enterReg: '',
              enterMileage: '',
            }}
          >
            <Form className='mt-8 form-login card p-5'>
              <div className='hidden-vehicle'>
                <div className='mb-3'>
                  <div className='mb-1'>
                    {/* <Label text='ENTER MILEAGE' /> */}
                  </div>
                  <FormInput
                    id='enterMileage'
                    fieldType='input'
                    ariaLabel='enterMileage'
                    name='enterMileage'
                    type='text'
                    placeholder='ENTER MILEAGE'
                  />
                </div>
              </div>
            </Form>
          </Formik>
        </Col>
      </Row>
      <Row>
        {/* <Button color='primary'>Find Car</Button>{' '} */}
        <Button
          className='me-2'
          variant='primary'
          type='submit'
          // disabled={!formik.dirty}
        >
          Find car
        </Button>
      </Row>
    </Container>
  );
};

export default MyVehicleHidden;
