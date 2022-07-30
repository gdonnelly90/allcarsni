import React, { useState } from 'react';
import { RegisterIndividual } from '../components/registerForms/RegisterIndividual';
import { RegisterTrade } from '../components/registerForms/RegisterTrade';
import { RegisterDealer } from '../components/registerForms/RegisterDealer';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

// register form schema
const RegisterTest = () => {
  const accountTypes = [
    { id: 1, label: 'Individual Seller ', value: 'individualSeller' },
    { id: 2, label: 'Trader Seller ', value: 'tradeSeller' },
    { id: 3, label: 'Dealership Seller ', value: 'dealershipSeller' },
  ];

  const [selectedAccountId, setAccountId] = useState(1);

  // designing the register feature, uses formik for form
  return (
    <section className='the-login-wrapper w-100 vh-100 mx-auto'>
      <div className='d-flex flex-row justify-content-center align-items-center h-100'>
        <div className='d-flex flex-column align-item-center container'>
          <div className='row card col-md-8 offset-md-2 shadow bg-body rounded'>
            <div className='bg--blue-gradient h-1'></div>
            <div className='p-4'>
              <div className='text-center mb-2'>
                <img
                  src={require('../assets/img/red_white_logo.png')}
                  style={{ width: '25%' }}
                />
              </div>
              <h1 className='text-center'>Create your account</h1>
              <p className='mb-5 text-center'>
                Starting searching for, or selling, your dream car
              </p>
              <MDBCol md='12'>
                <MDBRow md='12'>
                  <div className='account-selection'>
                    <div id='my-radio-group'>
                      <h4>
                        Are you an individual, trade seller or dealer seller?
                      </h4>{' '}
                    </div>
                  </div>
                </MDBRow>
                <MDBRow md='12'>
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
                  {/* </div> */}
                </MDBRow>
              </MDBCol>
              <div>
                {selectedAccountId === 1 && <RegisterIndividual />}
                {selectedAccountId === 2 && <RegisterTrade />}
                {selectedAccountId === 3 && <RegisterDealer />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterTest;

{
  /* <p></p>
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
              </div> */
}
