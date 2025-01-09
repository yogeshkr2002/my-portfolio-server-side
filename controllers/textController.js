import Text from "../models/Text.js";

// Endpoint to get text contents
export const getText = async (req, res) => {
  try {
    const textData = await Text.find();
    res.json(textData); // Send back the data in JSON format
  } catch (error) {
    console.error("Error fetching contact data:", error);
    res.status(500).json({ message: "Failed to fetch data" });
  }
};

// Endpoint to Add text contents
export const addText = async (req, res) => {
  try {
    const newText = new Text(req.body);
    const savedText = await newText.save();
    res.status(201).json(savedText);
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ message: "Failed to add data" });
  }
};

// Endpoint to update text content
export const updateText = async (req, res) => {
  try {
    const updatedText = await Text.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedText) {
      res.status(404).json({ message: "Text not found" });
    }
    res.json(updatedText);
  } catch (error) {
    console.error("Error updating the data :", error);
    res.status(500).json({ message: "Failed to update the data" });
  }
};

// Endpoint to delete text content
export const deleteText = async (req, res) => {
  try {
    const deletedText = await Text.findByIdAndDelete(req.params.id);
    if (!deletedText) {
      res.status(404).json({ message: "Text not found" });
    }
    res.json({ message: "Data deleted successfully" }, deletedText);
  } catch (error) {
    console.error("Error deleting the data :", error);
    res.status(500).json({ message: "Failed to delete the data" });
  }
};
