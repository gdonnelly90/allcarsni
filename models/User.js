const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    businessName: {
      type: String,
      required: false,
    },
    name: {
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
    telephone: {
      type: String,
      required: false,
    },
    companyRegNumber: {
      type: String,
      required: false,
      default: 'Not Registered',
    },
    vatNumber: {
      type: String,
      required: false,
      default: 'Not VAT Registered',
    },
    address: {
      type: String,
      required: false,
    },
    postcode: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    allowedToSellQty: {
      type: Number,
      required: true,
      default: 1,
    },
    role: {
      type: String,
      required: true,
      default: 'individual',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model('user', userSchema);