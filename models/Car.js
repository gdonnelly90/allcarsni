const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      //   required: true,
    },
    rating: {
      type: Number,
      //   required: true,
    },
    comment: {
      type: String,
      //   required: true,
    },
  },
  {
    timestamps: true,
  }
);

const carSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    // required: true,
  },
  model: {
    type: String,
    // required: true,
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
    // required: true,
  },
  mileage: {
    type: Number,
    // required: true,
  },
  gearbox: {
    type: String,
    // required: true,
  },
  fuelType: {
    type: String,
    // required: true,
  },
  bodyType: {
    type: String,
    // required: true,
  },
  engineSize: {
    type: Number,
    // required: true,
  },
  enginePower: {
    type: Number,
    // required: true,
  },
  numberOfDoors: {
    type: Number,
    // required: true,
  },
  colour: {
    type: String,
    // required: true,
  },
  numberOfSeats: {
    type: Number,
    // required: true,
  },
  zeroToSixtyTime: {
    type: Number,
    // required: true,
  },
  annualTax: {
    type: Number,
    // required: true,
  },
  drivetrain: {
    type: String,
    // required: true,
  },
  fuelConsumption: {
    type: Number,
    // required: true,
  },
  insuranceGroup: {
    type: String,
    // required: true,
  },
  emissions: {
    type: Number,
    // required: true,
  },
  ulezCompliant: {
    type: Boolean,
    // required: true,
  },
  damaged: {
    type: Boolean,
    required: true,
    // default: false,
  },
  keywords: {
    type: [String],
    // required: false,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    // required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    // required: true,
    default: 0,
  },
});

module.exports = Car = mongoose.model('car', carSchema);
