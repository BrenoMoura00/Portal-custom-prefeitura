import React from 'react';

export default function HeroSearchV7() {
  return (
    <section className="relative pt-24 pb-24 px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center bg-[#1351B4] text-white overflow-hidden">
      
      {/* Decorative Geometric Shapes (Gov Style) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="absolute -top-20 -right-20 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M42.7,-73.4C55.9,-67.2,67.6,-56.3,76.5,-43.3C85.4,-30.3,91.4,-15.1,90.6,-0.4C89.9,14.3,82.4,28.6,73.1,41.2C63.8,53.8,52.8,64.7,39.6,71.2C26.4,77.8,11.1,80,-4.5,82.6C-20,85.2,-35.8,88.2,-48.5,81.4C-61.2,74.7,-70.8,58.2,-77.8,42.4C-84.8,26.5,-89.2,11.3,-88.4,-3.5C-87.6,-18.3,-81.6,-32.7,-72.1,-43.8C-62.6,-54.9,-49.6,-62.7,-36.5,-69C-23.4,-75.3,-10.2,-80.1,2.6,-84.6C15.4,-89.1,30.8,-93.3,42.7,-73.4Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute -bottom-20 -left-20 w-80 h-80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#009B3A" d="M47.7,-68.8C59.9,-58.5,67,-42.6,73,-26.8C79,-11,83.9,4.7,80.1,18.8C76.2,32.8,63.6,45.2,50,54.9C36.4,64.6,21.8,71.5,5.6,72.4C-10.6,73.2,-28.4,67.9,-43.3,58C-58.1,48.1,-70.1,33.5,-75.3,16.8C-80.5,0.2,-78.8,-18.6,-70.8,-34C-62.8,-49.4,-48.6,-61.4,-33.5,-70C-18.4,-78.6,-2.4,-83.8,11.8,-80.8C26,-77.9,40.1,-66.8,47.7,-68.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 relative z-10 mt-8">
        <span className="w-2 h-2 rounded-full bg-[#FFDF00] animate-pulse"></span>
        <span className="text-sm font-bold tracking-wide uppercase text-white/90">Portal Oficial de Chã Grande</span>
      </div>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 relative z-10 drop-shadow-md">
        Como podemos <br className="hidden sm:block" />
        <span className="text-[#FFDF00]">ajudar você hoje?</span>
      </h1>
      
      <p className="text-lg md:text-xl text-white/90 font-medium mb-12 max-w-2xl relative z-10">
        Acesso rápido e simplificado a todos os serviços, informações e novidades da nossa cidade.
      </p>

      {/* Barra de Pesquisa */}
      <div className="w-full max-w-3xl relative group z-10">
        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        <div className="relative flex items-center bg-white rounded-full p-2 shadow-2xl border-4 border-white/20">
          <div className="pl-6 pr-4 text-[#1351B4]">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Pesquisar por IPTU, Nota Fiscal, Concursos..." 
            className="flex-1 bg-transparent border-none outline-none text-slate-800 text-lg md:text-xl font-medium placeholder-slate-400 py-3 md:py-4 w-full"
          />
          <button className="bg-[#009B3A] hover:bg-[#007A2E] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-colors shadow-md ml-2 uppercase tracking-wide">
            Buscar
          </button>
        </div>
      </div>

      {/* Sugestões de Busca */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 relative z-10">
        <span className="text-sm font-bold text-white/90 uppercase tracking-widest mr-2">Mais buscados:</span>
        {['Refis 2026', 'Nota Fiscal', 'Portal do Servidor', 'Ouvidoria'].map((termo, i) => (
          <a key={i} href="#" className="px-4 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-bold transition-colors border border-white/20 shadow-sm">
            {termo}
          </a>
        ))}
      </div>

    </section>
  );
}
