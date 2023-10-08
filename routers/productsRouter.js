import express from "express";
import { getAllProducts,createProducts, updateProduct,deletedProduct,   } from "../controller/productController.js";
import { createCart, deletedCart, getAllCartData, updateCart } from "../controller/cartController.js";
const Router=express.Router();

Router.get('/product',getAllProducts);
Router.post('/product',createProducts);
Router.put('/product/:id',updateProduct)
Router.delete('/product/:id', deletedProduct)
Router.post('/cart',createCart)
Router.get('/cart',getAllCartData)
Router.put('/cart/:id',updateCart)
Router.delete('/cart/:id', deletedCart)
export default Router;