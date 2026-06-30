import React from 'react';

const noticias = [
  {
    id: 1,
    categoria: 'Saúde',
    titulo: 'Novo complexo hospitalar entra em fase final de obras',
    resumo: 'Com capacidade para 500 leitos, a nova unidade vai desafogar o sistema municipal e regional.',
    data: 'Hoje, 09:30',
    imagem: 'https://picsum.photos/seed/noticia1/800/600',
    destaque: true
  },
  {
    id: 2,
    categoria: 'Educação',
    titulo: 'Matrículas para a rede municipal abrem na próxima segunda',
    resumo: 'Todo o processo será feito de forma 100% digital pelo novo portal da prefeitura.',
    data: 'Ontem, 16:45',
    imagem: 'https://picsum.photos/seed/noticia2/800/600',
    destaque: false
  },
  {
    id: 3,
    categoria: 'Infraestrutura',
    titulo: 'Prefeitura entrega 50km de novas vias asfaltadas',
    resumo: 'O programa de mobilidade urbana atinge marco histórico na região sul da cidade.',
    data: 'Ontem, 14:15',
    imagem: 'https://picsum.photos/seed/noticia3/800/600',
    destaque: false
  },
  {
    id: 4,
    categoria: 'Economia',
    titulo: 'Programa de microcrédito atinge 10 mil empreendedores',
    resumo: 'Linha de crédito com juro zero impulsiona a geração de empregos no município.',
    data: '27 Jun, 10:00',
    imagem: 'https://picsum.photos/seed/noticia4/800/600',
    destaque: false
  }
];

export default function NoticiasDestaqueV10() {
  const manchetePrincipal = noticias[0];
  const secundarias = noticias.slice(1);

  return (
    <section className="w-full py-20 px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 bg-white">
      
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-200 pb-6">
        <div>
           <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-none bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-600 font-bold tracking-widest text-[10px] uppercase">Boletim Informativo</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight">
             Notícias em <span className="font-bold">Destaque</span>
           </h2>
        </div>
        <button className="px-6 py-2 rounded-none border border-neutral-300 hover:border-emerald-500 hover:bg-neutral-50 text-neutral-600 hover:text-emerald-600 transition-all text-sm font-bold uppercase tracking-wide">
          Acessar Sala de Imprensa
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Notícia Principal (Hero News) */}
        <div className="lg:col-span-7 group cursor-pointer relative h-[400px] md:h-[500px] rounded-none overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <img 
            src={manchetePrincipal.imagem} 
            alt={manchetePrincipal.titulo} 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Degradê mais leve pra leitura sem pesar */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold uppercase rounded-none tracking-wider">
                {manchetePrincipal.categoria}
              </span>
              <span className="text-neutral-200 text-sm font-medium flex items-center gap-2">
                <i className="far fa-clock"></i> {manchetePrincipal.data}
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-emerald-300 transition-colors">
              {manchetePrincipal.titulo}
            </h3>
            <p className="text-neutral-300 text-lg line-clamp-2 md:line-clamp-none max-w-2xl">
              {manchetePrincipal.resumo}
            </p>
          </div>
        </div>

        {/* Notícias Secundárias (Lista Sóbria) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {secundarias.map((noticia) => (
            <div 
              key={noticia.id} 
              className="group flex gap-5 p-4 rounded-none bg-white hover:bg-neutral-50 border border-neutral-200 cursor-pointer transition-all h-full"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-none overflow-hidden border border-neutral-200">
                <img 
                  src={noticia.imagem} 
                  alt={noticia.titulo} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                    {noticia.categoria}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                  <span className="text-neutral-500 text-[11px] font-medium">
                    {noticia.data}
                  </span>
                </div>
                <h4 className="text-neutral-900 font-bold text-base md:text-lg leading-snug mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {noticia.titulo}
                </h4>
                <p className="text-neutral-500 text-sm line-clamp-1">
                  {noticia.resumo}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
