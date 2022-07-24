import React from 'react';
import { useAppState, useAppDispatch } from '../context/appContext';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { user, token } = useAppState();

  return (
    <div className='d-flex justify-cotent-center text-center' style={{ height: '80vh' }}>
      <div className='container align-items-center d-flex'>
        <div className='row col-md-6 offset-md-3 text-center'>
          <div className='pt-5 fw-bold'>Welcome {user.firstName}</div>
          <p className='lead pb-4'>Start your search &amp; find your dream car</p>
        </div>
      </div>
    </div>
  );
};
