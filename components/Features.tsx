
import React from 'react';

const features = [
  {
    title: "Puntualidad Marcial",
    description: "Llegamos 60 minutos antes de que empiece tu evento para asegurar que todo esté perfecto.",
    icon: "fa-clock"
  },
  {
    title: "Imagen Impecable",
    description: "Uniforme de gala o temática específica según el nivel de tu evento.",
    icon: "fa-user-tie"
  },
  {
    title: "Capacitación Continua",
    description: "Nuestro personal domina el servicio a la francesa, inglesa y americana.",
    icon: "fa-award"
  },
  {
    title: "Enfoque en Soluciones",
    description: "Proactividad ante imprevistos para que el anfitrión nunca se entere del problema.",
    icon: "fa-lightbulb"
  }
];

const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="grid grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-100">
                  <div className="text-amber-500 text-3xl mb-4">
                    <i className={`fas ${f.icon}`}></i>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900">{f.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">Filosofía de Servicio</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">No solo servimos mesas, <span className="text-amber-500">creamos experiencias.</span></h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              En Meseros C.A.V. entendemos que el servicio de catering es la columna vertebral de cualquier evento exitoso. Nuestra misión es quitarte el peso de la logística y permitirte ser un invitado más en tu propia fiesta.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-amber-500">
                <i className="fas fa-check text-amber-500"></i>
                <span className="font-semibold text-slate-700">Contratos legales y seguros incluidos</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-amber-500">
                <i className="fas fa-check text-amber-500"></i>
                <span className="font-semibold text-slate-700">Facturación inmediata para empresas</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border-l-4 border-amber-500">
                <i className="fas fa-check text-amber-500"></i>
                <span className="font-semibold text-slate-700">Cobertura en toda el área metropolitana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
