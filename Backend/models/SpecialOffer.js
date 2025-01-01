// models/specialOffer
import mongoose from 'mongoose';  // Ensure mongoose is imported

const offerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  discount: { type: Number, required: true },
  validUntil: { type: Date, required: true },
  imageUrl: { type: String, required: false }, // Store the URL of the uploaded image
});

const Offer = mongoose.model('Offer', offerSchema);

export default Offer;
