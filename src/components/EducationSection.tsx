import React from 'react';
import { GraduationCap, BookOpen, Users, Award, CheckCircle } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="educacion" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-[#0A192F] to-[#0D1E3A] text-white relative overflow-hidden border-t border-sky-950">
      {/* Background Tech Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
              <span>Vocación Universitaria • UABC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white tracking-tight">
              Educación y salud bucal
            </h2>

            {/* Official Text strictly matching user request */}
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p className="bg-slate-800/40 border-l-4 border-sky-500 p-4 rounded-r-2xl">
                La Facultad de Odontología de la Universidad Autónoma de Baja California, campus Mexicali, forma parte de una institución comprometida con la educación superior y la formación de profesionales de la salud bucal.
              </p>
              <p>
                A través de sus actividades académicas y clínicas, contribuye a la formación de estudiantes de odontología y a la atención de las necesidades de salud bucal de la población.
              </p>
            </div>

            {/* Institutional Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-800/60 border border-sky-900/50">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Supervisión Clínica</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Docentes especialistas acompañan y evalúan cada etapa del tratamiento en clínica.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-800/60 border border-sky-900/50">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Práctica y Teoría</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Integración de fundamentos biomédicos y tecnología odontológica aplicada.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-sky-300 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Compromiso social con Mexicali y el estado de Baja California</span>
            </div>
          </div>

          {/* Right Photographic Composition */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-sky-400/30 shadow-2xl bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                alt="Formación académica y clínica de profesionales de la salud bucal"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-600 text-white inline-block mb-1">
                  Actividades Académicas y Clínicas
                </span>
                <p className="text-xs text-slate-200">
                  Formación de futuros cirujanos dentistas con ética y destreza técnica.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-sky-900/60 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=600&q=80"
                  alt="Laboratorios de odontología y simulación"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40"></div>
                <span className="absolute bottom-2 left-2 text-[11px] font-medium text-white px-2 py-0.5 rounded bg-black/60">
                  Laboratorio de Simulación
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-sky-900/60 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
                  alt="Instrumental clínico y asepsia"
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40"></div>
                <span className="absolute bottom-2 left-2 text-[11px] font-medium text-white px-2 py-0.5 rounded bg-black/60">
                  Bioseguridad y Asepsia
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
