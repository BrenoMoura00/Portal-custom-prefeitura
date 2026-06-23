import HeroSearch from '@/components/widgets/HeroSearch';
import NewsWidget from '@/components/widgets/NewsWidget';
import OuvidoriaWidget from '@/components/widgets/OuvidoriaWidget';
import CalendarioPagamentoWidget from '@/components/widgets/CalendarioPagamentoWidget';
import PortalSeguradoWidget from '@/components/widgets/PortalSeguradoWidget';
import SimuladorAposentadoriaWidget from '@/components/widgets/SimuladorAposentadoriaWidget';
import StatsWidget from '@/components/widgets/StatsWidget';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function PrevidenciaHome() {
  return (
    <>
      <HeroSearch />
      
      <div className="max-w-350 mx-auto px-[5%] mb-15 mt-10 flex flex-col gap-8">
        
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
            <CalendarioPagamentoWidget />
            <PortalSeguradoWidget />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SimuladorAposentadoriaWidget />
            <StatsWidget />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
            <NewsWidget />
            <OuvidoriaWidget />
          </div>
        </ScrollReveal>

      </div>
    </>
  );
}
