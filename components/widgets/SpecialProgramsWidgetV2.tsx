'use client';
import React, { useState } from 'react';

export default function SpecialProgramsWidgetV2() {
  const [activeTab, setActiveTab] = useState(0);

  const programs = [
    { title: 'Bolsa Família Municipal', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', desc: 'Complemento de renda para famílias em extrema vulnerabilidade, garantindo segurança alimentar e desenvolvimento infantil.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80' },
    { title: 'Jovem Empreendedor', icon: 'M13 10V3L4 14h7v7l9-11h-7z', desc: 'Capacitação técnica e linha de crédito facilitada para jovens entre 18 e 29 anos que desejam abrir o seu primeiro negócio.', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80' },
    { title: 'Saúde em Casa', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', desc: 'Atendimento médico e fornecimento contínuo de medicamentos na residência de idosos e pessoas com mobilidade reduzida.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
    { title: 'Morar Bem', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', desc: 'Programa de habitação popular e regularização fundiária, garantindo dignidade e escritura pública para milhares de famílias.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80' },
  ];

  return (
    <div className="bg-[#F8FAFC] rounded-[40px] p-[32px] md:p-[48px] shadow-inner border border-[#E2E8F0]">
      <div className="text-center mb-[40px]">
        <h2 className="text-[2rem] font-black text-[#0A2540] mb-[16px]">Programas Especiais</h2>
        <p className="text-[#64748B] font-medium max-w-2xl mx-auto">Conheça as principais iniciativas sociais e de desenvolvimento econômico que estão transformando a realidade do nosso município.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[32px]">
        <div className="lg:w-1/3 flex flex-col gap-[12px]">
          {programs.map((prog, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-[20px] rounded-[16px] flex items-center gap-[16px] text-left transition-all ${activeTab === idx ? 'bg-white shadow-[0_8px_24px_rgba(10,37,64,0.06)] border-l-[4px] border-[#005FA3]' : 'hover:bg-white/50 border-l-[4px] border-transparent'}`}
            >
              <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0 ${activeTab === idx ? 'bg-[#005FA3]/10' : 'bg-white border border-[#E2E8F0]'}`}>
                <svg className={`w-5 h-5 ${activeTab === idx ? 'text-[#005FA3]' : 'text-[#64748B]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={prog.icon} /></svg>
              </div>
              <span className={`font-extrabold ${activeTab === idx ? 'text-[#005FA3]' : 'text-[#0A2540]'}`}>{prog.title}</span>
            </button>
          ))}
        </div>

        <div className="lg:w-2/3">
          <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_12px_32px_rgba(10,37,64,0.08)] border border-[#E2E8F0] flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 p-[40px] flex flex-col justify-center">
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.5px] text-amber-600 mb-[8px] bg-amber-50 w-fit px-3 py-1 rounded-full">Programa em Destaque</span>
              <h3 className="text-[1.75rem] font-black text-[#0A2540] mb-[16px] leading-[1.2]">{programs[activeTab].title}</h3>
              <p className="text-[#64748B] font-medium leading-[1.6] mb-[32px]">{programs[activeTab].desc}</p>
              <a href="#" className="inline-block text-[#005FA3] font-bold hover:underline">Ler edital completo &rarr;</a>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <img src={programs[activeTab].image} alt={programs[activeTab].title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
