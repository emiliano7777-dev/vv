import React, { useEffect } from 'react';
import { X, CheckCircle, Stethoscope, Phone, MapPin, ArrowRight, Shield, Layers } from 'lucide-react';
import { DentalService } from '../types';

interface ServiceDetailModalProps {
  service: DentalService | null;
  onClose: () => void;
  onNavigateToContact: () => void;
  onNavigateToLocation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onNavigateToContact,
  onNavigateToLocation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const isStudies = service.isStudiesList;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden text-slate-800 transition-all transform animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#0A192F] text-white px-6 py-4 flex items-center justify-between border-b border-sky-900/60">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-blue-600 font-mono font-bold text-xs text-white">
              ÁREA {service.number}
            </span>
            <span className="text-xs text-sky-300 font-medium hidden sm:inline">
              Facultad de Odontología UABC Mexicali
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Header with Title and Photography */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                {service.badgeLabel}
              </span>
              <span className="text-xs text-slate-600 flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-blue-500" />
                Atención clínica supervisada
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
              {service.name}
            </h2>

            {/* Service Image with subtle tech badge */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/8] sm:aspect-[16/7] bg-slate-100 border border-slate-200 shadow-inner">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 text-white text-xs font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Servicio activo en clínica universitaria</span>
              </div>
            </div>
          </div>

          {/* Official Description */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-blue-600" />
              Descripción del área
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {service.shortDescription}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          {/* Official Treatments or Studies List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A192F] flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                {isStudies ? 'Estudios disponibles' : 'Tratamientos que comprende'}
              </h3>
              <span className="text-xs text-slate-600 font-mono">
                {service.treatments.length} {isStudies ? 'estudios' : 'procedimientos'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.treatments.map((treatment, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 hover:border-blue-300 transition"
                >
                  <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{treatment}</h4>
                    <span className="text-[11px] text-slate-600">Catálogo oficial FOM UABC</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Points */}
          <div className="space-y-2.5 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Aspectos clave de la atención en esta área
            </h4>
            <div className="space-y-2">
              {service.focusHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Note (No invented info) */}
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-3.5 text-xs text-amber-900">
            <p className="font-semibold text-amber-950 mb-0.5">Nota informativa institucional:</p>
            <p>
              La valoración inicial determina el plan de atención correspondiente según las necesidades particulares de cada persona. Los servicios son brindados con estricta supervisión de docentes de la Facultad de Odontología UABC Mexicali.
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-600">
            <span>UABC Mexicali • Horario: 8:00 a. m. a 4:00 p. m.</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                onClose();
                onNavigateToLocation();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Ver ubicación</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onNavigateToContact();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Medios de contacto</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
