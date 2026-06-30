import React from 'react';

export default function HeroSearchV9() {
  const commonSearches = [
    "Emitir IPTU 2024",
    "Agendar vacina",
    "Portal do Servidor",
    "Diário Oficial",
    "Licitações em andamento"
  ];

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center px-4 overflow-hidden bg-slate-950">
      
      {/* Background Animado / Neon Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-cyan-600/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-indigo-600/20 blur-[100px] pointer-events-none"></div>
      
      {/* Malha de fundo pontilhada */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center mt-12 md:mt-0">
        
        {/* Saudação e Contexto */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-sm font-medium text-slate-300 tracking-wide">Portal Digital de Serviços</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
          Como podemos <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">ajudar hoje?</span>
        </h1>
        
        <p className="text-slate-400 text-lg mb-12 max-w-xl">
          Faça uma pergunta, busque um serviço ou acesse rapidamente as informações do município.
        </p>

        {/* Barra de Pesquisa AI-Like */}
        <div className="w-full relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative flex items-center w-full h-16 md:h-20 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all focus-within:border-cyan-500/50 focus-within:bg-slate-900">
            <div className="pl-6 md:pl-8 text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <input 
              type="text" 
              placeholder="Digite o que você procura..." 
              className="w-full h-full bg-transparent border-none outline-none text-white text-lg md:text-xl px-4 md:px-6 placeholder-slate-500"
            />

            <div className="pr-2 md:pr-4">
              <button className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Tags de Busca Rápida */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {commonSearches.map((search, index) => (
            <button 
              key={index}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-slate-300 text-sm font-medium transition-all hover:scale-105 active:scale-95"
            >
              {search}
            </button>
          ))}
        </div>

      </div>
      
    </section>
  );
}
