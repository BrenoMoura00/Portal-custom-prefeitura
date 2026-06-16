export default function TimelineWidget() {
  const items = [
    { date: "10 Jun", title: "Edital de Convocação 004/2026 - Educação" },
    { date: "09 Jun", title: "Decreto Municipal Nº 89/2026" },
    { date: "08 Jun", title: "Aviso de Licitação - Pregão Eletrônico 12/2026" },
    { date: "07 Jun", title: "Portaria Nº 150/2026 - Nomeação de Servidores" },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white rounded-[24px] p-[28px] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(10,37,64,0.04)]">
      <div className="flex items-center gap-[12px] mb-[24px] shrink-0">
        <i className="fas fa-file-signature text-[1.4rem] bg-gradient-to-br from-[#005FA3] to-[#0A2540] bg-clip-text text-transparent"></i>
        <h4 className="text-[1.25rem] font-extrabold text-[#0A2540]">Diário Oficial & Atos</h4>
      </div>

      <div className="flex flex-col gap-[20px] flex-1 h-0 pr-[5px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#005FA3] scrollbar-track-black/10">
        {items.map((item, index) => (
          <div key={index} className="flex gap-[16px] relative group">
            {index !== items.length - 1 && (
              <div className="absolute left-[6px] top-[28px] bottom-[-20px] w-[2px] bg-[#E2E8F0] z-[1]"></div>
            )}
            
            <div className="w-[14px] h-[14px] rounded-full bg-white border-[3px] border-[#005FA3] mt-[5px] z-[2] relative shadow-[0_0_0_4px_rgba(0,95,163,0.1)] transition-all duration-300 group-hover:bg-[#005FA3] group-hover:shadow-[0_0_0_6px_rgba(0,95,163,0.2)]"></div>
            
            <div className="flex-1 flex flex-col items-start gap-[6px] pb-[8px]">
              <span className="bg-[#005FA3]/10 text-[#005FA3] py-[4px] px-[12px] rounded-full text-[0.7rem] font-extrabold uppercase tracking-[0.5px]">
                {item.date}
              </span>
              <a href="#" className="text-[#2C3E50] no-underline text-[0.95rem] font-semibold leading-[1.4] transition-colors duration-300 hover:text-[#005FA3]">
                {item.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}