// Import necessary modules
import express from "express";
import { 
  listArtist, 
  getArtist, 
  createArtist 
} from "../controllers/artistController.js";

// Create a router instance
const artistRouter = express.Router();

// Define artist routes
artistRouter.get("/", listArtist); // Retrieve all artists
artistRouter.get("/:id", getArtist); // Retrieve an artist by ID
artistRouter.post("/", createArtist); // Create a new artist

// Export the router
export default artistRouter;
