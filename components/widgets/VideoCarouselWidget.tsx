'use client';

import React, { useRef } from 'react';

interface VideoData {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
}

const videosData: VideoData[] = [
  {
    id: '1',
    title: 'Campanha de Vacinação 2026',
    category: 'Saúde',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
    duration: '02:15',
  },
  {
    id: '2',
    title: 'Inauguração da Nova Escola Municipal',
    category: 'Educação',
    thumbnail: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    duration: '01:45',
  },
  {
    id: '3',
    title: 'Obras de Pavimentação no Centro',
    category: 'Infraestrutura',
    thumbnail: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=600&q=80',
    duration: '03:30',
  },
  {
    id: '4',
    title: 'Festival Cultural de Inverno',
    category: 'Cultura',
    thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
    duration: '04:20',
  },
  {
    id: '5',
    title: 'Novos Projetos de Iluminação Pública',
    category: 'Obras',
    thumbnail: 'https://images.unsplash.com/photo-1477244075012-5cc28286e465?auto=format&fit=crop&w=600&q=80',
    duration: '01:50',
  },
  {
    id: '6',
    title: 'Programa de Reflorestamento Urbano',
    category: 'Meio Ambiente',
    thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
    duration: '02:45',
  },
  {
    id: '7',
    title: 'Final do Campeonato Municipal de Futsal',
    category: 'Esportes',
    thumbnail: 'https://images.unsplash.com/photo-1518605368461-1ee115d7e562?auto=format&fit=crop&w=600&q=80',
    duration: '05:10',
  },
  {
    id: '8',
    title: 'Entrega de Viaturas para a Guarda Civil',
    category: 'Segurança',
    thumbnail: 'https://images.unsplash.com/photo-1588612140409-7d174668b816?auto=format&fit=crop&w=600&q=80',
    duration: '01:30',
  },
  {
    id: '9',
    title: 'Lançamento do Novo Aplicativo de Serviços',
    category: 'Tecnologia',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    duration: '03:05',
  },
  {
    id: '10',
    title: 'Mutirão de Limpeza nos Bairros',
    category: 'Zeladoria',
    thumbnail: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=600&q=80',
    duration: '02:00',
  },
  {
    id: '11',
    title: 'Abertura das Inscrições para Cursos Profissionalizantes',
    category: 'Desenvolvimento Social',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
    duration: '01:55',
  },
  {
    id: '12',
    title: 'Revitalização do Parque da Cidade',
    category: 'Turismo',
    thumbnail: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
    duration: '04:15',
  }
];

export default function VideoCarouselWidget() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-slate-50 py-12 px-8 md:px-16 font-sans w-full overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-blue-700 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
              TV Institucional
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-blue-700 hover:text-blue-800 hover:underline flex items-center gap-1 transition-colors">
            Acessar todos os vídeos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-6 md:-left-14 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full text-slate-600 shadow-md flex items-center justify-center transition-all hover:bg-slate-50 hover:text-blue-700 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden md:flex"
            aria-label="Rolar para a esquerda"
          >
            <svg className="w-6 h-6 pr-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              div::-webkit-scrollbar { display: none; }
            `}} />

            {videosData.map((video) => (
              <div
                key={video.id}
                className="flex flex-col w-[280px] sm:w-[300px] flex-shrink-0 snap-start bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden group/card"
              >
                <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={`Capa do vídeo: ${video.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-slate-900/10 group-hover/card:bg-slate-900/20 transition-colors"></div>

                  <div className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[11px] font-medium px-1.5 py-0.5 rounded">
                    {video.duration}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-sm text-blue-700 group-hover/card:scale-110 group-hover/card:bg-blue-700 group-hover/card:text-white transition-all duration-300">
                      <svg className="w-6 h-6 ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-1 rounded w-fit mb-2 uppercase tracking-wide">
                    {video.category}
                  </span>
                  
                  <h3 className="text-slate-800 font-semibold text-[15px] leading-snug line-clamp-2 group-hover/card:text-blue-700 transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-6 md:-right-14 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 rounded-full text-slate-600 shadow-md flex items-center justify-center transition-all hover:bg-slate-50 hover:text-blue-700 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden md:flex"
            aria-label="Rolar para a direita"
          >
            <svg className="w-6 h-6 ml-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}