import React from 'react';

export const SearchBar = ({ onHandleChange }) => {
  const handleInputChange = (event) => {
    const {
      target: { name, value },
    } = event;
    onHandleChange(name, value);
  };

  return (
    <input
      type='text'
      className='form-control'
      name='search'
      autoComplete='off'
      placeholder='Wildcard Search - album, artist, genre, year...'
      onChange={handleInputChange}
    />
  );
};
