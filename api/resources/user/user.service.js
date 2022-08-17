import Stripe from 'stripe';

const createStripeCustomer = async ({ email, name }) => {
  try {
    // init stripe integration
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    // create stripe customer
    const customer = await stripe.customers.create({
      email: email,
      name: name,
    });
    return { success: true, data: customer };
  } catch (error) {
    return { success: false, error };
  }
};

export default {
  createStripeCustomer,
};
