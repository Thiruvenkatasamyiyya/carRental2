
import mongoose from "mongoose";

const ReserveSchema = new mongoose.Schema({
    userId :{
        type : String,
        required : true
    },
    firstName: { 
        type: String,
        required: [true,"Enter the first name"] },
    lastName: { 
        type: String, 
        required: [true,"Enter the last name"] },
    phone: { 
        type: String,
        required: [true, 'Enter the phone number'],
        maxLength :[10,"Phone number not exceed 10 digits"]    
    },
    age: { 
        type: Number,
        required: [true,"Enter the age"]
     },
    email: {
        type: String,
        required: [true,"Enter the emailID"], 
        unique: true
     },
    city: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String,
        required: true 
    },
    zipCode: { 
        type: String,
        required: true
    },
    pickUpDateTime: { 
        type: Date, 
        required: true
     },
    dropOffDateTime: { 
        type: Date, 
        required: true 
    },
    pickUpLocation: { 
        type: String, 
        required: true 
    },
    dropOffLocation: { 
        type: String, 
        required: true 
    },
    car: { 
        type: String, 
        required: true 
    },
},{timestamps:true})

export default mongoose.model('Reserve',ReserveSchema)