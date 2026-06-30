"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeaderV8() {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '/' },
    { 
      name: 'Cidadão', 
      href: '#',
      subItems: [
        { name: 'Portal da Transparência', href: '#' },
        { name: 'Ouvidoria', href: '#' },
        { name: 'Diário Oficial', href: '#' }
      ]
    },
    {
      name: 'Empresa',
      href: '#',
      subItems: [
        { name: 'Nota Fiscal Eletrônica', href: '#' },
        { name: 'Alvarás e Licenças', href: '#' },
        { name: 'Licitações', href: '#' }
      ]
    },
    {
      name: 'Servidor',
      href: '#',
      subItems: [
        { name: 'Contracheque', href: '#' },
        { name: 'Portal do Servidor', href: '#' }
      ]
    },
    { name: 'Turismo', href: '#' },
    { name: 'Transparência', href: '#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowSearch(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>


      <header 
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' 
            : 'bg-white py-4 md:py-6 border-b border-slate-100'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center max-w-7xl">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#1351B4] to-[#009B3A] rounded-xl flex items-center justify-center shadow-inner">
               <span className="text-white font-bold text-xl md:text-2xl tracking-tighter">V8</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs md:text-sm font-extrabold text-slate-800 tracking-tight leading-none uppercase">Prefeitura de</span>
              <span className="text-lg md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#1351B4] to-[#009B3A] tracking-tighter leading-tight">Chã Grande</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link 
                    href={item.href}
                    className="flex items-center gap-1.5 text-[15px] font-semibold text-slate-600 hover:text-[#1351B4] transition-colors py-4"
                  >
                    {item.name}
                    {item.subItems && (
                      <i className="fas fa-chevron-down text-[0.6rem] opacity-50 group-hover:rotate-180 transition-transform"></i>
                    )}
                  </Link>
                  
                  {item.subItems && (
                    <div className="absolute top-[85%] left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-white min-w-[240px] shadow-2xl rounded-2xl py-3 border border-slate-100 z-[1000] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      {item.subItems.map(sub => (
                        <Link 
                          key={sub.name}
                          href={sub.href}
                          className="px-6 py-2.5 text-[14px] font-medium text-slate-600 hover:text-[#1351B4] hover:bg-slate-50 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${showSearch ? 'w-64 opacity-100 ml-6' : 'w-0 opacity-0 ml-0'}`}>
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Buscar serviços..." 
                  className="w-full bg-slate-100 border border-transparent hover:bg-slate-200/50 rounded-full py-2 pl-4 pr-10 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1351B4]/30 focus:ring-4 focus:ring-[#1351B4]/10 focus:outline-none transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#1351B4] transition-colors">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3 ml-6">
            <button className="bg-[#1351B4] hover:bg-[#0e3b85] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Entrar gov.br
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl py-4 px-4 flex flex-col max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col border-b border-slate-50 last:border-0">
                <Link 
                  href={item.href}
                  className="py-3 px-4 rounded-lg text-base font-semibold text-slate-700 hover:text-[#1351B4] hover:bg-slate-50 transition-colors flex justify-between items-center"
                >
                  {item.name}
                  {item.subItems && <i className="fas fa-chevron-down text-xs text-slate-400"></i>}
                </Link>
                {item.subItems && (
                  <div className="flex flex-col pl-6 pb-2 border-l-2 border-slate-100 ml-6 mb-2 gap-1 mt-1">
                    {item.subItems.map(sub => (
                      <Link 
                        key={sub.name}
                        href={sub.href}
                        className="py-2 text-[14px] font-medium text-slate-500 hover:text-[#1351B4] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <hr className="my-2 border-slate-100" />
            <button className="w-full bg-[#1351B4] text-white px-4 py-3 rounded-lg text-base font-bold shadow flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Entrar gov.br
            </button>
          </div>
        )}
      </header>
    </>
  );
}
