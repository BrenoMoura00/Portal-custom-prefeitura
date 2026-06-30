import React from 'react';

const galerias = [
  { id: 1, titulo: 'Inauguração da Nova UBS Central', data: '29 Jun 2026', fotos: 24, imagem: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 2, titulo: 'Sessão Solene de Aniversário da Cidade', data: '15 Jun 2026', fotos: 45, imagem: 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 3, titulo: 'Ações de Tapa-Buraco - Bairro Novo', data: '10 Jun 2026', fotos: 12, imagem: 'https://images.unsplash.com/photo-1584888876402-396eb5e91316?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 4, titulo: 'Festival Gastronômico 2026', data: '05 Jun 2026', fotos: 89, imagem: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
];

export default function MultimidiaV8() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-white">
      
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-[#0e3b85] flex items-center gap-3 mb-2 uppercase tracking-tight">
            <span className="w-2 h-6 bg-[#009B3A] rounded-sm"></span>
            Central Multimídia
          </h2>
          <p className="text-slate-500 font-medium ml-5 text-sm">
            Vídeos institucionais e galerias de fotos oficiais
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Coluna 1: TV Prefeitura (Vídeo) */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <i className="fa-solid fa-play text-red-600"></i> TV Institucional
            </h3>
            <a href="#" className="text-sm font-bold text-[#1351B4] hover:underline">
              Ver canal &rarr;
            </a>
          </div>
          
          <div className="bg-slate-900 w-full aspect-video rounded border border-slate-300 relative overflow-hidden group cursor-pointer">
            {/* Placeholder de Thumbnail do YouTube */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-play text-white text-xl ml-1"></i>
              </div>
            </div>
            {/* Título do Vídeo */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <span className="bg-[#009B3A] text-white text-xs font-bold px-2 py-1 mb-2 inline-block">Institucional</span>
              <h4 className="text-white font-bold text-lg leading-tight">
                Resumo da Semana: Entregas na área da Saúde e Educação
              </h4>
            </div>
          </div>
        </div>

        {/* Coluna 2: Galerias de Fotos */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <i className="fa-solid fa-camera text-[#1351B4]"></i> Galerias de Fotos
            </h3>
            <a href="#" className="text-sm font-bold text-[#1351B4] hover:underline">
              Ver álbuns &rarr;
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {galerias.map((galeria) => (
              <a key={galeria.id} href="#" className="group flex flex-col">
                <div className="w-full aspect-[4/3] rounded border border-slate-200 overflow-hidden mb-2 relative">
                  <img 
                    src={galeria.imagem} 
                    alt={galeria.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                    <i className="fa-regular fa-image"></i> {galeria.fotos}
                  </div>
                </div>
                <h4 className="font-bold text-slate-800 text-sm leading-tight group-hover:text-[#1351B4] transition-colors line-clamp-2 mb-1">
                  {galeria.titulo}
                </h4>
                <span className="text-slate-400 text-xs font-medium">
                  {galeria.data}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
