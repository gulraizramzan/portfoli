import mongoose from "mongoose";

const cartModel= new mongoose.Schema({
    productId:{
        type: String,
        require: true,
    },
    userId:{
        
        type: String,
        require: true,
    },
    productQuantity:{
        
        type:String
    }
})

const cartSchema=mongoose.model("cart",cartModel);
export default cartSchema;