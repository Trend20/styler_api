import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";

// initialize an instance of express app
const app = express();
const PORT = process.env.PORT || 8090;
dotenv.config();

// define cors options
const corsOptions = {
  origin: "http://localhost:8091",
};

// database connection
connectDB();

// apply middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "This is my styler backend!" });
});

// listen to the port
app.listen(PORT, () => {
  console.log(`App listening to port: ${PORT}`);
});
