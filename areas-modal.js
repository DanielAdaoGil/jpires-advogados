// ==========================================================================
// JPIRES – ÁREAS DE PRÁTICA, ATRIBUTOS E MÉTODO (conteúdo baseado na Apresentação Institucional)
// Substitui areas-modal.js e areas-pratica-modal.js (este último pode ser apagado).
// ==========================================================================
(function () {
  const MAIL = 'geral@jpiresadvogados.com';

  const AREAS = [
    { icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
      titulo: 'Banca e Seguros',
      resumo: 'Operações bancárias e de crédito, garantias, financiamento, regulação, contratos de seguro, sinistros e gestão de litígios.',
      servicos: ['Assessoria em operações bancárias e de crédito.','Análise e negociação de contratos de financiamento.','Garantias bancárias, hipotecas, penhores e outras garantias admissíveis.','Regulação e conformidade para instituições financeiras.','Análise de contratos de seguro, coberturas e exclusões.','Sinistros e pedidos de indemnização.','Recuperação de créditos e gestão de litígios financeiros e seguradores.'] },
    { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      titulo: 'Direito Empresarial',
      resumo: 'Apoio jurídico ao ciclo de vida das empresas: constituição, governação societária, contratos comerciais, investimento, reorganizações e resolução de conflitos.',
      servicos: ['Constituição de sociedades e acordos de accionistas.','Governação societária e responsabilidade dos administradores.','Contratos comerciais, de fornecimento e de prestação de serviços.','Investimento estrangeiro, parcerias e joint ventures.','Reorganizações societárias, fusões, aquisições e due diligence.','Financiamento, garantias e reestruturação de dívida.','Contencioso comercial, arbitragem e mediação.'] },
    { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      titulo: 'Direito Imobiliário',
      resumo: 'Transacções e projectos imobiliários, due diligence, titularidade e registo, arrendamento, empreitadas, urbanismo e contencioso.',
      servicos: ['Compra, venda e arrendamento de imóveis.','Due diligence, titularidade e registo.','Contratos de empreitada e subempreitada.','Urbanismo e licenciamento de projectos.','Investimento imobiliário e desenvolvimento de empreendimentos.','Incumprimento contratual, defeitos de obra e indemnizações.','Contencioso imobiliário, condomínios e propriedade.'] },
    { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      titulo: 'Direito dos Valores Mobiliários',
      resumo: 'Operações e instrumentos do mercado de capitais, ofertas, emissão e negociação de valores mobiliários, deveres de informação e conformidade regulatória.',
      servicos: ['Operações e instrumentos do mercado de capitais.','Ofertas de valores mobiliários.','Emissão e negociação de valores mobiliários.','Deveres de informação.','Conformidade regulatória.'] },
    { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      titulo: 'Direito Marítimo',
      resumo: 'Transporte marítimo, operações portuárias, contratos de afretamento, carga, seguros marítimos, responsabilidade e litígios do sector.',
      servicos: ['Transporte marítimo e operações portuárias.','Contratos de afretamento.','Carga e seguros marítimos.','Responsabilidade e litígios do sector marítimo.'] },
    { icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
      titulo: 'Direito do Petróleo e Gás',
      resumo: 'Projectos e contratos do sector energético, operações, prestação de serviços, cadeia de fornecimento, conformidade e gestão de riscos.',
      servicos: ['Projectos e operações petrolíferas.','Contratos de prestação de serviços, fornecimento, manutenção e logística.','Parcerias, joint ventures e investimento no sector energético.','Licenciamento, conformidade e obrigações regulatórias.','Gestão de riscos contratuais e resolução de litígios.'] },
    { icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
      titulo: 'Direito Mineiro',
      resumo: 'Projectos mineiros, títulos e licenças, contratos de exploração e prestação de serviços, relações institucionais e conformidade sectorial.',
      servicos: ['Acompanhamento jurídico de projectos mineiros.','Títulos, concessões e licenças.','Contratos de exploração, prospecção e prestação de serviços.','Parcerias entre investidores, operadores e empresas locais.','Relações institucionais e conformidade sectorial.','Obrigações ambientais e gestão de riscos.'] }
  ];

  // Os 4 cards de #sobre (RIGOR, CONFIANÇA, PRAGMATISMO, PARCERIA), pela mesma ordem
  const ATRIBUTOS = [
    { titulo: 'Rigor', sub: 'Rigor técnico',
      intro: 'Análise cuidada dos factos, enquadramento jurídico e avaliação de riscos.',
      itens: ['Verificação de conflitos, enquadramento e documentos logo no início do mandato.','Gestão de processos, prazos e documentação com responsáveis identificados.','Respeito pelo segredo profissional, independência e regras da Ordem dos Advogados de Angola.','Acompanhamento e supervisão dos estagiários por advogados responsáveis.'],
      nota: 'A confiança do cliente é construída em cada etapa do mandato.' },
    { titulo: 'Confiança', sub: 'Confidencialidade',
      intro: 'Protecção da informação e respeito pelo segredo profissional.',
      itens: ['Verificação de conflitos de interesses antes da aceitação de mandatos.','Procedimentos internos de confidencialidade, controlo de acessos e conservação documental.','Protecção dos documentos, dados pessoais e informação sujeita a sigilo.','Actuação com transparência, independência e prevenção de conflitos.'],
      nota: 'Relações duradouras de confiança, com rigor, independência e confidencialidade.' },
    { titulo: 'Pragmatismo', sub: 'Responsabilidade e método',
      intro: 'Gestão organizada de prazos, tarefas, documentos e entregáveis, num fluxo de trabalho claro e acompanhado.',
      itens: ['Conhecimento: compreensão do objectivo do cliente.','Verificação: conflitos, enquadramento e documentos.','Proposta: âmbito, honorários, prazos e responsabilidades.','Execução: plano de trabalho e actualizações.','Conclusão: entrega, prestação de contas e encerramento.'],
      nota: 'Soluções juridicamente sólidas e ajustadas à realidade de cada cliente.' },
    { titulo: 'Parceria', sub: 'Proximidade',
      intro: 'Comunicação clara, acompanhamento e definição de expectativas.',
      itens: ['Definição do âmbito do serviço e dos responsáveis pelo assunto.','Proposta de honorários e despesas antes do início dos trabalhos, salvo urgência acordada.','Actualizações proporcionais à natureza, complexidade e fase do assunto.','Registo das instruções e validação do cliente para decisões relevantes.','Cooperação com instituições públicas e privadas, câmaras de comércio e associações de utilidade pública.'],
      nota: 'Valor para empresas, instituições e comunidades, com responsabilidades e objectivos bem definidos.' }
  ];

  const METODO = [
    ['01','Conhecimento','Compreensão do objectivo do cliente.'],
    ['02','Verificação','Conflitos, enquadramento e documentos.'],
    ['03','Proposta','Âmbito, honorários, prazos e responsabilidades.'],
    ['04','Execução','Plano de trabalho e actualizações.'],
    ['05','Conclusão','Entrega, prestação de contas e encerramento.']
  ];

  const CHECK = '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>';
  const CLOSE = '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>';
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  document.addEventListener('DOMContentLoaded', () => {
    // ---------- Modal único, reutilizado por áreas e atributos ----------
    const modal = document.createElement('div');
    modal.className = 'area-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="area-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="jp-modal-title">
        <button type="button" class="area-modal__close" aria-label="Fechar">${CLOSE}</button>
        <div class="area-modal__eyebrow"></div>
        <h3 class="area-modal__title" id="jp-modal-title"></h3>
        <p class="area-modal__subtitle"></p>
        <p class="area-modal__intro"></p>
        <div class="area-modal__divider"></div>
        <div class="area-modal__label"></div>
        <ul class="area-modal__list"></ul>
        <div class="area-modal__objective"></div>
        <a class="area-modal__cta" href="#"><span></span><span aria-hidden="true">→</span></a>
      </div>`;
    document.body.appendChild(modal);
    const q = (s) => modal.querySelector(s);
    const dialog = q('.area-modal__dialog'), closeBtn = q('.area-modal__close');
    let lastFocused = null;

    function open(d) {
      q('.area-modal__eyebrow').textContent = d.eyebrow;
      q('.area-modal__title').textContent = d.titulo;
      q('.area-modal__subtitle').textContent = d.sub || '';
      q('.area-modal__subtitle').style.display = d.sub ? '' : 'none';
      q('.area-modal__intro').textContent = d.intro || '';
      q('.area-modal__intro').style.display = d.intro ? '' : 'none';
      q('.area-modal__label').textContent = d.label;
      q('.area-modal__list').innerHTML = d.itens.map((s) => `<li>${CHECK}<span>${esc(s)}</span></li>`).join('');
      q('.area-modal__objective').innerHTML = d.nota ? esc(d.nota) : '';
      q('.area-modal__objective').style.display = d.nota ? '' : 'none';
      q('.area-modal__cta span').textContent = d.cta;
      q('.area-modal__cta').href = `mailto:${MAIL}?subject=` + encodeURIComponent(d.assunto);
      dialog.scrollTop = 0;
      lastFocused = document.activeElement;
      if (window.JPI18N) JPI18N.apply(modal);
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      closeBtn.focus({ preventScroll: true });
    }
    function close() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      if (lastFocused) lastFocused.focus({ preventScroll: true });
    }
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('is-open')) close(); });

    const makeClickable = (el, fn) => {
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-haspopup', 'dialog');
      el.addEventListener('click', fn);
      el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } });
    };

    // ---------- 1) Áreas de prática (cards gerados) ----------
    const grid = document.getElementById('areas-grid');
    if (grid) {
      grid.innerHTML = AREAS.map((a, i) => `
        <div class="area-card group">
          <div class="area-card__top">
            <div class="area-card__icon"><svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="${a.icon}"/></svg></div>
            <span class="area-card__num">0${i + 1}</span>
          </div>
          <h3 class="area-card__title font-tnr">${esc(a.titulo)}</h3>
          <p class="area-card__text">${esc(a.resumo)}</p>
          <span class="area-card__more">Ver serviços <span aria-hidden="true">→</span></span>
        </div>`).join('');
      Array.from(grid.children).forEach((card, i) => {
        const a = AREAS[i];
        makeClickable(card, () => open({
          eyebrow: `JPires · Áreas de Prática · 0${i + 1}`, titulo: a.titulo, intro: a.resumo,
          label: 'Serviços', itens: a.servicos, cta: 'Solicitar uma consulta',
          assunto: 'Pedido de consulta – ' + a.titulo }));
      });
    }

    // ---------- 2) Atributos (4 cards em #sobre) ----------
    document.querySelectorAll('[data-atributo]').forEach((card) => {
      const a = ATRIBUTOS[+card.dataset.atributo];
      if (!a) return;
      card.insertAdjacentHTML('beforeend', '<span class="attr-more">Saber mais <span aria-hidden="true">→</span></span>');
      makeClickable(card, () => open({
        eyebrow: 'JPires · Princípios', titulo: a.titulo, sub: a.sub, intro: a.intro,
        label: 'Como se traduz no nosso trabalho', itens: a.itens, nota: a.nota,
        cta: 'Falar com a JPires', assunto: 'Contacto – ' + a.titulo }));
    });

    // ---------- 3) Método de trabalho ----------
    const metodo = document.getElementById('metodo-lista');
    if (metodo) metodo.innerHTML = METODO.map(([n, t, d]) => `
      <li class="metodo-step">
        <span class="metodo-step__n font-tnr">${n}</span>
        <h3 class="font-tnr">${t}</h3>
        <p>${d}</p>
      </li>`).join('');
  });
})();