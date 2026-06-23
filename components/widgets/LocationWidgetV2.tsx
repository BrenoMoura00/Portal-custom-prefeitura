import React from 'react';

export default function LocationWidgetV2() {
  return (
    <div className="bg-white rounded-[24px] border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
        
        <div className="p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100">
          <div className="w-12 h-12 bg-[#005FA3] rounded-2xl flex items-center justify-center mb-6 shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase mb-2 block">Nossa Localização</span>
          <h3 className="text-2xl font-black text-[#0A2540] mb-2">Sede da Prefeitura</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            A Prefeitura de Chã Grande está de portas abertas para atender você. Confira nosso endereço, horários e canais de contato.
          </p>

          <div className="space-y-5">
            {[
              {
                icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                title: 'Endereço',
                detail: 'Av. São José, 101 - Centro\nChã Grande - PE, 55636-000',
                color: 'text-[#005FA3]',
              },
              {
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Horário de Atendimento',
                detail: 'Segunda a Sexta-feira\n08:00 às 13:00',
                color: 'text-amber-500',
              },
              {
                icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                title: 'Canais de Contato',
                detail: '(81) 3537-1140\nouvidoria@chagrande.pe.gov.br',
                color: 'text-[#005FA3]',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className={`w-4 h-4 ${item.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#005FA3] uppercase tracking-wider mb-0.5">{item.title}</p>
                  <p className="text-sm font-semibold text-gray-700 whitespace-pre-line">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[400px] lg:min-h-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.638781702582!2d-35.45391302509177!3d-8.243503191811803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab67f5647710c7%3A0x33b8a95689456578!2sPrefeitura%20Municipal%20de%20Ch%C3%A3%20Grande!5e0!3m2!1spt-BR!2sbr!4v1718629555000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full grayscale-[15%] hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
