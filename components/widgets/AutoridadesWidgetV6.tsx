import React from 'react';

const executivo = [
  {
    id: 1,
    nome: 'Carlos Eduardo Silva',
    cargo: 'Prefeito Municipal',
    partido: 'Partido A',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    corIcone: 'text-blue-600',
    corBg: 'bg-blue-50',
    borderHover: 'hover:border-blue-300'
  },
  {
    id: 2,
    nome: 'Marta Helena Souza',
    cargo: 'Vice-Prefeita',
    partido: 'Partido B',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    corIcone: 'text-emerald-600',
    corBg: 'bg-emerald-50',
    borderHover: 'hover:border-emerald-300'
  }
];

const vereadores = [
  { id: 3, nome: 'João de Deus', cargo: 'Vereador', foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 4, nome: 'Ana Paula Rocha', cargo: 'Vereadora', foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 5, nome: 'Roberto Almeida', cargo: 'Vereador', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 6, nome: 'Sônia Braga', cargo: 'Vereadora', foto: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 7, nome: 'Marcos Vinícius', cargo: 'Vereador', foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 8, nome: 'Luciana Mota', cargo: 'Vereadora', foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' }
];

export default function AutoridadesWidgetV6() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white relative">
      {/* Background blobs V6 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] right-[-10%] w-[30%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[30%] bg-purple-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho V6 */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">Organograma</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Representantes
            </h2>
            <p className="text-lg text-slate-500 mt-4 font-medium">
              Conheça os líderes do Poder Executivo e Legislativo da cidade.
            </p>
          </div>
          
          <a href="#" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Página da Câmara
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col gap-12">
          
          {/* Poder Executivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {executivo.map((autoridade) => (
              <div 
                key={autoridade.id} 
                className={`flex items-center gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-1 ${autoridade.borderHover}`}
              >
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shrink-0 shadow-inner bg-slate-100">
                  <img 
                    src={autoridade.foto} 
                    alt={autoridade.nome} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-2xl font-extrabold text-slate-900 mb-1">{autoridade.nome}</h4>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 w-max ${autoridade.corBg} ${autoridade.corIcone}`}>
                    {autoridade.cargo}
                  </span>
                  <p className="text-sm text-slate-500 font-medium">
                    {autoridade.partido}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Poder Legislativo */}
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Vereadores em Exercício</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {vereadores.map((vereador) => (
                <div 
                  key={vereador.id} 
                  className="flex flex-col items-center p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-slate-200 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 shadow-sm border-2 border-white ring-2 ring-slate-100 group-hover:ring-blue-200 transition-all">
                    <img 
                      src={vereador.foto} 
                      alt={vereador.nome} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-slate-900 font-bold text-center text-sm leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                    {vereador.nome}
                  </h4>
                  <span className="text-slate-400 text-xs font-medium uppercase tracking-wide">
                    {vereador.cargo}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
