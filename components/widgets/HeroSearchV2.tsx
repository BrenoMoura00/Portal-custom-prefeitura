import React from 'react';
import AcessoRapidoWidgetV2 from './AcessoRapidoWidgetV2';

export default function HeroSearchV2() {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-[#0A2540]">
      {/* Lado Esquerdo - 50% (Busca e Opções) */}
      <div className="w-full lg:w-[50%] px-[5%] lg:pl-[10%] lg:pr-16 py-16 lg:py-24 flex flex-col justify-center bg-[#0A2540] z-10 relative">
        
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Portal de Serviços</h2>
          <p className="text-blue-200 font-medium text-lg">Acesso rápido e simplificado a todos os serviços da Prefeitura Municipal.</p>
        </div>

        <div className="mb-12">
          <div className="flex items-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-5 py-4 transition-all focus-within:border-white/40">
            <input 
              type="text" 
              placeholder="O que você procura?" 
              className="flex-grow bg-transparent text-lg text-white placeholder-white/40 focus:outline-none"
            />
            <div className="h-6 w-px bg-white/30 mx-4 flex-shrink-0"></div>
            <button className="flex-shrink-0 text-white hover:text-white/70 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <span className="text-sm font-bold text-blue-300/70 mb-5 block uppercase tracking-wider">Acesso Rápido</span>
          <AcessoRapidoWidgetV2 />
        </div>

      </div>

      {/* Lado Direito - 50% (Imagem da Cidade) */}
      <div className="w-full lg:w-[50%] min-h-[400px] lg:min-h-auto relative">
        <img 
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Vista da Cidade" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay gradient para transição suave */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/60 to-transparent lg:block hidden"></div>
        {/* Gradient para mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent lg:hidden block"></div>
      </div>
    </div>
  );
}
