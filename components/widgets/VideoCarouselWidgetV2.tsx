import React from 'react';

export default function VideoCarouselWidgetV2() {
  return (
    <div className="relative w-full h-[600px] bg-black overflow-hidden my-16 group">
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80" alt="City Aerial" className="w-full h-full object-cover opacity-60" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      <div className="absolute bottom-0 left-0 w-full p-12 max-w-7xl mx-auto flex flex-col justify-end h-full z-10">
        <span className="text-white/70 font-bold tracking-widest uppercase text-sm mb-4">Especial Documentários</span>
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-lg max-w-4xl leading-tight">
          O Futuro Sendo Construído
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mb-10 drop-shadow">
          Assista à série documental sobre as grandes transformações urbanas que estão mudando a cara da nossa cidade para as próximas gerações.
        </p>
        
        <div className="flex items-center gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
            Assistir Agora
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors">
            Ver Trailer
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 flex gap-2">
        <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 backdrop-blur-sm transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 backdrop-blur-sm transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
