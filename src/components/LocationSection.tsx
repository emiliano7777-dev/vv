import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Copy, Check, Clock, Compass, Share2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress = 'Facultad de Odontología UABC, campus Mexicali. Zotoluca s/n, Calafia, C.P. 21040, Mexicali, Baja California, México.';
  const mapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Facultad+de+Odontolog%C3%ADa+UABC+Mexicali+Zotoluca';
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Facultad+de+Odontolog%C3%ADa+UABC+Mexicali+Zotoluca';
  const shareLink1 = 'https://share.google/EnuLjWyLjw37cCSAb';
  const shareLink2 = 'https://share.google/KyJXjoJF5QuJUNiC0';

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="ubicacion" className="py-16 sm:py-24 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Campus Universitario Mexicali</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Visítanos en UABC Mexicali
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Las instalaciones y clínicas de la Facultad de Odontología se encuentran ubicadas en la zona universitaria de Calafia en Mexicali. Te mostramos cómo llegar fácilmente.
          </p>
        </div>

        {/* Two-Column Location Card + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Address, Badges, and Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            
            <div className="space-y-6">
              {/* Institution Emblem Pill */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0A192F] text-white flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0A192F]">Facultad de Odontología</h3>
                  <p className="text-xs text-blue-600 font-semibold">UABC • Campus Mexicali</p>
                </div>
              </div>

              {/* Physical Address Block */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Dirección Oficial
                  </span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">¡Copiada!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar dirección</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                  Zotoluca s/n, Calafia, C.P. 21040, Mexicali, Baja California, México.
                </p>

                <div className="pt-2 text-xs text-slate-600 border-t border-slate-100 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-sky-500" />
                  <span>Zona Universitaria Calafia • Fácil acceso vial y transporte público</span>
                </div>
              </div>

              {/* Reference Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Horario de atención informado:</span>
                    <span>8:00 a. m. a 4:00 p. m.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <Navigation className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Acceso clínico:</span>
                    <span>Recepción de la Facultad de Odontología, área de clínicas universitarias.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Actions */}
            <div className="pt-4 border-t border-slate-200/80 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-4 py-3 shadow-md shadow-blue-600/20 transition-all cursor-pointer text-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Abrir en Google Maps</span>
                </a>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-4 py-3 shadow-md transition-all cursor-pointer text-center"
                >
                  <Navigation className="w-4 h-4 text-sky-400" />
                  <span>Obtener indicaciones</span>
                </a>
              </div>

              {/* Additional Shared Location Links */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1 font-semibold text-slate-700">
                  <Share2 className="w-3.5 h-3.5 text-blue-600" /> Enlaces de ubicación compartidos:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={shareLink1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1 font-medium"
                  >
                    Ubicación 1 <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>•</span>
                  <a
                    href={shareLink2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1 font-medium"
                  >
                    Ubicación 2 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Google Maps Iframe */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              
              {/* Interactive Google Maps Iframe */}
              <iframe
                title="Mapa Facultad de Odontología UABC Mexicali"
                src="https://maps.google.com/maps?q=Facultad+de+Odontolog%C3%ADa+UABC+Mexicali+Zotoluca&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Map Label Badge */}
              <div className="absolute top-4 left-4 bg-[#0A192F]/90 backdrop-blur-md text-white px-3.5 py-2 rounded-xl border border-sky-400/40 shadow-lg flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <div>
                  <p className="text-xs font-bold leading-tight">UABC Campus Mexicali</p>
                  <p className="text-[10px] text-sky-300">Facultad de Odontología</p>
                </div>
              </div>

              {/* Bottom Quick Open Button */}
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-slate-800 text-xs font-bold px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2 transition hover:text-blue-600"
              >
                <span>Ver en pantalla completa</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
