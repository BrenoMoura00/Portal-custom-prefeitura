"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeaderV10() {
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
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled 
            ? 'bg-white shadow-sm border-b border-neutral-200 py-3' 
            : 'bg-white py-4 md:py-6 border-b border-neutral-200'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center max-w-[1400px]">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-600 rounded-none flex items-center justify-center">
               <span className="w-3 h-3 bg-white block"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs md:text-sm font-bold text-neutral-900 tracking-widest leading-none uppercase">Prefeitura</span>
              <span className="text-lg md:text-xl font-light text-neutral-600 tracking-widest leading-tight uppercase">Chã Grande</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link 
                    href={item.href}
                    className="flex items-center gap-1.5 text-sm font-bold text-neutral-600 hover:text-emerald-700 uppercase tracking-widest transition-colors py-4"
                  >
                    {item.name}
                    {item.subItems && (
                      <i className="fas fa-chevron-down text-[0.6rem] opacity-50 group-hover:rotate-180 transition-transform"></i>
                    )}
                  </Link>
                  
                  {item.subItems && (
                    <div className="absolute top-[85%] left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-white min-w-[240px] shadow-xl border border-neutral-200 z-[1000] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      {item.subItems.map(sub => (
                        <Link 
                          key={sub.name}
                          href={sub.href}
                          className="px-6 py-3 text-[13px] font-bold text-neutral-600 hover:text-emerald-700 hover:bg-neutral-50 uppercase tracking-widest transition-colors border-b border-neutral-100 last:border-0"
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
                  placeholder="BUSCAR SERVIÇOS..." 
                  className="w-full bg-neutral-100 border-none rounded-none py-2 pl-4 pr-10 text-xs font-bold uppercase tracking-widest text-neutral-800 placeholder-neutral-400 focus:bg-neutral-200 focus:ring-0 focus:outline-none transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-emerald-600 transition-colors">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4 ml-6">
            <button className="bg-neutral-900 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-none text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
              <i className="fas fa-user"></i>
              Entrar gov.br
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-neutral-600 hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-lg py-4 px-4 flex flex-col max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col border-b border-neutral-100 last:border-0">
                <Link 
                  href={item.href}
                  className="px-4 py-3 text-sm font-bold text-neutral-700 uppercase tracking-widest hover:text-emerald-600 hover:bg-neutral-50 transition-colors flex justify-between items-center"
                >
                  {item.name}
                  {item.subItems && <i className="fas fa-chevron-down text-xs text-neutral-400"></i>}
                </Link>
                {item.subItems && (
                  <div className="flex flex-col pl-4 pb-2 border-l-2 border-emerald-600 ml-4 mb-2 gap-1 mt-1">
                    {item.subItems.map(sub => (
                      <Link 
                        key={sub.name}
                        href={sub.href}
                        className="px-4 py-2 text-[12px] font-bold text-neutral-500 hover:text-emerald-600 uppercase tracking-widest transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <hr className="my-2 border-neutral-100" />
            <button className="w-full bg-neutral-900 text-white px-4 py-3 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors">
              <i className="fas fa-user"></i>
              Entrar gov.br
            </button>
          </div>
        )}
      </header>
    </>
  );
}
