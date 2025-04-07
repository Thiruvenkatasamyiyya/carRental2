import User from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "./catchAsyncError.js";
import jwt from "jsonwebtoken";


export const isAuthorized = catchAsyncError(async(req,res,next)=>{

    const {token} = req.cookies

    if(!token){
        return next(new ErrorHandler("Login first to access the resources",401));
    }

    const decoded = jwt.verify(token,process.env.SECRET_KEY)


    const userObj =  await User.findById(decoded.id)

    req.user =  userObj._id

    next()
})