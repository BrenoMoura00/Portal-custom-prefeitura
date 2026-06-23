'use client';
import React from 'react';

export default function SealsWidgetV2() {
  const seals = [
    { label: 'Transparência Nível A', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { label: 'Selo UNICEF', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { label: 'Prefeito Empreendedor', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { label: 'Município Verde Azul', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064' },
    { label: 'Turismo Sustentável', icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9' },
    { label: 'Educação Nota 10', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
    { label: 'Gestão Eficiente', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { label: 'Cidade Inteligente', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  ];

  // Duplica para o loop infinito ser contínuo
  const track = [...seals, ...seals];

  return (
    <div className="bg-white rounded-[24px] border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-10 overflow-hidden">
      <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100">
        <div>
          <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase mb-1 block">Reconhecimentos</span>
          <h3 className="text-2xl font-black text-[#0A2540]">Selos e Certificações</h3>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 w-max"
            style={{
              animation: 'ticker-scroll 28s linear infinite',
            }}
          >
            {track.map((seal, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 shrink-0 group hover:border-[#005FA3]/30 hover:bg-blue-50/60 transition-all cursor-default"
              >
                <div className="w-10 h-10 bg-white border border-gray-100 group-hover:bg-[#005FA3] group-hover:border-[#005FA3] rounded-xl flex items-center justify-center transition-colors duration-300 shadow-sm">
                  <svg className="w-5 h-5 text-[#005FA3] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={seal.icon} />
                  </svg>
                </div>
                <span className="text-sm font-bold text-gray-700 group-hover:text-[#005FA3] whitespace-nowrap transition-colors">{seal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
