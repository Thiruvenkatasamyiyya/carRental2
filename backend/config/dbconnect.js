import mongoose from "mongoose";

export const connectDatabase =()=>{
    mongoose.connect("mongodb+srv://thiruvenkatasamyiyya:thiruvenkatam@cluster0.i16j9.mongodb.net/carRental")
    .then((con)=>{
        console.log(`MongoDB  is connected with ${con.connection.host}`);
    })
}