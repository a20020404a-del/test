import React from 'react';

const galleryImages = [
  { id: 1, url: 'https://picsum.photos/id/106/800/800', category: 'Simple' },
  { id: 2, url: 'https://picsum.photos/id/225/800/1000', category: 'Nuance' },
  { id: 3, url: 'https://picsum.photos/id/326/800/800', category: 'Season' },
  { id: 4, url: 'https://picsum.photos/id/402/800/1000', category: 'Office' },
  { id: 5, url: 'https://picsum.photos/id/514/800/800', category: 'Art' },
  { id: 6, url: 'https://picsum.photos/id/646/800/800', category: 'Foot' },
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-gray-800 mb-4">Gallery</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {galleryImages.map((img) => (
            <div key={img.id} className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src={img.url} 
                alt={`Nail Design ${img.category}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 aspect-square"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif tracking-widest text-lg border-b border-white pb-1">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-accent hover:text-primary transition-colors border-b border-accent hover:border-primary pb-1"
          >
            See more on Instagram &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
