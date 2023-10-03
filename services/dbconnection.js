import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
 
const dbconnection=mongoose.connect(process.env.MONGO_URL)

mongoose.connection.on("connected",()=>{
    console.log("Database connected")
})

export default dbconnection