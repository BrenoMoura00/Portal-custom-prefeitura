export default function SealsWidget() {
  const seals = [
    { name: 'Selo UNICEF', icon: 'fas fa-child' },
    { name: 'Prefeito Empreendedor', icon: 'fas fa-award' },
    { name: 'Município VerdeAzul', icon: 'fas fa-leaf' },
    { name: 'Selo Educação', icon: 'fas fa-graduation-cap' },
    { name: 'Selo Segurança', icon: 'fas fa-shield-alt' },
  ];

  const displaySeals = [...seals, ...seals, ...seals];

  return (
    <section className="mb-[60px] mt-9 text-center relative overflow-hidden">
      <h3 className="text-[1.4rem] font-bold text-[#0A2540] mb-[30px]">
        Reconhecimentos e Selos Municipais
      </h3>

      <div className="relative w-full mt-[30px] overflow-hidden py-[10px] group
        before:absolute before:content-[''] before:top-0 before:left-0 before:w-[150px] before:h-full before:bg-gradient-to-r before:from-[#F4F7F9] before:to-transparent before:z-10 before:pointer-events-none
        after:absolute after:content-[''] after:top-0 after:right-0 after:w-[150px] after:h-full after:bg-gradient-to-l after:from-[#F4F7F9] after:to-transparent after:z-10 after:pointer-events-none
      ">
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scrollSeals {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-33.33% - 16.66px)); }
          }
          .animate-scrollSeals {
            animation: scrollSeals 25s linear infinite;
          }
          .group:hover .animate-scrollSeals {
            animation-play-state: paused;
          }
        `}} />

        <div className="flex gap-[50px] w-max animate-scrollSeals">
          {displaySeals.map((seal, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-[10px] text-[#2C3E50] font-semibold text-[0.9rem] min-w-[120px] cursor-pointer transition-transform duration-300 hover:-translate-y-[5px] group/item"
            >
              <div className="w-[90px] h-[90px] rounded-full bg-white text-[#005FA3] flex items-center justify-center text-[2.5rem] shadow-[0_4px_15px_rgba(0,0,0,0.06)] border-[2px] border-[#F1F5F9] transition-all duration-300 group-hover/item:shadow-[0_8px_25px_rgba(0,95,163,0.15)] group-hover/item:border-[#005FA3]">
                <i className={seal.icon}></i>
              </div>
              <span>{seal.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}