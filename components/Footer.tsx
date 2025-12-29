import React from 'react';
import { Instagram, Facebook, MapPin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="access" className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-serif text-white mb-6">Lumière</h3>
          <p className="text-sm leading-relaxed text-gray-400 mb-6">
            日常に彩りを添える、大人のためのプライベートネイルサロン。<br/>
            リラックスできる空間で、あなただけのデザインをご提案します。
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5"/></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5"/></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium text-white mb-6 uppercase tracking-wider">Access</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-sm">
                〒107-0062<br/>
                東京都港区南青山 5-1-2<br/>
                Lumière Building 3F
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm">contact@lumiere-nail.com</p>
            </div>
          </div>
        </div>

        <div>
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683545!2d139.71239961525792!3d35.65858048019949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b619c92b23b%3A0x6e9c60e0b370603!2sOmotesando%20Station!5e0!3m2!1sen!2sjp!4v1620000000000!5m2!1sen!2sjp" 
             width="100%" 
             height="200" 
             style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             className="rounded-lg"
           ></iframe>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Lumière Nail Salon. All rights reserved.
      </div>
    </footer>
  );
};
