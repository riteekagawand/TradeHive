// controllers/trendingItemController.js
const TrendingItem = require('../models/TrendingItem.js');

// Get all trending items from the database
exports.getAllTrendingItems = async (req, res) => {
  try {
    const items = await TrendingItem.find(); // Fetch all items
    res.status(200).json(items); // Return items as a JSON response
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new trending item
exports.createTrendingItem = async (req, res) => {
  try {
    const { description, price, imageUrl } = req.body;
    const newItem = new TrendingItem({
      description,
      price,
      imageUrl,
    });

    await newItem.save(); // Save the new item in the database
    res.status(201).json(newItem); // Return the newly created item
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
