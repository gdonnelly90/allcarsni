import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { PersonalDetails } from './account/PersonalDetails';
import { useAppState, useAppDispatch } from '../context/appContext/context';

export const ProfileTab = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppState();
  const navigate = useNavigate();

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
                {user.firstName} {user.lastName}
              </Card.Title>
              {/* <Card.Subtitle className='mb-2 text-muted text-center'>email</Card.Subtitle> */}
              <Card.Subtitle className='mb-2 text-muted text-center'>{user.email}</Card.Subtitle>
              <Card.Subtitle className='mb-2 text-muted text-center'>{user.mobile}</Card.Subtitle>
              <Container className='mt-3 d-flex justify-content-center text-center'>
                <Col>
                  {/* <div className='count fw-bold'>{user.populate(subscriptionTypes)}</div> */}
                  <div className='count fw-bold'>25</div>
                  <div className='meta-profile-title'>Allowance</div>
                </Col>
                <Col>
                  <div className='count fw-bold'>1</div>
                  <div className='meta-profile-title'>Spaces</div>
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
          <h1>Profile Details</h1>
          <p className='text-muted'>
            Use the form below to update your details. This will provide the best expereince
            possible.
          </p>
          <PersonalDetails />
          <p className='mt-3 text-muted'>
            Thinking of leaving? Click here to request your account deletion{' '}
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
