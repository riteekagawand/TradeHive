// routes/trendingOffersRoutes.js
import express from 'express';
import TrendingOffer from '../models/TrendingItem.js';

const router = express.Router();

// Fetch all trending offers
// Fetch all trending offers
router.get('/', async (req, res) => { 
    try {
      const offers = await TrendingOffer.find();
      res.json(offers.map(offer => ({
        ...offer._doc,
        imageUrl: offer.imageUrl.replace('/uploads/', ''), // Strip '/uploads/' from the imageUrl
      })));
    } catch (err) {
      res.status(500).send('Error fetching offers');
    }
});


// Create a new trending offer (admin or authorized users)
router.post('/', async (req, res) => {
  const { title, description, price, imageUrl, isTrending } = req.body;

  try {
    const newOffer = new TrendingOffer({
      title,
      description,
      price,
      imageUrl,
      isTrending,
    });

    await newOffer.save();
    res.status(201).json(newOffer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
