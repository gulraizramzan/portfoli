import expess from 'express';
import dotenv from "dotenv";
import bodyparser from 'body-parser';
import userRouter from './routers/userRouter.js'
import dbconnection from './services/dbconnection.js';
import productRouter from './routers/productsRouter.js';

dotenv.config();
const app=expess();
app.use(expess.json());
app.use(bodyparser.json())
app.use('/api',userRouter)
app.use('/api',productRouter)
app.listen(process.env.PORT,()=>{
    console.log(`server is running somthly on port number ${process.env.PORT}`)
})