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
    <div className="bg-[#005FA3] text-white flex justify-between items-center px-[5%] py-[8px] text-[0.85rem] relative z-[1000]">
      <div className="hidden md:flex items-center gap-[8px]">
        <a href="#main-content" className="text-white no-underline hover:underline">Ir para o conteúdo</a>
        <span className="opacity-60">|</span>
        <a href="#main-nav" className="text-white no-underline hover:underline">Ir para o menu</a>
        <span className="opacity-60">|</span>
        <a href="#search-input" className="text-white no-underline hover:underline">Ir para a busca</a>
        <span className="opacity-60">|</span>
        <a href="#footer" className="text-white no-underline hover:underline">Ir para o rodapé</a>
      </div>
      
      <div className="flex items-center gap-[15px] w-full md:w-auto justify-center md:justify-end">
        <button className="bg-transparent border-none text-white cursor-pointer hover:underline flex items-center gap-[6px]">
          <i className="fas fa-universal-access"></i> Acessibilidade
        </button>
        <button 
          onClick={() => setIsHighContrast(!isHighContrast)} 
          className="bg-transparent border-none text-white cursor-pointer hover:underline flex items-center gap-[6px]"
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
      
      {/* A linha original de Pernambuco - Intacta */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[linear-gradient(to_right,#E03C31_0%,#E03C31_25%,#1E3A8A_25%,#1E3A8A_50%,#008A3E_50%,#008A3E_75%,#F2A900_75%,#F2A900_100%)]"></div>
      
      <style dangerouslySetInnerHTML={{__html: `
        /* 1. Fundo Preto Absoluto para a página toda */
        html.high-contrast,
        html.high-contrast body {
          background-color: #000000 !important;
          background-image: none !important;
        }

        /* 2. Reseta cores de fundo dos Widgets (Ouvidoria, Selo Prata, etc) */
        html.high-contrast [class*="bg-white"],
        html.high-contrast [class*="bg-[#F"],
        html.high-contrast [class*="bg-[#0"],
        html.high-contrast [class*="from-[#"],
        html.high-contrast [class*="to-[#"] {
          background-color: #000000 !important;
          background-image: none !important;
        }

        /* 3. EXCEÇÃO VITAL: Protege a sua linha colorida do menu e rodapé */
        html.high-contrast [class*="h-[4px]"],
        html.high-contrast [class*="h-[2px]"],
        html.high-contrast [class*="bg-[linear-gradient"] {
          background-color: inherit; 
          background-image: inherit !important;
          border: none !important;
        }

        /* 4. Remove a "névoa" branca que ficava flutuando nos carrosséis */
        html.high-contrast [class*="to-transparent"] {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }

        /* 5. Textos e Estruturas em Branco */
        html.high-contrast p,
        html.high-contrast h1, html.high-contrast h2, html.high-contrast h3, html.high-contrast h4, html.high-contrast h5, html.high-contrast h6,
        html.high-contrast span,
        html.high-contrast li,
        html.high-contrast div {
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
        }

        /* 6. Links, Botões e Ícones ficam Amarelos (Acessibilidade) */
        html.high-contrast a,
        html.high-contrast a *,
        html.high-contrast button,
        html.high-contrast button *,
        html.high-contrast i {
          color: #FFFF00 !important;
          border-color: #FFFF00 !important;
          -webkit-text-fill-color: #FFFF00 !important;
        }

        /* 7. Garante que os cartões pretos tenham borda branca para não sumirem no fundo preto */
        html.high-contrast [class*="rounded-[1"],
        html.high-contrast [class*="rounded-[2"],
        html.high-contrast [class*="rounded-xl"],
        html.high-contrast [class*="rounded-2xl"],
        html.high-contrast [class*="border"] {
          border: 1px solid #FFFFFF !important;
          box-shadow: none !important;
        }
        
        /* Cartões que são botões/links ganham borda Amarela */
        html.high-contrast a[class*="rounded-"],
        html.high-contrast button[class*="rounded-"] {
          border-color: #FFFF00 !important;
        }

        /* 8. Tratamento de Imagens Padrão (Ficam em Tons de Cinza) */
        html.high-contrast img {
          filter: grayscale(100%) contrast(120%) brightness(90%) !important;
        }

        /* 9. TRATAMENTO DA LOGO: Ignora o tom de cinza, mantém cor real e coloca fundo branco */
        html.high-contrast header img,
        html.high-contrast footer img,
        html.high-contrast img[src*="logo"],
        html.high-contrast img[alt*="logo" i],
        html.high-contrast img[src*="brasao"],
        html.high-contrast img[alt*="brasao" i],
        html.high-contrast img[alt*="Prefeitura" i] {
          filter: none !important;
          background-color: #FFFFFF !important;
          padding: 8px !important;
          border-radius: 8px !important;
          border: none !important;
        }
      `}} />
    </div>
  );
}