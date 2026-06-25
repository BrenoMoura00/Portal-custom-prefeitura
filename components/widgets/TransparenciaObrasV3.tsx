'use client';

import React from 'react';

export default function TransparenciaObrasV3() {
  const estatisticas = [
    {
      id: 1,
      valor: '+R$ 150M',
      rotulo: 'Investidos em Infraestrutura',
      icone: 'fas fa-chart-line',
      cor: 'text-[#38BDF8]' // Ciano brilhante
    },
    {
      id: 2,
      valor: '98%',
      rotulo: 'Processos Digitalizados',
      icone: 'fas fa-laptop-code',
      cor: 'text-[#10B981]' // Esmeralda
    },
    {
      id: 3,
      valor: '45+',
      rotulo: 'Obras Concluídas em 2026',
      icone: 'fas fa-hard-hat',
      cor: 'text-[#FBBF24]' // Âmbar
    }
  ];

  const obrasEmAndamento = [
    {
      id: 1,
      nome: 'Novo Hospital Municipal de Chã Grande',
      bairro: 'Centro',
      progresso: 85,
      status: 'Fase de Acabamento'
    },
    {
      id: 2,
      nome: 'Complexo Educacional Infantil',
      bairro: 'Vila Nova',
      progresso: 40,
      status: 'Alvenaria'
    },
    {
      id: 3,
      nome: 'Pavimentação Asfáltica (Etapa 3)',
      bairro: 'Bairro dos Estados',
      progresso: 65,
      status: 'Em Execução'
    }
  ];

  return (
    <section className="py-24 px-[5%] bg-[#0A2540] relative overflow-hidden">
      
      {/* Elementos Decorativos de Fundo (Glow) */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#005FA3]/20 to-transparent pointer-events-none blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Lado Esquerdo: Dados e Estatísticas */}
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <span className="text-[#38BDF8] font-bold tracking-widest text-[10px] uppercase mb-3 block flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
                Dados Abertos
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Transparência e <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#005FA3]">Resultados</span>
              </h2>
              <p className="text-slate-400 mt-4 max-w-md text-lg">
                Acompanhe em tempo real os investimentos e o avanço da nossa cidade através do portal de dados abertos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {estatisticas.map((stat) => (
                <div key={stat.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${stat.cor}`}>
                      <i className={stat.icone}></i>
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tighter">
                    {stat.valor}
                  </div>
                  <div className="text-sm font-medium text-slate-400">
                    {stat.rotulo}
                  </div>
                </div>
              ))}
              
              {/* Card Extra para Botão */}
              <a href="#" className="bg-gradient-to-br from-[#005FA3] to-[#0A2540] border border-[#38BDF8]/30 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,95,163,0.3)] transition-all duration-300 group">
                <i className="fas fa-external-link-alt text-[#38BDF8] text-2xl mb-3 group-hover:scale-110 transition-transform"></i>
                <span className="text-white font-bold mb-1">Acessar Portal</span>
                <span className="text-[#38BDF8] text-xs">Completo de Transparência</span>
              </a>
            </div>
          </div>

          {/* Lado Direito: Dashboard de Obras */}
          <div className="bg-[#0F3053] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <i className="fas fa-hard-hat text-[#FBBF24]"></i> Obras em Andamento
              </h3>
              <a href="#" className="text-sm font-semibold text-[#38BDF8] hover:text-white transition-colors">Ver mapa <i className="fas fa-map-marked-alt ml-1"></i></a>
            </div>

            <div className="flex flex-col gap-8">
              {obrasEmAndamento.map((obra) => (
                <div key={obra.id} className="group">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-white font-bold text-lg leading-tight group-hover:text-[#38BDF8] transition-colors">{obra.nome}</h4>
                      <span className="text-slate-400 text-sm"><i className="fas fa-map-marker-alt text-[#FBBF24] mr-1"></i> {obra.bairro}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white font-black text-xl">{obra.progresso}%</span>
                    </div>
                  </div>
                  
                  {/* Barra de Progresso */}
                  <div className="w-full bg-[#0A2540] rounded-full h-2.5 mb-2 overflow-hidden border border-white/5">
                    <div 
                      className="bg-gradient-to-r from-[#10B981] to-[#34D399] h-2.5 rounded-full relative" 
                      style={{ width: `${obra.progresso}%` }}
                    >
                      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress_1s_linear_infinite]"></div>
                    </div>
                  </div>
                  
                  <div className="text-xs font-medium text-[#38BDF8] uppercase tracking-wider">
                    Status: {obra.status}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 text-center">
              <a href="#" className="inline-block px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold transition-colors border border-white/10 text-sm">
                Acompanhar cronograma de obras <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
