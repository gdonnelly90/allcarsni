import React from 'react';
import { Container, Section, Row, Col, Button } from 'react-bootstrap';
import CarModal from '../CarModal';

const SidePanel = ({ src }) => {
  return (
    <Container>
      <div className='py-3'>
        <section className='our-listing pt0 bgc-f9 pb30-991'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-lg-3 col-xl-3'>
                <div className='sidebar_feature_listing_widget'>
                  <h4 className='title'>Featured Listings</h4>
                  <div className='listing_item_1grid_slider nav_none'>
                    <div className='item'>
                      <div className='car-listing sidebar_style'>
                        <div className='thumb'>
                          <img
                            src={require('../../assets/img/cars/Audi_R8_V10_1.jpg')}
                          />
                        </div>
                        <div className='details'>
                          <div className='wrapper'>
                            <h5 className='price'>$129</h5>
                            <h6 className='title'>
                              <a href='page-car-single-v1.html'>
                                Mercedes-Benz S 560 - 2021
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='item'>
                      <div className='car-listing sidebar_style'>
                        <div className='thumb'>
                          <img
                            src={require('../../assets/img/cars/Audi_R8_V10_1.jpg')}
                          />
                        </div>
                        <div className='details'>
                          <div className='wrapper'>
                            <h5 className='price'>$129</h5>
                            <h6 className='title'>
                              <a href='page-car-single-v1.html'>
                                Mercedes-Benz S 560 - 2021
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='item'>
                      <div className='car-listing sidebar_style'>
                        <div className='thumb'>
                          <img
                            src={require('../../assets/img/cars/Audi_R8_V10_1.jpg')}
                          />
                        </div>
                        <div className='details'>
                          <div className='wrapper'>
                            <h5 className='price'>$129</h5>
                            <h6 className='title'>
                              <a href='page-car-single-v1.html'>
                                Mercedes-Benz S 560 - 2021
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default SidePanel;
