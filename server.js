import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

// initialize an instance of express app
const app = express();
const PORT = process.env.PORT || 8090;
dotenv.config();

// apply middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// listen to the port
app.listen(PORT, () => {
  console.log(`App listening to port: ${PORT}`);
});
