import React from 'react';

export default function HeroSearchV8() {
  return (
    <section className="relative w-full bg-[#0e3b85] pt-24 pb-40 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Background Pattern - Institucional Clássico */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-[#FFDF00] font-bold tracking-widest text-sm mb-4 uppercase">Portal do Cidadão</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
          Prefeitura de Chã Grande
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl font-light">
          Encontre serviços, emissão de guias, portal da transparência e as últimas notícias da nossa cidade.
        </p>

        {/* Barra de Pesquisa Moderna com Seletor */}
        <div className="w-full bg-white rounded-xl shadow-2xl flex flex-col md:flex-row items-center p-2 gap-2 border-4 border-white/20">
          
          <div className="hidden md:flex items-center pl-4 pr-2 border-r border-slate-200 h-10">
            <select className="bg-transparent border-none outline-none text-slate-500 font-medium text-sm cursor-pointer focus:ring-0">
              <option>Todos os serviços</option>
              <option>Cidadão</option>
              <option>Empresa</option>
              <option>Servidor</option>
            </select>
          </div>

          <div className="flex-1 flex items-center w-full px-3 h-12 md:h-14">
            <svg className="w-5 h-5 text-slate-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Digite o que você procura..." 
              className="w-full bg-transparent border-none outline-none text-slate-700 text-lg placeholder-slate-400 h-full focus:ring-0"
            />
          </div>

          <button className="w-full md:w-auto bg-[#009B3A] hover:bg-[#007A2E] text-white px-8 h-12 md:h-14 rounded-lg font-bold text-base transition-colors shadow-sm flex items-center justify-center">
            Pesquisar
          </button>
        </div>

        <div className="mt-4 text-blue-200 text-sm flex flex-wrap justify-center gap-2">
          <span>Buscas comuns:</span>
          {['IPTU', 'Diário Oficial', 'Nota Fiscal', 'Licitações'].map(termo => (
            <a key={termo} href="#" className="hover:text-white underline decoration-blue-400/50 hover:decoration-white underline-offset-4 transition-colors">
              {termo}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
