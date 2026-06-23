import HeroSearch from '@/components/widgets/HeroSearch';
import AcessoRapidoWidget from '@/components/widgets/AcessoRapidoWidget';
import FeaturedNewsWidget from '@/components/widgets/FeaturedNewsWidget';
import OuvidoriaWidget from '@/components/widgets/OuvidoriaWidget';
import SessoesPlenariasWidget from '@/components/widgets/SessoesPlenariasWidget';
import VereadoresWidget from '@/components/widgets/VereadoresWidget';
import LeisProjetosWidget from '@/components/widgets/LeisProjetosWidget';
import DiarioOficialWidget from '@/components/widgets/DiarioOficialWidget';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CamaraHome() {
  return (
    <>
      <HeroSearch />
      
      <ScrollReveal>
        <AcessoRapidoWidget />
      </ScrollReveal>

      <div className="max-w-350 mx-auto px-[5%] mb-15 flex flex-col gap-8">
        <ScrollReveal>
          <SessoesPlenariasWidget />
        </ScrollReveal>

        <ScrollReveal>
          <VereadoresWidget />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
            <LeisProjetosWidget />
            <div className="flex flex-col gap-8 h-full">
              <FeaturedNewsWidget />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
             <OuvidoriaWidget />
             <DiarioOficialWidget />
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
