import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import offerRoutes from './routes/specialOffersRoutes.js';
import trendingOfferRoutes from './routes/trendingItemRoutes.js';
import path from 'path';
import fs from 'fs';

dotenv.config();
const app = express();

// Get the current working directory
const baseDir = process.cwd();

// Resolve the path for the 'uploads' directory
const uploadsDir = path.join(baseDir, 'uploads');
console.log('Resolved uploads directory:', uploadsDir); // Debugging: print the resolved path

// Check if the uploads directory exists, if not, create it
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('Uploads directory created');
} else {
  console.log('Uploads directory already exists');
}

// Setup multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Ensure the uploads path is correct
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use timestamp and original extension
  },
});

const upload = multer({ storage });

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(uploadsDir)); // Serve files from the correct uploads folder

// Routes
app.use('/api/specialoffers', offerRoutes);
app.use('/api/trendingoffers', trendingOfferRoutes);

// MongoDB Connection
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

// Start server
startServer();
