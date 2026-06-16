export default function AlertaCard() {
  return (
    <div className="relative overflow-hidden rounded-[20px] p-[30px] flex flex-col justify-end min-h-[300px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] group">
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,37,64,0.95)_0%,rgba(10,37,64,0.3)_100%),url('https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center z-[1] transition-transform duration-700 group-hover:scale-105"></div>
      <div className="relative z-[2]">
        <span className="inline-flex items-center gap-[6px] bg-[#F2A900] text-black py-[4px] px-[12px] rounded-[6px] text-[0.75rem] font-extrabold uppercase mb-[16px]">
          <i className="fas fa-exclamation-triangle"></i> Trânsito
        </span>
        <h4 className="text-white text-[1.25rem] font-extrabold mb-[8px]">Interdição na Av. São José</h4>
        <p className="text-white/85 text-[0.85rem] leading-[1.5] mb-[16px]">
          Obras de recapeamento asfáltico hoje das 08h às 17h. Rotas alternativas ativas.
        </p>
        <a href="#" className="text-white no-underline text-[0.9rem] font-bold flex items-center gap-[6px] hover:underline w-fit">
          Ver mapa <i className="fas fa-map-marker-alt"></i>
        </a>
      </div>
    </div>
  );
}