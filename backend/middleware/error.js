import ErrorHandler from "../utils/errorHandler.js"

export default (err,req,res,next)=>{

    let error ={
        message : err.message || 'Internal server error',
        statusCode : err.statusCode || 500
    }
    if(err.code == "11000"){
        error = new ErrorHandler(`duplicated ${Object.keys(err.keyValue)}`,400)
    }
    res.status(400).json({
        message : error.message,
        error : err
    })
}