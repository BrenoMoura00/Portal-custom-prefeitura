import React from 'react';

const executivo = [
  {
    id: 1,
    nome: 'Carlos Eduardo Silva',
    cargo: 'Prefeito Municipal',
    partido: 'Partido A',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    corIcone: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    id: 2,
    nome: 'Marta Helena Souza',
    cargo: 'Vice-Prefeita',
    partido: 'Partido B',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    corIcone: 'text-teal-600',
    bg: 'bg-teal-50'
  }
];

const vereadores = [
  { id: 3, nome: 'João de Deus', cargo: 'Vereador', foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
  { id: 4, nome: 'Ana Paula Rocha', cargo: 'Vereadora', foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80' },
  { id: 5, nome: 'Roberto Almeida', cargo: 'Vereador', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
  { id: 6, nome: 'Sônia Braga', cargo: 'Vereadora', foto: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=300&q=80' },
  { id: 7, nome: 'Marcos Vinícius', cargo: 'Vereador', foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80' },
  { id: 8, nome: 'Luciana Mota', cargo: 'Vereadora', foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80' }
];

export default function AutoridadesWidgetV5() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho V5 (Clean e com Gradiente) */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Representantes</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl text-lg font-medium">
            Conheça as autoridades do Poder Executivo e Legislativo do nosso município.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          
          {/* Executivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {executivo.map((autoridade) => (
              <div 
                key={autoridade.id} 
                className="flex items-center gap-6 p-6 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-1 bg-white"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden shrink-0 relative">
                  <img 
                    src={autoridade.foto} 
                    alt={autoridade.nome} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 opacity-10 group-hover:opacity-0 transition-opacity ${autoridade.bg}`}></div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{autoridade.nome}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    <span className={`font-bold text-sm tracking-wide uppercase ${autoridade.corIcone}`}>
                      {autoridade.cargo}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-lg bg-slate-50 text-slate-500 text-sm font-medium border border-slate-100 w-max">
                    {autoridade.partido}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Legislativo */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-slate-900">Vereadores</h3>
              <a href="#" className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-50 text-emerald-600 font-bold hover:bg-emerald-50 transition-colors border border-slate-100 hover:border-emerald-200">
                Acessar Portal da Câmara
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {vereadores.map((vereador) => (
                <div 
                  key={vereador.id} 
                  className="flex flex-col items-center p-4 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
                >
                  <div className="w-24 h-24 rounded-[1.5rem] overflow-hidden mb-4 relative">
                    <img 
                      src={vereador.foto} 
                      alt={vereador.nome} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors"></div>
                  </div>
                  <h4 className="text-slate-900 font-bold text-center text-sm leading-tight mb-1 group-hover:text-emerald-600 transition-colors">
                    {vereador.nome}
                  </h4>
                  <span className="text-slate-400 text-xs font-medium uppercase tracking-wide">
                    {vereador.cargo}
                  </span>
                </div>
              ))}
            </div>
            
            <a href="#" className="mt-6 sm:hidden w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-50 text-emerald-600 font-bold border border-slate-200">
              Acessar Portal da Câmara
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
