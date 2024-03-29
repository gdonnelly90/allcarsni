import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { check, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import config from 'config';
import { User } from '../user/user.model.js';
import { isEmpty } from 'lodash-es';
import subscriptionRepo from '../subscriptionType/subscriptionType.respository.js';

const router = Router();

// @route   POST api/v1/auth
// @desc    Login - Authenticate a user and return JWT
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
      if (isEmpty(user)) {
        return res.status(400).json({ success: false, message: 'Error' });
      }

      // lookup stripe subscriptions for user
      const subscription = await subscriptionRepo.getStripeUserSubscriptions(
        user.stripeCustomerId
      );
      
      // for security you would normally not differentiate between error messages (such as invalid password below)
      const doesMatch = await bcrypt.compare(password, user.password);

      if (!doesMatch) {
        return res.status(400).json({ errors: [{ msg: 'Invalid password' }] });
      }

      const payload = {
        user: {
          id: user.id,
          roles: user.roles,
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          email: user.email || '',
          stripeCustomerId: user.stripeCustomerId || null,
          mobile: user.mobile || null,
          subscription: subscription?.data[0] || {},
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

export default router;
