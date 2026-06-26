import React from 'react';

const noticiaPrincipal = {
  categoria: 'Infraestrutura',
  titulo: 'Obras do novo complexo viário do Centro entram em fase final de acabamento',
  resumo: 'Intervenção promete reduzir o tempo de deslocamento na região central em até 40%. O projeto conta com nova iluminação de LED e ciclovias integradas.',
  data: 'Hoje, 09:30',
  imagem: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80',
};

const noticiasLaterais = [
  {
    id: 1,
    categoria: 'Educação',
    titulo: 'Novas creches em período integral abrem 500 vagas para o próximo semestre',
    data: 'Ontem, 15:45',
    imagem: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    categoria: 'Saúde',
    titulo: 'Campanha de vacinação contra a gripe atinge 90% da meta no município',
    data: '23 Jun 2026',
    imagem: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    categoria: 'Cultura',
    titulo: 'Inscrições abertas para o edital de fomento cultural da Lei Paulo Gustavo',
    data: '22 Jun 2026',
    imagem: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
  },
];

const corCategoria: Record<string, string> = {
  'Infraestrutura': '#1351B4', // Azul Oficial
  'Educação': '#009B3A', // Verde Oficial
  'Saúde': '#E30613', // Vermelho PE
  'Cultura': '#C2850C', // Amarelo/Laranja Escuro
};

export default function NoticiasDestaqueV7() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-24 relative z-10">
      
      {/* Header com linha sublinhada estilo V4 */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b-2 border-[#1351B4]/20">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">Notícias Oficiais</h2>
        </div>
        <a href="#" className="text-sm font-bold text-[#1351B4] hover:text-[#0A2A66] transition-colors inline-flex items-center gap-2">
          Ver todas as publicações
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* Notícia Principal (Esquerda) */}
        <a href="#" className="lg:col-span-7 group cursor-pointer flex flex-col">
          <div className="relative w-full aspect-[16/10] sm:h-[420px] rounded-[2rem] overflow-hidden mb-6 shadow-md border border-slate-100">
            <img
              src={noticiaPrincipal.imagem}
              alt={noticiaPrincipal.titulo}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-md uppercase tracking-widest shadow-sm"
              style={{ backgroundColor: corCategoria[noticiaPrincipal.categoria] || '#1351B4' }}
            >
              {noticiaPrincipal.categoria}
            </span>
            <span className="text-slate-400 text-sm font-medium">{noticiaPrincipal.data}</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight group-hover:text-[#1351B4] transition-colors mb-4">
            {noticiaPrincipal.titulo}
          </h3>
          
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            {noticiaPrincipal.resumo}
          </p>
        </a>

        {/* Notícias Secundárias (Direita) */}
        <div className="lg:col-span-5 flex flex-col gap-6 pt-2 lg:pt-0">
          {noticiasLaterais.map((n) => (
            <a key={n.id} href="#" className="flex gap-5 group items-center lg:items-start p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
              {/* Thumbnail */}
              <div className="w-28 h-24 sm:w-36 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100 shadow-sm relative">
                <img
                  src={n.imagem}
                  alt={n.titulo}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Textos */}
              <div className="flex-1 min-w-0 py-1">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: corCategoria[n.categoria] || '#1351B4' }}
                  >
                    {n.categoria}
                  </span>
                  <span className="text-slate-300 text-xs">•</span>
                  <span className="text-slate-400 text-xs font-medium">{n.data}</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-800 leading-snug group-hover:text-[#1351B4] transition-colors line-clamp-3">
                  {n.titulo}
                </h4>
              </div>
            </a>
          ))}

          {/* Botão de carregar mais (estilo V4) */}
          <a href="#" className="mt-auto text-center text-sm font-bold text-[#1351B4] hover:text-white transition-colors border-2 border-[#1351B4] hover:bg-[#1351B4] py-3.5 rounded-xl uppercase tracking-widest mt-4">
            Acessar Portal de Notícias
          </a>
        </div>

      </div>

    </section>
  );
}
