import express from "express";
import jwt from 'jsonwebtoken'
import { createUser, deleteUser, getAllUsers, updateUsers,loginUser } from "../controller/userControllers.js";

const router=express.Router();

const middelWare=(req,res,next)=>{
    let token;
    let authHeader=req.headers.Authorization  || req.headers.authorization;
    token=authHeader.split(" ")[1];
    jwt.verify(token,process.env.SCRET_CODE,(err,result)=>{
        if(err){
            res.status(400).json({message: err.message})
        }
        console.log("successfuly");
        next()
    })
}

router.get('/users',getAllUsers);
router.post('/users',createUser);
router.put('/users/:id',updateUsers);
router.delete('/users/:id', deleteUser);
router.post('/users-login',loginUser);

export default router;