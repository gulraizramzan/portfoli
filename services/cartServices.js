import cartSchema from "../models/cartModel.js";
import userSchema from "../models/usersModel.js";
import productsSchema from "../models/productsModels.js";

export const createCartServices = async (req, res) => {
  console.log("hit for ",req.body)
  try {
    const { userId, items } = req.body;

    let cart = await cartSchema.findOne({ userId });
    if (!cart) {
      cart = new cartSchema({ userId, items });
    } else {
      for (const newItem of items) {
        const existingItem = cart.items.find((item) => {
          if (item.productId) {
            return item.productId.toString() === newItem.productId.toString();
          }
          return false;
        });

        if (existingItem) {
          existingItem.quantity += newItem.quantity;
          
        } else {
          cart.items.push(newItem);
        }
      }
    }

    await cart.save();

    // res.status(200).send({
    //   message: "Cart Created",
    //   success: true,
    //   data: cart,
    // });
  } catch (error) {
    console.log(error);
    // res.status(500).send({ message: "Internal Server Error", success: false });
  }
};
// get carts

export const getAllCartServices = async (req, res) => {
//   console.log("hit for cart data")

//   try{
//     const {userId} = req.params;
//     let page = req.query.page;
//     let pageLimit = req.query.limit
//     const cart = await cartSchema.findOne(userId)
//     .populate('userId', 'firstName lastName email')
//     .populate('items.productId', 'productTitle price image')
//     .skip((page-1)*pageLimit)
//     .limit(pageLimit);

//     if (!cart) {
//         return res.status(404).json({message: "Cart doesn't exist for the user."})
//     }
    
//     return(cart);

// } catch (error){
//     res.status(500).json(error.message);
//     console.log(error)
// }


};

// get single cart

export const getSingleCart = async (req, res) => {
  console.log("get cart hit",req.body)
  try {
    const { userId } = req.params;
    
   console.log(userId)

    const cart = await cartSchema.findOne({userId})
    .populate('userId', 'firstName lastName email')
    .populate('items.productId', 'productTitle price image')

    return cart

  } catch (error) {
    console.error(error);

  }
};

// update multiple carts
export const updateCartServices = async (req, res) => {
  try {
    const { carts } = req.body;

    for (const cartItem of carts) {
      const { cartId, items } = cartItem;

      const cart = await cartSchema.findOne({ _id: cartId });

      if (cart) {
        for (const newItem of items) {
          const chexkExistingItem = cart.items.find((item) => {
            return item.productId.toString() === newItem.productId;
          });
          if (chexkExistingItem) {
            chexkExistingItem.quantity += newItem.quantity;
          } else {
            cart.items.push(newItem);
          }
        }
        await cart.save();
      }
    }
    res.status(200).send({
      message: "Carts updated successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", success: false });
  }
};