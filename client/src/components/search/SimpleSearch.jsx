import React, { useState } from 'react';
import { Row, Container, Button } from 'react-bootstrap';
import { SearchBar } from './SearchBar';
import { Filter } from './Filter';
import Select from 'react-select';

const SimpleSearch = ({ onHandleChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const makeOptions = [
    { value: 'BMW', label: 'BMW' },
    { value: 'Lexus', label: 'Lexus' },
    { value: 'Mercedes', label: 'Mercedes' },
  ];

  const modelOptions = [
    { value: '3 Series', label: '3 Series' },
    { value: '450h', label: '450h' },
    { value: 'E63 AMG', label: 'E63 AMG' },
  ];

  const handleChange = (selectedOption) => {
    console.log(selectedOption);
    setSelectedOption(selectedOption);
  };

  return (
    <div className='search-wrapper'>
      <Container>
        <Row className='mb-3'>
          <div className='col-5 search-filter'>
            <Select
              placeholder='Select make'
              className='app-select'
              defaultValue={selectedOption}
              onChange={() => handleChange}
              isSearchable={false}
              options={makeOptions}
            />
          </div>
          <div className='col-5 search-filter'>
            <Select
              placeholder='Select model'
              className='app-select'
              defaultValue={selectedOption}
              onChange={() => handleChange}
              isSearchable={false}
              options={modelOptions}
            />
          </div>
          <div className='col-2 search-submit'>
            <Button variant='outline-light' size='lg'>
              Search xxxx cars
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SimpleSearch;

{
  /* <Filter
  id='releaseYear'
  name='by model'
  data={modelOptions}
  onHandleChange={onHandleChange}
/> */
}

// <div
//   className='d-flex flex-row justify-content-between w-80 mt-0 mb-0'
//   style={{ width: '80%', margin: 'auto' }}
// >
//   <div style={{ display: 'flex' }}>
//     <span>
//       <Select options={makeOptions} />
//     </span>
//     <span>
//       <Select options={modelOptions} />
//     </span>
//   </div>
// </div>
