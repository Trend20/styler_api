import { Schema, model } from "mongoose";

const orderItemSchema = new Schema({});

const OrderItem = model("OrderItem", orderItemSchema);
export default OrderItem;
