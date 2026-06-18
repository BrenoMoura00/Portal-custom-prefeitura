export default function TvInstitucionalWidget() {
  return (
    <div className="bg-white rounded-[24px] p-[28px] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(10,37,64,0.04)] h-full flex flex-col">
      <div className="flex items-center gap-[12px] mb-[16px]">
        <span className="relative flex h-[12px] w-[12px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E03C31] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-[12px] w-[12px] bg-[#E03C31]"></span>
        </span>
        <h5 className="text-[1.2rem] font-extrabold text-[#0A2540]">TV Institucional</h5>
      </div>
      
      <div className="relative w-full pt-[56.25%] rounded-[16px] overflow-hidden bg-[#000000] group shadow-sm border border-[#E2E8F0]">
        <img 
          src="https://loremflickr.com/800/450/meeting,government/all" 
          alt="Capa do Vídeo Institucional" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors duration-300 cursor-pointer">
          <div className="w-[64px] h-[64px] rounded-full bg-[#E03C31] text-white flex items-center justify-center text-[1.5rem] shadow-[0_4px_15px_rgba(224,60,49,0.4)] group-hover:scale-110 transition-transform duration-300">
            <i className="fas fa-play ml-[4px]"></i>
          </div>
        </div>
        <div className="absolute top-[16px] left-[16px] bg-[#E03C31] text-white text-[0.7rem] font-bold uppercase tracking-[1px] px-[10px] py-[4px] rounded-md flex items-center gap-[6px]">
            <span className="w-[6px] h-[6px] rounded-full bg-white animate-pulse"></span> Ao Vivo
        </div>
      </div>
      
      <div className="mt-[20px]">
        <h6 className="text-[#0A2540] font-extrabold text-[1.1rem] mb-[4px]">
          Sessão Ordinária - Câmara Municipal
        </h6>
        <p className="text-[#64748B] text-[0.85rem] font-medium flex items-center gap-[6px]">
          <i className="far fa-clock"></i> Transmitido em 12 Jun 2026
        </p>
      </div>
    </div>
  );
}