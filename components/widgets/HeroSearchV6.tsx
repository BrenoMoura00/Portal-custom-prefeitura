'use client';
import React, { useEffect, useState } from 'react';

export default function HeroSearchV6() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full min-h-[650px] overflow-hidden bg-slate-50 flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-semibold text-slate-700 tracking-wide uppercase">Portal de Serviços Inteligente</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Prefeitura de <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
            Chã Grande
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg sm:text-xl text-slate-600 mb-10 font-medium">
          Acesso rápido a serviços, notícias e transparência. O que você procura hoje?
        </p>

        <div className="w-full max-w-3xl relative group mb-12">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-indigo-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
          
          <div className="relative flex items-center w-full h-16 sm:h-20 bg-white/80 backdrop-blur-xl border border-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-emerald-500/50">
            <div className="pl-6 sm:pl-8 text-slate-400">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Ex: Emitir IPTU, Portal da Transparência, Editais..."
              className="w-full h-full bg-transparent border-none text-slate-800 px-4 focus:outline-none focus:ring-0 text-base sm:text-lg placeholder-slate-400 font-medium"
            />
            <div className="pr-2 sm:pr-3 flex items-center h-full">
              <button className="h-12 sm:h-14 px-6 sm:px-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                <span>Buscar</span>
                <svg className="w-4 h-4 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Buscas Frequentes</span>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Nota Fiscal', icon: '📄' },
              { label: 'Ouvidoria', icon: '🗣️' },
              { label: 'Licitações', icon: '⚖️' },
              { label: 'Concursos', icon: '🎯' },
              { label: 'Diário Oficial', icon: '📰' }
            ].map((topic) => (
              <button 
                key={topic.label} 
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/60 hover:bg-white border border-slate-200/60 hover:border-emerald-500/30 text-slate-700 text-sm font-medium backdrop-blur-md shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{topic.icon}</span>
                {topic.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
