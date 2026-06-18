export default function AboutCityWidget() {
  const tags = [
    'História de Chã Grande', 'Turismo e Lazer', 'Feira Livre', 
    'Cultura e Eventos', 'Cachoeiras', 'Galeria de Ex-prefeitos', 
    'Dados Demográficos', 'Telefones de Emergência', 'Como Chegar', 'Mais +'
  ];

  return (
    <section className="relative w-full bg-[#0A2540] py-[80px] mb-[60px] overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-center bg-cover"
        style={{ backgroundImage: "url('https://loremflickr.com/1920/1080/city,night/all')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/90 to-transparent z-0"></div>

      <div className="max-w-[1400px] mx-auto px-[5%] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          
          <div className="flex flex-col">
            <h2 className="text-[2.5rem] md:text-[3rem] font-extrabold text-white leading-[1.1] mb-[20px]">
              Chã Grande: <br />
              <span className="text-white font-medium text-[2rem] md:text-[2.5rem]">A Capital Agrícola</span>
            </h2>
            
            <p className="text-[#CBD5E1] text-[1.1rem] leading-[1.6] mb-[24px]">
              Localizada no Agreste Pernambucano, Chã Grande destaca-se pela sua forte vocação agrícola e pelo clima ameno. Conhecida pela produção de graviola, chuchu e hortaliças, a cidade une a tranquilidade do interior com um grande potencial de desenvolvimento econômico e turístico, oferecendo uma excelente qualidade de vida aos seus moradores.
            </p>
            
            <a href="#" className="text-[#F2A900] font-bold text-[1.1rem] hover:underline flex items-center gap-[8px] w-max">
              Continue lendo...
            </a>
          </div>

          <div className="relative w-full aspect-video rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-[4px] border-[#ffffff10]">
            <img 
              src="https://loremflickr.com/800/450/landscape,brazil/all" 
              alt="Vista panorâmica de Chã Grande" 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-[12px] mt-[50px]">
          {tags.map((tag, index) => (
            <a 
              key={index} 
              href="#"
              className="bg-[#ffffff10] backdrop-blur-md border border-[#ffffff20] text-white font-semibold text-[0.95rem] px-[20px] py-[12px] rounded-[12px] hover:bg-[#ffffff25] hover:-translate-y-[2px] transition-all duration-300"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}