import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';
import textlogo from '../assets/img/text_only_logo.png';
import '../../src/index.css';

const Header2 = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark gradient-custom'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            <LinkContainer to='/'>
              <img src={textlogo} width='120' height='30' alt='AllCarsNI' />
            </LinkContainer>
          </a>
          <Container>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <LinkContainer to='/search'>
                  <Nav.Link>
                    <i className='fas fa-search'></i> Search
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/register'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign Up
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/sellcar'>
                  <Nav.Link>
                    <i className='fas fa-car'></i> Sell Your Car
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>

          <ul className='navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0'>
            <li className='nav-item me-3 me-lg-0'>
              <a className='nav-link'>
                <LinkContainer to='/account'>
                  <Nav.Link>
                    <i className='fas fa-book'></i> Account
                  </Nav.Link>
                </LinkContainer>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header2;
