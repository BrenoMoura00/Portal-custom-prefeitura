import React from 'react';
import Link from 'next/link';

export default function VereadoresWidget() {
  const vereadores = [
    { id: 1, name: 'João Silva', partido: 'MDB', role: 'Presidente', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop' },
    { id: 2, name: 'Maria Santos', partido: 'PSDB', role: 'Vice-Presidente', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop' },
    { id: 3, name: 'Carlos Costa', partido: 'PT', role: '1º Secretário', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop' },
    { id: 4, name: 'Ana Oliveira', partido: 'PL', role: 'Vereadora', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Poder Legislativo</span>
          <h2 className="text-3xl font-bold text-gray-900">Conheça os Vereadores</h2>
        </div>
        <Link href="#" className="text-indigo-600 hover:text-indigo-800 font-medium text-sm hidden sm:block">
          Ver todos os vereadores →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {vereadores.map((vereador) => (
          <div key={vereador.id} className="group relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="aspect-[3/4] overflow-hidden relative">
              <img 
                src={vereador.image} 
                alt={vereador.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded inline-block mb-2">
                  {vereador.partido}
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">{vereador.name}</h3>
                <p className="text-gray-300 text-sm mt-1">{vereador.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
