'use client';

import { useState, useEffect } from 'react';

export default function AccessibilityBar() {
  const [fontSize, setFontSize] = useState(16);
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  const adjustFontSize = (amount: number) => {
    setFontSize((prev) => {
      const newSize = prev + amount;
      if (newSize >= 12 && newSize <= 24) return newSize;
      return prev;
    });
  };

  return (
    <div className="bg-[#005FA3] text-white flex justify-between items-center px-[5%] py-2 text-[0.85rem] relative z-[1000]">
      <div className="hidden md:flex items-center gap-2">
        <a href="#main-content" className="text-white no-underline hover:underline">Ir para o conteúdo</a>
        <span className="opacity-60">|</span>
        <a href="#main-nav" className="text-white no-underline hover:underline">Ir para o menu</a>
        <span className="opacity-60">|</span>
        <a href="#search-input" className="text-white no-underline hover:underline">Ir para a busca</a>
        <span className="opacity-60">|</span>
        <a href="#footer" className="text-white no-underline hover:underline">Ir para o rodapé</a>
      </div>
      
      <div className="flex items-center gap-3.75 w-full md:w-auto justify-center md:justify-end">
        <button className="bg-transparent border-none text-white cursor-pointer hover:underline flex items-center gap-1.5">
          <i className="fas fa-universal-access"></i> Acessibilidade
        </button>
        <button 
          onClick={() => setIsHighContrast(!isHighContrast)} 
          className="bg-transparent border-none text-white cursor-pointer hover:underline flex items-center gap-1.5"
        >
          <i className="fas fa-adjust"></i> Alto Contraste
        </button>
        <div className="flex gap-[5px] font-bold">
          <button 
            onClick={() => adjustFontSize(-1)} 
            className="bg-transparent border-none text-white cursor-pointer hover:underline text-[0.95rem]"
          >
            -A
          </button>
          <button 
            onClick={() => adjustFontSize(1)} 
            className="bg-transparent border-none text-white cursor-pointer hover:underline text-[0.95rem]"
          >
            +A
          </button>
        </div>
      </div>
      
      <div id="pe-bar" className="absolute bottom-0 left-0 w-full h-1 bg-[linear-gradient(to_right,#E03C31_0%,#E03C31_25%,#1E3A8A_25%,#1E3A8A_50%,#008A3E_50%,#008A3E_75%,#F2A900_75%,#F2A900_100%)]"></div>
      
      <style dangerouslySetInnerHTML={{__html: `
        html.high-contrast,
        html.high-contrast body {
          background-color: #000000 !important;
          color: #FFFFFF !important;
        }

        html.high-contrast [class*="bg-white"],
        html.high-contrast [class*="bg-[#"],
        html.high-contrast [class*="bg-blue-"],
        html.high-contrast [class*="bg-emerald-"],
        html.high-contrast [class*="bg-rose-"] {
          background-color: #000000 !important;
          background-image: none !important;
        }

        html.high-contrast [class*="bg-gradient-"] {
          background-image: none !important;
        }
        
        html.high-contrast [class*="bg-gradient-to-t"][class*="from-[#0A2540]"] {
          background-image: linear-gradient(to top, #000000 10%, rgba(0,0,0,0.8) 40%, transparent 100%) !important;
        }

        html.high-contrast [class*="bg-gradient-to-r"][class*="to-transparent"] {
          background-image: linear-gradient(to right, #000000 20%, transparent 100%) !important;
        }
        html.high-contrast [class*="bg-gradient-to-l"][class*="to-transparent"] {
          background-image: linear-gradient(to left, #000000 20%, transparent 100%) !important;
        }
        html.high-contrast [class*="before:bg-gradient-to-r"]::before {
          background-image: linear-gradient(to right, #000000 40%, transparent 100%) !important;
        }
        html.high-contrast [class*="after:bg-gradient-to-l"]::after {
          background-image: linear-gradient(to left, #000000 40%, transparent 100%) !important;
        }

        html.high-contrast #pe-bar {
          background-image: linear-gradient(to right, #E03C31 0%, #E03C31 25%, #1E3A8A 25%, #1E3A8A 50%, #008A3E 50%, #008A3E 75%, #F2A900 75%, #F2A900 100%) !important;
          background-color: transparent !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          border: none !important;
        }

        html.high-contrast p,
        html.high-contrast h1, html.high-contrast h2, html.high-contrast h3, html.high-contrast h4, html.high-contrast h5, html.high-contrast h6,
        html.high-contrast span:not(#pe-bar),
        html.high-contrast li,
        html.high-contrast div:not(#pe-bar) {
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
        }

        html.high-contrast a,
        html.high-contrast a *,
        html.high-contrast button,
        html.high-contrast button *,
        html.high-contrast i {
          color: #FFFF00 !important;
          border-color: #FFFF00 !important;
          -webkit-text-fill-color: #FFFF00 !important;
        }

        html.high-contrast [class*="border"],
        html.high-contrast [class*="rounded-"],
        html.high-contrast [class*="shadow-"] {
          border: 1px solid #FFFFFF !important;
          box-shadow: none !important;
        }

        html.high-contrast a[class*="rounded-"],
        html.high-contrast button[class*="rounded-"] {
          border-color: #FFFF00 !important;
        }

        html.high-contrast img {
          filter: grayscale(100%) contrast(120%) brightness(90%) !important;
          border: none !important;
        }

        html.high-contrast header img {
          filter: none !important;
          background-color: #FFFFFF !important;
          padding: 8px !important;
          border-radius: 8px !important;
        }

        html.high-contrast footer img,
        html.high-contrast [class*="footer"] img {
          filter: none !important;
          background-color: transparent !important;
          padding: 0 !important;
          border: none !important;
        }

        html.high-contrast footer a:has(img),
        html.high-contrast [class*="footer"] a:has(img),
        html.high-contrast footer div:has(> img) {
          border: none !important;
          background-color: transparent !important;
        }
      `}} />
    </div>
  );
}