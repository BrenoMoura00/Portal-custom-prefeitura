import React from 'react';

export default function DoacoesWidget() {
  return (
    <div className="bg-orange-500 rounded-3xl p-8 relative overflow-hidden text-white flex flex-col h-full justify-between shadow-xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full opacity-50 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
          Campanha Ativa
        </div>
        
        <h2 className="text-4xl font-bold mb-4 leading-tight">Faça a Diferença Hoje.</h2>
        <p className="text-orange-100 text-lg mb-8 max-w-sm">
          Sua doação ajuda a manter mais de 50 projetos sociais ativos, impactando milhares de vidas na nossa comunidade.
        </p>

        <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm mb-8 border border-white/20">
          <div className="flex justify-between text-sm mb-2 font-semibold">
            <span>Meta: R$ 50.000</span>
            <span>75% Concluído</span>
          </div>
          <div className="w-full bg-orange-900/40 rounded-full h-3">
            <div className="bg-white h-3 rounded-full w-3/4 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex gap-4">
        <button className="flex-1 bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-6 rounded-xl transition-colors shadow-lg shadow-black/10 text-center">
          Quero Doar
        </button>
        <button className="flex-1 bg-transparent border-2 border-white/50 text-white hover:bg-white/10 font-bold py-4 px-6 rounded-xl transition-colors text-center">
          Ver Projetos
        </button>
      </div>
    </div>
  );
}
