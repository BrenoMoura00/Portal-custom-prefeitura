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

export default function AcessoRapidoV10() {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
      
      {/* Título Estilo Gov 2030: Sóbrio, alto contraste */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-200 pb-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
            Serviços <span className="font-semibold text-emerald-500">Essenciais</span>
          </h2>
          <p className="text-neutral-500 mt-2 font-medium">Acesso unificado aos sistemas da administração pública.</p>
        </div>
        <a href="#" className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 transition-colors uppercase tracking-widest font-bold">
          Catálogo Completo <span className="text-lg">&rarr;</span>
        </a>
      </div>

      {/* Grid Minimalista Gov 2030 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {servicos.map((servico) => (
          <a 
            key={servico.id} 
            href="#" 
            className="group flex items-center gap-5 p-6 rounded-none bg-white border border-neutral-200 hover:bg-neutral-50 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            {/* Ícone com estética brutalista/sóbria */}
            <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center bg-neutral-100 border border-neutral-200 group-hover:border-emerald-500/30 transition-colors">
              <i className={`${servico.icone} text-xl text-neutral-500 group-hover:text-emerald-600 transition-colors`}></i>
            </div>

            {/* Texto */}
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-semibold text-neutral-800 group-hover:text-neutral-900 transition-colors">
                {servico.nome}
              </span>
              <span className="text-[11px] text-neutral-500 font-bold uppercase tracking-wider mt-1 flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                Acessar <i className="fas fa-arrow-right text-[8px] ml-1"></i>
              </span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
