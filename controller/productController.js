import productsSchema from "../models/productsModels.js";

export const createProducts= async (req,res)=>{
    console.log("test for body hit",req.body)
    try {
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
       res.status(200).json(productData)
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}

export const getAllProducts = async (req,res)=>{
    console.log("test for body hit",req.url)
        try {
          const products= await  productsSchema.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }


    export const updateProduct = async (req,res)=>{
        console.log("test for body hit",req.body)
            try {
              const {id}=req.params;
              console.log({id})
              const updateProduct= await productsSchema.findByIdAndUpdate(id,req.body,{
                new: true
              })
                res.status(200).json(updateProduct);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error updating student' });
            }
        }

        export const deletedProduct = async (req,res)=>{
            console.log("test for body hit",req.url)
                try {
                    const {id}=req.params
                    const deletedProduct = await productsSchema.findOneAndDelete(id);
                    res.json(deletedProduct);
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ message: 'Error deleting student' });
                }
            }