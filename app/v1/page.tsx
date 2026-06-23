import HeroSearch from '@/components/widgets/HeroSearch';
import AcessoRapidoWidget from '@/components/widgets/AcessoRapidoWidget';
import FeaturedNewsWidget from '@/components/widgets/FeaturedNewsWidget';
import ObrasWidget from '@/components/widgets/ObrasWidget';
import OuvidoriaWidget from '@/components/widgets/OuvidoriaWidget';
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
import CentralCidadaoWidget from '@/components/widgets/CentralCidadaoWidget';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function V1Page() {
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
    </>
  );
}
