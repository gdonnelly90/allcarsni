import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// designing the footer
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-centre py-3'>
            Copyright &copy; AllCarsNI 2022
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
