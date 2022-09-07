import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { useAppState } from '../context/appContext';
import { fetchVehicleByRegistration } from '../services/vehicle.service';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  position: 'relative',
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: '20%',
  height: 125,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  width: '100%',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: '100%',
  height: '100%',
};

export const VehicleForm = ({ formik }) => {
  const state = useAppState();

  const [carLoading, setCarLoading] = useState(false);
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpg, image/png, image/jpeg',
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          fileId: uuidv4(),
        }),
      );
      console.log('NEW FILES');
      console.log(newFiles);
      // set state and keep old files
      setFiles((arr) => [...arr, ...newFiles]);
    },
  });

  const fetchVehicleDetails = async () => {
    if (formik.values.registrationNumber) {
      setCarLoading(true);
      const response = await fetchVehicleByRegistration(formik.values.registrationNumber);
      // extract the keys from object [make, model, year]
      const vehicleKeys = Object.keys(response);
      // set each field in the form based on key - matched to backend
      for (let key of vehicleKeys) {
        formik.setFieldValue(key, response[key]);
      }
      setCarLoading(false);
    } else {
      toast.error('Please enter a valid vehicle registration');
    }
  };

  const removeFile = (selectedFile) => {
    // filter out the file the user wants to remove
    const newFileList = [...files].filter((file) => file.fileId !== selectedFile.fileId);
    console.log(newFileList);
    // spread in the new file list
    setFiles([...newFileList]);
  };

  const thumbs = files.map((file, index) => (
    <div className='col-xs-12 col-sm-6 col-md-3 position-relative' key={file.name}>
      <div className='mb-1 me-1'>
        <img src={file.preview} style={img} alt='' />
      </div>

      <div className='preview-delete'>
        <FontAwesomeIcon icon={faXmark} className='mr-4' onClick={() => removeFile(file)} />
      </div>
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.setFieldValue('images', files);
    formik.handleSubmit();
  };

  // clean up for files
  useEffect(() => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className='container'>
      <div className='py-5 text-center'>
        <h2>List a vehicle</h2>
        <p className='lead'>
          Insert your car's registration and let our car engine accurately populate key information
          for you.
        </p>
      </div>
      <Row className='g-5'>
        <div className='col-md-5 col-lg-4 order-md-last'>
          {formik.values.make && (
            <>
              <h4>Key Vehicle Information</h4>
              <ul className='list-group mb-3'>
                <li className='list-group-item d-flex justify-content-between lh-sm'>
                  <div>
                    <h6 className='my-0'>Make</h6>
                    <small className='text-muted'>{formik.values.make}</small>
                  </div>
                </li>
                <li className='list-group-item d-flex justify-content-between lh-sm bg-light'>
                  <div>
                    <h6 className='my-0'>Model</h6>
                    <small className='text-muted'>{formik.values.model}</small>
                  </div>
                </li>
                <li className='list-group-item d-flex justify-content-between lh-sm'>
                  <div>
                    <h6 className='my-0'>Year</h6>
                    <small className='text-muted'>{formik.values.year}</small>
                  </div>
                  <span className='text-muted'>*</span>
                </li>
                <li className='list-group-item d-flex justify-content-between bg-light'>
                  <div>
                    <h6 className='my-0'>Colour</h6>
                    <small>{formik.values.colour}</small>
                  </div>
                </li>
                <li className='list-group-item d-flex justify-content-between lh-sm'>
                  <div>
                    <h6 className='my-0'>Body Type</h6>
                    <small className='text-muted'>{formik.values.bodyType}</small>
                  </div>
                </li>
              </ul>
            </>
          )}
          <div className='p-2 my-2 d-flex flex-flow-row justify-content-start align-items-center'>
            <div className='me-1'>Total vehicles remaining</div>{' '}
            <div className='badge bg-success rounded-pill'>3</div>
          </div>
        </div>
        <div className='col-md-7 col-lg-8'>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <h4 className='mb-4'>Vehicle Registration</h4>
              <Col sm={12} md={12} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Registration Number
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <Form.Control
                    id='registrationNumber'
                    name='registrationNumber'
                    type='text'
                    value={formik.values.registrationNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.registrationNumber && !formik.errors.registrationNumber}
                    isInvalid={
                      formik.touched.registrationNumber && formik.errors.registrationNumber
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={12} lg={4} className='align-self-center h-100 mt-3'>
                <Button variant='warning' type='button' onClick={() => fetchVehicleDetails()}>
                  {carLoading ? (
                    <div className='d-flex flex-flow-row justify-content-center align-items-center'>
                      <FontAwesomeIcon icon={faCircleNotch} spin />
                      <div className='mr-2'>Loading...</div>
                    </div>
                  ) : (
                    <div>Search vehicle details</div>
                  )}
                </Button>
              </Col>
            </Row>
            <hr className='my-4' />
            <Row>
              <h4>Vehicle Critical information</h4>
              <Col sm={12} md={12} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Price
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='price'
                      name='price'
                      type='number'
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.price && !formik.errors.price}
                      isInvalid={formik.touched.price && formik.errors.price}
                    />
                  </div>
                  <small id='engineSizeNote' className='form-text text-muted'>
                    Cost of vehicle in whole ie 25000 (£).
                  </small>
                </Form.Group>
              </Col>
              <Col sm={12} md={12} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Mileage
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='mileage'
                      name='mileage'
                      type='number'
                      value={formik.values.mileage}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.mileage && !formik.errors.mileage}
                      isInvalid={formik.touched.mileage && formik.errors.mileage}
                    />
                  </div>
                  <small id='engineSizeNote' className='form-text text-muted'>
                    Miles as 67000.
                  </small>
                </Form.Group>
              </Col>
              <Col sm={12} md={12} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Status
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Select
                      className='form-control'
                      aria-label='Default select example'
                      id='status'
                      name='status'
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      isValid={formik.touched.status && !formik.errors.status}
                      isInvalid={formik.touched.status && formik.errors.status}>
                      <option>Vehicle status</option>
                      <option selected={'FOR SALE' === formik.values.status} value='FOR SALE'>
                        For Sale
                      </option>
                      <option selected={'SOLD' === formik.values.status} value='SOLD'>
                        Sold
                      </option>
                      <option
                        selected={'DEPOSIT TAKEN' === formik.values.status}
                        value='DEPOSIT TAKEN'>
                        Deposit Taken
                      </option>
                    </Form.Select>
                  </div>
                  <small id='engineSizeNote' className='form-text text-muted'>
                    For sale, sold or deposit taken.
                  </small>
                </Form.Group>
              </Col>
              <Col sm={12}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Listing Title
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='title'
                      name='title'
                      type='text'
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.title && !formik.errors.title}
                      isInvalid={formik.touched.title && formik.errors.title}
                    />
                  </div>
                  <small id='titleNote' className='form-text text-muted'>
                    The vehicle listing title - recommend Make, Model and something unique.
                  </small>
                </Form.Group>
              </Col>
              <Col sm={12}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Description
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      as='textarea'
                      rows={5}
                      name='description'
                      className='form-control'
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.description && !formik.errors.description}
                      isInvalid={formik.touched.description && formik.errors.description}
                    />
                  </div>
                  <small id='titleNote' className='form-text text-muted'>
                    Key details regarding the vehicle.
                  </small>
                </Form.Group>
              </Col>
              <Col sm={12}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Specification
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      as='textarea'
                      rows={5}
                      name='specification'
                      className='form-control'
                      value={formik.values.specification}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.specification && !formik.errors.specification}
                      isInvalid={formik.touched.specification && formik.errors.specification}
                    />
                  </div>
                  <small id='titleNote' className='form-text text-muted'>
                    Key specification detail regarding the vehicle.
                  </small>
                </Form.Group>
              </Col>
              <Col sm={12}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Features
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      as='textarea'
                      rows={5}
                      name='features'
                      className='form-control'
                      value={formik.values.features}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.features && !formik.errors.features}
                      isInvalid={formik.touched.features && formik.errors.features}
                    />
                  </div>
                  <small id='titleNote' className='form-text text-muted'>
                    Key features detail regarding the vehicle.
                  </small>
                </Form.Group>
              </Col>
            </Row>
            <hr className='my-4' />
            <Row>
              <h4>Vehicle Photos</h4>
              <Col sm={12} md={12}>
                <Form.Group className='mb-3'>
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p className='m-0'>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                  {files.length > 0 && (
                    <aside style={thumbsContainer}>
                      <h4 className='col-md-12'>Preview</h4>
                      {thumbs}
                    </aside>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <hr className='my-4' />
            <Row>
              <h4 className='mb-4'>Vehicle Primary information</h4>
              <Col md={12} lg={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Make
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='make'
                      name='make'
                      type='text'
                      value={formik.values.make}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.make && !formik.errors.make}
                      isInvalid={formik.touched.make && formik.errors.make}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col md={12} lg={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Model
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='model'
                      name='model'
                      type='text'
                      value={formik.values.model}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.model && !formik.errors.model}
                      isInvalid={formik.touched.model && formik.errors.model}
                      placeholder=''
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Model variant
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='variant'
                      name='variant'
                      type='text'
                      value={formik.values.variant}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.variant && !formik.errors.variant}
                      isInvalid={formik.touched.variant && formik.errors.variant}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Model variation spec
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='modelVariant'
                      name='modelVariant'
                      type='text'
                      value={formik.values.modelVariant}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.modelVariant && !formik.errors.modelVariant}
                      isInvalid={formik.touched.modelVariant && formik.errors.modelVariant}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group className='mb-3'>
                <Form.Label>
                  Body style
                  <span className='error-text'>*</span>
                </Form.Label>
                <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                  <Form.Control
                    id='bodyType'
                    name='bodyType'
                    type='text'
                    value={formik.values.bodyType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.bodyType && !formik.errors.bodyType}
                    isInvalid={formik.touched.bodyType && formik.errors.bodyType}
                    className='input-xs'
                  />
                </div>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className='mb-3'>
                <Form.Label>
                  Year
                  <span className='error-text'>*</span>
                </Form.Label>
                <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                  <Form.Control
                    id='year'
                    name='year'
                    type='number'
                    value={formik.values.year}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.year && !formik.errors.year}
                    isInvalid={formik.touched.year && formik.errors.year}
                    className='input-xs'
                  />
                </div>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className='mb-3'>
                <Form.Label>
                  Colour
                  <span className='error-text'>*</span>
                </Form.Label>
                <div className='d-flex flex-sm-column flex-md-row justify-content-md-between w-50'>
                  <Form.Control
                    id='colour'
                    name='colour'
                    type='text'
                    value={formik.values.colour}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.colour && !formik.errors.colour}
                    isInvalid={formik.touched.colour && formik.errors.colour}
                    className='input-xs'
                  />
                </div>
              </Form.Group>
            </Row>
            <hr className='my-4' />
            <Row>
              <h4>Vehicle Performance</h4>
              <Col sm={12} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Engine Power
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='enginePower'
                      name='enginePower'
                      type='number'
                      value={formik.values.enginePower}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.enginePower && !formik.errors.enginePower}
                      isInvalid={formik.touched.enginePower && formik.errors.enginePower}
                    />
                  </div>
                  <small id='engineSizeNote' className='form-text text-muted'>
                    Engine power measured in (Bhp).
                  </small>
                </Form.Group>
              </Col>
              <Col m={12} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Engine Size
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='engineSize'
                      name='engineSize'
                      type='number'
                      value={formik.values.engineSize}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.engineSize && !formik.errors.engineSize}
                      isInvalid={formik.touched.engineSize && formik.errors.engineSize}
                    />
                  </div>
                  <small id='engineSizeNote' className='form-text text-muted'>
                    Engine size measured in (ltr).
                  </small>
                </Form.Group>
              </Col>
              <Col sm={12} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Zero to Sixty
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='zeroToSixtyTime'
                      name='zeroToSixtyTime'
                      type='number'
                      value={formik.values.zeroToSixtyTime}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.zeroToSixtyTime && !formik.errors.zeroToSixtyTime}
                      isInvalid={formik.touched.zeroToSixtyTime && formik.errors.zeroToSixtyTime}
                    />
                  </div>
                  <small id='zeorToSixtyNote' className='form-text text-muted'>
                    0-60 time measured in (s).
                  </small>
                </Form.Group>
              </Col>
              <Form.Group className='mb-3'>
                <Form.Label>
                  Aspiration
                  <span className='error-text'>*</span>
                </Form.Label>
                <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                  <Form.Control
                    id='aspiration'
                    name='aspiration'
                    type='text'
                    value={formik.values.aspiration}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.aspiration && !formik.errors.aspiration}
                    isInvalid={formik.touched.aspiration && formik.errors.aspiration}
                    className='input-xs'
                  />
                </div>
              </Form.Group>
            </Row>
            <hr className='my-4' />
            <Row>
              <h4>Vehicle Transmission</h4>
              <Col sm={12} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Gearbox
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='transmission'
                      name='transmission'
                      type='text'
                      value={formik.values.transmission}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.transmission && !formik.errors.transmission}
                      isInvalid={formik.touched.transmission && formik.errors.transmission}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col sm={12} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Number of gears
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='gears'
                      name='gears'
                      type='text'
                      value={formik.values.gears}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.gears && !formik.errors.gears}
                      isInvalid={formik.touched.gears && formik.errors.gears}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col sm={12} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Drive Train
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='driveTrain'
                      name='driveTrain'
                      type='text'
                      value={formik.values.driveTrain}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.driveTrain && !formik.errors.driveTrain}
                      isInvalid={formik.touched.driveTrain && formik.errors.driveTrain}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <hr className='my-4' />
            <Row>
              <h4>Vehicle Economy</h4>
              <Col sm={12} md={6} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Fuel Consumption
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='fuelConsumption'
                      name='fuelConsumption'
                      type='text'
                      value={formik.values.fuelConsumption}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.fuelConsumption && !formik.errors.fuelConsumption}
                      isInvalid={formik.touched.fuelConsumption && formik.errors.fuelConsumption}
                    />
                  </div>
                  <small id='economy' className='form-text text-muted'>
                    Combined (MPG).
                  </small>
                </Form.Group>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    Fuel Type
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='fuelType'
                      name='fuelType'
                      type='text'
                      value={formik.values.fuelType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.fuelType && !formik.errors.fuelType}
                      isInvalid={formik.touched.fuelType && formik.errors.fuelType}
                    />
                  </div>
                  <small id='economy' className='form-text text-muted'>
                    Fuel source.
                  </small>
                </Form.Group>
              </Col>
            </Row>
            <hr className='my-4' />
            <Row>
              <h4>Vehicle Accessibility</h4>
              <Col sm={12} md={6} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    No of doors
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='numberOfDoors'
                      name='numberOfDoors'
                      type='text'
                      value={formik.values.numberOfDoors}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.numberOfDoors && !formik.errors.numberOfDoors}
                      isInvalid={formik.touched.numberOfDoors && formik.errors.numberOfDoors}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Form.Group className='mb-3'>
                  <Form.Label>
                    No of seats
                    <span className='error-text'>*</span>
                  </Form.Label>
                  <div className='d-flex flex-sm-column flex-md-row justify-content-md-between'>
                    <Form.Control
                      id='numberOfSeats'
                      name='numberOfSeats'
                      type='text'
                      value={formik.values.numberOfSeats}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.numberOfSeats && !formik.errors.numberOfSeats}
                      isInvalid={formik.touched.numberOfSeats && formik.errors.numberOfSeats}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <div className='my-4' />
            <Row>
              <Col>
                <Button
                  variant='primary'
                  type='submit'
                  className='button-small w-100'
                  disabled={!formik.isValid || carLoading}>
                  Sumbit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Row>
    </section>
  );
};
