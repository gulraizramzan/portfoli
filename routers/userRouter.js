import express from "express";
import middelWare from "../middelWare/middelWare.js";
import { createUser, deleteUser, getAllUsers, updateUsers,loginUser, getSingalUser } from "../controller/userControllers.js";
import { emailConfirmation, resetPassword } from "../controller/emailConfirmation.js";
import { createOrder, getAllOrder } from "../controller/orderController.js";
import { allMessage, dellMessage, messageRecevier } from "../controller/messageController.js";

const router=express.Router();

// user route
router.get('/users',getAllUsers);
router.get('/user/:id',getSingalUser)
router.post('/create-users',createUser);
router.put('/users/:id',updateUsers);
router.delete('/users/:id', deleteUser);
router.post('/user-login',loginUser);
router.post('/forgot/:email',emailConfirmation)
router.put('/reset/:id',resetPassword)

// order route

router.post('/order',createOrder)
router.get('/get-all-order',getAllOrder)
//message route
router.post('/message',messageRecevier)
router.get('/all-message',allMessage)
router.delete('/dell-message/:id',dellMessage)
export default router;