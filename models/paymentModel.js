import { Schema, model } from "mongoose";

const paymentSchema = new Schema({});

const Payment = model("Payment", paymentSchema);
export default Payment;
