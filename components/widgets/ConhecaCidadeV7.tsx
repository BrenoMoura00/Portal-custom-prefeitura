import React from 'react';

const cityData = [
  { label: 'População', value: '21.498 hab.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { label: 'Área', value: '84,1 km²', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Fundação', value: '1963', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { label: 'Altitude', value: '470m', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
];

export default function ConhecaCidadeV7() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-24 relative z-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Lado Esquerdo - Textos e Dados */}
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-1 bg-[#1351B4] rounded-full"></span>
            <span className="text-[#1351B4] font-bold uppercase tracking-widest text-xs">A Cidade</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            História, cultura e <br/> desenvolvimento.
          </h2>
          
          <div className="text-slate-500 text-base md:text-lg leading-relaxed mb-10 space-y-4">
            <p>
              Elevada à categoria de município em 20 de dezembro de 1963, Chã Grande se destaca por seu clima agradável e por ser um importante polo agrícola de Pernambuco.
            </p>
            <p>
              Construída pela força de gente trabalhadora, a cidade é referência estadual no cultivo de produtos rurais como o chuchu e hortaliças, mantendo a tranquilidade típica do interior sem abrir mão do crescimento econômico e da inovação.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {cityData.map((data, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-center gap-4 hover:border-[#1351B4]/30 hover:shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#1351B4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1351B4] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={data.icon} />
                  </svg>
                </div>
                <div>
                  <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider">{data.label}</span>
                  <strong className="block text-slate-800 text-lg font-black">{data.value}</strong>
                </div>
              </div>
            ))}
          </div>
          
        </div>

        {/* Lado Direito - Mosaico de Imagens */}
        <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
          <img 
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80" 
            alt="Vista da cidade"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-white text-2xl font-bold mb-1">Polo Agrícola do Agreste</h3>
            <p className="text-white/80 text-sm">Belezas naturais e clima acolhedor de serra.</p>
          </div>
        </div>

      </div>

    </section>
  );
}
