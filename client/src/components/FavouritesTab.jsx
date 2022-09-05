import React from 'react';
import { Container } from 'react-bootstrap';
import CarCard from '../components/car/CarCard';

export const FavouritesTab = ({ favouriteVehicles }) => {
  console.log('FTAB VEHICLES DATA');
  console.log(favouriteVehicles);

  return (
    <div>
      <Container className='stock-listing-page'>
        {favouriteVehicles &&
          favouriteVehicles.map((vehicle, i) => (
            // <Col sm={12} md={6} lg={4}>
            <CarCard key={i} vehicle={vehicle} />
            // </Col>
          ))}
      </Container>
    </div>
  );
};

// <div className='bg-light py-5 min-vh-100'>
//   <Container>
//     <div className='row'>
//       {vehicles &&
//         vehicles.map((vehicle) => {
//           if (vehicle.favourite) {
//             return <CarCard vehicle={vehicle} />;
//           }
//         })}
//     </div>
//   </Container>
// </div>

// const fetchFavourites = async () => {
//   try {
//     getFavourites();
//     // getFavourites(_id);
//   } catch (error) {
//     toast.error(error.message);
//   }
// };

// return (
//   <div>
//     <div>Favourites</div>
//   </div>
// );
// };
