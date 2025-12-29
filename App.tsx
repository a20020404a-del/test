import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { AiConsultant } from './components/AiConsultant';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white selection:bg-primary/30 selection:text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <AiConsultant />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
