import React from 'react';
import { NavBar } from './components/common/NavBar';
import { Footer } from './components/common/Footer';

export const AppShell = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};
