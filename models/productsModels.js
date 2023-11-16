import mongoose from "mongoose";

const productsModel= new mongoose.Schema({
    productTitle:{
        type :String,
        unique: true,
        require: true
    },
    price:{
        type : Number,
        require : true
    },
    discountedPrice:{
        type: Number,
        default : 0
    },
    category:{
        type : String,
        require : true
    },
    discription:{
        type : String,
        require : true
    },
    image:[{
        type : String
    }],
    brand:{
        type : String,
        require : true
    },
    rating:{
        type : Number,
        default : 0
    },
    inventory:{
        type : Number,
        default: 0
    },
    dateCreated:{
        type: Date,
        default: Date.now()
     }
    
})

const productsSchema= mongoose.model("products",productsModel);

export default productsSchema;