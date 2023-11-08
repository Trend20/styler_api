import { Schema, model } from "mongoose";

const inventorySchema = new Schema({});

const Inventory = model("Inventory", inventorySchema);
export default Inventory;
