import React from 'react';
import { Table } from 'react-bootstrap';
import { FaCarSide } from 'react-icons/fa';

export const MessagesTab = ({ messages }) => {
  return (
    <Table striped bordered hover className='my-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile Number</th>
          <th>Message Body</th>
          <th>Vehicle ID Link</th>
        </tr>
      </thead>
      <tbody>
        {messages &&
          messages.map((message, index) => (
            <tr key={index}>
              <td>{++index}</td>
              <td>{message.firstName}</td>
              <td>{message.lastName}</td>
              <td>{message.mobile}</td>
              <td>{message.messageBody}</td>
              <td
                className='td-link'
                onClick={() =>
                  window.open(`http://localhost:3000/vehicle/${message.vehicleId}`, 'blank')
                }>
                <FaCarSide size='26px' /> Click for Vehicle
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

// const MessageSchema = Yup.object().shape({
//   firstName: Yup.string(),
//   lastName: Yup.string(),
//   messageBody: Yup.string(),
//   mobile: Yup.string(),
// });

// export const MessagesTab = ({ messages }) => {
//   return (
//     <Formik
//       initialValues={{
//         firstName: messages.firstName ?? '',
//         lastName: messages.lastName ?? '',
//         messageBody: messages.email ?? '',
//         mobile: messages.mobile ?? '',
//       }}
//       validationSchema={MessageSchema}>
//       {(formik) => (
//         <Table striped bordered hover className='my-5'>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Mobile Number</th>
//               <th>Message Body</th>
//             </tr>
//           </thead>
//           <tbody>
//             {messages &&
//               messages.map((message, index) => (
//                 <tr key={index}>
//                   <td>{++index}</td>
//                   <td>{message.firstName}</td>
//                   <td>{message.lastName}</td>
//                   <td>{message.mobile}</td>
//                   <td>{message.messageBody}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </Table>
//       )}
//     </Formik>
//   );
// };

// import React from 'react';
// import { Table, Button <div>} from 'react-bootstrap';
// import { ImPencil, ImBin } from 'react-icons/im';

// export const MessagesTab = ({ messages }) => {
//   console.log('----MESSAGE COMP--------');
//   console.log(messages);

//   return (
//     <Table striped bordered hover className='my-5'>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Mobile Number</th>
//           <th>Message Body</th>
//         </tr>
//       </thead>
//       <tbody>
//         {messages &&
//           messages.map((message, index) => (
//             <tr key={index}>
//               <td>{++index}</td>
//               <td>{message.firstName}</td>
//               <td>{message.lastName}</td>
//               <td>{message.mobile}</td>
//               <td>{message.messageBody}</td>
//             </tr>
//           ))}
//       </tbody>
//     </Table>
//   );
// };

// <td>
// <button className='btn btn-tertiary me-2'>
//   {/* <button className='btn btn-tertiary me-2' onClick={() => onEditUser(user)}> */}
//   <ImPencil />
// </button>
// <Button variant='outline-danger'>
//   {/* <Button variant='outline-danger' onClick={() => onDeleteUser(user)}> */}
//   <ImBin />
// </Button>
// </td>
