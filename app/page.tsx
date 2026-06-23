import HeroSearch from '@/components/widgets/HeroSearch';
import HeroSearchV2 from '@/components/widgets/HeroSearchV2';
import HeroSearchV3 from '@/components/widgets/HeroSearchV3';
import AcessoRapidoWidget from '@/components/widgets/AcessoRapidoWidget';
import FeaturedNewsWidget from '@/components/widgets/FeaturedNewsWidget';
import FeaturedNewsWidgetV2 from '@/components/widgets/FeaturedNewsWidgetV2';
import ObrasWidget from '@/components/widgets/ObrasWidget';
import ObrasWidgetV2 from '@/components/widgets/ObrasWidgetV2';
import OuvidoriaWidget from '@/components/widgets/OuvidoriaWidget';
import OuvidoriaWidgetV2 from '@/components/widgets/OuvidoriaWidgetV2';
import LicitacoesWidget from '@/components/widgets/LicitacoesWidget';
import CentralCidadaoWidget from '@/components/widgets/CentralCidadaoWidget';
import NewsWidget from '@/components/widgets/NewsWidget';
import QuickLinksWidget from '@/components/widgets/QuickLinksWidget';
import TimelineWidget from '@/components/widgets/TimelineWidget';
import SealsWidget from '@/components/widgets/SealsWidget';
import SpecialProgramsWidget from '@/components/widgets/SpecialProgramsWidget';
import StatsWidget from '@/components/widgets/StatsWidget';
import SeloPrataBanner from '@/components/widgets/SeloPrataBanner';
import AboutCityWidget from '@/components/widgets/AboutCityWidget';
import TvInstitucionalWidget from '@/components/widgets/TvInstitucionalWidget';
import InstagramFeedWidget from '@/components/widgets/InstagramFeedWidget';
import VideoCarouselWidget from '@/components/widgets/VideoCarouselWidget';
import LocationWidget from '@/components/widgets/LocationWidget';
import ScrollReveal from '@/components/ui/ScrollReveal';
import NewsWidgetV2 from '@/components/widgets/NewsWidgetV2';
import StatsWidgetV2 from '@/components/widgets/StatsWidgetV2';
import QuickLinksWidgetV2 from '@/components/widgets/QuickLinksWidgetV2';
import TimelineWidgetV2 from '@/components/widgets/TimelineWidgetV2';
import TvInstitucionalWidgetV2 from '@/components/widgets/TvInstitucionalWidgetV2';
import InstagramFeedWidgetV2 from '@/components/widgets/InstagramFeedWidgetV2';
import VideoCarouselWidgetV2 from '@/components/widgets/VideoCarouselWidgetV2';
import AboutCityWidgetV2 from '@/components/widgets/AboutCityWidgetV2';
import SpecialProgramsWidgetV2 from '@/components/widgets/SpecialProgramsWidgetV2';
import CentralCidadaoWidgetV2 from '@/components/widgets/CentralCidadaoWidgetV2';
import LocationWidgetV2 from '@/components/widgets/LocationWidgetV2';
import SealsWidgetV2 from '@/components/widgets/SealsWidgetV2';
import AcessoRapidoWidgetV2 from '@/components/widgets/AcessoRapidoWidgetV2';
import LicitacoesWidgetV2 from '@/components/widgets/LicitacoesWidgetV2';

export default function PrefeituraMasterHome() {
  return (
    <>
      <HeroSearch />
      
      <ScrollReveal>
        <AcessoRapidoWidget />
      </ScrollReveal>

      <div className="max-w-350 mx-auto px-[5%] mb-15 flex flex-col gap-8">
        <ScrollReveal>
          <FeaturedNewsWidget />
        </ScrollReveal>

        <ScrollReveal>
          <ObrasWidget />
        </ScrollReveal>

        <ScrollReveal>
          <OuvidoriaWidget />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-8">
            <div className="flex flex-col gap-6 h-full justify-between">
              <NewsWidget />
              <StatsWidget /> 
              <SeloPrataBanner />
            </div>
            
            <div className="flex flex-col gap-6 h-full justify-between">
              <QuickLinksWidget />
              <TimelineWidget />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TvInstitucionalWidget />
            <InstagramFeedWidget />
          </div>
        </ScrollReveal>
      </div>
     
      <ScrollReveal>
        <VideoCarouselWidget />
      </ScrollReveal>
      
      <ScrollReveal>
        <AboutCityWidget />
      </ScrollReveal>

      <ScrollReveal>
        <SpecialProgramsWidget />
      </ScrollReveal>

      <ScrollReveal>
        <CentralCidadaoWidget />
      </ScrollReveal>

      <ScrollReveal>
        <LocationWidget />
      </ScrollReveal>

      <ScrollReveal>
        <SealsWidget />
      </ScrollReveal>

      {/* =======================================================================
          VISÃO 2030: REDESIGN POR PARTES (ETAPA 1)
          ======================================================================= */}
      <div className="mt-40 w-full relative border-t border-gray-300">
        <HeroSearchV2 />
      </div>

      {/* =======================================================================
          VISÃO 2030: REDESIGN POR PARTES (ETAPA 2 - TRANSPARÊNCIA)
          ======================================================================= */}
      <div className="py-24 px-[5%] bg-gradient-to-br from-[#E8EDF3] via-[#EEF2F7] to-[#E3EAF2] relative">
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-[#005FA3]/8 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase mb-2 block">Dados Abertos</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">Transparência e Governança</h2>
              <p className="text-gray-500 mt-2 max-w-lg">Acompanhe obras, licitações e indicadores de desempenho da gestão municipal em tempo real.</p>
            </div>
            <a href="#" className="text-sm font-bold text-[#005FA3] hover:text-[#0A2540] transition-colors border border-gray-200 bg-white px-5 py-2.5 rounded-full hover:bg-gray-50 shadow-sm whitespace-nowrap">
              Portal da Transparência &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 h-full">
              <StatsWidgetV2 />
            </div>
            <div className="lg:col-span-8 h-full">
              <ObrasWidgetV2 />
            </div>
            
            <div className="lg:col-span-4 h-full">
              <TimelineWidgetV2 />
            </div>
            <div className="lg:col-span-8 h-full">
              <LicitacoesWidgetV2 />
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================================
          VISÃO 2030: REDESIGN POR PARTES (ETAPA 3 - COMUNICAÇÃO)
          ======================================================================= */}
      <div className="py-32 px-[5%] bg-gradient-to-br from-[#F0F7FF] via-white to-[#F8FAFC] relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-[#005FA3]/5 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase mb-2 block">Informação ao Cidadão</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">Comunicação e Participação</h2>
              <p className="text-gray-500 mt-2 max-w-lg">Fique por dentro das notícias, acompanhe a TV institucional e participe ativamente da gestão municipal.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 flex flex-col gap-8">
              <FeaturedNewsWidgetV2 />
              <TvInstitucionalWidgetV2 />
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-8">
              <OuvidoriaWidgetV2 />
              <InstagramFeedWidgetV2 />
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================================
          VISÃO 2030: REDESIGN POR PARTES (ETAPA 4 - INSTITUCIONAL)
          ======================================================================= */}
      <div className="py-32 px-[5%] bg-[#EBEBEB] relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase mb-2 block">A Prefeitura</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">Institucional</h2>
            <p className="text-gray-500 mt-2 max-w-lg">Conheça a cidade, onde nos encontrar e os reconhecimentos que nos orgulham.</p>
          </div>

          <div className="flex flex-col gap-8">
            <AboutCityWidgetV2 />
            <LocationWidgetV2 />
            <SealsWidgetV2 />
          </div>
        </div>
      </div>

      <div className="w-full relative mt-40 border-t-4 border-[#005FA3]">
        <HeroSearchV3 />
      </div>
    </>
  );
}