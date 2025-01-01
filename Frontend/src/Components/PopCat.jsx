import React from 'react';

const popCategories = [
  {
    title: 'Textbooks',
    description: 'Buy and sell used textbooks',
    image: '../../public/Images/usedTextbooks.png', // Replace with actual image path
  },
  {
    title: 'Gadgets',
    description: 'Laptops, phones, and more',
    image: '../../public/Images/gadget-image.jpg', // Replace with actual image path
  },
  // Add more categories as needed
];

function PopCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 justify-center items-center">
      {popCategories.map((category, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-[280px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-gray-200 p-4">
            <h2 className="text-lg font-semibold mb-2 text-center">
              {category.title}
            </h2>
            <p className="text-center mb-4">{category.description}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopCategories;
