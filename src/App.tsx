import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BlogPage from './components/BlogPage';
import ProjectsSection from './components/ProjectsSection';

export const App: React.FC = () => {
  return (
    <main className="w-full overflow-x-clip text-[#D7E2EA] font-sans antialiased">
      {/* Global Navbar */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Journey Section (Experience, Hackathons, Education) */}
      <BlogPage />

      {/* 6. Projects Section (includes Contact footer) */}
      <ProjectsSection />
    </main>
  );
};

export default App;
