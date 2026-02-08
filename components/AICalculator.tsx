
import React, { useState } from 'react';
import { getEventStaffingRecommendation } from '../services/geminiService';
import { AIRecommendation, EventQuoteRequest } from '../types';
import { buildWhatsAppLink } from '../config/contact';

const AICalculator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<EventQuoteRequest>({
    eventType: 'Boda',
    guestCount: 50,
    durationHours: 5,
    additionalInfo: ''
  });
  const [recommendation, setRecommendation] = useState<AIRecommendation | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await getEventStaffingRecommendation(formData);
      setRecommendation(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="calculator" className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/2">
            <h4 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm">Innovación Tecnológica</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Calculadora Inteligente de Personal</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Utilizamos Inteligencia Artificial de última generación (Gemini API) para sugerirte la estructura ideal de personal basándonos en estándares internacionales de hospitalidad.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Tipo de Evento</label>
                  <select 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                  >
                    <option>Boda</option>
                    <option>Corporativo</option>
                    <option>Graduación</option>
                    <option>XV Años</option>
                    <option>Cóctel</option>
                    <option>Cena Privada</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Número de Invitados</label>
                  <input 
                    type="number" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    placeholder="Ej. 150"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({...formData, guestCount: parseInt(e.target.value) || 0})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Duración estimada (Horas)</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  placeholder="Ej. 6"
                  value={formData.durationHours}
                  onChange={(e) => setFormData({...formData, durationHours: parseInt(e.target.value) || 0})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Notas Especiales (Opcional)</label>
                <textarea 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  placeholder="Ej. Requerimos meseros que hablen inglés..."
                  rows={3}
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-slate-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <><i className="fas fa-circle-notch fa-spin"></i> Analizando evento...</>
                ) : (
                  <><i className="fas fa-magic"></i> Obtener Recomendación IA</>
                )}
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 w-full">
            {recommendation ? (
              <div className="animate-fade-in bg-slate-900/50 p-8 rounded-3xl border border-amber-500/30 h-full">
                <h3 className="text-3xl font-bold text-amber-500 mb-8 flex items-center gap-3">
                  <i className="fas fa-clipboard-check"></i> Plan Maestro Sugerido
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-950 p-6 rounded-2xl border border-white/5">
                    <div className="text-slate-400 text-sm uppercase mb-1">Meseros</div>
                    <div className="text-4xl font-bold">{recommendation.waitersCount}</div>
                  </div>
                  <div className="bg-slate-950 p-6 rounded-2xl border border-white/5">
                    <div className="text-slate-400 text-sm uppercase mb-1">Capitán</div>
                    <div className="text-4xl font-bold">{recommendation.captainNeeded ? '1' : '0'}</div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-slate-400 text-sm uppercase mb-2">Estilo Recomendado</div>
                  <div className="text-xl font-medium text-slate-200 bg-amber-500/10 px-4 py-2 rounded-lg border border-amber-500/20 inline-block">
                    {recommendation.serviceStyle}
                  </div>
                </div>

                <div className="mb-10">
                  <div className="text-slate-400 text-sm uppercase mb-4">Consejos del Experto AI</div>
                  <ul className="space-y-3">
                    {recommendation.tips.map((tip, i) => (
                      <li key={i} className="flex gap-3 text-slate-300">
                        <i className="fas fa-check-circle text-amber-500 mt-1"></i>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={buildWhatsAppLink(
                    `Hola, usé su calculadora de IA. Mi evento es una ${formData.eventType} para ${formData.guestCount} personas y me recomendó ${recommendation.waitersCount} meseros. ¿Podemos platicar?`
                  )}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center bg-white text-slate-950 hover:bg-slate-200 font-bold py-4 rounded-xl transition-all shadow-xl"
                >
                  <i className="fab fa-whatsapp mr-2"></i> Reservar este Personal Ahora
                </a>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-slate-800 rounded-3xl">
                <i className="fas fa-robot text-6xl text-slate-800 mb-6"></i>
                <h3 className="text-2xl font-bold text-slate-700 mb-2">Esperando tus datos</h3>
                <p className="text-slate-500">Completa el formulario a la izquierda para generar una propuesta personalizada.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AICalculator;
