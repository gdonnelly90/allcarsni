// import React from 'react';

// export const ProfileTab = () => {
//   return <div>ProfileTab</div>;
// };

import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { PersonalDetails } from './account/PersonalDetails';
import { GoPrimitiveDot } from 'react-icons/go';
import { ImPencil, ImBin } from 'react-icons/im';

export const ProfileTab = () => {
  // const { token, userInfo } = auth;
  // const header = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} md={6} lg={4}>
          <Card className='mb-3'>
            <Card.Body>
              <div className='w-100 d-flex justify-content-center mb-3'>
                <Avatar size='60' round={true} />
              </div>
              <Card.Title className='text-center mx-3'>
                {/* {userInfo.firstName} {userInfo.lastName} */}Name
              </Card.Title>
              <Card.Subtitle className='mb-2 text-muted text-center'>email</Card.Subtitle>
              {/* <Card.Subtitle className='mb-2 text-muted text-center'>email{userInfo.email}</Card.Subtitle> */}
              <Container className='mt-3 d-flex justify-content-center text-center'>
                <Col>
                  <div className='count fw-bold'>25</div>
                  <div className='meta-profile-title'>Max Allowance</div>
                </Col>
                <Col>
                  <div className='count fw-bold'>1</div>
                  <div className='meta-profile-title'>Ads Left</div>
                </Col>
                <Col>
                  <div className='count fw-bold'>2</div>
                  <div className='meta-profile-title'>Messages</div>
                </Col>
              </Container>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={8}>
          <h1>Personal Details</h1>
          <p className='text-muted'>
            Use the form below to update your personal details. This will provide the best
            expereince possible.
          </p>
          <PersonalDetails />
          <p className='mt-3 text-muted'>
            Thinking of leaving? Request your account to be deleted click{' '}
            {/* <a href='#' onClick={() => requestDelete()}> */}
            here
            {/* </a> */}.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

// export default ProfileTab;
