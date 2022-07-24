import React from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ErrorBanner = ({ text }) => {
  return (
    <section className='text-center p-2 mb-2 rounded border-red-heavy bg-red-light'>
      <div className='d-flex justify-content-center align-items-center text-red-heavy'>
        <FontAwesomeIcon icon={faCircleXmark} className='mr-4' />
        <div className='ms-2'>{text}</div>
      </div>
    </section>
  );
};
