import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SuccessBanner = ({ text, classNames = '' }) => {
  return (
    <section
      className={`text-center p-2 mb-2 rounded border-green-heavy bg-green-light ${classNames}`}>
      <div className='d-flex justify-content-center align-items-center text-green-heavy'>
        <FontAwesomeIcon icon={faCheckCircle} className='mr-4' />
        <div className='ms-2'>{text}</div>
      </div>
    </section>
  );
};
