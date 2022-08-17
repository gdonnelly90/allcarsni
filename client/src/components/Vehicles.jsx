import React from 'react';
import { Loading } from './Loading';
import { Container } from 'react-bootstrap';
import CarCard from '../components/car/CarCard';

export const Vehicles = ({ vehicles, loading }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='bg-light py-5 min-vh-100'>
          <Container>
            <div className='row'>
              {vehicles &&
                vehicles.map((vehicle, i) => {
                  return <CarCard key={i} vehicle={vehicle} />;
                })}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};
