import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        addressLine1L:{
            type: String
        },
        addressLine2: {
            type: String
        },
        city: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        },
        specializedIn: [
            {
                type: String
            }
        ]
    } , {timestamps: true});

export const Hospital = mongoose.model("Hospital" , hospitalSchema);