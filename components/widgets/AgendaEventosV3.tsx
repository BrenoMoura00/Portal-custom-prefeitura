'use client';

import React from 'react';

export default function AgendaEventosV3() {
  const eventoDestaque = {
    titulo: 'Festival Gastronômico e Cultural de Inverno',
    resumo: 'Três dias de muita música, arte local e as melhores barracas de comida típica da região. Traga sua família para o maior evento do ano!',
    dia: '12',
    mes: 'JUL',
    local: 'Praça Central',
    horario: 'A partir das 18h',
    imagem: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80',
    tag: 'Gratuito'
  };

  const proximosEventos = [
    {
      id: 1,
      dia: '25',
      mes: 'JUN',
      titulo: 'Feira do Produtor Rural e Artesanato',
      local: 'Mercado Municipal',
      horario: '07h às 14h',
      cor: 'bg-[#F59E0B]' // Laranja
    },
    {
      id: 2,
      dia: '02',
      mes: 'JUL',
      titulo: 'Apresentação da Orquestra Sinfônica Jovem',
      local: 'Teatro Municipal',
      horario: '20:00',
      cor: 'bg-[#005FA3]' // Azul
    },
    {
      id: 3,
      dia: '18',
      mes: 'JUL',
      titulo: 'Mutirão de Saúde: Prevenção e Bem-estar',
      local: 'Posto de Saúde da Vila Nova',
      horario: '08h às 17h',
      cor: 'bg-[#10B981]' // Verde
    },
    {
      id: 4,
      dia: '30',
      mes: 'JUL',
      titulo: 'Torneio Final: Campeonato de Futsal Amador',
      local: 'Ginásio de Esportes',
      horario: '19:30',
      cor: 'bg-[#005FA3]' // Azul
    }
  ];

  return (
    <section className="py-24 px-[5%] bg-[#F4F7F9] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header da Seção */}
        <div className="mb-14 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-[#F59E0B] font-bold tracking-widest text-[10px] uppercase mb-2 block">Participe</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0A2540] tracking-tight">Agenda da Cidade</h2>
          </div>
          <a href="#" className="px-6 py-3 rounded-full bg-white border border-gray-200 text-[#0A2540] font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            Ver calendário completo <i className="far fa-calendar-alt text-[#F59E0B]"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Evento Destaque (Esquerda) */}
          <div className="lg:col-span-7 group cursor-pointer relative rounded-3xl overflow-hidden shadow-lg h-[500px] lg:h-auto">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${eventoDestaque.imagem})` }}
            ></div>
            
            {/* Overlay Escuro */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent"></div>
            
            {/* Badge de Destaque / Gratuito no Topo */}
            <div className="absolute top-6 left-6">
              <span className="bg-[#10B981] text-white font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
                {eventoDestaque.tag}
              </span>
            </div>

            {/* Conteúdo Inferior */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-6 md:items-end">
                
                {/* Date Badge Gigante */}
                <div className="bg-white text-center rounded-2xl p-4 shadow-xl shrink-0 w-24 transform group-hover:-translate-y-2 transition-transform duration-300 border-b-4 border-[#F59E0B]">
                  <span className="block text-4xl font-black text-[#0A2540] leading-none mb-1">{eventoDestaque.dia}</span>
                  <span className="block text-sm font-bold text-[#F59E0B] uppercase tracking-widest">{eventoDestaque.mes}</span>
                </div>
                
                {/* Textos */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight group-hover:text-blue-100 transition-colors">
                    {eventoDestaque.titulo}
                  </h3>
                  <p className="text-gray-200 text-base md:text-lg mb-4 line-clamp-2 md:line-clamp-3">
                    {eventoDestaque.resumo}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#38BDF8]">
                    <span className="flex items-center gap-2">
                      <i className="fas fa-map-marker-alt"></i> {eventoDestaque.local}
                    </span>
                    <span className="flex items-center gap-2 text-white">
                      <i className="far fa-clock"></i> {eventoDestaque.horario}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Lista de Próximos Eventos (Direita) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between h-full">
            <h3 className="text-xl font-bold text-[#0A2540] mb-2">Próximos Eventos</h3>
            
            <div className="flex flex-col gap-4">
              {proximosEventos.map((evento) => (
                <a key={evento.id} href="#" className="bg-white rounded-2xl p-4 flex items-center gap-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
                  
                  {/* Date Badge */}
                  <div className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center shrink-0 text-white ${evento.cor} shadow-inner group-hover:scale-105 transition-transform`}>
                    <span className="text-2xl font-black leading-none">{evento.dia}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-90 mt-0.5">{evento.mes}</span>
                  </div>

                  {/* Detalhes */}
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-[#0A2540] leading-snug group-hover:text-[#005FA3] transition-colors mb-1 line-clamp-2">
                      {evento.titulo}
                    </h4>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5 truncate">
                        <i className="fas fa-map-marker-alt text-gray-400"></i> {evento.local}
                      </span>
                      <span className="flex items-center gap-1.5 shrink-0">
                        <i className="far fa-clock text-gray-400"></i> {evento.horario}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Newsletter CTA / Lembrete */}
            <div className="mt-4 bg-[#0A2540] rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#F59E0B]/20 rounded-full blur-xl"></div>
              <h4 className="text-white font-bold text-lg mb-2">Não perca nada!</h4>
              <p className="text-slate-300 text-sm mb-4">Cadastre-se para receber a agenda cultural da semana no seu WhatsApp.</p>
              <button className="w-full bg-[#F59E0B] text-white font-bold py-2.5 rounded-lg hover:bg-[#D97706] transition-colors shadow-md">
                Receber Programação <i className="fab fa-whatsapp ml-1"></i>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
