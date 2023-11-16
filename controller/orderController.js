import orderSchema from "../models/orderModel.js";
import cartSchema from "../models/cartModel.js";
import userSchema from "../models/usersModel.js";
import productsSchema from "../models/productsModels.js";
export const createOrder = async (req, res) => {
  // console.log("request body",req.body)
  try {
    const { userId,shippingAddress, billingAddress} = req.body;
  
    const cart = await cartSchema.findOne({ userId });
 
    if (!cart || !cart.items.length) {
      return res.status(400).send({
        message: "Cart is empty",
        success: false,
      });
    }

    const order = new orderSchema({
      userId,
      items: cart.items, // Copy cart items to order
      status: "Pending",
      shippingAddress:shippingAddress,
      billingAddress:billingAddress
    });


    await order.save();

    console.log(order)
    cart.items = [];

    await cart.save();
    
    

    res.status(200).send({
      message: "Order Created",
      success: true,
      data: order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error", success: false });
  }
};

// get all orders

export const getAllOrder=async(req,res)=>{

  try {
    // const {userId} = req.user;
    let page = req.query.page;
    let pageLimit = req.query.limit
    const orders = await orderSchema.find()
    .populate('userId', 'firstName lastName email ')
    .populate('items.productId', 'productTitle price')
    .skip((page-1)*pageLimit)
    .limit(pageLimit);
    
    res.status(200).json(orders);

} catch (error) {
    res.status(400).json({message: error.message})
}

}