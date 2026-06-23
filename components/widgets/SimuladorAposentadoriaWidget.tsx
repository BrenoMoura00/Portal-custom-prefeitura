import React from 'react';

export default function SimuladorAposentadoriaWidget() {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
      <img 
        src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1600&auto=format&fit=crop" 
        alt="Casal de idosos felizes" 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-900/40"></div>
      
      <div className="relative z-10 p-8 flex flex-col h-full justify-center">
        <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md mb-6">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-2">Simulador de Aposentadoria</h2>
        <p className="text-teal-50 mb-8 max-w-sm">
          Planeje seu futuro. Calcule o tempo restante e o valor estimado do seu benefício de forma rápida e segura.
        </p>
        
        <div>
          <button className="bg-white text-teal-800 hover:bg-gray-50 font-bold py-3 px-6 rounded-xl transition-colors shadow-lg inline-flex items-center gap-2">
            Iniciar Simulação
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
