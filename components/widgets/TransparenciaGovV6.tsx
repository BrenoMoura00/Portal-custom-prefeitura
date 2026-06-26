import React from 'react';

const indicadores = [
  {
    titulo: 'Receita Arrecadada',
    valor: 'R$ 48,2 Mi',
    variacao: '+12,4%',
    positivo: true,
    periodo: 'Jan–Jun 2026',
    cor: '#2563EB',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  },
  {
    titulo: 'Despesas Executadas',
    valor: 'R$ 41,7 Mi',
    variacao: '+8,1%',
    positivo: false,
    periodo: 'Jan–Jun 2026',
    cor: '#DC2626',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
  },
  {
    titulo: 'Obras em Execução',
    valor: '12',
    variacao: '+3',
    positivo: true,
    periodo: 'Ativas',
    cor: '#059669',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  },
];

const obras = [
  { nome: 'Novo Hospital Municipal', bairro: 'Centro', progresso: 85, status: 'Acabamento', cor: 'from-blue-500 to-indigo-500' },
  { nome: 'Complexo Educacional Infantil', bairro: 'Vila Nova', progresso: 40, status: 'Alvenaria', cor: 'from-emerald-500 to-teal-500' },
  { nome: 'Pavimentação Asfáltica', bairro: 'Bairro dos Estados', progresso: 65, status: 'Em Execução', cor: 'from-amber-500 to-orange-500' },
];

const linksTransparencia = [
  { titulo: 'Receitas e Despesas', desc: 'Relatórios detalhados', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { titulo: 'Folha de Pagamento', desc: 'Salários e remunerações', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { titulo: 'Licitações e Contratos', desc: 'Editais e andamentos', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { titulo: 'Diárias e Passagens', desc: 'Gastos com viagens', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
];

// Removido MiniBarChart para um design mais limpo

export default function TransparenciaGovV6() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Portal da Transparência</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Gestão <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Aberta e Clara</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Acompanhe a aplicação dos recursos públicos, contratos e relatórios com total clareza e facilidade de acesso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {indicadores.map((ind) => (
                <div key={ind.titulo} className="group bg-white border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-[2rem] p-8 transition-all duration-300 relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${ind.cor}1A`, color: ind.cor }}>
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {ind.icon}
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider leading-snug">{ind.titulo}</h3>
                  </div>
                  
                  <div className="mb-5">
                    <div className="text-3xl xl:text-4xl font-black text-slate-900 tracking-tight">{ind.valor}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg ${ind.positivo ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                      {ind.positivo ? '↑' : '↓'} {ind.variacao}
                    </span>
                    <span className="text-sm font-medium text-slate-400">vs. último semestre</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <svg className="w-7 h-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  Monitoramento de Obras
                </h3>
                <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors hidden sm:block">Ver mapa completo →</a>
              </div>

              <div className="flex flex-col gap-8">
                {obras.map((obra, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <h4 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">{obra.nome}</h4>
                        <span className="text-slate-500 text-sm font-medium flex items-center gap-1.5 mt-1">
                          <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /></svg>
                          Bairro {obra.bairro}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black text-slate-900">{obra.progresso}%</span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mt-1">{obra.status}</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${obra.cor} transition-all duration-1000 ease-out`}
                        style={{ width: `${obra.progresso}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-slate-900 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden mb-2">
              <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-500/30 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-bold mb-2">Acesso Rápido</h3>
              <p className="text-slate-400 text-sm mb-6 font-medium">Consulte os dados fiscais e administrativos.</p>
              
              <div className="flex flex-col gap-3 relative z-10">
                {linksTransparencia.map((link, i) => (
                  <a key={i} href="#" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors">{link.titulo}</h4>
                      <p className="text-xs text-slate-400">{link.desc}</p>
                    </div>
                  </a>
                ))}
              </div>

              <a href="#" className="mt-8 flex items-center justify-center w-full gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all duration-300">
                Acessar Portal Completo
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
