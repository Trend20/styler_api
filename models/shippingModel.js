import { Schema, model } from "mongoose";

const shippingSchema = new Schema({});

const Shipping = model("Shipping", shippingSchema);
export default Shipping;
