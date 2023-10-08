import express from "express"
import userSchema from "../models/usersModel.js";
import bcrypt from "bcrypt"


export const getAllUsersServices= ()=>{
return  userSchema.find()
}

export const createUserServices= async(req,res)=>{
    console.log("request from services")

        const {
            firstName,
            lastName,
            userName,
            email,
            password,
            profileImage,
            address,
            phoneNumber,
            isAdmin}=req.body;
const hashPassword= await bcrypt.hash(password,10);
if(!firstName || !lastName || !userName || !email || !password )
{
   res.status(400).json({message:"fill requier fileds"})
}
const exsistingUser= await userSchema.findOne({email});

if(exsistingUser){
    res.status(400).json({message:"user already exist"})
}
else {
        const userData= new userSchema({
            firstName,
            lastName,
            userName,
            email,
            password:hashPassword,
            profileImage,
            address,
            phoneNumber,
            isAdmin
        })
       await userData.save();
       return userData
  
}}

export const deleteUserServices= async (req,res)=>{
    const {id}=req.params
    // const user= await userSchema.findById({_id});
    // console.log("user not fount",user)
    // if(user != _id)
    // {
    //     res.status(400).json({message:"user not found"})
    // }
    // else{
    const deleteUser = await userSchema.findOneAndDelete(id);
    return deleteUser
}
// }

export const updateUserServices= async (req,res)=>{

    const {id}=req.params;
    console.log({id})
    const updateUser= await userSchema.findByIdAndUpdate(id,req.body,{
      new: true
    })
    return updateUser;
}