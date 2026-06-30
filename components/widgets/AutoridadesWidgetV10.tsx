import React from 'react';

const executivo = [
  {
    id: 1,
    nome: 'Carlos Eduardo Silva',
    cargo: 'Prefeito Municipal',
    foto: 'https://randomuser.me/api/portraits/men/50.jpg',
    departamento: 'Gabinete do Prefeito'
  },
  {
    id: 2,
    nome: 'Marta Helena Souza',
    cargo: 'Vice-Prefeita',
    foto: 'https://randomuser.me/api/portraits/women/65.jpg',
    departamento: 'Gabinete da Vice-Prefeita'
  }
];

const legislativo = [
  {
    id: 1,
    nome: 'Roberto Alves',
    cargo: 'Vereador Presidente',
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
    partido: 'Partido X'
  },
  {
    id: 2,
    nome: 'Camila Gomes',
    cargo: 'Vereadora',
    foto: 'https://randomuser.me/api/portraits/women/44.jpg',
    partido: 'Partido Y'
  },
  {
    id: 3,
    nome: 'Fernando Costa',
    cargo: 'Vereador',
    foto: 'https://randomuser.me/api/portraits/men/46.jpg',
    partido: 'Partido Z'
  },
  {
    id: 4,
    nome: 'Aline Souza',
    cargo: 'Vereadora',
    foto: 'https://randomuser.me/api/portraits/women/22.jpg',
    partido: 'Partido W'
  }
];

export default function AutoridadesWidgetV10() {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 bg-white">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-neutral-200 pb-6">
        <div>
           <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-none bg-emerald-600 animate-pulse"></span>
              <span className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">Liderança Executiva</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
             Corpo <span className="font-bold">Diretivo</span>
           </h2>
        </div>
        <button className="px-5 py-2 rounded-none border border-neutral-300 hover:border-emerald-600 hover:bg-neutral-50 text-neutral-600 hover:text-emerald-700 transition-all text-sm font-bold uppercase flex items-center gap-2 tracking-wide">
          Organograma Completo <i className="fas fa-sitemap text-xs"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {executivo.map((autoridade) => (
          <div key={autoridade.id} className="group relative rounded-none bg-neutral-50 border border-neutral-200 p-6 hover:bg-white hover:shadow-md hover:border-emerald-500/30 transition-all flex items-center gap-6 overflow-hidden">
            
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-none overflow-hidden shrink-0 border border-neutral-300 group-hover:border-emerald-500/50 transition-colors">
              <img 
                src={autoridade.foto} 
                alt={autoridade.nome} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="relative z-10">
              <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest block mb-1">
                {autoridade.departamento}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-1 group-hover:text-emerald-700 transition-colors">
                {autoridade.nome}
              </h3>
              <p className="text-neutral-500 text-sm font-medium">
                {autoridade.cargo}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* Título Legislativo */}
      <div className="mt-16 mb-8 border-b border-neutral-200 pb-4">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-none bg-neutral-800"></span>
          <span className="text-neutral-600 font-bold tracking-widest text-[10px] uppercase">Poder Legislativo</span>
        </div>
        <h3 className="text-2xl font-light text-neutral-900 tracking-tight">
          Câmara de <span className="font-bold">Vereadores</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {legislativo.map((parlamentar) => (
          <div key={parlamentar.id} className="group relative rounded-none bg-white border border-neutral-200 p-6 hover:shadow-lg hover:border-neutral-400 transition-all flex flex-col items-center text-center gap-4 overflow-hidden">
            
            <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-neutral-100 group-hover:border-neutral-800 transition-colors">
              <img 
                src={parlamentar.foto} 
                alt={parlamentar.nome} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="relative z-10 w-full">
              <span className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-1 font-bold uppercase tracking-widest inline-block mb-3">
                {parlamentar.partido}
              </span>
              <h4 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-emerald-700 transition-colors">
                {parlamentar.nome}
              </h4>
              <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider">
                {parlamentar.cargo}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
