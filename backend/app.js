import express  from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbconnect.js";

import reserveRouter from "./route/reserve.js"
import userRouter from "./route/user.js"
import errorMiddleware from "./middleware/error.js";
import cookieParser from "cookie-parser";

const app = express()

dotenv.config({path : './backend/config/config.env'})

app.use(express.json())
app.use(cookieParser())

connectDatabase()

app.use('/api/v1',reserveRouter)
app.use('/api/v1',userRouter)


app.use(errorMiddleware)
app.listen(process.env.PORT,()=>{
    console.log(`port is running of ${process.env.PORT}`);
})