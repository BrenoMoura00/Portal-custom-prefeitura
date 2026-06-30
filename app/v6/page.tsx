import React from 'react';
import HeaderV6 from '@/components/layout/HeaderV6';
import HeroSearchV6 from '@/components/widgets/HeroSearchV6';
import AcessoCidadaoV6 from '@/components/widgets/AcessoCidadaoV6';
import NoticiasDestaqueV6 from '@/components/widgets/NoticiasDestaqueV6';
import MultimidiaV6 from '@/components/widgets/MultimidiaV6';
import AutoridadesWidgetV6 from '@/components/widgets/AutoridadesWidgetV6';
import TransparenciaGovV6 from '@/components/widgets/TransparenciaGovV6';
import LocationWidgetV6 from '@/components/widgets/LocationWidgetV6';
import FooterV6 from '@/components/layout/FooterV6';

export default function V6Page() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <HeaderV6 />
      <main className="flex-grow flex flex-col">
        <HeroSearchV6 />

        <AcessoCidadaoV6 />
        <NoticiasDestaqueV6 />
        <MultimidiaV6 />
        
        <AutoridadesWidgetV6 />
        <TransparenciaGovV6 />

        <LocationWidgetV6 />
      </main>

      <FooterV6 />
    </div>
  );
}
