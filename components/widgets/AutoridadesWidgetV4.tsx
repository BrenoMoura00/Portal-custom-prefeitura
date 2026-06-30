import React from 'react';

const executivo = [
  {
    id: 1,
    nome: 'Carlos Eduardo Silva',
    cargo: 'Prefeito Municipal',
    partido: 'Partido A',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    nome: 'Marta Helena Souza',
    cargo: 'Vice-Prefeita',
    partido: 'Partido B',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
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

export default function AutoridadesWidgetV4() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Cabeçalho V4 */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-[#1351B4] font-bold tracking-widest text-[11px] uppercase mb-2 block">Gestão Municipal</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Nossos Representantes</h2>
          <p className="text-slate-500">Conheça as autoridades do Poder Executivo e Legislativo que trabalham pelo nosso município.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Executivo */}
          <div className="lg:col-span-5 flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-[#1351B4] rounded-sm"></span>
              Poder Executivo
            </h3>
            
            <div className="flex flex-col gap-4">
              {executivo.map((autoridade) => (
                <div key={autoridade.id} className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img 
                      src={autoridade.foto} 
                      alt={autoridade.nome} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-bold text-slate-900 leading-tight">{autoridade.nome}</h4>
                    <span className="text-[#1351B4] font-bold text-sm uppercase tracking-wide my-1">
                      {autoridade.cargo}
                    </span>
                    <span className="text-slate-500 text-sm">{autoridade.partido}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legislativo */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span className="w-2 h-6 bg-slate-400 rounded-sm"></span>
                Poder Legislativo
              </h3>
              <a href="#" className="text-sm font-semibold text-[#1351B4] hover:underline">Acessar Câmara &rarr;</a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {vereadores.map((vereador) => (
                <div key={vereador.id} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-[#1351B4]/30 hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <img 
                      src={vereador.foto} 
                      alt={vereador.nome} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <h4 className="text-slate-900 font-bold text-sm truncate">{vereador.nome}</h4>
                    <span className="text-slate-500 text-xs uppercase tracking-wide">{vereador.cargo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
