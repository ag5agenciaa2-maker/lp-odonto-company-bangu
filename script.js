'use strict';

/* ---------- Dados ---------- */
const SERVICOS = [
  { titulo: 'Implantes Dentários', resumo: 'Reposição de dentes perdidos com planejamento digital, do implante unitário à reabilitação completa com carga imediata.', itens: ['Implante unitário', 'Múltiplos implantes', 'Carga imediata', 'Protocolo total', 'Enxerto ósseo'], imagem: 'assets/servico-implantes-dentarios.webp', bento: 'wide' },
  { titulo: 'Prótese Dentária', resumo: 'Devolvendo função e estética à mordida, com próteses fixas, removíveis e sobre implante.', itens: ['Coroa de porcelana', 'Prótese fixa', 'Prótese removível', 'Prótese total', 'Prótese sobre implante'], imagem: 'assets/servico-protese-dentaria.webp', bento: 'wide' },
  { titulo: 'Estética Dental e Facial', resumo: 'Planejamento digital do sorriso (DSD) e procedimentos faciais para um resultado natural.', itens: ['Lentes de contato dental', 'Facetas', 'Clareamento', 'Harmonização facial', 'Toxina botulínica'], imagem: 'assets/servico-estetica-dental-facial.webp', bento: 'sm' },
  { titulo: 'Ortodontia', resumo: 'Alinhamento e correção da mordida para crianças, adolescentes e adultos.', itens: ['Aparelho fixo metálico', 'Aparelho estético', 'Aparelho autoligado', 'Manutenção mensal', 'Contenção'], imagem: 'assets/servico-ortodontia.webp', bento: 'sm' },
  { titulo: 'Endodontia', resumo: 'Tratamento de canal com anestesia eficaz e acompanhamento radiográfico digital.', itens: ['Canal em dente anterior', 'Canal em molar', 'Retratamento', 'Urgência de dor'], imagem: 'assets/servico-endodontia.webp', bento: 'sm' },
  { titulo: 'Periodontia', resumo: 'Saúde da gengiva e do osso que sustentam os seus dentes — base de qualquer tratamento duradouro.', itens: ['Limpeza profissional', 'Raspagem', 'Tratamento de gengivite', 'Periodontite', 'Cirurgia gengival'], imagem: 'assets/servico-periodontia.webp', bento: 'sm' },
  { titulo: 'Clínico Geral', resumo: 'Prevenção, restaurações e acompanhamento de rotina para toda a família.', itens: ['Avaliação e diagnóstico', 'Restauração', 'Profilaxia', 'Aplicação de flúor', 'Odontopediatria'], imagem: 'assets/servico-clinico-geral.webp', bento: 'wide' },
  { titulo: 'Extração de Sisos', resumo: 'Cirurgia de terceiros molares com raio-x panorâmico feito na própria clínica.', itens: ['Siso incluso', 'Siso semi-incluso', 'Extração simples', 'Pós-operatório acompanhado'], imagem: 'assets/servico-extracao-sisos.webp', bento: 'wide' }
];
/* Cada serviço usa "imagem" como fundo do card (gere com os prompts fornecidos e salve
   em assets/ com esse nome exato). Sem o arquivo, o card cai automaticamente no fundo
   premium padrão (gradiente + textura). "bento" controla o tamanho no mosaico: lg = grande
   (2 colunas), md = médio, sm = pequeno. */

const VIDEOS = [
  { titulo: 'Um sonho realizado', arquivo: 'odontocompany-bangu-depoimento-sonho-realizado' },
  { titulo: 'Conheça nossa equipe', arquivo: 'odontocompany-bangu-apresentacao-equipe-doutora' },
  { titulo: 'Depoimento: Evandro', arquivo: 'odontocompany-bangu-depoimento-paciente-evandro' },
  { titulo: 'Autoestima em alta', arquivo: 'odontocompany-bangu-depoimento-autoestima-sorriso' },
  { titulo: 'Depoimento: implante', arquivo: 'odontocompany-bangu-depoimento-implante-brinde' }
];

const FAQ = [
  { q: 'Atendem convênio?', a: 'Sim. Trabalhamos com Amil, SulAmérica, Brasil Dental, Mais Dental e Inpao. Se o seu plano não estiver na lista, fale com a gente pelo WhatsApp — temos condições facilitadas para particulares.' },
  { q: 'Tenho muito medo de dentista. E agora?', a: 'Você não é exceção — é a maioria. A primeira consulta é uma conversa: explicamos cada passo antes de qualquer procedimento e respeitamos o seu tempo. Nada é feito sem o seu ok.' },
  { q: 'Quanto custa a avaliação?', a: 'Agende pelo WhatsApp e nossa recepção informa as condições vigentes de avaliação e o plano de tratamento personalizado, sem compromisso.' },
  { q: 'Atendem crianças e idosos?', a: 'Sim. Atendemos todas as idades, com tratamentos personalizados para cada fase — de odontopediatria a reabilitação com prótese e implante.' }
];

const DEPOIMENTOS = [
  { nome: 'Philipe Princepe', quando: '4 meses atrás', texto: 'Excelente atendimento desde a recepção até o final do procedimento. Profissionais atenciosos, ambiente organizado e muito acolhedor. Me senti seguro e bem cuidado em todos os momentos. Recomendo a clínica sem dúvidas!' },
  { nome: 'Rodolfo Camargo', quando: '4 meses atrás', texto: 'Excelente profissional a Técnica em Saúde Bucal, clínica limpa e profissionais atenciosos. Nota 10!' },
  { nome: 'Carol Ribeiro', quando: '5 meses atrás', texto: 'Tive uma experiência muito positiva na clínica. O atendimento foi muito bom.' },
  { nome: 'Verônica Forasteiri da Paixão', quando: '3 semanas atrás', texto: 'Excelente atendimento das recepcionistas e da Dra. Ótimo ambiente.' },
  { nome: 'Priscila Princepe', quando: '4 meses atrás', texto: 'Excelente atendimento, funcionárias simpáticas e atenciosas!' },
  { nome: 'Vanessa Abreu', quando: 'há 1 dia', texto: 'Um atendimento maravilhoso, desde a recepção aos médicos. Ótima clínica.' },
  { nome: 'Greise Kelly Jesus', quando: '4 semanas atrás', texto: 'Com atendimento exemplar, os doutores sempre atenciosos, a clínica totalmente limpa e organizada.' },
  { nome: 'Rose Alves', quando: '1 semana atrás', texto: 'Ótimo atendimento, rápido e eficiente. Recomendo.' },
  { nome: 'Marcela Santiago', quando: '4 meses atrás', texto: 'Excelente atendimento! Super recomendo.' },
  { nome: 'Wolf James', quando: '3 semanas atrás', texto: 'Ótimo atendimento e serviço de qualidade! Indico.' }
];

const WHATSAPP = '5521987575433';
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------- Acordeões ---------- */
function montarAcordeao(container, itens, render, abrirPrimeiro) {
  if (!container) return;
  container.innerHTML = itens.map((it, i) => `
    <div class="acc-item" data-open="${abrirPrimeiro && i === 0 ? 'true' : 'false'}">
      <button class="acc-btn" type="button" aria-expanded="${abrirPrimeiro && i === 0}">
        ${render.head(it, i)}
        <span class="acc-plus" aria-hidden="true">+</span>
      </button>
      <div class="acc-panel"><div class="acc-body">${render.body(it)}</div></div>
    </div>`).join('');

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.acc-btn');
    if (!btn) return;
    const item = btn.parentElement;
    const aberto = item.getAttribute('data-open') === 'true';
    container.querySelectorAll('.acc-item').forEach((el) => {
      el.setAttribute('data-open', 'false');
      el.querySelector('.acc-btn').setAttribute('aria-expanded', 'false');
    });
    item.setAttribute('data-open', String(!aberto));
    btn.setAttribute('aria-expanded', String(!aberto));
  });
}

/* Ícones SVG line-style (24x24, stroke=currentColor) — um por especialidade, sem repetição */
const ICONES_SERVICOS = [
  // Implantes Dentários — parafuso de implante
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4"/><path d="M8 7h8l-1.2 3.2a2 2 0 0 1-1.9 1.3h-1.8a2 2 0 0 1-1.9-1.3L8 7Z"/><path d="M11 11.5v8.5"/><path d="M13 11.5v8.5"/><path d="M9.5 14h1.5M9.5 17h1.5M13 14h1.5M13 17h1.5"/></svg>',
  // Prótese Dentária — coroa sobre dente
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 2-3 2 2 3-3 3 3 2-2 2 3-2 2v2H7v-2Z"/><path d="M7 12c0 4 1.2 7.5 2.2 8.7.5.6 1.4.4 1.6-.3l.6-2.2a.6.6 0 0 1 1.2 0l.6 2.2c.2.7 1.1.9 1.6.3C15.8 19.5 17 16 17 12"/></svg>',
  // Estética Dental e Facial — brilho/sparkle
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="m6.5 6.5 2 2M15.5 15.5l2 2M6.5 17.5l2-2M15.5 8.5l2-2"/><circle cx="12" cy="12" r="2.4"/></svg>',
  // Ortodontia — aparelho fixo
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10c2 3 6 4 8 4s6-1 8-4"/><path d="M6 10v3M9.3 11v3M12.6 11.4v3M15.9 11v3M19 10v3"/></svg>',
  // Endodontia — dente com raiz/canal em destaque
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 5c0-1.4 2-2 3-1 .8.8 2 .8 2.6 0 .6-.8 2.2-.8 2.8 0 .6.8 1.8.8 2.6 0 1-1 3-.4 3 1 0 4-1.4 6.6-2.4 8.2a1 1 0 0 1-1.8-.2L14.6 9a1 1 0 0 0-1.9 0l-2.2 5a1 1 0 0 1-1.8.2C7.4 12.6 6 10 6 5Z"/><path d="M12 9v3"/></svg>',
  // Periodontia — gengiva protegida (escudo)
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5 5 6v5c0 4.8 3 8 7 9.5 4-1.5 7-4.7 7-9.5V6l-7-2.5Z"/><path d="M9 12.2c.9.9 1.6 1.3 2.4 1.3M9 12.2c0-1.2.9-2.2 2-2.5M15 12.2c-.9.9-1.6 1.3-2.4 1.3M15 12.2c0-1.2-.9-2.2-2-2.5"/></svg>',
  // Clínico Geral — estetoscópio
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v5.5a4 4 0 0 0 8 0V4"/><path d="M6 4H4.5M14 4h1.5"/><path d="M10 13.5v2.7a4.3 4.3 0 0 0 8.6 0v-1.3"/><circle cx="19.6" cy="14.9" r="1.6"/></svg>',
  // Extração de Sisos — dente removido (com seta de saída)
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5c0-1.4 1.6-2 2.4-1 .6.7 1.6.7 2.2 0 .8-1 2.4-.4 2.4 1 0 3.2-1.1 5.3-1.9 6.6a.8.8 0 0 1-1.5-.2l-1-3.4a.8.8 0 0 0-1.5 0l-1 3.4a.8.8 0 0 1-1.5.2C10.1 10.3 9 8.2 9 5Z"/><path d="M15 16h6m0 0-2.5-2.5M21 16l-2.5 2.5"/></svg>'
];

/* ---------- Mosaico bento de especialidades ---------- */
function montarServicosPremium(container, servicos) {
  if (!container) return;

  container.innerHTML = servicos.map((s, i) => {
    const texto = encodeURIComponent(`Olá, vim através do site e tenho interesse em ${s.titulo}.`);
    const tamanho = s.bento || 'sm';

    return `
    <a class="bento-card bento-${tamanho}" style="--d:${i * 70}ms"
       href="https://wa.me/${WHATSAPP}?text=${texto}" target="_blank" rel="noopener"
       aria-label="Agendar avaliação sobre ${esc(s.titulo)}">
      <img class="bento-bg" src="${esc(s.imagem)}" alt="" loading="lazy"
           onerror="this.closest('.bento-card').classList.add('bento-fallback');this.remove()" />
      <span class="bento-scrim" aria-hidden="true"></span>
      <span class="bento-content">
        <span class="bento-top">
          <span class="bento-num">${String(i + 1).padStart(2, '0')}</span>
          <span class="bento-icon" aria-hidden="true">${ICONES_SERVICOS[i] || ''}</span>
        </span>
        <span class="bento-bottom">
          <span class="bento-title">${esc(s.titulo)}</span>
          <span class="bento-cta">Agendar avaliação <span aria-hidden="true">→</span></span>
        </span>
      </span>
    </a>`;
  }).join('');

  const cards = container.querySelectorAll('.bento-card');
  cards.forEach((c) => { c.style.opacity = '0'; c.style.transform = 'translateY(28px)'; });
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    cards.forEach((c) => io.observe(c));
    setTimeout(() => cards.forEach((c) => c.classList.add('is-visible')), 2600);
  } else {
    cards.forEach((c) => c.classList.add('is-visible'));
  }
}

montarServicosPremium(document.getElementById('servicos-grid'), SERVICOS);

/* Mobile: mostra só os 4 primeiros serviços, com botão para revelar o restante */
(function () {
  const grid = document.getElementById('servicos-grid');
  const verMaisBtn = document.getElementById('servicos-ver-mais');
  if (!grid || !verMaisBtn) return;
  const LIMITE_MOBILE = 4;

  const textoWrap = verMaisBtn.querySelector('span');
  const setaWrap = verMaisBtn.querySelector('svg');

  const aplicarLimite = () => {
    const cards = [...grid.children];
    const ehMobile = window.innerWidth < 640;
    const expandido = grid.classList.contains('servicos-expandido');
    cards.forEach((c, i) => {
      c.classList.toggle('bento-hidden-mobile', ehMobile && i >= LIMITE_MOBILE && !expandido);
    });
    verMaisBtn.style.display = (ehMobile && cards.length > LIMITE_MOBILE) ? 'inline-flex' : 'none';
    if (textoWrap) textoWrap.textContent = expandido ? 'Ver menos especialidades' : 'Ver todas as especialidades';
    if (setaWrap) setaWrap.style.transform = expandido ? 'rotate(180deg)' : 'none';
  };

  verMaisBtn.addEventListener('click', () => {
    const expandido = grid.classList.toggle('servicos-expandido');
    aplicarLimite();
    if (!expandido) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  aplicarLimite();
  window.addEventListener('resize', aplicarLimite);
})();

/* ---------- Player customizado: troca poster por vídeo com controles próprios ---------- */
const ICONE_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7Z"/></svg>';
const ICONE_PAUSE = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>';
const ICONE_SOM = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 6a9 9 0 0 1 0 12"/></svg>';
const ICONE_MUDO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="m16 9 5 6M21 9l-5 6"/></svg>';
const ICONE_EXPANDIR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/></svg>';

function formatarTempo(s) {
  if (!isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const seg = Math.floor(s % 60).toString().padStart(2, '0');
  return `${m}:${seg}`;
}

/* Garante que só um vídeo customizado toque por vez */
const videosCustomAtivos = new Set();
function pausarOutrosVideos(exceto) {
  videosCustomAtivos.forEach((v) => { if (v !== exceto && !v.paused) v.pause(); });
}

/* Pausa e reinicia o vídeo quando a seção sai da tela. Só volta a tocar por clique manual no play. */
let videoVisibilityObserver = null;
function pausarAoSairDaTela(video) {
  if (!('IntersectionObserver' in window)) return;
  const secao = video.closest('section');
  if (!secao) return;
  if (!videoVisibilityObserver) {
    videoVisibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) return;
        const videos = entry.target._videosObservados;
        if (!videos) return;
        videos.forEach((v) => {
          if (!v.paused) v.pause();
          v.currentTime = 0;
        });
      });
    }, { threshold: 0.15 });
  }
  if (!secao._videosObservados) {
    secao._videosObservados = new Set();
    videoVisibilityObserver.observe(secao);
  }
  secao._videosObservados.add(video);
}

function montarPlayerCustom(host, src, iconWrapClass) {
  host.innerHTML = `
    <video src="${src}" playsinline disablepictureinpicture controlslist="nodownload noplaybackrate noremoteplayback"></video>
    <button class="video-toggle" type="button" aria-label="Pausar vídeo">
      <span class="${iconWrapClass}" aria-hidden="true">${ICONE_PAUSE}</span>
    </button>
    <div class="video-bar">
      <div class="video-progress" role="slider" aria-label="Progresso do vídeo" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" tabindex="0">
        <span class="video-progress-fill"></span>
      </div>
      <div class="video-bar-row">
        <span class="video-time">0:00 / 0:00</span>
        <div class="video-minictrls">
          <button class="video-mute" type="button" aria-label="Silenciar vídeo"><span aria-hidden="true">${ICONE_SOM}</span></button>
          <button class="video-expand" type="button" aria-label="Ver em tela cheia"><span aria-hidden="true">${ICONE_EXPANDIR}</span></button>
        </div>
      </div>
    </div>`;
  const video = host.querySelector('video');
  const toggle = host.querySelector('.video-toggle');
  const iconWrap = host.querySelector(`.${iconWrapClass}`);
  const muteBtn = host.querySelector('.video-mute');
  const expandBtn = host.querySelector('.video-expand');
  const progress = host.querySelector('.video-progress');
  const progressFill = host.querySelector('.video-progress-fill');
  const timeLabel = host.querySelector('.video-time');

  videosCustomAtivos.add(video);
  video.addEventListener('play', () => pausarOutrosVideos(video));
  pausarAoSairDaTela(video);

  const atualizarIcone = () => {
    iconWrap.innerHTML = video.paused ? ICONE_PLAY : ICONE_PAUSE;
    toggle.setAttribute('aria-label', video.paused ? 'Reproduzir vídeo' : 'Pausar vídeo');
    toggle.classList.toggle('is-paused', video.paused);
  };
  toggle.addEventListener('click', () => { video.paused ? video.play() : video.pause(); });
  video.addEventListener('play', atualizarIcone);
  video.addEventListener('pause', atualizarIcone);
  video.addEventListener('click', () => { video.paused ? video.play() : video.pause(); });

  video.addEventListener('timeupdate', () => {
    const pct = video.duration ? (video.currentTime / video.duration) * 100 : 0;
    progressFill.style.width = `${pct}%`;
    progress.setAttribute('aria-valuenow', String(Math.round(pct)));
    timeLabel.textContent = `${formatarTempo(video.currentTime)} / ${formatarTempo(video.duration)}`;
  });

  const buscarPorClique = (e) => {
    const rect = progress.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    if (video.duration) video.currentTime = pct * video.duration;
  };
  progress.addEventListener('click', (e) => { e.stopPropagation(); buscarPorClique(e); });
  progress.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); video.currentTime = Math.min(video.duration, video.currentTime + 5); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); video.currentTime = Math.max(0, video.currentTime - 5); }
  });

  muteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    video.muted = !video.muted;
    muteBtn.querySelector('span').innerHTML = video.muted ? ICONE_MUDO : ICONE_SOM;
    muteBtn.setAttribute('aria-label', video.muted ? 'Ativar som' : 'Silenciar vídeo');
  });

  expandBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    const alvo = host.requestFullscreen ? host : video;
    if (alvo.requestFullscreen) alvo.requestFullscreen();
    else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
  });

  document.addEventListener('fullscreenchange', () => {
    host.classList.toggle('is-fullscreen', document.fullscreenElement === host);
  });

  video.play();
}

/* ---------- Grid de vídeos com play sob demanda ---------- */
function montarVideos(container, videos) {
  if (!container) return;

  container.innerHTML = videos.map((v, i) => `
    <div class="video-card" style="--d:${i * 70}ms">
      <button class="video-play" type="button" aria-label="Reproduzir vídeo: ${esc(v.titulo)}">
        <img class="video-poster" src="assets/poster-${esc(v.arquivo)}.webp" alt="" loading="lazy" />
        <span class="video-scrim" aria-hidden="true"></span>
        <span class="video-chip">${String(i + 1).padStart(2, '0')}</span>
        <span class="video-play-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7Z"/></svg>
        </span>
        <span class="video-title"><span class="video-title-line"></span>${esc(v.titulo)}</span>
      </button>
    </div>`).join('');

  container.querySelectorAll('.video-card').forEach((card) => {
    const btn = card.querySelector('.video-play');
    btn.addEventListener('click', () => {
      const idx = [...container.children].indexOf(card);
      const v = videos[idx];
      montarPlayerCustom(card, `assets/${esc(v.arquivo)}.mp4`, 'video-play-icon');
    }, { once: true });
  });

  const cards = container.querySelectorAll('.video-card');
  cards.forEach((c) => { c.style.opacity = '0'; c.style.transform = 'translateY(24px)'; });
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    cards.forEach((c) => io.observe(c));
    setTimeout(() => cards.forEach((c) => c.classList.add('is-visible')), 2600);
  } else {
    cards.forEach((c) => c.classList.add('is-visible'));
  }
}

montarVideos(document.getElementById('videos-grid'), VIDEOS);

/* Vídeos avulsos com play sob demanda (Estrutura, A clínica) */
function ativarVideoAvulso(id, src) {
  const btn = document.getElementById(id);
  if (!btn) return;
  const iniciar = () => {
    montarPlayerCustom(btn, src, 'gb-video-icon');
    btn.classList.add('gb-video-active');
    btn.removeAttribute('role');
    btn.removeAttribute('tabindex');
  };
  btn.addEventListener('click', iniciar, { once: true });
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); iniciar(); }
  }, { once: true });
}

ativarVideoAvulso('hero-video-btn', 'assets/odontocompany-bangu-clinica-de-confianca.mp4');
ativarVideoAvulso('gb-video-btn', 'assets/odontocompany-bangu-fachada-e-tomografia.mp4');
ativarVideoAvulso('dossie-video-btn', 'assets/odontocompany-bangu-seguranca-e-naturalidade.mp4');

montarAcordeao(document.getElementById('accordion-faq'), FAQ, {
  head: (f, i) => `<span><span class="acc-num">${String(i + 1).padStart(2, '0')}</span><span class="acc-title">${esc(f.q)}</span></span>`,
  body: (f) => `<p>${esc(f.a)}</p>`
}, true);

/* ---------- Carrossel de depoimentos ---------- */
const slider = document.getElementById('slider');
let depAtual = 0;
let depTimer = null;

if (slider) {
  slider.innerHTML = DEPOIMENTOS.map((d, i) => `
    <blockquote class="slide" data-active="${i === 0}">
      <p>“${esc(d.texto)}”</p>
      <footer>
        <span class="avatar">${esc(d.nome.charAt(0))}</span>
        <span><strong>${esc(d.nome)}</strong><small>${esc(d.quando)} · ★★★★★</small></span>
      </footer>
    </blockquote>`).join('');

  const slides = slider.querySelectorAll('.slide');
  const dotsWrap = document.getElementById('slider-dots');
  if (dotsWrap) {
    dotsWrap.innerHTML = DEPOIMENTOS.map((_, i) => `<span class="slider-dot" data-active="${i === 0}"></span>`).join('');
  }
  const dots = dotsWrap ? dotsWrap.querySelectorAll('.slider-dot') : [];
  const mostrar = (i) => {
    depAtual = (i + DEPOIMENTOS.length) % DEPOIMENTOS.length;
    slides.forEach((s, n) => s.setAttribute('data-active', String(n === depAtual)));
    dots.forEach((d, n) => d.setAttribute('data-active', String(n === depAtual)));
  };
  const reiniciar = () => {
    clearInterval(depTimer);
    depTimer = setInterval(() => mostrar(depAtual + 1), 6000);
  };
  document.getElementById('dep-prev').addEventListener('click', () => { mostrar(depAtual - 1); reiniciar(); });
  document.getElementById('dep-next').addEventListener('click', () => { mostrar(depAtual + 1); reiniciar(); });

  let x0 = null;
  slider.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 45) { mostrar(depAtual + (dx < 0 ? 1 : -1)); reiniciar(); }
    x0 = null;
  }, { passive: true });

  reiniciar();
}

/* ---------- Animações de scroll ---------- */
const alvos = document.querySelectorAll('[data-reveal]');
document.querySelectorAll('.gal-card[data-reveal]').forEach((el, i) => el.style.setProperty('--d', i * 100 + 'ms'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.18 });
  alvos.forEach((t) => io.observe(t));
  setTimeout(() => alvos.forEach((t) => t.classList.add('is-visible')), 2600);
} else {
  alvos.forEach((t) => t.classList.add('is-visible'));
}

/* ---------- Contadores ---------- */
const contadores = document.querySelectorAll('[data-count]');
if ('IntersectionObserver' in window && contadores.length) {
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e, idx) => {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      const bruto = e.target.getAttribute('data-count');
      const alvo = parseFloat(bruto);
      const casas = (bruto.split('.')[1] || '').length;
      const inicio = performance.now() + idx * 150;
      const dur = 1200;
      const passo = (agora) => {
        const p = Math.min(1, Math.max(0, (agora - inicio) / dur));
        e.target.textContent = (alvo * p).toFixed(casas);
        if (p < 1) requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    });
  }, { threshold: 0.5 });
  contadores.forEach((c) => cio.observe(c));
}

/* ---------- Vídeos secundários: só tocam quando visíveis ---------- */
const videosLazy = document.querySelectorAll('[data-lazy-video]');
if ('IntersectionObserver' in window && videosLazy.length) {
  const vio = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const v = e.target;
      if (e.isIntersecting) {
        v.preload = 'auto';
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, { threshold: 0.5 });
  videosLazy.forEach((v) => vio.observe(v));
}

/* ---------- Drawer mobile ---------- */
const drawer = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const drawerToggle = document.querySelector('.nav-toggle');
const drawerClose = document.querySelector('.drawer-close');

function openDrawer() {
  if (!drawer || !drawerOverlay) return;
  drawer.classList.add('is-open');
  drawerOverlay.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  drawerOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-drawer-open');
  if (drawerToggle) drawerToggle.setAttribute('aria-expanded', 'true');
  if (drawerClose) drawerClose.focus();
}

function closeDrawer() {
  if (!drawer || !drawerOverlay) return;
  drawer.classList.remove('is-open');
  drawerOverlay.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  drawerOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-drawer-open');
  if (drawerToggle) drawerToggle.setAttribute('aria-expanded', 'false');
  if (drawerToggle) drawerToggle.focus();
}

if (drawerToggle && drawer) {
  drawerToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a[data-drawer-close]').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
  });
}

/* ---------- Header: sombra ao rolar ---------- */
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const atualizarHeader = () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 8);
  atualizarHeader();
  window.addEventListener('scroll', atualizarHeader, { passive: true });
}

/* ---------- Formulário → WhatsApp ---------- */
const form = document.getElementById('form-agendamento');
if (form) {
  const erro = (campo, msg) => {
    const el = form.querySelector(`[data-err="${campo}"]`);
    if (el) el.textContent = msg || '';
    const input = form.elements[campo];
    if (input) input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.elements.nome.value.trim();
    const email = form.elements.email.value.trim();
    const tel = form.elements.telefone.value.trim();
    const digitos = tel.replace(/\D/g, '');
    const assunto = form.elements.assunto.value;
    const mensagem = form.elements.mensagem.value.trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const okNome = erro('nome', nome.length < 3 ? 'Informe seu nome completo.' : '');
    const okEmail = erro('email', !emailOk ? 'Informe um e-mail válido.' : '');
    const okTel = erro('telefone', digitos.length < 10 ? 'Informe um WhatsApp com DDD.' : '');
    if (!okNome || !okEmail || !okTel) return;

    let texto = `Olá, me chamo ${nome}, vim através do site e gostaria de uma informação.\n`;
    texto += `\n- E-mail: ${email}`;
    texto += `\n- Telefone: ${tel}`;
    texto += `\n- Tratamento: ${assunto}`;
    if (mensagem) texto += `\n- Situação: ${mensagem}`;

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
  });

  ['nome', 'email', 'telefone'].forEach((c) => {
    form.elements[c].addEventListener('input', () => erro(c, ''));
  });
}

/* ──────────────────────────────────────────────
   WHATSAPP PREMIUM — Balão flutuante (AG5 V4)
─────────────────────────────────────────────── */
(function initWaPremium() {
  const MODO_COMPLIANCE = true;

  const bubble = document.getElementById('wa-message-bubble');
  const typing = document.getElementById('wa-typing');
  const realMessage = document.getElementById('wa-real-message');
  const badge = document.getElementById('wa-notification');
  const closeBtn = document.getElementById('wa-close-btn');
  const mainBtn = document.getElementById('wa-main-btn');
  const targetSection = document.getElementById('diferenciais');

  if (!bubble || !typing || !realMessage || !closeBtn || !mainBtn || !targetSection) return;

  const DELAY_BALAO = 25000;
  const DURATION_TYPING = 2500;
  const DURATION_BALAO_VISIVEL = 15000;
  const DELAY_BADGE_APOS_SUMIR = 5000;

  let triggered = false;
  let autoHideTimer = null;
  let badgeTimer = null;
  let userClosed = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !triggered) {
        triggered = true;
        mainBtn.classList.add('visible');

        setTimeout(() => {
          if (userClosed) return;
          bubble.classList.add('show');

          setTimeout(() => {
            if (userClosed) return;
            typing.classList.add('is-hidden');
            realMessage.classList.add('is-visible');
            requestAnimationFrame(() => realMessage.classList.add('is-in'));
          }, DURATION_TYPING);

          autoHideTimer = setTimeout(() => {
            if (userClosed) return;
            bubble.classList.remove('show');
            if (!MODO_COMPLIANCE && badge) {
              badgeTimer = setTimeout(() => {
                if (userClosed) return;
                badge.classList.add('show');
              }, DELAY_BADGE_APOS_SUMIR);
            }
          }, DURATION_BALAO_VISIVEL);
        }, DELAY_BALAO);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(targetSection);

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userClosed = true;
    bubble.classList.remove('show');
    if (autoHideTimer) clearTimeout(autoHideTimer);
    if (badgeTimer) clearTimeout(badgeTimer);
    if (!MODO_COMPLIANCE && badge) {
      setTimeout(() => { badge.classList.add('show'); }, DELAY_BADGE_APOS_SUMIR);
    }
  });

  mainBtn.addEventListener('click', () => {
    bubble.classList.remove('show');
    if (badge) badge.classList.remove('show');
    if (autoHideTimer) clearTimeout(autoHideTimer);
    if (badgeTimer) clearTimeout(badgeTimer);
  });
})();

/* Controles da Barra de Vídeo (Timeline, Tempo, Som e Tela Cheia) para o Vídeo Hero */
(() => {
  const container = document.querySelector('.hero-video');
  if (!container) return;
  const video = container.querySelector('.hero-vid');
  const progress = container.querySelector('.video-progress');
  const progressFill = container.querySelector('.video-progress-fill');
  const timeLabel = container.querySelector('.video-time');
  const muteBtn = container.querySelector('.video-mute');
  const expandBtn = container.querySelector('.video-expand');

  if (!video) return;

  if (progress && progressFill && timeLabel) {
    video.addEventListener('timeupdate', () => {
      const pct = video.duration ? (video.currentTime / video.duration) * 100 : 0;
      progressFill.style.width = `${pct}%`;
      progress.setAttribute('aria-valuenow', String(Math.round(pct)));
      timeLabel.textContent = `${formatarTempo(video.currentTime)} / ${formatarTempo(video.duration)}`;
    });

    const buscarPorClique = (e) => {
      const rect = progress.getBoundingClientRect();
      const pct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      if (video.duration) video.currentTime = pct * video.duration;
    };
    progress.addEventListener('click', (e) => { e.stopPropagation(); buscarPorClique(e); });
    progress.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); video.currentTime = Math.min(video.duration, video.currentTime + 5); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); video.currentTime = Math.max(0, video.currentTime - 5); }
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      const spanIcon = muteBtn.querySelector('span');
      if (spanIcon) spanIcon.innerHTML = video.muted ? ICONE_MUDO : ICONE_SOM;
      muteBtn.setAttribute('aria-label', video.muted ? 'Ativar som' : 'Silenciar vídeo');
    });
  }

  if (expandBtn) {
    expandBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        return;
      }
      const alvo = container.requestFullscreen ? container : video;
      if (alvo.requestFullscreen) alvo.requestFullscreen();
      else if (alvo.webkitRequestFullscreen) alvo.webkitRequestFullscreen();
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
    });
  }
})();
