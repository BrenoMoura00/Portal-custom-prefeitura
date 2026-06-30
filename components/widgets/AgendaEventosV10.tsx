import React from 'react';

const eventos = [
  { id: 1, dia: '15', mes: 'JUL', titulo: 'Inauguração da Praça Central', horario: '09:00 - 11:30', local: 'Centro Histórico', tipo: 'Inauguração', cor: 'bg-emerald-600 text-white' },
  { id: 2, dia: '18', mes: 'JUL', titulo: 'Reunião do Plano Diretor', horario: '14:00 - 17:00', local: 'Câmara Municipal', tipo: 'Audiência Pública', cor: 'bg-neutral-900 text-white' },
  { id: 3, dia: '22', mes: 'JUL', titulo: 'Festival Cultural de Inverno', horario: '18:00 - 23:00', local: 'Parque da Cidade', tipo: 'Cultura', cor: 'bg-amber-500 text-neutral-950' },
  { id: 4, dia: '25', mes: 'JUL', titulo: 'Mutirão de Saúde Preventiva', horario: '08:00 - 17:00', local: 'UBS Vila Nova', tipo: 'Saúde', cor: 'bg-emerald-600 text-white' },
];

export default function AgendaEventosV10() {
  return (
    <section className="w-full py-20 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 bg-white">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-200 pb-6">
        <div>
           <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-none bg-emerald-600 animate-pulse"></span>
              <span className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">Calendário Oficial</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
             Agenda de <span className="font-bold">Eventos</span>
           </h2>
        </div>
        <button className="px-5 py-2 rounded-none border border-neutral-300 hover:border-emerald-600 bg-white hover:bg-neutral-50 text-neutral-700 hover:text-emerald-700 transition-all text-sm font-bold uppercase flex items-center gap-2 tracking-wide">
          Calendário Completo <i className="far fa-calendar-alt text-xs"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {eventos.map((evento) => (
          <div key={evento.id} className="group flex flex-row items-stretch rounded-none bg-white border border-neutral-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer">
            
            {/* Bloco de Data Sólido */}
            <div className={`flex flex-col items-center justify-center min-w-[80px] md:min-w-[100px] p-4 transition-colors ${evento.cor}`}>
              <span className="text-xs font-bold tracking-widest uppercase mb-1 opacity-80">{evento.mes}</span>
              <span className="text-3xl md:text-4xl font-black">
                {evento.dia}
              </span>
            </div>

            {/* Informações do Evento */}
            <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-none bg-neutral-100 text-neutral-600 border border-neutral-200">
                  {evento.tipo}
                </span>
                <span className="text-neutral-500 text-xs font-bold flex items-center gap-1">
                  <i className="far fa-clock"></i> {evento.horario}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-neutral-900 leading-snug mb-1 group-hover:text-emerald-700 transition-colors">
                {evento.titulo}
              </h3>
              <p className="text-neutral-500 text-sm font-medium flex items-center gap-1.5 mt-2">
                <i className="fas fa-map-marker-alt text-[10px]"></i> {evento.local}
              </p>
            </div>
            
            {/* Seta indicativa */}
            <div className="hidden sm:flex items-center justify-center px-6 text-neutral-400 group-hover:text-emerald-600 transition-colors shrink-0 border-l border-neutral-100">
              <i className="fas fa-chevron-right text-sm"></i>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
