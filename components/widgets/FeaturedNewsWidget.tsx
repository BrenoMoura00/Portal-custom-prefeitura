export default function FeaturedNewsWidget() {
  const featuredNews = {
    tag: "Educação",
    date: "12 Jun 2026",
    title: "Prefeitura inaugura novo complexo educacional com tecnologia de ponta",
    image: "https://loremflickr.com/1200/800/school,education/all",
  };

  const newsList = [
    {
      id: 1,
      tag: "Obras",
      date: "11 Jun 2026",
      title: "Iniciada a pavimentação de 15 ruas no bairro Jardim Alvorada",
      image: "https://loremflickr.com/300/300/asphalt,road/all",
    },
    {
      id: 2,
      tag: "Saúde",
      date: "09 Jun 2026",
      title: "Campanha de vacinação contra a gripe atinge 90% da meta",
      image: "https://loremflickr.com/300/300/hospital,nurse/all",
    },
    {
      id: 3,
      tag: "Cultura",
      date: "08 Jun 2026",
      title: "Festival de Inverno terá atrações gratuitas na praça central",
      image: "https://loremflickr.com/300/300/festival,crowd/all",
    },
  ];

  return (
    <div className="bg-white p-[20px] md:p-[24px] rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-[32px] border border-[#E2E8F0]/60">
      <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-[24px] h-full">

        <div className="relative w-full min-h-[350px] lg:min-h-[420px] rounded-[12px] overflow-hidden group cursor-pointer">
          <img 
            src={featuredNews.image} 
            alt={featuredNews.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-between p-[24px] md:p-[32px] z-[2]">
            <div className="flex justify-between items-start">
              <span className="bg-[#005FA3] text-white text-[0.75rem] font-extrabold uppercase tracking-[1px] px-[12px] py-[6px] rounded-[8px]">
                {featuredNews.tag}
              </span>
            </div>

            <div>
              <span className="text-white/80 text-[0.85rem] font-semibold mb-[10px] flex items-center gap-[6px]">
                <i className="far fa-calendar-alt"></i>
                {featuredNews.date}
              </span>
              <h2 className="text-[1.6rem] md:text-[2rem] font-extrabold text-white leading-[1.2] mb-[20px] transition-colors group-hover:text-[#BFDBFE] max-w-[95%]">
                {featuredNews.title}
              </h2>
              
              <div className="flex items-center gap-[8px]">
                <button className="w-[36px] h-[36px] rounded-full bg-white/20 backdrop-blur-sm text-white flex justify-center items-center hover:bg-[#005FA3] hover:scale-110 transition-all border-none cursor-pointer">
                  <i className="fas fa-chevron-left text-[0.9rem]"></i>
                </button>
                <button className="w-[36px] h-[36px] rounded-full bg-white/20 backdrop-blur-sm text-white flex justify-center items-center hover:bg-[#005FA3] hover:scale-110 transition-all border-none cursor-pointer">
                  <i className="fas fa-chevron-right text-[0.9rem]"></i>
                </button>
                <div className="flex gap-[4px] ml-[8px]">
                  <span className="w-[20px] h-[4px] rounded-[2px] bg-[#005FA3]"></span>
                  <span className="w-[8px] h-[4px] rounded-[2px] bg-white/30"></span>
                  <span className="w-[8px] h-[4px] rounded-[2px] bg-white/30"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex items-center gap-[10px] mb-[20px]">
            <i className="fas fa-fire text-[1.2rem] text-[#005FA3]"></i>
            <h4 className="text-[1.2rem] font-extrabold text-[#0A2540] m-0 tracking-[-0.5px]">Em Destaque</h4>
          </div>

          <div className="flex flex-col gap-[12px] flex-1">
            {newsList.map((news) => (
              <a 
                key={news.id} 
                href="#" 
                className="flex gap-[16px] group no-underline items-center bg-white p-[12px] rounded-[10px] border border-[#E2E8F0]/60 hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:-translate-y-[2px] transition-all"
              >
                <div className="w-[90px] h-[65px] rounded-[6px] overflow-hidden shrink-0 relative">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-[6px] mb-[6px]">
                    <span className="text-[#005FA3] text-[0.7rem] font-bold uppercase tracking-[0.5px]">
                      {news.tag}
                    </span>
                    <span className="w-[4px] h-[4px] rounded-full bg-[#CBD5E1]"></span>
                    <span className="text-[#64748B] text-[0.75rem] font-medium normal-case tracking-normal">
                      {news.date}
                    </span>
                  </div>
                  <h5 className="text-[#0A2540] text-[0.9rem] font-bold leading-[1.3] m-0 group-hover:text-[#005FA3] transition-colors line-clamp-2">
                    {news.title}
                  </h5>
                </div>
              </a>
            ))}
          </div>
          
          <a href="#" className="mt-[16px] w-full py-[14px] text-center rounded-[8px] border border-[#E2E8F0]/60 bg-[#F4F7F9] text-[#005FA3] font-bold text-[0.95rem] hover:bg-[#005FA3] hover:text-white hover:border-[#005FA3] transition-all block no-underline">
            Ver todas as notícias
          </a>
        </div>

      </div>
    </div>
  );
}