import mongoose from "mongoose";

const userModel= new mongoose.Schema({
    firstName:{
        type: String,
        require: true,
    },
    lastName:{
        
        type: String,
        require: true,
    },
    email:{
        
        type:String,
        require: true,
    },
    password:{
        
        type:String,
        require: true,
    },
    userName:{
        
        type:String
    },
    profileImage:{
        
        type:String
    },
    address:{
        
        type:String,
        
    },
    phoneNumber:{
        
        type:String,
       
    },
    isAdmin:
    {
        type: String,
        default : false
    },
    dateCreated:{
        type: Date,
        default: Date.now()
     }
})

const userSchema=mongoose.model("users",userModel);
export default userSchema;