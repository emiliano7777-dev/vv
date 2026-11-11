import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, ExternalLink, Check, Copy, MessageSquare, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  onNavigateToLocation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigateToLocation }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const phone = '686 557 3268';
  const cleanPhone = '6865573268';
  const confirmedEmail = 'luis.beltran26@uabc.edu.mx';
  const facebookUrl = 'https://www.facebook.com/facultadde.odontologiamexicali/?locale=es_LA';
  const schedule = '8:00 a. m. a 4:00 p. m.';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(confirmedEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden border-t border-sky-950">
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>Canales Institucionales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Directorio de Contacto
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Comunícate directamente con la Facultad de Odontología UABC Mexicali para solicitar información sobre servicios clínicos, horarios y ubicación.
          </p>
        </div>

        {/* Big Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Teléfono */}
          <div className="group rounded-3xl bg-slate-800/80 border border-sky-900/60 hover:border-sky-400/60 p-6 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-sky-400 group-hover:scale-105 transition">
                <Phone className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Línea Telefónica
                </span>
                <h3 className="text-xl font-mono font-extrabold text-white mt-1">
                  {phone}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Conmutador y atención general de la Facultad de Odontología.
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-2">
              <a
                href={`tel:${cleanPhone}`}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm py-2.5 transition shadow-md shadow-blue-600/20"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-white py-1 transition cursor-pointer"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Número copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar número</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Correo Electrónico */}
          <div className="group rounded-3xl bg-slate-800/80 border border-sky-900/60 hover:border-sky-400/60 p-6 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-sky-400 group-hover:scale-105 transition">
                <Mail className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Correo Electrónico
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-1 break-all text-sky-300">
                  {confirmedEmail}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Contacto institucional confirmado de la facultad.
                </p>
                <div className="mt-2 text-[10px] text-amber-300 bg-amber-950/40 border border-amber-500/30 rounded-lg p-1.5">
                  Confirmado con dominio institucional @uabc.edu.mx
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-2">
              <a
                href={`mailto:${confirmedEmail}?subject=Consulta%20Servicios%20Shadow%20Dental%20UABC`}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm py-2.5 transition shadow-md shadow-blue-600/20"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar correo</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-white py-1 transition cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Correo copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar correo</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Facebook Oficial */}
          <div className="group rounded-3xl bg-slate-800/80 border border-sky-900/60 hover:border-sky-400/60 p-6 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-sky-400 group-hover:scale-105 transition">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Página Oficial de Facebook
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Facultad de Odontología
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Avisos oficiales, eventos académicos y actividades de la facultad en Mexicali.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm py-2.5 transition shadow-md shadow-blue-600/20"
              >
                <span>Visitar Facebook</span>
                <ExternalLink className="w-4 h-4 text-sky-200" />
              </a>
            </div>
          </div>

          {/* Card 4: Horario y Ubicación */}
          <div className="group rounded-3xl bg-slate-800/80 border border-sky-900/60 hover:border-sky-400/60 p-6 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-sky-400 group-hover:scale-105 transition">
                <Clock className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Horario Proporcionado
                </span>
                <h3 className="text-lg font-extrabold text-white mt-1">
                  {schedule}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Horario general de atención reportado para las instalaciones de la facultad.
                </p>
                <div className="mt-2 text-[10px] text-slate-400">
                  Campus Mexicali • Calafia
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onNavigateToLocation}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs sm:text-sm py-2.5 transition cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Ver ubicación</span>
              </button>
            </div>
          </div>

        </div>

        {/* Informational Guidance Notice (adhering strictly to prompt instructions) */}
        <div className="mt-10 rounded-2xl bg-slate-800/50 border border-slate-700/60 p-4 text-xs text-slate-400 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-slate-200">
              Directorio oficial de la Facultad de Odontología UABC campus Mexicali:
            </p>
            <p>
              Para acudir a valoraciones clínicas o solicitar informes de tratamientos, puedes presentarte directamente en las instalaciones durante el horario de atención establecido ({schedule}) o comunicarte al teléfono institucional ({phone}).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
