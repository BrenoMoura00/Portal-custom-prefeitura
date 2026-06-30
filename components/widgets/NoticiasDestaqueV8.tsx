import React from 'react';

const noticias = [
  {
    id: 1,
    categoria: 'Saúde',
    data: '29 Jun 2026',
    titulo: 'Nova Unidade Básica de Saúde é inaugurada no centro da cidade',
    resumo: 'Com capacidade para mais de 500 atendimentos diários, a nova UBS conta com especialidades médicas e farmácia popular integrada.',
    imagem: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    destaque: true,
  },
  {
    id: 2,
    categoria: 'Educação',
    data: '28 Jun 2026',
    titulo: 'Prefeitura abre inscrições para creches municipais',
    imagem: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    categoria: 'Infraestrutura',
    data: '27 Jun 2026',
    titulo: 'Obras de pavimentação avançam na zona rural do município',
    imagem: 'https://images.unsplash.com/photo-1584888876402-396eb5e91316?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    categoria: 'Cultura',
    data: '26 Jun 2026',
    titulo: 'Festival de Inverno terá programação especial gratuita na praça',
    imagem: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  }
];

export default function NoticiasDestaqueV8() {
  const destaque = noticias[0];
  const listaSecundaria = noticias.slice(1);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-slate-50/50">
      
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-[#0e3b85] flex items-center gap-3 mb-2 uppercase tracking-tight">
            <span className="w-2 h-6 bg-[#009B3A] rounded-sm"></span>
            Últimas Notícias
          </h2>
          <p className="text-slate-500 font-medium ml-5 text-sm">
            Fique por dentro das ações da administração municipal
          </p>
        </div>
        <a href="#" className="flex items-center gap-2 text-sm font-bold text-white bg-[#1351B4] hover:bg-[#0e3b85] px-5 py-2.5 rounded transition-colors ml-5 md:ml-0">
          Ver todas as notícias
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Notícia Principal */}
        <div className="lg:col-span-7 flex flex-col group cursor-pointer">
          <div className="w-full aspect-[16/9] overflow-hidden rounded border border-slate-200 mb-6 bg-slate-200">
            <img 
              src={destaque.imagem} 
              alt={destaque.titulo}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-[#009B3A] text-white text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-wide">
              {destaque.categoria}
            </span>
            <span className="text-slate-400 text-sm font-medium flex items-center gap-1">
              <i className="fa-regular fa-calendar"></i> {destaque.data}
            </span>
          </div>
          <h3 className="text-3xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-[#1351B4] transition-colors">
            {destaque.titulo}
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed mb-4 line-clamp-3">
            {destaque.resumo}
          </p>
          <div className="mt-auto">
            <span className="text-[#1351B4] font-bold text-sm uppercase tracking-wider group-hover:underline underline-offset-4">
              Leia mais
            </span>
          </div>
        </div>

        {/* Lista Secundária */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {listaSecundaria.map((noticia) => (
            <a key={noticia.id} href="#" className="flex gap-4 group">
              <div className="w-32 h-32 sm:w-40 sm:h-32 shrink-0 overflow-hidden rounded border border-slate-200 bg-slate-200">
                <img 
                  src={noticia.imagem} 
                  alt={noticia.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#009B3A] text-xs font-bold uppercase">
                    {noticia.categoria}
                  </span>
                  <span className="text-slate-300 text-xs">•</span>
                  <span className="text-slate-400 text-xs font-medium">
                    {noticia.data}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-[#1351B4] transition-colors line-clamp-3">
                  {noticia.titulo}
                </h4>
              </div>
            </a>
          ))}
          
          <div className="mt-auto pt-6 border-t border-slate-200">
            <div className="bg-[#f8fafc] border border-slate-200 p-5 rounded">
              <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <i className="fa-regular fa-envelope text-[#1351B4]"></i>
                Receba notícias no seu e-mail
              </h5>
              <div className="flex mt-3">
                <input type="email" placeholder="Seu melhor e-mail" className="flex-1 border border-slate-300 rounded-l px-3 py-2 text-sm focus:outline-none focus:border-[#1351B4]" />
                <button className="bg-[#1351B4] text-white px-4 py-2 rounded-r text-sm font-bold hover:bg-[#0e3b85] transition-colors">
                  Assinar
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
