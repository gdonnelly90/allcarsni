import { Router } from 'express';
import { Favourite } from './favourites.model.js';
import { auth } from '../../middleware/auth.js';
import { checkObjectId } from '../../middleware/checkObjectId.js';
import { Vehicle } from '../vehicle/vehicle.model.js';

const router = new Router();

// // @route    POST api/v1/favourites/
// // @desc     POST a favourite advert
// // @access   Private
router.post('/', auth, async (req, res) => {
  try {
    // user is received from the auth function
    console.log('---------REQ BODY FRM ROUTE--------');
    console.log(req.body);
    const { id: userId } = req.user;
    const { vehicleId } = req.body;

    const favourite = await Favourite.findOne({
      vehicleId: vehicleId,
      userId: userId,
    });
    console.log(favourite);
    if (favourite) {
      // do delete
      await favourite.delete();
      return res.status(200);
    } else {
      // create favourite
      const favourite = new Favourite({
        userId: req.user.id,
        vehicleId: vehicleId,
      });

      const response = await favourite.save();

      return res.status(200).json(response);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Favourites Post Server Error');
  }
});

// // @route    DELETE api/v1/favourites/
// // @desc     DELETE a favourite advert
// // @access   Private
// router.delete('/', auth, async (req, res) => {
//   try {
//     // user is received from the auth function
//     // const { userId } = req.user.id;
//     const { vehicleId } = req.body;
//     const { userId } = req.user.id;

//     const activeFavourite = await Favourite.findOne(
//       { vehicleId: vehicleId },
//       userId
//     );
//     if (!activeFavourite) {
//       return res
//         .status(500)
//         .json({ success: false, message: 'No favourite for this user' });
//     }
//     const response = await Favourite.findOneAndDelete({
//       userId: req.user.id,
//       vehicleId,
//     });
//     res.status(201).json({ sucess: true, message: 'Favourite removed' });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Favourites Post Server Error');
//   }
// });

// // @route    GET api/v1/favourites/:vehicleId/
// // @desc     GET a favourite to a seller
// // @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const userFavourites = await Favourite.find({ user: userId });
    res.status(200).json(userFavourites);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Favourites Get Server Error');
  }
});

export default router;

// router.post('/', auth, async (req, res) => {
//   try {
//     const { id } = req.user;
//     const { vehicleId } = req.body;

//     const vehicle = await Vehicle.findOne({ id: vehicleId });

//     const favourite = new Favourite({
//       user: id,
//       // vehicle: vehicle,
//     });
//     const response = await favourite.save();
//     res.status(200).json(response);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Favourites Server Error');
//   }
// });
