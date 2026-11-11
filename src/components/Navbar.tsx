import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Sparkles, ChevronRight, Info, BookOpen, Image as ImageIcon, Layers } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { getAssetUrl } from '../utils/assetUrl';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio', icon: Sparkles },
    { id: 'servicios', label: 'Servicios', icon: Layers },
    { id: 'informacion', label: 'Salud Bucal', icon: Info },
    { id: 'galeria', label: 'Galería', icon: ImageIcon },
    { id: 'educacion', label: 'Educación', icon: BookOpen },
    { id: 'ubicacion', label: 'Ubicación', icon: MapPin },
    { id: 'contacto', label: 'Contacto', icon: Phone },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A192F]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-sky-900/40'
            : 'bg-[#0A192F] border-b border-sky-950'
        }`}
      >
        {/* Top Institutional Notification / Campus Tagline */}
        <div className="bg-[#050C18] border-b border-sky-950/60 text-[11px] text-slate-300 px-4 py-1.5 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 font-medium text-sky-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                UABC Mexicali
              </span>
              <span className="text-slate-600">|</span>
              <span>Facultad de Odontología • Odontología Digital y Atención Universitaria</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="text-slate-400">Horario de atención: 8:00 a. m. a 4:00 p. m.</span>
              <a
                href="tel:6865573268"
                className="text-sky-300 hover:text-white transition flex items-center gap-1 font-mono font-medium"
              >
                <Phone className="w-3 h-3 text-sky-400" />
                686 557 3268
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <button
              onClick={() => handleLinkClick('inicio')}
              className="flex items-center gap-3.5 text-left group focus:outline-none cursor-pointer"
            >
              {/* Official Logo */}
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-indigo-700 p-0.5 shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition flex-shrink-0">
                <div className="w-full h-full bg-[#0A192F] rounded-[10px] overflow-hidden flex items-center justify-center relative">
                  <img
                    src={getAssetUrl('/assets/aistudio/logoshadow_25de809b.webp')}
                    alt="Logo Shadow Dental"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-300"
                  />
                  {/* Soft Orange tech dot */}
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-orange-400 ring-2 ring-[#0A192F]"></span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-sky-300 transition">
                    Shadow <span className="text-sky-400 font-black">Dental</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-500/20 text-sky-300 border border-blue-400/30">
                    UABC
                  </span>
                </div>
                <p className="text-xs text-slate-300 tracking-tight font-medium hidden sm:block">
                  Facultad de Odontología • Campus Mexicali
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white bg-blue-600/30 border border-sky-400/40 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <PWAInstallButton />
              
              <button
                onClick={() => handleLinkClick('contacto')}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs md:text-sm px-4 py-2.5 shadow-md shadow-blue-600/30 transition-all duration-200 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-sky-200" />
                <span>Contacto</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <PWAInstallButton />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none border border-slate-700/60 cursor-pointer"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0A192F]/98 border-b border-sky-900/60 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="py-2 mb-3 border-b border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Facultad de Odontología</p>
                <p className="text-[11px] text-sky-400">UABC Campus Mexicali</p>
              </div>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">
                8:00 AM - 4:00 PM
              </span>
            </div>

            <div className="space-y-1">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer ${
                      isActive
                        ? 'text-white bg-blue-600/30 border border-sky-400/40 font-semibold'
                        : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-sky-300' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="tel:6865573268"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-xl text-sm shadow-md transition"
              >
                <Phone className="w-4 h-4" />
                Llamar a la Facultad (686 557 3268)
              </a>
              <button
                onClick={() => handleLinkClick('ubicacion')}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-2.5 rounded-xl text-xs transition cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                Ver ubicación en Mexicali
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
