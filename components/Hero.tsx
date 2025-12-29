import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/id/43/1920/1080")', 
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
        <p className="text-lg md:text-xl mb-4 tracking-[0.2em] uppercase text-gray-200">Private Nail Salon</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide text-shadow-lg">
          Lumière
        </h1>
        <p className="text-base md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          指先から輝く、あなただけの美しさ。<br className="md:hidden" />
          上質な空間で、心ときめくひとときを。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu"
            className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 uppercase tracking-widest text-sm"
          >
            View Menu
          </a>
          <a 
            href="#booking"
            className="px-8 py-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Reserve Now
          </a>
        </div>
      </div>
    </section>
  );
};
