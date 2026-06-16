export default function AgendamentoCard() {
  return (
    <div className="bg-white rounded-[20px] p-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full">
      <div className="mb-[24px]">
        <i className="fas fa-calendar-check text-[1.5rem] text-[#0A2540] mb-[12px] block"></i>
        <h4 className="text-[1.25rem] text-[#0A2540] font-extrabold mb-[6px]">Agendamento Expresso</h4>
        <p className="text-[0.85rem] text-[#64748B] m-0">O que você deseja agendar hoje?</p>
      </div>
      <div className="grid grid-cols-2 gap-[12px] mt-auto">
        <button className="bg-[#F4F7F9] border-none rounded-[12px] p-[16px_12px] flex flex-col items-start gap-[10px] cursor-pointer hover:bg-[#E2E8F0] transition-colors">
          <i className="fas fa-stethoscope text-[1.4rem] text-[#005FA3]"></i>
          <span className="text-[0.85rem] font-bold text-[#0A2540] text-left">Saúde (Consultas)</span>
        </button>
        <button className="bg-[#F4F7F9] border-none rounded-[12px] p-[16px_12px] flex flex-col items-start gap-[10px] cursor-pointer hover:bg-[#E2E8F0] transition-colors">
          <i className="fas fa-id-card text-[1.4rem] text-[#005FA3]"></i>
          <span className="text-[0.85rem] font-bold text-[#0A2540] text-left">Emissão de RG</span>
        </button>
        <button className="bg-[#F4F7F9] border-none rounded-[12px] p-[16px_12px] flex flex-col items-start gap-[10px] cursor-pointer hover:bg-[#E2E8F0] transition-colors">
          <i className="fas fa-home text-[1.4rem] text-[#005FA3]"></i>
          <span className="text-[0.85rem] font-bold text-[#0A2540] text-left">Habitação</span>
        </button>
        <button className="bg-white border border-dashed border-[#CBD5E1] rounded-[12px] p-[16px_12px] flex items-center justify-center gap-[8px] cursor-pointer hover:bg-[#F8FAFC] hover:border-[#005FA3] transition-colors group">
          <span className="text-[0.85rem] font-bold text-[#005FA3]">Ver todos</span> 
          <i className="fas fa-arrow-right text-[#005FA3] group-hover:translate-x-[3px] transition-transform"></i>
        </button>
      </div>
    </div>
  );
}