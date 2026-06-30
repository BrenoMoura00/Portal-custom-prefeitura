import React from 'react';

const executivo = [
  {
    id: 1,
    nome: 'Carlos Eduardo Silva',
    cargo: 'Prefeito Municipal',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    departamento: 'Gabinete do Prefeito'
  },
  {
    id: 2,
    nome: 'Marta Helena Souza',
    cargo: 'Vice-Prefeita',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    departamento: 'Gabinete da Vice-Prefeita'
  }
];

export default function AutoridadesWidgetV9() {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
           <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-indigo-400 font-bold tracking-widest text-[10px] uppercase">Liderança Executiva</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
             Corpo <span className="font-bold">Diretivo</span>
           </h2>
        </div>
        <button className="px-5 py-2 rounded-lg border border-white/10 hover:border-indigo-500/50 bg-white/5 hover:bg-indigo-500/10 text-slate-300 hover:text-white transition-all text-sm font-medium flex items-center gap-2">
          Organograma Completo <i className="fas fa-sitemap text-xs"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {executivo.map((autoridade) => (
          <div key={autoridade.id} className="group relative rounded-2xl bg-white/5 border border-white/5 p-6 hover:bg-white/10 hover:border-indigo-500/30 transition-all flex items-center gap-6 overflow-hidden">
            
            {/* Glow Interno */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors"></div>

            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden shrink-0 border border-white/10 group-hover:border-indigo-500/50 transition-colors">
              <img 
                src={autoridade.foto} 
                alt={autoridade.nome} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="relative z-10">
              <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest block mb-1">
                {autoridade.departamento}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                {autoridade.nome}
              </h3>
              <p className="text-slate-400 text-sm font-medium">
                {autoridade.cargo}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
