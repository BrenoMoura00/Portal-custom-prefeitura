import React from 'react';

export default function LocationWidgetV6() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Atendimento ao Cidadão</span>
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Nossa Localização</h2>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row">
          
          <div className="lg:w-2/5 p-10 lg:p-12 flex flex-col justify-center bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-200/60">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Sede da Prefeitura</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-10">
              Estamos de portas abertas para atender você. Confira nosso endereço, horários de funcionamento e canais de contato oficiais.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Endereço</p>
                  <p className="text-base font-semibold text-slate-800">Av. São José, 101 - Centro<br/>Chã Grande - PE, 55636-000</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Horário de Atendimento</p>
                  <p className="text-base font-semibold text-slate-800">Segunda a Sexta-feira<br/>08:00 às 13:00</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Canais de Contato</p>
                  <p className="text-base font-semibold text-slate-800">(81) 3537-1140<br/>contato@chagrande.pe.gov.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 min-h-[400px] lg:min-h-0 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.638781702582!2d-35.45391302509177!3d-8.243503191811803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab67f5647710c7%3A0x33b8a95689456578!2sPrefeitura%20Municipal%20de%20Ch%C3%A3%20Grande!5e0!3m2!1spt-BR!2sbr!4v1718629555000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700 object-cover"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
