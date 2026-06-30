import React from 'react';

export default function OuvidoriaWidgetV10() {
  return (
    <section className="w-full py-16 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 bg-neutral-50">
      
      {/* Banner Principal - Painel Gov 2030 */}
      <div className="relative rounded-none overflow-hidden border border-neutral-300 shadow-sm bg-white">
        
        {/* Padrão geométrico de fundo muito sutil */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Texto e Call to Action */}
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <span className="w-2 h-2 rounded-none bg-emerald-600"></span>
              <span className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">
                Participação Cidadã
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-4 tracking-tight">
              A prefeitura <span className="font-bold text-emerald-700">escuta você.</span>
            </h2>
            
            <p className="text-neutral-600 text-lg mb-10 max-w-md mx-auto lg:mx-0">
              Envie sugestões, reclamações, elogios ou solicite informações. Sua voz é o que move a nossa cidade.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-none bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 uppercase">
                Falar com a Ouvidoria <i className="fas fa-comment-dots"></i>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-none border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-700 font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 uppercase">
                Acessar o e-SIC <i className="fas fa-info-circle"></i>
              </button>
            </div>
          </div>

          {/* Ilustração abstrata Sóbria */}
          <div className="hidden lg:flex relative w-[300px] h-[300px] items-center justify-center shrink-0">
            {/* Ícones com estética flat */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-neutral-100 border border-neutral-200 flex items-center justify-center shadow-sm">
               <i className="fas fa-bullhorn text-2xl text-emerald-600"></i>
            </div>
            <div className="absolute bottom-20 left-0 w-14 h-14 bg-neutral-100 border border-neutral-200 flex items-center justify-center shadow-sm">
               <i className="fas fa-question text-xl text-neutral-600"></i>
            </div>
            <div className="absolute top-20 right-0 w-20 h-20 bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-sm">
               <i className="fas fa-thumbs-up text-3xl text-emerald-600"></i>
            </div>
            
            {/* Quadrado Central */}
            <div className="w-32 h-32 border border-neutral-200 bg-white shadow-md flex items-center justify-center">
              <i className="fas fa-headset text-4xl text-neutral-900"></i>
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}
