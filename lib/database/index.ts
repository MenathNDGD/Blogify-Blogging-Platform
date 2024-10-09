import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "blogify",
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};

// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// let cachedConnection = (global as any).mongoose || {
//   conn: null,
//   promise: null,
// };

// export const connectToDatabase = async () => {
//   if (cachedConnection.conn) return cachedConnection.conn;

//   if (!MONGODB_URI) throw new Error("MongoDB URI is missing");

//   cachedConnection.promise =
//     cachedConnection.promise ||
//     mongoose.connect(MONGODB_URI, {
//       dbName: "blogify",
//       bufferCommands: false,
//     });

//   cachedConnection.conn = await cachedConnection.promise;

//   return cachedConnection.conn;
// };
