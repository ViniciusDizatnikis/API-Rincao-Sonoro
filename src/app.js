import express from "express";
import cors from "cors";
import path from "path";

// Route imports
import artistRouter from "./routes/artistRoutes.js";
import songRouter from "./routes/songRoutes.js";

const app = express();

// Middleware configurations
app.use(cors());
app.use(express.json());

// Static files configuration
const publicPath = path.resolve(path.dirname(''), 'src', 'public');
app.use(express.static(publicPath));

// API routes
app.use("/artists", artistRouter);
app.use("/songs", songRouter);

// Main route
app.get("/", (req, res) => {
    const indexPath = path.join(publicPath, 'index.html');
    res.sendFile(indexPath);
});

export default app;
