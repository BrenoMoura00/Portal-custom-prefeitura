import React from 'react';

export default function ObrasWidgetV2() {
  const obras = [
    {
      id: 1,
      titulo: 'Hospital Municipal Central',
      status: 'Em andamento',
      progresso: 65,
      previsao: 'Dez/2026',
      investimento: 'R$ 12,5 Mi',
      img: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&q=80',
    },
    {
      id: 2,
      titulo: 'Parque Ecológico Sul',
      status: 'Fase Final',
      progresso: 90,
      previsao: 'Set/2026',
      investimento: 'R$ 3,2 Mi',
      img: 'https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=400&q=80',
    },
    {
      id: 3,
      titulo: 'Duplicação Av. Norte',
      status: 'Iniciada',
      progresso: 15,
      previsao: 'Jun/2027',
      investimento: 'R$ 45,0 Mi',
      img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80',
    },
  ];

  return (
    <div className="bg-white rounded-[24px] p-8 border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] h-full">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
        <div>
          <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase">Gabinete do Prefeito</span>
          <h3 className="text-2xl font-black text-[#0A2540]">Acompanhamento de Obras</h3>
        </div>
        <a href="#" className="text-sm font-bold text-[#005FA3] hover:text-[#0A2540] transition-colors border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50">
          Mapa de Obras
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {obras.map((obra) => (
          <div key={obra.id} className="group rounded-[20px] overflow-hidden border border-gray-200/60 shadow-sm hover:shadow-lg transition-all cursor-pointer relative bg-white">
            <div className="relative h-[160px] overflow-hidden">
              <img src={obra.img} alt={obra.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute top-3 right-3">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm ${
                  obra.progresso > 80 
                    ? 'bg-emerald-500/90 text-white' 
                    : obra.progresso > 30 
                      ? 'bg-[#005FA3]/90 text-white' 
                      : 'bg-white/90 text-[#0A2540]'
                }`}>
                  {obra.status}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <div 
                  className={`h-full ${obra.progresso > 80 ? 'bg-emerald-400' : 'bg-amber-400'}`}
                  style={{ width: `${obra.progresso}%` }}
                ></div>
              </div>
            </div>

            <div className="p-5 bg-white">
              <h4 className="font-bold text-[#0A2540] group-hover:text-[#005FA3] transition-colors mb-2">{obra.titulo}</h4>
              <div className="flex justify-between items-center text-[11px] text-gray-500 font-semibold">
                <span><i className="far fa-clock text-[#005FA3] mr-1"></i> {obra.previsao}</span>
                <span className="font-black text-[#0A2540]">{obra.progresso}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
