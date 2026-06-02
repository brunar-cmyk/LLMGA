# Subida no Meta Ads — Estrutura de Campanhas, Conjuntos e Públicos

Plano de execução para o **LLM em Gestão do Agronegócio · IDP — Captação 2026**, alinhado ao briefing e à matriz de criativos da Onda 1.

> **Premissa estratégica:** Meta (Instagram + Facebook) é canal **primário para Carlos** e **secundário/complementar** para Rafael e Beatriz (que são primariamente Google Search e LinkedIn). O split de verba reflete isso.

---

## 1. Pré-requisitos antes de subir

Configure antes da primeira campanha:

- [ ] **Pixel Meta** instalado em todas as páginas da LP do LLM em Agro.
- [ ] **Conversions API (CAPI)** servidor-a-servidor — não dependa só do pixel client-side (perde leitura no iOS).
- [ ] **Eventos definidos no Events Manager:**
  - `PageView` — todas as páginas
  - `ViewContent` — LP do LLM (`/llm-agronegocio`)
  - `Lead` — submissão do formulário "Baixar Guia do Curso" (evento-âncora de otimização)
  - `Contact` — clique no botão "Falar com um Consultor"
  - `Schedule` — agendamento de call concluído
  - `Purchase` — matrícula efetivada (peso máximo na priorização do iOS 14.5+)
- [ ] **Priorização de eventos no iOS 14.5+** (Events Manager > Web Events): ordem `Purchase > Schedule > Contact > Lead > ViewContent > PageView`.
- [ ] **Domínio verificado** no Business Manager.
- [ ] **UTM padrão** das peças: `utm_source=meta&utm_medium={feed|reels|stories|carousel}&utm_campaign=llm_agro_2026_{persona}&utm_content={hook}&utm_term={ad_set}`.

---

## 2. Estrutura de campanhas

5 campanhas no Gerenciador de Anúncios. Use **CBO (Otimização de Orçamento de Campanha)** em todas, exceto onde indicado.

| # | Nome sugerido (Gerenciador) | Objetivo | Otimização | Verba sugerida (% do total) |
|---|---|---|---|---|
| 1 | `LLM_AGRO_2026 · Carlos · Conversões` | Vendas (Leads) | Lead | **45%** |
| 2 | `LLM_AGRO_2026 · Rafael · Conversões` | Vendas (Leads) | Lead | **20%** |
| 3 | `LLM_AGRO_2026 · Beatriz · Conversões` | Vendas (Leads) | Lead | **15%** |
| 4 | `LLM_AGRO_2026 · Remarketing · Conversões` | Vendas (Leads) | Lead (ou Schedule, se houver volume) | **15%** |
| 5 | `LLM_AGRO_2026 · Awareness Brasília · Alcance` | Reconhecimento de marca | ThruPlay | **5%** (opcional, só se houver verba sobrando) |

**Observações:**
- Comece com **CBO** em todas. Migre para **ABO** (orçamento por conjunto) só nos conjuntos que ficarem subotimizados depois de 14 dias.
- Sem campanha de Tráfego no início. Tráfego para LP entrega cliques baratos mas qualidade baixa de lead — começamos otimizando direto para Lead via pixel.
- Campanha de Alcance (#5) só faz sentido depois das 4 primeiras terem 7 dias de leitura. Ela ancora marca em Brasília/Centro-Oeste antes do remarketing pegar.

---

## 3. Públicos Personalizados a criar (Custom Audiences)

Crie todos antes de subir os conjuntos. Eles alimentam tanto remarketing quanto base para Lookalike.

| Nome no Gerenciador | Origem | Janela | Uso |
|---|---|---|---|
| `CA · LP LLM Agro · 90d` | Site (URL contém `/llm-agronegocio`) | 90 dias | Remarketing #1 |
| `CA · LP LLM Agro · 30d` | Site (URL contém `/llm-agronegocio`) | 30 dias | Remarketing topo (lance maior) |
| `CA · Lead Guia · 180d` | Evento `Lead` | 180 dias | **Excluir** de prospecting; **incluir** em nutrição |
| `CA · Engajamento IG · 365d` | Conta do Instagram IDP | 365 dias | Seed de Lookalike + remarketing |
| `CA · Engajamento FB · 365d` | Página Facebook IDP | 365 dias | Seed de Lookalike + remarketing |
| `CA · Video ThruPlay 95% · 90d` | Vídeos da campanha (todos) | 90 dias | Público quente — alta intenção |
| `CA · Alunos IDP — cursos jurídicos` | Lista de e-mails (CRM IDP, último 24m) | — | Seed de Lookalike + exclusão |
| `CA · Matriculados turmas anteriores LLM` | Lista de e-mails (turma piloto) | — | Seed mais qualificado de Lookalike |
| `CA · Downloads guia anteriores IDP` | Lista de e-mails (CRM) | — | Seed de Lookalike topo de funil |

---

## 4. Lookalikes (Públicos Semelhantes) — Brasil

Crie 1% e 2-3% de cada seed. Comece prospecting com **1%**; abra para 2-3% só quando o 1% saturar.

| Nome | Seed | % Brasil |
|---|---|---|
| `LAL 1% · Matriculados LLM Agro` | `CA · Matriculados turmas anteriores LLM` | 1% |
| `LAL 1% · Downloads guia LLM` | `CA · Lead Guia · 180d` | 1% |
| `LAL 1% · Engajamento IG IDP` | `CA · Engajamento IG · 365d` | 1% |
| `LAL 1% · Alunos cursos jurídicos IDP` | `CA · Alunos IDP — cursos jurídicos` | 1% |
| `LAL 2-3%` de cada um acima | — | escala posterior |

---

## 5. Conjuntos de anúncios por campanha

### Campanha 1 — Carlos (45% da verba)

**Localização:** GO, MT, MS, MG (interior), SP (interior), PR (interior), TO, BA (oeste), MA (sul). Excluir capitais do Sudeste exceto Goiânia.
**Idade:** 25–40.
**Gênero:** todos.
**Placements:** Instagram Feed, Reels, Stories | Facebook Feed, Reels. **Desligar:** Audience Network, Messenger, Coluna direita FB.
**Otimização:** Lead. **Janela de conversão:** 7 dias clique / 1 dia visualização.

| Conjunto | Público | Exclusões |
|---|---|---|
| `Carlos · LAL 1% Matriculados` | LAL 1% · Matriculados LLM Agro | CA Lead Guia 180d + CA Alunos atuais |
| `Carlos · LAL 1% Downloads` | LAL 1% · Downloads guia LLM | CA Lead Guia 180d |
| `Carlos · Interesses Sucessor Rural` | **Interesses (E)** Agronegócio + Fazenda + Pecuária + Holding patrimonial. **Cargos (E)** Advogado / OAB. **Demografia (E)** Renda familiar superior. | CA Lead Guia 180d |
| `Carlos · Detalhado Agro + Direito` | **Interesses:** Globo Rural, Canal Rural, Agrishow, AgroBR, Confederação Nacional Agricultura. **E** Direito agrário OR Direito tributário OR OAB. | CA Lead Guia 180d |
| `Carlos · Broad (Advantage+)` | Sem segmentação detalhada, deixar Meta otimizar. Idade 28–40. | CA Lead Guia 180d |

**Criativos atribuídos** (de `criativos/imagens/`):
- `instagram-carlos-A.png` + `B.png` (Feed retrato)
- `carrossel-carlos-slide-1..6.png` (Carrossel IG)
- Reels Carlos (5 quadros do storyboard → exportar como vídeo final pela agência)
- `story-1..5.png` (Stories)

---

### Campanha 2 — Rafael (20%)

**Localização:** Brasil. Bid modifier +40% DF, GO, MT, MS, MG, SP, PR, RS.
**Idade:** 28–45.
**Placements:** Instagram Feed, Reels, Stories | Facebook Feed.
**Otimização:** Lead.

| Conjunto | Público | Exclusões |
|---|---|---|
| `Rafael · Cargo Advogado + Interesse Agro` | **Cargos:** Advogado, Sócio, Associado. **E** **Interesses:** Agronegócio OR Direito empresarial OR Mercado de capitais. | CA Lead Guia 180d |
| `Rafael · LAL 1% Downloads guia` | LAL 1% · Downloads guia LLM | CA Lead Guia 180d |
| `Rafael · Detalhado OAB + Tributário` | **Interesses:** OAB, ENFAM, IBET, Direito tributário, Direito societário. **E** ocupação Advogado. | CA Lead Guia 180d |
| `Rafael · Broad Advantage+` | Sem detalhamento, idade 28–45, ocupação contém "advogado" ou "Direito". | CA Lead Guia 180d |

**Criativos atribuídos:**
- `instagram-rafael-A.png` + `B.png`
- `carrossel-rafael-slide-1..6.png`
- Reels Rafael (5 quadros)

---

### Campanha 3 — Beatriz (15%)

**Localização:** Capitais + Centro-Oeste (Goiânia, Cuiabá, Campo Grande, Brasília, Rio Verde, Sorriso, Sinop, Uberlândia, Ribeirão Preto, Londrina, Maringá, Cascavel, Passo Fundo).
**Idade:** 35–50.
**Placements:** Instagram Feed, Stories | Facebook Feed (Reels apenas se a peça existir em vídeo).
**Otimização:** Lead. *(Atenção: LinkedIn é primário para essa persona. Meta serve como reforço; CPL aqui será mais alto que nas outras duas campanhas — é esperado.)*

| Conjunto | Público | Exclusões |
|---|---|---|
| `Beatriz · Cargos C-Level Jurídico` | **Cargos:** Diretor Jurídico, Gerente Jurídico, Head of Legal, Compliance Officer, General Counsel, Corporate Counsel. | CA Lead Guia 180d |
| `Beatriz · Empresas Agro · Empregador` | **Empregador (interesse):** Cargill, ADM, Bunge, COFCO, Amaggi, JBS, BRF, Coamo, C.Vale, SLC Agrícola, Raízen, Atvos. **E** Cargos jurídicos. | CA Lead Guia 180d |
| `Beatriz · ESG e Compliance` | **Interesses:** ESG, Governança corporativa, Sustentabilidade corporativa, Compliance, ISO 37001. **E** Cargos jurídicos. | CA Lead Guia 180d |
| `Beatriz · LAL 1% Alunos cursos jurídicos IDP` | LAL 1% · Alunos cursos jurídicos IDP | CA Lead Guia 180d |

**Criativos atribuídos:**
- `instagram-beatriz.png` (Feed retrato)
- `carrossel-beatriz-slide-1..7.png`
- (Vídeo institucional 45s — quando produzido)

---

### Campanha 4 — Remarketing (15%)

Reaquece quem já interagiu. Conjuntos separados por nível de calor para permitir leitura.

| Conjunto | Público | Otimização | Criativos preferidos |
|---|---|---|---|
| `Remkt · LP 30d sem Lead` | `CA · LP LLM Agro · 30d` **menos** `CA · Lead Guia · 180d` | Lead | Carrossel "Por que IDP, por que Brasília" (Facebook) + Stories bastidores |
| `Remkt · ThruPlay 95% Vídeo` | `CA · Video ThruPlay 95% · 90d` **menos** `CA · Lead Guia · 180d` | Lead | Carrossel da persona inferida + feed retrato |
| `Remkt · Lead Guia · funil` | `CA · Lead Guia · 180d` | Schedule (se volume) ou Contact | Feed Beatriz + carrossel Beatriz (cartão de visitas corporativo) |
| `Remkt · Engajamento IG/FB 365d` | `CA · Engajamento IG` + `CA · Engajamento FB` **menos** `CA · LP LLM Agro 90d` | Lead | Stories bastidores + carrossel Carlos |

---

### Campanha 5 — Awareness Brasília (5%, opcional)

Objetivo: **Reconhecimento de marca** com otimização **ThruPlay**.
**Público:** Brasil, idade 28–50, interesses Agronegócio + Direito (broad).
**Criativos:** Stories "Bastidores de Brasília" (5 stories) + vídeo institucional 45s + Bumper YouTube reaproveitado em Reels (corte 6s).

Use esta campanha **só depois** das 4 primeiras estarem rodando há 7+ dias. Ela cria uma camada de marca que o remarketing colhe.

---

## 6. Mapeamento criativo → conjunto

Cada anúncio dentro do conjunto deve ter pelo menos 2 variações (A/B). Use o nome do PNG da pasta `criativos/imagens/`.

| Conjunto | Anúncios sugeridos (mínimo) |
|---|---|
| Carlos · LAL 1% Matriculados | `instagram-carlos-A` + `instagram-carlos-B` + carrossel Carlos (6 slides) |
| Carlos · Interesses Sucessor Rural | Reels Carlos + Stories bastidores + `instagram-carlos-A` |
| Carlos · Broad Advantage+ | Mix de todos os criativos Carlos — deixar Meta escolher |
| Rafael · Cargo Advogado + Agro | `instagram-rafael-A` + carrossel Rafael + Reels Rafael |
| Rafael · LAL Downloads | `instagram-rafael-B` + carrossel Rafael |
| Beatriz · Cargos C-Level | `instagram-beatriz` + carrossel Beatriz |
| Beatriz · Empresas Agro | `instagram-beatriz` + carrossel Beatriz |
| Remkt · LP 30d sem Lead | Carrossel Facebook "Por que IDP" + Stories bastidores |
| Remkt · ThruPlay 95% | Carrossel da persona + Feed retrato |

> **Headline e descrição do anúncio (campos do Gerenciador):**
> - **Texto principal:** copie das legendas que estão em `criativos/instagram.md` por persona.
> - **Título:** até 27 caracteres, ex. "LLM em Agro — IDP 2026".
> - **Descrição:** até 27 caracteres, ex. "Em Brasília. Turma 2026.".
> - **Botão CTA:** "Saiba mais" no topo de funil, "Cadastre-se" no fundo de funil.

---

## 7. Orçamento, lances e cronograma de leitura

- **Verba mínima por conjunto** para gerar leitura: **R$ 80–120/dia** nos primeiros 7 dias (CBO distribui; ABO pode garantir mínimo).
- **Total mínimo recomendado para a Onda 1** com 5 campanhas: **R$ 600/dia** (≈ R$ 18 mil/mês). Abaixo disso, consolide conjuntos para garantir saída da fase de aprendizado.
- **Estratégia de lance:** comece com **Custo mais baixo** (sem limite). Só ative **Limite de custo** ou **Meta de ROAS** depois de 30 dias de histórico de CPL.
- **Não pause conjuntos antes de 50 conversões / 7 dias** — saída precoce do aprendizado destrói performance.

---

## 8. A/B nativo

Use **Teste A/B** do Gerenciador (não duplique conjuntos manualmente) para testar:

1. **Criativo:** Variação A × B de cada feed/imagem.
2. **Público:** LAL Matriculados × LAL Downloads (qual seed gera CPL menor).
3. **Posicionamento:** Feed + Reels × só Feed × só Reels (otimização Lead).
4. **Otimização de evento:** Lead × ViewContent (em conjunto com pouco volume de Lead).

Cada teste deve rodar **mínimo 7 dias** com **gasto suficiente para 50 conversões** no braço perdedor.

---

## 9. Exclusões obrigatórias em TODAS as campanhas de prospecting

- `CA · Lead Guia · 180d` (quem já baixou)
- `CA · Alunos IDP — cursos jurídicos` (quem já é cliente)
- Lista de e-mails de matriculados turma 2026 (quando começar a entrar matrícula)

---

## 10. KPIs de leitura (semana 1, 2, 4 e mensal)

Reporte por campanha e por conjunto:

| KPI | Origem | Meta inicial (referência) |
|---|---|---|
| CPL (Custo por Lead) | Eventos Lead / valor gasto | Definir após 14 dias — meta inicial: ≤ R$ 80 (Carlos), ≤ R$ 120 (Rafael), ≤ R$ 200 (Beatriz) |
| CTR LP | Cliques no link / impressões | ≥ 1,2% |
| Taxa de conversão LP | Leads / cliques no link | ≥ 4% |
| Frequência | Frequência por conjunto | Manter ≤ 3,5 em prospecting; até 6 em remarketing |
| Qualidade do lead (SQL%) | CRM IDP | ≥ 25% leads → SQL |
| CAC consolidado | Matrículas / verba total | Definir após primeira leva de matrícula |

---

## 11. Checklist final antes de ativar

- [ ] Pixel + CAPI verificados (evento `Lead` disparando corretamente em ambiente de teste).
- [ ] Eventos priorizados no iOS configurados.
- [ ] Domínio verificado.
- [ ] 9 públicos personalizados criados.
- [ ] 4 lookalikes 1% criados.
- [ ] 4 campanhas ativas + 1 awareness opcional.
- [ ] Cada conjunto com mínimo 2 anúncios (A/B).
- [ ] UTMs padronizadas em cada URL de destino.
- [ ] Verba diária mínima por conjunto: R$ 80.
- [ ] Exclusões aplicadas em todos os conjuntos de prospecting.
- [ ] Janela de aprendizado respeitada (não pausar antes de 7 dias).
