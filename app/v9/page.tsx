import HeroSearchV9 from '@/components/widgets/HeroSearchV9';
import HeaderV9 from '@/components/layout/HeaderV9';
import AcessoRapidoV9 from '@/components/widgets/AcessoRapidoV9';
import NoticiasDestaqueV9 from '@/components/widgets/NoticiasDestaqueV9';
import TransparenciaGovV9 from '@/components/widgets/TransparenciaGovV9';
import AutoridadesWidgetV9 from '@/components/widgets/AutoridadesWidgetV9';
import ObrasWidgetV9 from '@/components/widgets/ObrasWidgetV9';
import AgendaEventosV9 from '@/components/widgets/AgendaEventosV9';
import OuvidoriaWidgetV9 from '@/components/widgets/OuvidoriaWidgetV9';
import HubMultimidiaV9 from '@/components/widgets/HubMultimidiaV9';
import FooterV9 from '@/components/layout/FooterV9';

export default function V9Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      
      <HeaderV9 />

      {/* Seção 1: Busca Inteligente */}
      <HeroSearchV9 />

      {/* Seção 2: Grid de Apps (Acesso Rápido) */}
      <AcessoRapidoV9 />

      {/* Seção 3: Boletim Informativo (Notícias) */}
      <NoticiasDestaqueV9 />

      {/* Seção 4: Dashboard de Transparência */}
      <TransparenciaGovV9 />

      {/* Seção 5: Corpo Diretivo */}
      <AutoridadesWidgetV9 />

      {/* Seção 6: Monitoramento de Obras */}
      <ObrasWidgetV9 />

      {/* Seção 7: Calendário Oficial */}
      <AgendaEventosV9 />

      {/* Seção 8: Ouvidoria e Participação */}
      <OuvidoriaWidgetV9 />

      {/* Seção 9: Multimídia (TV Institucional + Redes Sociais) */}
      <HubMultimidiaV9 />

      {/* Rodapé Minimalista V9 */}
      <FooterV9 />

    </main>
  );
}
