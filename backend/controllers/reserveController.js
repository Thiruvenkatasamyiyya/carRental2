import catchAsyncError from "../middleware/catchAsyncError.js";
import Reserve from "../models/Reserve.js";
import ErrorHandler from "../utils/errorHandler.js";

// post the data
export const postReserver =catchAsyncError( async (req,res) =>{

    // const userId = req.user
    const value = req.user

    const slots = await Reserve.create({
        userId : value,
        ...req.body
    })
    
    res.status(200).json({
        slots
    })

})

// get the data

export const getReserver = catchAsyncError(async(req,res)=>{
    const slots = await Reserve.find({
        userId :req.user
    })

    res.status(200).json({
        slots
    })
})

export const deleteReserve = catchAsyncError(async(req,res)=>{

    let slots = await Reserve.findById(req.params.id);

    if(!slots){
        next(new ErrorHandler("slots not found",404))
    }

    await Reserve.findByIdAndDelete(req.params.id)

    res.status(200).json({
        message : "Deleted successfully"
    })

})