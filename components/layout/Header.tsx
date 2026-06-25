'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <header className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.06)] sticky top-0 z-[999] px-[5%] py-[10px]">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center gap-[20px]">
        
        <div className="w-[70%] md:w-auto flex-shrink-0">
          <a href="/" aria-label="Página Inicial - Prefeitura de Chã Grande" className="flex items-center no-underline">
            <img 
              src="/assets/Logo%201.png" 
              alt="Logótipo da Prefeitura Municipal de Chã Grande" 
              className="max-h-[55px] w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            />
          </a>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden bg-transparent border-none text-[1.5rem] text-[#005FA3] cursor-pointer"
          aria-label="Abrir Menu"
        >
          <i className="fas fa-bars"></i>
        </button>

        <nav className={`${isMobileMenuOpen ? 'block absolute top-full left-0 w-full bg-white shadow-md border-t-[2px] border-[#E2E8F0] p-0' : 'hidden'} md:flex md:static md:w-auto md:bg-transparent md:shadow-none md:border-none md:p-0 flex-grow md:justify-end`}>
          <ul className="flex flex-col md:flex-row list-none gap-0 md:gap-[32px] m-0 p-0 w-full md:w-auto md:items-center">
            
            <li className="w-full md:w-auto border-b md:border-none border-[#E2E8F0]">
              <a href="/" className="flex justify-between items-center text-[#334155] no-underline font-semibold text-[0.95rem] py-[15px] px-[20px] md:p-0 hover:text-[#005FA3] transition-colors">
                Início
              </a>
            </li>
            
            <li className="w-full md:w-auto border-b md:border-none border-[#E2E8F0] group relative">
              <a href="#" className="flex justify-between md:justify-start items-center gap-[8px] text-[#334155] no-underline font-semibold text-[0.95rem] py-[15px] px-[20px] md:p-0 hover:text-[#005FA3] transition-colors md:py-[10px]">
                Chã Grande <i className="fas fa-chevron-down text-[0.7rem] text-[#005FA3] group-hover:rotate-180 transition-transform"></i>
              </a>
              <ul className="hidden group-hover:flex flex-col md:absolute top-full left-0 bg-[#F1F5F9] md:bg-white min-w-[220px] md:shadow-[0_10px_25px_rgba(0,0,0,0.08)] rounded-none md:rounded-[8px] list-none p-0 md:py-[10px] z-[1000] border-none md:border-t-[3px] md:border-[#005FA3]">
                <li><a href="#" className="block py-[15px] px-[20px] text-[#475569] no-underline text-[0.95rem] md:text-[0.9rem] hover:bg-[#F4F7F9] hover:text-[#005FA3] hover:pl-[25px] transition-all border-b border-[#E2E8F0] md:border-none">História</a></li>
                <li><a href="#" className="block py-[15px] px-[20px] text-[#475569] no-underline text-[0.95rem] md:text-[0.9rem] hover:bg-[#F4F7F9] hover:text-[#005FA3] hover:pl-[25px] transition-all border-b border-[#E2E8F0] md:border-none">Dados e Características</a></li>
                <li><a href="#" className="block py-[15px] px-[20px] text-[#475569] no-underline text-[0.95rem] md:text-[0.9rem] hover:bg-[#F4F7F9] hover:text-[#005FA3] hover:pl-[25px] transition-all border-b border-[#E2E8F0] md:border-none">Turismo</a></li>
              </ul>
            </li>
            
            <li className="w-full md:w-auto border-b md:border-none border-[#E2E8F0] group relative">
              <a href="#" className="flex justify-between md:justify-start items-center gap-[8px] text-[#334155] no-underline font-semibold text-[0.95rem] py-[15px] px-[20px] md:p-0 hover:text-[#005FA3] transition-colors md:py-[10px]">
                Governo <i className="fas fa-chevron-down text-[0.7rem] text-[#005FA3] group-hover:rotate-180 transition-transform"></i>
              </a>
              <ul className="hidden group-hover:flex flex-col md:absolute top-full left-0 bg-[#F1F5F9] md:bg-white min-w-[220px] md:shadow-[0_10px_25px_rgba(0,0,0,0.08)] rounded-none md:rounded-[8px] list-none p-0 md:py-[10px] z-[1000] border-none md:border-t-[3px] md:border-[#005FA3]">
                <li><a href="#" className="block py-[15px] px-[20px] text-[#475569] no-underline text-[0.95rem] md:text-[0.9rem] hover:bg-[#F4F7F9] hover:text-[#005FA3] hover:pl-[25px] transition-all border-b border-[#E2E8F0] md:border-none">Prefeito e Vice</a></li>
                <li><a href="#" className="block py-[15px] px-[20px] text-[#475569] no-underline text-[0.95rem] md:text-[0.9rem] hover:bg-[#F4F7F9] hover:text-[#005FA3] hover:pl-[25px] transition-all border-b border-[#E2E8F0] md:border-none">Secretarias</a></li>
                <li><a href="#" className="block py-[15px] px-[20px] text-[#475569] no-underline text-[0.95rem] md:text-[0.9rem] hover:bg-[#F4F7F9] hover:text-[#005FA3] hover:pl-[25px] transition-all border-b border-[#E2E8F0] md:border-none">Organograma</a></li>
              </ul>
            </li>
            
            <li className="w-full md:w-auto border-b md:border-none border-[#E2E8F0] group relative">
              <a href="#" className="flex justify-between md:justify-start items-center gap-[8px] text-[#334155] no-underline font-semibold text-[0.95rem] py-[15px] px-[20px] md:p-0 hover:text-[#005FA3] transition-colors md:py-[10px]">
                Serviços <i className="fas fa-chevron-down text-[0.7rem] text-[#005FA3] group-hover:rotate-180 transition-transform"></i>
              </a>
              <ul className="hidden group-hover:flex flex-col md:absolute top-full left-0 bg-[#F1F5F9] md:bg-white min-w-[220px] md:shadow-[0_10px_25px_rgba(0,0,0,0.08)] rounded-none md:rounded-[8px] list-none p-0 md:py-[10px] z-[1000] border-none md:border-t-[3px] md:border-[#005FA3]">
                <li><a href="#" className="block py-[15px] px-[20px] text-[#475569] no-underline text-[0.95rem] md:text-[0.9rem] hover:bg-[#F4F7F9] hover:text-[#005FA3] hover:pl-[25px] transition-all border-b border-[#E2E8F0] md:border-none">Portal da Transparência</a></li>
                <li><a href="#" className="block py-[15px] px-[20px] text-[#475569] no-underline text-[0.95rem] md:text-[0.9rem] hover:bg-[#F4F7F9] hover:text-[#005FA3] hover:pl-[25px] transition-all border-b border-[#E2E8F0] md:border-none">Nota Fiscal Eletrônica</a></li>
                <li><a href="#" className="block py-[15px] px-[20px] text-[#475569] no-underline text-[0.95rem] md:text-[0.9rem] hover:bg-[#F4F7F9] hover:text-[#005FA3] hover:pl-[25px] transition-all border-b border-[#E2E8F0] md:border-none">e-SIC</a></li>
              </ul>
            </li>
            
            <li className="w-full md:w-auto border-b md:border-none border-[#E2E8F0]">
              <a href="#" className="flex justify-between items-center text-[#334155] no-underline font-semibold text-[0.95rem] py-[15px] px-[20px] md:p-0 hover:text-[#005FA3] transition-colors">
                Transparência
              </a>
            </li>
            
          </ul>
        </nav>
        
      </div>
    </header>
  );
}