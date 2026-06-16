export default function SpecialProgramsWidget() {
  const programs = [
    {
      id: 1,
      title: 'Radar da Transparência',
      description: 'Acompanhe índices e dados abertos.',
      icon: 'fas fa-satellite-dish',
      color: 'from-blue-500 to-blue-700',
      bgLight: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      id: 2,
      title: 'Editais Culturais',
      description: 'PNAB e Aldir Blanc: incentivo à cultura local.',
      icon: 'fas fa-masks-theater',
      color: 'from-emerald-500 to-emerald-700',
      bgLight: 'bg-emerald-50',
      textColor: 'text-emerald-700',
    },
    {
      id: 3,
      title: 'Editais Assistenciais',
      description: 'Programas de moradia, auxílios e benefícios sociais.',
      icon: 'fas fa-hand-holding-heart',
      color: 'from-rose-500 to-rose-700',
      bgLight: 'bg-rose-50',
      textColor: 'text-rose-700',
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-[5%] mb-[60px]">
      <div className="flex items-center gap-[12px] mb-[24px]">
        <span className="relative flex h-[12px] w-[12px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005FA3] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-[12px] w-[12px] bg-[#005FA3]"></span>
        </span>
        <h3 className="text-[1.8rem] font-extrabold text-[#0A2540] tracking-[-0.5px] m-0">Programas Especiais</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {programs.map((program) => (
          <div 
            key={program.id}
            className="group relative bg-white rounded-[24px] p-[32px] border border-[#E2E8F0] shadow-[0_4px_20px_rgba(10,37,64,0.03)] hover:shadow-[0_12px_30px_rgba(10,37,64,0.08)] hover:-translate-y-[4px] transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[220px]"
          >
            <div className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r ${program.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
            
            <i className={`${program.icon} absolute -bottom-[10px] -right-[10px] text-[7rem] text-slate-100/50 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 z-0 pointer-events-none`}></i>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-[16px] mb-[16px]">
                <div className={`w-[52px] h-[52px] rounded-[16px] ${program.bgLight} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${program.icon} text-[1.4rem] ${program.textColor}`}></i>
                </div>
                <h4 className="text-[1.2rem] font-extrabold text-[#0A2540] leading-[1.2]">
                  {program.title}
                </h4>
              </div>
              
              <p className="text-[#64748B] font-medium text-[0.9rem] leading-[1.5] mb-[24px] flex-1">
                {program.description}
              </p>

              <a href="#" className={`mt-auto inline-flex items-center w-fit gap-[8px] font-extrabold text-[0.9rem] ${program.textColor} hover:gap-[12px] transition-all`}>
                Acessar <i className="fas fa-arrow-right text-[0.8rem]"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}