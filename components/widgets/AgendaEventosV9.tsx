import React from 'react';

const eventos = [
  { id: 1, dia: '15', mes: 'JUL', titulo: 'Inauguração da Praça Central', horario: '09:00 - 11:30', local: 'Centro Histórico', tipo: 'Inauguração', cor: 'fuchsia' },
  { id: 2, dia: '18', mes: 'JUL', titulo: 'Reunião do Plano Diretor', horario: '14:00 - 17:00', local: 'Câmara Municipal', tipo: 'Audiência Pública', cor: 'cyan' },
  { id: 3, dia: '22', mes: 'JUL', titulo: 'Festival Cultural de Inverno', horario: '18:00 - 23:00', local: 'Parque da Cidade', tipo: 'Cultura', cor: 'amber' },
  { id: 4, dia: '25', mes: 'JUL', titulo: 'Mutirão de Saúde Preventiva', horario: '08:00 - 17:00', local: 'UBS Vila Nova', tipo: 'Saúde', cor: 'emerald' },
];

export default function AgendaEventosV9() {
  const getBadgeColor = (cor: string) => {
    const map: Record<string, string> = {
      fuchsia: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
      cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    };
    return map[cor] || 'bg-slate-500/10 text-slate-400 border-slate-500/20';
  };

  const getDayColor = (cor: string) => {
    const map: Record<string, string> = {
      fuchsia: 'text-fuchsia-400',
      cyan: 'text-cyan-400',
      amber: 'text-amber-400',
      emerald: 'text-emerald-400'
    };
    return map[cor] || 'text-slate-400';
  };

  return (
    <section className="w-full py-20 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
           <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span className="text-rose-400 font-bold tracking-widest text-[10px] uppercase">Calendário Oficial</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
             Agenda de <span className="font-bold">Eventos</span>
           </h2>
        </div>
        <button className="px-5 py-2 rounded-lg border border-white/10 hover:border-rose-500/50 bg-white/5 hover:bg-rose-500/10 text-slate-300 hover:text-white transition-all text-sm font-medium flex items-center gap-2">
          Ver Calendário Completo <i className="far fa-calendar-alt text-xs"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {eventos.map((evento) => (
          <div key={evento.id} className="group flex flex-row items-center rounded-2xl bg-white/5 border border-white/5 p-4 md:p-6 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer">
            
            {/* Bloco de Data */}
            <div className="flex flex-col items-center justify-center min-w-[70px] md:min-w-[90px] pr-4 md:pr-6 border-r border-white/10">
              <span className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-1">{evento.mes}</span>
              <span className={`text-4xl md:text-5xl font-black ${getDayColor(evento.cor)} group-hover:scale-110 transition-transform`}>
                {evento.dia}
              </span>
            </div>

            {/* Informações do Evento */}
            <div className="flex-1 pl-4 md:pl-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase rounded border ${getBadgeColor(evento.cor)}`}>
                  {evento.tipo}
                </span>
                <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                  <i className="far fa-clock"></i> {evento.horario}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white leading-snug mb-1 group-hover:text-rose-300 transition-colors">
                {evento.titulo}
              </h3>
              <p className="text-slate-500 text-sm font-medium flex items-center gap-1.5">
                <i className="fas fa-map-marker-alt text-[10px]"></i> {evento.local}
              </p>
            </div>
            
            {/* Seta indicativa */}
            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-slate-400 group-hover:border-rose-500/50 group-hover:text-rose-400 transition-colors shrink-0">
              <i className="fas fa-chevron-right text-sm"></i>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
