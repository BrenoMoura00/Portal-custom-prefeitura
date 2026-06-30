import React from 'react';

const servicos = [
  { id: 1, titulo: 'IPTU 2026', desc: 'Emissão de guia e 2ª via', icone: 'fa-solid fa-file-invoice-dollar' },
  { id: 2, titulo: 'Nota Fiscal Eletrônica', desc: 'Acesso ao sistema de NFS-e', icone: 'fa-solid fa-receipt' },
  { id: 3, titulo: 'Portal do Servidor', desc: 'Consulta de contracheque', icone: 'fa-solid fa-user-tie' },
  { id: 4, titulo: 'Ouvidoria Municipal', desc: 'Registro de manifestações', icone: 'fa-solid fa-bullhorn' },
  { id: 5, titulo: 'Diário Oficial', desc: 'Publicações e atos legais', icone: 'fa-solid fa-book' },
  { id: 6, titulo: 'Licitações e Contratos', desc: 'Editais, pregões e extratos', icone: 'fa-solid fa-gavel' },
  { id: 7, titulo: 'Concursos Públicos', desc: 'Processos seletivos em andamento', icone: 'fa-solid fa-graduation-cap' },
  { id: 8, titulo: 'Portal da Transparência', desc: 'Receitas, despesas e relatórios', icone: 'fa-solid fa-chart-line' },
];

export default function AcessoRapidoV8() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-[#0e3b85] flex items-center gap-3 mb-2">
            <span className="w-2 h-6 bg-[#009B3A] rounded-full"></span>
            Acesso Rápido
          </h2>
          <p className="text-slate-500 font-medium ml-5">
            Os serviços mais procurados pelos cidadãos
          </p>
        </div>
        <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#1351B4] hover:text-[#0e3b85] transition-colors ml-5 md:ml-0">
          Ver Carta de Serviços <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      {/* Grid de Cards Independentes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {servicos.map((servico) => (
          <a 
            key={servico.id} 
            href="#"
            className="group flex flex-col bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#1351B4]/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 text-[#1351B4] flex items-center justify-center mb-4 group-hover:bg-[#1351B4] group-hover:text-white transition-colors">
              <i className={`${servico.icone} text-xl`}></i>
            </div>
            <h3 className="font-bold text-slate-800 text-base mb-1 group-hover:text-[#1351B4] transition-colors">
              {servico.titulo}
            </h3>
            <p className="text-slate-500 text-sm">
              {servico.desc}
            </p>
          </a>
        ))}
      </div>

    </section>
  );
}
