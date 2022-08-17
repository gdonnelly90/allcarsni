import mongoose from 'mongoose';

const SubscriptionTypeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sellerTypes: [
      {
        type: String,
        enum: ['Single', 'Dealer'],
        default: 'Single',
      },
    ],
    quantity: {
      type: Number,
      required: true,
    },
    stripeProductId: {
      type: String,
    },
    stripePriceId: {
      type: String,
    },
    interval: {
      type: String,
      enum: ['recurring', 'one_time'],
      required: true,
      default: 'recurring',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const SubscriptionType = mongoose.model(
  'subscriptionTypes',
  SubscriptionTypeSchema
);
