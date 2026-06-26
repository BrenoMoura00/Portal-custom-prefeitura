import React from 'react';

const categorias = [
  {
    titulo: 'Para o Cidadão',
    cor: 'from-blue-500 to-blue-700',
    corBg: 'bg-blue-500/10',
    corIcone: 'text-blue-600',
    hoverBorder: 'hover:border-blue-300',
    servicos: [
      { nome: 'IPTU e Taxas', desc: '2ª via, consulta e parcelamento', icone: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
      { nome: 'Agendamento Saúde', desc: 'Consultas e exames na rede pública', icone: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
      { nome: 'Matrícula Escolar', desc: 'Vagas na rede municipal de ensino', icone: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
      { nome: 'Ouvidoria e e-SIC', desc: 'Reclamações, sugestões e denúncias', icone: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    ]
  },
  {
    titulo: 'Para Empresas',
    cor: 'from-emerald-500 to-emerald-700',
    corBg: 'bg-emerald-500/10',
    corIcone: 'text-emerald-600',
    hoverBorder: 'hover:border-emerald-300',
    servicos: [
      { nome: 'NFS-e', desc: 'Emissão de Nota Fiscal Eletrônica', icone: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
      { nome: 'Alvará e Licenças', desc: 'Funcionamento, vigilância e obras', icone: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
      { nome: 'Licitações', desc: 'Editais, pregões e contratos vigentes', icone: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
      { nome: 'ISS e Tributos', desc: 'Guias, consultas e certidões', icone: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
    ]
  },
  {
    titulo: 'Para Servidores',
    cor: 'from-amber-500 to-amber-700',
    corBg: 'bg-amber-500/10',
    corIcone: 'text-amber-600',
    hoverBorder: 'hover:border-amber-300',
    servicos: [
      { nome: 'Contracheque', desc: 'Holerite e informe de rendimentos', icone: 'M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z' },
      { nome: 'Portal do Servidor', desc: 'Área restrita e requerimentos', icone: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
      { nome: 'Diário Oficial', desc: 'Publicações, portarias e decretos', icone: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
      { nome: 'Concursos Públicos', desc: 'Editais abertos e resultados', icone: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    ]
  }
];

export default function AcessoCidadaoV6() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-slate-700 uppercase">Carta de Serviços</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              O que você precisa?
            </h2>
            <p className="text-lg text-slate-500 mt-4 font-medium">
              Navegue pelos serviços organizados de acordo com o seu perfil de acesso.
            </p>
          </div>
          
          <a href="#" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Ver todos os serviços
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
          {categorias.map((cat) => (
            <div key={cat.titulo} className="flex flex-col relative group">
              
              <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm relative overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${cat.cor}`} />
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${cat.cor} text-white shadow-md`}>
                  {cat.titulo === 'Para o Cidadão' && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  )}
                  {cat.titulo === 'Para Empresas' && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  )}
                  {cat.titulo === 'Para Servidores' && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{cat.titulo}</h3>
              </div>

              <div className="flex flex-col gap-4">
                {cat.servicos.map((srv) => (
                  <a
                    key={srv.nome}
                    href="#"
                    className={`flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group/item hover:-translate-y-1 ${cat.hoverBorder}`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-3 ${cat.corBg} ${cat.corIcone}`}
                    >
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={srv.icone} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-bold text-slate-900 group-hover/item:text-slate-700 transition-colors">{srv.nome}</p>
                      <p className="text-sm text-slate-500 font-medium truncate mt-0.5">{srv.desc}</p>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 ${cat.corIcone}`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
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
