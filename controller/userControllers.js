import userSchema from "../models/usersModel.js";
import getAllUsersServices from "../services/userServices.js";
export const createUser= async (req,res)=>{
    console.log("test for body hit",req.body)
    try {
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

        const userData= new userSchema({
            firstName,
            lastName,
            userName,
            email,
            password,
            profileImage,
            address,
            phoneNumber,
            isAdmin
        })
       await userData.save()
       res.status(200).json(userData)
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}

export const getAllUsers = async (req,res)=>{
    console.log("test for body hit",req.body)
        try {
          const students= await  getAllUsersServices();
            res.status(200).json(students);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }


    export const updateUsers = async (req,res)=>{
        console.log("test for body hit",req.body)
            try {
              const {id}=req.params;
              console.log({id})
              const updateUser= await userSchema.findByIdAndUpdate(id,req.body,{
                new: true
              })
                res.status(200).json(updateUser);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error updating student' });
            }
        }

        export const deleteUser = async (req,res)=>{
            console.log("test for body hit",req.url)
                try {
                    const {id}=req.params
                    const deletedStudent = await userSchema.findOneAndDelete(id);
                    res.json(deletedStudent);
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ message: 'Error deleting student' });
                }
            }