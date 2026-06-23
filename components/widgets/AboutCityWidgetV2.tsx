import React from 'react';

export default function AboutCityWidgetV2() {
  const stats = [
    { value: '134', label: 'Anos de História', unit: '' },
    { value: '98K', label: 'Habitantes', unit: '' },
    { value: '1ª', label: 'IDH da Região', unit: '' },
    { value: '4.8', label: 'Nota de Satisfação', unit: '/5' },
  ];

  return (
    <div className="bg-white rounded-[24px] border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        <div className="relative min-h-[360px]">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"
            alt="Cidade"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/60 to-transparent lg:from-transparent lg:bg-gradient-to-l lg:from-[#0A2540]/40"></div>
        </div>

        <div className="p-10 flex flex-col justify-center">
          <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase mb-2 block">Nossa História</span>
          <h3 className="text-3xl md:text-4xl font-black text-[#0A2540] leading-tight mb-4">
            Uma Cidade Construída pela Nossa Gente
          </h3>
          <p className="text-gray-500 leading-relaxed mb-8 text-sm">
            Fundada em 1890, a cidade cresceu mantendo suas raízes históricas enquanto abraça a inovação. Referência nacional em qualidade de vida, educação e desenvolvimento sustentável.
          </p>

          <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-100">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-black text-[#0A2540]">{stat.value}<span className="text-sm text-gray-400">{stat.unit}</span></p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-8">
            <button className="bg-[#005FA3] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#0A2540] transition-colors text-sm">
              Conheça Mais
            </button>
            <button className="bg-transparent text-[#0A2540] border border-gray-200 px-6 py-2.5 rounded-full font-bold hover:bg-gray-50 transition-colors text-sm">
              Hino Municipal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
