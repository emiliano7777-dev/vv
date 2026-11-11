import React, { useState } from 'react';
import { Search, ChevronRight, Stethoscope, Sparkles, Filter, Check } from 'lucide-react';
import { DentalService } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesDirectoryProps {
  onNavigateToContact: () => void;
  onNavigateToLocation: () => void;
}

export const ServicesDirectory: React.FC<ServicesDirectoryProps> = ({
  onNavigateToContact,
  onNavigateToLocation,
}) => {
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter services by search term
  const filteredServices = SERVICES_DATA.filter((service) => {
    const term = searchTerm.toLowerCase();
    const matchName = service.name.toLowerCase().includes(term);
    const matchDesc = service.shortDescription.toLowerCase().includes(term);
    const matchTreatments = service.treatments.some((t) => t.toLowerCase().includes(term));
    return matchName || matchDesc || matchTreatments;
  });

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-slate-100 text-slate-800 relative">
      {/* Background Decorative Tech Elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Directorio Oficial de Especialidades</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
              Nuestros 9 Servicios Odontológicos
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explora las áreas clínicas de la Facultad de Odontología UABC Mexicali. Selecciona cualquier tarjeta horizontal para consultar los tratamientos que comprende y sus detalles específicos.
            </p>
          </div>

          {/* Quick Search Box */}
          <div className="w-full md:w-80 relative">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar servicio o tratamiento..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  Limpiar
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Directory Counter and Feedback */}
        <div className="flex items-center justify-between text-xs text-slate-600 mb-6 font-medium px-1">
          <span>Mostrando {filteredServices.length} de {SERVICES_DATA.length} áreas clínicas</span>
          <span className="hidden sm:inline">Haz clic en "Consultar detalles" para abrir la ficha completa</span>
        </div>

        {/* Horizontal Directory Cards List */}
        <div className="space-y-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:border-sky-400 hover:-translate-y-0.5"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                
                {/* Horizontal Photography Column */}
                <div className="md:col-span-4 relative aspect-[16/9] md:aspect-auto overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/70 via-transparent to-transparent"></div>

                  {/* High-tech Numeric Tag */}
                  <div className="absolute top-3 left-3 bg-[#0A192F]/90 backdrop-blur-md border border-sky-400/40 text-white rounded-xl px-3 py-1 flex items-center gap-1.5 shadow-md">
                    <span className="text-[10px] text-sky-400 font-bold uppercase tracking-widest">ÁREA</span>
                    <span className="font-mono text-sm font-extrabold text-white">{service.number}</span>
                  </div>

                  {/* Badge Label */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-blue-600/90 text-white backdrop-blur-sm">
                      {service.badgeLabel}
                    </span>
                  </div>
                </div>

                {/* Card Information Column */}
                <div className="md:col-span-8 p-5 sm:p-6 lg:p-7 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-2.5">
                    {/* Top Meta info */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-blue-600 flex items-center gap-1">
                        <Stethoscope className="w-3.5 h-3.5" />
                        Facultad de Odontología UABC
                      </span>
                      <span className="text-[11px] text-slate-600 font-mono hidden sm:inline">
                        {service.treatments.length} {service.isStudiesList ? 'Estudios' : 'Tratamientos'}
                      </span>
                    </div>

                    {/* Service Name */}
                    <h3 className="text-xl sm:text-2xl font-black text-[#0A192F] group-hover:text-blue-600 transition-colors tracking-tight">
                      {service.name}
                    </h3>

                    {/* Brief Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Treatments Preview Chips */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-2">
                      {service.isStudiesList ? 'Estudios principales:' : 'Tratamientos que incluye:'}
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {service.treatments.map((treatment, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium border border-slate-200/80 group-hover:bg-blue-50 group-hover:border-blue-200 transition"
                        >
                          <Check className="w-3 h-3 text-blue-600" />
                          <span>{treatment}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-xs text-slate-600">
                      Supervisión clínica docente • Campus Mexicali
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 group-hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-4 py-2 shadow-sm transition cursor-pointer"
                    >
                      <span>Consultar detalles</span>
                      <ChevronRight className="w-4 h-4 text-sky-200 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}

          {/* Empty State when search has no matches */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">No se encontraron servicios</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                No hay coincidencias para "{searchTerm}". Prueba con términos como "limpieza", "conductos", "caries" o "radiografía".
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition cursor-pointer"
              >
                Ver todos los servicios
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Independent Full Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onNavigateToContact={onNavigateToContact}
        onNavigateToLocation={onNavigateToLocation}
      />
    </section>
  );
};
