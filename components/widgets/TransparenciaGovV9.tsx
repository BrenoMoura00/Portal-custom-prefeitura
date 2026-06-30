import React from 'react';

export default function TransparenciaGovV9() {
  const kpis = [
    { label: 'Receita Arrecadada', value: 'R$ 145,2M', perc: '85%', color: 'text-emerald-400', bar: 'bg-emerald-500' },
    { label: 'Despesas Empenhadas', value: 'R$ 98,4M', perc: '60%', color: 'text-cyan-400', bar: 'bg-cyan-500' },
    { label: 'Investimento em Obras', value: 'R$ 32,1M', perc: '45%', color: 'text-indigo-400', bar: 'bg-indigo-500' },
    { label: 'Saúde e Educação', value: 'R$ 48,5M', perc: '72%', color: 'text-rose-400', bar: 'bg-rose-500' },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
      
      {/* Container Principal Glassmorphism */}
      <div className="rounded-[32px] bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Glow de fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-cyan-400 font-bold tracking-widest text-[10px] uppercase border border-cyan-500/30 px-2 py-1 rounded bg-cyan-500/10">Dados Abertos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
              Portal da <span className="font-bold">Transparência</span>
            </h2>
            <p className="text-slate-400 mt-2 font-medium max-w-xl">
              Acompanhe a aplicação dos recursos públicos em tempo real através de nosso painel financeiro digital.
            </p>
          </div>
          
          <button className="flex items-center gap-3 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors">
            Acessar Painel Completo <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Grid de KPIs - Estilo App Financeiro */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {kpis.map((kpi, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <span className="text-slate-400 text-sm font-medium uppercase tracking-wider block mb-2">{kpi.label}</span>
              <div className={`text-3xl lg:text-4xl font-black ${kpi.color} tracking-tight mb-6`}>
                {kpi.value}
              </div>
              
              {/* Barra de Progresso Minimalista */}
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full ${kpi.bar} rounded-full`} style={{ width: kpi.perc }}></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[10px] text-slate-500 font-bold">Meta Anual</span>
                <span className="text-[10px] text-slate-300 font-bold">{kpi.perc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Links Rápidos Inferiores */}
        <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
           {['Licitações', 'Contratos', 'Folha de Pagamento', 'LRF'].map((link, idx) => (
             <a key={idx} href="#" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 font-medium text-sm transition-colors">
               <i className="fas fa-link text-[10px]"></i> {link}
             </a>
           ))}
        </div>

      </div>

    </section>
  );
}
