import mongoose from "mongoose";

const schema = mongoose.Schema;

const orderModel = new schema(
  {
    shippingAddress:{
      type: String
    },
    billingAddress:{
      type: String
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ], // Array of order items
    status: {
      type: String,
      default: "Pending",
    },

    dateCreated:{
      type: Date,
      default: Date.now()
   }
  },

);

const orderSchema = mongoose.model("orders", orderModel);

export default orderSchema;
