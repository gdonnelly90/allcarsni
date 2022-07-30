import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    businessName: {
      type: String,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    companyRegNumber: {
      type: String,
      default: 'Not Registered',
    },
    vatNumber: {
      type: String,
      default: 'Not VAT Registered',
    },
    address: {
      type: String,
    },
    postcode: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    allowedToSellQty: {
      type: Number,
      default: 1,
    },
    roles: {
      type: [String],
      enum: ['admin', 'user'],
      default: 'user',
    },
    subscription: {
      type: mongoose.Schema.ObjectId,
      ref: 'subscriptionTypes',
    },
    active: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
    },
    telephone: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual Populate - user subscription type
UserSchema.virtual('subscriptionTypes', {
  ref: 'subscriptionTypes',
  foreignField: 'users',
  localField: '_id',
});

export const User = mongoose.model('users', UserSchema);
