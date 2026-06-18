export default function TimelineWidget() {
  const atos = [
    { 
      id: 1, 
      date: '10 JUN', 
      type: 'Educação', 
      title: 'Edital de Convocação 004/2026', 
      desc: 'Convoca professores aprovados no concurso público para apresentação de documentos.' 
    },
    { 
      id: 2, 
      date: '09 JUN', 
      type: 'Gabinete do Prefeito', 
      title: 'Decreto Municipal Nº 89/2026', 
      desc: 'Declara ponto facultativo nas repartições públicas municipais durante o feriado.' 
    },
    { 
      id: 3, 
      date: '08 JUN', 
      type: 'Licitações', 
      title: 'Aviso de Licitação - Pregão Eletrônico 12/2026', 
      desc: 'Aquisição de equipamentos de informática para modernização das escolas municipais.' 
    },
    { 
      id: 4, 
      date: '07 JUN', 
      type: 'Administração', 
      title: 'Portaria Nº 150/2026', 
      desc: 'Nomeação de servidores efetivos para os cargos de assistente administrativo.' 
    },
    { 
      id: 5, 
      date: '06 JUN', 
      type: 'Fazenda', 
      title: 'Lei Complementar Nº 45/2026', 
      desc: 'Altera o código tributário do município e institui novos prazos para regularização fiscal.' 
    },
    { 
      id: 6, 
      date: '05 JUN', 
      type: 'Educação', 
      title: 'Resultado Preliminar PSS 01/2026', 
      desc: 'Divulgação da lista de classificados no Processo Seletivo Simplificado.' 
    },
    { 
      id: 7, 
      date: '04 JUN', 
      type: 'Gabinete do Prefeito', 
      title: 'Nomeação de Diretores Escolares', 
      desc: 'Designa os novos gestores eleitos para o biênio nas unidades de ensino básico.' 
    },
  ];

  return (
    <div className="bg-white rounded-[24px] p-[24px] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(10,37,64,0.04)] h-full flex flex-col w-full">
      <div className="flex justify-between items-center mb-[20px]">
        <div className="flex items-center gap-[12px]">
          <i className="fas fa-file-signature text-[1.4rem] text-[#005FA3]"></i>
          <h4 className="text-[1.25rem] font-extrabold text-[#0A2540]">Diário Oficial & Atos</h4>
        </div>
        <a href="#" className="text-[#005FA3] text-[0.8rem] font-bold hover:underline">Ver tudo</a>
      </div>

      <div className="flex-1 max-h-[400px] w-full overflow-y-auto pr-[8px] [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-[#F1F5F9] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#CBD5E1] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#94A3B8]">
        <div className="relative border-l-[2px] border-[#E2E8F0] ml-[8px]">
          {atos.map((ato) => (
            <div key={ato.id} className="relative pl-[24px] pb-[20px] last:pb-0 group cursor-pointer">
              
              <div className="absolute left-[-7px] top-[4px] w-[12px] h-[12px] rounded-full border-[2px] bg-white border-[#005FA3] transition-all duration-300 group-hover:scale-[1.4] group-hover:bg-[#005FA3] group-hover:border-[#005FA3]"></div>
              
              <div className="flex items-center gap-[8px] mb-[6px]">
                <span className="inline-block bg-[#F0F6FF] text-[#005FA3] text-[0.7rem] font-extrabold px-[10px] py-[4px] rounded-full">
                  {ato.date}
                </span>
                <span className="text-[#64748B] text-[0.75rem] font-semibold truncate">
                  {ato.type}
                </span>
              </div>
              
              <p className="text-[#0A2540] font-bold text-[0.95rem] leading-[1.3] group-hover:text-[#005FA3] transition-colors pr-[10px]">
                {ato.title}
              </p>
              
              <p className="text-[#64748B] text-[0.8rem] leading-[1.4] mt-[4px] pr-[10px] line-clamp-2">
                {ato.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}