import React from 'react';
import { Phone, Mail, MapPin, Facebook, ArrowUp, Sparkles, ExternalLink } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { getAssetUrl } from '../utils/assetUrl';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050C18] text-slate-400 text-xs border-t border-sky-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Institution Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/40 overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src={getAssetUrl('/assets/aistudio/logoshadow_25de809b.webp')}
                  alt="Logo Shadow Dental"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  Shadow <span className="text-sky-400">Dental</span>
                </span>
                <span className="ml-2 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-sky-300 border border-blue-400/30">
                  UABC
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-md">
              Plataforma informativa de la Facultad de Odontología de la Universidad Autónoma de Baja California, campus Mexicali. Impulsando la educación odontológica superior y la atención bucal comunitaria.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <PWAInstallButton variant="footer" />
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Secciones
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Directorio de 9 Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('informacion')}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Salud Bucal y Prevención
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galeria')}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Galería Odontológica
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('educacion')}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Educación y Salud Bucal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ubicacion')}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Ubicación UABC Mexicali
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Directorio de Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Contact Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Facultad de Odontología UABC
            </h4>
            
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Zotoluca s/n, Calafia, C.P. 21040, Mexicali, Baja California, México.</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:6865573268" className="hover:text-white transition font-mono">
                  686 557 3268
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:luis.beltran26@uabc.edu.mx" className="hover:text-white transition break-all">
                  luis.beltran26@uabc.edu.mx
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a
                  href="https://www.facebook.com/facultadde.odontologiamexicali/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1"
                >
                  Facebook Oficial <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              Horario de atención: 8:00 a. m. a 4:00 p. m.
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Shadow Dental • Facultad de Odontología, Universidad Autónoma de Baja California, Campus Mexicali.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
