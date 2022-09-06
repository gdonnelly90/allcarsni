import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormInput } from '../components/formComponents/FormInput';
import { fetchVehiclePrice } from '../services/vehicle.service';
import { PriceModal } from './car/PriceModal';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { currencyFormat } from '../utils/helpers';

// outlining the schema
const CarRegSchema = Yup.object().shape({
  reg: Yup.string().required('Reg is required'),
});

const EnterRegBox = () => {
  const [price, setPrice] = useState();
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);

  const dualFunction = async () => {
    getPrice();
    toggleShow();
  };

  const getPrice = async () => {
    try {
      const price = await fetchVehiclePrice();
      setPrice(price);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Your Average Price</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>The average price calculated on similar blue book listings is</p>

              <h1>{currencyFormat(price)}</h1>
            </MDBModalBody>
            <MDBModalFooter>
              {/* <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn> */}
              <MDBBtn onClick={toggleShow}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
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
          onClick={() => dualFunction()}>
          Press to get an approximate price...
        </Button>
      </div>
    </div>
  );
};

export default EnterRegBox;
