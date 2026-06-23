import React from 'react';
import Link from 'next/link';

export default function DiarioOficialWidget() {
  const edicoes = [
    { id: 1, date: '25 Jun 2026', num: 'Edição 3450', size: '2.4 MB' },
    { id: 2, date: '24 Jun 2026', num: 'Edição 3449', size: '1.8 MB' },
    { id: 3, date: '23 Jun 2026', num: 'Edição 3448', size: '3.1 MB' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Diário Oficial</h2>
      </div>

      <p className="text-gray-600 mb-6 text-sm">Acesse as publicações legais e atos oficiais do município.</p>

      <div className="flex flex-col gap-3 flex-1">
        {edicoes.map((edicao) => (
          <a key={edicao.id} href="#" className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all group">
            <div className="flex items-center gap-4">
              <div className="text-center bg-gray-50 rounded px-3 py-2 group-hover:bg-blue-50 transition-colors">
                <span className="block text-xs text-gray-500 font-medium uppercase">{edicao.date.split(' ')[1]}</span>
                <span className="block text-lg font-bold text-gray-900">{edicao.date.split(' ')[0]}</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600">{edicao.num}</h4>
                <span className="text-xs text-gray-500">PDF • {edicao.size}</span>
              </div>
            </div>
            <div className="text-gray-400 group-hover:text-blue-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </div>
          </a>
        ))}
      </div>

      <Link href="#" className="mt-6 w-full text-center block bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl transition-colors">
        Acessar todas as edições
      </Link>
    </div>
  );
}
