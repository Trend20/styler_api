import { Schema, model } from "mongoose";

const refundSchema = new Schema({});

const Refund = model("Refund", refundSchema);
export default Refund;
