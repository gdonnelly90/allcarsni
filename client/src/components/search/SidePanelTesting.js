import React from 'react';
import { Container, Section, Row, Col, Button } from 'react-bootstrap';

const SidePanel = () => {
  //   return (
  // <div className='our-listing pt0 bgc-f9 pb30-991'>
  //   <div>
  //     <div className='row'>
  //       <div className='col-lg-4 col-xl-3 dn-md'>
  //         <div className='sidebar_feature_listing_widget'>
  //           <h4 className='title'>Featured Listings</h4>
  //           <div className='listing_item_1grid_slider nav_none'>
  //             <div className='item'>
  //               <div className='car-listing sidebar_style'>
  //                 <div className='thumb'>
  //                   <img
  //                     className='sidePanelFeatured'
  //                     src={require('../../assets/img/cars/Audi_R8_V10_1.jpg')}
  //                     alt='first.jpg'
  //                   />
  //                 </div>
  //                 <div className='details'>
  //                   <div className='wrapper'>
  //                     <h5 className='price'>£xxx</h5>
  //                     <h6 className='title'>
  //                       <a href='page-car-single-v1.html'>
  //                         Make, Model and Spec
  //                       </a>
  //                     </h6>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className='item'>
  //               <div className='car-listing sidebar_style'>
  //                 <div className='thumb'>
  //                   <img
  //                     className='sidePanelFeatured'
  //                     src={require('../../assets/img/cars/Audi_R8_V10_1.jpg')}
  //                     alt='first.jpg'
  //                   />
  //                 </div>
  //                 <div className='details'>
  //                   <div className='wrapper'>
  //                     <h5 className='price'>£xxx</h5>
  //                     <h6 className='title'>
  //                       <a href='page-car-single-v1.html'>
  //                         Make, Model and Spec
  //                       </a>
  //                     </h6>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className='item'>
  //               <div className='car-listing sidebar_style'>
  //                 <div className='thumb'>
  //                   <img
  //                     className='sidePanelFeatured'
  //                     src={require('../../assets/img/cars/Audi_R8_V10_1.jpg')}
  //                     alt='first.jpg'
  //                   />
  //                 </div>
  //                 <div className='details'>
  //                   <div className='wrapper'>
  //                     <h5 className='price'>£xxx</h5>
  //                     <h6 className='title'>
  //                       <a href='page-car-single-v1.html'>
  //                         Make, Model and Spec
  //                       </a>
  //                     </h6>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className='sidebar_recent_viewed_widgets'>
  //           <h4 className='title'>Recently Viewed</h4>
  //           <div className='d-flex mb20'>
  //             <div className='flex-shrink-0'>
  //               <img
  //                 className='align-self-start mr-3'
  //                 src='images/blog/s1.jpg'
  //                 alt='s1.jpg'
  //               />
  //             </div>
  //             <div className='flex-grow-1 ms-3'>
  //               <h5 className='price'>£xxx</h5>
  //               <h6 class='title'>
  //                 <a href='page-car-single-v1.html'>Make, Model and Spec</a>
  //               </h6>
  //             </div>
  //           </div>
  //           <div className='d-flex mb20'>
  //             <div className='flex-shrink-0'>
  //               <img
  //                 className='align-self-start mr-3'
  //                 src='images/blog/s2.jpg'
  //                 alt='s2.jpg'
  //               />
  //             </div>
  //             <div className='flex-grow-1 ms-3'>
  //               <h5 className='post_title'>$129</h5>
  //               <p>Bentley Bentayga</p>
  //               <p>V8 - 2020</p>
  //             </div>
  //           </div>
  //           <div className='d-flex'>
  //             <div className='flex-shrink-0'>
  //               <img
  //                 className='align-self-start mr-3'
  //                 src='images/blog/s3.jpg'
  //                 alt='s3.jpg'
  //               />
  //             </div>
  //             <div className='flex-grow-1 ms-3'>
  //               <h5 className='post_title'>$129</h5>
  //               <p>Ferrari 488 Spider</p>
  //               <p>Base - 2019</p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className='sidebar_vichel_avail_Widget'>
  //           <div className='thumb'>
  //             <img
  //               src='images/about/sidebar-vichel.jpg'
  //               alt='sidebar-vichel.jpg'
  //             />
  //           </div>
  //           <div className='details'>
  //             <div className='wrapper'>
  //               <div className='title_count'>
  //                 20.597{' '}
  //                 <span>
  //                   <img src='images/home/title-bottom-border.svg' alt='' />
  //                 </span>
  //               </div>
  //               <h4 className='title'>Vehicle Available</h4>
  //               <p className='para'>
  //                 Find the right price, dealer and advice.
  //               </p>
  //               <p className='subtitle'>CALL US NOW</p>
  //               <a className='phone_number' href='#'>
  //                 +1 670 936 46 70
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  // const SidePanelTest = () => {
  return (
    <Container>
      <div className='py-3'>
        <section className='our-listing pt0 bgc-f9 pb30-991'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-xl-3 dn-md'>
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
                <div className='sidebar_recent_viewed_widgets'>
                  <h4 className='title'>Recently Viewed</h4>
                  <div className='d-flex mb20'>
                    <div className='flex-shrink-0'>
                      <img
                        className='align-self-start mr-3'
                        src={require('../../assets/img/cars/Bentley_Mulsanne_1.jpg')}
                      />
                    </div>
                    <div className='flex-grow-1 ms-3'>
                      <h5 className='post_title'>$129</h5>
                      <p>BMW M8 Gran Coupe</p>
                      <p>Base - 2021</p>
                    </div>
                  </div>
                  <div className='d-flex mb20'>
                    <div className='flex-shrink-0'>
                      <img
                        className='align-self-start mr-3'
                        src={require('../../assets/img/cars/Bugatti_1.jpg')}
                      />
                    </div>
                    <div className='flex-grow-1 ms-3'>
                      <h5 className='post_title'>$129</h5>
                      <p>Bentley Bentayga</p>
                      <p>V8 - 2020</p>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className='flex-shrink-0'>
                      <img
                        className='align-self-start mr-3'
                        src={require('../../assets/img/cars/Ferrari_LaFerrari_Aperta_1.jpg')}
                      />
                    </div>
                    <div className='flex-grow-1 ms-3'>
                      <h5 className='post_title'>$129</h5>
                      <p>Ferrari 488 Spider</p>
                      <p>Base - 2019</p>
                    </div>
                  </div>
                </div>
                <div className='sidebar_vichel_avail_Widget'>
                  <div className='thumb'>
                    <img
                      src={require('../../assets/img/cars/Audi_R8_V10_1.jpg')}
                    />
                  </div>
                  <div className='details'>
                    <div className='wrapper'>
                      {/* <div className='title_count'>
                        20.597{' '}
                        <span>
                          <img
                            src='images/home/title-bottom-border.svg'
                            alt=''
                          />
                        </span>
                      </div> */}
                      <h4 className='title'>Advert space</h4>
                      {/* <p className='para'>
                        Find the right price, dealer and advice.
                      </p>
                      <p className='subtitle'>CALL US NOW</p>
                      <a className='phone_number' href='#'>
                        +1 670 936 46 70
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-8 col-xl-9'>
                <div className='row'>
                  <div className='listing_filter_row db-767'>
                    <div className='col-lg-5'>
                      <div className='page_control_shorting left_area tac-sm mb30-767 mt15'>
                        <p>
                          We found{' '}
                          <span className='heading-color fw600'>4733</span> Cars
                          available for you
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-7'>
                      <div className='page_control_shorting right_area text-end tac-xsd'>
                        <ul>
                          <li className='list-inline-item short_by_text listone'>
                            Sort by:
                          </li>
                          <li className='list-inline-item listwo'>
                            <select className='selectpicker show-tick'>
                              <option>Date: newest First</option>
                              <option>Most Recent</option>
                              <option>Recent</option>
                              <option>Best Selling</option>
                              <option>Old Review</option>
                            </select>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6 col-xl-4'>
                    {/* <div className='car-listing'>
                      <div className='thumb'>
                        <div className='tag'>FEATURED</div>
                        <img src='images/listing/1.jpg' alt='1.jpg' />
                        <div className='thmb_cntnt2'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-photo-camera mr3'></span>{' '}
                                22
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-play-button mr3'></span>{' '}
                                3
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='thmb_cntnt3'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-shuffle-arrows'></span>
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-heart'></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='details'>
                        <div className='wrapper'>
                          <h5 className='price'>$129</h5>
                          <h6 className='title'>
                            <a href='page-car-single-v1.html'>
                              Volvo XC90 - 2020
                            </a>
                          </h6>
                          <div className='listign_review'>
                            <ul className='mb0'>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>4.7</a>
                              </li>
                              <li className='list-inline-item'>
                                (684 reviews)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='listing_footer'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-road-perspective me-2'></span>
                                77362
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gas-station me-2'></span>
                                Diesel
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gear me-2'></span>
                                Automatic
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-xl-4'>
                    <div className='car-listing'>
                      <div className='thumb'>
                        <div className='tag'>FEATURED</div>
                        <img src='images/listing/2.jpg' alt='2.jpg' />
                        <div className='thmb_cntnt2'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-photo-camera mr3'></span>{' '}
                                22
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-play-button mr3'></span>{' '}
                                3
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='thmb_cntnt3'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-shuffle-arrows'></span>
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-heart'></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='details'>
                        <div className='wrapper'>
                          <h5 className='price'>$56</h5>
                          <h6 className='title'>
                            <a href='page-car-single-v1.html'>
                              Mercedes-Benz S 560 - 2021
                            </a>
                          </h6>
                          <div className='listign_review'>
                            <ul className='mb0'>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>4.7</a>
                              </li>
                              <li className='list-inline-item'>
                                (684 reviews)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='listing_footer'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-road-perspective me-2'></span>
                                77362
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gas-station me-2'></span>
                                Diesel
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gear me-2'></span>
                                Automatic
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-xl-4'>
                    <div className='car-listing'>
                      <div className='thumb'>
                        <div className='tag'>FEATURED</div>
                        <img src='images/listing/3.jpg' alt='3.jpg' />
                        <div className='thmb_cntnt2'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-photo-camera mr3'></span>{' '}
                                22
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-play-button mr3'></span>{' '}
                                3
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='thmb_cntnt3'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-shuffle-arrows'></span>
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-heart'></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='details'>
                        <div className='wrapper'>
                          <h5 className='price'>$230</h5>
                          <h6 className='title'>
                            <a href='page-car-single-v1.html'>
                              BMW M8 Gran Coupe Base - 2021
                            </a>
                          </h6>
                          <div className='listign_review'>
                            <ul className='mb0'>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>4.7</a>
                              </li>
                              <li className='list-inline-item'>
                                (684 reviews)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='listing_footer'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-road-perspective me-2'></span>
                                77362
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gas-station me-2'></span>
                                Diesel
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gear me-2'></span>
                                Automatic
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-xl-4'>
                    <div className='car-listing'>
                      <div className='thumb'>
                        <div className='tag'>FEATURED</div>
                        <img src='images/listing/5.jpg' alt='5.jpg' />
                        <div className='thmb_cntnt2'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-photo-camera mr3'></span>{' '}
                                22
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-play-button mr3'></span>{' '}
                                3
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='thmb_cntnt3'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-shuffle-arrows'></span>
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-heart'></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='details'>
                        <div className='wrapper'>
                          <h5 className='price'>$129</h5>
                          <h6 className='title'>
                            <a href='page-car-single-v1.html'>
                              Audi A8 L 55 - 2021
                            </a>
                          </h6>
                          <div className='listign_review'>
                            <ul className='mb0'>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>4.7</a>
                              </li>
                              <li className='list-inline-item'>
                                (684 reviews)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='listing_footer'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-road-perspective me-2'></span>
                                77362
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gas-station me-2'></span>
                                Diesel
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gear me-2'></span>
                                Automatic
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-xl-4'>
                    <div className='car-listing'>
                      <div className='thumb'>
                        <div className='tag'>FEATURED</div>
                        <img src='images/listing/6.jpg' alt='6.jpg' />
                        <div className='thmb_cntnt2'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-photo-camera mr3'></span>{' '}
                                22
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-play-button mr3'></span>{' '}
                                3
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='thmb_cntnt3'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-shuffle-arrows'></span>
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-heart'></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='details'>
                        <div className='wrapper'>
                          <h5 className='price'>$56</h5>
                          <h6 className='title'>
                            <a href='page-car-single-v1.html'>
                              Land Rover Range Rover HSE Westminster
                            </a>
                          </h6>
                          <div className='listign_review'>
                            <ul className='mb0'>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>4.7</a>
                              </li>
                              <li className='list-inline-item'>
                                (684 reviews)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='listing_footer'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-road-perspective me-2'></span>
                                77362
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gas-station me-2'></span>
                                Diesel
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gear me-2'></span>
                                Automatic
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-xl-4'>
                    <div className='car-listing'>
                      <div className='thumb'>
                        <div className='tag'>FEATURED</div>
                        <img src='images/listing/7.jpg' alt='7.jpg' />
                        <div className='thmb_cntnt2'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-photo-camera mr3'></span>{' '}
                                22
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-play-button mr3'></span>{' '}
                                3
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='thmb_cntnt3'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-shuffle-arrows'></span>
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-heart'></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='details'>
                        <div className='wrapper'>
                          <h5 className='price'>$230</h5>
                          <h6 className='title'>
                            <a href='page-car-single-v1.html'>
                              Bentley Bentayga V8 - 2020
                            </a>
                          </h6>
                          <div className='listign_review'>
                            <ul className='mb0'>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>4.7</a>
                              </li>
                              <li className='list-inline-item'>
                                (684 reviews)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='listing_footer'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-road-perspective me-2'></span>
                                77362
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gas-station me-2'></span>
                                Diesel
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gear me-2'></span>
                                Automatic
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-xl-4'>
                    <div className='car-listing'>
                      <div className='thumb'>
                        <div className='tag'>FEATURED</div>
                        <img src='images/listing/4.jpg' alt='4.jpg' />
                        <div className='thmb_cntnt2'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-photo-camera mr3'></span>{' '}
                                22
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-play-button mr3'></span>{' '}
                                3
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='thmb_cntnt3'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-shuffle-arrows'></span>
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-heart'></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='details'>
                        <div className='wrapper'>
                          <h5 className='price'>$478</h5>
                          <h6 className='title'>
                            <a href='page-car-single-v1.html'>
                              Nıssan Qasqai - Sky Pack
                            </a>
                          </h6>
                          <div className='listign_review'>
                            <ul className='mb0'>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>4.7</a>
                              </li>
                              <li className='list-inline-item'>
                                (684 reviews)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='listing_footer'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-road-perspective me-2'></span>
                                77362
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gas-station me-2'></span>
                                Diesel
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gear me-2'></span>
                                Automatic
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-xl-4'>
                    <div className='car-listing'>
                      <div className='thumb'>
                        <div className='tag'>FEATURED</div>
                        <img src='images/listing/8.jpg' alt='8.jpg' />
                        <div className='thmb_cntnt2'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-photo-camera mr3'></span>{' '}
                                22
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-play-button mr3'></span>{' '}
                                3
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='thmb_cntnt3'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-shuffle-arrows'></span>
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-heart'></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='details'>
                        <div className='wrapper'>
                          <h5 className='price'>$478</h5>
                          <h6 className='title'>
                            <a href='page-car-single-v1.html'>
                              Ferrari 488 Spider Base - 2019
                            </a>
                          </h6>
                          <div className='listign_review'>
                            <ul className='mb0'>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>4.7</a>
                              </li>
                              <li className='list-inline-item'>
                                (684 reviews)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='listing_footer'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-road-perspective me-2'></span>
                                77362
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gas-station me-2'></span>
                                Diesel
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gear me-2'></span>
                                Automatic
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 col-xl-4'>
                    <div className='car-listing'>
                      <div className='thumb'>
                        <div className='tag'>FEATURED</div>
                        <img src='images/listing/9.jpg' alt='9.jpg' />
                        <div className='thmb_cntnt2'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-photo-camera mr3'></span>{' '}
                                22
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a className='text-white' href='#'>
                                <span className='flaticon-play-button mr3'></span>{' '}
                                3
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='thmb_cntnt3'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-shuffle-arrows'></span>
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-heart'></span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='details'>
                        <div className='wrapper'>
                          <h5 className='price'>$478</h5>
                          <h6 className='title'>
                            <a href='#'>Audi A3 Hatchback - 2021</a>
                          </h6>
                          <div className='listign_review'>
                            <ul className='mb0'>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-star'></i>
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>4.7</a>
                              </li>
                              <li className='list-inline-item'>
                                (684 reviews)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='listing_footer'>
                          <ul className='mb0'>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-road-perspective me-2'></span>
                                77362
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gas-station me-2'></span>
                                Diesel
                              </a>
                            </li>
                            <li className='list-inline-item'>
                              <a href='#'>
                                <span className='flaticon-gear me-2'></span>
                                Automatic
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='mbp_pagination mt10'>
                      <ul className='page_navigation'>
                        <li className='page-item'>
                          <a
                            className='page-link'
                            href='#'
                            tabindex='-1'
                            aria-disabled='true'
                          >
                            {' '}
                            <span className='fa fa-arrow-left'></span>
                          </a>
                        </li>
                        <li className='page-item'>
                          <a className='page-link' href='#'>
                            1
                          </a>
                        </li>
                        <li className='page-item active' aria-current='page'>
                          <a className='page-link' href='#'>
                            2 <span className='sr-only'>(current)</span>
                          </a>
                        </li>
                        <li className='page-item'>
                          <a className='page-link' href='#'>
                            3
                          </a>
                        </li>
                        <li className='page-item'>
                          <a className='page-link' href='#'>
                            <span className='fa fa-arrow-right'></span>
                          </a>
                        </li>
                      </ul>
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
