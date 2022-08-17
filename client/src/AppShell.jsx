import React from 'react';
import { NavBar } from './components/common/NavBar';
import { Footer } from './components/common/Footer';
import Header2 from './components/common/Header2';

export const AppShell = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
      <div
        className='endpage'
        style={{ height: '55px', width: '100%', backgroundColor: '#c53030' }}
        md='12'
      ></div>
    </>
  );
};
