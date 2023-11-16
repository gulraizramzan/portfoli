import { createCartServices, getAllCartServices, getSingleCart, updateCartServices, } from "../services/cartServices.js"

export const createCart= async (req,res)=>{
try {
    await createCartServices(req,res)
    res.status(200).json("cart created")
} catch (error) {
    res.status(400).json({message: error.message})
}
}


export const getAllCartData=async (req,res)=>{
try {
    const cartProductsData= await getAllCartServices(req,res)
    res.status(200).json(cartProductsData)
} catch (error) {
    res.status(400).json({message : error.message})
}
}



export const updateCart = async (req,res)=>{
    console.log("test for body hit",req.body)
        try {
            await updateCartServices(req,res)
            res.status(200).json(" item  updated");
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error updating cart' });
        }
    }

    // export const deletedCart = async (req,res)=>{
    //     console.log("test for body hit",req.url)
    //         try {
                
    //             await deleteCartServices(req,res);
    //             res.json("item deleted");
    //         } catch (error) {
    //             console.error(error);
    //             res.status(500).json({ message: 'Error deleting cart' });
    //         }
    //     }

        // export const adToCart= async (req,res)=>{
        //     try {
        //         await addToCartServices(req,res)
        //         res.status(200).json("cart created")
        //     } catch (error) {
        //         res.status(400).json({message: error.message})
        //     }
        //     }
    export const getSingle=async(req,res)=>{
        try {
           const cart= await getSingleCart(req,res)
            if (!cart) {
                return res.status(401).send({
                  message: "Cart not Found",
                  success: false,
                });
              }
          
              res.status(200).send({
                message: "Carts retrieved successfully",
                success: true,
                data: cart,
              });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: "Internal Server Error",
                success: false,
              });
        }
    }