import React from 'react';
import { Link } from 'react-router-dom';
import { useAppState, useAppDispatch } from '../../context/appContext/context';

export const Footer = () => {
  const { user, isAuthenticated } = useAppState();
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
          <h5>Main Pages</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <Link to='/' className='nav-link p-0 text-muted'>
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div className='col'>
          <h5>Find Cars</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <Link to='/search?page=1' className='nav-link p-0 text-muted'>
                Search
              </Link>
            </li>
          </ul>
        </div>

        <div className='col'>
          <h5>Sell A Car</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              {isAuthenticated ? (
                <Link to='/account?tab=sell' className='nav-link p-0 text-muted'>
                  Sell
                </Link>
              ) : (
                <Link to='/login' className='nav-link p-0 text-muted'>
                  Sell
                </Link>
              )}
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

// {
//   isAuthenticated ? (
//     <Link to='/account' className='nav-link p-0 text-muted'></Link>
//   ) : <Link to='/login' className='nav-link p-0 text-muted'></Link>;
// }
