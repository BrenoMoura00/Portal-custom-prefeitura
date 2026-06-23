import React from 'react';

export default function FeaturedNewsWidgetV2() {
  const mainNews = {
    title: 'Prefeitura entrega nova creche municipal com vagas para 300 crianças',
    category: 'Educação',
    date: 'Hoje, 09:30',
    image: 'https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1000&auto=format&fit=crop',
    excerpt: 'A unidade foi construída em tempo recorde de 8 meses e atenderá famílias dos bairros adjacentes com período integral e alimentação completa.',
  };

  const sideNews = [
    { title: 'Campanha de vacinação contra a gripe atinge 90% do público-alvo', category: 'Saúde', date: 'Ontem', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&auto=format&fit=crop' },
    { title: 'Inaugurado o novo parque ecológico da zona sul com 50 mil m²', category: 'Meio Ambiente', date: '20 Jun', image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=400&auto=format&fit=crop' },
    { title: 'Programa Jovem Empreendedor abre inscrições para turma de julho', category: 'Economia', date: '19 Jun', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="bg-white rounded-[24px] p-8 border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
        <div>
          <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase">Sala de Imprensa</span>
          <h3 className="text-2xl font-black text-[#0A2540]">Notícias em Destaque</h3>
        </div>
        <a href="#" className="text-sm font-bold text-[#005FA3] hover:text-[#0A2540] transition-colors border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50">
          Todas as Notícias
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
        <a href="#" className="group relative rounded-[20px] overflow-hidden min-h-[380px]">
          <img src={mainNews.image} alt={mainNews.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="bg-amber-500 text-[#0A2540] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block">{mainNews.category}</span>
            <h4 className="text-2xl font-black text-white leading-tight mb-2 group-hover:text-amber-200 transition-colors">{mainNews.title}</h4>
            <p className="text-gray-300 text-sm line-clamp-2">{mainNews.excerpt}</p>
            <span className="text-gray-400 text-[11px] font-semibold mt-3 block">{mainNews.date}</span>
          </div>
        </a>

        <div className="flex flex-col gap-4">
          {sideNews.map((item, i) => (
            <a key={i} href="#" className="group flex gap-4 p-3 rounded-xl hover:bg-[#F8FAFC] transition-colors border border-transparent hover:border-gray-100">
              <div className="w-24 h-20 rounded-xl overflow-hidden shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-bold text-[#005FA3] uppercase tracking-wider">{item.category} · {item.date}</span>
                <h5 className="text-sm font-bold text-[#0A2540] leading-snug mt-1 group-hover:text-[#005FA3] transition-colors line-clamp-2">{item.title}</h5>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
