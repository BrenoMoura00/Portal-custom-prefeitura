import React from 'react';

const paineis = [
  { id: 1, titulo: 'Receitas (Arrecadação)', valor: 'R$ 14.520.450,00', icone: 'fa-solid fa-arrow-trend-up text-[#009B3A]' },
  { id: 2, titulo: 'Despesas (Empenhado)', valor: 'R$ 11.230.100,00', icone: 'fa-solid fa-arrow-trend-down text-[#B8372B]' },
  { id: 3, titulo: 'Folha de Pagamento', valor: 'R$ 3.100.200,00', icone: 'fa-solid fa-users text-[#1351B4]' },
];

const links = [
  { titulo: 'Licitações e Contratos', icone: 'fa-solid fa-file-contract' },
  { titulo: 'Obras Públicas', icone: 'fa-solid fa-hard-hat' },
  { titulo: 'Diárias e Passagens', icone: 'fa-solid fa-plane' },
  { titulo: 'Convênios e Repasses', icone: 'fa-solid fa-handshake' },
  { titulo: 'Leis e Decretos', icone: 'fa-solid fa-scale-balanced' },
  { titulo: 'Relatórios Fiscais (LRF)', icone: 'fa-solid fa-file-invoice' },
];

export default function TransparenciaGovV8() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-slate-50/50 border-t border-slate-200">
      
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-[#0e3b85] flex items-center gap-3 uppercase tracking-tight">
            <span className="w-2 h-6 bg-[#009B3A] rounded-sm"></span>
            Portal da Transparência
          </h2>
          <p className="text-slate-500 font-medium mt-2 ml-5 text-sm">
            Acompanhe a aplicação dos recursos públicos em tempo real (Referência: Mai/2026)
          </p>
        </div>
        <a href="#" className="flex items-center gap-2 text-sm font-bold text-white bg-[#1351B4] hover:bg-[#0e3b85] px-5 py-2.5 rounded transition-colors ml-5 md:ml-0">
          Acessar Portal Completo <i className="fa-solid fa-external-link-alt text-xs"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Painel de Números */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Resumo Financeiro</h3>
          {paineis.map((painel) => (
            <div key={painel.id} className="bg-white border border-slate-200 p-5 shadow-sm rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <i className={`${painel.icone} text-lg`}></i>
                <span className="text-slate-500 text-sm font-bold">{painel.titulo}</span>
              </div>
              <span className="text-2xl font-black text-slate-800 font-mono tracking-tight">{painel.valor}</span>
            </div>
          ))}
        </div>

        {/* Links Rápidos da Transparência */}
        <div className="lg:col-span-2">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Acesso Rápido à Informação</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((link, idx) => (
              <a 
                key={idx} 
                href="#"
                className="flex items-center justify-between p-4 bg-white border border-slate-200 shadow-sm hover:border-[#1351B4]/50 group transition-colors rounded-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#1351B4] group-hover:bg-[#1351B4] group-hover:text-white transition-colors">
                    <i className={link.icone}></i>
                  </div>
                  <span className="font-bold text-slate-700 text-sm group-hover:text-[#1351B4] transition-colors">
                    {link.titulo}
                  </span>
                </div>
                <i className="fa-solid fa-chevron-right text-slate-300 group-hover:text-[#1351B4] text-sm"></i>
              </a>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-[#eef2f6] border border-slate-300 flex items-start gap-4 rounded-sm">
            <i className="fa-solid fa-circle-info text-[#1351B4] text-xl mt-0.5"></i>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Lei de Acesso à Informação (LAI)</h4>
              <p className="text-slate-600 text-xs leading-relaxed mb-2">
                Qualquer cidadão pode solicitar dados e informações públicas que não estejam disponíveis no portal. O prazo de resposta é de até 20 dias.
              </p>
              <a href="#" className="text-[#1351B4] font-bold text-xs uppercase tracking-wider hover:underline">
                Fazer uma solicitação de informação
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
