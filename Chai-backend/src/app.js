import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

// Use method sare k sare middlewares and configration k liye use krte h .
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true , limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// Importing Routes

import userRouter from './routes/user.routes.js'

// https://localhost:5000/api/v1/users/register -> yaha se testing kr skte..



// router declaration
app.use("/api/v1/users" , userRouter)


export {app}