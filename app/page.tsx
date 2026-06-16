import HeroSearch from '../components/widgets/HeroSearch';
import AcessoRapidoWidget from '../components/widgets/AcessoRapidoWidget';
import FeaturedNewsWidget from '../components/widgets/FeaturedNewsWidget';
import ObrasWidget from '../components/widgets/ObrasWidget';
import OuvidoriaWidget from '../components/widgets/OuvidoriaWidget';
import CentralCidadaoWidget from '../components/widgets/CentralCidadaoWidget';
import NewsWidget from '../components/widgets/NewsWidget';
import QuickLinksWidget from '../components/widgets/QuickLinksWidget';
import TimelineWidget from '../components/widgets/TimelineWidget';
import SealsWidget from '../components/widgets/SealsWidget';
import SpecialProgramsWidget from '../components/widgets/SpecialProgramsWidget';
import StatsWidget from '../components/widgets/StatsWidget';
import SeloPrataBanner from '../components/widgets/SeloPrataBanner';

export default function Home() {
  return (
    <>
      <HeroSearch />
      <AcessoRapidoWidget />

      <div className="max-w-[1400px] mx-auto px-[5%] mb-[60px] flex flex-col gap-[32px]">
        
        <FeaturedNewsWidget />
        <ObrasWidget />
        <OuvidoriaWidget />

        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-[32px]">
          
          <div className="flex flex-col gap-[24px] h-full justify-between">
            <NewsWidget />
            <StatsWidget /> 
            <SeloPrataBanner />
          </div>
          
          <div className="flex flex-col gap-[24px] h-full justify-between">
            <QuickLinksWidget />
            <TimelineWidget />
          </div>
          
        </div>
      </div>
      
      <SpecialProgramsWidget />
      <CentralCidadaoWidget />
      <SealsWidget />
    </>
  );
}