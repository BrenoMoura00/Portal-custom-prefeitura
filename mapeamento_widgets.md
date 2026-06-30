# Mapeamento de Componentes (Widgets e Layout) - Portal Gov

Este documento lista e organiza todos os widgets construídos durante o desenvolvimento das diversas versões do Portal da Prefeitura. Ele serve como guia para entender a evolução do sistema de design e arquitetura de componentes.

## Versão 1 (Base / Clássica)
Os componentes originais (sem sufixo numérico) geralmente possuem layouts mais tradicionais de portais institucionais antigos ou foram os primeiros protótipos construídos.

- **Hero / Header**: `HeroSearch.tsx`, `Header.tsx`
- **Acesso Rápido**: `AcessoRapidoWidget.tsx`, `QuickLinksWidget.tsx`, `CentralCidadaoWidget.tsx`
- **Notícias e Mídia**: `FeaturedNewsWidget.tsx`, `NewsWidget.tsx`, `VideoCarouselWidget.tsx`, `TvInstitucionalWidget.tsx`, `InstagramFeedWidget.tsx`
- **Institucional**: `AutoridadesWidget.tsx`, `AboutCityWidget.tsx`, `ObrasWidget.tsx`, `OuvidoriaWidget.tsx`, `DiarioOficialWidget.tsx`
- **Serviços / Especializados**: `LicitacoesWidget.tsx`, `LeisProjetosWidget.tsx`, `DoacoesWidget.tsx`, `SessoesPlenariasWidget.tsx`, `SimuladorAposentadoriaWidget.tsx`, `PortalSeguradoWidget.tsx`, `ProjetosSociaisWidget.tsx`
- **Transparência**: `TransparenciaRecursosWidget.tsx`, `CalendarioPagamentoWidget.tsx`, `StatsWidget.tsx`
- **Diversos**: `LocationWidget.tsx`, `SealsWidget.tsx`, `TimelineWidget.tsx`, `SpecialProgramsWidget.tsx`
- **Layout**: `Footer.tsx`, `AccessibilityBar.tsx`

---

## Versão 2 (Refinamento V1)
Pequenas melhorias estruturais em relação à V1, focadas em responsividade e refinamento tipográfico.

- `HeroSearchV2.tsx`
- `AcessoRapidoWidgetV2.tsx`, `CentralCidadaoWidgetV2.tsx`, `QuickLinksWidgetV2.tsx`
- `FeaturedNewsWidgetV2.tsx`, `NewsWidgetV2.tsx`, `VideoCarouselWidgetV2.tsx`, `TvInstitucionalWidgetV2.tsx`, `InstagramFeedWidgetV2.tsx`
- `AutoridadesWidgetV2.tsx`, `AboutCityWidgetV2.tsx`, `ObrasWidgetV2.tsx`, `OuvidoriaWidgetV2.tsx`
- `LicitacoesWidgetV2.tsx`
- `LocationWidgetV2.tsx`, `StatsWidgetV2.tsx`, `TimelineWidgetV2.tsx`, `SpecialProgramsWidgetV2.tsx`, `SealsWidgetV2.tsx`

---

## Versão 3 (Início das Categorizações Complexas)
Experimentos com layouts assimétricos, Bento Grids e categorização por revistas.

- `HeroSearchV3.tsx`
- `BentoAcessoRapidoV3.tsx` (Estilo grid dinâmico)
- `NoticiasInstitucionalV3.tsx`, `NoticiasRevistaV3.tsx` (Visuais de magazine editorial)
- `AutoridadesWidgetV3.tsx`
- `HubMultimidiaV3.tsx`, `AgendaEventosV3.tsx`
- `TransparenciaObrasV3.tsx`
- **Layout**: `FooterV3.tsx`

---

## Versão 4
Foco em modernização de cores e blocos de acesso do cidadão.

- `HeroSearchV4.tsx`
- `AcessoCidadaoV4.tsx`
- `NoticiasDestaqueV4.tsx`, `MultimidiaV4.tsx`
- `AutoridadesWidgetV4.tsx`
- `TransparenciaGovV4.tsx`
- **Layout**: `FooterV4.tsx`

---

## Versão 5 e Versão 6 (Borda a Borda / Fluidez)
Tentativas de layouts mais expandidos, uso de cores neon pontuais, gradientes e sessões imersivas ("full width").

- **V5**: `HeroSearchV5.tsx`, `AcessoCidadaoV5.tsx`, `NoticiasDestaqueV5.tsx`, `MultimidiaV5.tsx`, `AutoridadesWidgetV5.tsx`, `ConhecaCidadeV5.tsx`, `TransparenciaGovV5.tsx`, `FooterV5.tsx`
- **V6**: `HeroSearchV6.tsx`, `AcessoCidadaoV6.tsx`, `NoticiasDestaqueV6.tsx`, `MultimidiaV6.tsx`, `AutoridadesWidgetV6.tsx`, `LocationWidgetV6.tsx`, `TransparenciaGovV6.tsx`, `FooterV6.tsx`

---

## Versão 7 e Versão 8 (Cores Neon / Dark Mode / Cyberpunk)
Essas versões foram experimentos focados em temas escuros, cores vibrantes (fuchsia, cyan) e uma pegada mais jovem e futurista.

- **V7**: `HeroSearchV7.tsx`, `AcessoRapidoV7.tsx`, `NoticiasDestaqueV7.tsx`, `MultimidiaV7.tsx`, `AutoridadesWidgetV7.tsx`, `ConhecaCidadeV7.tsx`, `LocationWidgetV7.tsx`, `TransparenciaGovV7.tsx`, `FooterV7.tsx`
- **V8**: `HeroSearchV8.tsx`, `AcessoRapidoV8.tsx`, `NoticiasDestaqueV8.tsx`, `AgendaEventosV8.tsx`, `MultimidiaV8.tsx`, `AutoridadesWidgetV8.tsx`, `ConhecaCidadeV8.tsx`, `LocationWidgetV8.tsx`, `TransparenciaGovV8.tsx`, `HeaderV8.tsx`, `FooterV8.tsx`

---

## Versão 9 (Glassmorphism e Neomorfismo Escuro)
Tentativa de um design premium e escuro usando muito "backdrop-blur", "glassmorphism", bordas com transparência em branco (`border-white/10`) e fundos `slate-950`.

- `HeroSearchV9.tsx`
- `AcessoRapidoV9.tsx`
- `NoticiasDestaqueV9.tsx`
- `TransparenciaGovV9.tsx`
- `AutoridadesWidgetV9.tsx`
- `ObrasWidgetV9.tsx`
- `AgendaEventosV9.tsx`
- `OuvidoriaWidgetV9.tsx`
- `HubMultimidiaV9.tsx`
- **Layout**: `FooterV9.tsx`

---

## Versão 10 (Atual: Identidade "Gov 2030" / Minimalista Premium)
Padrão aprovado atual. Possui um Hero escuro para impacto e legibilidade, seguido de todo o corpo da página em tema claro (`bg-white` ou `bg-neutral-50`). Uso intensivo da paleta verde esmeralda, tipografia chumbo (`neutral-900`), ausência de cantos arredondados (`rounded-none`) e traços "brutalistas" minimalistas, garantindo um visual sério, institucional e de fácil leitura.

- `HeroCarouselV10.tsx`: (Carrossel principal super escuro e impactante, substituindo as antigas barras de busca estáticas).
- `AcessoRapidoV10.tsx`: Grade branca com hover elegante em esmeralda.
- `TransparenciaGovV10.tsx`: Painel escuro no meio do site claro para quebrar a monotonia e chamar a atenção aos dados financeiros (Fundo escuro).
- `AutoridadesWidgetV10.tsx`: Prefeito, Vice e Vereadores em escala de cinza com interatividade em cores.
- `ObrasWidgetV10.tsx`: Estilo de mapa de acompanhamento com bordas retas.
- `AgendaEventosV10.tsx`: Calendário limpo com datas sólidas.
- `OuvidoriaWidgetV10.tsx`: Painel de participação cidadã claro e espaçoso.
- `HubMultimidiaV10.tsx`: TV Institucional e redes sociais unificados.
- `ConhecaCidadeWidgetV10.tsx`: Painel com história da cidade e mapa do Google interativo cobrindo meia tela.
- **Layout**: `FooterV10.tsx` (Fat footer claro, focado em alta densidade de informação).

---

> [!TIP]
> **Como utilizar esta arquitetura:**
> Se no futuro for necessário realizar um teste A/B para uma versão com "cantos arredondados" ou estilo "Glass", os componentes da **V9** podem ser utilizados. Caso a demanda seja focar no padrão oficial da prefeitura com alta acessibilidade e legibilidade, utilize os componentes listados na **V10**.
