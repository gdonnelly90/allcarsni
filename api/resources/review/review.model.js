import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    userId : {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    vehicleId : {
        type: mongoose.Schema.ObjectId,
        ref: 'car'
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
    }
);

export const Review = mongoose.model('reviews', ReviewSchema);