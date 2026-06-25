import React from 'react';

export default function HeroSearchV5() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-950 pt-24 pb-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6 backdrop-blur-md">
          Portal Oficial do Cidadão
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-400 tracking-tight mb-6">
          Prefeitura de <br className="hidden md:block" />
          <span className="text-white">Chã Grande</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 font-light">
          Serviços digitais, transparência e notícias. Tudo o que você precisa a um clique de distância, com uma experiência moderna e acessível.
        </p>

        {/* Search Bar Glassmorphism */}
        <div className="w-full max-w-3xl relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative flex items-center w-full h-16 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden focus-within:border-emerald-500/50 transition-colors">
            <div className="pl-6 text-slate-400 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Ex: IPTU, Alvará, Matrícula Escolar, Concursos..."
              className="w-full h-full bg-transparent border-none text-white px-4 focus:outline-none focus:ring-0 placeholder-slate-500 text-lg"
            />
            <button className="h-full px-8 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              Buscar
            </button>
          </div>
        </div>

        {/* Quick Suggestions */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['2ª Via IPTU', 'Portal da Transparência', 'Diário Oficial', 'Nota Fiscal Eletrônica'].map((item) => (
            <button key={item} className="px-4 py-2 rounded-full bg-white/5 hover:bg-emerald-500/20 border border-white/5 hover:border-emerald-500/30 text-slate-300 text-sm backdrop-blur-sm transition-all duration-300">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
