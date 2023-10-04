import express from "express";
import { getAllProducts,createProducts, updateProduct,deletedProduct  } from "../controller/productController.js";

const productRouter=express.Router();

productRouter.get('/product',getAllProducts);
productRouter.post('/product',createProducts);
productRouter.put('/product/:id',updateProduct)
productRouter.delete('/product/:id', deletedProduct)


export default productRouter;