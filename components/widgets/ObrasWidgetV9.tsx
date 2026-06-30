import React from 'react';

const obras = [
  { id: 1, nome: 'Revitalização do Centro Histórico', status: 'Em andamento', progresso: 65, prazo: 'Dez 2024', foto: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?w=800&q=80' },
  { id: 2, nome: 'Nova Estação de Tratamento', status: 'Concluído', progresso: 100, prazo: 'Entregue', foto: 'https://images.unsplash.com/photo-1541888087425-ce81dfc46928?w=800&q=80' },
  { id: 3, nome: 'Hospital Municipal Zona Sul', status: 'Iniciando', progresso: 15, prazo: 'Mar 2025', foto: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80' },
];

export default function ObrasWidgetV9() {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
           <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-400 font-bold tracking-widest text-[10px] uppercase">Infraestrutura</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
             Acompanhamento de <span className="font-bold">Obras</span>
           </h2>
        </div>
        <button className="px-5 py-2 rounded-lg border border-white/10 hover:border-emerald-500/50 bg-white/5 hover:bg-emerald-500/10 text-slate-300 hover:text-white transition-all text-sm font-medium flex items-center gap-2">
          Mapa de Obras <i className="fas fa-map-marker-alt text-xs"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {obras.map((obra) => (
          <div key={obra.id} className="group flex flex-col rounded-2xl bg-white/5 border border-white/5 overflow-hidden hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer">
            
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={obra.foto} 
                alt={obra.nome} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors"></div>
              
              {/* Badge Status */}
              <div className="absolute top-4 right-4">
                <span className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded border backdrop-blur-md ${
                  obra.progresso === 100 
                  ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' 
                  : 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                }`}>
                  {obra.status}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-4 line-clamp-2 leading-tight group-hover:text-emerald-300 transition-colors">
                {obra.nome}
              </h3>
              
              <div className="flex justify-between items-end mb-2">
                <span className="text-slate-400 text-xs font-medium uppercase">Evolução</span>
                <span className="text-white text-sm font-bold">{obra.progresso}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4">
                <div 
                  className={`h-full rounded-full ${obra.progresso === 100 ? 'bg-emerald-500' : 'bg-amber-500'}`} 
                  style={{ width: `${obra.progresso}%` }}
                ></div>
              </div>
              
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                <i className="far fa-calendar-alt"></i> Prazo: <span className="text-slate-300">{obra.prazo}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
