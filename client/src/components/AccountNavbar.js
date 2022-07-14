import React from 'react';
import { Link } from 'react-router-dom';

const AccountNavbar = () => {
  return (
    <>
      <Link className='btn btn-light my-3' to='/account/personaldetails'>
        Personal Details
      </Link>
      <Link className='btn btn-light my-3' to='/account/adverthistory'>
        Advert History
      </Link>
      <Link className='btn btn-light my-3' to='/account/favourites'>
        Favourites
      </Link>
      <Link className='btn btn-light my-3' to='/account/manageadvert'>
        Manage Adverts
      </Link>
      <Link className='btn btn-light my-3' to='/account/myvehicle'>
        My Vehicle
      </Link>
      <Link className='btn btn-light my-3' to='/account/paymenthistory'>
        Payment History
      </Link>
      <Link className='btn btn-light my-3' to='/account/paymentmethod'>
        Payment Methods
      </Link>
    </>
  );
};

export default AccountNavbar;
