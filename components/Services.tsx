
import React from 'react';
import type { ServiceCard } from '../types';
import ImageWithFallback from './ImageWithFallback';

const services: ServiceCard[] = [
  {
    title: "Eventos Sociales",
    description: "Bodas, graduaciones y XV años donde la atención al detalle es primordial.",
    icon: "fa-glass-cheers",
    imageUrl: "/gallery/eventos-sociales.jpg"
  },
  {
    title: "Corporativos",
    description: "Lanzamientos de marca, cocteles y congresos con personal bilingüe disponible.",
    icon: "fa-briefcase",
    imageUrl: "/gallery/corporativos.jpg"
  },
  {
    title: "Cenas Privadas",
    description: "Servicio exclusivo para grupos pequeños en residencias o yates.",
    icon: "fa-utensils",
    imageUrl: "/gallery/cenas-privadas.jpg"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">
            Ofrecemos soluciones integrales de personal para que tú solo te preocupes por disfrutar de tus invitados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="bg-amber-500 p-3 rounded-lg text-white mb-2 shadow-lg">
                    <i className={`fas ${service.icon} text-xl`}></i>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#calculator" className="text-amber-600 font-bold hover:text-amber-700 flex items-center gap-2 group-hover:gap-4 transition-all">
                  Cotizar este servicio <i className="fas fa-arrow-right text-sm"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
