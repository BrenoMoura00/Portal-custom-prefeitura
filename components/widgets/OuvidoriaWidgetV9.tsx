import React from 'react';

export default function OuvidoriaWidgetV9() {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
      
      {/* Banner Principal - Painel Glassmorphism Colorido */}
      <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group">
        
        {/* Glow Effects de Fundo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-cyan-500/30 transition-colors duration-700"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Texto e Call to Action */}
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <span className="text-cyan-400 font-bold tracking-widest text-[10px] uppercase border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/10 backdrop-blur-md">
                Participação Cidadã
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
              A prefeitura <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">escuta você.</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto lg:mx-0">
              Envie sugestões, reclamações, elogios ou solicite informações. Sua voz é o que move a nossa cidade.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2">
                Falar com a Ouvidoria <i className="fas fa-comment-dots"></i>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2">
                Acessar o e-SIC <i className="fas fa-info-circle"></i>
              </button>
            </div>
          </div>

          {/* Gráfico/Ilustração abstrata */}
          <div className="hidden lg:flex relative w-[300px] h-[300px] items-center justify-center shrink-0">
            {/* Ícones flutuantes */}
            <div className="absolute top-10 left-10 w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-lg animate-[bounce_4s_infinite]">
               <i className="fas fa-bullhorn text-2xl text-cyan-400"></i>
            </div>
            <div className="absolute bottom-20 left-0 w-14 h-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-lg animate-[bounce_5s_infinite_1s]">
               <i className="fas fa-question text-xl text-fuchsia-400"></i>
            </div>
            <div className="absolute top-20 right-0 w-20 h-20 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-lg animate-[bounce_6s_infinite_0.5s]">
               <i className="fas fa-thumbs-up text-3xl text-emerald-400"></i>
            </div>
            
            {/* Círculo Central */}
            <div className="w-32 h-32 rounded-full border-[0.5px] border-white/20 bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-3xl flex items-center justify-center">
              <i className="fas fa-headset text-4xl text-white"></i>
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}
