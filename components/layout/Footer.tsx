'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/v3' || pathname === '/v4' || pathname === '/') {
    return null;
  }

  const infoPrefeitura = {
    cnpj: "11.049.806/0001-90",
    endereco: "Avenida São José, nº 101, Centro - CEP: 55.636-000",
    cidade: "Chã Grande - PE",
    email: "administracao@chagrande.pe.gov.br",
    telefone: "(81) 3537-1140",
    horario: "Segunda à Sexta, das 07:00hs às 13:00hs (exceto feriados)",
    anoCopyright: "2026"
  };

  const redesSociais = [
    { nome: "YouTube", icone: "fab fa-youtube", url: "#" },
    { nome: "Facebook", icone: "fab fa-facebook-f", url: "#" },
    { nome: "Instagram", icone: "fab fa-instagram", url: "#" }
  ];

  const linksUteis = [
    { titulo: "Diário Oficial", url: "#" },
    { titulo: "Licitações", url: "#" },
    { titulo: "Fale Conosco", url: "#" }
  ];

  return (
    <footer className="bg-[#0A2540] text-white relative mt-[60px] text-[0.95rem]">
      <div className="w-full h-[6px] bg-[linear-gradient(to_right,#E03C31_0%,#E03C31_25%,#1E3A8A_25%,#1E3A8A_50%,#008A3E_50%,#008A3E_75%,#F2A900_75%,#F2A900_100%)]"></div>
      
      <div className="max-w-[1400px] mx-auto py-[50px] px-[5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] lg:gap-[40px] text-center sm:text-left">
        
        <div className="flex flex-col items-center sm:items-start">
          <img 
            src="/assets/Logo%202.png" 
            alt="Prefeitura" 
            className="max-w-[220px] mb-[15px]"
          />
          <p className="font-semibold text-[1rem] text-[#E2E8F0]">
            CNPJ: {infoPrefeitura.cnpj}
          </p>
        </div>

        <div>
          <h4 className="text-[1.2rem] mb-[20px] text-[#00A3FF] relative pb-[10px] after:content-[''] after:absolute after:left-1/2 sm:after:left-0 after:-translate-x-1/2 sm:after:translate-x-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-[#00A3FF]">
            Endereço
          </h4>
          <ul className="list-none flex flex-col gap-[15px] p-0 m-0">
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-[10px] leading-[1.4]">
              <i className="fas fa-map-marker-alt text-[#00A3FF] text-[1.2rem] mt-[3px]"></i> 
              <span>{infoPrefeitura.endereco}</span>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-[10px] leading-[1.4]">
              <i className="fas fa-map text-[#00A3FF] text-[1.2rem] mt-[3px]"></i> 
              <span>{infoPrefeitura.cidade}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[1.2rem] mb-[20px] text-[#00A3FF] relative pb-[10px] after:content-[''] after:absolute after:left-1/2 sm:after:left-0 after:-translate-x-1/2 sm:after:translate-x-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-[#00A3FF]">
            Atendimento
          </h4>
          <ul className="list-none flex flex-col gap-[15px] p-0 m-0">
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-[10px] leading-[1.4]">
              <i className="fas fa-envelope text-[#00A3FF] text-[1.2rem] mt-[3px]"></i> 
              <a href={`mailto:${infoPrefeitura.email}`} className="text-white no-underline hover:text-[#00A3FF] hover:underline transition-colors">
                {infoPrefeitura.email}
              </a>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-[10px] leading-[1.4]">
              <i className="fas fa-phone-alt text-[#00A3FF] text-[1.2rem] mt-[3px]"></i> 
              <a href={`tel:${infoPrefeitura.telefone.replace(/\D/g, '')}`} className="text-white no-underline hover:text-[#00A3FF] hover:underline transition-colors">
                {infoPrefeitura.telefone}
              </a>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-[10px] leading-[1.4]">
              <i className="fas fa-clock text-[#00A3FF] text-[1.2rem] mt-[3px]"></i> 
              <span>{infoPrefeitura.horario}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[1.2rem] mb-[20px] text-[#00A3FF] relative pb-[10px] after:content-[''] after:absolute after:left-1/2 sm:after:left-0 after:-translate-x-1/2 sm:after:translate-x-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-[#00A3FF]">
            Redes Sociais
          </h4>
          <div className="flex gap-[15px] justify-center sm:justify-start">
            {redesSociais.map((rede) => (
              <a key={rede.nome} href={rede.url} aria-label={rede.nome} className="flex items-center justify-center w-[40px] h-[40px] bg-white/10 text-white rounded-full no-underline text-[1.2rem] hover:bg-[#00A3FF] hover:-translate-y-[3px] transition-all duration-300">
                <i className={rede.icone}></i>
              </a>
            ))}
          </div>
          
          <h4 className="text-[1.2rem] mb-[20px] mt-[30px] text-[#00A3FF] relative pb-[10px] after:content-[''] after:absolute after:left-1/2 sm:after:left-0 after:-translate-x-1/2 sm:after:translate-x-0 after:bottom-0 after:w-[40px] after:h-[2px] after:bg-[#00A3FF]">
            Links Úteis
          </h4>
          <ul className="list-none flex flex-col gap-[10px] p-0 m-0">
            {linksUteis.map((link) => (
              <li key={link.titulo}>
                <a href={link.url} className="text-[#CBD5E1] no-underline flex items-center justify-center sm:justify-start gap-[5px] hover:text-[#00A3FF] hover:translate-x-[5px] transition-all duration-300 group">
                  <i className="fas fa-angle-right text-[0.8rem] text-[#00A3FF] group-hover:text-[#00A3FF]"></i> {link.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-[#061626] text-center py-[15px] px-[5%] text-[0.85rem] text-[#94A3B8]">
        <p className="m-0">© Copyright {infoPrefeitura.anoCopyright} Prefeitura Municipal de Chã Grande | Todos os direitos reservados</p>
      </div>
    </footer>
  );
}