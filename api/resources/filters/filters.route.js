import { Router } from 'express';
import { Vehicle } from '../vehicle/vehicle.model.js';

const router = Router();

// @route    GET api/v1/vehicles/makes
// @desc     Get vehicle make
// @access   Public
router.get('/vehicle/makes', async (req, res) => {
  try {
    const vehicles = await Vehicle.find().distinct('make');
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json(error);
  }
});

// @route    GET api/v1/vehicles/makes
// @desc     Get vehicle make
// @access   Public
router.get('/vehicle/:make/models', async (req, res) => {
  try {
    // create a variable from req.params to get the make from the url
    const { make } = req.params;

    // write a find query to filter our data by the {make: make} and distinct the models field
    const models = await Vehicle.find({ make: make }).distinct('model');
    res.status(200).json(models);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
