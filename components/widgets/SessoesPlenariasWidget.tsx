import React from 'react';
import Link from 'next/link';

export default function SessoesPlenariasWidget() {
  const sessoes = [
    { id: 1, title: '15ª Sessão Ordinária', date: '25 de Junho, 2026', time: '14:00', status: 'Agendada', type: 'Ordinária' },
    { id: 2, title: 'Audiência Pública: LDO', date: '28 de Junho, 2026', time: '10:00', status: 'Agendada', type: 'Extraordinária' },
    { id: 3, title: '14ª Sessão Ordinária', date: '18 de Junho, 2026', time: '14:00', status: 'Realizada', type: 'Ordinária' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase mb-2 block">TV Câmara & Agenda</span>
          <h2 className="text-3xl font-bold text-gray-900">Sessões Plenárias</h2>
        </div>
        <Link href="#" className="text-indigo-600 hover:text-indigo-800 font-medium text-sm hidden sm:block">
          Ver todas as sessões →
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-video flex items-center justify-center group cursor-pointer">
          <img src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2000&auto=format&fit=crop" alt="Sessão ao vivo" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">AO VIVO</span>
            <h3 className="text-white text-xl font-bold mt-2 text-center">Assista à Sessão Atual</h3>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {sessoes.map((sessao) => (
            <div key={sessao.id} className="flex gap-4 p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors group">
              <div className="flex flex-col items-center justify-center bg-indigo-50 text-indigo-700 rounded-lg w-16 h-16 shrink-0">
                <span className="text-xs font-semibold">{sessao.date.split(' ')[0]}</span>
                <span className="text-xl font-bold leading-none">{sessao.date.split(' ')[2]}</span>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">{sessao.title}</h4>
                  <span className={`text-[10px] px-2 py-1 rounded-full font-bold ${sessao.status === 'Agendada' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>
                    {sessao.status}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1 gap-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {sessao.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                    {sessao.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
