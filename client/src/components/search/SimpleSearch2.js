import React from 'react';
import { Container } from 'react-bootstrap';
import Box from '../../components/layout/Box';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const SimpleSearch2 = () => {
  return (
    <Container>
      <Box
        style={{
          backgroundColor: '#030397',
          borderRadius: 4,
          color: '#eee',
          minHeight: '100%',
          padding: 12,
          width: '100%',
        }}
      >
        <MDBContainer>
          <MDBRow md='12'>Quick Search Title</MDBRow>
          <MDBRow md='12'>
            <MDBCol md='12'>
              <div
                class='btn-group'
                role='group'
                aria-label='homepage-filter-buttons'
              >
                <input
                  type='radio'
                  class='btn-check'
                  name='btnradio'
                  id='btnradio1'
                  autocomplete='off'
                  checked
                />
                <label class='btn btn-outline-primary' for='btnradio1'>
                  Used Cars
                </label>

                <input
                  type='radio'
                  class='btn-check'
                  name='btnradio'
                  id='btnradio2'
                  autocomplete='off'
                />
                <label class='btn btn-outline-primary' for='btnradio2'>
                  New cars
                </label>

                <input
                  type='radio'
                  class='btn-check'
                  name='btnradio'
                  id='btnradio3'
                  autocomplete='off'
                />
                <label class='btn btn-outline-primary' for='btnradio3'>
                  All Cars
                </label>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow md='12'>
            <MDBCol md='2'>
              <div class='dropdown'>
                <button
                  class='btn btn-secondary dropdown-toggle'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Dropdown
                </button>
                <ul class='dropdown-menu'>
                  <li>
                    <button class='dropdown-item' type='button'>
                      Action
                    </button>
                  </li>
                  <li>
                    <button class='dropdown-item' type='button'>
                      Another action
                    </button>
                  </li>
                  <li>
                    <button class='dropdown-item' type='button'>
                      Something else here
                    </button>
                  </li>
                </ul>
              </div>
            </MDBCol>
            <MDBCol md='2'>Model Dropdown</MDBCol>
            <MDBCol md='2'>Price Dropdown</MDBCol>
            <MDBCol md='4'></MDBCol>
            <MDBCol md='2'>Search BTN</MDBCol>
          </MDBRow>
        </MDBContainer>
      </Box>
    </Container>
  );
};

export default SimpleSearch2;

// <Box
//   style={{
//     backgroundColor: '#333',
//     borderRadius: 2,
//     color: '#eee',
//     minHeight: 100,
//     padding: 10,
//     width: 1000,
//   }}
// >

{
  /* <div className='search-tab'>
          <div id='search-tabs'>
            <div className='tabs-header'>
              <h6>Quick Search </h6>
              <ul
                className='nav nav-tabs text-start'
                id='myTab01'
                role='tablist'
              >
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link active'
                    id='all-cars-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#all-cars'
                    type='button'
                    role='tab'
                    aria-controls='all-cars'
                    aria-selected='true'
                  >
                    All cars
                  </button>
                </li>
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link'
                    id='new-cars-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#new-cars'
                    type='button'
                    role='tab'
                    aria-controls='new-cars'
                    aria-selected='false'
                  >
                    New Cars
                  </button>
                </li>
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link '
                    id='used-cars-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#used-cars'
                    type='button'
                    role='tab'
                    aria-controls='used-cars'
                    aria-selected='false'
                  >
                    Used Cars
                  </button>
                </li>
              </ul>

              <div className='car-total float-end'>
                <h5 className='text-white'>
                  <i className='fa fa-caret-right'></i>(50){' '}
                  <span className='text-red'>CARS</span>
                </h5>
              </div>
            </div>

            <div className='tab-content' id='myTabContent02'>
              <div
                className='tab-pane fade show active'
                id='all-cars'
                role='tabpanel'
                aria-labelledby='all-cars-tab'
              >
                <div className='row'>
                  <div className='col-lg-2 col-md-6'>
                    <div className='selected-box'>
                      <select className='selectpicker'>
                        <option>Make </option>
                        <option>BMW</option>
                        <option>Honda </option>
                        <option>Hyundai </option>
                        <option>Nissan </option>
                        <option>Mercedes Benz </option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-6'>
                    <div className='selected-box'>
                      <select className='selectpicker'>
                        <option>Model</option>
                        <option>3 Series</option>
                        <option>Accord</option>
                        <option>Ioniq 5</option>
                        <option>GT-R</option>
                        <option>C63 AMG</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-6'>
                    <div className='selected-box'>
                      <select className='selectpicker'>
                        <option>Price </option>
                        <option>£5,000</option>
                        <option>£10,000</option>
                        <option>£15,000</option>
                        <option>£20,000</option>
                        <option>£50,000</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-12'>
                    <div className='d-grid'>
                      <button className='button red' type='button'>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='new-cars'
                role='tabpanel'
                aria-labelledby='new-cars-tab'
              >
                <div className='row'>
                  <div className='col-lg-2 col-md-6'>
                    <div className='selected-box'>
                      <select className='selectpicker'>
                        <option>Make </option>
                        <option>BMW</option>
                        <option>Honda </option>
                        <option>Hyundai </option>
                        <option>Nissan </option>
                        <option>Mercedes Benz </option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-6'>
                    <div className='selected-box'>
                      <select className='selectpicker'>
                        <option>Model</option>
                        <option>3 Series</option>
                        <option>Accord</option>
                        <option>Ioniq 5</option>
                        <option>GT-R</option>
                        <option>C63 AMG</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-6'>
                    <div className='selected-box'>
                      <select className='selectpicker'>
                        <option>Price </option>
                        <option>£5,000</option>
                        <option>£10,000</option>
                        <option>£15,000</option>
                        <option>£20,000</option>
                        <option>£50,000</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='form-group mb-3'></div>
                  </div>
                  <div className='col-lg-2 col-md-12'>
                    <div className='d-grid'>
                      <button className='button red' type='button'>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='used-cars'
                role='tabpanel'
                aria-labelledby='used-cars-tab'
              >
                <div className='row'>
                  <div className='col-lg-2 col-md-6'>
                    <div className='selected-box'>
                      <select className='selectpicker'>
                        <option>Make </option>
                        <option>BMW</option>
                        <option>Honda </option>
                        <option>Hyundai </option>
                        <option>Nissan </option>
                        <option>Mercedes Benz </option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-6'>
                    <div className='selected-box'>
                      <select className='selectpicker'>
                        <option>Model</option>
                        <option>3 Series</option>
                        <option>Accord</option>
                        <option>Ioniq 5</option>
                        <option>GT-R</option>
                        <option>C63 AMG</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-6'>
                    <div className='selected-box'>
                      <select className='selectpicker'>
                        <option>Price </option>
                        <option>£5,000</option>
                        <option>£10,000</option>
                        <option>£15,000</option>
                        <option>£20,000</option>
                        <option>£50,000</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='form-group mb-3'></div>
                  </div>
                  <div className='col-lg-2 col-md-12'>
                    <div className='d-grid'>
                      <button className='button red' type='button'>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
