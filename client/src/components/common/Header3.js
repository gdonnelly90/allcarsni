import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';

const Header3 = () => {
  // const Header3 = ({ auth }) => {
  //   let navigate = useNavigate();
  //   const { authState } = auth;

  //   const handleClick = (path) => {
  //     navigate(path);
  //   };

  //   const logout = () => {
  //     auth.logout();
  //   };

  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
            <img src={require('../assets/img/text_only_logo.png')} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              {/* <Nav.Link href="/profile">Profile</Nav.Link> */}
            </Nav>
            <Nav>
              {/* {auth.isAuthenticated() ? null : ( */}
              <Button
                variant='light'
                className='btn btn-light mx-2'
                // onClick={() => handleClick('/login')}
              >
                Login
              </Button>
              {/* )} */}
              {/* {auth.isAuthenticated() ? null : ( */}
              <Button
                variant='warning'
                className='btn mx-2'
                // onClick={() => handleClick('/signup')}
              >
                Sign-up
              </Button>
              {/* )} */}
              {/* {auth.isAuthenticated() ? ( */}
              <NavDropdown
                title='Welcome firstName'
                //   title={`Welcome ${authState.userInfo.firstName}`}
                id='collasible-nav-dropdown'
              >
                <NavDropdown.Item>
                  {/* <NavDropdown.Item onClick={() => handleClick('/account')}> */}
                  Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  {/* <NavDropdown.Item onClick={() => logout()}> */}
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              {/* ) : null} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header3;
