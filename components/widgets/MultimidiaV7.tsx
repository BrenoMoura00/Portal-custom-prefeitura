import React from 'react';

export default function MultimidiaV7() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-24 relative z-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">Chã Grande em Foco</h2>
          <p className="text-lg text-slate-500 font-medium">Acompanhe nossas galerias de fotos e vídeos oficiais.</p>
        </div>
        <a href="#" className="inline-flex items-center gap-2 text-[#009B3A] font-bold hover:text-[#007A2E] transition-colors group">
          Ver acervo completo
          <span className="w-8 h-8 rounded-full bg-[#009B3A]/10 flex items-center justify-center group-hover:bg-[#009B3A]/20 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Vídeo Principal */}
        <div className="lg:col-span-8 group cursor-pointer relative rounded-[2rem] overflow-hidden aspect-video shadow-md">
          <img 
            src="https://picsum.photos/seed/gov8/1000/600" 
            alt="Vídeo Institucional"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#1351B4]/30 group-hover:bg-[#1351B4]/20 transition-colors"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#0A192F]/80 to-transparent">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009B3A] text-white text-[10px] font-bold uppercase tracking-widest mb-3">TV Prefeitura</span>
            <h3 className="text-2xl font-bold text-white leading-tight">Resumo da Semana: Obras e Ações da Prefeitura no mês de Junho</h3>
          </div>
        </div>

        {/* Galeria de Fotos */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="group cursor-pointer relative rounded-[1.5rem] overflow-hidden aspect-[4/3] shadow-sm">
            <img 
              src="https://picsum.photos/seed/gov9/600/400" 
              alt="Galeria 1"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5">
              <h4 className="text-white font-bold leading-tight">Inauguração do Novo Centro de Convenções</h4>
              <p className="text-white/70 text-xs mt-1 font-medium flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                24 fotos
              </p>
            </div>
          </div>

          <div className="group cursor-pointer relative rounded-[1.5rem] overflow-hidden aspect-[4/3] shadow-sm">
            <img 
              src="https://picsum.photos/seed/gov10/600/400" 
              alt="Galeria 2"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5">
              <h4 className="text-white font-bold leading-tight">Festival Cultural de Inverno 2026</h4>
              <p className="text-white/70 text-xs mt-1 font-medium flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                48 fotos
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
