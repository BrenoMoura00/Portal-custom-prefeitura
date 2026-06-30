import React from 'react';

const servicos = [
  { id: '1', nome: 'Nota Fiscal Eletrônica', icone: 'fas fa-file-invoice-dollar' },
  { id: '2', nome: 'IPTU e Taxas', icone: 'fas fa-home' },
  { id: '3', nome: 'Portal da Transparência', icone: 'fas fa-chart-pie' },
  { id: '4', nome: 'Diário Oficial', icone: 'fas fa-book' },
  { id: '5', nome: 'Ouvidoria (e-SIC)', icone: 'fas fa-comments' },
  { id: '6', nome: 'Portal do Servidor', icone: 'fas fa-user-tie' },
  { id: '7', nome: 'Licitações e Contratos', icone: 'fas fa-gavel' },
  { id: '8', nome: 'Agendamento Saúde', icone: 'fas fa-heartbeat' },
];

export default function AcessoRapidoV9() {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
      
      {/* Título Institucional e Sóbrio */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide">
            Serviços <span className="font-bold text-cyan-400">Essenciais</span>
          </h2>
          <p className="text-slate-400 mt-2 font-medium">Acesso rápido aos principais sistemas da administração pública.</p>
        </div>
        <a href="#" className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-widest font-bold">
          Catálogo Completo <span className="text-lg">&rarr;</span>
        </a>
      </div>

      {/* Grid Institucional Sóbrio (Glassmorphism Premium) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {servicos.map((servico) => (
          <a 
            key={servico.id} 
            href="#" 
            className="group flex items-center gap-5 p-6 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all duration-300"
          >
            {/* Ícone com brilho sutil */}
            <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
              <i className={`${servico.icone} text-xl text-slate-300 group-hover:text-cyan-400 transition-colors`}></i>
            </div>

            {/* Texto */}
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                {servico.nome}
              </span>
              <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider mt-1 flex items-center gap-1 group-hover:text-cyan-400/70 transition-colors">
                Acessar Sistema <i className="fas fa-chevron-right text-[8px]"></i>
              </span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
