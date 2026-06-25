import React from 'react';
import HeroSearchV4 from '@/components/widgets/HeroSearchV4';
import AcessoCidadaoV4 from '@/components/widgets/AcessoCidadaoV4';
import NoticiasDestaqueV4 from '@/components/widgets/NoticiasDestaqueV4';
import TransparenciaGovV4 from '@/components/widgets/TransparenciaGovV4';
import MultimidiaV4 from '@/components/widgets/MultimidiaV4';
import FooterV4 from '@/components/layout/FooterV4';

export default function V4Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <section className="w-full">
        <HeroSearchV4 />
      </section>

      <AcessoCidadaoV4 />

      <NoticiasDestaqueV4 />

      <TransparenciaGovV4 />

      <MultimidiaV4 />

      <FooterV4 />
    </main>
  );
}
