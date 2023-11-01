import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectionUrl = process.env.MONGO_URL;

const connectDB = () => {
  mongoose
    .connect(connectionUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("Database connected successfully!"))
    .catch((err) => console.log(err.message || "Database connection failed"));
};

export default connectDB;
