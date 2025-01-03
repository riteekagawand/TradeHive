import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import SearchPage from "./Pages/Search"; // Example AboutPage
// import ServicesPage from "./ServicesPage"; // Example ServicesPage
// import ContactPage from "./ContactPage"; // Example ContactPage

const App = () => {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/search" element={<SearchPage />} />
        {/*<Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
