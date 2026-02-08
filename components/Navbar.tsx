
import React, { useState, useEffect } from 'react';
import { buildWhatsAppLink } from '../config/contact';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`font-serif text-2xl font-bold tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>
          MESEROS <span className="text-amber-500">C.A.V.</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#services" className={`font-medium hover:text-amber-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Servicios</a>
          <a href="#about" className={`font-medium hover:text-amber-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>¿Por qué nosotros?</a>
          <a href="#gallery" className={`font-medium hover:text-amber-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Galería</a>
          <a href="#calculator" className={`font-medium hover:text-amber-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Calculadora IA</a>
          <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
            Presupuesto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
