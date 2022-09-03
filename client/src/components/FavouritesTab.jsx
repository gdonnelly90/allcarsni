import React from 'react';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import CarCard from '../components/car/CarCard';
import { getFavourites } from '../services/favourite.service';

export const FavouritesTab = ({ vehicles, user }) => {
  const fetchFavourites = async () => {
    try {
      getFavourites();
      // getFavourites(_id);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div>Favourites</div>
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
