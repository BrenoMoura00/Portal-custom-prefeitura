import React from 'react';
import Link from 'next/link';

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
  { id: 3, nome: 'João de Deus', cargo: 'Vereador', partido: 'MDB', foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
  { id: 4, nome: 'Ana Paula Rocha', cargo: 'Vereadora', partido: 'PSDB', foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80' },
  { id: 5, nome: 'Roberto Almeida', cargo: 'Vereador', partido: 'PT', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
  { id: 6, nome: 'Sônia Braga', cargo: 'Vereadora', partido: 'PL', foto: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=300&q=80' },
];

export default function AutoridadesWidget() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
      
      {/* Cabeçalho V1 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Poder Público</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Autoridades Municipais</h2>
        </div>
        <Link href="#" className="text-indigo-600 hover:text-indigo-800 font-medium text-sm border border-indigo-100 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
          Ver Organograma Completo &rarr;
        </Link>
      </div>

      <div className="flex flex-col gap-12">
        
        {/* Executivo */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-2">Poder Executivo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {executivo.map((autoridade) => (
              <div key={autoridade.id} className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-indigo-100">
                  <img 
                    src={autoridade.foto} 
                    alt={autoridade.nome} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{autoridade.nome}</h4>
                  <span className="inline-block mt-1 mb-2 px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase rounded-md">
                    {autoridade.cargo}
                  </span>
                  <p className="text-gray-500 text-sm">{autoridade.partido}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legislativo */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-2">Poder Legislativo</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vereadores.map((vereador) => (
              <div key={vereador.id} className="group relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={vereador.foto} 
                    alt={vereador.nome} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded inline-block mb-2 shadow-sm">
                      {vereador.partido}
                    </div>
                    <h4 className="text-white font-bold text-lg leading-tight mb-1">{vereador.nome}</h4>
                    <p className="text-gray-300 text-sm">{vereador.cargo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
