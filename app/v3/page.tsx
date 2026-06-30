import HeaderV3 from '@/components/layout/HeaderV3';
import HeroSearchV3 from '@/components/widgets/HeroSearchV3';
import BentoAcessoRapidoV3 from '@/components/widgets/BentoAcessoRapidoV3';
import NoticiasInstitucionalV3 from '@/components/widgets/NoticiasInstitucionalV3';
import TransparenciaObrasV3 from '@/components/widgets/TransparenciaObrasV3';
import AgendaEventosV3 from '@/components/widgets/AgendaEventosV3';
import HubMultimidiaV3 from '@/components/widgets/HubMultimidiaV3';
import AutoridadesWidgetV3 from '@/components/widgets/AutoridadesWidgetV3';
import FooterV3 from '@/components/layout/FooterV3';

export default function V3Page() {
  return (
    <>
      <HeaderV3 />
      <div className="w-full relative">
        <HeroSearchV3 />
      </div>
      
      {/* Secao de Acesso Rapido - Bento Grid */}
      <BentoAcessoRapidoV3 />

      {/* Secao de Noticias - Padrao Gov */}
      <NoticiasInstitucionalV3 />

      {/* Secao de Transparencia e Obras - Dashboard Escuro */}
      <TransparenciaObrasV3 />

      {/* Secao de Autoridades / Parlamentares */}
      <AutoridadesWidgetV3 />

      {/* Secao de Agenda e Eventos */}
      <AgendaEventosV3 />

      {/* Secao de Redes Sociais e TV Institucional */}
      <HubMultimidiaV3 />

      {/* Rodape Premium Exclusivo V3 */}
      <FooterV3 />
    </>
  );
}
