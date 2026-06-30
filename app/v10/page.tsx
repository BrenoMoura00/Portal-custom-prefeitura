import HeroCarouselV10 from '@/components/widgets/HeroCarouselV10';
import HeaderV10 from '@/components/layout/HeaderV10';
import AcessoRapidoV10 from '@/components/widgets/AcessoRapidoV10';
import NoticiasDestaqueV10 from '@/components/widgets/NoticiasDestaqueV10';
import TransparenciaGovV10 from '@/components/widgets/TransparenciaGovV10';
import AutoridadesWidgetV10 from '@/components/widgets/AutoridadesWidgetV10';
import ObrasWidgetV10 from '@/components/widgets/ObrasWidgetV10';
import AgendaEventosV10 from '@/components/widgets/AgendaEventosV10';
import OuvidoriaWidgetV10 from '@/components/widgets/OuvidoriaWidgetV10';
import HubMultimidiaV10 from '@/components/widgets/HubMultimidiaV10';
import ConhecaCidadeWidgetV10 from '@/components/widgets/ConhecaCidadeWidgetV10';
import FooterV10 from '@/components/layout/FooterV10';

export default function V10Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-emerald-500/30">
      
      <HeaderV10 />

      {/* Hero Inovador: Carrossel de Notícias */}
      <HeroCarouselV10 />

      {/* Conteúdo Abaixo do Hero */}
      <div className="relative z-30">
        <AcessoRapidoV10 />
      </div>

      {/* Outras seções */}
      <div className="mt-12 bg-white">
        <NoticiasDestaqueV10 />
      </div>

      <TransparenciaGovV10 />

      {/* Corpo Diretivo */}
      <AutoridadesWidgetV10 />

      {/* Monitoramento de Obras */}
      <ObrasWidgetV10 />

      {/* Calendário */}
      <AgendaEventosV10 />

      {/* Ouvidoria e Participação */}
      <OuvidoriaWidgetV10 />

      {/* Central de Mídia */}
      <HubMultimidiaV10 />

      {/* História e Mapa */}
      <ConhecaCidadeWidgetV10 />

      {/* Rodapé */}
      <FooterV10 />

    </main>
  );
}
