"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeaderV9() {
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
        { name: 'Turismo', href: '#' },
        { name: 'Dados Gerais', href: '#' }
      ]
    },
    {
      name: 'Governo',
      href: '#',
      subItems: [
        { name: 'Prefeito', href: '#' },
        { name: 'Secretarias', href: '#' },
        { name: 'Órgãos', href: '#' }
      ]
    },
    {
      name: 'Serviços',
      href: '#',
      subItems: [
        { name: 'Nota Fiscal Eletrônica', href: '#' },
        { name: 'Contracheque', href: '#' },
        { name: 'Licitações', href: '#' }
      ]
    },
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
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-slate-950 py-4 border-b border-white/5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center max-w-[1400px]">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
               <i className="fas fa-cube text-white text-lg"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tighter leading-none">PREFEITURA<span className="font-light text-cyan-400">DIGITAL</span></span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link 
                    href={item.href}
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors py-4"
                  >
                    {item.name}
                    {item.subItems && (
                      <i className="fas fa-chevron-down text-[0.6rem] opacity-50 group-hover:rotate-180 transition-transform"></i>
                    )}
                  </Link>
                  
                  {item.subItems && (
                    <div className="absolute top-[85%] left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-slate-900 min-w-[240px] shadow-2xl rounded-2xl py-3 border border-white/10 z-[1000] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      {item.subItems.map(sub => (
                        <Link 
                          key={sub.name}
                          href={sub.href}
                          className="px-6 py-2.5 text-[14px] font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
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
                  className="w-full bg-white/5 border border-white/10 hover:bg-white/10 rounded-full py-2 pl-4 pr-10 text-sm text-white placeholder-slate-400 focus:bg-white/10 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4 ml-6">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center gap-2">
              Entrar gov.br <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col border-b border-white/5 last:border-0">
                <Link 
                  href={item.href}
                  className="py-3 text-sm font-medium text-white hover:text-cyan-400 transition-colors flex justify-between items-center"
                >
                  {item.name}
                  {item.subItems && <i className="fas fa-chevron-down text-xs text-slate-400"></i>}
                </Link>
                {item.subItems && (
                  <div className="flex flex-col pl-4 pb-2 border-l border-white/10 ml-2 mb-2 gap-2 mt-1">
                    {item.subItems.map(sub => (
                      <Link 
                        key={sub.name}
                        href={sub.href}
                        className="text-[13px] font-medium text-slate-400 hover:text-cyan-400 transition-colors"
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
