import cartSchema from "../models/cartModel.js";
import productsSchema from "../models/productsModels.js";
import { deleteProductServices, getAllProductsServices, productCreateService, updateProductServices } from "../services/productServices.js";

// create product
export const createProducts= async (req,res)=>{
    console.log("test for body hit",req.body)
    try {
        await productCreateService(req,res)
       res.status(200).json(" product added")
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
// get all product
export const getAllProducts = async (req,res)=>{
    console.log("test for body hit",req.url)
        try {
          const products= await  getAllProductsServices();
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
// get single product
    export const getSingleProduct = async (req, res) => {
        try {
          const productId = req.params.id;
          const response = await productsSchema.findById(productId);
          if (!response) {
            return res.status(404).send({
              message: "Product  not found",
              success: false,
            });
          }
          res.status(200).send({
            message: "Product Data fetch Succesfully",
            success: true,
            data: response,
          });
        } catch (error) {
          return res.status(500).send({
            message: "Internal Server Error",
            success: false,
          });
        }
      };

      export const getByCategoery = async (req, res) => {
        console.log("hit for category",req.body)
        try {
          const category = req.params.category;
          const response = await productsSchema.find({category});
          if (!response) {
            return res.status(404).send({
              message: "Product  not found",
              success: false,
            });
          }
          res.status(200).send({
            message: "Product Data fetch Succesfully",
            success: true,
            data: response,
          });
        } catch (error) {
          return res.status(500).send({
            message: "Internal Server Error",
            success: false,
          });
        }
      };

      // update
    export const updateProduct = async (req,res)=>{
       
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


           

            