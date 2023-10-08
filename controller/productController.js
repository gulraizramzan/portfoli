import cartSchema from "../models/cartModel.js";
import { deleteProductServices, getAllProductsServices, productCreateService, updateProductServices } from "../services/productServices.js";

export const createProducts= async (req,res)=>{
    console.log("test for body hit",req.body)
    try {
        await productCreateService(req,res)
       res.status(200).json(" product added")
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}

export const getAllProducts = async (req,res)=>{
    console.log("test for body hit",req.url)
        try {
          const products= await  getAllProductsServices();
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }


    export const updateProduct = async (req,res)=>{
        console.log("test for body hit",req.body)
            try {
                await updateProductServices(req,res)
                res.status(200).json(" product updaed");
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error updating student' });
            }
        }

        export const deletedProduct = async (req,res)=>{
            console.log("test for body hit",req.url)
                try {
                    
                    await deleteProductServices(req,res);
                    res.json("product deleted");
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ message: 'Error deleting student' });
                }
            }


           

            