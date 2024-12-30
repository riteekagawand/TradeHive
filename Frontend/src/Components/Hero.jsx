import Lottie from "react-lottie"; // Import Lottie
import * as logoAnimation from "../assets/Lottie/landing.json"; // Import your Lottie JSON file
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const defaultOptions = {
    loop: true, // Set to true for continuous animation
    autoplay: true, // Start animation on load
    animationData: logoAnimation, // Path to your Lottie JSON file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Adjusts the aspect ratio
    },
  };

  return (
    <div>
      {/* Section with two parts: left (text or search bar) and right (Lottie animation) */}
      <section className="bg-white min-h-screen flex flex-col lg:flex-row justify-between items-center py-10 px-6 lg:px-20">
        {/* Left side - Text or Search bar */}
        <div className="flex flex-col justify-start items-start w-full lg:w-1/2 lg:mt-[-65px] font-roboto pt-16 lg:pt-0">
          <h1 className="text-4xl font-bold text-gray-800">Buy and sell textbooks with ease</h1>
          <h1 className="text-4xl font-bold text-gray-800">on TradeHive!</h1>
          <p className="text-lg mt-4 text-gray-700">
            Browse by course, author, or ISBN number.
          </p>

          {/* Search bar with Search button */}
          <div className="mt-8 flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0 w-full lg:w-auto">
            {/* Search bar */}
            <div className="flex items-center border-2 border-gray-300 w-full lg:w-[450px] rounded-xl">
              <input
                type="text"
                className="py-3 px-4 outline-none flex-grow rounded-l-xl"
                placeholder="What are you looking for?"
              />
              <FaSearch className="hover:text-gray-500 mr-4 text-xl sm:text-2xl lg:text-xl" />
            </div>

            {/* Search button */}
            <button className="py-3 px-6 bg-[#567594] text-white font-semibold rounded-xl hover:bg-[#33485f] transition">
              Search
            </button>
          </div>
        </div>

        {/* Right side - Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <Lottie options={defaultOptions} className="lg:h-[600px] lg:w-[600px] h-[300px] w-[300px]" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
