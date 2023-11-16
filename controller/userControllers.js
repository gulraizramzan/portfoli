import userSchema from "../models/usersModel.js";
import {getAllUsersServices, createUserServices, deleteUserServices, updateUserServices} from "../services/userServices.js";
import  Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"


export const createUser= async (req,res)=>{
    console.log("test for body hit from controller",req.body)
    try {
        const user = await createUserServices(req,res)
       res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
// all user data
export const getAllUsers = async (req,res)=>{
   
        try {
          const getAlluser= await  getAllUsersServices();
            res.status(200).json(getAlluser);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
// singal user data

export const getSingalUser=async(req,res)=>{
    try {
        const userId = req.params.id;
        const user = await userSchema.findById(userId);
        if (!user) {
          return res.status(404).send({
            message: "User not found",
            success: false,
          });
        }
        res.status(200).send({
          message: "User Data fetch Succesfully",
          success: true,
          data: user,
        });
      } catch (error) {
        return res.status(500).send({
          message: "Internal Server Error",
          success: false,
        });
      }
}

    export const updateUsers = async (req,res)=>{
        console.log("test for body hit",req.body)
            try {
             await updateUserServices(req,res)
                res.status(200).json("user updated");
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error updating user' });
            }
        }

        export const deleteUser = async (req,res)=>{
            console.log("test for body hit",req.url)
                try {
                  await deleteUserServices(req,res)
                  res.status(200).json({message:'user deleted'})
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ message: 'Error deleting user' });
                }
            }

            export const loginUser= async(req,res)=>{
                console.log(req)
                try {
                    const {email,password}=req.body

                    const user= await userSchema.findOne({email});
                    if(!user){
                     return   res.status(400).json({message:"user not found"})
                    }

                    const passwordMatch=  bcrypt.compare(password, user.password)

                    if(!passwordMatch)
                    {
                        return res.status(400).json({message:"password incorrect"})
                    }

                    const token=Jwt.sign({userId: user._id, email:user.email},process.env.SCRET_CODE,{expiresIn:'1h'});
                    res.status(200).json({message:'login successfuly', token,user})
                } catch (error) {
                    res.status(400).json({message:'login faild', error:error.message})
                }
            }