import mongoose from 'mongoose';
import { DB_NAME } from './constants';
import express from "express"
const app = express()

// IIFE :- Phle semicolon isliye lgaya h bcoz achi practice h . isliye kyunki kai baar apka editor lgana bhul jata h last line pr to is problem ko thik krne k liye we use it.

// First approach to connect DB but isse hmne index file ko kafu polute kr diya h .
 
;(async () =>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI} / ${DB_NAME}`)
        app.on("error" , () => {
            console.log("Error: " , error);
            throw error
        })

        app.listen(process.env.PORT , () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log("ERROR: ", error);
    }
})() 

