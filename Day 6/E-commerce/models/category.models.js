import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    } , {timestamps: true});

export const Category = mongoose.model("Category" , categorySchema); // model k ander jo dete h and jo constant ka name hota h vo same hona chahiye. experience wali baat.