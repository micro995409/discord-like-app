import mongoose from 'mongoose';

const globalWithMongoose = global as typeof globalThis & {
  mongoose?: {
    conn: typeof mongoose;
    promise: Promise<typeof mongoose>;
  };
};

const mongoUri = process.env.MONGODB_URI;

let cached = globalWithMongoose.mongoose;

if (!cached) {
  globalWithMongoose.mongoose = { conn: mongoose, promise: Promise.resolve(mongoose) };
  cached = globalWithMongoose.mongoose;
}

async function dbConnect() {
  if (!mongoUri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  if (cached?.conn.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached) {
    throw new Error('Mongoose cache is not initialized');
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongoUri).then((mongooseInstance) => mongooseInstance);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
