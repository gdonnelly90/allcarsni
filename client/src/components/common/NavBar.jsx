import React, { useContext, useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { fetchRecipientMessages } from '../../services/message.service';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAppState, useAppDispatch } from '../../context/appContext/context';
import { LOGOUT } from '../../context/actionTypes';
import { Hyperlink } from './Hyperlink';
import { logout } from '../../context/appContext';
import textlogo from '../../assets/img/textonly_white_red_logo.png';

export const NavBar = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppState();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: LOGOUT });
    setTimeout(() => {
      navigate('/');
    }, 700);
  };

  return (
    <Navbar
      className='nav-colour px-4'
      collapseOnSelect
      expand='lg'
      // bg='transparent'
      variant='dark'
      // className='px-4'
    >
      <LinkContainer to='/'>
        <Nav.Link>
          <img src={textlogo} width='120' height='30' alt='AllCarsNI' />
        </Nav.Link>
      </LinkContainer>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='me-auto'>
          <LinkContainer to='/search?page=1'>
            <Nav.Link>
              <i className='fas fa-search'></i> Search
            </Nav.Link>
          </LinkContainer>
          {/* <LinkContainer to='/search/cardetail'>
            <Nav.Link>
              <i className='fas fa-car'></i> Car Detail
            </Nav.Link>
          </LinkContainer> */}
          {/* <Nav.Link href='#pricing'>News &amp; reviews</Nav.Link> */}
        </Nav>
        <Nav>
          {isAuthenticated && (
            <NavDropdown title={`Welcome ${user.firstName}`} id='collasible-nav-dropdown'>
              <NavDropdown.Item>
                <Hyperlink text={'Account'} to={'/account'} />
              </NavDropdown.Item>
              {/* <NavDropdown.Item href='#action/3.3'>Settings</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
            </NavDropdown>
          )}

          {!isAuthenticated && (
            <>
              <Link className='nav-link' to='/register'>
                Register
              </Link>
              <Link className='nav-link' to='/login'>
                Sign in
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
