import bcrypt from "bcrypt"
import userSchema from "../models/usersModel.js";

export const userEMail =async (req,res)=>{
    const {email}=req.params;
    const matchEmail= await userSchema.findOne({email})
   return matchEmail
}

export const passwordServices=async (req,res)=>{
    const {id,password}= req.params
    const user= await userSchema.findById({id})
    const matchpassword=  bcrypt.compare(password,user.password)
    return matchpassword
}