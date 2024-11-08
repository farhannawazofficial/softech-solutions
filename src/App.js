// App.js

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; // Import other sections here
import Services from './components/Services';
import TrustSection from './components/TrustSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Services />
      <TrustSection />
      {/* Add other sections/components here */}
    </div>
  );
}

export default App;
