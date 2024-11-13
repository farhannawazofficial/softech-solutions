// App.js

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; // Import other sections here
import Services from './components/Services';
import TrustSection from './components/TrustSection';
import CompaniesSection from './components/CompaniesSection';
import Testimonials from './components/Testimonials';
import ProjectsSection from './components/ProjectsSection'
import BuildingSoftwareSection from './components/BuildingSoftwareSection';
import DesignDevelopmentSection from './components/DesignDevelopmentSection';
import TechStackSection from './components/TechStackSection';
import DevelopmentProcessSection from './components/DevelopmentProcessSection';
import SubscriptionSection from './components/SubscriptionSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Services />
      <TrustSection />
      <CompaniesSection />
      <Testimonials />
      <ProjectsSection />
      <BuildingSoftwareSection />
      <DesignDevelopmentSection />
      <TechStackSection />
      <DevelopmentProcessSection />
      <SubscriptionSection />
      {/* Add other sections/components here */}
    </div>
  );
}

export default App;
