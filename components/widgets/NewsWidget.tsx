import NewsCard from '../ui/NewsCard';

export default function NewsWidget() {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex justify-between items-center mb-[8px]">
        <div className="flex items-center gap-[12px]">
          <span className="relative flex h-[12px] w-[12px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005FA3] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-[12px] w-[12px] bg-[#005FA3]"></span>
          </span>
          <h3 className="text-[1.8rem] font-extrabold text-[#0A2540] tracking-[-0.5px] m-0">Últimas Notícias</h3>
        </div>
        <a href="#" className="px-[18px] py-[8px] bg-[#005FA3]/10 text-[#005FA3] rounded-full no-underline font-bold text-[0.9rem] flex items-center gap-[8px] transition-all duration-300 hover:bg-[#005FA3] hover:text-white hover:translate-x-[4px]">
          Ver todas <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
        <NewsCard
          image="https://loremflickr.com/600/400/technology,digital/all"
          tag="Tecnologia"
          date="10 Jun 2026"
          title="Modernização Digital: Prefeitura lança novo portal institucional"
          icon="fas fa-microchip"
        />
        <NewsCard
          image="https://loremflickr.com/600/400/business,chart/all"
          tag="Transparência"
          date="08 Jun 2026"
          title="Novas ferramentas de Transparência são implementadas"
          icon="fas fa-chart-pie"
        />
      </div>
    </div>
  );
}