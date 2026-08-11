# 📋 Falta Adicionar no Schema
**Empresa:** Dentista Bangu RJ - Odontocompany Bangu Centro | Clínica Odontológica | Implantes Dentários
**Data de geração:** 11/08/2026

---

## 🔴 CRÍTICOS — Impactam SEO diretamente

- [x] `url` / `@id` / `sameAs[0]` (hasMap) — aplicada a URL padrão AG5: `http://odontocompanybangu.ag5agencia.site/` em todo o `@graph` (negócio, WebSite, WebPage), canonical, OG, Twitter, robots.txt, sitemap.xml e llms.txt. Se o domínio final de publicação for diferente deste subdomínio ag5agencia.site, substituir em todos esses arquivos antes de ir ao ar.
- [ ] `email` — Não encontrado no site nem no dossiê. Omitido do schema.
- [ ] `address.postalCode` — Presente e usado (21810-042), confirmar que segue igual ao GBP após qualquer alteração de endereço futura.

## 🟡 IMPORTANTES

- [ ] `sameAs` Facebook — Não localizado no dossiê nem no site. Omitido.
- [ ] `sameAs` LinkedIn — Não aplicável a clínica odontológica local; não incluído.
- [ ] `contactPoint` / múltiplos telefones — A clínica informou apenas 1 número (fixo = WhatsApp: +55 21 98757-5433). Estrutura de múltiplos telefones (ETAPA 4.5) não se aplica.

## 🔵 COMPLEMENTARES

- [ ] `founder.description` — Bio curta da Dra. Karoline Alves não disponível no site/dossiê; apenas nome, cargo e CRO foram incluídos.
- [ ] `founder.image` — Foto da responsável técnica não localizada.
- [ ] `founder.sameAs` — Instagram pessoal da Dra. Karoline Alves não encontrado (só o Instagram institucional da clínica).
- [ ] `legalName` — Razão social/CNPJ não exibidos no site nem no dossiê.
- [ ] `datePublished` / `dateModified` da WebPage — Não incluídos por não haver data confiável de publicação da LP.
- [ ] `hasOfferCatalog.itemListElement[].description` — Cada serviço no schema está sem descrição curta; o dossiê tem listas extensas de sub-procedimentos por especialidade que podem virar descrições de 1 linha, se desejado futuramente.

## 🟢 FAQ

- [x] Seção FAQ já existente na LP e mapeada no schema (`FAQPage` com 4 perguntas).

---

## ✅ Resolvidos Automaticamente

- [x] `identifier.Google CID` — 1227597395477104234
- [x] `identifier.Google Place ID` — ChIJmbRxGp7fmwARaoabvFNNCRE
- [x] `hasMap` + `sameAs[0]` — URL canônica `https://maps.google.com/?cid=1227597395477104234` aplicada (substituiu o link `share.google/...` que estava no schema anterior)
- [x] `geo.latitude` / `geo.longitude` — Coordenadas precisas do PlePer: -22.8794287, -43.4632837 (mais exatas que as antigas, arredondadas: -22.8797, -43.4664)
- [x] `name` — Oficial do GBP: "Odontocompany Bangu Centro"
- [x] `alternateName` — Fórmula AG5 aplicada: `Dentista Bangu RJ - Odontocompany Bangu Centro | Clínica Odontológica | Implantes Dentários`. Mesmo valor copiado em `WebSite.name`.
- [x] `areaServed` — Bairro base (Bangu) + 4 adjacentes reais informados pelo cliente (Campo Grande, Santíssimo, Realengo, Sulacap) — dossiê só listou 4, não inventei um 5º.
- [x] `paymentAccepted` — Convênios aceitos: Amil, SulAmérica, Brasil Dental, Mais Dental, Inpao
- [x] `foundingDate` — Novembro/2025
- [x] `founder.name` + `founder.jobTitle` — Dra. Karoline Alves, Responsável Técnica (CRO-RJ 41825)
- [x] `aggregateRating` — 4.9 / 109 avaliações (visível no site e confirmado no GBP)
- [x] `openingHoursSpecification` — Seg-Sex 9h-18h, Sáb 9h-13h
- [x] `@type` — Mantido `Dentist` (mais específico disponível na tabela da skill)
- [x] `hasOfferCatalog` — 8 especialidades do dossiê como `Service` dentro de `OfferCatalog`
- [x] `@graph` com `@id` únicos — #negocio, #website, #webpage, #faq

---

📌 **Após preencher cada item:** remover o `[ ]`, substituir o placeholder no Schema e revalidar em https://validator.schema.org/
📌 **NAP** deve ser idêntico ao Google Business Profile após edição
📌 **Domínio aplicado:** `http://odontocompanybangu.ag5agencia.site/` (padrão AG5: slug do nome da empresa, minúsculo, sem acento/espaço) — usado em todo o `@graph`, canonical, OG, Twitter, robots.txt, sitemap.xml e llms.txt. Se a publicação final usar outro domínio, substituir em todos esses arquivos.
