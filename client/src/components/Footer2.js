import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from 'mdb-react-ui-kit';

const Footer2 = () => {
  return (
    <MDBFooter className='footer-top text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' role='button'>
            <MDBIcon fab icon='google' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>
        </section>

        <section className='newsletter-signup'>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2 pb-5'>
                  <strong>Sign up for our newsletter, coming soon!</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput
                  contrast
                  type='email'
                  label='Please Enter A Valid Email Address'
                  className='mb-2'
                />
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-6'>
                  Subscribe
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

        <section className='mb-3'>
          <p class='h4'>
            AllCarsNI - the one stop shop for all buying and selling of new and
            used cars in Northern Ireland.
          </p>
          <p class='h4'>We offer it all, from the one location...</p>
        </section>

        {/* <MDBRow>
          <MDBCol md='12' className='text-center'>
            <h5 className='text-uppercase'>
              SELL YOUR CAR <u>HERE</u>
            </h5>
          </MDBCol>
        </MDBRow> */}
      </MDBContainer>

      <div
        className='footer-bottom text-center p-3'
        // style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        // style={{ backgroundColor: linear-gradient(#180161, #030397, #0054dc); }}
      >
        Copyright &copy; AllCarsNI 2022
      </div>
    </MDBFooter>
  );
};

export default Footer2;
