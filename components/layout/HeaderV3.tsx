"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeaderV3() {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '/' },
    { 
      name: 'A Cidade', 
      href: '#',
      subItems: [
        { name: 'História', href: '#' },
        { name: 'Dados e Características', href: '#' },
        { name: 'Turismo', href: '#' }
      ]
    },
    {
      name: 'Governo',
      href: '#',
      subItems: [
        { name: 'Prefeito e Vice', href: '#' },
        { name: 'Secretarias', href: '#' },
        { name: 'Organograma', href: '#' }
      ]
    },
    {
      name: 'Serviços',
      href: '#',
      subItems: [
        { name: 'Portal da Transparência', href: '#' },
        { name: 'Nota Fiscal Eletrônica', href: '#' },
        { name: 'e-SIC', href: '#' }
      ]
    },
    { name: 'Transparência', href: '#' }
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
    <div className="sticky top-0 z-50 h-0 w-full">
      <header 
        className={`absolute top-4 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out w-[90%] max-w-7xl ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-lg shadow-xl py-3 rounded-xl' 
            : 'bg-white shadow-md py-4 rounded-xl'
        }`}
      >
        <div className="px-6 flex justify-between items-center">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-inner">
               <span className="text-white font-bold text-sm">V3</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-slate-800 tracking-tight leading-none">PREFEITURA</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <nav className="flex items-center gap-2">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-indigo-600 hover:bg-white px-4 py-2 rounded-full transition-all"
                >
                  {item.name}
                  {item.subItems && (
                    <i className="fas fa-chevron-down text-[0.6rem] opacity-70 group-hover:rotate-180 transition-transform"></i>
                  )}
                </Link>
                
                {item.subItems && (
                  <div className="absolute top-[110%] left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-white min-w-[220px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-2xl p-2 border border-slate-100 z-[1000] opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.subItems.map(sub => (
                      <Link 
                        key={sub.name}
                        href={sub.href}
                        className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            </nav>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${showSearch ? 'w-56 opacity-100 ml-4' : 'w-0 opacity-0 ml-0'}`}>
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Buscar serviços..." 
                  className="w-full bg-slate-100 border border-slate-200 rounded-full py-2 pl-4 pr-10 text-sm focus:bg-white focus:border-[#0A2540] focus:ring-4 focus:ring-[#0A2540]/10 focus:outline-none transition-all shadow-sm"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0A2540] transition-colors">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          <button 
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl p-6 flex flex-col gap-3 shadow-xl border border-slate-100">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col gap-1">
                <Link 
                  href={item.href}
                  className="py-4 px-5 text-base font-bold text-slate-700 bg-slate-50 rounded-xl hover:text-indigo-600 hover:bg-indigo-50 transition-colors flex justify-between items-center"
                >
                  {item.name}
                  {item.subItems && <i className="fas fa-chevron-down text-sm opacity-50"></i>}
                </Link>
                {item.subItems && (
                  <div className="flex flex-col pl-4 gap-1 mt-1 mb-2 border-l-2 border-slate-100 ml-5">
                    {item.subItems.map(sub => (
                      <Link 
                        key={sub.name}
                        href={sub.href}
                        className="py-3 px-4 text-sm font-bold text-slate-500 bg-slate-50/50 rounded-lg hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}
