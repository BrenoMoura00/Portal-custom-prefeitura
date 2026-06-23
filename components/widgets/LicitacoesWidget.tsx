import React from 'react';
import Link from 'next/link';

export default function LicitacoesWidget() {
  const licitacoes = [
    { id: 1, modalidade: 'Pregão Eletrônico', num: '012/2026', objeto: 'Aquisição de equipamentos de informática para a Secretaria de Educação', dataAbertura: '30/06/2026', status: 'Aberto' },
    { id: 2, modalidade: 'Tomada de Preços', num: '005/2026', objeto: 'Contratação de empresa de engenharia para reforma da praça central', dataAbertura: '15/07/2026', status: 'Aberto' },
    { id: 3, modalidade: 'Concorrência', num: '001/2026', objeto: 'Concessão dos serviços de limpeza urbana e manejo de resíduos', dataAbertura: '05/06/2026', status: 'Em Análise' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Licitações</h2>
            <p className="text-sm text-gray-500">Transparência em compras e contratos</p>
          </div>
        </div>
        <Link href="#" className="hidden sm:block px-4 py-2 bg-gray-50 text-gray-700 hover:bg-gray-100 font-semibold rounded-lg text-sm transition-colors border border-gray-200">
          Portal da Transparência
        </Link>
      </div>

      <div className="space-y-4 max-h-[340px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-amber-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-amber-300">
        {licitacoes.map((lic) => (
          <div key={lic.id} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md hover:border-amber-200 transition-all group">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded">{lic.modalidade}</span>
                <span className="text-sm font-semibold text-gray-900">Nº {lic.num}</span>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full w-fit ${lic.status === 'Aberto' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                {lic.status}
              </span>
            </div>
            
            <p className="text-gray-700 text-sm font-medium leading-relaxed mb-3 group-hover:text-amber-800 transition-colors">
              {lic.objeto}
            </p>
            
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-xs font-medium text-gray-500">Abertura: <strong className="text-gray-800">{lic.dataAbertura}</strong></span>
              <button className="text-amber-600 hover:text-amber-800 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Detalhes e Editais
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <Link href="#" className="sm:hidden mt-4 block text-center px-4 py-3 bg-gray-50 text-gray-700 hover:bg-gray-100 font-semibold rounded-xl text-sm transition-colors border border-gray-200">
        Ver todas no Portal da Transparência
      </Link>
    </div>
  );
}
