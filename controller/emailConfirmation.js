import { passwordServices, userEMail } from "../services/emailCOnfirmationServices.js"

export const emailConfirmation=async (req,res)=>{
    try {
        const getEmail= await userEMail(req,res)
        if(!getEmail)
        {
            res.status(400).json({message:'user not found'})
        }
        else{
            res.status(200).json({message:'user  found'})
        }
    } catch (error) {
        res.status(400).json({message: 'user not found'})
    }
}


export const resetPassword=async(req,res)=>{
    console.log("reset hit")
try {
    const password= await passwordServices(req,res)
    if(!password){
        res.status(400).json({message:"password incorrect"})
    }
    else{
        
    }
} catch (error) {
    res.status(400).json({message: error.message})
}
}