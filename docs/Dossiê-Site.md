Quero que você crie o Site institucional "Sorriso em Movimento" em 3 arquivos (index.html, style.css e script.js), usando APENAS HTML5 semântico, CSS3 (Flexbox, Grid, variáveis CSS) e JavaScript Vanilla ES6, sem qualquer framework ou biblioteca externa.

REGRA: Use imagens genéricas premium (Unsplash) relacionadas ao nicho caso não haja imagens reais. Inclua URLs diretas das imagens. Priorize sempre as 4 fotos reais internas + logo fornecidas antes de qualquer imagem Unsplash.

IDENTIDADE VISUAL BASE:
Paleta: 
  --verde-primario: #04A345 (extraído programaticamente da esfera do logo — cor de ação/CTA)
  --verde-escuro: #037904 (extraído da sombra/gradiente do logo — cor de profundidade e headers escuros)
  --branco: #FFFFFF (fundo clínico, transmite limpeza)
  --grafite-texto: #1A1A1A (neutro padrão para legibilidade de corpo de texto — não extraído do logo, recomendação de UI)
  --verde-bg-suave: #F3F8F4 (branco com leve tint verde para seções alternadas, evita clichê cinza puro)

Tipografia: "Plus Jakarta Sans" (títulos, pesos 600–800) + "Inter" (corpo, pesos 400–500) — recomendação de branding para transmitir clínico-moderno sem parecer corporativo-frio. Fontes não informadas pelo cliente; escolha baseada na análise de posicionamento.

Estilo: Design médico clean + UI minimalista humanizada.
Sensação: Confiança, acolhimento, modernidade, segurança e proximidade familiar (não luxuosa/premium — clínica popular-médio, acessível).

LAYOUT ESCOLHIDO:
Hero: Opção D) Vídeo loop + texto com máscara de cor — breakdown baseado no Template 1 (DentalCare X): hero split com imagem grande à direita e bloco de texto/CTA à esquerda sobre fundo claro, ícones de contato (telefone/e-mail) flutuantes abaixo do título. Adaptação: substituir a imagem estática por um dos vídeos institucionais/exteriores enviados em loop mudo, com overlay de gradiente verde-primário em baixa opacidade (mask-image) sobre a base do vídeo para garantir contraste do texto branco.

Serviços: Opção B) Acordeão — breakdown baseado na estrutura de "Our variety of dental services" do Template 1 (grid de 14 serviços com ícone + título curto). Adaptação para acordeão: cada uma das 8 especialidades declaradas pelo cliente (Implantes, Prótese, Estética Dental e Facial, Ortodontia, Endodontia, Periodontia, Clínico Geral, Extração de Sisos) é um item de acordeão que expande revelando a lista detalhada de procedimentos daquela especialidade — evita grid genérico de 3 colunas e comporta o volume real de serviços sem poluir a seção.

Depoimentos: Opção E) Carrossel fade + nota Google visível — breakdown baseado no bloco "See what our over 1,000 happy customers have to say" do Template 1 (cards com foto do cliente + citação + nome). Adaptação: carrossel com fade cross-fade entre avaliações reais do Google (texto + nome + tempo), com selo fixo ao lado mostrando "4.9 ★ — 109 avaliações no Google" e, quando possível, destaque para o vídeo depoimento real (feedback_evandro_1x1.mp4) como primeiro slide.

Sobre/Credenciais: Opção A) Counters animados + texto curto — breakdown baseado no bloco "about" do Template 2 (Maxilla), que usa tabs temporais (past/present/future) com foto grande fixa lateral. Adaptação: substituir os contadores fictícios por dados reais e verificados — 4.9 nota Google, 109 avaliações, 58 fotos no perfil, clínica inaugurada em Nov/2025 — junto de foto real da recepção com o texto institucional do cliente.

ANIMAÇÕES DO PROJETO (direção técnica derivada da estrutura observada nos dois templates Webflow):
- Hero (vídeo de fundo) → opacity 0→1 em 900ms, easing ease-out, trigger: load
- Hero título/subtítulo → translateY(24px)→0 + opacity 0→1 em 700ms, easing cubic-bezier(0.16,1,0.3,1), trigger: load, delay 200ms, stagger 120ms entre título/subtítulo/CTAs
- Cards de ícone de contato (telefone/e-mail, inspirado no Template 1) → opacity 0→1 + translateY(12px)→0 em 500ms, easing ease-out, trigger: load, delay 500ms
- Seção "dor e solução" → translateX(-40px)→0 (texto) / translateX(40px)→0 (imagem) em 800ms, easing cubic-bezier(0.25,0.1,0.25,1), trigger: scroll (IntersectionObserver threshold 0.3)
- Acordeão de serviços → altura max-height 0→auto em 350ms, easing ease-in-out, trigger: click; ícone "+" rotate(0→45deg) em 300ms simultâneo
- Contadores animados (Sobre/Credenciais) → contagem numérica incremental de 0 até valor final em 1200ms, easing linear, trigger: scroll (IntersectionObserver threshold 0.5), stagger 150ms entre cada contador
- Carrossel de depoimentos → opacity 1→0→1 (cross-fade) em 600ms, easing ease-in-out, trigger: autoplay a cada 6s + swipe manual
- Cards de galeria/fotos internas → opacity 0→1 + scale(0.96)→1 em 600ms, easing ease-out, trigger: scroll, stagger 100ms entre cards
- FAQ (acordeão) → mesmo padrão do acordeão de serviços, altura 0→auto em 300ms
- Todas as animações de scroll respeitam prefers-reduced-motion (desativa translate/scale, mantém apenas opacity)

SEÇÕES OBRIGATÓRIAS (intercalar adicionado todas sempre que possivel e adicionar novas conforme o nicho):

Navbar
Hero [Vídeo loop + texto com máscara de cor]
Seção de alto impacto: dor e solução do público-alvo (medo de dentista, insegurança com o sorriso → acolhimento e tecnologia)
Serviços [Acordeão — 8 especialidades]
Seção de encantamento com imagens de resultado/segurança/pessoas (usar as 4 fotos internas reais + vídeos educativos/institucionais)
Sobre/Credenciais [Counters animados + texto curto]
Depoimentos [Carrossel fade + nota Google visível]
FAQ
Localização: endereço + mapa + botão "Como Chegar" + contatos e redes sociais
CTA com formulário ao lado
Rodapé + Créditos

RODAPÉ — coluna de contato (com ícones, todos clicáveis):
Nome → https://share.google/ra8Axh4Z1xH9T9XZi
Endereço → google.com/maps?um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KZm0cRqe35sAMWqGm7xTTQkR&daddr=R.+Francisco+Real,+1842+-+Bangu,+Rio+de+Janeiro+-+RJ,+21810-042
Telefone/WhatsApp → +55 21 98757-5433 (wa.me/message/ZYOWMNN5RZF4M1)

CRÉDITOS:
Esquerda: © Odontocompany Bangu Centro 2026
Direita: Desenvolvido por AG5 Agência (AG5 em destaque na cor #04A345, link para www.ag5agencia.com.br)

DIRETRIZES ANTI-GENÉRICO:
Sem hero centralizado com fundo escuro e texto branco genérico
Sem fade-up igual em todas as seções
Sem paleta azul + branco + cinza (regra crítica: nicho odontológico tende ao clichê azul-clínico — a marca já é verde, reforçar isso é o próprio diferencial)
Sem 3 colunas de ícone + título + texto

QUALIDADE DE CÓDIGO:
HTML semântico + IDs de ancoragem em todas as seções
Variáveis CSS no :root para cores, fontes e espaçamentos
Mobile-first com media queries em 480/768/1024/1280px
IntersectionObserver para animações de scroll (nunca scroll event direto)
will-change: transform, @media (prefers-reduced-motion), lazy loading
Formulário com validação real + serialização para WhatsApp
JSON-LD LocalBusiness (Dentist) com endereço, telefone e geolocalização reais

OPCIONAL (se fizer sentido para o nicho):
Barra animada horizontal: "Implantes / Prótese / Estética / Ortodontia / Endodontia / Periodontia / Clínico Geral / Extração de Sisos — Bangu · Campo Grande · Santíssimo · Realengo · Sulacap"
Seção de avaliações Google com logo oficial e cards animados (nota 4.9 já verificada)
1 — MÍDIAS PRINCIPAIS

Fotos (declarado: 5, contando com a logo — recebido: 5, sem pendência)

Logo (Logo.png) ✅
Foto da fachada: ❌ ausente — as 4 fotos recebidas são todas de ambiente interno; não há registro da entrada/fachada externa do prédio
Fotos internas: ✅ recebidas (4): sala de raio-x panorâmico, sala de cadeira odontológica (1), sala de cadeira odontológica (2, com lixeiras de descarte), recepção com totem "Odonto Company"
Fotos da equipe: ❌ ausente
Fotos dos proprietários/responsável técnica: ❌ ausente (apenas o nome/CRO da responsável técnica consta no perfil do Instagram, sem foto)

Vídeos (declarado: 17 — recebido: 14 arquivos, gap de 3)

feedback_evandro_1x1.mp4 → depoimento de cliente (nome: Evandro)
clinica_de_confiança_1x1.mp4 → institucional
segurança_e_naturalidade_1x1.mp4 → institucional/educativo
duvida_do_dentista_1x1.mp4 → educativo
10 arquivos no padrão "SaveClip_App_..." → conteúdo não identificável por nome de arquivo. O cliente informou que entre os vídeos enviados há também cenas do exterior da clínica, além de institucionais/depoimentos/educativos adicionais — a categorização exata de cada um dos 10 arquivos SaveClip precisa ser confirmada visualmente antes da montagem final das seções.

Vídeos do Instagram (links para embed, não baixados como arquivo): 13 posts em vídeo listados no formulário (sorrir sem medo, manutenção de protocolo, depoimentos de Kelson/Cícera/Igor, dúvidas com Dr./Dra., carga imediata, etc.) — disponíveis como referência de embed via Instagram, se aprovado pelo cliente (o cliente autorizou uso de imagens/redes sociais no Google).

Ausências vão para o checklist de pendências (seção 5).

2 — INFORMAÇÕES DA EMPRESA

Nome da empresa: Odontocompany Bangu Centro (perfil Google Business exibe "OdontoCompany")
Nicho de atuação: Odontologia (clínica odontológica completa, franquia)
Descrição institucional: Clínica odontológica completa, especializada em implantes dentários, próteses, estética dental e facial, ortodontia, endodontia, periodontia, clínica geral e extração de sisos. Realiza atendimentos preventivos, estéticos, restauradores e cirúrgicos, com foco em saúde, função e estética do sorriso.
Proposta de valor: Atendimento humanizado, tecnologia moderna, planejamento digital e equipe especializada, proporcionando mais conforto, segurança, agilidade e excelência nos resultados.
Público-alvo: Crianças, adolescentes, adultos e idosos — tratamentos personalizados para cada necessidade.
Principais especialidades: Implantes Dentários, Prótese Dentária, Estética Dental e Facial, Ortodontia, Endodontia, Periodontia, Clínico Geral, Extração de Sisos (lista extensa de procedimentos por especialidade constante no documento enviado).
Diferenciais: Atendimento humanizado, tecnologia moderna, planejamento digital do sorriso (DSD), equipe especializada.
História: Não há histórico narrativo distinto — o cliente reenviou o mesmo texto da descrição institucional no campo de história. Data de abertura: Novembro de 2025.

Contato:

Telefone: +55 21 98757-5433
WhatsApp: +55 21 98757-5433 (wa.me/message/ZYOWMNN5RZF4M1)
E-mail: não informado
Endereço: R. Francisco Real, 1842 — Bangu, Rio de Janeiro - RJ, 21810-042
Bairros de atendimento: Bangu, Campo Grande, Santíssimo, Realengo, Sulacap
Horário: Seg. a Sex. 9h–18h | Sáb. 9h–13h | Dom. fechado | Feriados nacionais fechado

Links:

Site atual: não informado (cliente não possui site próprio)
Instagram: @odontocompany_bangu — https://www.instagram.com/odontocompany_bangu/ (30 posts, 152 seguidores)
Facebook/LinkedIn: não informado
Google Business: https://share.google/ra8Axh4Z1xH9T9XZi (109 avaliações, nota 4.9, 58 fotos)
Rota Google Maps: google.com/maps?um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KZm0cRqe35sAMWqGm7xTTQkR&daddr=R.+Francisco+Real,+1842+-+Bangu,+Rio+de+Janeiro+-+RJ,+21810-042
Tour virtual / mapa embed: iframes fornecidos no documento original

Documentação:

CRO-RJ 9492 (CRO da clínica)
CRO-RJ 41825 (CRO da responsável técnica — Karoline Alves, conforme bio do Instagram)
CNPJ: não informado
CNES / alvará sanitário: não informado (o cliente respondeu apenas com os registros CRO)

Planos de saúde aceitos: Amil, SulAmérica, e o grupo "Brasil Dental, Mais Dental, Inpao" (marcados como aceitos no formulário; demais opções listadas — Odontoprev, Unimed, Porto Seguro, Bradesco, Intermédica, Hapvida, Interodonto, MetLife — não foram marcadas como aceitas).

Quantidade de mídias declarada: 5 fotos (contando logo) / 17 vídeos — ver detalhamento na seção 1.

3 — AVALIAÇÕES

Plataforma: Google Business Profile
Total de avaliações: 109
Nota média: 4.9

Observação: o formulário não trouxe a nota em estrelas individual de cada avaliação — apenas a nota geral do perfil (4.9). Nenhuma resposta do proprietário estava presente no material enviado, portanto nada foi removido.

Vitória Gonçalves — 2 semanas atrás — "Muito boa, bom atendimento, organizado e ótimo conforto."

Larissa Ramos — 3 semanas atrás — "Fui fazer uma avaliação e gostei. Superou minhas expectativas."

Julio — 3 semanas atrás — "Muito bom o lugar, e o atendimento é ótimo!"

Philipe Princepe — 4 meses atrás — "Excelente atendimento desde a recepção até o final do procedimento. Profissionais atenciosos, ambiente organizado e muito acolhedor. Me senti seguro e bem cuidado em todos os momentos. Recomendo a clínica sem dúvidas!"

Greise Kelly Jesus — 4 semanas atrás — "Com atendimento exemplar, os doutores sempre atenciosos, a clínica totalmente limpa e organizada."

Wolf James games — 3 semanas atrás — "Ótimo atendimento e serviço de qualidade! Indico."

Michelle Canejo — 1 semana atrás — "Atendimento muito bom."

Rodolfo Camargo (Local Guide) — 4 meses atrás — "Excelente profissional a Técnica em Saúde Bucal, clínica limpa e profissionais atenciosos. Nota 10!"

Verônica Forasteiri da Paixão — 3 semanas atrás — "Boa tarde, excelente atendimento das recepcionistas e da Dra. Ótimo ambiente."

Carol Ribeiro — 5 meses atrás — "Tive uma experiência muito positiva na clínica. O atendimento foi muito bom."

Thais Leite — 3 semanas atrás — "Tive uma boa experiência com a clínica."

Pedro Henrique Alves De Sa — 3 semanas atrás — "Experiência agradável, atendimento rápido."

Priscila Princepe — 4 meses atrás — "Excelente atendimento, funcionárias simpáticas e atenciosas!"

Marcela Santiago — 4 meses atrás — "Excelente atendimento! Super recomendo."

Pedro Souza — 3 semanas atrás — "Foi muito boa."

Renata Princepe — 4 meses atrás — "Ótimo atendimento!"

Paloma Silva — 3 semanas atrás — "Excelente."

Daniela Borges — 3 semanas atrás — "Excelente."

Vanessa Abreu — 23 horas atrás — "Um atendimento maravilhoso, desde a recepção aos médicos. Ótima clínica."

Rose Alves — 1 semana atrás — "Ótimo atendimento, rápido e eficiente. Recomendo."

4 — ANÁLISE DE BRANDING

Nicho: Odontologia (clínica de rede/franquia)
Posicionamento: Popular a médio — clínica de bairro (Bangu, Zona Oeste), aceita planos populares, foco em acessibilidade e volume de atendimento familiar. Não há sinalização de posicionamento premium (sem valores de ticket alto divulgados, sem storytelling de exclusividade).

Estilo visual predominante: Design médico clean + UI minimalista, com identidade de franquia já consolidada (verde = saúde/confiança/natureza, branco = limpeza clínica).

Paleta de cores recomendada (extraída programaticamente do logo, método two-pass):

#04A345 — verde vívido (destaque da esfera do logo) → cor primária de ação/CTA
#037904 — verde escuro (base/sombra da esfera) → cor secundária, contraste e profundidade
Branco 
#FFFFFF e neutros de apoio (
#1A1A1A texto, 
#F3F8F4 fundo suave) são recomendações de UI complementares — não extraídos do logo, usados por convenção de legibilidade

Direção estética: Clínico, humano e confiável — evitar frieza corporativa. Usar fotografia real do ambiente (já disponível) em vez de ilustrações genéricas de "dente sorrindo" sempre que possível.

Sensação de marca: Segurança, acolhimento, modernidade acessível, cuidado familiar.

Referências de empresas premium do mesmo nicho (inspiração de execução visual, não de posicionamento de preço): Align Technology / Invisalign (uso de branco clínico com um único acento de cor forte), Smile Direct Club (tipografia grande e humanizada), Sorridents (referência nacional de rede odontológica com identidade de cor forte e única).

5 — CHECKLIST DE PENDÊNCIAS

Bloqueantes para lançamento:

❌ Foto da fachada/entrada externa da clínica — não recebida
❌ CNPJ — não informado
❌ E-mail institucional — não informado
❌ Confirmação de qual(is) dos 10 vídeos "SaveClip" mostra o exterior da clínica (necessário para o hero em vídeo escolhido)

Não bloqueantes (podem ser complementados após publicação):

Fotos da equipe/dentistas — não recebidas
Fotos dos proprietários/responsável técnica — não recebidas
Site próprio anterior — inexistente, sem migração necessária
Facebook/LinkedIn — não informados
CNES / alvará sanitário — não informado
Nome completo, especialidades e CRO individual de cada dentista que atua na clínica — não informado (cliente deixou em branco)
3 vídeos declarados (17) não localizados entre os 14 arquivos recebidos — confirmar com o cliente se serão enviados
Categorização exata (institucional/depoimento/educativo/exterior) dos 10 vídeos SaveClip sem nome descritivo
BASE_CONHECIMENTO_AG5.md ausente da sessão — impede checagem cruzada de paleta/layout com outros clientes do nicho odontológico/médico já construídos pela AG5
6 — ANÁLISE DE REFERÊNCIAS WEBFLOW
TEMPLATE 1 — DentalCare X (BRIX Templates)

Live preview confirmado: https://dentalcaretemplate.webflow.io/home-pages/home-v1

HERO: proporção aproximada 55/45 (texto à esquerda, imagem grande à direita). Título curto e direto ("Keep your smile clean & great"), dois CTAs lado a lado (primário sólido + secundário outline), bloco de contato rápido (telefone + e-mail com ícones) posicionado abaixo do texto. Elemento diferenciador: shapes SVG decorativos soltos ao redor da imagem, quebrando o retângulo puro.

NAV: menu horizontal fixo no topo com dropdown "Pages" mega-menu categorizado (Main pages / Utility pages / Template pages); CTA "Get started" destacado à direita do menu.

TIPOGRAFIA: títulos em sans-serif geométrica de peso alto (bold/extrabold), corpo em sans-serif regular menor — hierarquia clara entre H1 grande e parágrafo descritivo curto.

CORES: aplicável ao branding do cliente: 
#04A345 como cor de CTA e ícones, 
#037904 como variação escura para textos de destaque, branco dominante como base.

SERVIÇOS/CARDS: grade densa de 14 cards (4 colunas em desktop), cada card com ícone + título curto + 1 linha de descrição + link "saiba mais" — estrutura compacta e escaneável, ideal para grande volume de serviços.

ANIMAÇÕES (técnico): título/subtítulo → translateY(24px)→0 + opacity 0→1 em 700ms, easing cubic-bezier(0.16,1,0.3,1), trigger: load, stagger 120ms. Cards de serviço → opacity 0→1 + translateY(16px)→0 em 500ms, easing ease-out, trigger: scroll, stagger 80ms entre cards.

MICRO-INTERAÇÕES: hover em cards de serviço eleva levemente o card (translateY negativo) e troca a cor do ícone para o verde primário; botões primários com hover de escurecimento sutil de fundo.

ELEMENTOS DECORATIVOS: shapes SVG orgânicos (blobs/linhas) posicionados nos cantos das seções hero e FAQ, criando movimento sem poluir o layout.

RESUMO CONSTRUTIVO: para recriar este estilo, monte um hero split assimétrico com bloco de contato rápido flutuante, seguido de uma grade densa de serviços com ícone+título+descrição curta, mantendo tipografia bold para títulos e um único acento de cor (o verde da marca) espalhado de forma consistente em CTAs, ícones e hovers.

TEMPLATE 2 — Maxilla (Webflow Template)

Live preview confirmado: https://maxilla-template.webflow.io/

HERO: proporção aproximada 60/40, título editorial grande ("Teeth aren't pearly, until you smile") sobre um selo circular pequeno acima ("smiling since 2020"), imagem em camadas sobrepostas (duas imagens de profundidades diferentes, uma coroa dental ilustrativa e uma foto real). Elemento diferenciador: sistema de 3 mini-cards flutuantes (Personalised Care / Professional Services / Affordable Prices) sobrepostos à imagem do hero.

NAV: menu horizontal simples com CTA "free quote" isolado à direita; navegação enxuta com poucos itens.

TIPOGRAFIA: títulos com uso criativo de peso leve + itálico em algumas palavras-chave, criando uma sensação editorial/humana ao invés de puramente clínica; corpo de texto compacto.

CORES: aplicável ao branding do cliente: fundo branco dominante com blocos de seção em 
#F3F8F4 (verde suave), textos de destaque em 
#037904.

SERVIÇOS/CARDS: estrutura em faixa horizontal com uma imagem grande de fundo e 3 cards de serviço sobrepostos (Dental Crowns, Dental Bridges, Dental Implants), cada um com link "service details" — layout mais editorial que grid tradicional.

ANIMAÇÕES (técnico): cards flutuantes do hero → opacity 0→1 + scale(0.94)→1 em 600ms, easing ease-out, trigger: load, delay escalonado 150ms entre os 3 cards. Bloco "about" (tabs past/present/future) → crossfade de conteúdo em 400ms ao trocar de tab, trigger: click.

MICRO-INTERAÇÕES: hover nos cards de serviço aplica leve zoom na imagem de fundo (scale 1→1.05, 400ms); links "read more" sublinham da esquerda para a direita no hover.

ELEMENTOS DECORATIVOS: uso de fotografia de equipe/depoimentos em formato circular, reforçando a sensação humana e próxima da marca.

RESUMO CONSTRUTIVO: para recriar este estilo, use uma seção "sobre" com abas temporais (passado/presente/futuro da clínica) trocando de conteúdo com crossfade, cards de depoimento com foto circular do cliente, e uma seção de serviços em faixa horizontal com cards sobrepostos a uma imagem de fundo real da clínica — priorizando fotografia humana sobre ilustração.

7 — SISTEMA DE VARIAÇÃO DE LAYOUT

Escolhas registradas para este projeto (Odontocompany Bangu Centro):

HERO: [x] D) Vídeo loop + texto com máscara de cor
SERVIÇOS: [x] B) Acordeão — cada serviço expande ao clicar
DEPOIMENTOS: [x] E) Carrossel fade + nota Google visível
SOBRE / CREDENCIAIS: [x] A) Counters animados + texto curto

Combinação registrada para diferenciação futura: HERO-D · SERV-B · DEPO-E · SOBRE-A