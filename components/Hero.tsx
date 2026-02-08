
import React from 'react';
import ImageWithFallback from './ImageWithFallback';
import { buildWhatsAppLink } from '../config/contact';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback src="/gallery/hero.jpg" alt="Evento elegante" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white mt-10">
        <div className="max-w-3xl">
          <h4 className="text-amber-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base animate-pulse">
            Servicio Profesional de Catering y Meseros
          </h4>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Elevamos tu Evento al Siguiente Nivel de <span className="italic text-amber-500">Elegancia</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
            Personal capacitado, puntual y apasionado por la hospitalidad. Desde cenas íntimas hasta masivos corporativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#calculator" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-center transition-all shadow-xl hover:shadow-amber-500/20"
            >
              Planificar con IA
            </a>
            <a 
              href={buildWhatsAppLink()}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-center transition-all"
            >
              Hablar con un asesor
            </a>
          </div>
        </div>
      </div>

      {/* Stats overlay */}
      <div className="absolute bottom-10 right-0 left-0 md:left-auto md:right-10 md:bottom-20 z-10 p-6 md:p-0">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl grid grid-cols-2 md:grid-cols-1 gap-6 text-white max-w-sm ml-auto">
          <div>
            <div className="text-3xl font-bold text-amber-500">500+</div>
            <div className="text-sm text-slate-300 uppercase tracking-wider">Eventos Exitosos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500">100%</div>
            <div className="text-sm text-slate-300 uppercase tracking-wider">Garantía de Servicio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
