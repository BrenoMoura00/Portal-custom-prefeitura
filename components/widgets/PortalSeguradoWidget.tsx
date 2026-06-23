import React from 'react';

export default function PortalSeguradoWidget() {
  const servicos = [
    { title: 'Contracheque', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { title: 'Informe de Rendimentos', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { title: 'Agendamento de Perícia', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { title: 'Prova de Vida', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 h-full flex flex-col">
      <div className="mb-6">
        <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Acesso Rápido</span>
        <h2 className="text-3xl font-bold text-gray-900">Portal do Segurado</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {servicos.map((servico, index) => (
          <a key={index} href="#" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-teal-200 hover:bg-teal-50 hover:shadow-md transition-all group text-center gap-3">
            <div className="bg-white p-3 rounded-full shadow-sm text-teal-600 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={servico.icon} />
              </svg>
            </div>
            <span className="font-semibold text-gray-800 text-sm group-hover:text-teal-700">{servico.title}</span>
          </a>
        ))}
      </div>

      <button className="mt-6 w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg shadow-teal-600/20 flex justify-center items-center gap-2">
        Acessar Meu Painel
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </button>
    </div>
  );
}
