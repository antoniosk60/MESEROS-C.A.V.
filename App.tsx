
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Gallery from './components/Gallery';
import AICalculator from './components/AICalculator';
import Footer from './components/Footer';
import ImageWithFallback from './components/ImageWithFallback';
import { buildWhatsAppLink } from './config/contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Gallery />
      <AICalculator />
      
      {/* Testimonials Placeholder */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 italic text-slate-700">"El servicio fue impecable. Mis invitados quedaron encantados con la atención del personal."</h2>
          <div className="flex items-center justify-center gap-4">
            <ImageWithFallback src="/gallery/avatar.jpg" className="w-16 h-16 rounded-full object-cover shadow-lg" alt="Cliente" />
            <div className="text-left">
              <div className="font-bold text-slate-900">Mariana Rodríguez</div>
              <div className="text-slate-500 text-sm">Directora de RH, Tech Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Sticky Button */}
      <a 
        href={buildWhatsAppLink()}
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce hover:animate-none"
        title="Contáctanos por WhatsApp"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>

      <Footer />
    </div>
  );
};

export default App;
