import mongoose from "mongoose";

const cartModel= new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
 items:[{
    productId:{type:mongoose.Schema.Types.ObjectId, ref:'products'},
    quantity:{ type: Number, default:0, min: 1,max:10},
    price:{type : Number}
 }],
 dateCreated:{
    type: Date,
    default: Date.now()
 }
})

const cartSchema=mongoose.model("cart",cartModel);
export default cartSchema;