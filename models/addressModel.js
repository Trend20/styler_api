import { Schema, model } from "mongoose";

const addressSchema = new Schema({});

const Address = model("Address", addressSchema);
export default Address;
