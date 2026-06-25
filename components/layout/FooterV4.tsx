import React from 'react';

const contatos = {
  cnpj: '11.049.806/0001-90',
  endereco: 'Avenida São José, nº 101, Centro',
  cidade: 'Chã Grande - PE, 55.636-000',
  telefone: '(81) 3537-1140',
  email: 'contato@chagrande.pe.gov.br',
  horario: 'Segunda à Sexta, das 07h às 13h',
};

const redesSociais = [
  { nome: 'Instagram', icone: 'fab fa-instagram', url: '#', hover: 'hover:bg-[#E1306C]' },
  { nome: 'Facebook', icone: 'fab fa-facebook-f', url: '#', hover: 'hover:bg-[#1877F2]' },
  { nome: 'YouTube', icone: 'fab fa-youtube', url: '#', hover: 'hover:bg-[#FF0000]' },
  { nome: 'WhatsApp', icone: 'fab fa-whatsapp', url: '#', hover: 'hover:bg-[#25D366]' },
];

const colunas = [
  {
    titulo: 'Acesso Rápido',
    links: [
      'Portal do Contribuinte',
      'Emissão de Nota Fiscal',
      'Diário Oficial',
      'Portal da Transparência',
      'Ouvidoria (e-SIC)',
    ],
  },
  {
    titulo: 'Secretarias',
    links: [
      'Saúde',
      'Educação',
      'Obras e Infraestrutura',
      'Desenvolvimento Social',
      'Turismo e Cultura',
    ],
  },
  {
    titulo: 'Institucional',
    links: [
      'Prefeito e Vice',
      'Organograma',
      'Licitações e Contratos',
      'Concursos Públicos',
      'Legislação Municipal',
    ],
  },
];

export default function FooterV4() {
  return (
    <footer className="bg-[#0F1B2D] text-slate-300">
      <div className="w-full h-[6px] bg-[linear-gradient(to_right,#E03C31_0%,#E03C31_25%,#1E3A8A_25%,#1E3A8A_50%,#008A3E_50%,#008A3E_75%,#F2A900_75%,#F2A900_100%)]"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          <div className="lg:col-span-2 flex flex-col gap-6">
            <img
              src="/assets/Logo%202.png"
              alt="Brasão de Chã Grande"
              className="max-w-[180px] brightness-0 invert opacity-90"
            />
            <p className="text-xs font-semibold text-slate-500">CNPJ: {contatos.cnpj}</p>

            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /></svg>
                <span>{contatos.endereco}<br />{contatos.cidade}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href={`tel:${contatos.telefone.replace(/\D/g, '')}`} className="hover:text-white transition-colors">{contatos.telefone}</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href={`mailto:${contatos.email}`} className="hover:text-white transition-colors">{contatos.email}</a>
              </li>
            </ul>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-start gap-3 mt-2">
              <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-sm">
                {contatos.horario}
                <span className="block text-xs text-slate-500 mt-1">Exceto feriados nacionais e municipais.</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {colunas.map((col) => (
                <div key={col.titulo}>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-blue-400 inline-block rounded-full"></span>
                    {col.titulo}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
              <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-6 h-0.5 bg-blue-400 inline-block rounded-full"></span>
                  Redes Sociais
                </h3>
                <div className="flex items-center gap-3">
                  {redesSociais.map((rede) => (
                    <a
                      key={rede.nome}
                      href={rede.url}
                      className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 ${rede.hover}`}
                      aria-label={rede.nome}
                    >
                      <i className={rede.icone}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-[#080F1A] py-6 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Prefeitura Municipal de Chã Grande. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <a href="#" className="hover:text-white transition-colors">Acessibilidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
