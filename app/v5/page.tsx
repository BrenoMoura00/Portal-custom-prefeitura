import React from 'react';
import HeroSearchV5 from '@/components/widgets/HeroSearchV5';
import AcessoCidadaoV5 from '@/components/widgets/AcessoCidadaoV5';
import NoticiasDestaqueV5 from '@/components/widgets/NoticiasDestaqueV5';
import TransparenciaGovV5 from '@/components/widgets/TransparenciaGovV5';
import MultimidiaV5 from '@/components/widgets/MultimidiaV5';
import ConhecaCidadeV5 from '@/components/widgets/ConhecaCidadeV5';
import FooterV5 from '@/components/layout/FooterV5';

export default function V5Page() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <main className="flex-grow flex flex-col">
        {/* 1. Hero com Busca Principal */}
        <HeroSearchV5 />

        {/* 2. Acesso Rápido */}
        <AcessoCidadaoV5 />

        {/* 3. Notícias em Destaque */}
        <NoticiasDestaqueV5 />

        {/* 4. Transparência */}
        <TransparenciaGovV5 />

        {/* 5. Multimídia */}
        <MultimidiaV5 />

        {/* 6. Conheça a Cidade (História e Mapa) */}
        <ConhecaCidadeV5 />
      </main>

      {/* 7. Rodapé */}
      <FooterV5 />
    </div>
  );
}
