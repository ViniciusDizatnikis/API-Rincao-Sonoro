// Import services related to artists
import { getAllArtist, getArtistById, addArtist } from "../services/artistService.js";

// List all registered artists
const listArtist = async (req, res) => {
  try {
    const artists = await getAllArtist();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: "Error fetching artists" });
  }
};

// Get a specific artist by ID
const getArtist = async (req, res) => {
  try {
    const artist = await getArtistById(req.params.id);
    artist ? res.json(artist) : res.status(404).json({ message: "Artist not found" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching artist" });
  }
};

// Create a new artist
const createArtist = async (req, res) => {
  try {
    const { image, name, banner, password } = req.body;
    const newArtist = await addArtist(image, name, banner, password);
    res.status(201).json(newArtist);
  } catch (error) {
    res.status(500).json({ message: "Error creating artist" });
  }
};

// Export functions to be used in routes
export { listArtist, getArtist, createArtist };