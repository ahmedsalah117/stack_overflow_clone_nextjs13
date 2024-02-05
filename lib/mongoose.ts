import mongoose from "mongoose";

let isConnected: boolean = false;

export async function connectToDatabase() {
  mongoose.set("strictQuery", true); // this is to prevent unknown field queries, which results in a better DX.

  if (!process.env.MONGODB_URL) {
    return console.log("missing mongoose url");
  }

  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "dev_overflow",
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB is not connected", error);
  }
}
