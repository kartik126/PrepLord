import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

const CartItem = mongoose.models.CartItem ||  mongoose.model("CartItem", cartItemSchema);

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  totalPrice: {
    type: Number,
    default: 0,
  },
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export { Cart, CartItem };
