import mongoose from 'mongoose'

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already conncted');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "feedback",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;
  } catch (error) {
    console.log(error);
  }
}