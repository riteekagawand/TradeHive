// models/TrendingOffer.js
import mongoose from 'mongoose';

const trendingOfferSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true }, // Path to image (from the 'uploads' folder or external URL)
    isTrending: { type: Boolean, default: true }, // A flag to mark the offer as trending
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const TrendingOffer = mongoose.model('TrendingOffer', trendingOfferSchema);

export default TrendingOffer;
