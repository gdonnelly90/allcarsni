import React from 'react';

export const FormSuccess = ({ text }) => {
  return (
    <div className='alert alert-success' role='alert'>
      <span>{text}</span>
    </div>
  );
};
