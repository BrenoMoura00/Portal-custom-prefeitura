import React from 'react';

const news = [
  {
    id: 1,
    category: 'Educação',
    title: 'Prefeitura inaugura três novas creches municipais na Zona Norte.',
    desc: 'As novas unidades ampliarão o atendimento em tempo integral para mais de 500 crianças da região.',
    date: '25 Jun 2026',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
    color: 'emerald',
  },
  {
    id: 2,
    category: 'Infraestrutura',
    title: 'Obras de recapeamento avançam no centro histórico da cidade.',
    desc: 'O projeto inclui revitalização das calçadas, nova iluminação em LED e melhorias na acessibilidade.',
    date: '24 Jun 2026',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    color: 'blue',
  },
  {
    id: 3,
    category: 'Saúde',
    title: 'Campanha de vacinação contra a gripe atinge 90% da meta anual.',
    desc: 'Com o sucesso da campanha, novos postos móveis serão instalados nas áreas mais afastadas do município.',
    date: '22 Jun 2026',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800',
    color: 'rose',
  }
];

export default function NoticiasDestaqueV5() {
  return (
    <div className="w-full bg-slate-50 py-24 relative z-20 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.5)] rounded-t-[40px] md:rounded-t-[80px] -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-1 bg-emerald-500 rounded-full"></span>
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">Central de Notícias</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Acontece na <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Cidade</span>
            </h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors group">
            Ver todas as notícias
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="group bg-white rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 flex flex-col">
              
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-${item.color}-600 shadow-sm`}>
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <span className="text-slate-400 text-sm font-medium mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {item.date}
                </span>
                
                <h3 className="text-slate-900 font-bold text-xl leading-snug mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {item.desc}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-emerald-600 font-semibold text-sm">
                  Ler matéria completa
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-10 md:hidden text-center">
          <button className="inline-flex items-center gap-2 text-emerald-600 font-bold">
            Ver todas as notícias &rarr;
          </button>
        </div>

      </div>
    </div>
  );
}
