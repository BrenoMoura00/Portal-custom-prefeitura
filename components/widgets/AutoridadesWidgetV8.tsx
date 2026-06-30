import React from 'react';

const executivo = [
  {
    id: 1,
    nome: 'Carlos Eduardo Silva',
    cargo: 'Prefeito Municipal',
    partido: 'Partido A',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    nome: 'Marta Helena Souza',
    cargo: 'Vice-Prefeita',
    partido: 'Partido B',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
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

export default function AutoridadesWidgetV8() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col mb-10 border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-extrabold text-[#0e3b85] flex items-center gap-3 uppercase tracking-tight">
          <span className="w-2 h-6 bg-[#009B3A] rounded-sm"></span>
          Autoridades Municipais
        </h2>
        <p className="text-slate-500 font-medium mt-2 ml-5 text-sm">
          Conheça os representantes do Poder Executivo e Legislativo
        </p>
      </div>

      {/* Poder Executivo (Destaque Maior) */}
      <h3 className="text-lg font-bold text-slate-800 mb-6 uppercase tracking-wider">
        Poder Executivo
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {executivo.map((autoridade) => (
          <div key={autoridade.id} className="flex flex-col bg-white border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100 mb-4 border border-slate-200 relative">
              <img 
                src={autoridade.foto} 
                alt={autoridade.nome} 
                className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              {/* Faixa decorativa sutil */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1351B4] to-[#009B3A]"></div>
            </div>
            <h4 className="font-bold text-slate-900 text-lg leading-tight">
              {autoridade.nome}
            </h4>
            <span className="text-[#1351B4] font-bold text-sm">
              {autoridade.cargo}
            </span>
            <span className="text-slate-400 text-xs mt-1">
              {autoridade.partido}
            </span>
          </div>
        ))}
      </div>

      {/* Poder Legislativo */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider">
          Poder Legislativo
        </h3>
        <a href="#" className="text-sm font-bold text-[#1351B4] hover:underline">
          Ver todos os vereadores &rarr;
        </a>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {vereadores.map((vereador) => (
          <div key={vereador.id} className="flex flex-col bg-white border border-slate-200 p-3 shadow-sm hover:border-[#1351B4]/30 transition-colors group">
            <div className="aspect-square w-full overflow-hidden rounded-full bg-slate-100 mb-3 border border-slate-200 mx-auto max-w-[120px]">
              <img 
                src={vereador.foto} 
                alt={vereador.nome} 
                className="w-full h-full object-cover object-top grayscale-[40%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h4 className="font-bold text-slate-800 text-center text-sm leading-tight group-hover:text-[#1351B4] transition-colors">
              {vereador.nome}
            </h4>
            <span className="text-slate-500 text-center text-xs mt-0.5">
              {vereador.cargo}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
