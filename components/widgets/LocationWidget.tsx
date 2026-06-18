export default function LocationWidget() {
  return (
    <section className="py-[100px] bg-white px-4 border-t border-[#E2E8F0]/50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-[60px] items-center">
          
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-[8px] text-[#005FA3] font-extrabold uppercase tracking-[1.5px] text-[0.8rem] mb-[12px]">
              <i className="fas fa-map-marker-alt"></i> Nossa Localização
            </div>
            <h2 className="text-[2.5rem] font-extrabold text-[#0A2540] leading-[1.15] mb-[20px] tracking-[-0.5px]">
              Atendimento ao <span className="text-[#005FA3]">Cidadão</span>
            </h2>
            <p className="text-[#64748B] text-[1.05rem] leading-[1.6] mb-[35px]">
              A Prefeitura de Chã Grande está de portas abertas para atender você. Confira nosso endereço, horários de funcionamento e canais de comunicação diretos.
            </p>

            <div className="flex flex-col gap-[24px]">
              <div className="flex items-start gap-[16px] group">
                <div className="w-[50px] h-[50px] rounded-[12px] bg-[#F4F7F9] text-[#005FA3] flex items-center justify-center text-[1.2rem] shrink-0 border border-[#E2E8F0] group-hover:bg-[#005FA3] group-hover:text-white transition-colors">
                  <i className="fas fa-building"></i>
                </div>
                <div className="pt-[2px]">
                  <h4 className="text-[#0A2540] font-bold text-[1.1rem] mb-[4px]">Sede da Prefeitura</h4>
                  <p className="text-[#64748B] text-[0.95rem] leading-[1.5]">
                    Av. São José, 101 - Centro<br />
                    Chã Grande - PE, 55636-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[16px] group">
                <div className="w-[50px] h-[50px] rounded-[12px] bg-[#F4F7F9] text-[#005FA3] flex items-center justify-center text-[1.2rem] shrink-0 border border-[#E2E8F0] group-hover:bg-[#005FA3] group-hover:text-white transition-colors">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="pt-[2px]">
                  <h4 className="text-[#0A2540] font-bold text-[1.1rem] mb-[4px]">Horário de Atendimento</h4>
                  <p className="text-[#64748B] text-[0.95rem] leading-[1.5]">
                    Segunda a Sexta-feira<br />
                    08:00 às 13:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-[16px] group">
                <div className="w-[50px] h-[50px] rounded-[12px] bg-[#F4F7F9] text-[#005FA3] flex items-center justify-center text-[1.2rem] shrink-0 border border-[#E2E8F0] group-hover:bg-[#005FA3] group-hover:text-white transition-colors">
                  <i className="fas fa-headset"></i>
                </div>
                <div className="pt-[2px]">
                  <h4 className="text-[#0A2540] font-bold text-[1.1rem] mb-[4px]">Canais de Contato</h4>
                  <p className="text-[#64748B] text-[0.95rem] leading-[1.5]">
                    (81) 3537-1140<br />
                    ouvidoria@chagrande.pe.gov.br
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[550px] rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#E2E8F0]/80 relative group bg-[#F8FAFC]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.638781702582!2d-35.45391302509177!3d-8.243503191811803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab67f5647710c7%3A0x33b8a95689456578!2sPrefeitura%20Municipal%20de%20Ch%C3%A3%20Grande!5e0!3m2!1spt-BR!2sbr!4v1718629555000!5m2!1spt-BR!2sbr"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            ></iframe>
            <div className="absolute inset-0 border border-black/5 rounded-[16px] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}