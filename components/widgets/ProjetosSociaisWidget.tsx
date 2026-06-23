import React from 'react';
import Link from 'next/link';

export default function ProjetosSociaisWidget() {
  const projetos = [
    { title: 'Criança Feliz', category: 'Educação', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop' },
    { title: 'Sopão Solidário', category: 'Alimentação', image: 'https://images.unsplash.com/photo-1593113565245-9ec9c50e6092?q=80&w=400&auto=format&fit=crop' },
    { title: 'Inclusão Digital', category: 'Tecnologia', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase mb-2 block">Nossas Iniciativas</span>
          <h2 className="text-3xl font-bold text-gray-900">Projetos Sociais</h2>
        </div>
        <Link href="#" className="text-orange-600 hover:text-orange-800 font-medium text-sm hidden sm:block">
          Ver todos →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projetos.map((projeto, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative">
              <img src={projeto.image} alt={projeto.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                {projeto.category}
              </div>
            </div>
            <h3 className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition-colors">{projeto.title}</h3>
            <p className="text-gray-500 text-sm mt-1 flex items-center gap-1 group-hover:text-gray-700">
              Saber mais <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
