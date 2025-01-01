import Offer from '../models/SpecialOffer.js';
import multer from 'multer';
import path from 'path';
import { promisify } from 'util';

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  },
}).single('image');

// Promisify multer's upload function
const uploadAsync = promisify(upload);

// Create a new offer
export const createOffer = async (req, res) => {
  try {
    await uploadAsync(req, res); // Handle file upload

    const { title, description, discount, validUntil, imageUrl: directUrl } = req.body;

    // Validation
    if (!title || !description || !discount || !validUntil) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Use uploaded file's URL if provided, else use the direct URL from the request body
    const imageUrl = req.file
      ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
      : directUrl;

    if (!imageUrl) {
      return res.status(400).json({ message: 'Image file or URL is required' });
    }

    const newOffer = new Offer({
      title,
      description,
      discount,
      validUntil,
      imageUrl,
    });

    await newOffer.save();
    res.status(201).json(newOffer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all offers
export const getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific offer by ID
export const getOffer = async (req, res) => {
  const { id } = req.params;
  try {
    const offer = await Offer.findById(id);
    if (!offer) return res.status(404).json({ message: 'Offer not found' });
    res.status(200).json(offer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an offer
export const updateOffer = async (req, res) => {
  const { id } = req.params;
  const { title, description, discount, validUntil } = req.body;
  try {
    const updatedOffer = await Offer.findByIdAndUpdate(
      id,
      { title, description, discount, validUntil },
      { new: true }
    );
    if (!updatedOffer) return res.status(404).json({ message: 'Offer not found' });
    res.status(200).json(updatedOffer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an offer
export const deleteOffer = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedOffer = await Offer.findByIdAndDelete(id);
    if (!deletedOffer) return res.status(404).json({ message: 'Offer not found' });
    res.status(200).json({ message: 'Offer deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
