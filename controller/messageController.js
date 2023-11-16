import messageSchema from "../models/messageModel.js";



export const messageRecevier=async(req,res)=>{
try {
    const {name, email, message}=req.body

    const sendMessage= new messageSchema({
        name,
        email,
        message
    })

    const messageSend=await sendMessage.save()
    res.status(200).send({
        message: "messeage received",
        success: true,
        data: messageSend,
      });
} catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error", success: false });
}
}
// all message
export const allMessage=async(req,res)=>{
    try {
        const allMessageReceived= await messageSchema.find()
        res.status(200).send({
            message: "message retrive",
            success: true,
            data: allMessageReceived,
          });
    } catch (error) {
        console.error(error);
    res.status(500).send({ message: "Internal Server Error", success: false });
    }
}
// delete message
export const dellMessage=async(req,res)=>{
    try {
        const{id}=req.params
        const allMessageReceived= await messageSchema.findByIdAndDelete(id)
        res.status(200).send({
            message: "message deleted",
            success: true,
            data: allMessageReceived,
          });
    } catch (error) {
        console.error(error);
    res.status(500).send({ message: "Internal Server Error", success: false });
    }
}