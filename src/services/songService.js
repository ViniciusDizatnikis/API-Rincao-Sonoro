// Import database client
import prisma from "../database/prisma.js";

// Retrieve all songs from the database
const getAllSong = async () => {
  try {
    return await prisma.songs.findMany();
  } catch (error) {
    return {
      error: "Error fetching songs.",
      status: 404,
      errorMessage: error.message,
    };
  }
};

// Retrieve a specific song by ID
const getSongById = async (id) => {
  try {
    const song = await prisma.songs.findUnique({ where: { id } });
    if (!song) {
      throw new Error("Song not found.");
    }
    return song;
  } catch (error) {
    return {
      error: "Error fetching song.",
      id: id,
      status: 404,
      errorMessage: error.message,
    };
  }
};

// Retrieve all songs by a specific artist ID
const getSongsByArtistId = async (id) => {
  try {
    const songs = await prisma.songs.findMany({
      where: { artist: id },
    });
    if (!songs.length) {
      throw new Error("Songs not found.");
    }
    return songs;
  } catch (error) {
    return {
      error: "Error fetching songs.",
      idArtist: id,
      status: 404,
      errorMessage: error.message,
    };
  }
};

// Add a new song to the database
const addSong = async (image, name, duration, artist, audio, password) => {
  try {
    const createPassword = process.env.CREATE_PASSWORD;

    if (!createPassword) {
      throw new Error("Creation password not found.");
    }

    if (createPassword !== password) {
      return "Incorrect password.";
    }

    return await prisma.songs.create({
      data: { image, name, duration, artist, audio },
    });
  } catch (error) {
    return {
      error: "Error adding song.",
      name: name,
      status: 500,
      errorMessage: error.message,
    };
  }
};

// Export service functions
export { getAllSong, getSongById, addSong, getSongsByArtistId };