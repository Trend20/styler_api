import { Schema, model } from "mongoose";

const cartSchema = new Schema({});

const Cart = model("Cart", cartSchema);
export default Cart;
