import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";

const connectToDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log("Connected to ComityDB successfully!!")
    } catch (error) {
        console.log("MongoDB connection failed!!", error.message);
        process.exit(1);
    }
}


export default connectToDB