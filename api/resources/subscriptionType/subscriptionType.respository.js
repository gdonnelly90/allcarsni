import { SubscriptionType } from './subscriptionType.model.js';
import Stripe from 'stripe';

// const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = Stripe(
  'sk_test_51LNdX6I4AGtZ3rHZ3V4FEpdvpSvhktMJYupHKKBtVGyiPr3u6KYduGCfa6PvioaoE4UzsWLtc9pZyXvxLYMMmBbp00s82Nz3dS'
);

const getSubscriptionByName = async (name) => {
  return await SubscriptionType.findOne({ name }).exec();
};

const createStripeProduct = async (obj) => {
  try {
    let recurring = {};
    // deconstruct param
    const { price, name, interval, quantity } = obj;
    // Stripe API create product
    const stripeProduct = await stripe.products.create({
      name,
      metadata: { quantity: quantity },
    });

    if (stripeProduct) {
      // set interval for paying - check one_time or interval
      recurring = getPaymentInterval(interval);
      // Stripe API create price
      const stripePrice = await createStripePrice({
        id: stripeProduct.id,
        name,
        price,
        recurring,
      });
      // successful both
      if (stripePrice.success && stripeProduct)
        return {
          success: true,
          product: stripeProduct,
          price: stripePrice.price,
        };
      else return { success: false, error: 'Product not created Stripe' };
    } else {
      // remove stripe product
      deleteStripeProduct(stripeProduct.id);
      // return error
      return { success: false, error: 'Product not created Stripe' };
    }
  } catch (error) {
    return { success: false, error };
  }
};

const createStripePrice = async (obj) => {
  try {
    const { id, name, price, recurring } = obj;
    // create the linked price in stripe dashboard
    const stripePrice = await stripe.prices.create({
      unit_amount: price * 100,
      nickname: name,
      currency: 'gbp',
      product: id,
      recurring,
    });
    return { success: true, price: stripePrice };
  } catch (error) {
    // Stripe API delete product
    deleteStripeProduct(obj.id);
    return { success: false, error };
  }
};

// TODO MANAGE STRIPE PRODUCT FOR ADMIN PORTAL
const updateStripeProduct = async (obj) => {
  const { name, price, type, quantity, stripeProductId, stripePriceId } = obj;

  return { success: true };
};

const createStripePaymentSession = async (stripeCustomerId, stripePriceId) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: stripePriceId, quantity: 1 }],
      payment_method_types: ['card'],
      customer: stripeCustomerId,
      success_url: `${process.env.STRIPE_SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    return session;
  } catch (error) {
    return error;
  }
};

const createCustomerPortal = async (stripeCustomerId) => {
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: process.env.STRIPE_SUCCESS_URL,
  });

  const { url = '' } = portalSession;

  return url;
};

const deleteStripeProduct = (id) => {
  stripe.products.del(id);
};

const getPaymentInterval = (interval) => {
  if (interval === 'recurring') {
    return {
      interval: 'month',
    };
  } else return {};
};

const getStripeUserSubscriptions = async (stripeCustomerId) => {
  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: stripeCustomerId,
      status: 'active',
      expand: ['data.default_payment_method'],
    });

    return subscriptions;
  } catch (error) {
    return error;
  }
};

export default {
  createStripeProduct,
  createStripePaymentSession,
  createCustomerPortal,
  getSubscriptionByName,
  getStripeUserSubscriptions,
};
