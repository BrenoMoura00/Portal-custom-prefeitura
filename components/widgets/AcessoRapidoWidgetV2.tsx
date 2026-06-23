import React from 'react';

export default function AcessoRapidoWidgetV2() {
  const items = [
    { label: 'Portal da Transparência', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { label: 'Nota Fiscal', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { label: 'Ouvidoria', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    { label: 'Diário Oficial', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { label: 'Contracheque', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
    { label: 'Licitações', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
      {items.map((item, index) => (
        <a key={index} href="#" className="group bg-white/5 backdrop-blur-sm p-5 rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.2)] border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center h-[130px] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          
          <div className="w-11 h-11 rounded-xl bg-blue-900/40 group-hover:bg-blue-500/20 flex items-center justify-center transition-colors duration-300 border border-white/5">
            <svg className="w-6 h-6 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
            </svg>
          </div>
          <span className="text-xs font-bold text-white/90 group-hover:text-white leading-tight transition-colors">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
}
