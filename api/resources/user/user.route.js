import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import { isEmpty } from 'lodash-es';
import { auth } from '../../middleware/auth.js';
import { User } from './user.model.js';
import userService from './user.service.js';
import { check, validationResult } from 'express-validator';

const router = Router();

// @route   POST api/v1/users/register
// @desc    Register a user
// @access  Public
router.post(
  '/register',
  [
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

    const { firstName, lastName, email, mobile, password, roles } = req.body;

    try {
      // see if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ message: 'An error has occurred' }] });
      }

      // STRIPE API - Create Customer in stripe
      const stripeCustomer = await userService.createStripeCustomer({
        email,
        name: `${firstName} ${lastName}`,
      });

      if (!stripeCustomer.success)
        return res
          .status(500)
          .json({ errors: [{ message: 'Error creating account' }] });

      // instantiate new user
      user = new User({
        firstName,
        lastName,
        email,
        mobile,
        password,
        roles,
        mobile,
        stripeCustomerId: stripeCustomer.data.id,
      });
      // encrypt password
      const salt = await bcrypt.genSalt(10);
      // hash password
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
          roles: [user.roles],
          firstName,
          lastName,
          email,
          mobile,
          stripeCustomerId: stripeCustomer.data.id,
        },
      };

      // JWT Sign token
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send(`Server Error in users.js ${error}`);
    }
  }
);

// @route   GET api/v1/users
// @desc    Get current user by token
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select('-password')
      .populate('subscription');

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error in users.js');
  }
});

// @route   DELETE api/v1/users
// @desc    DELETE a Registered User
// @access  Private
router.delete('/', auth, async (req, res) => {
  try {
    const { id } = req.user;

    if (isEmpty(id)) {
      return res
        .json(500)
        .json({ success: false, message: 'Invalid request id' });
    }

    const activeUser = await User.findById(id);
    // console.log(activeUser);

    if (!activeUser) {
      return res.status(500).json({ success: false, message: 'Unauthorised' });
    }

    if (activeUser.id.toString() !== id) {
      return res.status(500).json({ success: false, message: 'Unauthorised' });
    }

    const user = await User.findOneAndUpdate(
      { _id: id },
      { $set: { active: false } },
      { new: true }
    );

    return res.status(201).json({
      success: true,
      data: user,
      message: 'User account deleted successfully',
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
