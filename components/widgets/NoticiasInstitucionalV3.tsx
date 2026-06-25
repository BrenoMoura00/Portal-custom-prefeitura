'use client';

import React from 'react';

export default function NoticiasInstitucionalV3() {
  const noticiaPrincipal = {
    categoria: 'Infraestrutura',
    titulo: 'Prefeitura inaugura novo complexo viário no centro da cidade',
    resumo: 'Obras devem reduzir o trânsito em até 40% na região central. O complexo inclui novos viadutos, ciclofaixas e iluminação em LED.',
    data: '23/06/2026',
    hora: '09:30',
    imagem: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80',
  };

  const ultimasNoticias = [
    {
      id: 1,
      categoria: 'Educação',
      titulo: 'Novas creches em período integral abrem 500 vagas para o próximo semestre',
      data: '22/06/2026',
    },
    {
      id: 2,
      categoria: 'Saúde',
      titulo: 'Campanha de vacinação contra a gripe atinge 90% da meta no município',
      data: '21/06/2026',
    },
    {
      id: 3,
      categoria: 'Meio Ambiente',
      titulo: 'Plantio de 2 mil mudas recupera área desmatada no parque ecológico',
      data: '20/06/2026',
    },
    {
      id: 4,
      categoria: 'Cultura',
      titulo: 'Inscrições abertas para o edital de fomento cultural da Lei Paulo Gustavo',
      data: '19/06/2026',
    }
  ];

  const noticiasSecundarias = [
    {
      id: 1,
      categoria: 'Turismo',
      titulo: 'Festival de Inverno 2026 atrai mais de 50 mil turistas neste fim de semana',
      data: '18/06/2026',
      imagem: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      categoria: 'Economia',
      titulo: 'Programa Jovem Aprendiz municipal forma sua primeira turma com 120 alunos',
      data: '17/06/2026',
      imagem: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      categoria: 'Esporte',
      titulo: 'Olimpíadas Estudantis reúnem atletas de 30 escolas da rede pública',
      data: '15/06/2026',
      imagem: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80',
    }
  ];

  return (
    <section className="py-20 px-[5%] bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-10 pb-4 border-b-2 border-[#005FA3] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#0A2540] uppercase tracking-tight">Notícias Oficiais</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-[#005FA3] hover:underline flex items-center gap-2">
            Acessar todas as publicações <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        {/* Bloco Superior: Destaque + Últimas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Destaque Principal */}
          <div className="lg:col-span-8 group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-6 shadow-sm">
              <img 
                src={noticiaPrincipal.imagem} 
                alt="Notícia Principal" 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#005FA3] text-white text-[11px] font-bold px-3 py-1 rounded uppercase tracking-widest">
                  {noticiaPrincipal.categoria}
                </span>
                <span className="text-gray-500 text-sm font-medium">
                  {noticiaPrincipal.data} às {noticiaPrincipal.hora}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4 leading-tight group-hover:text-[#005FA3] transition-colors">
                {noticiaPrincipal.titulo}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {noticiaPrincipal.resumo}
              </p>
            </div>
          </div>

          {/* Últimas Notícias (Lista) */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-lg font-bold text-[#0A2540] mb-6 flex items-center gap-2">
              <i className="far fa-clock text-[#005FA3]"></i> Últimas Atualizações
            </h3>
            
            <div className="flex flex-col gap-0 border-t border-gray-100">
              {ultimasNoticias.map((noticia) => (
                <a key={noticia.id} href="#" className="py-5 border-b border-gray-100 group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#005FA3] font-bold text-[10px] uppercase tracking-wider">
                      {noticia.categoria}
                    </span>
                    <span className="text-gray-400 text-xs">
                      • {noticia.data}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#334155] leading-snug group-hover:text-[#005FA3] transition-colors">
                    {noticia.titulo}
                  </h4>
                </a>
              ))}
            </div>
            
            <a href="#" className="mt-6 text-center text-sm font-bold text-gray-500 hover:text-[#005FA3] transition-colors border border-gray-200 py-3 rounded-lg hover:bg-gray-50">
              Carregar mais atualizações
            </a>
          </div>

        </div>

        {/* Bloco Inferior: Cards Secundários */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noticiasSecundarias.map((noticia) => (
            <a key={noticia.id} href="#" className="group flex flex-col">
              <div className="overflow-hidden rounded-xl mb-4 shadow-sm h-[200px]">
                <img 
                  src={noticia.imagem} 
                  alt={noticia.titulo} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#005FA3] font-bold text-[10px] uppercase tracking-wider">
                  {noticia.categoria}
                </span>
                <span className="text-gray-400 text-xs">
                  • {noticia.data}
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#0A2540] leading-snug group-hover:text-[#005FA3] transition-colors">
                {noticia.titulo}
              </h4>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
