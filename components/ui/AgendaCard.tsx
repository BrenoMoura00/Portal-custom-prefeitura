export default function AgendaCard() {
  return (
    <div className="bg-white rounded-[20px] p-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full">
      <div className="mb-[24px]">
        <i className="fas fa-ticket-alt text-[1.5rem] text-[#0A2540] mb-[12px] block"></i>
        <h4 className="text-[1.25rem] text-[#0A2540] font-extrabold m-0">Agenda da Cidade</h4>
      </div>
      <div className="flex flex-col gap-[12px] mt-auto">
        <a href="#" className="bg-[#F4F7F9] rounded-[12px] p-[16px] flex items-center gap-[16px] no-underline transition-colors hover:bg-[#E2E8F0]">
          <div className="flex flex-col items-center justify-center border-r border-[#CBD5E1] pr-[16px] text-[#005FA3] min-w-[55px]">
            <strong className="text-[1.3rem] leading-[1] font-extrabold">15</strong>
            <span className="text-[0.7rem] font-bold uppercase">Jun</span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <strong className="text-[#0A2540] text-[0.95rem]">Feira de Artesanato Local</strong>
            <span className="text-[#64748B] text-[0.8rem]">Praça Matriz • 18h</span>
          </div>
        </a>
        <a href="#" className="bg-[#F4F7F9] rounded-[12px] p-[16px] flex items-center gap-[16px] no-underline transition-colors hover:bg-[#E2E8F0]">
          <div className="flex flex-col items-center justify-center border-r border-[#CBD5E1] pr-[16px] text-[#005FA3] min-w-[55px]">
            <strong className="text-[1.3rem] leading-[1] font-extrabold">18</strong>
            <span className="text-[0.7rem] font-bold uppercase">Jun</span>
          </div>
          <div className="flex flex-col gap-[4px]">
            <strong className="text-[#0A2540] text-[0.95rem]">Vacinação Itinerante</strong>
            <span className="text-[#64748B] text-[0.8rem]">Bairro Centro • 09h</span>
          </div>
        </a>
      </div>
    </div>
  );
}