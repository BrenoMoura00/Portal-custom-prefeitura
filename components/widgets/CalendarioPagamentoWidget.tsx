import React from 'react';

export default function CalendarioPagamentoWidget() {
  const pagamentos = [
    { mes: 'Junho', data: '28/06/2026', status: 'Próximo', highlight: true },
    { mes: 'Julho', data: '30/07/2026', status: 'Agendado', highlight: false },
    { mes: 'Maio', data: '29/05/2026', status: 'Realizado', highlight: false },
  ];

  return (
    <div className="bg-teal-700 rounded-3xl p-8 relative overflow-hidden text-white">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-teal-600 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 flex items-center gap-3">
          <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Calendário de Pagamento</h2>
            <p className="text-teal-100 text-sm">Aposentados e Pensionistas</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 flex-1">
          {pagamentos.map((pag, index) => (
            <div key={index} className={`flex justify-between items-center p-4 rounded-xl backdrop-blur-sm border transition-all ${pag.highlight ? 'bg-white text-teal-900 border-white shadow-lg transform scale-105 my-2' : 'bg-teal-800/50 border-teal-600/50 text-teal-50 hover:bg-teal-800'}`}>
              <div>
                <span className={`block text-xs font-bold uppercase mb-1 ${pag.highlight ? 'text-teal-600' : 'text-teal-300'}`}>{pag.mes}</span>
                <span className="block text-xl font-bold">{pag.data}</span>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-bold ${pag.highlight ? 'bg-teal-100 text-teal-800' : 'bg-teal-900/50 text-teal-200'}`}>
                {pag.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
