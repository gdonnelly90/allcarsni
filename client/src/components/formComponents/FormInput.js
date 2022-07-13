import React from 'react';
import { useField } from 'formik';
import { FormError } from './FormError';
import { Input } from './Input';

export const FormInput = ({
  fieldType = 'input',
  ariaLabel,
  name,
  type,
  placeholder,
  options = [],
}) => {
  const [field, meta, helpers] = useField(name);

  const output = () => {
    switch (fieldType) {
      case 'input':
        return (
          <Input
            field={field}
            ariaLabel={ariaLabel}
            name={field.name}
            type={type}
            placeholder={placeholder}
            meta={meta}
          />
        );
      case 'select':
        return (
          <select
            defaultValue={meta.value}
            className={
              meta.touched && meta.error
                ? 'form-control is-invalid'
                : 'form-control'
            }
            onChange={(e) => helpers.setValue(e.target.value)}
          >
            {options.map((obj, index) => (
              <option key={index} value={obj.value}>
                {obj.label}
              </option>
            ))}
          </select>
        );
    }
  };

  return (
    <>
      {output()}
      {meta.touched && meta.error ? (
        <FormError text={meta.error}></FormError>
      ) : null}
    </>
  );
};
