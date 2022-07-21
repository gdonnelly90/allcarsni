// import React, { Container } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { Nav, Navbar } from 'react-bootstrap';
// // import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";
// import textlogo from '../assets/img/text_only_logo.png';

// const Navbar = () => {
//   return (
//     <div>
//       <nav className='navbar' collapseOnSelect expand='lg' bg='blue' variant='dark'>
//         <Container>
//           <LinkContainer to='/'>
//             <img src={textlogo} width='120' height='30' alt='AllCarsNI' />
//           </LinkContainer>
//         </Container>
//       </nav>
//     </div>
//   );
// };

// //       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
// //         <Container>
// //           <Navbar.Brand href="/">
// //             <img src={require("../assets/img/top500Logo.png")} />
// //           </Navbar.Brand>
// //           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// //           <Navbar.Collapse id="responsive-navbar-nav">
// //             <Nav className="me-auto">
// //               {/* <Nav.Link href="/profile">Profile</Nav.Link> */}
// //             </Nav>
// //             <Nav>
// //               {auth.isAuthenticated() ? null : (
// //                 <Button
// //                   variant="light"
// //                   className="btn btn-light mx-2"
// //                   onClick={() => handleClick("/login")}
// //                 >
// //                   Login
// //                 </Button>
// //               )}
// //               {auth.isAuthenticated() ? null : (
// //                 <Button
// //                   variant="warning"
// //                   className="btn mx-2"
// //                   onClick={() => handleClick("/signup")}
// //                 >
// //                   Sign-up
// //                 </Button>
// //               )}
// //               {auth.isAuthenticated() ? (
// //                 <NavDropdown
// //                   title={`Welcome ${authState.userInfo.firstName}`}
// //                   id="collasible-nav-dropdown"
// //                 >
// //                   <NavDropdown.Item onClick={() => handleClick("/account")}>
// //                     Account
// //                   </NavDropdown.Item>
// //                   <NavDropdown.Divider />
// //                   <NavDropdown.Item onClick={() => logout()}>
// //                     Logout
// //                   </NavDropdown.Item>
// //                 </NavDropdown>
// //               ) : null}
// //             </Nav>
// //           </Navbar.Collapse>
// //         </Container>
// //       </Navbar>
// //   );
// // };

// export default Navbar;
