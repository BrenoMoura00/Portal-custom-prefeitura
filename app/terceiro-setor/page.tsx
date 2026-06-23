import HeroSearch from '@/components/widgets/HeroSearch';
import DoacoesWidget from '@/components/widgets/DoacoesWidget';
import ProjetosSociaisWidget from '@/components/widgets/ProjetosSociaisWidget';
import TransparenciaRecursosWidget from '@/components/widgets/TransparenciaRecursosWidget';
import FeaturedNewsWidget from '@/components/widgets/FeaturedNewsWidget';
import VideoCarouselWidget from '@/components/widgets/VideoCarouselWidget';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TerceiroSetorHome() {
  return (
    <>
      <HeroSearch />
      
      <div className="max-w-350 mx-auto px-[5%] mb-15 mt-10 flex flex-col gap-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
            <DoacoesWidget />
            <div className="flex flex-col gap-8 h-full">
              <TransparenciaRecursosWidget />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <ProjetosSociaisWidget />
        </ScrollReveal>

        <ScrollReveal>
          <VideoCarouselWidget />
        </ScrollReveal>

        <ScrollReveal>
          <FeaturedNewsWidget />
        </ScrollReveal>
      </div>
    </>
  );
}
