import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    console.log("⏳  connecting to Mongo at", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected ✔');
  } catch (err) {
    console.error('DB connection error:', err.message);
    process.exit(1);
  }
};
