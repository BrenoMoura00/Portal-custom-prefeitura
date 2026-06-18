export default function HeroSearch() {
  return (
    <section className="relative z-0 overflow-hidden py-[100px] md:py-[140px] text-center px-4 bg-[#F8FAFC] before:absolute before:inset-0 before:-z-20 before:bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=80')] before:bg-cover before:bg-center before:opacity-[0.1] before:mix-blend-multiply after:absolute after:bottom-0 after:inset-x-0 after:h-[150px] after:bg-gradient-to-t after:from-[#F8FAFC] after:to-transparent after:-z-10">
      <div className="max-w-[850px] mx-auto">
        <span className="font-bold text-[#005FA3] uppercase tracking-[1.5px] text-[0.9rem]">
          Olá! Bem-vindo ao portal de Chã Grande.
        </span>
        <h1 className="text-[2.5rem] md:text-[3rem] font-extrabold leading-[1.15] my-[15px] mb-[35px] text-[#0A2540] tracking-[-0.5px]">
          O que você precisa <span className="text-[#005FA3]">resolver hoje?</span>
        </h1>

        <div className="flex flex-col md:flex-row bg-white p-[8px] md:pl-[25px] rounded-[16px] md:rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] items-center border border-black/5 focus-within:shadow-[0_20px_40px_-10px_rgba(0,95,163,0.12)] focus-within:-translate-y-[2px] focus-within:border-[#005FA3]/25 transition-all gap-[10px] md:gap-0">
          <i className="fas fa-search text-[1.2rem] text-[#64748B] hidden md:block"></i>
          <input
            type="text"
            id="search-input"
            placeholder="Ex: Emitir Nota Fiscal, Contracheque, Diário Oficial..."
            className="flex-1 border-none outline-none text-[1.1rem] px-[15px] py-[10px] bg-transparent text-[#2C3E50] w-full text-center md:text-left"
          />
          <button className="w-full md:w-auto bg-[#005FA3] text-white border-none py-[14px] px-[35px] rounded-full font-semibold text-[1rem] cursor-pointer hover:bg-[#004b82] transition-colors whitespace-nowrap">
            Buscar
          </button>
        </div>

        <div className="mt-[30px] flex gap-[10px] justify-center flex-wrap items-center">
          <span className="text-[0.9rem] text-[#64748B]">Mais buscados:</span>
          <a href="#" className="bg-white py-[8px] px-[18px] rounded-full no-underline text-[#2C3E50] text-[0.9rem] border border-[#E2E8F0] flex items-center gap-[8px] font-medium shadow-[0_2px_5px_rgba(0,0,0,0.02)] hover:bg-[#F4F7F9] hover:border-[#005FA3] hover:text-[#005FA3] transition-all group">
            <i className="fas fa-file-invoice-dollar text-[#005FA3] group-hover:text-[#005FA3]"></i> IPTU 2026
          </a>
          <a href="#" className="bg-white py-[8px] px-[18px] rounded-full no-underline text-[#2C3E50] text-[0.9rem] border border-[#E2E8F0] flex items-center gap-[8px] font-medium shadow-[0_2px_5px_rgba(0,0,0,0.02)] hover:bg-[#F4F7F9] hover:border-[#005FA3] hover:text-[#005FA3] transition-all group">
            <i className="fas fa-laptop-medical text-[#005FA3] group-hover:text-[#005FA3]"></i> Marcar Consulta
          </a>
          <a href="#" className="bg-white py-[8px] px-[18px] rounded-full no-underline text-[#2C3E50] text-[0.9rem] border border-[#E2E8F0] flex items-center gap-[8px] font-medium shadow-[0_2px_5px_rgba(0,0,0,0.02)] hover:bg-[#F4F7F9] hover:border-[#005FA3] hover:text-[#005FA3] transition-all group">
            <i className="fas fa-chalkboard-teacher text-[#005FA3] group-hover:text-[#005FA3]"></i> Vagas Escolas
          </a>
          <a href="#" className="bg-white py-[8px] px-[18px] rounded-full no-underline text-[#2C3E50] text-[0.9rem] border border-[#E2E8F0] flex items-center gap-[8px] font-medium shadow-[0_2px_5px_rgba(0,0,0,0.02)] hover:bg-[#F4F7F9] hover:border-[#005FA3] hover:text-[#005FA3] transition-all group">
            <i className="fas fa-money-check-alt text-[#005FA3] group-hover:text-[#005FA3]"></i> Contracheque
          </a>
        </div>
      </div>
    </section>
  );
}