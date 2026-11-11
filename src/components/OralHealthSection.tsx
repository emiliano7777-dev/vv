import React from 'react';
import { Stethoscope, ShieldCheck, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { HEALTH_ARTICLES } from '../data/healthData';

export const OralHealthSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-sky-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="informacion" className="py-16 sm:py-24 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Educación para el Autocuidado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Conoce más sobre tu salud bucal
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Información preventiva y recomendaciones esenciales para preservar el bienestar de tu boca, encías y dientes a lo largo del tiempo.
          </p>
        </div>

        {/* 3 Informative Blocks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {HEALTH_ARTICLES.map((article, index) => (
            <article
              key={article.id}
              className="group bg-slate-50 rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-sky-300"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Number Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#0A192F] px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>Guía {index + 1}</span>
                  </div>

                  {/* Subtitle pill */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs text-sky-200 font-medium">
                      {article.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
                      {getIcon(article.iconName)}
                    </div>
                    <h3 className="text-lg font-bold text-[#0A192F] leading-snug">
                      {article.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {article.summary}
                  </p>

                  <div className="pt-2 border-t border-slate-200/60 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
                      Puntos recomendados:
                    </span>
                    <ul className="space-y-2">
                      {article.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="px-6 py-3.5 bg-slate-100/70 border-t border-slate-200/80 text-[11px] text-slate-600 flex items-center justify-between">
                <span>Facultad de Odontología UABC</span>
                <span className="font-medium text-blue-600">Prevención activa</span>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer / Guideline Note */}
        <div className="mt-12 rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-5 flex items-start gap-3 text-xs text-slate-600">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Información con fines educativos y de orientación preventiva:</strong> Este contenido busca promover el cuidado de la cavidad bucal y la cultura del autocuidado. No sustituye una consulta, valoración clínica presencial ni constituye un diagnóstico personalizado. Acude a las clínicas de la Facultad de Odontología UABC Mexicali para una revisión profesional individualizada.
          </p>
        </div>

      </div>
    </section>
  );
};
