import React, { useMemo, useState } from 'react';
import ImageWithFallback from './ImageWithFallback';
import { GALLERY_ITEMS } from '../data/gallery';

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = useMemo(() => {
    if (activeIndex === null) return null;
    return GALLERY_ITEMS[activeIndex] ?? null;
  }, [activeIndex]);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Galería</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">
            Algunas referencias de montajes, mesas y servicio en eventos reales.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] shadow-sm hover:shadow-xl transition-all"
              title={item.alt}
            >
              <ImageWithFallback
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white font-semibold text-sm line-clamp-2">{item.alt}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vista previa de la galería"
          className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm p-6 flex items-center justify-center"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div className="font-bold text-slate-900">{activeItem.alt}</div>
              <button
                type="button"
                className="text-slate-500 hover:text-slate-900 transition-colors"
                onClick={() => setActiveIndex(null)}
              >
                <i className="fas fa-times text-xl" aria-hidden="true"></i>
                <span className="sr-only">Cerrar</span>
              </button>
            </div>
            <div className="bg-slate-950">
              <ImageWithFallback
                src={activeItem.src}
                alt={activeItem.alt}
                className="w-full max-h-[75vh] object-contain"
              />
            </div>
            <div className="px-5 py-4 flex items-center justify-between gap-3">
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors disabled:opacity-40"
                disabled={activeIndex === 0}
                onClick={() => setActiveIndex((v) => (v === null ? v : Math.max(0, v - 1)))}
              >
                <i className="fas fa-arrow-left mr-2" aria-hidden="true"></i>
                Anterior
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold transition-colors disabled:opacity-40"
                disabled={activeIndex === GALLERY_ITEMS.length - 1}
                onClick={() => setActiveIndex((v) => (v === null ? v : Math.min(GALLERY_ITEMS.length - 1, v + 1)))}
              >
                Siguiente
                <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

