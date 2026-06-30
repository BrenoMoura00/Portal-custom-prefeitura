import React from 'react';

export default function TransparenciaGovV10() {
  const kpis = [
    { label: 'Receita Arrecadada', value: 'R$ 145,2M', perc: '85%', color: 'text-emerald-400', bar: 'bg-emerald-500' },
    { label: 'Despesas Empenhadas', value: 'R$ 98,4M', perc: '60%', color: 'text-amber-400', bar: 'bg-amber-500' },
    { label: 'Investimento em Obras', value: 'R$ 32,1M', perc: '45%', color: 'text-neutral-300', bar: 'bg-neutral-400' },
    { label: 'Saúde e Educação', value: 'R$ 48,5M', perc: '72%', color: 'text-emerald-300', bar: 'bg-emerald-400' },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
      
      {/* Container Principal Sóbrio (Dark Theme Isolado) */}
      <div className="rounded-none bg-neutral-950 border border-neutral-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Glow de fundo mais sério */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10 border-b border-neutral-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-emerald-500 font-bold tracking-widest text-[10px] uppercase border border-emerald-500/30 px-2 py-1 bg-emerald-500/10">Dados Abertos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Portal da <span className="font-bold">Transparência</span>
            </h2>
            <p className="text-neutral-400 mt-2 font-medium max-w-xl">
              Acompanhe a aplicação dos recursos públicos em tempo real através de nosso painel financeiro digital.
            </p>
          </div>
          
          <button className="flex items-center gap-3 px-6 py-3 rounded-none bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold transition-colors uppercase tracking-wide text-sm">
            Acessar Painel <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Grid de KPIs - Estilo Painel de Controle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {kpis.map((kpi, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-none p-6 hover:border-emerald-500/30 transition-colors">
              <span className="text-neutral-500 text-xs font-bold uppercase tracking-wider block mb-2">{kpi.label}</span>
              <div className={`text-3xl lg:text-4xl font-black ${kpi.color} tracking-tight mb-6`}>
                {kpi.value}
              </div>
              
              {/* Barra de Progresso Sóbria */}
              <div className="w-full h-1.5 bg-neutral-950 border border-neutral-800 overflow-hidden">
                <div className={`h-full ${kpi.bar}`} style={{ width: kpi.perc }}></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[10px] text-neutral-600 font-bold uppercase">Meta Anual</span>
                <span className="text-[10px] text-neutral-400 font-bold">{kpi.perc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Links Rápidos Inferiores */}
        <div className="mt-10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
           {['Licitações', 'Contratos', 'Folha de Pagamento', 'LRF'].map((link, idx) => (
             <a key={idx} href="#" className="flex items-center gap-2 text-neutral-500 hover:text-emerald-400 font-bold text-sm transition-colors uppercase tracking-wide">
               <i className="fas fa-link text-[10px]"></i> {link}
             </a>
           ))}
        </div>

      </div>

    </section>
  );
}
