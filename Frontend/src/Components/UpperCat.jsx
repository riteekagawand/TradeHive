import React from "react";

const UpperCat = () => {
  const categories = [
    { title: "Textbooks", image: "/Images/textbooks.png" },
    { title: "Gadgets", image: "/Images/gadget.png" },
    { title: "Notes", image: "/Images/notes.png" },
    { title: "Miscellaneo", image: "/Images/miscellaneo.png" },
    { title: "Accessories", image: "/Images/accessories.png" },
    { title: "Stationery", image: "/Images/stationery.png" },
  ];

  return (
    <div>
      {/* Categories Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-auto items-center">
        {categories.map(({ title, image }) => (
          <div
            key={title}
            className="flex flex-col items-center h-[200px] w-[200px] justify-center bg-[#CDDEEE] rounded-2xl p-2 hover:bg-[#ABC7E3] transition-colors duration-300"
          >
            <h3 className="text-lg font-semibold text-center">{title}</h3>
            <img src={image} alt={title} className="h-[120px] w-[120px] object-cover mb-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpperCat;
