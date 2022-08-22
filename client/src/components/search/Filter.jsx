import React from 'react';

export const Filter = ({ id, name, data = [], onHandleChange }) => {
  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    onHandleChange(name, value);
  };

  return (
    <select name={id} className='form-control' onChange={handleChange}>
      <option value='' defaultValue=''>
        Select {name}
      </option>
      {data.map((item) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
