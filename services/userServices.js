import userSchema from "../models/usersModel.js";

const getAllUsersServices= ()=>{
return  userSchema.find()
}

export default getAllUsersServices