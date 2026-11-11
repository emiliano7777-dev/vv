import React, { useState } from 'react';
import { Download, Share2, PlusSquare, X, Smartphone } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface Props {
  className?: string;
  variant?: 'nav' | 'compact' | 'footer';
}

export const PWAInstallButton: React.FC<Props> = ({ className = '', variant = 'nav' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-medium text-xs md:text-sm px-3.5 py-2 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${className}`}
        title="Instalar Shadow Dental en tu dispositivo"
      >
        <Download className="w-4 h-4 text-sky-200 animate-bounce" />
        <span>Instalar App</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className={`inline-flex items-center gap-2 rounded-xl border border-sky-400/40 bg-sky-950/40 hover:bg-sky-900/60 text-sky-200 font-medium text-xs px-3 py-1.5 transition cursor-pointer ${className}`}
          title="Instalar en iOS / iPhone"
        >
          <Smartphone className="w-3.5 h-3.5 text-sky-300" />
          <span>Instalar en iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-sky-500/30 p-6 shadow-2xl text-white relative">
              <button
                onClick={() => setShowIOSGuide(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Instalar Shadow Dental</h3>
                  <p className="text-xs text-sky-300">iPhone / iPad (Safari)</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Accede rápidamente a los servicios y ubicación de la Facultad de Odontología desde tu pantalla de inicio:
              </p>

              <div className="space-y-3 bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/60 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600/40 text-blue-300 flex items-center justify-center font-bold text-[11px]">1</span>
                  <span>Toca el botón <strong className="text-sky-300 inline-flex items-center gap-1"><Share2 className="w-3 h-3 inline" /> Compartir</strong> en la barra inferior de Safari.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600/40 text-blue-300 flex items-center justify-center font-bold text-[11px]">2</span>
                  <span>Desplaza la lista y selecciona <strong className="text-sky-300 inline-flex items-center gap-1"><PlusSquare className="w-3 h-3 inline" /> Agregar a pantalla de inicio</strong>.</span>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-blue-600 hover:bg-blue-500 py-2.5 text-xs font-semibold text-white transition cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Ambient shortcut if browser doesn't expose beforeinstallprompt yet
  if (variant === 'footer') {
    return (
      <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
        <Smartphone className="w-3.5 h-3.5 text-sky-400" />
        <span>PWA lista para instalar en Chrome, Edge y móviles</span>
      </div>
    );
  }

  return null;
};
