import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  businessName: {
    type: String,
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
  allowedToSellQty: {
    type: Number,
    default: 1,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  subscription: {
    type: mongoose.Schema.ObjectId,
    ref: 'subscriptionTypes'
  },
  active: {
    type: Boolean,
    default: true
  }
},
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Virtual Populate - user subscription type
UserSchema.virtual('subscriptionTypes', {
  ref: 'subscriptionTypes',
  foreignField: 'users',
  localField: '_id'
})

export const User = mongoose.model('users', UserSchema)

