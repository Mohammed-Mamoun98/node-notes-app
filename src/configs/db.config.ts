import mongoose from "mongoose";
import { config } from "./general.config";


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'test';

const connectionString = `${url}/${dbName}`

export const connectDb = () =>
  mongoose.connect(connectionString).then(() => console.log("Database connected!"));
