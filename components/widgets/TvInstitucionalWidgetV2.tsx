import React from 'react';

export default function TvInstitucionalWidgetV2() {
  const videos = [
    { title: 'Prestação de Contas - 1º Semestre 2026', date: '18 Jun', duration: '12:45' },
    { title: 'Inauguração do Centro de Inovação', date: '10 Jun', duration: '08:30' },
    { title: 'Entrevista com o Secretário de Saúde', date: '05 Jun', duration: '22:10' },
  ];

  return (
    <div className="bg-white rounded-[24px] p-8 border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] h-full">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
        <div>
          <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase">Multimídia</span>
          <h3 className="text-2xl font-black text-[#0A2540]">TV Institucional</h3>
        </div>
        <a href="#" className="text-sm font-bold text-[#005FA3] hover:text-[#0A2540] transition-colors border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50">
          Canal Completo
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        <div className="relative rounded-[20px] overflow-hidden bg-black aspect-video group cursor-pointer">
          <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80" alt="Vídeo" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-[#005FA3] ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Ao Vivo</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Últimos Vídeos</h4>
          {videos.map((video, i) => (
            <a key={i} href="#" className="group flex items-center gap-3 p-3 rounded-xl hover:bg-[#F8FAFC] transition-colors border border-transparent hover:border-gray-100">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#005FA3] transition-colors">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-sm font-bold text-[#0A2540] leading-snug truncate group-hover:text-[#005FA3] transition-colors">{video.title}</h5>
                <span className="text-[10px] text-gray-400 font-semibold">{video.date} · {video.duration}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
