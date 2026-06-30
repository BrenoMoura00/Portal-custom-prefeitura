import React from 'react';

export default function LocationWidgetV8() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200">
      
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col mb-10">
        <h2 className="text-2xl font-extrabold text-[#0e3b85] flex items-center gap-3 uppercase tracking-tight">
          <span className="w-2 h-6 bg-[#009B3A] rounded-sm"></span>
          Atendimento ao Cidadão e Localização
        </h2>
        <p className="text-slate-500 font-medium mt-2 ml-5 text-sm">
          Informações de contato e localização da sede da Prefeitura Municipal
        </p>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm flex flex-col lg:flex-row">
        
        {/* Informações de Contato (Esquerda) */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-8 uppercase tracking-wide">
            Prefeitura Municipal de Chã Grande
          </h3>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                <i className="fa-solid fa-location-dot text-[#1351B4]"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wide text-slate-800 mb-1">Endereço Sede</h4>
                <p className="text-slate-600 text-sm">Av. São José, 101 - Centro<br/>Chã Grande - PE, CEP: 55636-000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                <i className="fa-regular fa-clock text-[#1351B4]"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wide text-slate-800 mb-1">Horário de Funcionamento</h4>
                <p className="text-slate-600 text-sm">Segunda a Sexta-feira<br/>Das 07:00 às 13:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                <i className="fa-solid fa-phone text-[#1351B4]"></i>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wide text-slate-800 mb-1">Telefone / Ouvidoria</h4>
                <p className="text-slate-600 text-sm">(81) 3537-1140<br/>ouvidoria@chagrande.pe.gov.br</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa (Direita) */}
        <div className="w-full lg:w-1/2 min-h-[400px] bg-slate-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15797.77977054238!2d-35.46736235128006!3d-8.258414440263622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aa5e20d1edcf29%3A0xe54d6349d95cf10f!2sPrefeitura%20Municipal%20de%20Ch%C3%A3%20Grande!5e0!3m2!1spt-BR!2sbr!4v1714571960241!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de localização da prefeitura"
            className="w-full h-full grayscale-[10%]"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
