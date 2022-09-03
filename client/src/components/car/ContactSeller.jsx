import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { postMessage } from '../../services/message.service';
import { toast } from 'react-toastify';
import { useAppState } from '../../context/appContext/context';

export const ContactSeller = () => {
  const { user } = useAppState();
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    messageBody: '',
  });

  const sendEmail = (event) => {
    console.log('---EVENT---');
    console.log(event);
    event.preventDefault();
    window.scrollTo(0, 0);
    postMessage(event);
    toast.success('Messsage Sent');
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
          <Form.Group controlId='firstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              name='firstName'
              value={user.firstName}
              placeholder='Enter your First Name'
              onChange={onInputChange}
            />
          </Form.Group>
        </div>
        <div className='form-line2 pb-2'>
          <Form.Group controlId='lastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              name='lastName'
              value={user.lastName}
              placeholder='Enter your Surname'
              onChange={onInputChange}
            />
          </Form.Group>
        </div>
        <div className='form-line3 pb-2'>
          <Form.Group controlId='mobile'>
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type='text'
              name='mobile'
              value={user.mobile}
              placeholder='Enter your Mobile Number'
              onChange={onInputChange}
            />
          </Form.Group>
        </div>
        <div className='form-line4 pb-2'>
          <Form.Group controlId='messageBody'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              type='text'
              name='messageBody'
              value={state.messageBody}
              placeholder='Enter a brief message'
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
