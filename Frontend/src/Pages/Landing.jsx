import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero"; // Import the Navbar component
import Categories from "../Components/Categories";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Navbar /> {/* Call Navbar here */}
      <Hero /> {/* Removed mt-10 here */}
      <Categories />
    </div>
  );
};

export default LandingPage;
