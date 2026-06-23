'use client';
import React from 'react';

export default function TimelineWidgetV2() {
  const events = [
    { year: '2023', title: 'Novo Plano Diretor', desc: 'Aprovação unânime da lei de zoneamento urbano', done: true },
    { year: '2024', title: 'Hospital Regional', desc: 'Inauguração da nova ala com 120 leitos', done: true },
    { year: '2025', title: 'Polo Tecnológico', desc: 'Hub com 50 startups e 800 empregos diretos', done: true },
    { year: '2026', title: 'Cidade Inteligente', desc: '100% de cobertura Wi-Fi pública', done: false },
  ];

  return (
    <div className="bg-white rounded-[24px] p-8 border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] h-full">
      <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase">Planejamento</span>
          <h3 className="text-2xl font-black text-[#0A2540]">Linha do Tempo</h3>
        </div>
        <a href="#" className="text-sm font-bold text-[#005FA3] hover:text-[#0A2540] transition-colors border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50">
          Plano Plurianual
        </a>
      </div>

      <div className="flex flex-col gap-0">
        {events.map((evt, i) => (
          <div key={i} className="flex gap-4 group">
            <div className="flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full border-[3px] shrink-0 mt-1 transition-transform group-hover:scale-125 ${evt.done ? 'bg-[#005FA3] border-[#005FA3]' : 'bg-white border-gray-300'}`}></div>
              {i < events.length - 1 && (
                <div className="w-[2px] flex-1 bg-gray-200 my-1"></div>
              )}
            </div>

            <div className={`pb-6 ${i === events.length - 1 ? '' : ''}`}>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{evt.year}</span>
              <h4 className="text-base font-bold text-[#0A2540] group-hover:text-[#005FA3] transition-colors leading-snug">{evt.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{evt.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
