import Link from 'next/link';

export default function HubPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-[#0A2540] rounded-b-[50px] sm:rounded-b-[100px]"></div>
      
      <div className="text-center mb-16 mt-10 relative z-10">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Portal da Prefeitura</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">Escolha qual versão de layout você deseja visualizar e testar.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl relative z-10">
        
        {/* Card V1 */}
        <Link href="/v1" className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-[#005FA3]">
          <div className="w-20 h-20 rounded-2xl bg-blue-50 text-[#005FA3] flex items-center justify-center mb-6 group-hover:bg-[#005FA3] group-hover:text-white transition-colors duration-300">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#0A2540] mb-1">V1</h2>
          <p className="text-gray-500 text-sm font-medium">Portal da Prefeitura Versão 1</p>
          <div className="mt-8 text-[#005FA3] font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
            Acessar <span className="text-xl">&rarr;</span>
          </div>
        </Link>

        {/* Card V2 */}
        <Link href="/v2" className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-[#005FA3]">
          <div className="w-20 h-20 rounded-2xl bg-blue-50 text-[#005FA3] flex items-center justify-center mb-6 group-hover:bg-[#005FA3] group-hover:text-white transition-colors duration-300 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="w-10 h-10 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#0A2540] mb-1">V2</h2>
          <p className="text-gray-500 text-sm font-medium">Portal da Prefeitura Versão 2</p>
          <div className="mt-8 text-[#005FA3] font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
            Acessar <span className="text-xl">&rarr;</span>
          </div>
        </Link>

        {/* Card V3 */}
        <Link href="/v3" className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-[#005FA3]">
          <div className="w-20 h-20 rounded-2xl bg-blue-50 text-[#005FA3] flex items-center justify-center mb-6 group-hover:bg-[#005FA3] group-hover:text-white transition-colors duration-300">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#0A2540] mb-1">V3</h2>
          <p className="text-gray-500 text-sm font-medium">Portal da Prefeitura Versão 3</p>
          <div className="mt-8 text-[#005FA3] font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
            Acessar <span className="text-xl">&rarr;</span>
          </div>
        </Link>

        {/* Card V4 */}
        <Link href="/v4" className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-blue-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10">
            <svg className="w-10 h-10 animate-[pulse_3s_ease-in-out_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-slate-800 mb-1 relative z-10">V4</h2>
          <p className="text-slate-500 text-sm relative z-10 font-medium">Portal da Prefeitura Versão 4</p>
          <div className="mt-8 text-blue-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform relative z-10">
            Acessar <span className="text-xl">&rarr;</span>
          </div>
        </Link>

      </div>
    </div>
  );
}