import mongoose from "mongoose";

const SubscriptionTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    type: [{
        type: String,
        enum : ['Single', 'Trade', 'Dealer'],
        default: 'Single'
    }],
    quantity: {
        type: Number,
        required: true,
    }
},
{
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })


  export const SubscriptionType = mongoose.model('subscriptionTypes', SubscriptionTypeSchema)

