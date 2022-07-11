const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

// @route   GET api/auth
// @desc    Authorised route
// @ccess   PRIVATE
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth
// @desc    Authenticate a user and return JWT
// @access  PUBLIC
router.post(
  '/',
  [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password is required, please enter').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });

      // see if user exists
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User does not exist' }] });
      }

      // for security you would normally not differentiate between error messages (such as invalid password below)
      const doesMatch = await bcrypt.compare(password, user.password);
      if (!doesMatch) {
        return res.status(400).json({ errors: [{ msg: 'Invalid password' }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      // sign expiry on JWT
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      // catch error
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error in users.js');
    }
  }
);

module.exports = router;
