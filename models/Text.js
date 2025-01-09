import mongoose from "mongoose";

// Card schema
const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  button: {
    type: String,
    required: true,
  },
});

// Social schema
const socialLinkSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true, // e.g., "Facebook", "Instagram"
  },
  url: {
    type: String,
    required: true, // The anchor link
  },
  icon: {
    type: String,
    required: true, // The image source path
  },
});

// Project schema
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title of the project
  },
  desc: {
    type: String,
    required: true, // Description of the project
  },
  buttonText: {
    type: String,
    default: "See Demo", // Text for the button
  },
});

// Contact schema
const contactItemSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true, // e.g., "Mail", "Address", "Phone"
  },
  text: {
    type: String,
    required: true, // e.g., "hello@react.dev", "Hello street New York"
  },
});

//  ===================================================

const textSchema = new mongoose.Schema({
  navbarName: {
    type: String,
  },
  socialLinks: [socialLinkSchema], // Array of social media links
  name: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  homePageLeftBtn: {
    type: String,
    required: true,
  },
  homePageRightBtn: {
    type: String,
    required: true,
  },

  serviceHeading: {
    type: String,
    required: true,
  },

  serviceSubTitle1: {
    type: String,
    required: true,
  },
  serviceSubTitle2: {
    type: String,
  },
  serviceTitles: {
    boldWithHover: [String], // Array for bold titles with hover
    simple: [String], // Array for simple titles
  },
  serviceTopRightBtn: {
    type: String,
  },
  serviceCards: [cardSchema], // Array of service card objects
  portfolioHeading: {
    type: String,
    required: true,
  },
  portfolioTitle: {
    type: String,
    required: true,
  },
  projects: [projectSchema], // Array of projects
  contactTitle: {
    type: String,
    required: true, // e.g., "Let’s work together"
  },
  contactItems: [contactItemSchema], // Array of contact items
});

const Text = mongoose.model("Text", textSchema);
export default Text;
