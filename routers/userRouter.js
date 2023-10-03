import express from "express";
import { createUser, deleteUser, getAllUsers, updateUsers } from "../controller/userControllers.js";

const router=express.Router();

router.get('/users',getAllUsers);
router.post('/users',createUser);
router.put('/users/:id',updateUsers)
router.delete('/users/:id', deleteUser)


export default router;