"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeaderV7() {
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
            ? 'bg-white/95 backdrop-blur-xl shadow-sm py-2 border-b border-slate-200/50' 
            : 'bg-white py-4 border-b border-slate-100 shadow-sm'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center max-w-[1400px]">
          
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#1351B4] tracking-tight leading-none">PREFEITURA</span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Digital V7</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <nav className="flex items-center gap-8">
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
                    <div className="absolute top-[90%] left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-white min-w-[260px] shadow-2xl rounded-2xl py-3 border border-slate-100 z-[1000] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      {item.subItems.map(sub => (
                        <Link 
                          key={sub.name}
                          href={sub.href}
                          className="px-6 py-3 text-[14px] font-medium text-slate-600 hover:text-[#1351B4] hover:bg-slate-50 transition-colors"
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
                  className="w-full bg-slate-100 border border-transparent hover:bg-slate-200/50 rounded-full py-2.5 pl-5 pr-12 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#1351B4]/30 focus:ring-4 focus:ring-[#1351B4]/10 focus:outline-none transition-all"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#1351B4] transition-colors">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          <button 
            className="lg:hidden p-2 text-slate-500 hover:text-[#1351B4] hover:bg-slate-50 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 py-4 px-6 flex flex-col shadow-2xl max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col border-b border-slate-50 last:border-0">
                <Link 
                  href={item.href}
                  className="py-4 text-[15px] font-bold text-slate-700 hover:text-[#1351B4] transition-colors flex justify-between items-center"
                >
                  {item.name}
                  {item.subItems && <i className="fas fa-chevron-down text-xs text-slate-300"></i>}
                </Link>
                {item.subItems && (
                  <div className="flex flex-col pl-4 pb-3 border-l-2 border-slate-100 ml-2 mb-2 gap-1">
                    {item.subItems.map(sub => (
                      <Link 
                        key={sub.name}
                        href={sub.href}
                        className="py-2.5 text-[14px] font-medium text-slate-500 hover:text-[#1351B4] transition-colors"
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
