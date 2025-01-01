import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TrendingOffers = () => {
  const [trendingOffers, setTrendingOffers] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([false, false, false, false, false, false]); // Track favorite items

  const toggleFavorite = (index) => {
    const newFavorites = [...favoriteItems];
    newFavorites[index] = !newFavorites[index];
    setFavoriteItems(newFavorites);
  };

  useEffect(() => {
    const fetchTrendingOffers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/trendingoffers');
        setTrendingOffers(response.data);
      } catch (err) {
        console.error('Error fetching trending offers:', err);
      }
    };

    fetchTrendingOffers();
  }, []);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingOffers.map((offer, index) => {
          console.log(offer.imageUrl);  // Log the image URL outside JSX
          return (
            <div key={offer._id} className="bg-[#CDDEEE] rounded-xl p-6 h-[250px] relative overflow-hidden group">
              {/* Image */}
              <div className="absolute top-0 right-0 w-full h-[130px] rounded-xl">
                <img src={`http://localhost:5000/uploads/${offer.imageUrl}`} alt={offer.title} className="h-[140px] w-full rounded-lg" />
              </div>

              {/* Description and Price */}
              <p className="text-gray-700 text-left mt-[120px]">{offer.description}</p>
              <p className="text-gray-700 text-left mt-2 font-bold">${offer.price}</p>

              {/* Dark overlay and "Add to Cart" text */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/cart" className="text-white font-bold text-xl">Add to Cart</Link>
              </div>

              {/* Favorite icon */}
              <div className="absolute top-40 right-2">
                {favoriteItems[index] ? (
                  <FaHeart
                    className="text-red-500 cursor-pointer"
                    onClick={() => toggleFavorite(index)}
                  />
                ) : (
                  <FaRegHeart
                    className="text-gray-800 cursor-pointer"
                    onClick={() => toggleFavorite(index)}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingOffers;
