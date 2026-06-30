import React from 'react';

const executivo = [
  {
    id: 1,
    nome: 'Carlos Eduardo Silva',
    cargo: 'Prefeito Municipal',
    partido: 'Partido A',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    nome: 'Marta Helena Souza',
    cargo: 'Vice-Prefeita',
    partido: 'Partido B',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  }
];

const vereadores = [
  { id: 3, nome: 'João de Deus', cargo: 'Vereador', foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
  { id: 4, nome: 'Ana Paula Rocha', cargo: 'Vereadora', foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80' },
  { id: 5, nome: 'Roberto Almeida', cargo: 'Vereador', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
  { id: 6, nome: 'Sônia Braga', cargo: 'Vereadora', foto: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=200&q=80' },
  { id: 7, nome: 'Marcos Vinícius', cargo: 'Vereador', foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80' },
  { id: 8, nome: 'Luciana Mota', cargo: 'Vereadora', foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }
];

export default function AutoridadesWidgetV2() {
  return (
    <div className="bg-white rounded-[24px] border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden p-8 md:p-10">
      
      {/* Cabeçalho V2 Interno */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-6">
        <div>
          <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase mb-2 block">Poder Público</span>
          <h3 className="text-3xl font-black text-[#0A2540] leading-tight">Nossos Representantes</h3>
        </div>
        <button className="bg-transparent text-[#0A2540] border border-gray-200 px-6 py-2.5 rounded-full font-bold hover:bg-gray-50 transition-colors text-sm whitespace-nowrap">
          Organograma Completo
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Executivo V2 */}
        {executivo.map((autoridade) => (
          <div key={autoridade.id} className="flex items-center gap-5 bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100/50 hover:shadow-md transition-shadow">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[20px] overflow-hidden shrink-0 shadow-sm border border-gray-200/50">
              <img 
                src={autoridade.foto} 
                alt={autoridade.nome} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl md:text-2xl font-black text-[#0A2540] mb-1">{autoridade.nome}</h4>
              <span className="text-[#005FA3] font-bold text-xs tracking-wider uppercase mb-1">{autoridade.cargo}</span>
              <span className="text-gray-500 text-sm font-medium">{autoridade.partido}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Legislativo V2 */}
      <div>
        <h4 className="text-lg font-black text-[#0A2540] mb-5">Vereadores em Exercício</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {vereadores.map((vereador) => (
            <div key={vereador.id} className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200 shadow-sm mb-3 group-hover:border-[#005FA3] transition-colors relative">
                <img 
                  src={vereador.foto} 
                  alt={vereador.nome} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h5 className="text-[#0A2540] font-bold text-sm text-center leading-tight group-hover:text-[#005FA3] transition-colors">
                {vereador.nome}
              </h5>
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider text-center mt-1">
                {vereador.cargo}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
