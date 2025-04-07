import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true,"Enter the name"],
        maxLength :[50,"Name not existed 50 characters"]
    },
    email:{
        type : String,
        required : [true,"Enter the email id "],
        unique : true
    },
    password :{
        type : String,
        required : [true, " Enter the password"],
        minLength :[6,"Password must atleast 6 characters"]
    
    },
},{timestamps : true})

// password encryption

UserSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        return next()
    }
    this.password = await bcrypt.hash(this.password,10)
    next()
})

// compare the password

UserSchema.methods.comparePassword = async function(checkpassword){
    return await bcrypt.compare(checkpassword,this.password)
}


// return the tokens 

UserSchema.methods.getTokens = async function(){
    return jwt.sign({id:this._id},process.env.SECRET_KEY,{
        expiresIn : "1h"
    })
}

export default mongoose.model('User',UserSchema)