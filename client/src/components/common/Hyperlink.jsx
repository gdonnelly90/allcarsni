import React from 'react';
import { Link } from 'react-router-dom';

export const Hyperlink = ({ text, to }) => {
  return (
    <Link to={to} className='link-primary text-decoration-none'>
      {text}
    </Link>
  );
};
