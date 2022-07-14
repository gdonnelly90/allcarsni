import React from 'react';
import AccountNavbar from '../../components/AccountNavbar';
import { Button, Container, Row, Col } from 'react-bootstrap';
import MyVehicleShow from '../../components/MyVehicleShow';
import MyVehicleHidden from '../../components/MyVehicleHidden';

const MyVehicle = () => {
  return (
    <Container>
      <AccountNavbar />
      {/* <MyVehicleShow /> */}
      <MyVehicleHidden />
    </Container>
  );
};

export default MyVehicle;
