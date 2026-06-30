import React from 'react';
import HeaderV7 from '@/components/layout/HeaderV7';
import HeroSearchV7 from '@/components/widgets/HeroSearchV7';
import AcessoRapidoV7 from '@/components/widgets/AcessoRapidoV7';
import NoticiasDestaqueV7 from '@/components/widgets/NoticiasDestaqueV7';
import TransparenciaGovV7 from '@/components/widgets/TransparenciaGovV7';
import MultimidiaV7 from '@/components/widgets/MultimidiaV7';
import AutoridadesWidgetV7 from '@/components/widgets/AutoridadesWidgetV7';
import ConhecaCidadeV7 from '@/components/widgets/ConhecaCidadeV7';
import LocationWidgetV7 from '@/components/widgets/LocationWidgetV7';
import FooterV7 from '@/components/layout/FooterV7';

export default function V7Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderV7 />
      <main className="flex flex-col pb-32">
        {/* 2. Hero Section com Busca Gigante */}
        <HeroSearchV7 />

        {/* 3. Acesso Rápido flutuante */}
        <AcessoRapidoV7 />

        {/* 4. Notícias (Estilo Bento Mínimo) */}
        <NoticiasDestaqueV7 />

        {/* 5. Transparência / Dashboards Simples */}
        <TransparenciaGovV7 />

        {/* 6. Multimídia e Galeria */}
        <MultimidiaV7 />

        {/* 7. Parlamentares / Autoridades */}
        <AutoridadesWidgetV7 />

        {/* 8. A Cidade (História e Dados) */}
        <ConhecaCidadeV7 />

        {/* 9. Mapa e Localização Institucional */}
        <LocationWidgetV7 />
      </main>

      {/* 8. Rodapé Minimalista com Régua de PE */}
      <FooterV7 />
    </div>
  );
}
