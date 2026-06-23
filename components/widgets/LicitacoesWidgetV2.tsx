import React from 'react';

export default function LicitacoesWidgetV2() {
  const licitacoes = [
    {
      id: 1,
      modalidade: 'Pregão Eletrônico',
      numero: '045/2026',
      objeto: 'Aquisição de equipamentos de informática para a rede municipal de ensino.',
      dataAbertura: '15/07/2026',
      hora: '09:00',
      valor: 'R$ 1.200.000,00',
      status: 'Aberta',
    },
    {
      id: 2,
      modalidade: 'Concorrência Pública',
      numero: '012/2026',
      objeto: 'Contratação de empresa para pavimentação do bairro Jardim das Primaveras.',
      dataAbertura: '22/07/2026',
      hora: '10:00',
      valor: 'R$ 8.500.000,00',
      status: 'Em Análise',
    },
    {
      id: 3,
      modalidade: 'Tomada de Preços',
      numero: '008/2026',
      objeto: 'Reforma estrutural do telhado do Hospital Municipal Central.',
      dataAbertura: '05/08/2026',
      hora: '14:00',
      valor: 'R$ 950.000,00',
      status: 'Aberta',
    },
  ];

  return (
    <div className="bg-white p-8 rounded-[24px] border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] h-full">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
        <div>
          <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase">Compras Públicas</span>
          <h3 className="text-2xl font-black text-[#0A2540]">Licitações e Editais</h3>
        </div>
        <a href="#" className="text-sm font-bold text-[#005FA3] hover:text-[#0A2540] transition-colors border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50">
          Todos os Editais
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {licitacoes.map((lic) => (
          <div key={lic.id} className="group p-6 rounded-[20px] border border-gray-200/60 bg-white shadow-sm hover:shadow-lg hover:border-[#005FA3]/20 transition-all cursor-pointer relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 ${lic.status === 'Aberta' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
            
            <div className="flex items-center justify-between mb-4">
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                lic.status === 'Aberta' 
                  ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' 
                  : 'text-amber-700 bg-amber-50 border border-amber-200'
              }`}>
                {lic.status}
              </span>
              <div className="text-right">
                <p className="text-[10px] font-bold text-gray-400 uppercase">Abertura</p>
                <p className="text-sm font-black text-[#0A2540]">{lic.dataAbertura}</p>
              </div>
            </div>
            
            <span className="text-[10px] font-bold text-[#005FA3] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded inline-block mb-3">
              {lic.modalidade} {lic.numero}
            </span>

            <p className="text-sm text-gray-700 font-medium leading-relaxed mb-4 line-clamp-2 group-hover:text-[#0A2540] transition-colors">
              {lic.objeto}
            </p>
            
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Valor Estimado</span>
              <span className="text-base font-black text-[#0A2540]">{lic.valor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
