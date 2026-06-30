import React from 'react';

export default function ConhecaCidadeV8() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Informações Institucionais da Cidade */}
        <div className="flex flex-col">
          <span className="text-[#009B3A] font-bold text-sm uppercase tracking-wider mb-2 block">
            Nossa História e Cultura
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0e3b85] leading-tight mb-6">
            Conheça Chã Grande
          </h2>
          
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Localizada no Agreste Pernambucano, Chã Grande é um município em constante crescimento, conhecido por sua agricultura familiar, clima agradável e povo acolhedor. A cidade destaca-se na produção de hortifruti e turismo rural.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8 border-y border-slate-200 py-6">
            <div>
              <span className="block text-slate-400 text-xs font-bold uppercase mb-1">População Estimada (IBGE)</span>
              <span className="text-2xl font-black text-slate-800">22.846 <span className="text-sm font-medium text-slate-500">hab.</span></span>
            </div>
            <div>
              <span className="block text-slate-400 text-xs font-bold uppercase mb-1">Área Territorial</span>
              <span className="text-2xl font-black text-slate-800">84,85 <span className="text-sm font-medium text-slate-500">km²</span></span>
            </div>
            <div>
              <span className="block text-slate-400 text-xs font-bold uppercase mb-1">Aniversário da Cidade</span>
              <span className="text-2xl font-black text-slate-800">20 de Dezembro</span>
            </div>
            <div>
              <span className="block text-slate-400 text-xs font-bold uppercase mb-1">Densidade Demográfica</span>
              <span className="text-2xl font-black text-slate-800">269 <span className="text-sm font-medium text-slate-500">hab/km²</span></span>
            </div>
          </div>

          <div>
            <a href="#" className="inline-flex items-center gap-2 text-[#1351B4] font-bold uppercase tracking-wider text-sm hover:underline underline-offset-4">
              Acesse o Guia Completo da Cidade <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Imagem da Cidade Sóbria */}
        <div className="w-full aspect-[4/3] bg-slate-200 overflow-hidden rounded-sm border border-slate-300 relative group">
          <img 
            src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Vista da Cidade de Chã Grande" 
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 border-[6px] border-white/20 pointer-events-none"></div>
        </div>

      </div>

    </section>
  );
}
