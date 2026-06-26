import React from 'react';

export default function LocationWidgetV7() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-24">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Info Direção e Contatos */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-[#1351B4] uppercase tracking-widest mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Sede da Prefeitura
          </span>
          
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
            Estamos de <br/>portas abertas.
          </h2>

          <div className="flex flex-col gap-5">
            {/* Endereço */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-[#1351B4]/20 group">
              <div className="w-12 h-12 rounded-xl bg-[#1351B4]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1351B4] transition-colors">
                <svg className="w-6 h-6 text-[#1351B4] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Endereço</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Av. São José, 101 - Centro<br/>Chã Grande - PE, 55636-000</p>
              </div>
            </div>

            {/* Horário */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-[#168821]/20 group">
              <div className="w-12 h-12 rounded-xl bg-[#168821]/10 flex items-center justify-center shrink-0 group-hover:bg-[#168821] transition-colors">
                <svg className="w-6 h-6 text-[#168821] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Horário de Atendimento</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Segunda a Sexta-feira<br/>07h00 às 13h00</p>
              </div>
            </div>
            
          </div>
        </div>

        {/* Mapa */}
        <div className="w-full h-[400px] lg:h-[500px] relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200 group">
          <iframe
            src="https://maps.google.com/maps?q=Prefeitura%20Municipal%20de%20Ch%C3%A3%20Grande&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 w-full h-full border-0 filter opacity-90 transition-all duration-700 group-hover:filter-none group-hover:opacity-100"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
      
    </section>
  );
}
