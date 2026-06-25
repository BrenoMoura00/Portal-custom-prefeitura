'use client';

import React from 'react';

export default function FooterV3() {
  const contatos = {
    cnpj: "11.049.806/0001-90",
    endereco: "Avenida São José, nº 101, Centro",
    cidade: "Chã Grande - PE, 55.636-000",
    telefone: "(81) 3537-1140",
    email: "contato@chagrande.pe.gov.br",
    horario: "Segunda à Sexta, das 07h às 13h"
  };

  const linksCidadao = [
    { label: "Portal do Contribuinte", url: "#" },
    { label: "Emissão de Nota Fiscal", url: "#" },
    { label: "Diário Oficial", url: "#" },
    { label: "Portal da Transparência", url: "#" },
    { label: "Ouvidoria (e-SIC)", url: "#" }
  ];

  const linksSecretarias = [
    { label: "Saúde", url: "#" },
    { label: "Educação", url: "#" },
    { label: "Obras e Infraestrutura", url: "#" },
    { label: "Desenvolvimento Social", url: "#" },
    { label: "Turismo e Cultura", url: "#" }
  ];

  const redesSociais = [
    { icone: "fab fa-instagram", url: "#", corHover: "hover:bg-[#E1306C]" },
    { icone: "fab fa-facebook-f", url: "#", corHover: "hover:bg-[#1877F2]" },
    { icone: "fab fa-youtube", url: "#", corHover: "hover:bg-[#FF0000]" },
    { icone: "fab fa-whatsapp", url: "#", corHover: "hover:bg-[#25D366]" }
  ];

  return (
    <footer className="bg-[#041525] text-slate-300 relative">
      
      {/* Linha com as Cores de Pernambuco (Idêntico ao Rodapé Oficial) */}
      <div className="w-full h-[6px] bg-[linear-gradient(to_right,#E03C31_0%,#E03C31_25%,#1E3A8A_25%,#1E3A8A_50%,#008A3E_50%,#008A3E_75%,#F2A900_75%,#F2A900_100%)]"></div>

      {/* Container Principal */}
      <div className="max-w-7xl mx-auto px-[5%] py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Coluna 1: Brasão e Contatos */}
          <div className="flex flex-col gap-6">
            <img 
              src="/assets/Logo%202.png" 
              alt="Brasão de Chã Grande" 
              className="max-w-[200px] mb-2 brightness-0 invert opacity-90"
            />
            <p className="text-sm font-semibold text-slate-400">
              CNPJ: {contatos.cnpj}
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-[#38BDF8] mt-1"></i>
                <span>{contatos.endereco}<br/>{contatos.cidade}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone-alt text-[#38BDF8]"></i>
                <a href={`tel:${contatos.telefone.replace(/\D/g, '')}`} className="hover:text-white transition-colors">{contatos.telefone}</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="far fa-envelope text-[#38BDF8]"></i>
                <a href={`mailto:${contatos.email}`} className="hover:text-white transition-colors">{contatos.email}</a>
              </li>
            </ul>
          </div>

          {/* Coluna 2: Acesso Rápido */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#38BDF8] inline-block rounded-full"></span> Acesso Rápido
            </h3>
            <ul className="flex flex-col gap-3">
              {linksCidadao.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="text-sm hover:text-[#38BDF8] hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group">
                    <i className="fas fa-chevron-right text-[10px] text-slate-600 group-hover:text-[#38BDF8]"></i> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Secretarias */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#38BDF8] inline-block rounded-full"></span> Secretarias
            </h3>
            <ul className="flex flex-col gap-3">
              {linksSecretarias.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="text-sm hover:text-[#38BDF8] hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group">
                    <i className="fas fa-chevron-right text-[10px] text-slate-600 group-hover:text-[#38BDF8]"></i> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Atendimento e Redes */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-[#38BDF8] inline-block rounded-full"></span> Atendimento
              </h3>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-start gap-3">
                <i className="far fa-clock text-[#38BDF8] text-xl mt-0.5"></i>
                <p className="text-sm">
                  {contatos.horario}
                  <span className="block text-xs text-slate-500 mt-1">Exceto feriados nacionais e municipais.</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Redes Sociais</h3>
              <div className="flex gap-3">
                {redesSociais.map((rede, idx) => (
                  <a 
                    key={idx} 
                    href={rede.url} 
                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 ${rede.corHover}`}
                  >
                    <i className={rede.icone}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Faixa Inferior (Copyright) */}
      <div className="bg-[#020D18] py-6 px-[5%] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Prefeitura Municipal de Chã Grande. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              Desenvolvido pela <span className="font-bold text-white">Equipe de TI</span>
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
