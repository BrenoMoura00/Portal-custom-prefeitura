import React from 'react';

export default function QuickLinksWidgetV2() {
  const links = [
    { title: 'IPTU', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { title: 'NFS-e', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { title: 'Holerite', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
    { title: 'Saúde', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { title: 'Educação', icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
    { title: 'Agenda', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  ];

  return (
    <div className="h-full flex flex-col justify-center">
      <h3 className="text-white font-serif text-2xl mb-8 border-b border-white/10 pb-4">Serviços Frequentes</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {links.map((link, i) => (
          <a key={i} href="#" className="group bg-[#0f3257] hover:bg-[#164476] p-6 transition-all duration-300 flex flex-col items-center justify-center gap-4 aspect-square border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <svg className="w-8 h-8 text-blue-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
            </svg>
            <span className="text-xs font-bold text-gray-300 group-hover:text-white uppercase tracking-widest transition-colors">{link.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
