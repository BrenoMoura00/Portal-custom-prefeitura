"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeaderV4() {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            ? 'bg-white/95 backdrop-blur-sm shadow-md py-2 border-b border-slate-200' 
            : 'bg-white shadow-sm py-4 border-b border-slate-200'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center max-w-[1400px]">
          
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight leading-none text-[#1351B4]">PREFEITURA</span>
              <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Digital V4</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <nav className="flex items-center gap-6">
              {['Início', 'A Cidade', 'Governo', 'Serviços', 'Transparência'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Início' ? '/' : '#'}
                  className="text-sm font-bold text-slate-600 hover:text-[#1351B4] transition-colors whitespace-nowrap"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${showSearch ? 'w-64 opacity-100 ml-6' : 'w-0 opacity-0 ml-0'}`}>
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Buscar serviços..." 
                  className="w-full bg-slate-100 border border-transparent hover:border-slate-200 rounded-full py-2 pl-4 pr-10 text-sm focus:bg-white focus:border-[#1351B4]/30 focus:ring-4 focus:ring-[#1351B4]/10 focus:outline-none transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#1351B4] transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 py-4 px-6 flex flex-col gap-2 shadow-lg">
            {['Início', 'A Cidade', 'Governo', 'Serviços', 'Transparência'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Início' ? '/' : '#'}
                className="py-3 text-sm font-bold text-slate-600 hover:text-[#1351B4] border-b border-slate-100 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
