import React from 'react';

export const ErrorAlert = ({ text }) => (
  <div className='alert alert-danger text-center' role='alert'>
    {' '}
    {text}
  </div>
);
