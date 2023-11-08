import { Schema, model } from "mongoose";

const ratingSchema = new Schema({});

const Rating = model("Rating", ratingSchema);
export default Rating;
