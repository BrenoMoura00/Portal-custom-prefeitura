import React from 'react';

export default function TransparenciaRecursosWidget() {
  const dados = [
    { label: 'Doações Recebidas', valor: 'R$ 142.500', percent: '65%', color: 'bg-green-500' },
    { label: 'Editais Governamentais', valor: 'R$ 75.000', percent: '35%', color: 'bg-blue-500' },
  ];

  return (
    <div className="bg-gray-900 rounded-3xl p-8 flex flex-col h-full text-white">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Transparência</h2>
        <p className="text-gray-400 text-sm">Acompanhe a origem e aplicação dos recursos da instituição em tempo real.</p>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6">
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-semibold text-gray-300">Total Arrecadado (Ano)</span>
            <span className="text-3xl font-bold text-white">R$ 217.500</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden flex">
            {dados.map((d, i) => (
              <div key={i} className={`${d.color} h-full`} style={{ width: d.percent }}></div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-2">
          {dados.map((d, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-3 h-3 rounded-full ${d.color}`}></span>
                <span className="text-xs text-gray-400 font-semibold">{d.label}</span>
              </div>
              <span className="block text-xl font-bold">{d.valor}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-8 w-full border border-gray-600 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-colors">
        Ver Prestação de Contas Completa
      </button>
    </div>
  );
}
