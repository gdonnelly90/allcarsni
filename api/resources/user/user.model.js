import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    stripeCustomerId: {
      type: String,
      required: true,
    },
    businessName: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    telephone: {
      type: String,
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
    roles: {
      type: [String],
      enum: ['admin', 'user'],
      default: 'user',
    },
    active: {
      type: Boolean,
      default: true,
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
