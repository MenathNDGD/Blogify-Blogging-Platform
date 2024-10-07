import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cachedConnection = (global as any).mongoose || {
  conn: null,
  promise: null,
};

export const connectToDatabase = async () => {
  if (cachedConnection.conn) return cachedConnection.conn;

  if (!MONGODB_URI) throw new Error("MongoDB URI is missing");

  cachedConnection.promise =
    cachedConnection.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "blogify",
      bufferCommands: false,
    });

  cachedConnection.conn = await cachedConnection.promise;

  return cachedConnection.conn;
};
