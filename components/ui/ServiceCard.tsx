interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export default function ServiceCard({ title, description, icon, href = '#' }: ServiceCardProps) {
  return (
    <a 
      href={href} 
      className="group flex items-center gap-[15px] bg-white/5 p-[20px] rounded-[16px] border border-white/10 text-white no-underline transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
    >
      <div className="w-[45px] h-[45px] bg-white/10 text-white rounded-[12px] flex items-center justify-center text-[1.3rem] shrink-0 transition-all duration-300 group-hover:bg-[#005FA3]">
        <i className={icon}></i>
      </div>
      <div className="flex flex-col">
        <h4 className="text-[0.95rem] font-bold mb-[4px] text-white leading-[1.3]">{title}</h4>
        <p className="text-[0.8rem] text-white/70 m-0">{description}</p>
      </div>
    </a>
  );
}