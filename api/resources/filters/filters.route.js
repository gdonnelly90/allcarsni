import { Router } from 'express';
import { isEmpty } from 'lodash-es';
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

// @route    GET api/v1/vehicles/colours
// @desc     Get vehicle make
// @access   Public
router.get('/vehicle/colours', async (req, res) => {
  try {
    // create a variable from req.params to get the make from the url
    // const { make, models } = req.params;
    let vehicles = [];
    let query = {};
    const { make = '', model = '' } = req.query;

    if (!isEmpty(make)) {
      query = { make: make };
    }

    if (!isEmpty(model)) {
      query = { ...query, model: model };
    }

    // build up our query using aggregate
    // vehicles = await Vehicle.aggregate([
    //   { $match: query },
    //   {
    //     $group: {
    //       _id: null,
    //       colour: { $addToSet: '$colour' },
    //     },
    //   },
    //   {
    //     $unwind: '$colour',
    //   },
    //   {
    //     $project: {
    //       _id: false,
    //       colour: true,
    //     },
    //   },
    // ]);

    // return new array with the colour string
    // vehicles = [...vehicles].map((v) => v.colour);

    // mongoose ORM
    vehicles = await Vehicle.find(query).select('colour').distinct('colour');

    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
