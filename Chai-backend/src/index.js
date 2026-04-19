// require('dotenv').config({path: './env'}) breaks consistency of code


import dotenv from "dotenv"
import connectDB from "./db/db.js"


dotenv.config();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err) => { // catch is for error and then is for promise
    console.log("MONGO DB connection failed !!! " , err);
    
})
























// IIFE :- Phle semicolon isliye lgaya h bcoz achi practice h . isliye kyunki kai baar apka editor lgana bhul jata h last line pr to is problem ko thik krne k liye we use it.

// First approach to connect DB but isse hmne index file ko kafu polute kr diya h .
 
/*
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

*/



