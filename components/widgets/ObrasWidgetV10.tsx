import React from 'react';

const obras = [
  { id: 1, nome: 'Revitalização do Centro Histórico', status: 'Em andamento', progresso: 65, prazo: 'Dez 2024', foto: 'https://picsum.photos/seed/obra1/800/600' },
  { id: 2, nome: 'Nova Estação de Tratamento', status: 'Concluído', progresso: 100, prazo: 'Entregue', foto: 'https://picsum.photos/seed/obra2/800/600' },
  { id: 3, nome: 'Hospital Municipal Zona Sul', status: 'Iniciando', progresso: 15, prazo: 'Mar 2025', foto: 'https://picsum.photos/seed/obra3/800/600' },
];

export default function ObrasWidgetV10() {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 bg-neutral-50">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-neutral-200 pb-6">
        <div>
           <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-none bg-emerald-600 animate-pulse"></span>
              <span className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">Infraestrutura</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-wide">
             Acompanhamento de <span className="font-bold">Obras</span>
           </h2>
        </div>
        <button className="px-5 py-2 rounded-none border border-neutral-300 hover:border-emerald-600 bg-white hover:bg-neutral-50 text-neutral-700 hover:text-emerald-700 transition-all text-sm font-bold uppercase flex items-center gap-2 tracking-wide">
          Mapa de Obras <i className="fas fa-map-marker-alt text-xs"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {obras.map((obra) => (
          <div key={obra.id} className="group flex flex-col rounded-none bg-white border border-neutral-200 overflow-hidden hover:border-emerald-500/50 hover:shadow-lg transition-all cursor-pointer">
            
            <div className="relative h-48 w-full overflow-hidden border-b border-neutral-200">
              <img 
                src={obra.foto} 
                alt={obra.nome} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors"></div>
              
              {/* Badge Status */}
              <div className="absolute top-4 right-4">
                <span className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-none border backdrop-blur-md ${
                  obra.progresso === 100 
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                  : 'bg-amber-50 border-amber-200 text-amber-700'
                }`}>
                  {obra.status}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-4 line-clamp-2 leading-tight group-hover:text-emerald-700 transition-colors">
                {obra.nome}
              </h3>
              
              <div className="flex justify-between items-end mb-2">
                <span className="text-neutral-500 text-xs font-bold uppercase tracking-wider">Evolução</span>
                <span className="text-neutral-900 text-sm font-black">{obra.progresso}%</span>
              </div>
              <div className="w-full h-1.5 bg-neutral-100 rounded-none overflow-hidden mb-4 border border-neutral-200">
                <div 
                  className={`h-full rounded-none ${obra.progresso === 100 ? 'bg-emerald-500' : 'bg-amber-500'}`} 
                  style={{ width: `${obra.progresso}%` }}
                ></div>
              </div>
              
              <div className="flex items-center gap-2 text-neutral-600 text-xs font-medium">
                <i className="far fa-calendar-alt"></i> Prazo: <span className="text-neutral-900 font-bold">{obra.prazo}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
