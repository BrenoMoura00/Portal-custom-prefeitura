import React from 'react';

const executivo = [
  {
    id: 1,
    nome: 'Carlos Eduardo Silva',
    cargo: 'Prefeito Municipal',
    partido: 'Partido A',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    estilo: 'bg-gradient-to-br from-[#005FA3] to-[#0A2540] text-white',
    sombra: 'hover:shadow-[0_20px_50px_rgba(0,95,163,0.3)]'
  },
  {
    id: 2,
    nome: 'Marta Helena Souza',
    cargo: 'Vice-Prefeita',
    partido: 'Partido B',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    estilo: 'bg-white border border-gray-200 text-[#0A2540]',
    sombra: 'shadow-[0_10px_40px_rgb(0,0,0,0.08)]'
  }
];

const vereadores = [
  { id: 3, nome: 'João de Deus', cargo: 'Vereador', foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
  { id: 4, nome: 'Ana Paula Rocha', cargo: 'Vereadora', foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80' },
  { id: 5, nome: 'Roberto Almeida', cargo: 'Vereador', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
  { id: 6, nome: 'Sônia Braga', cargo: 'Vereadora', foto: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=200&q=80' },
  { id: 7, nome: 'Marcos Vinícius', cargo: 'Vereador', foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80' },
  { id: 8, nome: 'Luciana Mota', cargo: 'Vereadora', foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }
];

export default function AutoridadesWidgetV3() {
  return (
    <section className="py-24 px-[5%] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho V3 */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase mb-2 block">Poder Público</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">Nossos Representantes</h2>
            <p className="text-gray-500 mt-2 max-w-lg">Conheça as autoridades do Poder Executivo e Legislativo do município.</p>
          </div>
          <a href="#" className="text-sm font-bold text-white bg-[#0A2540] px-5 py-2.5 rounded-full hover:bg-[#005FA3] transition-colors shadow-[0_10px_20px_rgba(10,37,64,0.2)] whitespace-nowrap flex items-center gap-2">
            Estrutura Organizacional <i className="fas fa-sitemap"></i>
          </a>
        </div>

        {/* Bento Grid: Executivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {executivo.map((autoridade, index) => (
            <div 
              key={autoridade.id} 
              className={`group relative overflow-hidden rounded-[32px] p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:-translate-y-2 transition-all duration-300 ${autoridade.estilo} ${autoridade.sombra}`}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-white/20 relative z-10">
                <img 
                  src={autoridade.foto} 
                  alt={autoridade.nome} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left mt-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{autoridade.nome}</h3>
                <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-3 ${index === 0 ? 'bg-white/20 text-white backdrop-blur-md' : 'bg-[#E2E8F0] text-[#005FA3]'}`}>
                  <i className="fas fa-user-tie"></i> {autoridade.cargo}
                </span>
                <p className={index === 0 ? 'text-blue-100 font-medium' : 'text-gray-500 font-medium'}>
                  {autoridade.partido}
                </p>
              </div>

              {/* Decorativo Glass (só no primeiro) */}
              {index === 0 && (
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              )}
            </div>
          ))}
        </div>

        {/* Legislativo (Mini Bento Grid) */}
        <div>
          <div className="flex items-center justify-between mb-6">
             <h3 className="text-2xl font-black text-[#0A2540]">Câmara Municipal</h3>
             <a href="#" className="text-sm font-bold text-[#005FA3] hover:underline flex items-center gap-2">
               Ver todos os vereadores <i className="fas fa-arrow-right"></i>
             </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {vereadores.map((vereador) => (
              <div 
                key={vereador.id} 
                className="group relative overflow-hidden rounded-[24px] bg-white border border-gray-100 p-4 flex flex-col items-center hover:-translate-y-1 hover:shadow-[0_15px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border border-gray-200">
                  <img 
                    src={vereador.foto} 
                    alt={vereador.nome} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-bold text-[#0A2540] text-sm text-center mb-1 group-hover:text-[#005FA3] transition-colors">
                  {vereador.nome}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold text-center">
                  {vereador.cargo}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
