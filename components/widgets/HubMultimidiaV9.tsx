import React from 'react';

const instagramPosts = [
  { id: 1, foto: 'https://images.unsplash.com/photo-1541888087425-ce81dfc46928?w=500&q=80', likes: '1.2k', comments: '34' },
  { id: 2, foto: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&q=80', likes: '850', comments: '12' },
  { id: 3, foto: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=80', likes: '2.1k', comments: '156' },
  { id: 4, foto: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?w=500&q=80', likes: '943', comments: '45' },
];

export default function HubMultimidiaV9() {
  return (
    <section className="w-full py-20 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
           <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
              <span className="text-violet-400 font-bold tracking-widest text-[10px] uppercase">Central de Mídia</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
             Conecte-se com a <span className="font-bold">Cidade</span>
           </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* TV Institucional - Destaque em Vídeo */}
        <div className="lg:col-span-7 relative rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 group shadow-2xl h-[400px] md:h-[500px]">
          
          <img 
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80" 
            alt="TV Institucional" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
          
          {/* Botão Play Flutuante */}
          <div className="absolute inset-0 flex items-center justify-center">
             <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-violet-500 group-hover:border-violet-400 transition-all duration-300 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
               <i className="fas fa-play text-2xl text-white ml-2"></i>
             </button>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
            <span className="px-3 py-1 bg-red-500/20 border border-red-500/50 text-red-400 text-[10px] font-bold uppercase rounded backdrop-blur-md tracking-wider mb-4 inline-block animate-pulse">
              Ao Vivo
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              Acompanhe a coletiva de imprensa sobre o novo marco de desenvolvimento
            </h3>
            <p className="text-slate-300 text-sm">TV Institucional • Transmissão Oficial</p>
          </div>
        </div>

        {/* Feed do Instagram - Grade Minimalista */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white/5 border border-white/5 rounded-[2rem] p-8 h-[400px] md:h-[500px]">
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-fuchsia-600 p-[2px]">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center border-2 border-slate-900">
                   <i className="fab fa-instagram text-xl text-white"></i>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg leading-none mb-1">@prefeituradigital</h4>
                <p className="text-slate-400 text-xs">Siga-nos no Instagram</p>
              </div>
            </div>
            <button className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors">
              Seguir
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1">
            {instagramPosts.map((post) => (
              <div key={post.id} className="relative rounded-xl overflow-hidden group cursor-pointer border border-white/5">
                <img 
                  src={post.foto} 
                  alt="Post do Instagram" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <span className="text-white text-sm font-bold flex items-center gap-1">
                    <i className="fas fa-heart text-rose-500"></i> {post.likes}
                  </span>
                  <span className="text-white text-sm font-bold flex items-center gap-1">
                    <i className="fas fa-comment"></i> {post.comments}
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
