import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactSeller = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const sendEmail = (event) => {
    event.preventDefault();

    console.log('We will fill this up shortly.');
    // code to trigger Sending email
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className='contact-seller'>
      <h1>Message Seller</h1>
      <form onSubmit={sendEmail}>
        <div className='form-line1 pb-2'>
          <Form.Group controlId='name'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={state.name}
              placeholder='Enter your full name'
              onChange={onInputChange}
            />
          </Form.Group>
        </div>
        <div className='form-line2 pb-2'>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='text'
              name='email'
              value={state.email}
              placeholder='Enter your email'
              onChange={onInputChange}
            />
          </Form.Group>
        </div>
        <div className='form-line3 pb-2'>
          <Form.Group controlId='subject'>
            <Form.Label>Contact number</Form.Label>
            <Form.Control
              type='text'
              name='subject'
              value={state.subject}
              placeholder='Enter your conatct number'
              onChange={onInputChange}
            />
          </Form.Group>
        </div>
        <div className='form-line4 pb-2'>
          <Form.Group controlId='subject'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              type='text'
              name='subject'
              value={state.subject}
              placeholder='Enter your message'
              onChange={onInputChange}
            />
          </Form.Group>
        </div>
        <div className='form-line5 pb-2'>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactSeller;
