import React, { useContext } from 'react';
import Header2 from './components/common/Header2';
import Footer2 from './components/common/Footer2';
// import { AuthContext } from './context/AuthContext';

export const AppShell = ({ children }) => {
  return (
    <div className='d-flex flex-column min-vh-10'>
      <Header2 />
      <div className='wrapper flex-grow-1'>{children}</div>
      <Footer2 />
    </div>
    //   const auth = useContext(AuthContext);
    //   return (
    //     <div className='d-flex flex-column min-vh-10'>
    //       <Header2 auth={auth} />
    //       <div className='wrapper flex-grow-1'>{children}</div>
    //       <Footer2 />
    //     </div>
  );
};

export default AppShell;
