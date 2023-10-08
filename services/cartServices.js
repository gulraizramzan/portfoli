
import cartSchema from "../models/cartModel.js";
import userSchema from "../models/usersModel.js";
import productsSchema from "../models/productsModels.js";




export const createCartServices = async (req, res) => {
   
      const { productId, userId, productQuantity } = req.body;
  
      const checkUser = await userSchema.findById(userId);
      if (!checkUser) {
        return res.status(401).send({
          message: "User Not found",
          success: false,
        });
      }
  
      const checkProduct = await productsSchema.findById(productId);
      if (!checkProduct) {
        return res.status(401).json({message : "product not foind"});
      }
  
      const newCart = new cartSchema({ productId, userId,  productQuantity });
      await newCart.save();
    return newCart

  };

  export const getAllCartServices= async(req,res)=>{

    const cartsData= await  cartSchema.find();
    return cartsData
}

export const updateCartServices= async (req,res)=>{
    const {id}=req.params;
    console.log({id})
    const updateCart= await cartSchema.findByIdAndUpdate(id,req.body,{
      new: true
    })
    return updateCart
}

export const deleteCartServices= async (req,res)=>{
    const {id}=req.params
    const deletedProduct = await cartSchema.findOneAndDelete(id);
    return deletedProduct
}