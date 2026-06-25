import React from 'react';

const cityData = [
  { label: 'População', value: '21.498', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { label: 'Área', value: '84,1 km²', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Fundação', value: '1963', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { label: 'Altitude', value: '470m', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
];

export default function ConhecaCidadeV5() {
  return (
    <div className="w-full bg-slate-50 py-24 relative overflow-hidden">
      
      {/* Luzes de fundo de decoração */}
      <div className="absolute top-0 right-0 w-full h-full max-w-7xl pointer-events-none z-0 opacity-40">
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-emerald-200/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-1 bg-emerald-500 rounded-full"></span>
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">Nossas Raízes</span>
            <span className="w-10 h-1 bg-emerald-500 rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Conheça <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Chã Grande</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Uma cidade acolhedora no agreste pernambucano, rica em cultura, agricultura e com uma história construída por gente trabalhadora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Informações e História */}
          <div className="flex flex-col gap-4">
            
            {/* Cards de Dados */}
            <div className="grid grid-cols-2 gap-4">
              {cityData.map((data, index) => (
                <div key={index} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={data.icon} />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">{data.label}</span>
                    <strong className="block text-slate-900 text-xl font-black">{data.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Texto de História */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-[40px] transform translate-x-10 -translate-y-10"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Nossa História</h3>
              <div className="text-slate-600 space-y-4 relative z-10 leading-relaxed">
                <p>
                  A história de Chã Grande teve início na primeira metade do século XX. O local, originalmente pertencente a Vitória de Santo Antão, começou a se desenvolver ao redor das férteis terras propícias para a agricultura.
                </p>
                <p>
                  Foi elevada à categoria de município em 20 de dezembro de 1963. Desde então, a cidade cresceu e se tornou um importante polo agrícola da região, especialmente no cultivo de chuchu, graviola e hortaliças, mantendo o charme e o clima agradável de cidade do interior.
                </p>
              </div>
              <button className="mt-6 text-emerald-600 font-bold hover:text-emerald-700 transition-colors inline-flex items-center gap-2 group relative z-10">
                Ler história completa
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Mapa e Localização */}
          <div className="bg-white p-4 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="rounded-[2rem] overflow-hidden w-full h-[500px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.638781702582!2d-35.45391302509177!3d-8.243503191811803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab67f5647710c7%3A0x33b8a95689456578!2sPrefeitura%20Municipal%20de%20Ch%C3%A3%20Grande!5e0!3m2!1spt-BR!2sbr!4v1718629555000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[20%] contrast-125 hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
