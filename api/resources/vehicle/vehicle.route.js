import { Router } from 'express';
import { Vehicle } from './vehicle.model.js';
import { auth } from '../../middleware/auth.js';
import { check } from 'express-validator'
import { isEmpty }  from 'lodash-es';
import { checkObjectId } from '../../middleware/checkObjectId.js';


const router = Router();

// @route    GET api/v1/vehicles
// @desc     GET all vehicles
// @access   Public
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();

        if (!vehicles) {
            return res.status(200).json({ success: true, data: [] });
        }

        res.status(200).json({success: true, data: vehicles});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET api/v1/vehciles/:id
// @desc     GET Vehcile by id
// @access   Public
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
    
        if(isEmpty(id)) {
            return res.status(404).json({success: false, message: 'Vehicle does no exist'});
        }
    
        const vehicle = await Vehicle.findById(id).populate('user', ['email']).lean().exec();
    
        if (!vehicle) {
        return res.status(400).json({ success: false, message: 'No vechile found' });
        }
    
        res.status(200).json({ success: true, data: vehicle });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
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
        return res.status(400).json({ success: false, message: 'Vehicle not found' });
      }
      res.status(200).json({ success: true, data: vehicles });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
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
    ], auth, 
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
        // see if vehicle is already for sale
        let vehicle = await Vehicle.findOne({ registrationNumber: registrationNumber });
  
        if (vehicle) {
          return res
            .status(400)
            .json({ success: false, message: 'Vehicle is already listed'});
        }
  
        // new Vehicle object creation
        vehicle = new Vehicle({
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
        
        await vehicle.save();

        res.status(201).json({success: true, message: 'Vechile created'});
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error Vehicle');
      }
    });

// @route    PUT api/vehicles/:id
// @desc     Update vehicle details by ID
// @access   Private
router.put('/:id', checkObjectId('id'), auth, async (req, res) => {
    try {
        const { id } = req.params
        
        let vehicle = await Vehicle.findById(id);
        
        if (!isEmpty(vehicle)) {
            // current logged in user            
            const user = req.user;
            // make sure the current user is the same person who created it.
            if (vehicle.user.toString() !== user.id) {
                return res.status(400).json({ success: false, message: 'Error updating vehicle, unauthorised' });
            }
            // find and update the relevant vehicle
            const updatedVehicle = await Vehicle.findOneAndUpdate({ _id: id }, req.body, { new: true })
            // return response
            return res.status(201).json({success: true, data: updatedVehicle })
        }
        // return 400
        return res.status(400).json({success: false, message: 'Vehicle not found' });
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
            return res.status(404).json({ success: false, message: 'Vehicle unavailable' });
        }

        // make sure the current user is the same person who created it.
        if (vehicle.user.toString() !== user.id) {
            return res.status(400).json({ success: false, message: 'Error removing vehicle, unauthorised' });
        }

        await Vehicle.deleteOne({_id: id});

        res.status(201).json({ sucess: true, message: 'Vehile removed' });

    } catch (error) {
      console.error(error.message);
  
      res.status(500).send('Server Error');
    }
  });
  

export default router;
