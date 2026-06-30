import React from 'react';
import HeaderV8 from '@/components/layout/HeaderV8';
import HeroSearchV8 from '@/components/widgets/HeroSearchV8';
import AcessoRapidoV8 from '@/components/widgets/AcessoRapidoV8';
import NoticiasDestaqueV8 from '@/components/widgets/NoticiasDestaqueV8';
import MultimidiaV8 from '@/components/widgets/MultimidiaV8';
import AgendaEventosV8 from '@/components/widgets/AgendaEventosV8';
import AutoridadesWidgetV8 from '@/components/widgets/AutoridadesWidgetV8';
import TransparenciaGovV8 from '@/components/widgets/TransparenciaGovV8';
import ConhecaCidadeV8 from '@/components/widgets/ConhecaCidadeV8';
import LocationWidgetV8 from '@/components/widgets/LocationWidgetV8';
import FooterV8 from '@/components/layout/FooterV8';

export default function V8Page() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#1351B4] selection:text-white">
      <HeaderV8 />
      
      <main className="flex flex-col">
        {/* Fase 2: Primeiro Impacto */}
        <HeroSearchV8 />
        <AcessoRapidoV8 />
        
        {/* Fase 3: Comunicação e Mídia */}
        <NoticiasDestaqueV8 />
        <MultimidiaV8 />
        
        {/* Agenda Oficial V8 */}
        <AgendaEventosV8 />
        
        {/* Fase 4: Autoridades */}
        <AutoridadesWidgetV8 />

        {/* Fase 5: Transparência, Cidade e Localização */}
        <TransparenciaGovV8 />
        <ConhecaCidadeV8 />
        <LocationWidgetV8 />
      </main>

      {/* Footer V8 */}
      <FooterV8 />
    </div>
  );
}
