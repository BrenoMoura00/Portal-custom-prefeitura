'use client';

import React from 'react';

export default function HubMultimidiaV3() {
  const fotosInstagram = [
    {
      id: 1,
      imagem: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
      curtidas: 342,
      comentarios: 12
    },
    {
      id: 2,
      imagem: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80',
      curtidas: 512,
      comentarios: 45
    },
    {
      id: 3,
      imagem: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
      curtidas: 890,
      comentarios: 67
    },
    {
      id: 4,
      imagem: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
      curtidas: 124,
      comentarios: 5
    }
  ];

  return (
    <section className="py-24 px-[5%] bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-[#E1306C] font-bold tracking-widest text-[10px] uppercase mb-2 block flex items-center justify-center gap-2">
            <i className="fab fa-instagram"></i> <i className="fab fa-youtube text-[#FF0000]"></i> Conecte-se
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0A2540] tracking-tight mb-4">A Prefeitura nas Redes</h2>
          <p className="text-gray-500 text-lg">
            Acompanhe nossas ações em tempo real, assista aos pronunciamentos oficiais e faça parte da nossa comunidade online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-[#0A2540] flex items-center gap-2">
                <i className="fab fa-youtube text-[#FF0000]"></i> TV Institucional
              </h3>
              <a href="#" className="text-sm font-semibold text-[#FF0000] hover:underline">Inscrever-se</a>
            </div>

            <div className="relative w-full flex-grow rounded-3xl overflow-hidden shadow-lg group cursor-pointer h-[350px] lg:h-auto border border-gray-200">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80)` }}
              ></div>

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#FF0000] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.4)] group-hover:scale-110 transition-transform duration-300 pl-1">
                  <i className="fas fa-play text-white text-2xl"></i>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <span className="bg-[#FF0000] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest mb-2 inline-block">Ao Vivo</span>
                <h4 className="text-white font-bold text-xl md:text-2xl leading-tight">
                  Coletiva de Imprensa: Novos Investimentos na Saúde Pública
                </h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full mt-8 lg:mt-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-[#0A2540] flex items-center gap-2">
                <i className="fab fa-instagram text-[#E1306C]"></i> Nosso Instagram
              </h3>
              <a href="#" className="text-sm font-semibold text-[#E1306C] hover:underline">@prefeiturachagrande</a>
            </div>

            <div className="grid grid-cols-2 gap-4 flex-grow">
              {fotosInstagram.map((foto) => (
                <a key={foto.id} href="#" className="relative group rounded-2xl overflow-hidden aspect-square border border-gray-100 shadow-sm">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${foto.imagem})` }}
                  ></div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <span className="text-white font-bold flex items-center gap-1.5">
                      <i className="fas fa-heart"></i> {foto.curtidas}
                    </span>
                    <span className="text-white font-bold flex items-center gap-1.5">
                      <i className="fas fa-comment"></i> {foto.comentarios}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                      <i className="fab fa-instagram text-white text-sm"></i>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gray-50 border border-gray-200 text-[#0A2540] font-bold hover:bg-[#0A2540] hover:text-white transition-all duration-300 group">
            Acessar o Portal da Comunicação
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

      </div>
    </section>
  );
}
