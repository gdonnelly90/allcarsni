import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from '../filters/filter.route';
import axios from 'axios';
// import { Filter } from './Filter';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';

{
  /* <Link to={'/login'}>Login In</Link> */
}

export const SideFilter = () => {
  return (
    <div className='hamburger-menu'>
      <h1 className>Filters</h1>
      <input id='menu__toggle' type='checkbox' />
      <label className='menu__btn' for='menu__toggle'>
        <span></span>
      </label>

      <ul className='menu__box'>
        <li>
          <a className='menu__item' href='#'>
            Home
          </a>
        </li>
        <li>
          <a className='menu__item' href='#'>
            About
          </a>
        </li>
        <li>
          <a className='menu__item' href='#'>
            Team
          </a>
        </li>
        <li>
          <a className='menu__item' href='#'>
            Contact
          </a>
        </li>
        <li>
          <a className='menu__item' href='#'>
            Twitter
          </a>
        </li>
      </ul>
    </div>
    // <div className='sidebar-drawer-container'>
    //   <div className='siderbar-drawer'>
    //     <ul className='filter-list pt-4'>
    //       <h1 className='drawer-title pb-5'>Filters</h1>
    //       <li>
    //         {/* <hr style={{ width: '100%', size: '3px', color: '#c53030' }} /> */}
    //         <div className='drawer-icon'>
    //           <FaIcons.FaCar />
    //           <span className='drawer-title p-2'>Make</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className='drawer-icon'>
    //           <IoIcons.IoLogoModelS />
    //           <span className='drawer-title p-2'>Model</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className='drawer-icon'>
    //           <MdIcons.MdAttachMoney />
    //           <span className='drawer-title p-2'>Min Price</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className='drawer-icon'>
    //           <MdIcons.MdOutlineMoneyOff />
    //           <span className='drawer-title p-2'>Max Price</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className='drawer-icon'>
    //           <BsIcons.BsCalendarDate />
    //           <span className='drawer-title p-2'>Year From</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className='drawer-icon'>
    //           <BsIcons.BsCalendar2DateFill />
    //           <span className='drawer-title p-2'>Year To</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className='drawer-icon'>
    //           <BsIcons.BsSpeedometer2 />
    //           <span className='drawer-title p-2'>Max Mileage</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className='drawer-icon'>
    //           <GiIcons.GiFuelTank />
    //           <span className='drawer-title p-2'>Fuel Type</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className='drawer-icon'>
    //           <BsIcons.BsPaintBucket />
    //           <span className='drawer-title p-2'>Colour</span>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

// accordion item for filtering
// <div className='accordion-item'>
//         <h2 className='accordion-header' id='headingFour'>
//           <button
//             className='accordion-button collapsed'
//             type='button'
//             data-bs-toggle='collapse'
//             data-bs-target='#collapseFour'
//             aria-expanded='false'
//             aria-controls='collapseFour'>
//             <MdIcons.MdOutlineMoneyOff />
//             Maximum Price
//           </button>
//         </h2>
//         <div
//           id='collapseFour'
//           className='accordion-collapse collapse'
//           aria-labelledby='headingFour'
//           data-bs-parent='#accordionExample'>
//           <div className='accordion-body'>
//             <select>
//               <option>Any</option>
//               <option>£50,000</option>
//               <option>£10,000,000</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <hr style={{ width: '100%', size: '3px', color: '#c53030' }} />

// <div className='wrapper'>
//       {/* <div className='d-md-flex align-items-md-center'> */}
//       <div className='h3'>Filters</div>
//       <div className='d-sm-flex align-items-sm-center pt-2 clear'>
//         <div className='text-muted filter-label'>Applied Filters:</div>
//         <div className='green-label font-weight-bold p-0 px-1 mx-sm-1 mx-0 my-sm-0 my-2'>
//           Selected Filtre <span className=' px-1 close'>&times;</span>{' '}
//         </div>
//         <div className='green-label font-weight-bold p-0 px-1 mx-sm-1 mx-0'>
//           Selected Filtre <span className=' px-1 close'>&times;</span>{' '}
//         </div>
//       </div>
//       <div className='filters'>
//         {' '}
//         <button
//           className='btn btn-success'
//           type='button'
//           data-toggle='collapse'
//           data-target='#mobile-filter'
//           aria-expanded='true'
//           aria-controls='mobile-filter'>
//           Filter<span className='px-1 fas fa-filter'></span>
//         </button>{' '}
//       </div>
//       <div id='mobile-filter'>
//         <div className='py-3'>
//           <h5 className='font-weight-bold'>Categories</h5>
//           <ul className='list-group'>
//             <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center category'>
//               {' '}
//               vegetables <span className='badge badge-primary badge-pill'>328</span>{' '}
//             </li>
//             <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center category'>
//               {' '}
//               Fruits <span className='badge badge-primary badge-pill'>112</span>{' '}
//             </li>
//             <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center category'>
//               {' '}
//               Kitchen Accessories <span className='badge badge-primary badge-pill'>32</span>{' '}
//             </li>
//             <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center category'>
//               {' '}
//               Chefs Tips <span className='badge badge-primary badge-pill'>48</span>{' '}
//             </li>
//           </ul>
//         </div>
//         <div className='py-3'>
//           <h5 className='font-weight-bold'>Brands</h5>
//           <form className='brand'>
//             <div className='form-inline d-flex align-items-center py-1'>
//               {' '}
//               <label className='tick'>
//                 Royal Fields <input type='checkbox' /> <span className='check'></span>{' '}
//               </label>{' '}
//             </div>
//             <div className='form-inline d-flex align-items-center py-1'>
//               {' '}
//               <label className='tick'>
//                 Crasmas Fields <input type='checkbox' checked /> <span className='check'></span>{' '}
//               </label>{' '}
//             </div>
//             <div className='form-inline d-flex align-items-center py-1'>
//               {' '}
//               <label className='tick'>
//                 Vegetarisma Farm <input type='checkbox' checked /> <span className='check'></span>{' '}
//               </label>{' '}
//             </div>
//             <div className='form-inline d-flex align-items-center py-1'>
//               {' '}
//               <label className='tick'>
//                 Farmar Field Eve <input type='checkbox' /> <span className='check'></span>{' '}
//               </label>{' '}
//             </div>
//             <div className='form-inline d-flex align-items-center py-1'>
//               {' '}
//               <label className='tick'>
//                 True Farmar Steve <input type='checkbox' /> <span className='check'></span>{' '}
//               </label>{' '}
//             </div>
//           </form>
//         </div>
//         <div className='py-3'>
//           <h5 className='font-weight-bold'>Rating</h5>
//           <form className='rating'>
//             <div className='form-inline d-flex align-items-center py-2'>
//               {' '}
//               <label className='tick'>
//                 <span className='fas fa-star'></span> <span className='fas fa-star'></span>{' '}
//                 <span className='fas fa-star'></span> <span className='fas fa-star'></span>{' '}
//                 <span className='fas fa-star'></span> <input type='checkbox' />{' '}
//                 <span className='check'></span>{' '}
//               </label>{' '}
//             </div>
//             <div className='form-inline d-flex align-items-center py-2'>
//               {' '}
//               <label className='tick'>
//                 {' '}
//                 <span className='fas fa-star'></span> <span className='fas fa-star'></span>{' '}
//                 <span className='fas fa-star'></span> <span className='fas fa-star'></span>{' '}
//                 <span className='far fa-star px-1 text-muted'></span> <input type='checkbox' />{' '}
//                 <span className='check'></span>{' '}
//               </label>{' '}
//             </div>
//             <div className='form-inline d-flex align-items-center py-2'>
//               {' '}
//               <label className='tick'>
//                 <span className='fas fa-star'></span> <span className='fas fa-star'></span>{' '}
//                 <span className='fas fa-star'></span>{' '}
//                 <span className='far fa-star px-1 text-muted'></span>{' '}
//                 <span className='far fa-star px-1 text-muted'></span> <input type='checkbox' />{' '}
//                 <span className='check'></span>{' '}
//               </label>{' '}
//             </div>
//             <div className='form-inline d-flex align-items-center py-2'>
//               {' '}
//               <label className='tick'>
//                 <span className='fas fa-star'></span> <span className='fas fa-star'></span>{' '}
//                 <span className='far fa-star px-1 text-muted'></span>{' '}
//                 <span className='far fa-star px-1 text-muted'></span>{' '}
//                 <span className='far fa-star px-1 text-muted'></span> <input type='checkbox' />{' '}
//                 <span className='check'></span>{' '}
//               </label>{' '}
//             </div>
//             <div className='form-inline d-flex align-items-center py-2'>
//               {' '}
//               <label className='tick'>
//                 {' '}
//                 <span className='fas fa-star'></span>{' '}
//                 <span className='far fa-star px-1 text-muted'></span>{' '}
//                 <span className='far fa-star px-1 text-muted'></span>{' '}
//                 <span className='far fa-star px-1 text-muted'></span>{' '}
//                 <span className='far fa-star px-1 text-muted'></span> <input type='checkbox' />{' '}
//                 <span className='check'></span>{' '}
//               </label>{' '}
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className='content py-md-0 py-3'>
//         <section id='sidebar'>
//           <div className='py-3'>
//             <h5 className='font-weight-bold'>Categories</h5>
//             <ul className='list-group'>
//               <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center category'>
//                 {' '}
//                 vegetables <span className='badge badge-primary badge-pill'>328</span>{' '}
//               </li>
//               <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center category'>
//                 {' '}
//                 Fruits <span className='badge badge-primary badge-pill'>112</span>{' '}
//               </li>
//               <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center category'>
//                 {' '}
//                 Kitchen Accessories <span className='badge badge-primary badge-pill'>32</span>{' '}
//               </li>
//               <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center category'>
//                 {' '}
//                 Chefs Tips <span className='badge badge-primary badge-pill'>48</span>{' '}
//               </li>
//             </ul>
//           </div>
//           <div className='py-3'>
//             <h5 className='font-weight-bold'>Brands</h5>
//             <form className='brand'>
//               <div className='form-inline d-flex align-items-center py-1'>
//                 {' '}
//                 <label className='tick'>
//                   Royal Fields <input type='checkbox' /> <span className='check'></span>{' '}
//                 </label>{' '}
//               </div>
//               <div className='form-inline d-flex align-items-center py-1'>
//                 {' '}
//                 <label className='tick'>
//                   Crasmas Fields <input type='checkbox' checked /> <span className='check'></span>{' '}
//                 </label>{' '}
//               </div>
//               <div className='form-inline d-flex align-items-center py-1'>
//                 {' '}
//                 <label className='tick'>
//                   Vegetarisma Farm <input type='checkbox' checked /> <span className='check'></span>{' '}
//                 </label>{' '}
//               </div>
//               <div className='form-inline d-flex align-items-center py-1'>
//                 {' '}
//                 <label className='tick'>
//                   Farmar Field Eve <input type='checkbox' /> <span className='check'></span>{' '}
//                 </label>{' '}
//               </div>
//               <div className='form-inline d-flex align-items-center py-1'>
//                 {' '}
//                 <label className='tick'>
//                   True Farmar Steve <input type='checkbox' /> <span className='check'></span>{' '}
//                 </label>{' '}
//               </div>
//             </form>
//           </div>
//           <div className='py-3'>
//             <h5 className='font-weight-bold'>Rating</h5>
//             <form className='rating'>
//               <div className='form-inline d-flex align-items-center py-2'>
//                 {' '}
//                 <label className='tick'>
//                   <span className='fas fa-star'></span> <span className='fas fa-star'></span>{' '}
//                   <span className='fas fa-star'></span> <span className='fas fa-star'></span>{' '}
//                   <span className='fas fa-star'></span> <input type='checkbox' />{' '}
//                   <span className='check'></span>{' '}
//                 </label>{' '}
//               </div>
//               <div className='form-inline d-flex align-items-center py-2'>
//                 {' '}
//                 <label className='tick'>
//                   {' '}
//                   <span className='fas fa-star'></span> <span className='fas fa-star'></span>{' '}
//                   <span className='fas fa-star'></span> <span className='fas fa-star'></span>{' '}
//                   <span className='far fa-star px-1 text-muted'></span> <input type='checkbox' />{' '}
//                   <span className='check'></span>{' '}
//                 </label>{' '}
//               </div>
//               <div className='form-inline d-flex align-items-center py-2'>
//                 {' '}
//                 <label className='tick'>
//                   <span className='fas fa-star'></span> <span className='fas fa-star'></span>{' '}
//                   <span className='fas fa-star'></span>{' '}
//                   <span className='far fa-star px-1 text-muted'></span>{' '}
//                   <span className='far fa-star px-1 text-muted'></span> <input type='checkbox' />{' '}
//                   <span className='check'></span>{' '}
//                 </label>{' '}
//               </div>
//               <div className='form-inline d-flex align-items-center py-2'>
//                 {' '}
//                 <label className='tick'>
//                   <span className='fas fa-star'></span> <span className='fas fa-star'></span>{' '}
//                   <span className='far fa-star px-1 text-muted'></span>{' '}
//                   <span className='far fa-star px-1 text-muted'></span>{' '}
//                   <span className='far fa-star px-1 text-muted'></span> <input type='checkbox' />{' '}
//                   <span className='check'></span>{' '}
//                 </label>{' '}
//               </div>
//               <div className='form-inline d-flex align-items-center py-2'>
//                 {' '}
//                 <label className='tick'>
//                   {' '}
//                   <span className='fas fa-star'></span>{' '}
//                   <span className='far fa-star px-1 text-muted'></span>{' '}
//                   <span className='far fa-star px-1 text-muted'></span>{' '}
//                   <span className='far fa-star px-1 text-muted'></span>{' '}
//                   <span className='far fa-star px-1 text-muted'></span> <input type='checkbox' />{' '}
//                   <span className='check'></span>{' '}
//                 </label>{' '}
//               </div>
//             </form>
//           </div>
//         </section>
//       </div>
//     </div>
