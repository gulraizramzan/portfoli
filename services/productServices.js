import productsSchema from "../models/productsModels.js";

export const productCreateService= async(req,res)=>{

    const {
        productTitle,
        price,
        category,
        discription,
        image
        }=req.body;

    const productData= new productsSchema({
        productTitle,
        price,
        category,
        discription,
        image
    })
   await productData.save()
   return productData
}

export const getAllProductsServices= async(req,res)=>{

     const products= await  productsSchema.find();
     return products
}

export const updateProductServices= async(req,res)=>{
    const {id}=req.params;
    console.log({id})
    const updateProduct= await productsSchema.findByIdAndUpdate(id,req.body,{
      new: true
    })
    return updateProduct
}

export const deleteProductServices=async (req,res)=>{
    const {id}=req.params
    const deletedProduct = await productsSchema.findOneAndDelete(id);
    return deletedProduct
}

