import React from 'react';

const eventos = [
  { id: 1, data: '15.07', mes: 'JULHO', titulo: 'INAUGURAÇÃO DA PRAÇA CENTRAL', horario: '09:00h - 11:30h', local: 'CENTRO HISTÓRICO' },
  { id: 2, data: '18.07', mes: 'JULHO', titulo: 'REUNIÃO DO PLANO DIRETOR', horario: '14:00h - 17:00h', local: 'CÂMARA MUNICIPAL' },
  { id: 3, data: '22.07', mes: 'JULHO', titulo: 'FESTIVAL CULTURAL DE INVERNO', horario: '18:00h - 23:00h', local: 'PARQUE DA CIDADE' },
  { id: 4, data: '25.07', mes: 'JULHO', titulo: 'MUTIRÃO DE SAÚDE PREVENTIVA', horario: '08:00h - 17:00h', local: 'UBS VILA NOVA' },
];

export default function AgendaEventosV8() {
  return (
    <section className="w-full bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Cabeçalho Minimalista */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              Agenda <span className="text-[#1351B4]">Oficial</span>
            </h2>
            <p className="text-slate-500 font-medium tracking-wide mt-2">
              CRONOGRAMA DE EVENTOS E AÇÕES DA PREFEITURA
            </p>
          </div>
          <button className="text-sm font-bold text-[#1351B4] hover:text-[#0a357c] uppercase tracking-widest flex items-center gap-2 transition-colors">
            Ver Calendário Completo <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Lista de Eventos - Estilo Boarding Pass */}
        <div className="flex flex-col border-t-2 border-slate-900">
          {eventos.map((evento) => (
            <div 
              key={evento.id} 
              className="group flex flex-col md:flex-row items-start md:items-center py-8 border-b border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              
              {/* Bloco de Data */}
              <div className="flex flex-col w-32 shrink-0 mb-4 md:mb-0">
                <span className="text-5xl font-black text-slate-900 tracking-tighter group-hover:text-[#1351B4] transition-colors leading-none">
                  {evento.data}
                </span>
              </div>

              {/* Informações Principais */}
              <div className="flex-1 md:px-8 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 uppercase tracking-tight mb-2 group-hover:text-[#1351B4] transition-colors">
                  {evento.titulo}
                </h3>
                <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-500 uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <i className="far fa-clock text-[#1351B4]"></i> {evento.horario}
                  </span>
                  <span className="flex items-center gap-2">
                    <i className="fas fa-map-marker-alt text-[#1351B4]"></i> {evento.local}
                  </span>
                </div>
              </div>

              {/* Botão de Ação / Seta */}
              <div className="hidden md:flex shrink-0 w-16 h-16 items-center justify-center border-2 border-slate-200 rounded-full group-hover:border-[#1351B4] group-hover:bg-[#1351B4] text-slate-400 group-hover:text-white transition-all ml-4">
                <i className="fas fa-chevron-right text-xl"></i>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
