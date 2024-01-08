import mongoose from "mongoose";
//import { DB_NAME } from "../constants.js";
import { env } from 'node:process';
const DB_NAME = "firstProfessionalDB";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}:${process.env.PORT}/${DB_NAME}`)
        console.log(`\n MongoDB connected !!! ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDb connection error :",error)
        process.exit(1)
    }
}

export default connectDB;