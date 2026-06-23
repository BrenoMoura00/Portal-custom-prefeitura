import React from 'react';

export default function CentralCidadaoWidgetV2() {
  return (
    <div className="bg-[#0A2540] text-white rounded-[32px] p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden border border-[#E2E8F0]/10">
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#005FA3] opacity-30 rounded-full blur-[80px]"></div>
      
      <div className="flex flex-col md:flex-row gap-12 relative z-10">
        <div className="md:w-1/3">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Dashboard Interativo</span>
          <h2 className="text-4xl font-black mb-6 leading-tight">Sua Vida, a um Clique.</h2>
          <p className="text-gray-300 text-lg mb-8">A Central do Cidadão digitaliza dezenas de processos burocráticos. Emita taxas, solicite alvarás e agende consultas sem sair de casa.</p>
          <button className="bg-white text-[#0A2540] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Fazer Login gov.br
          </button>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Emissão IPTU', icon: '🏠', color: 'bg-white/10 hover:bg-[#005FA3]' },
            { label: 'Nota Fiscal', icon: '🧾', color: 'bg-white/10 hover:bg-[#005FA3]' },
            { label: 'Certidões', icon: '📜', color: 'bg-white/10 hover:bg-[#005FA3]' },
            { label: 'Alvarás', icon: '🏪', color: 'bg-white/10 hover:bg-[#005FA3]' },
            { label: 'Protocolos', icon: '📂', color: 'bg-white/10 hover:bg-[#005FA3]' },
            { label: 'Concursos', icon: '🎓', color: 'bg-white/10 hover:bg-[#005FA3]' },
            { label: 'Agendamento Saúde', icon: '🏥', color: 'bg-white/10 hover:bg-[#005FA3]' },
            { label: 'Todos Serviços', icon: '➡️', color: 'bg-[#005FA3] hover:bg-[#005FA3]/80' },
          ].map((app, idx) => (
            <a key={idx} href="#" className="bg-[#0A2540]/50 border border-white/5 p-4 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1 group">
              <div className={`w-14 h-14 ${app.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-colors`}>
                {app.icon}
              </div>
              <span className="text-xs font-bold text-center text-gray-200 group-hover:text-white transition-colors">{app.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
