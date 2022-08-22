import { Router } from 'express';
import { isEmpty } from 'lodash-es';
import { auth, restrict } from '../../middleware/auth.js';
import { SubscriptionType } from './subscriptionType.model.js';
import { validationResult } from 'express-validator';
import subscriptionRep from './subscriptionType.respository.js';

const router = Router();
const serviceName = 'SubscriptionType';

router.get('/', auth, async (req, res) => {
  try {
    const subcriptions = await SubscriptionType.find();
    return res.status(200).json(subcriptions);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`GET ${serviceName}, Server Error ${error}`);
  }
});

// @route   GET api/v1/subscriptiontypes/active-subscriptions
// @desc    GET subscription status for user
// @access  Private
router.get('/active-subscriptions', auth, async (req, res) => {
  try {
    const { stripeCustomerId } = req.user;

    if (!stripeCustomerId)
      return res.status(500).send(`${serviceName}: Not found`);

    const subcriptions = await subscriptionRep.getStripeUserSubscriptions(
      stripeCustomerId
    );

    return res.status(200).json(subcriptions);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`GET ${serviceName}, Server Error ${error}`);
  }
});

router.get('/customer-portal', auth, async (req, res) => {
  try {
    const { stripeCustomerId } = req.user;

    if (isEmpty(stripeCustomerId))
      res.status(500).json('Error creating portal - customer');

    const session = await subscriptionRep.createCustomerPortal(
      stripeCustomerId
    );
    res.status(200).json(session);
  } catch (error) {
    res.status(500).send(error);
  }
});

// @route   POST api/v1/subscriptiontypes
// @desc    Create subscription type db & Stripe
// @access  Private
router.post('/', auth, restrict(['admin']), async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // lift params from body
    const { name, price, sellerTypes, quantity, interval } = req.body;
    // see if subscription exists
    let subscriptionType = await SubscriptionType.findOne({ name });
    // if exists
    if (subscriptionType) {
      return res.status(400).json({
        errors: [{ message: 'An error has occurred, duplicate entry' }],
      });
    }

    // Create product in stripe dashboard
    const stripeProduct = await subscriptionRep.createStripeProduct({
      name,
      price,
      interval,
      quantity,
    });
    if (stripeProduct.success) {
      // create new sub model and store in db
      subscriptionType = new SubscriptionType({
        name,
        price,
        sellerTypes,
        quantity,
        interval,
        stripeProductId: stripeProduct?.product?.id,
        stripePriceId: stripeProduct?.price?.id,
      });
      // save doc
      await subscriptionType.save();
      // return
      return res.status(201).json({ success: true, data: subscriptionType });
    }

    return res
      .status(400)
      .json({ success: false, message: 'Error creating product' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`Server Error in ${serviceName} ${error}`);
  }
});

// @route   POST api/v1/subscriptiontypes/create-subscription-session
// @desc    Create subscription link from stripe
// @access  Private
router.post('/create-subscription-session', auth, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // get user stripeId
    const { stripeCustomerId } = req.user;
    // type of payment needed either subscription or payment
    const { stripePriceId } = req.body;

    if (isEmpty(stripeCustomerId) || isEmpty(stripePriceId)) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid payment details' });
    }

    // create stripe session and provide URL for application
    const session = await subscriptionRep.createStripePaymentSession(
      stripeCustomerId,
      stripePriceId
    );
    // return
    return res.status(201).json({ success: true, session });
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`Server Error in ${serviceName} ${error}`);
  }
});

// @route   PUT api/v1/subscriptiontypes/:id
// @desc    Update subscription type
// @access  Private
router.put('/:id', auth, restrict(['admin']), async (req, res) => {
  try {
    // extract the id from url
    const { id } = req.params;
    // get the list of fields to update
    const { name, price, type, quantity, stripeProductId, stripePriceId } =
      req.body;

    // todo finsh off - https://stripe.com/docs/api/products/update
    const stripeUpdate = await subscriptionRep.updateStripeProduct(req.body);

    if (stripeUpdate.success) {
      // new return new updated document
      await SubscriptionType.findOneAndUpdate(
        { _id: id },
        { $set: { name, price, type, quantity } },
        { new: true }
      )
        .then((subscription) => {
          return res.status(200).json({ success: true, data: subscription });
        })
        .catch((error) => {
          return res.status(500).json({ success: false, error });
        });
    }

    return res
      .status(500)
      .json({ success: false, error: `Error updating subcription ${name}` });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send(`PUT ${serviceName}, Server Error in subscriptionType.js ${error}`);
  }
});

export default router;
