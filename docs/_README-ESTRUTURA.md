# README de Estrutura — LP OdontoCompany Bangu

> Leia este arquivo ANTES de criar ou editar qualquer página `.html` do projeto.
> Ele descreve a ESTRUTURA e as regras. O código pronto para colar está em
> `docs/_nav-footer-template.html`. Os dois nunca vão para produção (pasta `docs/`
> é bloqueada por `robots.txt`).

## 1. Mapa de páginas

| Página | Pasta | Profundidade (`{{BASE}}`) | Observações |
|---|---|---|---|
| `index.html` | raiz | `` (vazio) | Página principal — fonte única de verdade do nav/footer |
| `termos-e-condicoes.html` | raiz | `` (vazio) | Página legal, `noindex, follow` |
| `politica-de-privacidade.html` | raiz | `` (vazio) | Página legal, `noindex, follow` |

Não há páginas em subpasta neste projeto até o momento. Se criar uma (ex.: `blog/post.html`),
`{{BASE}}` = `../` para todos os caminhos do template.

## 2. Template canônico

Toda página nova parte de `docs/_nav-footer-template.html`. Ele contém, nesta ordem:
1. Nav/Header completo (logo, links âncora, botão hamburger, CTA WhatsApp)
2. Footer completo (4 colunas: marca, navegação, serviços, contato + barra inferior)
3. Botão flutuante do WhatsApp + balão de mensagem
4. Drawer mobile (menu lateral)
5. `<script src="{{BASE}}script.js" defer>`
6. Banner + modal de cookies (LGPD) + `<script src="{{BASE}}cookie-banner.js" defer>`

Substitua todo `{{BASE}}` pelo prefixo de profundidade da página (ver tabela acima).

## 3. Regra de profundidade

- **Raiz** (`index.html`, `termos-e-condicoes.html`, `politica-de-privacidade.html`):
  caminhos diretos — `assets/...`, `style.css`, `script.js`, `index.html`.
- **Subpasta** (se criada no futuro, ex. `blog/`): prefixo `../` em todos os caminhos
  relativos (`../index.html`, `../assets/...`, `../style.css`).
- Links do menu para seções que só existem na home (`#servicos`, `#sobre`, `#depoimentos`,
  `#contato`) devem sempre apontar para `{{BASE}}index.html#secao` nas páginas legais —
  nunca `#secao` sozinho, senão o link não navega (a página atual não tem essa seção).

## 4. Itens obrigatórios em TODA página

- [ ] Nav idêntico ao `index.html` (logo, 5 links âncora, botão hamburger, CTA WhatsApp)
- [ ] Footer idêntico ao `index.html` (4 colunas + barra inferior com créditos AG5)
- [ ] Drawer mobile idêntico
- [ ] Botão flutuante do WhatsApp + balão de mensagem
- [ ] Banner de cookies LGPD + modal de preferências + `cookie-banner.js`
- [ ] `script.js` linkado no fim do `<body>`, **antes** do `cookie-banner.js`
- [ ] Favicon: `<link rel="icon" href="{{BASE}}assets/favicon-odontocompany-bangu.ico" type="image/x-icon" />`
- [ ] `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] `<link rel="stylesheet" href="{{BASE}}style.css">` e `cookie-banner.css`
- [ ] Páginas legais/institucionais (termos, política): `<meta name="robots" content="noindex, follow">`

## 5. Armadilhas conhecidas do projeto

- **`script.js` roda em todas as páginas, inclusive nas legais.** As páginas legais não têm
  os grids de serviços/vídeos/FAQ/depoimentos. As funções de montagem já têm guarda de null
  (`if (!container) return`) — mantenha esse padrão em qualquer função nova. Listeners diretos
  como `document.getElementById('dep-prev').addEventListener(...)` SEM checagem de null
  quebram a página inteira (erro fatal de JS) quando o elemento não existe — sempre use
  `const el = document.getElementById('x'); if (el) el.addEventListener(...)`.
- **Slider de depoimentos** (`#slider`, `#slider-dots`, `#dep-prev`, `#dep-next`) só existe
  no `index.html`. Se remover/alterar essa seção da home, replique a mudança em `script.js`
  (array `DEPOIMENTOS` + bloco `/* Carrossel de depoimentos */`) e em `style.css`
  (`.depo-slider-wrap`, `.slider`, `.slide`, `.slider-nav`, `.slider-dot`).
- **Vídeos**: os `src` dos `<video>`/`<source>` apontam para URLs externas de CDN
  (`assets.cdn.filesafe.space`), não para arquivos locais em `assets/`. Não confundir com os
  arquivos `.mp4` locais (mantidos como backup/histórico, não usados em produção).
- **Regenerar o template quando o padrão mudar**: sempre que o nav/footer/cookie do
  `index.html` mudar, regenere `docs/_nav-footer-template.html` e reaplique nas páginas
  existentes (PASSO 3 da skill de rodapé). O template é a fonte de verdade — nenhuma página
  vira referência por acaso.

## 6. Como verificar depois de qualquer alteração de nav/footer

1. Abrir cada página (`index.html`, `termos-e-condicoes.html`, `politica-de-privacidade.html`)
   e conferir visualmente: header aparece igual, footer aparece igual (4 colunas, legível).
2. Testar o menu hamburger no mobile (abre/fecha, overlay, fecha ao clicar em link).
3. Clicar em cada link do nav e do footer e confirmar que a URL/âncora resolve corretamente
   considerando a profundidade da página.
4. Abrir o console do navegador (F12) em cada página e confirmar ausência de erros
   (404 de asset, `Cannot read properties of null` por falta de guarda em `script.js`).
5. Confirmar que o banner de cookies aparece na primeira visita e que o botão "Cookies" no
   rodapé reabre o modal de preferências.
