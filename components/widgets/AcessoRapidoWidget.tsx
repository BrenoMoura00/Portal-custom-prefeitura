'use client';

import { useState } from 'react';
import ServiceCard from '../ui/ServiceCard';

export default function AcessoRapidoWidget() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'cidadao', label: 'Cidadão' },
    { id: 'empresa', label: 'Empreendedor' },
    { id: 'servidor', label: 'Servidor' }
  ];

  const services = [
    { id: 1, title: 'Portal da Transparência', description: 'Contas e receitas', icon: 'fas fa-chart-line', categories: ['cidadao', 'empresa', 'servidor'] },
    { id: 2, title: 'Nota Fiscal', description: 'Emissão de NFS-e', icon: 'fas fa-file-invoice-dollar', categories: ['empresa'] },
    { id: 3, title: 'Ouvidoria', description: 'Manifestações e e-SIC', icon: 'fas fa-bullhorn', categories: ['cidadao', 'empresa'] },
    { id: 4, title: 'Diário Oficial', description: 'Atos do município', icon: 'fas fa-book-open', categories: ['cidadao', 'servidor', 'empresa'] },
    { id: 5, title: 'Contracheque', description: 'Portal do Servidor', icon: 'fas fa-money-check-alt', categories: ['servidor'] },
    { id: 6, title: 'Marcação de Consultas', description: 'Saúde municipal', icon: 'fas fa-laptop-medical', categories: ['cidadao'] },
    { id: 7, title: 'Carta de Serviços', description: 'Guia de atendimento', icon: 'fas fa-file-signature', categories: ['cidadao', 'empresa'] },
    { id: 8, title: 'Licitações', description: 'Editais e contratos', icon: 'fas fa-gavel', categories: ['empresa'] }
  ];

  const filteredServices = services.filter(service =>
    activeFilter === 'todos' ? true : service.categories.includes(activeFilter)
  );

  return (
    <section className="bg-[#0A2540] py-[60px] px-[5%] w-full mb-[60px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[30px] gap-[20px]">
          <h3 className="text-white text-[1.5rem] font-bold m-0">Acesso Rápido</h3>
          
          <div className="flex gap-[10px] flex-wrap">
            {filters.map((filter) => (
              <button 
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-[20px] py-[8px] rounded-[30px] font-[600] text-[0.9rem] cursor-pointer transition-all border ${activeFilter === filter.id ? 'bg-[#005FA3] border-[#005FA3] text-white shadow-[0_4px_15px_rgba(0,0,0,0.25)]' : 'bg-white/10 border-white/20 text-white hover:bg-white/20'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Adicionado h-[275px], overflow-y-auto e content-start para manter o tamanho fixo */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[20px] h-[275px] content-start overflow-y-auto pr-[5px] scrollbar-thin scrollbar-thumb-[#005FA3] scrollbar-track-black/20">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}