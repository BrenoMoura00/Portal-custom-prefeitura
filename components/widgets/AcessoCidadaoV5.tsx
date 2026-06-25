import React from 'react';

const services = [
  { 
    name: 'IPTU e Taxas', 
    desc: '2ª via e certidões',
    icone: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', 
    colorWrapper: 'from-emerald-500/20 to-teal-500/5',
    colorIcon: 'text-emerald-400',
    colorGlow: 'group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]',
    colorBorder: 'group-hover:border-emerald-500/50'
  },
  { 
    name: 'Nota Fiscal', 
    desc: 'Emissão de NFS-e',
    icone: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', 
    colorWrapper: 'from-blue-500/20 to-cyan-500/5',
    colorIcon: 'text-blue-400',
    colorGlow: 'group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]',
    colorBorder: 'group-hover:border-blue-500/50'
  },
  { 
    name: 'Matrícula Escolar', 
    desc: 'Vagas na rede municipal',
    icone: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', 
    colorWrapper: 'from-purple-500/20 to-fuchsia-500/5',
    colorIcon: 'text-purple-400',
    colorGlow: 'group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]',
    colorBorder: 'group-hover:border-purple-500/50'
  },
  { 
    name: 'Saúde', 
    desc: 'Agendamento e exames',
    icone: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', 
    colorWrapper: 'from-rose-500/20 to-pink-500/5',
    colorIcon: 'text-rose-400',
    colorGlow: 'group-hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.3)]',
    colorBorder: 'group-hover:border-rose-500/50'
  },
  { 
    name: 'Empregos', 
    desc: 'Vagas e currículos',
    icone: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z', 
    colorWrapper: 'from-amber-500/20 to-orange-500/5',
    colorIcon: 'text-amber-400',
    colorGlow: 'group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]',
    colorBorder: 'group-hover:border-amber-500/50'
  },
  { 
    name: 'Multas e IPVA', 
    desc: 'Consulta de veículos',
    icone: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z', 
    colorWrapper: 'from-indigo-500/20 to-blue-500/5',
    colorIcon: 'text-indigo-400',
    colorGlow: 'group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]',
    colorBorder: 'group-hover:border-indigo-500/50'
  },
];

export default function AcessoCidadaoV5() {
  return (
    <div className="w-full bg-slate-50 pt-8 pb-24 relative overflow-hidden">
      {/* Luzes de fundo sutis */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0 opacity-40">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase mb-3 block">Carta de Serviços</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">O que você precisa hoje?</h2>
          <p className="text-slate-600 text-lg max-w-2xl">
            Acesse rapidamente os serviços mais procurados de forma totalmente digital, sem filas e sem burocracia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a 
              href="#"
              key={service.name} 
              className={`group flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2 ${service.colorBorder}`}
            >
              {/* Box do Ícone com gradiente sutil */}
              <div className={`w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${service.colorWrapper} border border-slate-50 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                <svg className={`w-8 h-8 ${service.colorIcon} drop-shadow-sm`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icone} />
                </svg>
              </div>
              
              <div className="flex-1 min-w-0 mt-1">
                <h3 className="text-slate-900 font-bold text-xl mb-1 group-hover:text-emerald-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Setinha apontando para a direita no hover */}
              <div className="mt-2 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-emerald-600 font-bold transition-all duration-300 hover:shadow-md">
            Explorar todos os serviços &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
