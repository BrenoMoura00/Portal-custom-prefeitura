import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function HubPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Background Decorativo */}
        <div className="absolute top-0 left-0 w-full h-[400px] bg-[#0A2540] rounded-b-[50px] sm:rounded-b-[100px]"></div>
        
        <div className="text-center mb-16 mt-10 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Portal da Prefeitura</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">Escolha qual versão de layout você deseja visualizar e testar.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 xl:gap-8 w-full max-w-[1400px] relative z-10">
          
          {/* Card V1 */}
          <Link href="/v1" className="w-full md:w-[260px] lg:w-[280px] group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-[#005FA3]">
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
          <Link href="/v2" className="w-full md:w-[260px] lg:w-[280px] group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-[#005FA3]">
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
          <Link href="/v3" className="w-full md:w-[260px] lg:w-[280px] group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-[#005FA3]">
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
          <Link href="/v4" className="w-full md:w-[260px] lg:w-[280px] group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-blue-500 relative overflow-hidden">
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

          {/* Card V5 */}
          <Link href="/v5" className="w-full md:w-[260px] lg:w-[280px] group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-emerald-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-slate-800 mb-1 relative z-10">V5</h2>
            <p className="text-slate-500 text-sm relative z-10 font-medium">Portal da Prefeitura Versão 5</p>
            <div className="mt-8 text-emerald-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform relative z-10">
              Acessar <span className="text-xl">&rarr;</span>
            </div>
          </Link>

          {/* Card V6 */}
          <Link href="/v6" className="w-full md:w-[260px] lg:w-[280px] group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-rose-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-slate-800 mb-1 relative z-10">V6</h2>
            <p className="text-slate-500 text-sm relative z-10 font-medium">Portal da Prefeitura Versão 6</p>
            <div className="mt-8 text-rose-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform relative z-10">
              Acessar <span className="text-xl">&rarr;</span>
            </div>
          </Link>

          {/* Card V7 */}
          <Link href="/v7" className="w-full md:w-[260px] lg:w-[280px] group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-violet-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-slate-800 mb-1 relative z-10">V7</h2>
            <p className="text-slate-500 text-sm relative z-10 font-medium">Portal da Prefeitura Versão 7</p>
            <div className="mt-8 text-violet-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform relative z-10">
              Acessar <span className="text-xl">&rarr;</span>
            </div>
          </Link>

          {/* Card V8 */}
          <Link href="/v8" className="w-full md:w-[260px] lg:w-[280px] group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-amber-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-slate-800 mb-1 relative z-10">V8</h2>
            <p className="text-slate-500 text-sm relative z-10 font-medium">Portal da Prefeitura Versão 8</p>
            <div className="mt-8 text-amber-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform relative z-10">
              Acessar <span className="text-xl">&rarr;</span>
            </div>
          </Link>

          {/* Card V9 */}
          <Link href="/v9" className="w-full md:w-[260px] lg:w-[280px] group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-cyan-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-slate-800 mb-1 relative z-10">V9</h2>
            <p className="text-slate-500 text-sm relative z-10 font-medium">Portal da Prefeitura Versão 9</p>
            <div className="mt-8 text-cyan-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform relative z-10">
              Acessar <span className="text-xl">&rarr;</span>
            </div>
          </Link>

          {/* Card V10 */}
          <Link href="/v10" className="w-full md:w-[260px] lg:w-[280px] group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-transparent hover:border-indigo-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-slate-800 mb-1 relative z-10">V10</h2>
            <p className="text-slate-500 text-sm relative z-10 font-medium">Portal da Prefeitura Versão 10</p>
            <div className="mt-8 text-indigo-600 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform relative z-10">
              Acessar <span className="text-xl">&rarr;</span>
            </div>
          </Link>

        </div>
      </div>
      <Footer />
    </>
  );
}