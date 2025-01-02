import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero"; // Import the Navbar component
import Categories from "../Components/Categories";
import Blog from './BlogSection'
import Footer from "../Components/Footer";
import FeaturesSection from "../Components/FeaturesSection";

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* <Navbar /> Call Navbar here */}
      <Hero /> {/* Removed mt-10 here */}
      {/* <Categories /> */}
      <FeaturesSection />
      <Blog /> {/* Added mt-10 here */}
      <Footer />
    </div>
  );
};

export default LandingPage;
