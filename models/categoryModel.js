import { Schema, model } from "mongoose";

const categorySchema = new Schema({});

const Category = model("Category", categorySchema);
export default Category;
