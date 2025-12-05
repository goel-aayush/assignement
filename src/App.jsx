import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 relative">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
