import React from 'react';

const videos = [
  { id: 1, titulo: 'Resumo da Semana: Entregas da Prefeitura na área da Saúde e Educação', thumbnail: 'https://picsum.photos/seed/gov1/800/450', duracao: '04:12' },
  { id: 2, titulo: 'Conheça o novo Parque Municipal e suas opções de lazer', thumbnail: 'https://picsum.photos/seed/gov2/800/450', duracao: '02:45' },
  { id: 3, titulo: 'Obras de macrodrenagem avançam no bairro Centro', thumbnail: 'https://picsum.photos/seed/gov3/800/450', duracao: '03:30' },
];

export default function MultimidiaV6() {
  const principal = videos[0];
  const secundários = videos.slice(1);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-red-400 font-bold tracking-widest text-sm uppercase">TV Prefeitura</span>
            </div>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Conteúdo Multimídia</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold transition-all duration-300">
            Acessar Canal Oficial
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          <div className="lg:col-span-2 group relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video lg:aspect-auto lg:h-[500px] cursor-pointer">
            <img src={principal.thumbnail} alt={principal.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-red-600/90 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_30px_rgba(220,38,38,0.5)] group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300 pl-1.5">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  Em Destaque
                </span>
                <span className="text-white/70 text-sm font-semibold">{principal.duracao}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white line-clamp-2 leading-tight">
                {principal.titulo}
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white/90 pb-4 border-b border-white/10 hidden lg:block">Mais Vídeos</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {secundários.map(video => (
                <a key={video.id} href="#" className="group flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="relative w-full sm:w-32 lg:w-full xl:w-36 aspect-video flex-shrink-0 rounded-xl overflow-hidden">
                    <img src={video.thumbnail} alt={video.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    
                    <div className="absolute bottom-1.5 right-1.5 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-1.5 py-0.5 rounded">
                      {video.duracao}
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-red-600/90 backdrop-blur-md flex items-center justify-center text-white pl-0.5">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-white font-semibold text-sm leading-snug line-clamp-3 group-hover:text-red-400 transition-colors">
                      {video.titulo}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-auto pt-6 border-t border-white/10 hidden lg:block">
              <a href="#" className="group flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/20 hover:border-blue-500/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Podcasts Oficiais</h4>
                    <p className="text-blue-300/70 text-xs mt-0.5">Escute no Spotify ou Apple</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
