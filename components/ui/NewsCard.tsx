'use client';

import { useRef } from 'react';

interface NewsCardProps {
  image: string;
  tag: string;
  date: string;
  title: string;
  link?: string;
  icon?: string;
}

export default function NewsCard({ image, tag, date, title, link = '#', icon = 'fas fa-newspaper' }: NewsCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth <= 768) return; 
    
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -4; 
    const rotateY = ((x - centerX) / centerX) * 4;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = 'none';
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
  };

  return (
    <article 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-[24px] overflow-hidden border border-[#E2E8F0] shadow-[0_8px_24px_rgba(10,37,64,0.04)] flex flex-col group [transform-style:preserve-3d]"
    >
      <div className="relative h-[200px] overflow-hidden border-b border-black/5">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.08]" 
        />
        <div className="absolute top-[16px] left-[16px] bg-white/85 backdrop-blur-[12px] py-[6px] px-[14px] rounded-full text-[0.75rem] font-extrabold uppercase text-[#0A2540] flex items-center gap-[6px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-white/40">
          <i className={icon}></i> {tag}
        </div>
      </div>
      
      <div className="p-[24px] flex flex-col flex-grow">
        <span className="text-[0.8rem] text-[#64748B] font-bold mb-[10px]">{date}</span>
        <h4 className="text-[1.15rem] text-[#0A2540] font-extrabold mb-[20px] leading-[1.4]">{title}</h4>
        
        <a href={link} className="mt-auto inline-flex items-center gap-[8px] font-bold text-[0.9rem] text-[#005FA3] no-underline transition-all duration-300 group-hover:gap-[12px]">
          Ler matéria <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </article>
  );
}