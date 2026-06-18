export default function InstagramFeedWidget() {
  const instagramFeed = [
    { id: 1, image: 'https://loremflickr.com/400/400/city,event/all', link: '#' },
    { id: 2, image: 'https://loremflickr.com/400/400/people,meeting/all', link: '#' },
    { id: 3, image: 'https://loremflickr.com/400/400/nature,park/all', link: '#' },
    { id: 4, image: 'https://loremflickr.com/400/400/building,architecture/all', link: '#' },
    { id: 5, image: 'https://loremflickr.com/400/400/business,office/all', link: '#' },
    { id: 6, image: 'https://loremflickr.com/400/400/education,school/all', link: '#' },
  ];

  return (
    <div className="bg-white rounded-[24px] p-[28px] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(10,37,64,0.04)] h-full flex flex-col">
      <div className="flex items-center justify-between mb-[20px]">
          <div className="flex items-center gap-[12px]">
            <i className="fab fa-instagram text-[1.4rem] text-[#E1306C]"></i>
            <h5 className="text-[1.2rem] font-extrabold text-[#0A2540]">Nosso Instagram</h5>
          </div>
          <a href="#" className="text-[#005FA3] text-[0.85rem] font-bold hover:underline flex items-center gap-[4px]">
            @oficial
          </a>
      </div>

      <div className="grid grid-cols-3 gap-[12px] flex-1 content-start">
        {instagramFeed.map((post) => (
          <a 
            key={post.id} 
            href={post.link}
            className="relative aspect-square rounded-[12px] overflow-hidden group border border-[#E2E8F0]"
          >
            <img 
              src={post.image} 
              alt={`Post do Instagram ${post.id}`} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#0A2540]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i className="fab fa-instagram text-white text-[1.5rem]"></i>
            </div>
          </a>
        ))}
      </div>

      <a href="#" className="mt-[20px] w-full py-[12px] text-center rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A2540] font-bold text-[0.9rem] hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-colors">
        Siga-nos nas Redes
      </a>
    </div>
  );
}