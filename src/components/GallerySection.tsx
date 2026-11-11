import React, { useState } from 'react';
import { Image as ImageIcon, ZoomIn, X, Sparkles, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem } from '../types';
import { getAssetUrl } from '../utils/assetUrl';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Todas',
    'Clínicas & Instalaciones',
    'Atención & Práctica Clínica',
    'Comunidad & Eventos',
    'Identidad & Posgrado',
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'Todas' || item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      item.title.toLowerCase().includes(query) ||
      item.areaName.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-slate-50 text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>Galería Institucional • UABC Mexicali</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
              Galería de Imágenes de la Facultad
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explora las clínicas (Calafia y Naranjos), policlínica, salas de simulación, brigadas de salud oral, vida universitaria y el legado de la Facultad de Odontología UABC Mexicali.
            </p>
          </div>

          {/* Quick Search in Gallery */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar en la galería..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-300 text-xs text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-200/80 p-1.5 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-600 font-medium">
            Mostrando <strong>{filteredItems.length}</strong> de {GALLERY_ITEMS.length} fotografías
          </span>
        </div>

        {/* Photographic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:border-sky-400 flex flex-col justify-between"
            >
              {/* Image Aspect Box */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={getAssetUrl(item.image)}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                {/* Top Badge: Area Name */}
                <div className="absolute top-3 left-3 bg-[#0A192F]/90 backdrop-blur-md text-sky-300 border border-sky-400/30 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                  {item.areaName}
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Overlay Title on Card */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] text-sky-300 font-mono uppercase tracking-wider block">
                    Fotografía {index + 1} de {filteredItems.length}
                  </span>
                  <h3 className="text-sm font-bold truncate">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-blue-600">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-slate-600">Ver en detalle</span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <ImageIcon className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-700">No se encontraron fotografías</h4>
            <p className="text-xs text-slate-500 mt-1">Prueba con otra palabra clave o selecciona "Todas".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('Todas');
              }}
              className="mt-3 px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500"
            >
              Reiniciar filtros
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-sky-500/30 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-xs font-bold">
                  {selectedItem.areaName}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  Facultad de Odontología UABC Mexicali
                </span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                aria-label="Cerrar visor"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Lightbox Image */}
            <div className="relative aspect-[16/10] bg-black max-h-[65vh] flex items-center justify-center overflow-hidden">
              <img
                src={getAssetUrl(selectedItem.image)}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
                decoding="async"
              />

              {/* Prev / Next controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition shadow-lg border border-slate-700 cursor-pointer"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition shadow-lg border border-slate-700 cursor-pointer"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="p-6 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-sky-400 font-mono">
                  {selectedItem.category}
                </span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
