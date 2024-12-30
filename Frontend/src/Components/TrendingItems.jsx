import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Heart icons
import digtext from "../../public/Images/digtext.png";
import { Link } from "react-router-dom";

const TrendingItems = () => {
  const [favoriteItems, setFavoriteItems] = useState([false, false, false, false, false, false]); // Track favorite items

  const toggleFavorite = (index) => {
    const newFavorites = [...favoriteItems];
    newFavorites[index] = !newFavorites[index];
    setFavoriteItems(newFavorites);
  };

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"].map((item, index) => (
          <div
            key={index}
            className="bg-[#CDDEEE] rounded-xl p-6 h-[250px] relative overflow-hidden group"
          >
            {/* Image */}
            <div className="absolute top-0 right-0 w-full h-[130px] rounded-xl">
              <img src={digtext} className="h-[140px] w-full rounded-lg" />
            </div>

            {/* Text content */}
            <p className="text-gray-700 text-left mt-[120px]">Discover a range of amazing products in this category.</p>
            <p className="text-gray-700 text-left mt-2 font-bold">$99.99</p>

            {/* Add to Cart text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link className="text-white font-bold text-xl">Add to Cart</Link>
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

            {/* Overlay for hover effect */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingItems;
