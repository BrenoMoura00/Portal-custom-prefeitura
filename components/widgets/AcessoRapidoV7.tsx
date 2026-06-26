import React from 'react';

const categorias = [
  {
    titulo: 'Para o Cidadão',
    cor: '#1351B4', // Azul Oficial
    corBg: 'rgba(19, 81, 180, 0.08)',
    servicos: [
      { nome: 'IPTU e Taxas', desc: '2ª via, consulta e parcelamento', icone: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
      { nome: 'Agendamento Saúde', desc: 'Consultas e exames na rede pública', icone: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
      { nome: 'Matrícula Escolar', desc: 'Vagas na rede municipal de ensino', icone: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
      { nome: 'Ouvidoria e e-SIC', desc: 'Reclamações, sugestões e denúncias', icone: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    ]
  },
  {
    titulo: 'Para Empresas',
    cor: '#009B3A', // Verde Oficial
    corBg: 'rgba(0, 155, 58, 0.08)',
    servicos: [
      { nome: 'NFS-e', desc: 'Emissão de Nota Fiscal Eletrônica', icone: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
      { nome: 'Alvará e Licenças', desc: 'Funcionamento, vigilância e obras', icone: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
      { nome: 'Licitações', desc: 'Editais, pregões e contratos vigentes', icone: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
      { nome: 'ISS e Tributos', desc: 'Guias, consultas e certidões', icone: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
    ]
  },
  {
    titulo: 'Para Servidores',
    cor: '#E30613', // Vermelho Oficial PE
    corBg: 'rgba(227, 6, 19, 0.08)',
    servicos: [
      { nome: 'Contracheque', desc: 'Holerite e informe de rendimentos', icone: 'M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z' },
      { nome: 'Portal do Servidor', desc: 'Área restrita e requerimentos', icone: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
      { nome: 'Diário Oficial', desc: 'Publicações, portarias e decretos', icone: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
      { nome: 'Concursos Públicos', desc: 'Editais abertos e resultados', icone: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    ]
  }
];

export default function AcessoRapidoV7() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto w-full">

        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-[#1351B4] font-bold tracking-widest text-[11px] uppercase mb-2 block">Carta de Serviços</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">O que você precisa?</h2>
            <p className="text-slate-500 mt-2 max-w-lg">Navegue pelos serviços organizados por perfil de acesso.</p>
          </div>
          <a href="#" className="text-sm font-bold text-[#1351B4] hover:text-[#0C326F] transition-colors border border-slate-300 bg-white px-5 py-2.5 rounded-xl hover:bg-slate-50 shadow-sm whitespace-nowrap inline-flex items-center gap-2">
            Ver todos os serviços →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categorias.map((cat) => (
            <div key={cat.titulo} className="flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1.5 h-8 rounded-full" style={{ backgroundColor: cat.cor }}></div>
                <h3 className="text-lg font-bold text-slate-800">{cat.titulo}</h3>
              </div>

              <div className="flex flex-col gap-3">
                {cat.servicos.map((srv) => (
                  <a
                    key={srv.nome}
                    href="#"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md shadow-sm transition-all group"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: cat.corBg }}
                    >
                      <svg className="w-5 h-5" style={{ color: cat.cor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={srv.icone} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-800 group-hover:text-slate-900 transition-colors">{srv.nome}</p>
                      <p className="text-xs text-slate-500 truncate">{srv.desc}</p>
                    </div>
                    <svg className="w-4 h-4 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
