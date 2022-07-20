import mongoose from "mongoose";

const VehicleSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
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
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
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
    required: true,
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
    enum : ['FOR SALE', 'SOLD', 'DEPOSIT TAKEN'],
    default: 'FOR SALE'
  },
  reviews: {
    type: [Object],
    ref: 'reviews'
  }
});

// Virtual Populate - user 
VehicleSchema.virtual('users', {
  ref: 'users',
  localField: 'user',
  foreignField: '_id'
})



export const Vehicle = mongoose.model('cars', VehicleSchema)
