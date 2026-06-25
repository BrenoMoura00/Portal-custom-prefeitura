import React from 'react';

export default function FooterV5() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 py-16 relative overflow-hidden border-t-4 border-emerald-500">
      
      {/* Decoração sutil ao fundo */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grid Principal do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Logo e Sobre */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/30">
                CG
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">Prefeitura de</span>
                <span className="text-sm font-semibold text-emerald-400 tracking-widest uppercase">Chã Grande</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Trabalhando com transparência e inovação para oferecer uma qualidade de vida cada vez melhor para nossa gente.
            </p>
            {/* Redes Sociais */}
            <div className="flex items-center gap-3">
              {['instagram', 'facebook', 'youtube', 'twitter'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Acesso Rápido */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg">Acesso Rápido</h3>
            <ul className="flex flex-col gap-3">
              {['Diário Oficial', 'Portal da Transparência', 'Nota Fiscal Eletrônica', 'Contra Cheque', 'Licitações e Contratos', 'Decretos e Leis'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm flex items-center gap-2 group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-emerald-500 transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Secretarias */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg">Secretarias</h3>
            <ul className="flex flex-col gap-3">
              {['Saúde', 'Educação', 'Obras e Urbanismo', 'Desenvolvimento Social', 'Administração', 'Finanças'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm flex items-center gap-2 group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-emerald-500 transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato / Endereço */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg">Atendimento</h3>
            <div className="flex flex-col gap-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Av. São José, 101 - Centro<br/>Chã Grande - PE, 55636-000</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>(81) 3537-1140<br/>Segunda a Sexta, 08h às 13h</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>ouvidoria@chagrande.pe.gov.br</p>
              </div>
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Prefeitura Municipal de Chã Grande. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-emerald-400 transition-colors">Acessibilidade</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Mapa do Site</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
