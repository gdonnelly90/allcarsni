import React from 'react';

export const CarButton = ({ setModalCar }) => {
  return (
    <button className='btn btn-primary bnt-md' onClick={() => setModalCar(true)}>
      Open Imagery Carousel
    </button>
  );
};
