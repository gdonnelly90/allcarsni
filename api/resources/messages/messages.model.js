import mongoose from 'mongoose';

const MessageSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'users',
    },
    recipientUserId: {
      type: mongoose.Schema.ObjectId,
      ref: 'users',
    },
    vehicleId: {
      type: mongoose.Schema.ObjectId,
      ref: 'vehicles',
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
    messageBody: {
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
MessageSchema.virtual('users', {
  ref: 'users',
  localField: 'user',
  foreignField: '_id',
});

// Virtual Populate - vehicle
MessageSchema.virtual('cars', {
  ref: 'cars',
  localField: 'vehicleId',
  foreignField: '_id',
});

export const Message = mongoose.model('messages', MessageSchema);

// vehicleId: {
//   type: String,
// },
