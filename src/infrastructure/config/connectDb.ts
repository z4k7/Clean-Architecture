import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const mongo_uri = "mongodb://localhost:27017/clean";
    await mongoose.connect(mongo_uri);
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
};
