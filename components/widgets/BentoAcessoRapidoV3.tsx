'use client';

import React from 'react';

export default function BentoAcessoRapidoV3() {
  const servicos = [
    {
      id: 'transparencia',
      titulo: 'Portal da Transparência',
      descricao: 'Acompanhe as receitas, despesas, licitações e contratos do município em tempo real.',
      icone: 'fas fa-chart-pie',
      link: '#',
      estilo: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#005FA3] to-[#0A2540] text-white',
      iconeEstilo: 'text-white/20 text-8xl absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform duration-500',
      destaque: true
    },
    {
      id: 'nfe',
      titulo: 'Nota Fiscal Eletrônica',
      descricao: 'Emissão e consulta de NFS-e.',
      icone: 'fas fa-file-invoice-dollar',
      link: '#',
      estilo: 'md:col-span-2 md:row-span-1 bg-white border border-gray-200 shadow-[0_10px_40px_rgb(0,0,0,0.08)]',
      iconeEstilo: 'text-[#005FA3] text-4xl mb-4 group-hover:-translate-y-2 transition-transform duration-300'
    },
    {
      id: 'servidor',
      titulo: 'Portal do Servidor',
      descricao: 'Contracheque e informes.',
      icone: 'fas fa-user-tie',
      link: '#',
      estilo: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-[#10B981] to-[#059669] text-white shadow-[0_10px_30px_rgba(16,185,129,0.2)]',
      iconeEstilo: 'text-white/90 text-3xl mb-3 group-hover:scale-110 transition-transform duration-300'
    },
    {
      id: 'iptu',
      titulo: 'IPTU e Taxas',
      descricao: '2ª via e certidões.',
      icone: 'fas fa-home',
      link: '#',
      estilo: 'md:col-span-1 md:row-span-1 bg-gradient-to-br from-[#FFF5E6] to-[#FFFBF5]',
      iconeEstilo: 'text-[#F59E0B] text-3xl mb-3 group-hover:scale-110 transition-transform duration-300'
    },
    {
      id: 'saude',
      titulo: 'Saúde Digital',
      descricao: 'Agendamentos e resultados de exames da rede municipal.',
      icone: 'fas fa-heartbeat',
      link: '#',
      estilo: 'md:col-span-2 md:row-span-1 bg-white border border-gray-200 shadow-[0_10px_40px_rgb(0,0,0,0.08)] flex flex-row items-center gap-6',
      iconeEstilo: 'text-[#10B981] text-4xl group-hover:rotate-12 transition-transform duration-300'
    },
    {
      id: 'ouvidoria',
      titulo: 'Ouvidoria (e-SIC)',
      descricao: 'Sugestões, denúncias e acesso à informação.',
      icone: 'fas fa-comments',
      link: '#',
      estilo: 'md:col-span-2 md:row-span-1 bg-[#0A2540] text-white',
      iconeEstilo: 'text-[#38BDF8] text-4xl mb-4 group-hover:-translate-y-2 transition-transform duration-300'
    }
  ];

  return (
    <section className="py-24 px-[5%] bg-[#E2E8F0]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase mb-2 block">Acesso Rápido</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">Serviços Essenciais</h2>
            <p className="text-gray-500 mt-2 max-w-lg">Encontre o que você precisa de forma rápida e descomplicada, diretamente na palma da mão.</p>
          </div>
          <a href="#" className="text-sm font-bold text-[#005FA3] hover:text-[#0A2540] transition-colors border border-gray-200 bg-white px-5 py-2.5 rounded-full hover:bg-gray-50 shadow-sm whitespace-nowrap flex items-center gap-2">
            Ver todos os serviços <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[160px]">
          
          {servicos.map((servico) => {
            // Renderização especial para o card de Destaque
            if (servico.destaque) {
              return (
                <a 
                  key={servico.id} 
                  href={servico.link} 
                  className={`group relative overflow-hidden rounded-[32px] p-8 md:p-10 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,95,163,0.3)] transition-all duration-300 ${servico.estilo}`}
                >
                  <div className="relative z-10">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md mb-6 border border-white/20">
                      <i className={`${servico.icone} text-white text-xl`}></i>
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{servico.titulo}</h3>
                    <p className="text-blue-100 max-w-[80%] md:text-lg">{servico.descricao}</p>
                  </div>
                  
                  <div className="relative z-10 flex items-center gap-2 font-semibold mt-8 text-white group-hover:translate-x-2 transition-transform">
                    Acessar painel <i className="fas fa-arrow-right"></i>
                  </div>

                  <i className={servico.iconeEstilo}></i>
                  
                  {/* Elemento Decorativo Glass */}
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                </a>
              );
            }

            // Renderização especial para cards horizontais (como Saúde que pus flex-row)
            if (servico.estilo.includes('flex-row')) {
               return (
                <a 
                  key={servico.id} 
                  href={servico.link} 
                  className={`group relative overflow-hidden rounded-[32px] p-8 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 ${servico.estilo}`}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#ECFDF5] flex items-center justify-center">
                     <i className={servico.iconeEstilo}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-1 ${servico.estilo.includes('text-white') ? 'text-white' : 'text-[#0A2540]'}`}>
                      {servico.titulo}
                    </h3>
                    <p className={servico.estilo.includes('text-white') ? 'text-gray-300' : 'text-gray-500'}>
                      {servico.descricao}
                    </p>
                  </div>
                  
                  <div className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 group-hover:bg-[#10B981] group-hover:border-[#10B981] group-hover:text-white transition-colors duration-300 ${servico.estilo.includes('text-white') ? 'text-white' : 'text-[#005FA3]'}`}>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </a>
              );
            }

            // Renderização Padrão para os demais cards
            return (
              <a 
                key={servico.id} 
                href={servico.link} 
                className={`group relative overflow-hidden rounded-[32px] p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 ${servico.estilo}`}
              >
                <div>
                  <i className={servico.iconeEstilo}></i>
                  <h3 className={`text-xl font-bold mb-2 ${servico.estilo.includes('text-white') ? 'text-white' : 'text-[#0A2540]'}`}>
                    {servico.titulo}
                  </h3>
                  <p className={`text-sm ${servico.estilo.includes('text-white') ? 'text-gray-300' : 'text-gray-500'}`}>
                    {servico.descricao}
                  </p>
                </div>
                
                <div className={`mt-4 font-semibold flex items-center gap-2 group-hover:translate-x-1 transition-transform ${servico.estilo.includes('text-white') ? 'text-white' : 'text-[#005FA3]'}`}>
                  Acessar <i className="fas fa-arrow-right text-sm"></i>
                </div>
              </a>
            );
          })}

        </div>
      </div>
    </section>
  );
}
