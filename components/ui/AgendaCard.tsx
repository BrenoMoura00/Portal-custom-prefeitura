import React from 'react';

export interface DataComemorativa {
  id?: number | string;
  dia: string;
  mes: string;
  titulo: string;
  descricao: string;
}

interface CalendarioCardProps {
  datas?: DataComemorativa[];
}

const DATAS_COMEMORATIVAS: DataComemorativa[] = [
  { id: 1, dia: '19', mes: 'Mar', titulo: 'Dia de São José', descricao: 'Padroeiro de Bezerros' },
  { id: 2, dia: '18', mes: 'Mai', titulo: 'Emancipação Política', descricao: 'Feriado Municipal' },
  { id: 3, dia: '24', mes: 'Jun', titulo: 'São João', descricao: 'Feriado Regional' },
  { id: 4, dia: '07', mes: 'Set', titulo: 'Independência do Brasil', descricao: 'Feriado Nacional' },
  { id: 5, dia: '12', mes: 'Out', titulo: 'Nossa Sra. Aparecida', descricao: 'Feriado Nacional' },
  { id: 6, dia: '25', mes: 'Dez', titulo: 'Natal', descricao: 'Feriado Nacional' }
];

export default function CalendarioCard({ datas = DATAS_COMEMORATIVAS }: CalendarioCardProps) {
  return (
    <div className="bg-white rounded-[20px] p-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full max-h-[380px]">
      <div className="mb-[24px] shrink-0">
        <i className="fas fa-calendar-alt text-[1.5rem] text-[#0A2540] mb-[12px] block"></i>
        <h4 className="text-[1.25rem] text-[#0A2540] font-extrabold m-0">Calendário da Cidade</h4>
      </div>
      
      <div className="flex flex-col gap-[12px] overflow-y-auto pr-[8px]">
        {datas.map((item) => (
          <a 
            key={item.id || `${item.dia}-${item.mes}`} 
            href="#" 
            className="bg-[#F4F7F9] rounded-[12px] p-[16px] flex items-center gap-[16px] no-underline transition-colors hover:bg-[#E2E8F0]"
          >
            <div className="flex flex-col items-center justify-center border-r border-[#CBD5E1] pr-[16px] text-[#005FA3] min-w-[55px]">
              <strong className="text-[1.3rem] leading-[1] font-extrabold">{item.dia}</strong>
              <span className="text-[0.7rem] font-bold uppercase">{item.mes}</span>
            </div>
            <div className="flex flex-col gap-[4px]">
              <strong className="text-[#0A2540] text-[0.95rem]">{item.titulo}</strong>
              <span className="text-[#64748B] text-[0.8rem]">{item.descricao}</span>
            </div>
          </a>
        ))}
        
        {datas.length === 0 && (
          <p className="text-[#64748B] text-[0.9rem] text-center my-4">Nenhuma data agendada.</p>
        )}
      </div>
    </div>
  );
}