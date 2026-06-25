import React from 'react';

const portals = [
  { name: 'Receitas', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', value: 'R$ 45.2M', trend: '+12%' },
  { name: 'Despesas', icon: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6', value: 'R$ 38.7M', trend: '-5%' },
  { name: 'Licitações', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', value: '142', trend: 'Abertas' },
  { name: 'Contratos', icon: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2', value: '320', trend: 'Ativos' },
  { name: 'Servidores', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', value: '1.2k', trend: 'Efetivos' },
  { name: 'Obras', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', value: '24', trend: 'Em andamento' }
];

export default function TransparenciaGovV5() {
  return (
    <div className="w-full bg-emerald-950 py-24 relative overflow-hidden text-white">
      {/* Background Decorativo Premium */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[150px] transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] transform -translate-x-1/3 translate-y-1/4"></div>
        
        {/* Padrão de Grade Suave */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Texto e Call to Action (Esquerda) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-900/50 border border-emerald-800/50 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-300 text-sm font-bold tracking-widest uppercase">Portal da Transparência</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Acompanhe onde o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">imposto</span> é investido.
            </h2>
            
            <p className="text-emerald-100/70 text-lg mb-8 leading-relaxed max-w-lg">
              Acesso rápido a todos os dados abertos da prefeitura. Controle social, clareza nas contas públicas e informações atualizadas em tempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button className="flex-1 sm:flex-none px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1">
                Acessar Portal Completo
              </button>
              <button className="flex-1 sm:flex-none px-8 py-4 bg-emerald-900/50 hover:bg-emerald-800 border border-emerald-700/50 text-white font-bold rounded-full backdrop-blur-md transition-all duration-300">
                Ver Relatórios
              </button>
            </div>
          </div>

          {/* Cards Interativos (Direita) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {portals.map((portal) => (
              <a 
                href="#" 
                key={portal.name}
                className="group p-5 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between aspect-square"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-emerald-400 group-hover:text-emerald-950">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={portal.icon} />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-emerald-100 font-medium text-sm mb-1">{portal.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white">{portal.value}</span>
                  </div>
                  <span className="text-emerald-400 text-xs font-semibold">{portal.trend}</span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
