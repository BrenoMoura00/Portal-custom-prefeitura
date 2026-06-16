export default function OuvidoriaWidget() {
  const options = [
    {
      id: 1,
      icon: 'fas fa-bullhorn',
      title: 'Fazer Denúncia',
      desc: 'Relate problemas ou irregularidades',
    },
    {
      id: 2,
      icon: 'fas fa-info-circle',
      title: 'Pedir Informação',
      desc: 'Acesso à informação pública (e-SIC)',
    },
    {
      id: 3,
      icon: 'fas fa-comment-dots',
      title: 'Elogio ou Sugestão',
      desc: 'Ajude-nos a melhorar os serviços',
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#0A2540] to-[#005FA3] rounded-[24px] p-[32px] lg:p-[48px] relative overflow-hidden shadow-[0_12px_30px_rgba(10,37,64,0.15)] mb-[32px]">
      <div className="absolute top-[-100px] right-[-50px] w-[300px] h-[300px] bg-white opacity-5 rounded-full blur-[40px] pointer-events-none"></div>
      <div className="absolute bottom-[-80px] left-[10%] w-[200px] h-[200px] bg-[#005FA3] opacity-50 rounded-full blur-[60px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-[40px] items-center justify-between">
        
        <div className="flex-1 text-white max-w-[500px]">
          <div className="inline-flex items-center gap-[8px] bg-white/10 px-[16px] py-[6px] rounded-full text-[0.8rem] font-extrabold uppercase tracking-[1px] mb-[16px] backdrop-blur-sm border border-white/10">
            <i className="fas fa-headset"></i> Atendimento ao Cidadão
          </div>
          <h2 className="text-[2.2rem] font-extrabold leading-[1.1] mb-[16px]">
            Ouvidoria e e-SIC
          </h2>
          <p className="text-white/80 text-[1rem] leading-[1.6] mb-[24px] font-medium">
            Sua voz é muito importante para nós. Utilize nossos canais oficiais para registrar suas demandas, solicitar dados públicos ou ajudar a melhorar nossa cidade.
          </p>
          <a href="#" className="inline-flex items-center gap-[12px] bg-white text-[#0A2540] px-[24px] py-[14px] rounded-[14px] font-extrabold hover:bg-[#F4F7F9] hover:scale-105 transition-all duration-300">
            Acessar Painel Completo <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-[16px]">
          {options.map((opt) => (
            <a 
              key={opt.id} 
              href="#" 
              className="group bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 backdrop-blur-md p-[24px] rounded-[20px] transition-all duration-300 flex flex-col gap-[16px] items-start hover:-translate-y-[4px]"
            >
              <div className="w-[48px] h-[48px] rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#0A2540] text-white transition-colors duration-300">
                <i className={`${opt.icon} text-[1.2rem]`}></i>
              </div>
              <div>
                <h4 className="text-white font-extrabold text-[1.1rem] mb-[4px]">
                  {opt.title}
                </h4>
                <p className="text-white/70 text-[0.85rem] font-medium leading-[1.4]">
                  {opt.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}