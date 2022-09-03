import mongoose from 'mongoose';

const FavouriteSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'users',
    },
    vehicleId: {
      type: mongoose.Schema.ObjectId,
      ref: 'vehicles',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual Populate - user subscription type
FavouriteSchema.virtual('users', {
  ref: 'users',
  localField: 'user',
  foreignField: '_id',
});

// Virtual Populate - vehicle
FavouriteSchema.virtual('cars', {
  ref: 'cars',
  localField: 'vehicleId',
  foreignField: '_id',
});

export const Favourite = mongoose.model('favourites', FavouriteSchema);
