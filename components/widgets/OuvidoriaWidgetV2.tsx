import React from 'react';

export default function OuvidoriaWidgetV2() {
  const canais = [
    { label: 'Denúncia', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z', desc: 'Irregularidades na administração pública' },
    { label: 'Reclamação', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', desc: 'Serviço inadequado ou não prestado' },
    { label: 'Sugestão', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', desc: 'Ideias para melhorar a cidade' },
    { label: 'Elogio', icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5', desc: 'Reconheça um bom atendimento' },
  ];

  return (
    <div className="bg-[#0A2540] rounded-[24px] p-8 border border-[#0A2540] shadow-[0_8px_30px_rgb(0,0,0,0.15)] text-white relative h-full">
      <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none">
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#005FA3] rounded-full opacity-20 blur-[60px]"></div>
      </div>

      <div className="relative z-10">
        <div className="mb-6 pb-4 border-b border-white/10">
          <span className="text-amber-500 font-bold tracking-widest text-[10px] uppercase">Canal Direto</span>
          <h3 className="text-2xl font-black">Ouvidoria Municipal</h3>
        </div>

        <p className="text-gray-300 text-sm mb-8 leading-relaxed">Sua voz transforma a cidade. Registre manifestações e acompanhe o andamento em tempo real.</p>

        <div className="grid grid-cols-2 gap-4 mb-8 pb-2">
          {canais.map((canal, i) => (
            <a key={i} href="#" className="group bg-white/5 border border-white/10 rounded-2xl px-4 py-5 hover:bg-white/10 transition-all text-center flex flex-col items-center">
              <div className="w-11 h-11 mb-4 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={canal.icon} />
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-white block mb-2">{canal.label}</span>
              <span className="text-[11px] text-gray-400 leading-relaxed block">{canal.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
