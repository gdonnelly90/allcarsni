import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { postMessage } from '../../services/message.service';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useAppState, useAppDispatch } from '../../context/appContext';
import { SuccessBanner } from '../common/SuccessBanner';
import { ErrorBanner } from '..//common/ErrorBanner';

export const ContactSeller2 = ({ vehicle }) => {
  // const { vehicle } = props;
  // console.log(vehicle._id);
  const { id } = useParams();
  const { user } = useAppState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const MessageSchema = Yup.object({
    firstName: Yup.string().required('Your first name is required'),
    lastName: Yup.string().required('Your surname is required'),
    mobile: Yup.string().required('Your mobilenumber is required'),
    messageBody: Yup.string().required('Please enter a brief message to seller'),
  });

  const formik = useFormik({
    validationSchema: MessageSchema,
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      mobile: user.mobile,
      messageBody: '',
    },
    onSubmit: async (values) => {
      // conso/l/ e.log(values)
      try {
        await postMessage(id, values);
        setSuccess(true);
        toast.success('Messsage Sent');
        setTimeout(() => {
          setSuccess(false);
        }, 700);
        formik.resetForm();
      } catch (error) {
        setError(true);
        console.log(error);
      }
    },
  });

  return (
    <div>
      {success && <SuccessBanner text={'Message Sent...'} />}
      {error && <ErrorBanner text={'Error Sending Message'} />}
      <div className='contact-seller'>
        <h1>Message Seller</h1>
        <Form onSubmit={formik.handleSubmit}>
          <div className='form-line1 pb-2'>
            <Form.Group className='firstName'>
              <Form.Label htmlFor='lastName'>First Name</Form.Label>
              <Form.Control
                id='firstName'
                name='firstName'
                type='text'
                placeholder='Enter your First Name'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                isInvalid={formik.touched.firstName && formik.errors.pafirstNamessword}
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className='form-line2 pb-2'>
            <Form.Group className='lastName'>
              <Form.Label htmlFor='lastName'>Surname</Form.Label>
              <Form.Control
                id='lastName'
                name='lastName'
                type='text'
                placeholder='Enter your Surname'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                isInvalid={formik.touched.lastName && formik.errors.lastName}
              />
              <Form.Control.Feedback type='invalid'>{formik.errors.lastName}</Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className='form-line3 pb-2'>
            <Form.Group className='mobile'>
              <Form.Label htmlFor='mobile'>Mobile Number</Form.Label>
              <Form.Control
                id='mobile'
                name='mobile'
                type='text'
                placeholder='Mobile Number'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.mobile}
                isInvalid={formik.touched.mobile && formik.errors.mobile}
              />
              <Form.Control.Feedback type='invalid'>{formik.errors.mobile}</Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className='form-line4 pb-2'>
            <Form.Group className='messageBody'>
              <Form.Label htmlFor='messageBody'>Message</Form.Label>
              <Form.Control
                id='messageBody'
                name='messageBody'
                as='textarea'
                rows={3}
                placeholder='Please enter a brief message to the seller'
                value={formik.values.messageBody}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                isInvalid={formik.touched.messageBody && formik.errors.messageBody}
              />
              <Form.Control.Feedback type='invalid'>
                {formik.errors.messageBody}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className='form-line5 pb-2'>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

// this works for normal way
// const [formData, setFormData] = useState({
//   firstName: user.firstName,
//   lastName: user.lastName,
//   mobile: user.mobile,
//   messageBody: '',
// });

// const { firstName, lastName, mobile, messageBody } = formData;

// const sendEmail = (event) => {
//   event.preventDefault();
//   try {
//     console.log(formData);
//     postMessage(id, formData);
//     toast.success('Messsage Sent');
//     setFormData((prevState) => ({ ...prevState, messageBody: '' }));
//   } catch (error) {
//     toast.error(error.message);
//   }
// };

// const onInputChange = (event) => {
//   const { name, value } = event.target;
//   console.log(name, value);
//   setFormData((prevState) => ({ ...prevState, [`${name}`]: value }));
// };

// return (
//   <div className='contact-seller'>
//     <h1>Message Seller</h1>
//     <Form onSubmit={sendEmail}>
//       <div className='form-line1 pb-2'>
//         <Form.Group className='firstName'>
//           <Form.Label htmlFor='lastName'>First Name</Form.Label>
//           <Form.Control
//             id='firstName'
//             name='firstName'
//             type='text'
//             placeholder='Enter your First Name'
//             value={formData.firstName}
//             onChange={onInputChange}
//           />
//         </Form.Group>
//       </div>

//       <div className='form-line2 pb-2'>
//         <Form.Group className='lastName'>
//           <Form.Label htmlFor='lastName'>Surname</Form.Label>
//           <Form.Control
//             id='lastName'
//             name='lastName'
//             type='text'
//             placeholder='Enter your Surname'
//             value={formData.lastName}
//             onChange={onInputChange}
//           />
//         </Form.Group>
//       </div>

//       <div className='form-line3 pb-2'>
//         <Form.Group className='mobile'>
//           <Form.Label htmlFor='mobile'>Mobile Number</Form.Label>
//           <Form.Control
//             id='mobile'
//             name='mobile'
//             type='text'
//             placeholder='Mobile Number'
//             value={formData.mobile}
//             onChange={onInputChange}
//           />
//         </Form.Group>
//       </div>

//       <div className='form-line4 pb-2'>
//         <Form.Group className='messageBody'>
//           <Form.Label htmlFor='messageBody'>Message</Form.Label>
//           <Form.Control
//             id='messageBody'
//             name='messageBody'
//             type='text'
//             placeholder='Please enter a brief message to the seller'
//             onChange={onInputChange}
//           />
//         </Form.Group>
//       </div>
//       <div className='form-line5 pb-2'>
//         {/* <Button variant='primary' type='submit'>
//             Submit
//           </Button> */}
//         <Button variant='primary' type='submit'>
//           {loading ? (
//             <span className='d-flex align-items-center'>
//               <FontAwesomeIcon icon={faCircleNotch} spin />
//               <span className='ml-2'>Loading...</span>
//             </span>
//           ) : (
//             <span>Send Message</span>
//           )}
//         </Button>
//       </div>
//     </Form>
//   </div>
