import catchAsyncError from "../middleware/catchAsyncError.js";
import User from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/tokens.js";

//register user
export const register = catchAsyncError(async(req,res)=>{
    const {name,email,password} = req.body;

    const addedUser = await User.create({
        name,
        email,
        password
    })

    res.status(200).json({
        addedUser
    })
})

// login user

export const login = catchAsyncError(async(req,res,next)=>{
    const {email,password} = req.body

    if(!email || !password){
        return next(new ErrorHandler("Enter the email and password",400))
    }
    const check = await User.findOne({email})

    if(!check){
        return next(new ErrorHandler("Invalid email ",401))
    }

    const isCorrectPsw = await check.comparePassword(password)
    
    if(!isCorrectPsw){
        return next(new ErrorHandler("Invalid password" ,401))
    }

    sendToken(check,201,res)

})


// logout user


export const logout = catchAsyncError(async (req,res) =>{
    
    res.status(200).cookie("token",null,{
        expires : new Date(
            Date.now()
        ) 
    }).json({
        message : "logged out"
    })
})