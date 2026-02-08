
import React from 'react';
import { FACEBOOK_URL } from '../config/contact';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="font-serif text-2xl font-bold tracking-tighter mb-6">
              MESEROS <span className="text-amber-500">C.A.V.</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Excelencia en servicios de hostelería y catering para eventos que buscan dejar una marca memorable.
            </p>
            <div className="flex gap-4">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Enlaces Rápidos</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Nuestros Servicios</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">¿Por qué nosotros?</a></li>
              <li><a href="#calculator" className="hover:text-amber-500 transition-colors">Calculadora IA</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Galería de Eventos</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Contáctanos</h5>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3">
                <i className="fas fa-map-marker-alt text-amber-500 mt-1"></i>
                <span>Av. de la Reforma 123, Ciudad de México</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-phone text-amber-500 mt-1"></i>
                <a className="hover:text-amber-500 transition-colors" href="tel:+525531190308">
                  +52 (55) 3119 0308
                </a>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-envelope text-amber-500 mt-1"></i>
                <span>contacto@meseroscav.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Horario de Oficina</h5>
            <ul className="space-y-4 text-slate-400">
              <li>Lunes - Viernes: 09:00 - 18:00</li>
              <li>Sábados: 10:00 - 14:00</li>
              <li className="text-amber-500 font-bold">Servicio de Meseros: 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 Meseros C.A.V. - Todos los derechos reservados.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
