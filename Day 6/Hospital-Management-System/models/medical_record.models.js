import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        diagonosedWith: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        },
        bloodGroup: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true,
            enum: ["M" , "F" , "O"]
        },
        admittedIB: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    } , {timestamps: true});

export const Medical_Records = mongoose.model("Medical_Records" , medicalRecordSchema);