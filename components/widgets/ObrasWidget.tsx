export default function ObrasWidget() {
  const obras = [
    {
      id: 1,
      title: 'Revitalização da Praça Central',
      location: 'Centro',
      progress: 75,
      status: 'Em andamento',
      image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Nova UPA 24h',
      location: 'Bairro Esperança',
      progress: 40,
      status: 'Em andamento',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Pavimentação da Av. Brasil',
      location: 'Zona Sul',
      progress: 95,
      status: 'Fase Final',
      image: 'https://images.unsplash.com/photo-1584464436224-811c7fa15f5c?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="bg-white rounded-[24px] p-[28px] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(10,37,64,0.04)] mb-[32px]">
      <div className="flex justify-between items-center mb-[24px]">
        <div className="flex items-center gap-[12px]">
          <i className="fas fa-hard-hat text-[1.4rem] text-[#005FA3]"></i>
          <h4 className="text-[1.25rem] font-extrabold text-[#0A2540]">Acompanhamento de Obras</h4>
        </div>
        <a href="#" className="text-[#005FA3] font-bold text-[0.9rem] hover:underline flex items-center gap-[6px]">
          Ver todas <i className="fas fa-arrow-right text-[0.8rem]"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
        {obras.map((obra) => (
          <div key={obra.id} className="bg-[#F8FAFC] rounded-[16px] overflow-hidden border border-[#E2E8F0] group hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div className="h-[140px] overflow-hidden relative">
              <img 
                src={obra.image} 
                alt={obra.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-[12px] right-[12px] bg-white/90 backdrop-blur-sm text-[#0A2540] text-[0.7rem] font-bold px-[10px] py-[4px] rounded-full shadow-sm">
                {obra.status}
              </div>
            </div>
            
            <div className="p-[20px]">
              <h5 className="text-[#0A2540] font-extrabold text-[1rem] leading-[1.3] mb-[6px] line-clamp-2">
                {obra.title}
              </h5>
              <p className="text-[#64748B] text-[0.8rem] font-semibold flex items-center gap-[6px] mb-[16px]">
                <i className="fas fa-map-marker-alt"></i> {obra.location}
              </p>
              
              <div className="w-full">
                <div className="flex justify-between items-end mb-[8px]">
                  <span className="text-[#0A2540] text-[0.75rem] font-bold uppercase tracking-[0.5px]">Progresso</span>
                  <span className="text-[#005FA3] font-extrabold text-[1.1rem]">{obra.progress}%</span>
                </div>
                <div className="w-full bg-[#E2E8F0] h-[8px] rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#005FA3] to-[#0080db] h-full rounded-full transition-all duration-1000"
                    style={{ width: `${obra.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}