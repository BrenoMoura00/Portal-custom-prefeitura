import React from 'react';

export default function LeisProjetosWidget() {
  return (
    <div className="bg-indigo-900 rounded-3xl p-8 relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-800 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-indigo-500 opacity-20 blur-2xl"></div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-8">
          <span className="text-indigo-300 font-semibold tracking-wider text-sm uppercase mb-2 block">Transparência</span>
          <h2 className="text-3xl font-bold mb-4">Leis e Projetos</h2>
          <p className="text-indigo-100 text-sm max-w-sm">
            Consulte a legislação municipal, projetos de lei em tramitação e as leis já sancionadas pelo executivo.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer group">
            <div className="bg-indigo-500/30 p-3 rounded-lg text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <div className="flex-1">
              <h4 className="font-bold">Leis Municipais</h4>
              <p className="text-xs text-indigo-200">Acervo completo de leis ordinárias</p>
            </div>
            <svg className="w-5 h-5 text-indigo-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer group">
            <div className="bg-indigo-500/30 p-3 rounded-lg text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
            </div>
            <div className="flex-1">
              <h4 className="font-bold">Projetos em Tramitação</h4>
              <p className="text-xs text-indigo-200">Acompanhe as propostas na Casa</p>
            </div>
            <svg className="w-5 h-5 text-indigo-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
          
          <div className="mt-4">
            <div className="relative">
              <input type="text" placeholder="Buscar por número ou palavra-chave..." className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 rounded-md hover:bg-indigo-500 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
