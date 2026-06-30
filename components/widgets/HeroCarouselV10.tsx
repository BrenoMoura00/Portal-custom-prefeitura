'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const noticias = [
  {
    id: 1,
    tag: 'Educação',
    titulo: 'Novas Escolas em Tempo Integral',
    resumo: 'Prefeitura anuncia a construção de 5 novas unidades com tecnologia de ponta e foco na educação infantil.',
    data: 'Hoje, 08:30',
    imagem: 'https://picsum.photos/seed/hero1/2000/1000',
    corTema: 'from-emerald-800 to-neutral-900',
  },
  {
    id: 2,
    tag: 'Infraestrutura',
    titulo: 'Modernização do Transporte',
    resumo: 'Frota de ônibus 100% elétrica entra em operação na zona sul, reduzindo emissão de carbono.',
    data: 'Ontem, 14:15',
    imagem: 'https://picsum.photos/seed/hero2/2000/1000',
    corTema: 'from-amber-700 to-neutral-900',
  },
  {
    id: 3,
    tag: 'Saúde',
    titulo: 'Ampliação da Rede de Atendimento',
    resumo: 'Novo complexo hospitalar entra em fase final de obras e deve atender 500 pacientes por dia.',
    data: '27 Jun, 10:00',
    imagem: 'https://picsum.photos/seed/hero3/2000/1000',
    corTema: 'from-blue-800 to-neutral-900',
  }
];

export default function HeroCarouselV10() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play do carrossel
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % noticias.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % noticias.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + noticias.length) % noticias.length);
  };

  const currentNews = noticias[currentIndex];

  return (
    <section 
      className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-neutral-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Camada de Imagens (Backgrounds) */}
      {noticias.map((noticia, idx) => (
        <div 
          key={noticia.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
        >
          {/* Imagem de Fundo com Zoom Suave */}
          <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear ${idx === currentIndex ? 'scale-110' : 'scale-100'}`} style={{ backgroundImage: `url(${noticia.imagem})` }}></div>
          
          {/* Overlay de Gradiente Escuro para Leitura */}
          <div className={`absolute inset-0 bg-gradient-to-t ${noticia.corTema} opacity-60 mix-blend-multiply`}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
        </div>
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        
        {/* Conteúdo da Notícia Principal */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full">
          <div className="overflow-hidden mb-4">
            <div 
              key={`tag-${currentNews.id}`} 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wide animate-[slideInDown_0.5s_ease-out]"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              {currentNews.tag}
            </div>
          </div>
          
          <h1 
            key={`title-${currentNews.id}`} 
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6 animate-[slideInLeft_0.6s_ease-out]"
          >
            {currentNews.titulo}
          </h1>
          
          <p 
            key={`desc-${currentNews.id}`} 
            className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed animate-[slideInLeft_0.7s_ease-out]"
          >
            {currentNews.resumo}
          </p>

          <div 
            key={`action-${currentNews.id}`}
            className="flex items-center gap-4 animate-[slideInUp_0.8s_ease-out]"
          >
            <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 group shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Ler matéria completa
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <span className="text-slate-400 text-sm font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {currentNews.data}
            </span>
          </div>
        </div>

        {/* Navegador Lateral (Miniaturas) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col gap-4 justify-center pl-12 border-l border-white/10 h-full py-20">
          <h3 className="text-white/50 text-sm font-bold uppercase tracking-widest mb-2">Últimas Atualizações</h3>
          
          {noticias.map((noticia, idx) => (
            <button 
              key={noticia.id}
              onClick={() => goToSlide(idx)}
              className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border backdrop-blur-sm
                ${idx === currentIndex 
                  ? 'bg-white/10 border-white/20 shadow-lg translate-x-[-1rem]' 
                  : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'}`}
            >
              <div className="relative w-20 h-20 rounded-none border border-neutral-700 overflow-hidden shrink-0">
                <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110`} style={{ backgroundImage: `url(${noticia.imagem})` }}></div>
                {idx !== currentIndex && <div className="absolute inset-0 bg-neutral-950/60 group-hover:bg-transparent transition-colors"></div>}
              </div>
              <div className="text-left">
                <span className={`text-xs font-bold mb-1 block transition-colors ${idx === currentIndex ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                  {noticia.tag}
                </span>
                <h4 className={`font-semibold line-clamp-2 transition-colors ${idx === currentIndex ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                  {noticia.titulo}
                </h4>
              </div>
            </button>
          ))}

          {/* Controles do Carrossel */}
          <div className="flex items-center gap-2 mt-4 pl-4">
            {/* Indicadores de Progresso (Dots) */}
            <div className="flex gap-1.5">
              {noticias.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

      </div>


      
      {/* Styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
