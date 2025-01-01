// routes/specialOfferRoutes.js
import express from 'express';
import {
  getAllOffers,
  createOffer,
  updateOffer,
  deleteOffer,
  getOffer,
} from '../Controller/specialOffersController.js';

const router = express.Router();

// Route to get all offers
router.get('/', getAllOffers);

// Route to get a specific offer by ID
router.get('/:id', getOffer);

// Route to create a new offer
router.post('/', createOffer);

// Route to update an offer by ID
router.put('/:id', updateOffer);

// Route to delete an offer by ID
router.delete('/:id', deleteOffer);

export default router;
