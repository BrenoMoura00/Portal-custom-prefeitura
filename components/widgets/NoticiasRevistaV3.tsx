'use client';

import React from 'react';

export default function NoticiasRevistaV3() {
  const noticias = [
    {
      id: 1,
      categoria: 'Infraestrutura',
      titulo: 'Prefeitura inaugura novo complexo viário no centro da cidade',
      data: 'Hoje, 09:30',
      imagem: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80',
      tipo: 'imagem-grande',
      estilo: 'md:col-span-2 md:row-span-2 bg-white flex flex-col',
    },
    {
      id: 2,
      categoria: 'Educação',
      titulo: 'Novas creches em período integral abrem 500 vagas para o próximo semestre',
      data: 'Ontem',
      tipo: 'cor-solida',
      estilo: 'md:col-span-1 md:row-span-1 bg-[#005FA3] text-white',
    },
    {
      id: 3,
      categoria: 'Saúde',
      titulo: 'Campanha de vacinação contra a gripe atinge 90% da meta',
      data: '21 Jun',
      imagem: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80',
      tipo: 'imagem-pequena',
      estilo: 'md:col-span-1 md:row-span-1 bg-white flex flex-col',
    },
    {
      id: 4,
      categoria: 'Cultura',
      titulo: 'Festival de Inverno 2026 atrai 50 mil turistas neste fim de semana',
      data: '19 Jun',
      tipo: 'cor-solida',
      estilo: 'md:col-span-1 md:row-span-1 bg-[#F59E0B] text-white',
    },
    {
      id: 5,
      categoria: 'Meio Ambiente',
      titulo: 'Plantio de 2 mil mudas recupera parque ecológico municipal',
      data: '18 Jun',
      imagem: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
      tipo: 'imagem-pequena',
      estilo: 'md:col-span-1 md:row-span-1 bg-white flex flex-col',
    }
  ];

  return (
    <section className="py-24 px-[5%] bg-[#F4F7F9] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">Últimas Notícias</h2>
            <p className="text-gray-500 mt-2 max-w-lg">Fique por dentro das novidades, projetos e ações que estão transformando a nossa cidade.</p>
          </div>
          <a href="#" className="text-sm font-bold text-[#005FA3] hover:text-[#0A2540] transition-colors bg-white border border-gray-200 px-5 py-2 rounded-full shadow-sm hover:bg-gray-50 flex items-center gap-2">
            Ver todas <i className="fas fa-arrow-right text-xs"></i>
          </a>
        </div>

        {/* Grid Bento Misto */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          
          {noticias.map((noticia) => {
            
            // Layout 1: Imagem Grande (Destaque Principal)
            if (noticia.tipo === 'imagem-grande') {
              return (
                <a key={noticia.id} href="#" className={`group rounded-[32px] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 ${noticia.estilo}`}>
                  <div className="h-[60%] overflow-hidden relative">
                    <img src={noticia.imagem} alt={noticia.titulo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="h-[40%] p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#005FA3] font-bold text-xs uppercase tracking-wider">{noticia.categoria}</span>
                      <span className="text-gray-400 text-xs flex items-center gap-1"><i className="far fa-clock"></i> {noticia.data}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] leading-tight group-hover:text-[#005FA3] transition-colors line-clamp-2">
                      {noticia.titulo}
                    </h3>
                  </div>
                </a>
              );
            }

            // Layout 2: Cor Sólida (Sem imagem, foco em tipografia)
            if (noticia.tipo === 'cor-solida') {
              return (
                <a key={noticia.id} href="#" className={`group rounded-[32px] p-8 flex flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 ${noticia.estilo}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      {noticia.categoria}
                    </span>
                    <span className="text-white/70 text-xs"><i className="far fa-clock"></i> {noticia.data}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug group-hover:opacity-90 transition-opacity line-clamp-4">
                    "{noticia.titulo}"
                  </h3>
                  <div className="mt-4 flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <i className="fas fa-arrow-right text-xs"></i>
                    </div>
                  </div>
                </a>
              );
            }

            // Layout 3: Imagem Pequena
            return (
              <a key={noticia.id} href="#" className={`group rounded-[32px] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 ${noticia.estilo}`}>
                <div className="h-[50%] overflow-hidden relative">
                  <img src={noticia.imagem} alt={noticia.titulo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="h-[50%] p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-500 font-bold text-[10px] uppercase tracking-wider">{noticia.categoria}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] leading-snug group-hover:text-[#005FA3] transition-colors line-clamp-3">
                    {noticia.titulo}
                  </h3>
                  <span className="text-gray-400 text-xs mt-3 block"><i className="far fa-clock"></i> {noticia.data}</span>
                </div>
              </a>
            );
            
          })}

        </div>

      </div>
    </section>
  );
}
