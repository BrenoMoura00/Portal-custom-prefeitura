import React from 'react';

const executivo = [
  {
    id: 1,
    nome: 'Carlos Eduardo Silva',
    cargo: 'Prefeito Municipal',
    partido: 'Partido A',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    nome: 'Marta Helena Souza',
    cargo: 'Vice-Prefeita',
    partido: 'Partido B',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
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

export default function AutoridadesWidgetV7() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-24 relative z-10">
      
      {/* Cabeçalho V7 - Minimalista e Arrojado */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">Poder Público</h2>
          <p className="text-lg text-slate-500 font-medium">Conheça as autoridades do Executivo e Legislativo.</p>
        </div>
        <a href="#" className="inline-flex items-center gap-2 text-[#1351B4] font-bold hover:text-[#0e3b85] transition-colors group">
          Ver organograma
          <span className="w-8 h-8 rounded-full bg-[#1351B4]/10 flex items-center justify-center group-hover:bg-[#1351B4]/20 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </span>
        </a>
      </div>

      <div className="flex flex-col gap-12">
        
        {/* Executivo */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            Poder Executivo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {executivo.map((autoridade) => (
              <div key={autoridade.id} className="flex flex-col md:flex-row items-center gap-6 bg-slate-50 p-6 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-all group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-[1.5rem] overflow-hidden shrink-0">
                  <img 
                    src={autoridade.foto} 
                    alt={autoridade.nome} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col text-center md:text-left">
                  <h4 className="text-2xl font-black text-slate-900 mb-1">{autoridade.nome}</h4>
                  <span className="text-[#009B3A] font-bold text-sm tracking-wide uppercase mb-2">{autoridade.cargo}</span>
                  <span className="text-slate-500 text-sm">{autoridade.partido}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legislativo */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              Poder Legislativo
            </h3>
            <a href="#" className="text-sm font-bold text-slate-500 hover:text-[#1351B4] transition-colors">
              Ver todos &rarr;
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {vereadores.map((vereador) => (
              <div key={vereador.id} className="flex flex-col items-center p-4 rounded-[1.5rem] hover:bg-slate-50 transition-colors group">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-4 ring-transparent group-hover:ring-[#1351B4]/10 transition-all">
                  <img 
                    src={vereador.foto} 
                    alt={vereador.nome} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-slate-900 font-bold text-center text-sm mb-1">{vereador.nome}</h4>
                <span className="text-slate-500 text-xs text-center">{vereador.cargo}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
