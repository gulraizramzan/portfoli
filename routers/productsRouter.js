import express from "express";
import { getAllProducts,createProducts, updateProduct,deletedProduct, getSingleProduct, getByCategoery,   } from "../controller/productController.js";
import {  createCart, getAllCartData, getSingle, updateCart, } from "../controller/cartController.js";
const Router=express.Router();

//product routes
Router.get('/product',getAllProducts);
Router.get('/get-single-product/:id',getSingleProduct)
Router.get('/get-by-categoery/:category',getByCategoery)
Router.post('/product',createProducts);
Router.put('/product/:id',updateProduct)
Router.delete('/product/:id', deletedProduct)

// cart routes
Router.post('/create-cart',createCart)
Router.get('/get-all-cart',getAllCartData)
Router.get('/get-cart/:userId',getSingle)
Router.put('/cart/:id',updateCart)
// Router.delete('/cart/:id', deletedCart)
export default Router;