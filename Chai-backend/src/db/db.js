import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGO_URI} / ${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB HOST : ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection error" , error);
        process.exit(1)
    }
}