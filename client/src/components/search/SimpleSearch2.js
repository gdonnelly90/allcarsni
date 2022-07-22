import React from 'react';

const SimpleSearch2 = () => {
  return (
    <div className='search-tab'>
      <div id='search-tabs'>
        <div className='tabs-header'>
          <h6>I want to Buy </h6>
          <ul className='nav nav-tabs text-start' id='myTab01' role='tablist'>
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
    </div>
  );
};

export default SimpleSearch2;
