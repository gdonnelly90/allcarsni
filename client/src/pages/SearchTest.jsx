import React from 'react';

const SearchTest = () => {
  return (
    <section className='our-listing pt0 bgc-white pb30-991'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='listing_sidebar'>
              <div className='sidebar_content_details style3'>
                <a href='javascript:void(0)' className='closebtn' onclick='closeNav()'>
                  &times;
                </a>
                <div className='sidebar_listing_list style2 mobile_sytle_sidebar mb0'>
                  <div className='siderbar_widget_header'>
                    <h4 className='title mb0'>
                      Search Filters
                      <a className='filter_closed_btn float-end' href='#'>
                        <span className='fas fa-times'></span>
                      </a>
                    </h4>
                  </div>
                  <div className='sidebar_advanced_search_widget'>
                    <ul className='sasw_list mb0'>
                      <li className='search_area'>
                        <div className='form-group'>
                          <input type='text' className='form-control' placeholder='Enter Keyword' />
                        </div>
                      </li>
                      <li>
                        <div className='search_option_two'>
                          <div className='candidate_revew_select'>
                            <div className='dropdown bootstrap-select w100 show-tick'>
                              <select className='selectpicker w100 show-tick' tabindex='-98'>
                                <option>Condition</option>
                                <option>Most Recent</option>
                                <option>Recent</option>
                                <option>Best Selling</option>
                                <option>Old Review</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='search_option_two'>
                          <div className='candidate_revew_select'>
                            <div className='dropdown bootstrap-select w100 show-tick'>
                              <select className='selectpicker w100 show-tick' tabindex='-98'>
                                <option>Select Makes</option>
                                <option>Audi</option>
                                <option>Bentley</option>
                                <option>BMW</option>
                                <option>Ford</option>
                                <option>Honda</option>
                                <option>Mercedes</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='search_option_two'>
                          <div className='candidate_revew_select'>
                            <div className='dropdown bootstrap-select w100 show-tick'>
                              <select className='selectpicker w100 show-tick' tabindex='-98'>
                                <option>Select Models</option>
                                <option>A3 Sportback</option>
                                <option>A4</option>
                                <option>A6</option>
                                <option>Q5</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='search_option_two'>
                          <div className='candidate_revew_select'>
                            <div className='dropdown bootstrap-select w100 show-tick'>
                              <select className='selectpicker w100 show-tick' tabindex='-98'>
                                <option>Select Type</option>
                                <option>Convertible</option>
                                <option>Coupe</option>
                                <option>Hatchback</option>
                                <option>Sedan</option>
                                <option>SUV</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='search_option_two'>
                          <div className='candidate_revew_select'>
                            <div className='dropdown bootstrap-select w100 show-tick'>
                              <select className='selectpicker w100 show-tick' tabindex='-98'>
                                <option>Year</option>
                                <option>1967</option>
                                <option>1990</option>
                                <option>2000</option>
                                <option>2002</option>
                                <option>2005</option>
                                <option>2010</option>
                                <option>2015</option>
                                <option>2020</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='sidebar_priceing_slider_mobile'>
                          <div className='wrapper'>
                            <h5 className='subtitle'>Filter by price</h5>
                            <div className='mt20 ml10' id='slider'></div>
                            <span id='slider-range-value1'></span>
                            <span id='slider-range-value2'></span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <h5 className='subtitle'>Fuel Type</h5>
                        <div className='ui_kit_checkbox'>
                          <div className='form-check mb20'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckPetrolSbp'
                            />
                            <label className='form-check-label' for='flexCheckPetrolSbp'>
                              Petrol (676)
                            </label>
                          </div>
                          <div className='form-check mb20'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckDieselSbp'
                            />
                            <label className='form-check-label' for='flexCheckDieselSbp'>
                              Diesel (9,784)
                            </label>
                          </div>
                          <div className='form-check mb20'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckElectricSbp'
                            />
                            <label className='form-check-label' for='flexCheckElectricSbp'>
                              Electric (6.584)
                            </label>
                          </div>
                          <div className='form-check mb30'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckHybridSbp'
                            />
                            <label className='form-check-label' for='flexCheckHybridSbp'>
                              Hyrbid (97)
                            </label>
                          </div>
                        </div>
                      </li>
                      <li>
                        <h5 className='subtitle'>Transmission</h5>
                        <div className='ui_kit_checkbox'>
                          <div className='form-check mb20'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckAutometicSbp'
                            />
                            <label className='form-check-label' for='flexCheckAutometicSbp'>
                              Automatic (6,676)
                            </label>
                          </div>
                          <div className='form-check mb30'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckManualSbp'
                            />
                            <label className='form-check-label' for='flexCheckManualSbp'>
                              Manual (9,784)
                            </label>
                          </div>
                        </div>
                      </li>
                      <li>
                        <h5 className='subtitle'>Features</h5>
                        <div className='sidebar_feature_checkbox'>
                          <div className='wrapper'>
                            <div className='form-check mb15'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value=''
                                id='flexCheckDefaultSbp'
                              />
                              <label className='form-check-label' for='flexCheckDefaultSbp'>
                                Adaptive Cruise Control (6,676)
                              </label>
                            </div>
                            <div className='form-check mb15'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value=''
                                id='flexCheckDefault1Sbp'
                              />
                              <label className='form-check-label' for='flexCheckDefault1Sbp'>
                                Cooled Seats (9,784)
                              </label>
                            </div>
                            <div className='form-check mb15'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value=''
                                id='flexCheckDefault2Sbp'
                              />
                              <label className='form-check-label' for='flexCheckDefault2Sbp'>
                                Keyless Start (9,784)
                              </label>
                            </div>
                            <div className='form-check mb15'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value=''
                                id='flexCheckDefault3Sbp'
                              />
                              <label className='form-check-label' for='flexCheckDefault3Sbp'>
                                Navigation System (9,784)
                              </label>
                            </div>
                            <div className='form-check mb15'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value=''
                                id='flexCheckDefault4Sbp'
                              />
                              <label className='form-check-label' for='flexCheckDefault4Sbp'>
                                Remote Start (9,784)
                              </label>
                            </div>
                            <div className='form-check mb15'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value=''
                                id='flexCheckDefault5Sbp'
                              />
                              <label className='form-check-label' for='flexCheckDefault5Sbp'>
                                Cooled Seats (9,784)
                              </label>
                            </div>
                            <div className='form-check mb15'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value=''
                                id='flexCheckDefault6Sbp'
                              />
                              <label className='form-check-label' for='flexCheckDefault6Sbp'>
                                Keyless Start (9,784)
                              </label>
                            </div>
                            <div className='form-check'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value=''
                                id='flexCheckDefault7Sbp'
                              />
                              <label className='form-check-label' for='flexCheckDefault7Sbp'>
                                Navigation System (9,784)
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='search_option_button'>
                          <button type='submit' className='btn btn-block btn-thm'>
                            <span className='flaticon-magnifiying-glass mr10'></span> Search
                          </button>
                        </div>
                      </li>
                      <li className='text-center'>
                        <a className='reset-filter' href='#'>
                          Reset Filter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-xl-3 dn-md'>
            <div className='sidebar_widgets'>
              <div className='sidebar_widgets_wrapper'>
                <div className='sidebar_advanced_search_widget'>
                  <h4 className='title'>Search Filters</h4>
                  <ul className='sasw_list mb0'>
                    <li className='search_area'>
                      <div className='form-group'>
                        <input type='text' className='form-control' placeholder='Enter Keyword' />
                      </div>
                    </li>
                    <li>
                      <div className='search_option_two'>
                        <div className='candidate_revew_select'>
                          <div className='dropdown bootstrap-select w100 show-tick'>
                            <select className='selectpicker w100 show-tick' tabindex='-98'>
                              <option>Condition</option>
                              <option>Most Recent</option>
                              <option>Recent</option>
                              <option>Best Selling</option>
                              <option>Old Review</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='search_option_two'>
                        <div className='candidate_revew_select'>
                          <div className='dropdown bootstrap-select w100 show-tick'>
                            <select className='selectpicker w100 show-tick' tabindex='-98'>
                              <option>Select Makes</option>
                              <option>Audi</option>
                              <option>Bentley</option>
                              <option>BMW</option>
                              <option>Ford</option>
                              <option>Honda</option>
                              <option>Mercedes</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='search_option_two'>
                        <div className='candidate_revew_select'>
                          <div className='dropdown bootstrap-select w100 show-tick'>
                            <select className='selectpicker w100 show-tick' tabindex='-98'>
                              <option>Select Models</option>
                              <option>A3 Sportback</option>
                              <option>A4</option>
                              <option>A6</option>
                              <option>Q5</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='search_option_two'>
                        <div className='candidate_revew_select'>
                          <div className='dropdown bootstrap-select w100 show-tick'>
                            <select className='selectpicker w100 show-tick' tabindex='-98'>
                              <option>Select Type</option>
                              <option>Convertible</option>
                              <option>Coupe</option>
                              <option>Hatchback</option>
                              <option>Sedan</option>
                              <option>SUV</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='search_option_two'>
                        <div className='candidate_revew_select'>
                          <div className='dropdown bootstrap-select w100 show-tick'>
                            <select className='selectpicker w100 show-tick' tabindex='-98'>
                              <option>Year</option>
                              <option>1967</option>
                              <option>1990</option>
                              <option>2000</option>
                              <option>2002</option>
                              <option>2005</option>
                              <option>2010</option>
                              <option>2015</option>
                              <option>2020</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5 className='subtitle'>Mileage</h5>
                    </li>
                    <li className='min_area list-inline-item'>
                      <div className='form-group'>
                        <input type='text' className='form-control' placeholder='Min' />
                      </div>
                    </li>
                    <li className='max_area list-inline-item'>
                      <div className='form-group'>
                        <input type='text' className='form-control' placeholder='Max' />
                      </div>
                    </li>
                    <li>
                      <h5 className='subtitle'>Price</h5>
                    </li>
                    <li>
                      <div className='slider-range'></div>
                      <input type='text' className='amount' placeholder='$5,000' />
                      <input type='text' className='amount2' placeholder='$15,000' />
                    </li>
                    <li>
                      <h5 className='subtitle'>Fuel Type</h5>
                      <div className='ui_kit_checkbox'>
                        <div className='form-check mb20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckPetrol'
                          />
                          <label className='form-check-label' for='flexCheckPetrol'>
                            Petrol (676)
                          </label>
                        </div>
                        <div className='form-check mb20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDiesel'
                          />
                          <label className='form-check-label' for='flexCheckDiesel'>
                            Diesel (9,784)
                          </label>
                        </div>
                        <div className='form-check mb20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckElectric'
                          />
                          <label className='form-check-label' for='flexCheckElectric'>
                            Electric (6.584)
                          </label>
                        </div>
                        <div className='form-check mb30'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckHybrid'
                          />
                          <label className='form-check-label' for='flexCheckHybrid'>
                            Hyrbid (97)
                          </label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5 className='subtitle'>Transmission</h5>
                      <div className='ui_kit_checkbox'>
                        <div className='form-check mb20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckAutometic'
                          />
                          <label className='form-check-label' for='flexCheckAutometic'>
                            Automatic (6,676)
                          </label>
                        </div>
                        <div className='form-check mb30'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckManual'
                          />
                          <label className='form-check-label' for='flexCheckManual'>
                            Manual (9,784)
                          </label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5 className='subtitle'>Features</h5>
                      <div className='sidebar_feature_checkbox'>
                        <div className='wrapper'>
                          <div className='form-check mb15'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckDefault'
                            />
                            <label className='form-check-label' for='flexCheckDefault'>
                              Adaptive Cruise Control (6,676)
                            </label>
                          </div>
                          <div className='form-check mb15'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckDefault1'
                            />
                            <label className='form-check-label' for='flexCheckDefault1'>
                              Cooled Seats (9,784)
                            </label>
                          </div>
                          <div className='form-check mb15'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckDefault2'
                            />
                            <label className='form-check-label' for='flexCheckDefault2'>
                              Keyless Start (9,784)
                            </label>
                          </div>
                          <div className='form-check mb15'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckDefault3'
                            />
                            <label className='form-check-label' for='flexCheckDefault3'>
                              Navigation System (9,784)
                            </label>
                          </div>
                          <div className='form-check mb15'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckDefault4'
                            />
                            <label className='form-check-label' for='flexCheckDefault4'>
                              Remote Start (9,784)
                            </label>
                          </div>
                          <div className='form-check mb15'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckDefault5'
                            />
                            <label className='form-check-label' for='flexCheckDefault5'>
                              Cooled Seats (9,784)
                            </label>
                          </div>
                          <div className='form-check mb15'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckDefault6'
                            />
                            <label className='form-check-label' for='flexCheckDefault6'>
                              Keyless Start (9,784)
                            </label>
                          </div>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckDefault7'
                            />
                            <label className='form-check-label' for='flexCheckDefault7'>
                              Navigation System (9,784)
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='search_option_button'>
                        <button type='submit' className='btn btn-block btn-thm'>
                          <span className='flaticon-magnifiying-glass mr10'></span> Search
                        </button>
                      </div>
                    </li>
                    <li className='text-center'>
                      <a className='reset-filter' href='#'>
                        Reset Filter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-8 col-xl-9'>
            <div className='row'>
              <div className='listing_filter_row db-lg'>
                <div className='col-xl-5'>
                  <div className='page_control_shorting left_area tac-lg mb30-767 mt15'>
                    <p>
                      We found <span className='heading-color fw600'>4733</span> Cars available for
                      you
                    </p>
                  </div>
                </div>
                <div className='col-xl-7'>
                  <div className='page_control_shorting right_area text-end tac-lg'>
                    <ul>
                      <li className='list-inline-item mb10-400'>
                        {' '}
                        <a id='open2' className='filter_open_btn style2 dn db-md' href='#'>
                          <img
                            className='mr10'
                            src='images/icon/filter-icon.svg'
                            alt='filter-icon.svg'
                          />{' '}
                          Filters
                        </a>{' '}
                      </li>
                      <li className='list-inline-item short_by_text listone'>Sort by:</li>
                      <li className='list-inline-item listwo'>
                        <select className='selectpicker show-tick'>
                          <option>Date: newest First</option>
                          <option>Most Recent</option>
                          <option>Recent</option>
                          <option>Best Selling</option>
                          <option>Old Review</option>
                        </select>
                      </li>
                      <li className='list-inline-item list-gird'>
                        <a href='#'>
                          <img src='images/icon/list-grid.svg' alt='list-grid.svg' />
                        </a>
                      </li>
                      <li className='list-inline-item list-list'>
                        <a href='#'>
                          <img src='images/icon/list-list.svg' alt='list-list.svg' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6 col-xl-4'>
                <div className='car-listing'>
                  <div className='thumb'>
                    <div className='tag'>FEATURED</div>
                    <img src='images/listing/1.jpg' alt='1.jpg' />
                    <div className='thmb_cntnt2'>
                      <ul className='mb0'>
                        <li className='list-inline-item'>
                          <a className='text-white' href='#'>
                            <span className='flaticon-photo-camera mr3'></span> 22
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a className='text-white' href='#'>
                            <span className='flaticon-play-button mr3'></span> 3
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
                        <a href='page-car-single-v1.html'>Volvo XC90 - 2020</a>
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
                          <li className='list-inline-item'>(684 reviews)</li>
                        </ul>
                      </div>
                    </div>
                    <div className='listing_footer'>
                      <ul className='mb0'>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-road-perspective me-2'></span>77362
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gas-station me-2'></span>Diesel
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gear me-2'></span>Automatic
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
                            <span className='flaticon-photo-camera mr3'></span> 22
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a className='text-white' href='#'>
                            <span className='flaticon-play-button mr3'></span> 3
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
                        <a href='page-car-single-v1.html'>Mercedes-Benz S 560 - 2021</a>
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
                          <li className='list-inline-item'>(684 reviews)</li>
                        </ul>
                      </div>
                    </div>
                    <div className='listing_footer'>
                      <ul className='mb0'>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-road-perspective me-2'></span>77362
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gas-station me-2'></span>Diesel
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gear me-2'></span>Automatic
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
                            <span className='flaticon-photo-camera mr3'></span> 22
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a className='text-white' href='#'>
                            <span className='flaticon-play-button mr3'></span> 3
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
                        <a href='page-car-single-v1.html'>BMW M8 Gran Coupe Base - 2021</a>
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
                          <li className='list-inline-item'>(684 reviews)</li>
                        </ul>
                      </div>
                    </div>
                    <div className='listing_footer'>
                      <ul className='mb0'>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-road-perspective me-2'></span>77362
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gas-station me-2'></span>Diesel
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gear me-2'></span>Automatic
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
                            <span className='flaticon-photo-camera mr3'></span> 22
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a className='text-white' href='#'>
                            <span className='flaticon-play-button mr3'></span> 3
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
                        <a href='page-car-single-v1.html'>Audi A8 L 55 - 2021</a>
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
                          <li className='list-inline-item'>(684 reviews)</li>
                        </ul>
                      </div>
                    </div>
                    <div className='listing_footer'>
                      <ul className='mb0'>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-road-perspective me-2'></span>77362
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gas-station me-2'></span>Diesel
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gear me-2'></span>Automatic
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
                            <span className='flaticon-photo-camera mr3'></span> 22
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a className='text-white' href='#'>
                            <span className='flaticon-play-button mr3'></span> 3
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
                        <a href='page-car-single-v1.html'>Land Rover Range Rover HSE Westminster</a>
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
                          <li className='list-inline-item'>(684 reviews)</li>
                        </ul>
                      </div>
                    </div>
                    <div className='listing_footer'>
                      <ul className='mb0'>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-road-perspective me-2'></span>77362
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gas-station me-2'></span>Diesel
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gear me-2'></span>Automatic
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
                            <span className='flaticon-photo-camera mr3'></span> 22
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a className='text-white' href='#'>
                            <span className='flaticon-play-button mr3'></span> 3
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
                        <a href='page-car-single-v1.html'>Bentley Bentayga V8 - 2020</a>
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
                          <li className='list-inline-item'>(684 reviews)</li>
                        </ul>
                      </div>
                    </div>
                    <div className='listing_footer'>
                      <ul className='mb0'>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-road-perspective me-2'></span>77362
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gas-station me-2'></span>Diesel
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gear me-2'></span>Automatic
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
                            <span className='flaticon-photo-camera mr3'></span> 22
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a className='text-white' href='#'>
                            <span className='flaticon-play-button mr3'></span> 3
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
                        <a href='page-car-single-v1.html'>Nıssan Qasqai - Sky Pack</a>
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
                          <li className='list-inline-item'>(684 reviews)</li>
                        </ul>
                      </div>
                    </div>
                    <div className='listing_footer'>
                      <ul className='mb0'>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-road-perspective me-2'></span>77362
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gas-station me-2'></span>Diesel
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gear me-2'></span>Automatic
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
                            <span className='flaticon-photo-camera mr3'></span> 22
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a className='text-white' href='#'>
                            <span className='flaticon-play-button mr3'></span> 3
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
                        <a href='page-car-single-v1.html'>Ferrari 488 Spider Base - 2019</a>
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
                          <li className='list-inline-item'>(684 reviews)</li>
                        </ul>
                      </div>
                    </div>
                    <div className='listing_footer'>
                      <ul className='mb0'>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-road-perspective me-2'></span>77362
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gas-station me-2'></span>Diesel
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='#'>
                            <span className='flaticon-gear me-2'></span>Automatic
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
                            <span className='flaticon-photo-camera mr3'></span> 22
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a className='text-white' href='#'>
                            <span className='flaticon-play-button mr3'></span> 3
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
                          <li class='list-inline-item'>
                            <a href='#'>
                              <i class='fa fa-star'></i>
                            </a>
                          </li>
                          <li class='list-inline-item'>
                            <a href='#'>
                              <i class='fa fa-star'></i>
                            </a>
                          </li>
                          <li class='list-inline-item'>
                            <a href='#'>
                              <i class='fa fa-star'></i>
                            </a>
                          </li>
                          <li class='list-inline-item'>
                            <a href='#'>4.7</a>
                          </li>
                          <li class='list-inline-item'>(684 reviews)</li>
                        </ul>
                      </div>
                    </div>
                    <div class='listing_footer'>
                      <ul class='mb0'>
                        <li class='list-inline-item'>
                          <a href='#'>
                            <span class='flaticon-road-perspective me-2'></span>77362
                          </a>
                        </li>
                        <li class='list-inline-item'>
                          <a href='#'>
                            <span class='flaticon-gas-station me-2'></span>Diesel
                          </a>
                        </li>
                        <li class='list-inline-item'>
                          <a href='#'>
                            <span class='flaticon-gear me-2'></span>Automatic
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-lg-12'>
                <div class='mbp_pagination mt20'>
                  <div class='new_line_pagination text-center'>
                    <p>Showing 36 of 497 Results</p>
                    <div class='pagination_line'></div>
                    <a class='pagi_btn' href='#'>
                      Show More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchTest;
