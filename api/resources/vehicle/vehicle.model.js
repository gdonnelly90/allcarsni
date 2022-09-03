import mongoose from 'mongoose';

const VehicleSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
  },
  recipient: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  modelVariant: {
    type: String,
  },
  variant: {
    type: String,
    default: 'Not specified',
  },
  price: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  transmission: {
    type: String,
  },
  fuelType: {
    type: String,
  },
  bodyType: {
    type: String,
  },
  engineSize: {
    type: Number,
  },
  enginePower: {
    type: Number,
  },
  numberOfDoors: {
    type: Number,
  },
  colour: {
    type: String,
    required: true,
  },
  numberOfSeats: {
    type: Number,
  },
  zeroToSixtyTime: {
    type: Number,
  },
  annualTax: {
    type: Number,
  },
  driveTrain: {
    type: String,
  },
  fuelConsumption: {
    type: Number,
  },
  insuranceGroup: {
    type: String,
  },
  emissions: {
    type: Number,
  },
  ulezCompliant: {
    type: Boolean,
  },
  damaged: {
    type: Boolean,
    default: false,
  },
  numberOfOwners: {
    type: Number,
    default: 1,
  },
  description: {
    type: String,
  },
  specification: {
    type: [String],
  },
  features: {
    type: [String],
  },
  keywords: {
    type: [String],
  },
  isNewCar: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['FOR SALE', 'SOLD', 'DEPOSIT TAKEN'],
    default: 'FOR SALE',
  },
  reviews: {
    type: [Object],
    ref: 'reviews',
  },
  favourites: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
      },
    },
  ],
  images: [
    {
      owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
      },
      fileId: { type: String },
      url: { type: String },
    },
  ],
});

// Virtual Populate - user
VehicleSchema.virtual('users', {
  ref: 'users',
  localField: 'user',
  foreignField: '_id',
});

export const Vehicle = mongoose.model('cars', VehicleSchema);
