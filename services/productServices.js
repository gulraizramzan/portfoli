import productsSchema from "../models/productsModels.js";

// add product
export const productCreateService= async(req,res)=>{
console.log("body hit from add product",req.body)
    const {
        productTitle,
        price,
        discountedPrice,
        category,
        discription,
        image,
        brand,
        rating,
        inventory
        }=req.body;


    const productData= new productsSchema({
        productTitle,
        price,
        discountedPrice,
        category,
        discription,
        image,
        brand,
        rating,
        inventory
    })
   await productData.save()
   return productData
}
//end add product
// get all product
export const getAllProductsServices= async(req,res)=>{

     const products= await  productsSchema.find();
     return products
}
//end get all product
// update product
export const updateProductServices= async(req,res)=>{
    console.log("test for body hit for update",req.body)
    const {id}=req.params;
    console.log({id})
    const updateProduct= await productsSchema.findByIdAndUpdate(id,req.body,{
      new: true
    })
    return updateProduct
}
// end update product
// delete product
export const deleteProductServices=async (req,res)=>{
    const {id}=req.params
    const deletedProduct = await productsSchema.findByIdAndDelete(id);
    return deletedProduct
}

