import React from "react";
import { ImBooks } from "react-icons/im";

const Categories = () => {
  const categories = [
    { title: "Textbooks", image: "/Images/textbooks.png" },
    { title: "Gadgets", image: "/Images/gadget.png" },
    { title: "Notes", image: "/Images/notes.png" },
    { title: "Miscellaneo", image: "/Images/miscellaneo.png" },
    { title: "Accessories", image: "/Images/accessories.png" },
    { title: "Stationery", image: "/Images/stationery.png" },
  ];

  

  return (  
    <div className="bg-white p-4 rounded-lg">
      <div className="ml-[50px]">
      <h1 className="text-[50px] font-roboto font-medium text-gray-800 mb-4 text-center">Categories</h1>
      <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto justify-center items-center">
        {categories.map(({ title, image }) => (
          <div
            key={title}
            className="flex flex-col items-center h-[200px] w-[200px] justify-center bg-[#CDDEEE] rounded-2xl p-2 hover:bg-[#ABC7E3] transition-colors duration-200"
          >
            <h3 className="text-lg font-semibold text-center">{title}</h3>
            <img
              src={image}
              alt={title}
              className="h-[120px] w-[120px] object-cover mb-2"
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-[150px] h-[50px]">
        <div className="flex flex-col lg:flex-row justify-between gap-[10%] h-full ">
          {/* 35% Section */}
          
          <div className="lg:w-[25%] w-full h-[500px]  border border-green-700 bg-white">
            <div className="bg-[#d9dfe6] rounded-lg flex items-center px-4 h-[48px]"><ImBooks className="text-2xl"/>
              <h2 className="text-2xl font-bold font-roboto text-gray-800 px-4">Special Offers</h2>
            </div>
          </div>
    

            {/* 55% Section */}
          <div className="mr-10 lg:w-[75%] w-full h-full border border-[#d9dfe6] bg-[#d9dfe6] rounded-lg flex items-center px-4"><ImBooks className="text-2xl"/>
            <h2 className="text-2xl font-roboto font-bold text-gray-800 px-4">Trending items</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Categories;
