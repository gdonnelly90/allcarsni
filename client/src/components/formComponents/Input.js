import React from 'react';

export const Input = ({ ariaLabel, name, type, placeholder, field, meta }) => (
  <input
    {...field}
    aria-label={ariaLabel}
    name={name}
    type={type}
    className={
      meta.touched && meta.error ? 'form-control is-invalid' : 'form-control'
    }
    placeholder={placeholder}
  />
);
