"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeaderV2() {
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
    <>
      <header 
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled 
            ? 'bg-slate-50/95 backdrop-blur-sm shadow-md border-b border-slate-200 py-3' 
            : 'bg-white shadow-sm py-5 border-b border-slate-100'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center max-w-[1400px]">
          
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 tracking-tight leading-none uppercase">Prefeitura Digital</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Versão 2</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors py-4"
                >
                  {item.name}
                  {item.subItems && (
                    <i className="fas fa-chevron-down text-[0.65rem] opacity-70 group-hover:rotate-180 transition-transform"></i>
                  )}
                </Link>
                
                {item.subItems && (
                  <div className="absolute top-[80%] left-0 hidden group-hover:flex flex-col bg-white min-w-[240px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-xl py-2 border border-slate-100 z-[1000] opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.subItems.map(sub => (
                      <Link 
                        key={sub.name}
                        href={sub.href}
                        className="px-5 py-3 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            </nav>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${showSearch ? 'w-64 opacity-100 ml-8' : 'w-0 opacity-0 ml-0'}`}>
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Buscar serviços..." 
                  className="w-full bg-slate-100 border border-transparent hover:border-slate-200 rounded-full py-2 pl-4 pr-10 text-sm focus:bg-white focus:border-blue-500/30 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-bold transition-all shadow-sm">
               Entrar
             </button>
          </div>

          <button 
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 py-4 px-6 flex flex-col shadow-lg max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col border-b border-slate-100 last:border-0">
                <Link 
                  href={item.href}
                  className="py-3 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors flex justify-between items-center"
                >
                  {item.name}
                  {item.subItems && <i className="fas fa-chevron-down text-xs text-slate-400"></i>}
                </Link>
                {item.subItems && (
                  <div className="flex flex-col pl-4 pb-2 border-l-2 border-slate-100 ml-2 mb-2">
                    {item.subItems.map(sub => (
                      <Link 
                        key={sub.name}
                        href={sub.href}
                        className="py-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
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
    </>
  );
}
