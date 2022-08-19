import React, { useState, useEffect } from 'react';
import { Filter } from '../filters/filter.route';
import axios from 'axios';
// import { Filter } from './Filter';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';

// const SideFilterNew = (vehicle, onHandleChange) => {
export const SideFilterNew = ({
  make,
  model,
  price,
  year,
  mileage,
  fuelType,
  colour,
  onHandleChange,
}) => {
  return (
    <div className='sidebar'>
      <p className='siderbar-text-pclass'>Filters</p>
      <hr style={{ width: '100%', size: '3px', color: '#c53030' }} />
      <div className='col-3 search-filter'>
        <Filter id='make' name='by make' data={make} onHandleChange={onHandleChange} />
      </div>
    </div>
  );
};

{
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
}
