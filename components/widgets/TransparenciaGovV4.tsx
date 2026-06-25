import React from 'react';

const indicadores = [
  {
    titulo: 'Receita Arrecadada',
    valor: 'R$ 48,2 Mi',
    variacao: '+12,4%',
    positivo: true,
    periodo: 'Jan–Jun 2026',
    cor: '#1351B4',
    barras: [35, 42, 38, 55, 60, 72, 68, 80, 75, 88, 82, 95],
  },
  {
    titulo: 'Despesas Executadas',
    valor: 'R$ 41,7 Mi',
    variacao: '+8,1%',
    positivo: false,
    periodo: 'Jan–Jun 2026',
    cor: '#B8372B',
    barras: [40, 45, 50, 48, 55, 60, 58, 65, 70, 68, 75, 80],
  },
  {
    titulo: 'Obras em Execução',
    valor: '12',
    variacao: '+3',
    positivo: true,
    periodo: 'Ativas no momento',
    cor: '#168821',
    barras: [20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80],
  },
];

const obras = [
  { nome: 'Novo Hospital Municipal', bairro: 'Centro', progresso: 85, status: 'Acabamento' },
  { nome: 'Complexo Educacional Infantil', bairro: 'Vila Nova', progresso: 40, status: 'Alvenaria' },
  { nome: 'Pavimentação Asfáltica (Etapa 3)', bairro: 'Bairro dos Estados', progresso: 65, status: 'Em Execução' },
];

function MiniBarChart({ barras, cor }: { barras: number[]; cor: string }) {
  const max = Math.max(...barras);
  return (
    <div className="flex items-end gap-[3px] h-10">
      {barras.map((v, i) => (
        <div
          key={i}
          className="w-[5px] rounded-sm transition-all"
          style={{
            height: `${(v / max) * 100}%`,
            backgroundColor: i === barras.length - 1 ? cor : `${cor}33`,
          }}
        />
      ))}
    </div>
  );
}

export default function TransparenciaGovV4() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-[#0F1B2D] text-white">
      <div className="max-w-[1400px] mx-auto">

        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-blue-400 font-bold tracking-widest text-[11px] uppercase mb-2 block flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Dados Abertos
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Transparência e Obras</h2>
            <p className="text-slate-400 mt-2 max-w-lg">Acompanhe a execução orçamentária e o andamento das obras do município em tempo real.</p>
          </div>
          <a href="#" className="text-sm font-bold text-blue-400 hover:text-white transition-colors border border-white/10 bg-white/5 px-5 py-2.5 rounded-xl hover:bg-white/10 whitespace-nowrap inline-flex items-center gap-2">
            Portal da Transparência →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {indicadores.map((ind) => (
            <div key={ind.titulo} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-4 hover:bg-white/[0.08] transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1">{ind.titulo}</p>
                  <p className="text-3xl font-extrabold tracking-tight">{ind.valor}</p>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-md ${ind.positivo ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                  {ind.variacao}
                </span>
              </div>
              <div className="flex items-end justify-between">
                <MiniBarChart barras={ind.barras} cor={ind.cor} />
                <span className="text-[10px] text-slate-500 font-medium">{ind.periodo}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              Obras em Andamento
            </h3>
            <a href="#" className="text-sm font-semibold text-blue-400 hover:text-white transition-colors">Ver mapa →</a>
          </div>

          <div className="flex flex-col gap-6">
            {obras.map((obra, i) => (
              <div key={i}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-base">{obra.nome}</h4>
                    <span className="text-slate-400 text-sm flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /></svg>
                      {obra.bairro}
                    </span>
                  </div>
                  <span className="text-xl font-extrabold">{obra.progresso}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                    style={{ width: `${obra.progresso}%` }}
                  />
                </div>
                <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mt-1.5 block">{obra.status}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <a href="#" className="inline-block px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold transition-colors border border-white/10 text-sm">
              Acompanhar cronograma completo →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
