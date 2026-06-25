'use client';

import React from 'react';

const fotosInstagram = [
  { id: 1, imagem: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80', curtidas: 342, comentarios: 12 },
  { id: 2, imagem: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80', curtidas: 512, comentarios: 45 },
  { id: 3, imagem: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80', curtidas: 890, comentarios: 67 },
  { id: 4, imagem: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80', curtidas: 124, comentarios: 5 },
  { id: 5, imagem: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80', curtidas: 278, comentarios: 19 },
  { id: 6, imagem: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80', curtidas: 431, comentarios: 32 },
];

export default function MultimidiaV4() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto">

        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-[#1351B4] font-bold tracking-widest text-[11px] uppercase mb-2 block">Conecte-se</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">A Prefeitura nas Redes</h2>
          <p className="text-slate-500">Acompanhe nossas ações, assista aos pronunciamentos oficiais e faça parte da nossa comunidade.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

          <div className="lg:col-span-3 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                TV Institucional
              </h3>
              <a href="#" className="text-sm font-semibold text-red-600 hover:underline">Inscrever-se</a>
            </div>

            <div className="relative w-full flex-grow rounded-2xl overflow-hidden group cursor-pointer min-h-[320px] border border-slate-200">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80)` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-widest mb-2 inline-block">Ao Vivo</span>
                <h4 className="text-white font-bold text-lg md:text-xl leading-tight">
                  Coletiva de Imprensa: Novos Investimentos na Saúde Pública
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <svg className="w-5 h-5 text-pink-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                Instagram
              </h3>
              <a href="#" className="text-sm font-semibold text-pink-600 hover:underline">@prefeitura</a>
            </div>

            <div className="grid grid-cols-3 gap-2 flex-grow">
              {fotosInstagram.map((foto) => (
                <a key={foto.id} href="#" className="relative group rounded-xl overflow-hidden aspect-square border border-slate-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${foto.imagem})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] opacity-0 group-hover:opacity-85 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <span className="text-white font-bold text-xs flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                      {foto.curtidas}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
