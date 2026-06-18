export default function QuickLinksWidget() {
  const links = [
    { name: 'Saúde Digital', icon: 'fas fa-laptop-medical' },
    { name: 'Educação', icon: 'fas fa-graduation-cap' },
    { name: 'Obras', icon: 'fas fa-hard-hat' },
    { name: 'Meio Ambiente', icon: 'fas fa-leaf' },
    { name: 'Ação Social', icon: 'fas fa-hands-helping' },
    { name: 'Turismo', icon: 'fas fa-camera' },
    { name: 'Esportes', icon: 'fas fa-running' },
    { name: 'Transporte', icon: 'fas fa-bus' },
    { name: 'Agricultura', icon: 'fas fa-tractor' },
  ];

  return (
    <div className="bg-white rounded-[24px] p-[28px] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(10,37,64,0.04)]">
      <div className="flex items-center gap-[12px] mb-[24px]">
        <i className="fas fa-link text-[1.4rem] bg-gradient-to-br from-[#005FA3] to-[#0A2540] bg-clip-text text-transparent"></i>
        <h4 className="text-[1.25rem] font-extrabold text-[#0A2540]">Acesso Rápido</h4>
      </div>
      
      <div className="max-h-[340px] overflow-y-auto pr-[8px] -mr-[8px] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#0A2540]/15 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#005FA3]/30 transition-colors">
        <div className="grid grid-cols-2 gap-[12px] pb-[4px]">
          {links.map((link) => (
            <a 
              key={link.name} 
              href="#" 
              className="flex flex-col items-center justify-center gap-[12px] bg-[#F4F7F9] p-[20px_12px] rounded-[18px] border border-transparent hover:bg-white hover:border-[#005FA3]/20 hover:shadow-[0_10px_25px_rgba(0,95,163,0.08)] hover:-translate-y-[4px] transition-all duration-300 text-center group"
            >
              <i className={`${link.icon} text-[1.8rem] text-[#005FA3] transition-transform duration-300 group-hover:scale-[1.15] group-hover:-translate-y-[2px]`}></i>
              <span className="text-[0.8rem] font-bold text-[#2C3E50]">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}