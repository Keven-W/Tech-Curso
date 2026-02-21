import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TeamGrid from './components/TeamGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <HeroSection />
      <TeamGrid />
      <Footer />
    </div>
  );
}

export default App;