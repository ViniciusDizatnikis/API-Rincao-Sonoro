// Import necessary modules
import express from "express";
import { 
  listSong, 
  getSong, 
  createSong, 
  findSongByArtistId 
} from "../controllers/songController.js";

// Create a router instance
const songRouter = express.Router();

// Define song routes
songRouter.get("/", listSong); // Retrieve all songs
songRouter.get("/:id", getSong); // Retrieve a song by ID
songRouter.get("/artist/:id", findSongByArtistId); // Retrieve songs by artist ID
songRouter.post("/", createSong); // Create a new song

// Export the router
export default songRouter;