import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Select from 'react-select';
import index from '../../../../client/src/index.css';

const SimpleSearch = () => {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();

  // Array of all options
  const makeList = [{ value: 'Make1', label: 'Make1' }];
  const modelList = [{ value: 'Model1', label: 'Model1' }];
  const priceList = [
    { value: 'Price1', label: '£10,000' },
    { value: 'Price2', label: '£20,000' },
    { value: 'Price3', label: '£50,000' },
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <MDBRow md='12'>
      <MDBCol md='4'>
        <div className='dropdown-make'>
          <h2>Choose car make</h2>
          <div className='dropdown-container'>
            <Select
              options={makeList}
              placeholder='Select make'
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
              isMulti
            />
          </div>
        </div>
      </MDBCol>
      <MDBCol md='4'>
        <div className='dropdown-model'>
          <h2>Choose car model</h2>
          <div className='dropdown-container'>
            <Select
              options={modelList}
              placeholder='Select model'
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
              isMulti
            />
          </div>
        </div>
      </MDBCol>
      <MDBCol md='4'>
        <div className='dropdown-max-price'>
          <h2>Choose max price</h2>
          <div className='dropdown-container'>
            <Select
              options={priceList}
              placeholder='Select max price'
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
              isMulti
            />
          </div>
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default SimpleSearch;

// <MDBRow md='12'>
//   <MDBCol md='4'>
//     <Multiselect
//       displayValue='key'
//       onKeyPressFn={function noRefCheck() {}}
//       onRemove={function noRefCheck() {}}
//       onSearch={function noRefCheck() {}}
//       onSelect={function noRefCheck() {}}
//       options={[
//         {
//           cat: 'Group 1',
//           key: 'Make1',
//         },
//         {
//           cat: 'Group 1',
//           key: 'Make2',
//         },
//         {
//           cat: 'Group 1',
//           key: 'Make3',
//         },
//         {
//           cat: 'Group 1',
//           key: 'Make4',
//         },
//         {
//           cat: 'Group 1',
//           key: 'Make5',
//         },
//         {
//           cat: 'Group 1',
//           key: 'Make6',
//         },
//         {
//           cat: 'Group 1',
//           key: 'Make7',
//         },
//       ]}
//       placeholder='Make'
//     />
//   </MDBCol>
//   <MDBCol md='4'>
//     <Multiselect
//       displayValue='key'
//       onKeyPressFn={function noRefCheck() {}}
//       onRemove={function noRefCheck() {}}
//       onSearch={function noRefCheck() {}}
//       onSelect={function noRefCheck() {}}
//       options={[
//         {
//           cat: 'Group 2',
//           key: 'Model1',
//         },
//         {
//           cat: 'Group 2',
//           key: 'Model2',
//         },
//         {
//           cat: 'Group 2',
//           key: 'Model3',
//         },
//         {
//           cat: 'Group 2',
//           key: 'Model4',
//         },
//         {
//           cat: 'Group 2',
//           key: 'Model5',
//         },
//         {
//           cat: 'Group 2',
//           key: 'Model6',
//         },
//         {
//           cat: 'Group 2',
//           key: 'Model7',
//         },
//       ]}
//       placeholder='Model'
//     />
//   </MDBCol>
//   <MDBCol md='4'>
//     <Multiselect
//       displayValue='key'
//       onKeyPressFn={function noRefCheck() {}}
//       onRemove={function noRefCheck() {}}
//       onSearch={function noRefCheck() {}}
//       onSelect={function noRefCheck() {}}
//       options={[
//         {
//           cat: 'Group 3',
//           key: '£10,000',
//         },
//         {
//           cat: 'Group 3',
//           key: '£15,000',
//         },
//         {
//           cat: 'Group 3',
//           key: '£20,000',
//         },
//         {
//           cat: 'Group 3',
//           key: '£50,000',
//         },
//         {
//           cat: 'Group 3',
//           key: 'No Max Price',
//         },
//       ]}
//       placeholder='Max Price'
//     />
//   </MDBCol>
// </MDBRow>

// <div class='advance_search_panel'>
//   <div class='row'>
//     <div class='col-lg-12'>
//       <ul
//         class='nav nav-pills justify-content-center'
//         id='pills-tab'
//         role='tablist'
//       >
//         <li class='nav-item' role='presentation'>
//           <button
//             class='nav-link active'
//             id='pills-allstatus-tab'
//             data-bs-toggle='pill'
//             data-bs-target='#pills-allstatus'
//             type='button'
//             role='tab'
//             aria-controls='pills-allstatus'
//             aria-selected='true'
//           >
//             All cars
//           </button>
//         </li>
//         <li class='nav-item' role='presentation'>
//           <button
//             class='nav-link'
//             id='pills-usedcar-tab'
//             data-bs-toggle='pill'
//             data-bs-target='#pills-usedcar'
//             type='button'
//             role='tab'
//             aria-controls='pills-usedcar'
//             aria-selected='false'
//           >
//             Used Cars
//           </button>
//         </li>
//         <li class='nav-item' role='presentation'>
//           <button
//             class='nav-link'
//             id='pills-newcar-tab'
//             data-bs-toggle='pill'
//             data-bs-target='#pills-newcar'
//             type='button'
//             role='tab'
//             aria-controls='pills-newcar'
//             aria-selected='false'
//           >
//             New Cars
//           </button>
//         </li>
//       </ul>
//       <div class='adss_bg_stylehome1'>
//         <div class='tab-content' id='pills-tabContent'>
//           <div
//             class='tab-pane fade show active'
//             id='pills-allstatus'
//             role='tabpanel'
//             aria-labelledby='pills-allstatus-tab'
//           >
//             <div class='row'>
//               <div class='col-lg-12'>
//                 <div class='home1_advance_search_wrapper'>
//                   <ul class='mb0 text-center'>
//                     <li class='list-inline-item'>
//                       <div class='select-boxes'>
//                         <div class='car_brand'>
//                           <h6 class='title'>Make</h6>
//                           <select class='selectpicker'>
//                             <option>Select Makes</option>
//                             <option>Make1</option>
//                             <option>Make2</option>
//                             <option>Make3</option>
//                             <option>Make4</option>
//                             <option>Make5</option>
//                             <option>Make6</option>
//                           </select>
//                         </div>
//                       </div>
//                     </li>
//                     <li class='list-inline-item'>
//                       <div class='select-boxes'>
//                         <div class='car_models'>
//                           <h6 class='title'>Models</h6>
//                           <select class='selectpicker'>
//                             <option>Select Models</option>
//                             <option>Model1</option>
//                             <option>Model2</option>
//                             <option>Model3</option>
//                             <option>Model4</option>
//                             <option>Model5</option>
//                           </select>
//                         </div>
//                       </div>
//                     </li>
//                     <li class='list-inline-item'>
//                       <div class='select-boxes'>
//                         <div class='car_prices'>
//                           <h6 class='title'>Price</h6>
//                           <select class='selectpicker'>
//                             <option>All Price</option>
//                             <option>£10,000</option>
//                             <option>£15,000</option>
//                             <option>£20,000</option>
//                             <option>£50,000</option>
//                           </select>
//                         </div>
//                       </div>
//                     </li>
//                     <li class='list-inline-item'>
//                       <div class='d-block'>
//                         <button class='btn btn-thm advnc_search_form_btn'>
//                           <span class='flaticon-magnifiying-glass'></span>
//                           Search
//                         </button>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             class='tab-pane fade'
//             id='pills-usedcar'
//             role='tabpanel'
//             aria-labelledby='pills-usedcar-tab'
//           >
//             <li class='list-inline-item'>
//               <div class='select-boxes'>
//                 <button class='btn btn-thm advnc_search_form_btn'>
//                   <span class='flaticon-magnifiying-glass'></span>
//                   Search
//                 </button>
//               </div>
//             </li>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
