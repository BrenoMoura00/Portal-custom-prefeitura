import React from 'react';

const mediaItems = [
  {
    id: 1,
    type: 'video',
    title: 'Resumo das obras do mês de Junho',
    category: 'TV Prefeitura',
    duration: '03:45',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-2'
  },
  {
    id: 2,
    type: 'gallery',
    title: 'Festival Gastronômico 2026',
    category: 'Fotos',
    count: '+45 fotos',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1'
  },
  {
    id: 3,
    type: 'instagram',
    title: '@prefeiturachagrande',
    category: 'Redes Sociais',
    desc: 'Siga nosso perfil oficial e acompanhe o dia a dia da nossa cidade.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1'
  }
];

export default function MultimidiaV5() {
  return (
    <div className="w-full relative">
      {/* Fundo para esconder as pontas das bordas arredondadas e conectar com a seção anterior */}
      <div className="absolute top-0 left-0 w-full h-32 bg-emerald-950 z-0"></div>

      <div className="w-full bg-white py-24 relative z-20 rounded-t-[40px] md:rounded-t-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-1 bg-emerald-500 rounded-full"></span>
                <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">Conecte-se</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Hub <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Multimídia</span>
              </h2>
            </div>
            <button className="hidden md:inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors group">
              Ver galeria completa
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
            {mediaItems.map((item) => (
              <div 
                key={item.id} 
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${item.colSpan} ${item.rowSpan}`}
              >
                <div className="absolute inset-0">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.type === 'instagram' ? 'from-fuchsia-900/80 via-purple-900/40 to-transparent' : 'from-slate-900 via-slate-900/40 to-transparent'} opacity-90`}></div>
                </div>
                
                {/* Overlay Icon (Play / Photos / Insta) */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/90 flex items-center justify-center text-white backdrop-blur-sm shadow-[0_0_30px_rgba(16,185,129,0.5)] transform group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                <div className="relative h-full flex flex-col justify-between p-6 md:p-8 z-10">
                  <div className="flex justify-between items-start">
                    <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white shadow-sm border border-white/10`}>
                      {item.category}
                    </span>
                    
                    {item.type === 'video' && (
                      <span className="flex items-center gap-1.5 text-white/90 text-sm font-semibold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        {item.duration}
                      </span>
                    )}
                    {item.type === 'gallery' && (
                      <span className="flex items-center gap-1.5 text-white/90 text-sm font-semibold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {item.count}
                      </span>
                    )}
                    {item.type === 'instagram' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto">
                    <h3 className={`text-white font-bold leading-tight drop-shadow-md group-hover:text-emerald-300 transition-colors duration-300 ${item.type === 'video' ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className="text-white/80 text-sm mt-2">{item.desc}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 md:hidden text-center">
            <button className="inline-flex items-center gap-2 text-emerald-600 font-bold">
              Ver galeria completa &rarr;
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
