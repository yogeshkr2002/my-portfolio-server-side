import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import textRoutes from "./routes/textRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoutes);
app.use("/api/text", textRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
