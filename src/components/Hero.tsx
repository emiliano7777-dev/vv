import React from 'react';
import { ArrowRight, MapPin, ShieldCheck, Stethoscope, Smile, Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="inicio" className="relative bg-gradient-to-b from-[#0A192F] via-[#0E2240] to-slate-900 text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-sky-950">
      {/* Background Tech Mesh & Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Column 1: Copy and CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Institution Badge with User's Logo */}
            <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-blue-900/60 border border-sky-400/30 text-sky-300 text-xs font-semibold backdrop-blur-md shadow-md">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-sky-400/50 shadow-xs flex-shrink-0 bg-[#0A192F]">
                <img
                  src={getAssetUrl('/assets/aistudio/logoshadow_25de809b.webp')}
                  alt="Logo Shadow Dental"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="font-bold text-white">Facultad de Odontología</span>
                <span className="hidden sm:inline text-sky-400">•</span>
                <span className="text-sky-300 font-medium">UABC Mexicali</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-orange-400 ml-auto sm:ml-1"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              La salud de tu sonrisa{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-sky-200">
                comienza aquí
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Conoce las áreas de atención odontológica de la Facultad de Odontología de la UABC, campus Mexicali. Explora nuestros servicios, descubre los diferentes tratamientos y encuentra la información que necesitas.
            </p>

            {/* Quick Benefits Tags */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>9 Clínicas especializadas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Supervisión docente y académica</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>Atención a la comunidad</span>
              </div>
            </div>

            {/* Main CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onNavigate('servicios')}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base px-6 py-3.5 shadow-lg shadow-blue-600/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explorar servicios</span>
                <ArrowRight className="w-4 h-4 text-sky-200" />
              </button>

              <button
                onClick={() => onNavigate('ubicacion')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800/80 hover:bg-slate-750 text-slate-200 hover:text-white border border-sky-500/30 font-semibold text-sm sm:text-base px-5 py-3.5 transition-all duration-200 cursor-pointer backdrop-blur-sm"
              >
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Conocer ubicación</span>
              </button>
            </div>
          </div>

          {/* Column 2: High-tech Visual & Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow & Gradient Border */}
              <div className="relative rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 p-1 shadow-2xl shadow-blue-950/60">
                <div className="relative rounded-[14px] overflow-hidden bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                    alt="Consultorio odontológico moderno con tecnología de vanguardia"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle Tech Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  {/* Corner Tech Watermark */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md border border-sky-500/30 text-[11px] text-sky-200">
                      <Sparkles className="w-3 h-3 text-orange-400" />
                      Clínica Odontológica Universitaria
                    </span>
                    <span className="text-[10px] text-slate-300 font-mono">UABC MEXICALI</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Chip 1: Top Right */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-slate-900/90 border border-sky-400/40 rounded-xl px-3.5 py-2 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-sky-300">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Catálogo Oficial</p>
                  <p className="text-xs font-bold text-white">9 Servicios Clínicos</p>
                </div>
              </div>

              {/* Floating Tech Chip 2: Bottom Left - Official Logo Highlight */}
              <div className="absolute -bottom-6 -left-2 sm:-left-4 bg-slate-900/95 border border-sky-400/50 rounded-2xl p-2.5 sm:p-3 shadow-2xl backdrop-blur-md flex items-center gap-3 z-20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white p-1 border border-sky-500/40 flex items-center justify-center flex-shrink-0 shadow-md">
                  <img
                    src={getAssetUrl('/assets/aistudio/logoodonto_23e71318.jpg')}
                    alt="Logo Oficial Odontología Mexicali"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">
                    Logo Oficial
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-white block">
                    Odontología Mexicali
                  </span>
                  <span className="text-[10px] text-slate-300 block font-medium">
                    UABC Campus Mexicali
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 3 Concepts Section: Prevención, Atención odontológica, Salud bucal */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-sky-900/40">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase font-extrabold tracking-widest text-sky-400">
              Pilares Fundamentales
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Enfoque integral en el cuidado bucal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Concept 1: Prevención */}
            <div className="group relative rounded-2xl bg-slate-900/70 border border-sky-900/50 hover:border-sky-400/60 p-6 transition-all duration-300 hover:bg-slate-800/80 hover:-translate-y-1 shadow-md">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-sky-400 group-hover:scale-105 transition">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">Concepto 01</span>
                  <h3 className="text-lg font-bold text-white">Prevención</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Anticipación y detección temprana de afecciones orales. Fomentamos el cuidado sistemático del esmalte, la encía y hábitos saludables para evitar tratamientos complejos a futuro.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-sky-300 flex items-center gap-1 font-medium">
                <span>Limpiezas • Revisiones periódicas</span>
              </div>
            </div>

            {/* Concept 2: Atención odontológica */}
            <div className="group relative rounded-2xl bg-slate-900/70 border border-sky-900/50 hover:border-sky-400/60 p-6 transition-all duration-300 hover:bg-slate-800/80 hover:-translate-y-1 shadow-md">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-105 transition">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">Concepto 02</span>
                  <h3 className="text-lg font-bold text-white">Atención odontológica</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Práctica clínica guiada por profesores especialistas y estudiantes en formación de la UABC Mexicali, garantizando rigor técnico, instrumental esterilizado y enfoque humano.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-sky-300 flex items-center gap-1 font-medium">
                <span>Diagnóstico • Restauración • Cirugía</span>
              </div>
            </div>

            {/* Concept 3: Salud bucal */}
            <div className="group relative rounded-2xl bg-slate-900/70 border border-sky-900/50 hover:border-sky-400/60 p-6 transition-all duration-300 hover:bg-slate-800/80 hover:-translate-y-1 shadow-md">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-sky-300 group-hover:scale-105 transition">
                  <Smile className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-orange-400 tracking-wider">Concepto 03</span>
                  <h3 className="text-lg font-bold text-white">Salud bucal</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Equilibrio funcional, masticatorio y estético que repercute directamente en la calidad de vida, nutrición, autoestima y bienestar general de las personas.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-sky-300 flex items-center gap-1 font-medium">
                <span>Función masticatoria • Sonrisa plena</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
