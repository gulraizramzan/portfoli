import mongoose from "mongoose";

const productsModel= new mongoose.Schema({
    productTitle:{
        type :String,
        require: true
    },
    price:{
        type : Number,
        require : true
    },
    category:{
        type : String,
        require : true
    },
    discription:{
        type : String,
        require : true
    },
    image:{
        type : String,
        require: true
    }
})

const productsSchema= mongoose.model("products",productsModel);

export default productsSchema;