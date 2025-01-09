import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { comparePasswords } from "../utils/authUtils.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2. Compare provided password with hashed password
    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 3. Generate a JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET, // Store this in an `.env` file
      { expiresIn: "1h" }
    );

    // 4. Send the token back to the client
    res.status(200).json({ token, user: { id: user._id, email: user.email } });
  } catch (err) {
    console.error("Login error:", err); // Log the error for debugging
    res.status(500).json({ message: "Server error" });
  }
});

// Logout route
router.post("/logout", (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
});

export default router;
