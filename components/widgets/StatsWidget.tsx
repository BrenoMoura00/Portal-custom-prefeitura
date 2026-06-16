export default function StatsWidget() {
  const stats = [
    { label: 'População', value: '45.230', icon: 'fas fa-users' },
    { label: 'Escolas', value: '32', icon: 'fas fa-school' },
    { label: 'Unidades de Saúde', value: '14', icon: 'fas fa-hospital' },
    { label: 'Área Territorial', value: '254km²', icon: 'fas fa-map' },
  ];

  return (
    <div className="flex-1 flex flex-col justify-center bg-white rounded-[24px] p-[28px] border border-[#E2E8F0] shadow-[0_8px_24px_rgba(10,37,64,0.04)]">
      <div className="flex items-center gap-[12px] mb-[24px]">
        <i className="fas fa-chart-pie text-[1.4rem] text-[#005FA3]"></i>
        <h4 className="text-[1.25rem] font-extrabold text-[#0A2540]">Município em Números</h4>
      </div>

      <div className="grid grid-cols-2 gap-[16px]">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#F8FAFC] p-[20px] rounded-[20px] border border-[#F1F5F9] transition-all hover:bg-[#EFF6FF] hover:border-[#BFDBFE]">
            <i className={`${stat.icon} text-[#005FA3] text-[1.2rem] mb-[12px] block`}></i>
            <span className="text-[1.5rem] font-extrabold text-[#0A2540] block leading-[1]">{stat.value}</span>
            <span className="text-[0.8rem] font-bold text-[#64748B] uppercase tracking-[0.5px]">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}