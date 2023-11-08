import { Router } from "express";
import User from "../models/userModel";

const router = Router();

// login user
router.post("/login", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await User.findOne({ name });
    if (!newUser) {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {}
});

// register user

// reset password

// verify user
