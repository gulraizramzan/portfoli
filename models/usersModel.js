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
    userName:{
        
        type:String
    },
    email:{
        
        type:String,
        require: true,
    },
    password:{
        
        type:String,
        require: true,
    },
    profileImage:{
        
        type:String
    },
    address:{
        
        type:String,
        require: true,
    },
    phoneNumber:{
        
        type:String,
        require: true,
    },
    isAdmin:
    {
        type: String
    }
})

const userSchema=mongoose.model("users",userModel);
export default userSchema;