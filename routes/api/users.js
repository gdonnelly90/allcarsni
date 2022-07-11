const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Please enter your name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      businessName,
      name,
      email,
      password,
      telephone,
      companyRegNumber,
      vatNumber,
      address,
      postcode,
      isAdmin,
      allowedToSellQty,
      role,
      timestamps,
    } = req.body;

    try {
      // see if user exists
      let user = await User.findOne({ email: email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User is already registered GD' }] });
      }

      // instantiate new user
      user = new User({
        businessName,
        name,
        email,
        password,
        telephone,
        companyRegNumber,
        vatNumber,
        address,
        postcode,
        isAdmin,
        allowedToSellQty,
        role,
        timestamps,
      });

      // encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      // set expiry on JWT token
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token });
        }
      );

      // return JWT token
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error in users.js');
    }

    // res.send('User registered');
  }
);

// @route   GET api/users
// @desc    Get current user by token
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error in users.js');
  }
});

// @route   PUT api/users
// @desc    Update User Details via JWT login - password not returned in JWT
// @access  Private
router.put('/', auth, async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        name: req.body.name,
        email: req.body.email,
      },
      { new: true }
    ).select('-password');
    if (!User) {
      return res.status(400).json({ msg: 'There is no User to update' });
    }
    res.json({ msg: 'User account updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/users
// @desc    Delete a Registered User
// @access  Private
router.delete('/', auth, async (req, res) => {
  try {
    await User.findOneAndRemove({ _id: req.user.id });
    if (!User) {
      return res.status(400).json({ msg: 'There is no User to delete' });
    }
    res.json({ msg: 'User account deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
