import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import 'yup-phone';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const SideFilter = () => {
  const [toggle, setToggle] = useState(false);

  const filterToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <MDBContainer className={toggle ? 'filters-active' : ''}>
      <div className='search-filter-cont'>Filters</div>
      <Button id='close'>&times; close</Button>
    </MDBContainer>
  );
};

export default SideFilter;
