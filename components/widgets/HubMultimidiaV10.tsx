import React from 'react';

const instagramPosts = [
  { id: 1, foto: 'https://picsum.photos/seed/insta1/500/500', likes: '1.2k', comments: '34' },
  { id: 2, foto: 'https://picsum.photos/seed/insta2/500/500', likes: '850', comments: '12' },
  { id: 3, foto: 'https://picsum.photos/seed/insta3/500/500', likes: '2.1k', comments: '156' },
  { id: 4, foto: 'https://picsum.photos/seed/insta4/500/500', likes: '943', comments: '45' },
];

export default function HubMultimidiaV10() {
  return (
    <section className="w-full py-20 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 bg-white">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-200 pb-6">
        <div>
           <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-none bg-emerald-600 animate-pulse"></span>
              <span className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">Central de Mídia</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
             Conecte-se com a <span className="font-bold">Cidade</span>
           </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* TV Institucional - Destaque em Vídeo */}
        <div className="lg:col-span-7 relative rounded-none overflow-hidden bg-neutral-900 border border-neutral-200 group shadow-sm h-[400px] md:h-[500px]">
          
          <img 
            src="https://picsum.photos/seed/tv1/1200/800" 
            alt="TV Institucional" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent"></div>
          
          {/* Botão Play */}
          <div className="absolute inset-0 flex items-center justify-center">
             <button className="w-20 h-20 rounded-none bg-emerald-600 flex items-center justify-center hover:bg-emerald-500 transition-colors shadow-lg">
               <i className="fas fa-play text-2xl text-white ml-2"></i>
             </button>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
            <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase rounded-none tracking-widest mb-4 inline-block animate-pulse">
              Ao Vivo
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight group-hover:text-emerald-400 transition-colors">
              Acompanhe a coletiva de imprensa sobre o novo marco de desenvolvimento
            </h3>
            <p className="text-neutral-300 text-sm font-medium uppercase tracking-wider">TV Institucional • Transmissão Oficial</p>
          </div>
        </div>

        {/* Feed do Instagram */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-neutral-50 border border-neutral-200 rounded-none p-8 h-[400px] md:h-[500px]">
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-none bg-neutral-200 p-[2px]">
                <div className="w-full h-full bg-white rounded-none flex items-center justify-center">
                   <i className="fab fa-instagram text-xl text-neutral-900"></i>
                </div>
              </div>
              <div>
                <h4 className="text-neutral-900 font-bold text-lg leading-none mb-1">@prefeituradigital</h4>
                <p className="text-neutral-500 text-xs uppercase tracking-wider font-bold">Siga-nos no Instagram</p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-none border border-neutral-300 bg-white hover:border-emerald-600 text-neutral-700 hover:text-emerald-700 text-xs font-bold uppercase tracking-widest transition-colors">
              Seguir
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1">
            {instagramPosts.map((post) => (
              <div key={post.id} className="relative rounded-none overflow-hidden group cursor-pointer border border-neutral-200">
                <img 
                  src={post.foto} 
                  alt="Post do Instagram" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-emerald-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <span className="text-white text-sm font-bold flex items-center gap-1">
                    <i className="fas fa-heart text-white"></i> {post.likes}
                  </span>
                  <span className="text-white text-sm font-bold flex items-center gap-1">
                    <i className="fas fa-comment text-white"></i> {post.comments}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
        </div>

      </div>

    </section>
  );
}
