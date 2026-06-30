'use client';

import React from 'react';

export default function FooterV9() {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950 relative overflow-hidden">
      
      {/* Luz de fundo do rodapé */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-cyan-900/20 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
          
          {/* Marca / Identidade */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl font-black text-white tracking-tighter mb-2 flex items-center gap-2">
              <i className="fas fa-cube text-cyan-400"></i>
              PREFEITURA<span className="font-light text-slate-500">DIGITAL</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-sm">
              Plataforma Governamental de Alta Performance. Todos os direitos reservados &copy; {new Date().getFullYear()}.
            </p>
          </div>

          {/* Links Essenciais - Estilo Terminal */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {['Transparência', 'Privacidade', 'Acessibilidade', 'Mapa do Site', 'Intranet'].map((link, idx) => (
              <a key={idx} href="#" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                {link}
              </a>
            ))}
          </div>

          {/* Selos e Botão de Voltar ao Topo */}
          <div className="flex items-center gap-6">
             <div className="flex -space-x-2">
               <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer tooltip-trigger" title="Site Seguro">
                  <i className="fas fa-shield-alt text-sm"></i>
               </div>
               <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer tooltip-trigger" title="Acessibilidade em Libras">
                  <i className="fas fa-sign-language text-sm"></i>
               </div>
             </div>
             
             <button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all flex items-center justify-center"
             >
               <i className="fas fa-arrow-up"></i>
             </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
