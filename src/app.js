import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()

// cors ka config
app.use(cors({
    origin: process.env.CORS_URL,
    credentials: true
}))

// form bhara ye woh data h
app.use(express.json({limit:"16kb"}))

// ab form le liya h toh ab spacing ka bhi config batao 
// extended just for nested objects without passing the obj it will be fine
app.use(express.urlencoded({extended:true, limit:"16kb"}))

// static bs kuch hum store krna chahte h bs public assets
app.use(express.static("public"))

//to accept the users broswer cookie and set it
app.use(cookieParser())


//routers import
import userRouter from "./routes/user.route.js"



//declaration
app.use("/users", userRouter)


export {app}