'use client';

import React from 'react';
import Image from 'next/image';

export default function FooterV10() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white relative overflow-hidden pt-16">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Info */}
          <div className="flex flex-col items-start text-left">
            {/* Logo da Cidade (Placeholder) */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-none flex items-center justify-center border border-emerald-700">
                <i className="fas fa-landmark text-2xl text-white"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-neutral-900 tracking-tighter uppercase leading-none">Prefeitura</span>
                <span className="text-sm font-light text-neutral-500 uppercase tracking-widest">Chã Grande</span>
              </div>
            </div>
            <p className="text-neutral-500 text-sm mb-6 max-w-xs leading-relaxed">
              Plataforma oficial de serviços, informações e transparência da administração municipal. Construindo uma cidade mais inteligente para todos.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-none bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-none bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-none bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Serviços Rápido */}
          <div>
            <h4 className="text-lg font-bold text-neutral-900 mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-600 block"></span> Serviços
            </h4>
            <ul className="flex flex-col gap-3">
              {['Emissão de IPTU', 'Nota Fiscal Eletrônica', 'Agendamento Saúde', 'Matrículas Escolares', 'Portal do Servidor'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-neutral-500 hover:text-emerald-600 text-sm font-medium transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-[10px] text-neutral-300"></i> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institucional */}
          <div>
            <h4 className="text-lg font-bold text-neutral-900 mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-600 block"></span> A Prefeitura
            </h4>
            <ul className="flex flex-col gap-3">
              {['Gabinete do Prefeito', 'Secretarias Municipais', 'Diário Oficial', 'Concursos Públicos', 'Portal da Transparência'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-neutral-500 hover:text-emerald-600 text-sm font-medium transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-[10px] text-neutral-300"></i> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contato & Endereço */}
          <div>
            <h4 className="text-lg font-bold text-neutral-900 mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-600 block"></span> Atendimento
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-neutral-500 font-medium">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-emerald-600 mt-1"></i>
                <span>Av. São José, 101 - Centro<br/>Chã Grande - PE, 55636-000</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone-alt text-emerald-600"></i>
                <span>Ouvidoria: 156<br/>Geral: (00) 3333-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="far fa-clock text-emerald-600"></i>
                <span>Segunda a Sexta, das 08h às 17h</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full bg-neutral-900 py-6 border-t border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          <p className="text-neutral-400 text-xs font-medium uppercase tracking-widest">
            &copy; {new Date().getFullYear()} PREFEITURA MUNICIPAL DE CHÃ GRANDE. TODOS OS DIREITOS RESERVADOS.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-none bg-neutral-800 border border-neutral-700 flex items-center justify-center text-emerald-500 tooltip-trigger" title="Site Seguro">
                <i className="fas fa-shield-alt text-xs"></i>
              </div>
              <div className="w-8 h-8 rounded-none bg-neutral-800 border border-neutral-700 flex items-center justify-center text-emerald-500 tooltip-trigger" title="Acessibilidade em Libras">
                <i className="fas fa-sign-language text-xs"></i>
              </div>
            </div>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider"
            >
              Topo <i className="fas fa-arrow-up"></i>
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
