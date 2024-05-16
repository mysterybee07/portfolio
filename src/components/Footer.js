// src/components/Footer.js

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <a href="#about" className="text-xl font-bold hover:text-gray-400">
            Biraj Pudasaini
          </a>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            © {new Date().getFullYear()} Biraj Pudasaini. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
