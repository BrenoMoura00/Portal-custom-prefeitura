import React from 'react';

export default function NewsWidgetV2() {
  const news = [
    { id: 1, title: 'Inscrições abertas para concurso público', date: 'Hoje', category: 'Administração' },
    { id: 2, title: 'Prefeitura lança programa de recapeamento', date: 'Hoje', category: 'Obras' },
    { id: 3, title: 'Festival de Inverno começa nesta sexta-feira', date: 'Ontem', category: 'Cultura' },
    { id: 4, title: 'Campanha de adoção bate recorde', date: 'Ontem', category: 'Meio Ambiente' },
  ];

  return (
    <div className="h-full flex flex-col justify-center">
      <h3 className="text-3xl font-black text-[#0A2540] font-serif mb-8 flex items-center gap-4">
        Radar
        <span className="h-[1px] flex-1 bg-gray-200"></span>
      </h3>
      
      <div className="flex flex-col gap-0 divide-y divide-gray-100">
        {news.map(item => (
          <a key={item.id} href="#" className="py-6 group flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#005FA3]">{item.category}</span>
              <span className="text-[10px] font-semibold text-gray-400">{item.date}</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 leading-snug group-hover:text-[#005FA3] transition-colors font-serif">
              {item.title}
            </h4>
          </a>
        ))}
      </div>
      
      <button className="w-fit mt-8 border-b-2 border-[#0A2540] pb-1 text-sm font-bold uppercase tracking-widest text-[#0A2540] hover:text-[#005FA3] hover:border-[#005FA3] transition-colors">
        Acessar Sala de Imprensa
      </button>
    </div>
  );
}
