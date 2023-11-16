import mongoose from "mongoose";

const schema = mongoose.Schema;

const messageModel= new schema({
    name:{
        type : String,
        require : true
    },

    email:{
        type : String,
        require : true,
    },
    message:{
        type :  String,
        require : true
    }
});

const messageSchema= mongoose.model("message",messageModel);
export default messageSchema;