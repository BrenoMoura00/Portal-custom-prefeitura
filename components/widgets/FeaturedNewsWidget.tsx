export default function FeaturedNewsWidget() {
  const featuredNews = {
    tag: "Educação",
    date: "12 Jun 2026",
    title: "Prefeitura inaugura novo complexo educacional com tecnologia de ponta",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  };

  const newsList = [
    {
      id: 1,
      tag: "Obras",
      date: "11 Jun 2026",
      title: "Iniciada a pavimentação de 15 ruas no bairro Jardim Alvorada",
      image: "https://images.unsplash.com/photo-1584464436224-811c7fa15f5c?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      tag: "Saúde",
      date: "09 Jun 2026",
      title: "Campanha de vacinação contra a gripe atinge 90% da meta",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      tag: "Cultura",
      date: "08 Jun 2026",
      title: "Festival de Inverno terá atrações gratuitas na praça central",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="bg-white rounded-[24px] p-[24px] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(10,37,64,0.04)] mb-[32px]">
      <div className="grid grid-cols-1 lg:grid-cols-[6.5fr_3.5fr] gap-[24px] h-full">
        
        <div className="relative w-full min-h-[400px] rounded-[16px] overflow-hidden group cursor-pointer">
          <img 
            src={featuredNews.image} 
            alt={featuredNews.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-between p-[32px] z-[2]">
            <div className="flex justify-between items-start">
              <span className="bg-[#005FA3] text-white text-[0.75rem] font-extrabold uppercase tracking-[1px] px-[12px] py-[6px] rounded-full">
                {featuredNews.tag}
              </span>
            </div>

            <div>
              <span className="text-white/80 text-[0.9rem] font-semibold mb-[8px] block">
                <i className="far fa-calendar-alt mr-[6px]"></i>
                {featuredNews.date}
              </span>
              <h2 className="text-[2rem] font-extrabold text-white leading-[1.2] mb-[20px] transition-colors group-hover:text-[#BFDBFE]">
                {featuredNews.title}
              </h2>
              
              <div className="flex items-center gap-[12px]">
                <button className="w-[40px] h-[40px] rounded-full bg-white/20 backdrop-blur-sm text-white flex justify-center items-center hover:bg-[#005FA3] hover:scale-110 transition-all">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="w-[40px] h-[40px] rounded-full bg-white/20 backdrop-blur-sm text-white flex justify-center items-center hover:bg-[#005FA3] hover:scale-110 transition-all">
                  <i className="fas fa-chevron-right"></i>
                </button>
                <div className="flex gap-[6px] ml-[12px]">
                  <span className="w-[24px] h-[4px] rounded-full bg-[#005FA3]"></span>
                  <span className="w-[8px] h-[4px] rounded-full bg-white/30"></span>
                  <span className="w-[8px] h-[4px] rounded-full bg-white/30"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex items-center gap-[12px] mb-[20px]">
            <i className="fas fa-fire text-[1.4rem] text-[#005FA3]"></i>
            <h4 className="text-[1.25rem] font-extrabold text-[#0A2540]">Em Destaque</h4>
          </div>

          <div className="flex flex-col gap-[20px] flex-1 justify-between">
            {newsList.map((news) => (
              <a 
                key={news.id} 
                href="#" 
                className="flex gap-[16px] group no-underline items-center bg-[#F8FAFC] p-[12px] rounded-[16px] border border-transparent hover:bg-white hover:border-[#E2E8F0] hover:shadow-[0_8px_20px_rgba(10,37,64,0.06)] transition-all"
              >
                <div className="w-[100px] h-[85px] rounded-[10px] overflow-hidden shrink-0 relative">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0A2540]/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-[8px] mb-[6px]">
                    <span className="text-[#005FA3] text-[0.65rem] font-extrabold uppercase tracking-[0.5px]">
                      {news.tag}
                    </span>
                    <span className="w-[4px] h-[4px] rounded-full bg-[#CBD5E1]"></span>
                    <span className="text-[#64748B] text-[0.75rem] font-semibold">
                      {news.date}
                    </span>
                  </div>
                  <h5 className="text-[#0A2540] text-[0.95rem] font-bold leading-[1.3] group-hover:text-[#005FA3] transition-colors line-clamp-2">
                    {news.title}
                  </h5>
                </div>
              </a>
            ))}
          </div>
          
          <a href="#" className="mt-[20px] w-full py-[12px] text-center rounded-[12px] bg-[#F4F7F9] text-[#005FA3] font-bold text-[0.9rem] hover:bg-[#005FA3] hover:text-white transition-colors">
            Ver todas as notícias
          </a>
        </div>

      </div>
    </div>
  );
}