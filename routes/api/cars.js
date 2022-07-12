const express = require('express');
const router = express.Router();
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');
const Car = require('../../models/Car');

// @route   POST api/car
// @desc    Create a Car to sell
// @access  Public
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
    check('gearbox', 'Manual Or Automatic').not().isEmpty(),
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
    check('damaged', 'Is Car S/C/D/N Damaged, True Or False').not().isEmpty(),
    check('isNewCar', 'Is this a new car? True Or False').not().isEmpty(),
  ],
  async (req, res) => {
    const {
      user,
      registrationNumber,
      make,
      model,
      variant,
      price,
      year,
      mileage,
      gearbox,
      fuelType,
      bodyType,
      engineSize,
      enginePower,
      numberOfDoors,
      colour,
      numberOfSeats,
      zeroToSixtyTime,
      annualTax,
      drivetrain,
      fuelConsumption,
      insuranceGroup,
      emissions,
      ulezCompliant,
      damaged,
      keywords,
      isNewCar,
      reviews,
      rating,
      numReviews,
    } = req.body;

    try {
      // see if Car is already for sale
      let car = await Car.findOne({ registrationNumber: registrationNumber });

      if (car) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Car is already for sale' }] });
      }

      // new car object creation
      car = new Car({
        user,
        registrationNumber,
        make,
        model,
        variant,
        price,
        year,
        mileage,
        gearbox,
        fuelType,
        bodyType,
        engineSize,
        enginePower,
        numberOfDoors,
        colour,
        numberOfSeats,
        zeroToSixtyTime,
        annualTax,
        drivetrain,
        fuelConsumption,
        insuranceGroup,
        emissions,
        ulezCompliant,
        damaged,
        keywords,
        isNewCar,
        reviews,
        rating,
        numReviews,
      });

      res.json(await car.save());
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error in car.js');
    }
  }
);

// @route    GET api/cars
// @desc     Get all cars
// @access   Public
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find();
    if (!cars) {
      return res.status(400).json({ msg: 'There is no Cars to find' });
    }
    res.json(cars);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    Get api/cars/:new
// @desc     Get all 'new' cars by isNewCar
// @access   Public
router.get('/:isNewCar', async (req, res) => {
  try {
    const newCars = await Car.find({ isNewCar: { $in: ['true', true] } });
    res.json(newCars);
    if (!newCars) {
      return res.status(400).json({ msg: 'There are no new cars' });
    }
  } catch (error) {
    console.error(error.message);

    res.status(500).send('Server Error');
  }
});

// @route    GET api/cars/:keyword
// @desc     Get car by Car ID or User
// @access   Public
router.get('/:keyword', async (req, res) => {
  try {
    const cars = await Car.find({
      $or: [{ _id: req.params.keyword }, { user: req.params.keyword }],
    });
    if (!cars) {
      return res.status(400).json({ msg: 'There is no Car to find' });
    }
    res.json(cars);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    UPDATE api/cars/:id
// @desc     Update car details by ID
// @access   Public
router.put('/:id', checkObjectId('id'), async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(
      req.params.id,
      {
        registrationNumber: req.body.registrationNumber,
        make: req.body.make,
        model: req.body.model,
        variant: req.body.variant,
        price: req.body.price,
        year: req.body.year,
        mileage: req.body.mileage,
        gearbox: req.body.gearbox,
        fuelType: req.body.fuelType,
        bodyType: req.body.bodyType,
        engineSize: req.body.engineSize,
        enginePower: req.body.enginePower,
        numberOfDoors: req.body.numberOfDoors,
        colour: req.body.colour,
        numberOfSeats: req.body.numberOfSeats,
        zeroToSixtyTime: req.body.zeroToSixtyTime,
        annualTax: req.body.annualTax,
        drivetrain: req.body.drivetrain,
        fuelConsumption: req.body.fuelConsumption,
        insuranceGroup: req.body.insuranceGroup,
        emissions: req.body.emissions,
        ulezCompliant: req.body.ulezCompliant,
        damaged: req.body.damaged,
        keywords: req.body.keywords,
        isNewCar: req.body.isNewCar,
        reviews: req.body.reviews,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
      },
      { new: true }
    );
    res.json(await car.save());
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Update Car Error');
  }
});

// @route    DELETE api/cars/:id
// @desc     Delete car by ID
// @access   Public
router.delete('/:id', checkObjectId('id'), async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({ msg: 'Car not found' });
    }

    await car.remove();
    res.json({ msg: 'Car removed' });
  } catch (error) {
    console.error(error.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;

// @route    GET api/cars/:id
// @desc     Get car by ID
// @access   Public
// router.get('/:id', checkObjectId('id'), async (req, res) => {
//   try {
//     const car = await Car.findById(req.params.id);

//     if (!car) {
//       return res.status(404).json({ msg: 'Car not found' });
//     }

//     res.json(car);
//   } catch (err) {
//     console.error(err.message);

//     res.status(500).send('Server Error');
//   }
// });
