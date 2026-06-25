import React from 'react';

export default function HeroSearchV4() {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-0 lg:min-h-[600px] flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

        <div className="w-full lg:w-[55%] lg:pr-16 lg:py-20 flex flex-col justify-center order-2 lg:order-1">

          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#1351B4] flex items-center justify-center shadow-md shadow-blue-900/20">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L3 7v2h18V7L12 2zm0 2.5l5.5 3h-11L12 4.5zM5 11v7a2 2 0 002 2h2v-6h6v6h2a2 2 0 002-2v-7H5z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#1351B4] uppercase tracking-widest">Prefeitura Municipal</span>
              <span className="text-[11px] text-slate-500 font-medium">Chã Grande — PE</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-[3.2rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-5">
            Serviços públicos <br />
            ao alcance de{' '}
            <span className="relative inline-block">
              <span className="relative z-10">todos</span>
              <svg className="absolute -bottom-1 left-0 w-full h-3 text-[#FFCD07] z-0" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0 8 Q50 0, 100 6 Q150 12, 200 4" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Encontre o que precisa de forma rápida. Emita guias, agende atendimentos, acompanhe licitações e muito mais.
          </p>

          <div className="w-full max-w-xl group">
            <div className="flex items-center bg-white border-2 border-slate-200 rounded-2xl p-1.5 shadow-lg shadow-slate-200/60 transition-all duration-300 focus-within:border-[#1351B4] focus-within:shadow-xl focus-within:shadow-blue-100">
              <div className="pl-4 pointer-events-none">
                <svg className="w-5 h-5 text-slate-400 group-focus-within:text-[#1351B4] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <input
                type="text"
                placeholder="IPTU, Nota Fiscal, Matrícula, Licitações..."
                className="w-full bg-transparent border-0 text-slate-800 placeholder-slate-400 py-3 pl-3 pr-4 text-base focus:outline-none focus:ring-0"
              />

              <button className="bg-[#1351B4] text-white hover:bg-[#0C326F] font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap text-sm">
                Buscar
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {[
              { icon: '📄', label: 'Nota Fiscal' },
              { icon: '🏠', label: 'IPTU 2026' },
              { icon: '🏥', label: 'Agendar Saúde' },
              { icon: '📋', label: 'Concursos' },
            ].map((item, i) => (
              <button key={i} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#1351B4] bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-[#1351B4]/30 px-3.5 py-1.5 rounded-lg transition-all">
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex items-center justify-center order-1 lg:order-2 lg:py-16">
          <div className="relative w-full max-w-md">

            <div className="absolute top-6 left-6 right-0 bottom-0 bg-[#FFCD07]/20 rounded-3xl -rotate-3 hidden lg:block"></div>
            <div className="absolute top-3 left-3 right-1 bottom-1 bg-[#1351B4]/10 rounded-3xl rotate-2 hidden lg:block"></div>

            <div className="relative bg-white rounded-3xl border border-slate-300 shadow-2xl shadow-slate-300/40 p-8 space-y-5">

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-slate-800">Serviços em destaque</h3>
                <span className="text-xs font-bold text-[#1351B4] bg-blue-50 px-2.5 py-1 rounded-full">Junho 2026</span>
              </div>

              <a href="#" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-transparent hover:border-[#1351B4]/20 transition-all group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#1351B4] flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800 group-hover:text-[#1351B4] transition-colors">Emissão de NFS-e</p>
                  <p className="text-xs text-slate-500 truncate">Nota Fiscal Eletrônica de Serviços</p>
                </div>
                <svg className="w-5 h-5 text-slate-300 group-hover:text-[#1351B4] group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>

              <a href="#" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-transparent hover:border-[#1351B4]/20 transition-all group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#168821] flex items-center justify-center flex-shrink-0 shadow-md shadow-green-900/20 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800 group-hover:text-[#168821] transition-colors">IPTU 2026</p>
                  <p className="text-xs text-slate-500 truncate">Consulta, emissão de guia e parcelamento</p>
                </div>
                <svg className="w-5 h-5 text-slate-300 group-hover:text-[#168821] group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>

              <a href="#" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-transparent hover:border-[#1351B4]/20 transition-all group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#C2850C] flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-900/20 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800 group-hover:text-[#C2850C] transition-colors">Portal da Transparência</p>
                  <p className="text-xs text-slate-500 truncate">Receitas, despesas e contratos públicos</p>
                </div>
                <svg className="w-5 h-5 text-slate-300 group-hover:text-[#C2850C] group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>

              <a href="#" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-transparent hover:border-[#1351B4]/20 transition-all group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#B8372B] flex items-center justify-center flex-shrink-0 shadow-md shadow-red-900/20 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800 group-hover:text-[#B8372B] transition-colors">Agendar Saúde</p>
                  <p className="text-xs text-slate-500 truncate">Marcar consultas e exames na rede pública</p>
                </div>
                <svg className="w-5 h-5 text-slate-300 group-hover:text-[#B8372B] group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Mais de 40 serviços disponíveis</span>
                <button className="text-xs font-bold text-[#1351B4] hover:underline">Ver todos →</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}