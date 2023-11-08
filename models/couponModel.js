import { Schema, model } from "mongoose";

const couponSchema = new Schema({});

const Coupon = model("Coupon", couponSchema);
export default Coupon;
