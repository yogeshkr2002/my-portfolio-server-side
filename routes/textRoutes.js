import express from "express";
import {
  addText,
  deleteText,
  getText,
  updateText,
} from "../controllers/textController.js";

const router = express.Router();

// Get all text data
router.get("/", getText);

// Add new Text data
router.post("/", addText);

// Update the Text data
router.put("/:id", updateText);

// Delete the text data
router.delete("/:id", deleteText);

export default router;
