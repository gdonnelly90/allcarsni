import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer-main-container container'>
      <footer className='row row-cols-5 py-5 my-5 border-top'>
        <div className='col'>
          <a href='/' className='d-flex align-items-center mb-3 link-dark text-decoration-none'>
            AllCarsNI
          </a>
          <p className='text-muted'>© 2022</p>
        </div>

        <div className='col'></div>

        <div className='col'>
          <h5>Section</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <Link to='/' className='nav-link p-0 text-muted'>
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div className='col'>
          <h5>Section</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <Link to='/search?page=1' className='nav-link p-0 text-muted'>
                Search
              </Link>
            </li>
          </ul>
        </div>

        <div className='col'>
          <h5>Section</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <Link to='/login' className='nav-link p-0 text-muted'>
                Sell
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
