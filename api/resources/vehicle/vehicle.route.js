import { Router } from 'express';
import { Vehicle } from './vehicle.model.js';
import { auth } from '../../middleware/auth.js';
import { check } from 'express-validator';
import { isEmpty } from 'lodash-es';
import multer from 'multer';
import fs from 'fs';
import { checkObjectId } from '../../middleware/checkObjectId.js';
import vehicleRespository from './vehicle.respository.js';
import mongoose from 'mongoose';

const router = Router();

const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

// @route    GET api/v1/vehicles
// @desc     GET all vehicles
// @access   Public
router.get('/status', async (req, res) => {
  try {
    const count = await Vehicle.countDocuments({ status: 'FOR SALE' });
    res.status(200).json(count);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Vehcs Count Server Error');
  }
});

// @route    GET api/v1/vehicles
// @desc     GET 10 random vehicles
// @access   Public
router.get('/random', async (req, res) => {
  try {
    const randomVehicles = await Vehicle.aggregate([{ $sample: { size: 10 } }]);
    res.status(200).json(randomVehicles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Vehcs Random Server Error');
  }
});

// @route    GET api/v1/vehicles
// @desc     GET all vehicles
// @access   Public
router.get('/', async (req, res) => {
  try {
    // getting query params form URL, adding pagination and executing query
    // which searches for matching cars
    const pageSize = 9;
    const page = Number(req.query.page) || 1;

    let query;
    const queryObject = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObject[el]);

    // using filter params to assign a '$' code to the math functions
    // then replacing it in the queryString
    let queryString = JSON.stringify(queryObject);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );

    const count = await Vehicle.countDocuments(JSON.parse(queryString));
    const vehicles = await Vehicle.find(JSON.parse(queryString))
      // const vehicles = await Vehicle.find(req.query)
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort('price');

    if (!vehicles) {
      return res.status(200).json({ success: true, data: [] });
    }

    res.status(200).json({
      vehicles,
      page,
      totalPages: Math.ceil(count / pageSize),
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Get All Vehicles Server Error');
  }
});

// @route    GET api/v1/vehicles/customer
// @desc     GET all vehicles for customer
// @access   Private
router.get('/customer', auth, async (req, res) => {
  try {
    // current customer who is logged in
    const { id } = req.user;
    // default pagesize
    const pageSize = 5;
    // page number
    const page = Number(req.query.page) || 1;
    // query to get vehicles for customer
    const vehicles = await Vehicle.find({ user: id })
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    // count total amount of records
    const totalDocuments = await Vehicle.find({ user: id }).count();

    if (!vehicles) {
      return res.status(200).json('No Vehicles listed');
    }
    return res.status(200).json({
      vehicles,
      page,
      totalPages: Math.ceil(totalDocuments / pageSize),
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

// // @route    GET api/v1/vehicles/favourites/:id
// // @desc     GET a users favourite cars by user id
// // @access   Private
router.get('/favourites/:id', auth, async (req, res) => {
  try {
    const { id } = req.user;

    // const vehicle = await Vehicle.findById(req.params.id);
    const favourites = await Vehicle.aggregate([
      { $match: { 'favourites.user': new mongoose.Types.ObjectId(id) } },
      { $unwind: '$favourites' },
    ]);
    return res.json(favourites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Favs From Id Server error');
  }
});

// @route    GET api/v1/vehicles/:id
// @desc     GET Vehicle by id
// @access   Public
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (isEmpty(id)) {
      return res
        .status(404)
        .json({ success: false, message: 'Vehicle does not exist' });
    }

    // joining the user documents to the vehicle by id query (populated)
    // so theyre available to us
    const vehicle = await Vehicle.findById(id)
      .populate('user', ['email'])
      .lean()
      .exec();

    if (!vehicle) {
      return res
        .status(400)
        .json({ success: false, message: 'No vehicle found' });
    }

    res.status(200).json(vehicle);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Vehcs By Id Server Error');
  }
});

// @route    GET api/vehicles/:keyword
// @desc     Get vehicle by ID or User ID
// @access   Public
router.get('/:keyword', async (req, res) => {
  try {
    const vehicles = await Vehicle.find({
      $or: [{ _id: req.params.keyword }, { user: req.params.keyword }],
    });

    if (!vehicles) {
      return res
        .status(400)
        .json({ success: false, message: 'Vehicle not found' });
    }
    res.status(200).json({ success: true, data: vehicles });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Vehc Keyword Server Error');
  }
});

// @route   GET api/v1/vehicles/registration/:id
// @desc    GET vehicle by registration number
// @access  Private
router.get('/registration/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;

    if (isEmpty(id)) return res.status(500).send('Invalid registration number');

    const ukVehicleData = await vehicleRespository.fetchUkVehicleData(id);

    return res.status(200).json(ukVehicleData);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Vehc Reg Server Error');
  }
});

// @route    PUT api/vehicles/favourite
// @desc     PUT vehicle favourite
// @access   Public but with Auth user component
router.put('/favourites/:id', auth, async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    // console.log('req.params.id');
    // console.log(req.params.id);

    if (
      vehicle.favourites.filter(
        (favourite) => favourite.user.toString() === req.user.id
      ).length > 0
    ) {
      const removeIndex = vehicle.favourites
        .map((favourite) => favourite.user.toString())
        .indexOf(req.user.id);

      vehicle.favourites.splice(removeIndex, 1);
      await vehicle.save();
      return res.json(vehicle.favourites);
    } else {
      vehicle.favourites.unshift({ user: req.user.id });
      await vehicle.save();
      return res.json(vehicle.favourites);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Favs Server error');
  }
});

// @route    POST api/v1/vehicles
// @desc     POST Vehicle
// @access   Private
router.post(
  '/',
  [
    check('registrationNumber', 'Enter Car Registration Number')
      .not()
      .isEmpty(),
    check('make', 'Enter Car Make').not().isEmpty(),
    check('model', 'Enter Car Model').not().isEmpty(),
    check('variant', 'Enter Model Variant').not().isEmpty(),
    check('price', 'Enter Price').not().isEmpty(),
    check('year', 'Year Of Manufacture').not().isEmpty(),
    check('mileage', 'Current Mileage').not().isEmpty(),
    check('transmission', 'Manual Or Automatic').not().isEmpty(),
    check('fuelType', 'Fuel Type').not().isEmpty(),
    check('bodyType', 'Body Type').not().isEmpty(),
    check('engineSize', 'Size Of Engine').not().isEmpty(),
    check('enginePower', 'Horsepower').not().isEmpty(),
    check('numberOfDoors', 'Number Of Doors').not().isEmpty(),
    check('colour', 'What Is Its Colour').not().isEmpty(),
    check('numberOfSeats', 'How Many Seats').not().isEmpty(),
    check('zeroToSixtyTime', '0-60 Time').not().isEmpty(),
    check('annualTax', 'Annual Cost Of Tax').not().isEmpty(),
    check('drivetrain', 'Front, Reverse Wheel or 4 Wheel Drive')
      .not()
      .isEmpty(),
    check('fuelConsumption', 'MPG').not().isEmpty(),
    check('insuranceGroup', 'Insurance Group').not().isEmpty(),
    check('emissions', 'C02 Emissions Figure').not().isEmpty(),
    check('ulezCompliant', 'Is It ULEZ Compliant').not().isEmpty(),
  ],
  auth,
  async (req, res) => {
    const {
      registrationNumber,
      make,
      model,
      variant,
      price,
      year,
      mileage,
      transmission,
      fuelType,
      bodyType,
      engineSize,
      enginePower,
      numberOfDoors,
      colour,
      numberOfSeats,
      zeroToSixtyTime,
      annualTax,
      driveTrain,
      fuelConsumption,
      insuranceGroup,
      emissions,
      ulezCompliant,
      modelVariant,
      title,
      description,
      specification,
      features,
      status,
      damaged,
      numberOfOwners,
      keywords,
      isNewCar,
      reviews,
      rating,
      numReviews,
    } = req.body;

    const { id: user } = req.user;

    try {
      // see if vehicle is already for sale
      let vehicle = await Vehicle.findOne({
        registrationNumber: registrationNumber,
      });

      if (vehicle) {
        return res
          .status(400)
          .json({ success: false, message: 'Vehicle is already listed' });
      }

      // new Vehicle object creation
      vehicle = new Vehicle({
        user,
        registrationNumber,
        title,
        description,
        specification,
        features,
        make,
        model,
        variant,
        modelVariant,
        price,
        year,
        mileage,
        transmission,
        fuelType,
        bodyType,
        engineSize,
        enginePower,
        numberOfDoors,
        colour,
        numberOfSeats,
        zeroToSixtyTime,
        annualTax,
        driveTrain,
        fuelConsumption,
        insuranceGroup,
        emissions,
        ulezCompliant,
        damaged,
        numberOfOwners,
        keywords,
        isNewCar,
        reviews,
        rating,
        numReviews,
      });

      await vehicle.save();

      res.status(201).json(vehicle);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error Vehicle Post');
    }
  }
);

// add comments
router.post('/files', auth, multerMid.any(), async (req, res) => {
  try {
    const { id } = req.user;

    if (!id) {
      return res.status(400).send('Unathorised');
    }

    const { id: vehicleId } = req.body;
    console.log(vehicleId);

    if (!vehicleId) {
      return res.status(400).send('Vehicle is missing from uploading files');
    }

    let files = req.files;

    if (files.length <= 0) {
      return res.status(400).send('Files is missing from upload');
    }

    let vehicle = await Vehicle.findById(vehicleId);

    for (const file of files) {
      console.log('PROCESSING FILE');
      console.log(file);
      const image = await vehicleRespository.uploadImage(file);
      vehicle.images.push({ url: image, owner: id, fileId: file.fieldname });
      console.log(vehicle);
      console.log('FILE UPLOADED');
      console.log(image);
    }

    await vehicle.save();

    return res.status(201).json(vehicle.images);
  } catch (error) {
    console.log('THROWING ERROR');
    console.error(error);
    res.status(500).send(error);
  }
});

// @route    PUT api/vehicles/:id
// @desc     Update vehicle details by ID
// @access   Private
router.put('/:id', checkObjectId('id'), auth, async (req, res) => {
  try {
    const { id } = req.params;

    let vehicle = await Vehicle.findById(id);

    if (!isEmpty(vehicle)) {
      // current logged in user
      const user = req.user;
      // make sure the current user is the same person who created it.
      if (vehicle.user.toString() !== user.id) {
        return res.status(400).json({
          success: false,
          message: 'Error updating vehicle, unauthorised',
        });
      }
      // find and update the relevant vehicle
      const updatedVehicle = await Vehicle.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );
      // return response
      return res.status(201).json({
        success: true,
        data: updatedVehicle,
      });
    }
    // return 400
    return res
      .status(400)
      .json({ success: false, message: 'Vehicle not found' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Update Vehicle Error');
  }
});

// @route    DELETE api/v1/vehicles/:id
// @desc     Delete vehicle by ID
// @access   Private
router.delete('/:id', checkObjectId('id'), auth, async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;

    const vehicle = await Vehicle.findById(id);

    if (!vehicle) {
      return res
        .status(404)
        .json({ success: false, message: 'Vehicle unavailable' });
    }

    // make sure the current user is the same person who created it.
    if (vehicle.user.toString() !== user.id) {
      return res.status(400).json({
        success: false,
        message: 'Error removing vehicle, unauthorised',
      });
    }

    await Vehicle.deleteOne({ _id: id });

    res.status(201).json({ sucess: true, message: 'Vehicle removed' });
  } catch (error) {
    console.error(error.message);

    res.status(500).send('Delete Vehicle Server Error');
  }
});

export default router;

// get all vehicles which are favourited
// router.get('/favourites/:userId', auth, async (req, res) => {
//   try {
//     const { id } = req.user;
//     console.log('---FAVOURITES USER ID---');
//     console.log(id);
//     const { favourites } = await Vehicle.find({ favourites: { $size: 1 } });
//     console.log('---FAVOURITES VEHICLES---');
//     console.log(favourites);
//     return res.status(200).json(favourites);
//   } catch (error) {
//     console.error(error.message);
//     return res.status(500).send('Favourites Server Error');
//   }
// });

// query = Vehicle.find(JSON.parse(queryString));
// // sorting results
// if (req.query.sort) {
//   const sortBy = req.query.sort.split(',').join(' ');
//   query = query.sort(sortBy);
// } else {
//   query = query.sort('-createdAt');
// }

//     // const vehicles = await Vehicle.find(JSON.parse(queryString));
//     // console.log('rrergegerg');
//     // console.log(vehicles);
//     // console.log('rrergegerg');

//     // const count = vehicles.count();

// const count = await Vehicle.countDocuments();

// // getting query params form URL, adding pagination and executing query
//     // which searches for matching cars
//     const pageSize = 9;
//     const page = Number(req.query.page) || 1;

//     // let query;
//     const queryObject = { ...req.query };
//     const excludeFields = ['page', 'sort', 'limit', 'fields'];
//     excludeFields.forEach((el) => delete queryObject[el]);

//     // using filter params to assign a '$' code to the math functions
//     // then replacing it in the queryString
//     let queryString = JSON.stringify(queryObject);
//     queryString = queryString.replace(
//       /\b(gte|gt|lte|lt)\b/g,
//       (match) => `$${match}`
//     );

//     let query = Vehicle.find(JSON.parse(queryString));
//     // sorting results
//     if (req.query.sort) {
//       query = query.sort(req.query.sort);

//       console.log('-----REQ QUERY-------');
//       console.log(req.query.sort);
//       console.log('------------');
//     }
//     // sorting results
//     // if (req.query.sort) {
//     //   const sortBy = req.query.sort.split(',').join(' ');
//     //   query = query.sort(sortBy);
//     // } else {
//     //   query = query.sort('-createdAt');
//     // }

//     // const vehicles = await Vehicle.find(JSON.parse(queryString));
//     // console.log('rrergegerg');
//     // console.log(vehicles);
//     // console.log('rrergegerg');

//     // const count = vehicles.count();

//     // const vehicles = await Vehicle.find(req.query)
//     vehicles.limit(pageSize).skip(pageSize * (page - 1));
//     const vehicles = await Vehicle.find(JSON.parse(queryString))
//       // const vehicles = await Vehicle.find(req.query)
//       .limit(pageSize)
//       .skip(pageSize * (page - 1));

//     // here it is
//     // mongodb paginate agfter filtering
//     const count = await Vehicle.countDocuments();

//     if (!vehicles) {
//       return res.status(200).json({ success: true, data: [] });
//     }

//     res
//       .status(200)
//       .json({ vehicles, page, totalPages: Math.ceil(count / pageSize) });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Server Error');
//   }
// });

// // tried to add sorting and different pagintation but didnt work
// try {
//   // getting query params form URL, adding pagination and executing query
//   // which searches for matching cars
//   const queryObject = { ...req.query };
//   const excludeFields = ['page', 'sort', 'limit', 'fields'];
//   excludeFields.forEach((el) => delete queryObject[el]);

//   // using filter params to assign a '$' code to the math functions
//   // then replacing it in the queryString
//   let queryString = JSON.stringify(queryObject);
//   queryString = queryString.replace(
//     /\b(gte|gt|lte|lt)\b/g,
//     (match) => `$${match}`
//   );
//   console.log(JSON.parse(queryString));

//   let query = Vehicle.find(JSON.parse(queryString));

//   // sorting results
//   if (req.query.sort) {
//     const sortBy = req.query.sort.split(',').join(' ');
//     query = query.sort(sortBy);
//   } else {
//     query = query.sort('-createdAt');
//   }

//   // field limiting from results
//   if (req.query.fields) {
//     const fields = req.query.fields.split(',').join(' ');
//     query = query.select(fields);
//   } else {
//     query = query.select('-__v');
//   }

//   // coding pagination & page size
//   // const pageSize = 9;
//   // const page = Number(req.query.page) || 1;
//   const page = req.query.page * 1 || 1;
//   const limit = req.query.limit * 1 || 9;
//   const skip = (page - 1) * limit;

//   query = query.skip(skip).limit(limit);

//   const vehicles = await query;
//   const count = await Vehicle.countDocuments();
//   // console.log(count);

//   // let vehicles = await Vehicle.find(JSON.parse(queryString))
//   //   // const vehicles = await Vehicle.find(req.query)
//   //   .limit(pageSize)
//   //   .skip(pageSize * (page - 1));

//   // original code
//   // const query = await Vehicle.find(JSON.parse(queryString));

//   if (!vehicles) {
//     return res.status(200).json({ success: true, data: [] });
//   }

//   res
//     .status(200)
//     .json({ vehicles, page, totalPages: Math.ceil(count / limit) });
// } catch (error) {
//   console.error(error.message);
//   res.status(500).send('Server Error');
// }

// console.log('----COUNT----');
// console.log(count);
// console.log('-----------');
