// Import database client
import prisma from "../database/prisma.js";

// Retrieve all artists from the database
const getAllArtist = async () => {
  try {
    return await prisma.artists.findMany();
  } catch (error) {
    return {
      error: "Error fetching artists.",
      status: 404,
      errorMessage: error.message,
    };
  }
};

// Retrieve a specific artist by ID
const getArtistById = async (id) => {
  try {
    const artist = await prisma.artists.findUnique({ where: { id } });
    if (!artist) {
      throw new Error("Artist not found.");
    }
    return artist;
  } catch (error) {
    return {
      error: "Error fetching artist.",
      id: id,
      status: 404,
      errorMessage: error.message,
    };
  }
};

// Add a new artist to the database
const addArtist = async (image, name, banner, password) => {
  try {
    const createPassword = process.env.CREATE_PASSWORD;

    if (!createPassword) {
      throw new Error("Creation password not found.");
    }

    if (createPassword !== password) {
      return "Incorrect password.";
    }

    return await prisma.artists.create({
      data: { image, name, banner },
    });
  } catch (error) {
    return {
      error: "Error adding artist.",
      status: 500,
      errorMessage: error.message,
    };
  }
};

// Export service functions
export { getAllArtist, getArtistById, addArtist };
