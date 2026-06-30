import React from 'react';

export default function HeroSearchV3() {
  return (
    <div className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80" 
          alt="Cidade Inteligente" 
          className="w-full h-full object-cover filter brightness-[0.4]"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-[5%] text-center pt-40 pb-24">
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
          O que você precisa <br className="hidden md:block" /> resolver hoje?
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-3xl mx-auto mb-12 drop-shadow-md">
          Serviços digitais ágeis, transparentes e na palma da sua mão.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto group">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <svg className="w-7 h-7 text-gray-400 group-focus-within:text-amber-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <input 
            type="text" 
            placeholder="Ex: Emissão de IPTU, Matrícula Escolar, Alvará..." 
            className="w-full bg-white/95 backdrop-blur-md border-0 text-gray-900 placeholder-gray-500 rounded-full py-6 pl-16 pr-40 text-xl shadow-[0_20px_60px_rgb(0,0,0,0.4)] focus:outline-none focus:ring-4 focus:ring-amber-500/50 transition-all"
          />
          
          <button className="absolute right-3 top-3 bottom-3 bg-[#0A2540] hover:bg-amber-500 hover:text-[#0A2540] text-white text-lg font-black px-10 rounded-full transition-all duration-300 shadow-md flex items-center justify-center">
            Buscar
          </button>
        </div>

        {/* Quick Suggestions */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
          <span className="text-sm font-semibold text-white/60 uppercase tracking-widest mr-2">Mais buscados:</span>
          {['Nota Fiscal', 'Diário Oficial', 'Portal da Transparência', 'Contracheque'].map((term, i) => (
            <button key={i} className="text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full transition-colors backdrop-blur-sm shadow-sm">
              {term}
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}
