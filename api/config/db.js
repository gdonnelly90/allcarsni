import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoURI = `mongodb+srv://${process.env.user}:${process.env.password}@${process.env.cluster}/?retryWrites=true&w=majority`
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
    })
    console.log('MongoDB connected')
  } catch(error) {
    console.error(error.message);
    // exit the process if failed to connect to database
    process.exit(1);
  }
};
