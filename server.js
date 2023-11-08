import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";

// initialize an instance of express app
const app = express();
dotenv.config();

// define cors options
const corsOptions = {
  origin: "http://localhost:8091",
};
const PORT = process.env.PORT || 8090;

// database connection
connectDB();

// apply middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "This is my styler backend!" });
});

// listen to the port
app.listen(PORT, () => {
  console.log(`App listening to port: ${PORT}`);
});
