import React, { useState } from 'react';
import { ReviewCarouselModal } from './ReviewCarouselModal';

const ModalCar = ({ setModalCar }) => {
  return (
    <div className='modal-backshadow'>
      <div className='custom-modal'>
        <div className='modal-delete-icon' onClick={() => setModalCar(false)}>
          x
        </div>
        <ReviewCarouselModal className='carousel-image-cardetails' />
      </div>
    </div>
  );
};

export default ModalCar;
