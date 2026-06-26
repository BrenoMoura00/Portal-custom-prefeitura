import React from 'react';

const paineis = [
  { titulo: 'Receita Arrecadada', valor: 'R$ 48,2 Milhões', variacao: '+12,4%', destaque: true },
  { titulo: 'Despesas Empenhadas', valor: 'R$ 41,7 Milhões', variacao: '+8,1%', destaque: false },
  { titulo: 'Obras em Andamento', valor: '12 Obras', variacao: '+3 novas', destaque: true },
  { titulo: 'Transparência', valor: 'Nota 9.8', variacao: 'TCE-PE', destaque: false },
];

export default function TransparenciaGovV7() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-24 relative z-10">
      
      <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-[#1351B4]/10 shadow-[0_8px_40px_rgb(19,81,180,0.06)] relative overflow-hidden">
        
        {/* Glow de Fundo Institucional */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#009B3A]/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1351B4]/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row gap-16 relative z-10">
          
          {/* Lado Esquerdo - Info */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-[#009B3A] uppercase tracking-widest mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Gestão Aberta
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Transparência <br/>em tempo real.
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
              Acompanhe onde e como os recursos da cidade estão sendo investidos. Tudo aberto, simples e acessível.
            </p>
            
            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#1351B4] text-white font-bold hover:bg-[#0A2A66] transition-colors shadow-md w-max">
              Acessar Portal Completo
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>

          {/* Lado Direito - Grid de Dados */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {paineis.map((painel, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#1351B4]/30 transition-colors group">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 group-hover:text-[#1351B4] transition-colors">{painel.titulo}</h3>
                <div className="text-3xl lg:text-4xl font-black text-[#1351B4] tracking-tight mb-2">{painel.valor}</div>
                <span className={`text-sm font-bold ${painel.destaque ? 'text-[#009B3A]' : 'text-slate-400'}`}>
                  {painel.variacao}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
