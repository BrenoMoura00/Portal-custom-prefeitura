import React from 'react';

export default function ConhecaCidadeWidgetV10() {
  return (
    <section className="w-full py-20 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 bg-neutral-50">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-200 pb-6">
        <div>
           <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-none bg-emerald-600"></span>
              <span className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">Descubra e Explore</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
             Nossa <span className="font-bold">Chã Grande</span>
           </h2>
        </div>
      </div>

      {/* Bloco Unificado: História + Mapa */}
      <div className="w-full flex flex-col lg:flex-row bg-white border border-neutral-200 shadow-sm hover:shadow-lg transition-shadow duration-500">
        
        {/* Conteúdo / História (Esquerda) */}
        <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          
          <h3 className="text-3xl font-bold text-neutral-900 mb-6 leading-tight">
            A Capital do <span className="text-emerald-700">Turismo Rural</span>
          </h3>
          
          <p className="text-neutral-600 leading-relaxed mb-8 text-lg">
            Localizada na Zona da Mata Sul de Pernambuco, Chã Grande se destaca pelo seu clima agradável de serra, 
            fortes tradições culturais e seu rico potencial agrícola e turístico. Terra de povo acolhedor e trabalhador, 
            nossa cidade cresce preservando sua essência interiorana e investindo no futuro da nossa gente.
          </p>

          {/* Dados Rápidos */}
          <div className="grid grid-cols-2 gap-6 mb-10 border-t border-b border-neutral-100 py-6">
            <div>
              <span className="block text-3xl font-black text-neutral-900">1963</span>
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Ano de Fundação</span>
            </div>
            <div>
              <span className="block text-3xl font-black text-emerald-600">470m</span>
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Altitude (Serra)</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide uppercase transition-colors flex items-center justify-center gap-2">
              História Completa <span className="text-lg">&rarr;</span>
            </button>
            <button className="px-8 py-4 border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-700 font-bold text-sm tracking-wide uppercase transition-colors flex items-center justify-center gap-2">
              Guia Turístico
            </button>
          </div>

        </div>

        {/* Mapa Interativo (Direita) */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-neutral-200">
           {/* Overlay para não quebrar a estética quando o mapa carregar */}
           <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm border border-neutral-200 px-4 py-2 shadow-sm pointer-events-none">
             <span className="text-neutral-900 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-emerald-600"></i> Localização Oficial
             </span>
           </div>

           <iframe 
              src="https://maps.google.com/maps?q=Chã+Grande,+PE&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
           ></iframe>
        </div>

      </div>

    </section>
  );
}
