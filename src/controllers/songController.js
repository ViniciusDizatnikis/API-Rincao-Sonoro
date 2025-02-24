// Import services related to songs
import { getAllSong, getSongById, addSong, getSongsByArtistId } from "../services/songService.js";

// List all songs
const listSong = async (req, res) => {
  try {
    const songs = await getAllSong();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching songs" });
  }
};

// Get a specific song by ID
const getSong = async (req, res) => {
  try {
    const song = await getSongById(req.params.id);
    song ? res.json(song) : res.status(404).json({ message: "Song not found" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching song" });
  }
};

// Create a new song
const createSong = async (req, res) => {
  try {
    const { image, name, duration, artist, audio, password } = req.body;
    const newSong = await addSong(image, name, duration, artist, audio, password);
    res.status(201).json(newSong);
  } catch (error) {
    res.status(500).json({ message: "Error creating song" });
  }
};

// Get songs by artist ID
const findSongByArtistId = async (req, res) => {
  try {
    const songs = await getSongsByArtistId(req.params.id);
    songs ? res.json(songs) : res.status(404).json({ message: "Songs not found" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching songs by artist" });
  }
};

// Export functions to be used in routes
export { listSong, getSong, createSong, findSongByArtistId };
