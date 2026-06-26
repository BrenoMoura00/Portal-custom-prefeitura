import React from 'react';

const noticias = [
  {
    id: 1,
    categoria: 'Infraestrutura',
    titulo: 'Prefeitura inaugura nova fase do programa de recapeamento asfáltico',
    data: '26 Jun 2026',
    imagem: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80',
    destaque: true,
  },
  {
    id: 2,
    categoria: 'Educação',
    titulo: 'Escolas municipais recebem novos laboratórios de robótica',
    data: '25 Jun 2026',
    imagem: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    categoria: 'Saúde',
    titulo: 'Campanha de vacinação contra a gripe atinge 90% da meta',
    data: '24 Jun 2026',
    imagem: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    categoria: 'Cultura',
    titulo: 'Festival de Inverno começa nesta sexta com atrações gratuitas',
    data: '23 Jun 2026',
    imagem: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80',
  }
];

export default function NoticiasDestaqueV6() {
  const destaque = noticias.find(n => n.destaque);
  const demaisNoticias = noticias.filter(n => !n.destaque);

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-emerald-500 rounded-full"></span>
              <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase">Fique por dentro</span>
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Últimas Notícias</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 font-semibold text-slate-600 hover:text-emerald-600 transition-colors group">
            Ver todas as notícias
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {destaque && (
            <a href="#" className="lg:col-span-7 group relative rounded-[2rem] overflow-hidden flex flex-col justify-end min-h-[450px] lg:min-h-[550px] shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-slate-900">
                <img 
                  src={destaque.imagem} 
                  alt={destaque.titulo} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              
              <div className="relative z-10 p-8 lg:p-12 w-full max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {destaque.categoria}
                  </span>
                  <span className="text-slate-300 text-sm font-medium flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {destaque.data}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 group-hover:text-emerald-300 transition-colors">
                  {destaque.titulo}
                </h3>
                <span className="inline-flex items-center gap-2 text-white/80 font-medium group-hover:text-white transition-colors">
                  Ler matéria completa 
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </div>
            </a>
          )}

          <div className="lg:col-span-5 flex flex-col gap-6">
            {demaisNoticias.map((noticia) => (
              <a key={noticia.id} href="#" className="group flex flex-col sm:flex-row gap-5 p-4 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300">
                <div className="w-full sm:w-40 h-48 sm:h-auto flex-shrink-0 rounded-2xl overflow-hidden relative">
                  <img 
                    src={noticia.imagem} 
                    alt={noticia.titulo} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex flex-col justify-center py-2 pr-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">{noticia.categoria}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="text-slate-500 text-xs font-medium">{noticia.data}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-emerald-700 transition-colors line-clamp-3">
                    {noticia.titulo}
                  </h4>
                  <span className="text-sm font-semibold text-slate-500 group-hover:text-emerald-600 transition-colors inline-flex items-center gap-1 mt-auto">
                    Continuar lendo <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
