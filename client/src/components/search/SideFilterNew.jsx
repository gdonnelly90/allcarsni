import React, { useState, useEffect } from 'react';
import { Filter } from '../filters/filter.route';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';

// const SideFilterNew = (vehicle, onHandleChange) => {
// export const SideFilterNew = ({
//   make,
//   model,
//   price,
//   year,
//   mileage,
//   fuelType,
//   colour,
//   onHandleChange,
// }) => {
//   console.log(make);

export const SideFilterNew = () => {
  return (
    <div className='sidebar'>
      <p className='siderbar-text-pclass'>Filters</p>
      <hr style={{ width: '100%', size: '3px', color: '#c53030' }} />
      <div className='accordion'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='false'
              aria-controls='collapseOne'>
              <FaIcons.FaCar /> Make
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              <select>
                <option>Any</option>
                <option>Audi</option>
              </select>
            </div>
          </div>
        </div>
        <hr style={{ width: '100%', size: '3px', color: '#c53030' }} />
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'>
              <IoIcons.IoLogoModelS /> Model
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              <select>
                <option>Any</option>
                <option>A4</option>
              </select>
            </div>
          </div>
        </div>
        <hr style={{ width: '100%', size: '3px', color: '#c53030' }} />

        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'>
              <MdIcons.MdAttachMoney />
              Minimum Price
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              <select>
                <option>£0</option>
                <option>£500</option>
                <option>£50,000</option>
                <option>£1,000,000</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingFour'>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseFour'
            aria-expanded='false'
            aria-controls='collapseFour'>
            <MdIcons.MdOutlineMoneyOff />
            Maximum Price
          </button>
        </h2>
        <div
          id='collapseFour'
          className='accordion-collapse collapse'
          aria-labelledby='headingFour'
          data-bs-parent='#accordionExample'>
          <div className='accordion-body'>
            <select>
              <option>Any</option>
              <option>£50,000</option>
              <option>£10,000,000</option>
            </select>
          </div>
        </div>
      </div>
      <hr style={{ width: '100%', size: '3px', color: '#c53030' }} />

      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingFive'>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseFive'
            aria-expanded='false'
            aria-controls='collapseFive'>
            <BsIcons.BsCalendarDate />
            Age From
          </button>
        </h2>
        <div
          id='collapseFive'
          className='accordion-collapse collapse'
          aria-labelledby='headingFive'
          data-bs-parent='#accordionExample'>
          <div className='accordion-body'>
            <select>
              <option>2010</option>
              <option>2014</option>
              <option>2018</option>
              <option>2020</option>
            </select>
          </div>
        </div>
      </div>
      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingSix'>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseSix'
            aria-expanded='false'
            aria-controls='collapseSix'>
            <BsIcons.BsCalendar2DateFill />
            Age To
          </button>
        </h2>
        <div
          id='collapseSix'
          className='accordion-collapse collapse'
          aria-labelledby='headingSix'
          data-bs-parent='#accordionExample'>
          <div className='accordion-body'>
            <select>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
          </div>
        </div>
      </div>
      <hr style={{ width: '100%', size: '3px', color: '#c53030' }} />
      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingSeven'>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseSeven'
            aria-expanded='false'
            aria-controls='collapseSeven'>
            <BsIcons.BsSpeedometer2 />
            Max Mileage
          </button>
        </h2>
        <div
          id='collapseSeven'
          className='accordion-collapse collapse'
          aria-labelledby='headingSeven'
          data-bs-parent='#accordionExample'>
          <div className='accordion-body'>
            <select>
              <option>Any</option>
              <option>Up to 20,000</option>
              <option>Up to 40,000</option>
              <option>Up to 60,000</option>
            </select>
          </div>
        </div>
      </div>
      <hr style={{ width: '100%', size: '3px', color: '#c53030' }} />

      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingEight'>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseEight'
            aria-expanded='false'
            aria-controls='collapseEight'>
            <GiIcons.GiFuelTank />
            Fuel Type
          </button>
        </h2>
        <div
          id='collapseEight'
          className='accordion-collapse collapse'
          aria-labelledby='headingEight'
          data-bs-parent='#accordionExample'>
          <div className='accordion-body'>
            <select>
              <option>Any</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
            </select>
          </div>
        </div>
      </div>
      <hr style={{ width: '100%', size: '3px', color: '#c53030' }} />

      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingNine'>
          <button
            className='accordion-button collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseNine'
            aria-expanded='false'
            aria-controls='collapseNine'>
            <BsIcons.BsPaintBucket />
            Colour
          </button>
        </h2>
        <div
          id='collapseNine'
          className='accordion-collapse collapse'
          aria-labelledby='headingNine'
          data-bs-parent='#accordionExample'>
          <div className='accordion-body'>
            <select>
              <option>Any</option>
              <option>Black</option>
              <option>Red</option>
            </select>
          </div>
        </div>
      </div>
      <hr style={{ width: '100%', size: '3px', color: '#c53030' }} />
    </div>
  );
};

/* 
// export default SideFilterNew;

// <>
//       <div className='sidebar'>
//         <div className='container'>
//           <div className='row'>
//             <aside className='col-md-3'>
//               <div className='card'>
//                 <article className='filter-group'>
//                   <header className='card-header'>
//                     <a
//                       href='#'
//                       data-toggle='collapse'
//                       data-target='#collapse_2'
//                       aria-expanded='true'
//                       className=''
//                     >
//                       <i className='icon-control fa fa-chevron-down'></i>
//                       <h6 className='title'>Brands </h6>
//                     </a>
//                   </header>
//                   <div className='filter-content collapse show' id='collapse_2'>
//                     <div className='card-body'>
//                       <label className='custom-control custom-checkbox'>
//                         <input
//                           type='checkbox'
//                           className='custom-control-input'
//                         />
//                         <div className='custom-control-label'>
//                           Mercedes
//                           <b className='badge badge-pill badge-light float-right'>
//                             120
//                           </b>{' '}
//                         </div>
//                       </label>
//                       <label className='custom-control custom-checkbox'>
//                         <input
//                           type='checkbox'
//                           className='custom-control-input'
//                         />
//                         <div className='custom-control-label'>
//                           Toyota
//                           <b className='badge badge-pill badge-light float-right'>
//                             15
//                           </b>{' '}
//                         </div>
//                       </label>
//                       <label className='custom-control custom-checkbox'>
//                         <input
//                           type='checkbox'
//                           className='custom-control-input'
//                         />
//                         <div className='custom-control-label'>
//                           Mitsubishi
//                           <b className='badge badge-pill badge-light float-right'>
//                             35
//                           </b>{' '}
//                         </div>
//                       </label>
//                       <label className='custom-control custom-checkbox'>
//                         <input
//                           type='checkbox'
//                           className='custom-control-input'
//                         />
//                         <div className='custom-control-label'>
//                           Nissan
//                           <b className='badge badge-pill badge-light float-right'>
//                             89
//                           </b>{' '}
//                         </div>
//                       </label>
//                       <label className='custom-control custom-checkbox'>
//                         <input
//                           type='checkbox'
//                           className='custom-control-input'
//                         />
//                         <div className='custom-control-label'>
//                           Honda
//                           <b className='badge badge-pill badge-light float-right'>
//                             30
//                           </b>{' '}
//                         </div>
//                       </label>
//                     </div>
//                   </div>
//                 </article>
//                 <article className='filter-group'>
//                   <header className='card-header'>
//                     <a
//                       href='#'
//                       data-toggle='collapse'
//                       data-target='#collapse_3'
//                       aria-expanded='true'
//                       className=''
//                     >
//                       <i className='icon-control fa fa-chevron-down'></i>
//                       <h6 className='title'>Price range </h6>
//                     </a>
//                   </header>
//                   <div className='filter-content collapse show' id='collapse_3'>
//                     <div className='card-body'>
//                       <input
//                         type='range'
//                         className='custom-range'
//                         min='0'
//                         max='100'
//                         name=''
//                       />
//                       <div className='form-row'>
//                         <div className='form-group col-md-6'>
//                           <label>Min</label>
//                           <input
//                             className='form-control'
//                             placeholder='$0'
//                             type='number'
//                           />
//                         </div>
//                         <div className='form-group text-right col-md-6'>
//                           <label>Max</label>
//                           <input
//                             className='form-control'
//                             placeholder='$1,0000'
//                             type='number'
//                           />
//                         </div>
//                       </div>
//                       <button className='btn btn-block btn-primary'>
//                         Apply
//                       </button>
//                     </div>
//                   </div>
//                 </article>
//                 <article className='filter-group'>
//                   <header className='card-header'>
//                     <a
//                       href='#'
//                       data-toggle='collapse'
//                       data-target='#collapse_4'
//                       aria-expanded='true'
//                       className=''
//                     >
//                       <i className='icon-control fa fa-chevron-down'></i>
//                       <h6 className='title'>Sizes </h6>
//                     </a>
//                   </header>
//                   <div className='filter-content collapse show' id='collapse_4'>
//                     <div className='card-body'>
//                       <label className='checkbox-btn'>
//                         <input type='checkbox' />
//                         <span className='btn btn-light'> XS </span>
//                       </label>
//                       <label className='checkbox-btn'>
//                         <input type='checkbox' />
//                         <span className='btn btn-light'> SM </span>
//                       </label>
//                       <label className='checkbox-btn'>
//                         <input type='checkbox' />
//                         <span className='btn btn-light'> LG </span>
//                       </label>
//                       <label className='checkbox-btn'>
//                         <input type='checkbox' />
//                         <span className='btn btn-light'> XXL </span>
//                       </label>
//                     </div>
//                   </div>
//                 </article>
//                 <article className='filter-group'>
//                   <header className='card-header'>
//                     <a
//                       href='#'
//                       data-toggle='collapse'
//                       data-target='#collapse_5'
//                       aria-expanded='false'
//                       className=''
//                     >
//                       <i className='icon-control fa fa-chevron-down'></i>
//                       <h6 className='title'>More filter </h6>
//                     </a>
//                   </header>
//                   <div className='filter-content collapse in' id='collapse_5'>
//                     <div className='card-body'>
//                       <label className='custom-control custom-radio'>
//                         <input
//                           type='radio'
//                           name='myfilter_radio'
//                           checked=''
//                           className='custom-control-input'
//                         />
//                         <div className='custom-control-label'>
//                           Any condition
//                         </div>
//                       </label>
//                       <label className='custom-control custom-radio'>
//                         <input
//                           type='radio'
//                           name='myfilter_radio'
//                           className='custom-control-input'
//                         />
//                         <div className='custom-control-label'>Brand new </div>
//                       </label>
//                       <label className='custom-control custom-radio'>
//                         <input
//                           type='radio'
//                           name='myfilter_radio'
//                           className='custom-control-input'
//                         />
//                         <div className='custom-control-label'>Used items</div>
//                       </label>
//                       <label className='custom-control custom-radio'>
//                         <input
//                           type='radio'
//                           name='myfilter_radio'
//                           className='custom-control-input'
//                         />
//                         <div className='custom-control-label'>Very old</div>
//                       </label>
//                     </div>
//                   </div>
//                 </article>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </div>

//       <div className='page'>
//         <div className='main-wrapper'>
//           <CarCard />
//         </div>
//       </div>
//     </> */
