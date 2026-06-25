'use client';

import React from 'react';

const noticiaPrincipal = {
  categoria: 'Infraestrutura',
  titulo: 'Prefeitura inaugura novo complexo viário no centro da cidade',
  resumo: 'Obras devem reduzir o trânsito em até 40% na região central. O complexo inclui novos viadutos, ciclofaixas e iluminação em LED.',
  data: '25 Jun 2026',
  imagem: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80',
};

const noticiasLaterais = [
  {
    id: 1,
    categoria: 'Educação',
    titulo: 'Novas creches em período integral abrem 500 vagas para o próximo semestre',
    data: '24 Jun 2026',
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
  'Infraestrutura': '#1351B4',
  'Educação': '#168821',
  'Saúde': '#B8372B',
  'Cultura': '#C2850C',
};

export default function NoticiasDestaqueV4() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto">

        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b-2 border-[#1351B4]">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">Notícias Oficiais</h2>
          <a href="#" className="text-sm font-bold text-[#1351B4] hover:underline inline-flex items-center gap-2">
            Ver todas as publicações →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          <a href="#" className="lg:col-span-7 group cursor-pointer">
            <div className="overflow-hidden rounded-2xl mb-5 shadow-sm border border-slate-100">
              <img
                src={noticiaPrincipal.imagem}
                alt={noticiaPrincipal.titulo}
                className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest"
                style={{ backgroundColor: corCategoria[noticiaPrincipal.categoria] || '#1351B4' }}
              >
                {noticiaPrincipal.categoria}
              </span>
              <span className="text-slate-400 text-sm">{noticiaPrincipal.data}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight group-hover:text-[#1351B4] transition-colors mb-3">
              {noticiaPrincipal.titulo}
            </h3>
            <p className="text-slate-500 text-base leading-relaxed">{noticiaPrincipal.resumo}</p>
          </a>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {noticiasLaterais.map((n) => (
              <a key={n.id} href="#" className="flex gap-5 group items-start">
                <div className="w-28 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
                  <img
                    src={n.imagem}
                    alt={n.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: corCategoria[n.categoria] || '#1351B4' }}
                    >
                      {n.categoria}
                    </span>
                    <span className="text-slate-400 text-xs">• {n.data}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-[#1351B4] transition-colors line-clamp-2">
                    {n.titulo}
                  </h4>
                </div>
              </a>
            ))}

            <a href="#" className="mt-auto text-center text-sm font-bold text-slate-500 hover:text-[#1351B4] transition-colors border border-slate-200 py-3 rounded-xl hover:bg-slate-50">
              Carregar mais notícias
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
