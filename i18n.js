// ==========================================================================
// JPIRES – TRADUÇÃO DO SITE (PT por defeito · EN · FR · DE · AR · RU · IT · ZH)
// A chave é o texto original em português.
// Cada linha: [EN, FR, DE, AR, RU, IT, ZH]
// ==========================================================================
(function () {
  const IDX = { en: 0, fr: 1, de: 2, ar: 3, ru: 4, it: 5, zh: 6 };
  const FLAGS = { pt: 'ao', en: 'gb', fr: 'fr', de: 'de', ar: 'ae', ru: 'ru', it: 'it', zh: 'cn' };
  const RTL = ['ar'];
  const STORAGE_KEY = 'jpires-lang';
  const TITLE_PT = 'JPires – Sociedade de Advogados, RL | Corporate Law em Angola';

  const D = {
    /* =================== TÍTULO =================== */
    'JPires – Sociedade de Advogados, RL | Corporate Law em Angola': [
      'JPires – Law Firm, RL | Corporate Law in Angola',
      'JPires – Société d’avocats, RL | Droit des affaires en Angola',
      'JPires – Rechtsanwaltsgesellschaft, RL | Wirtschaftsrecht in Angola',
      'JPires – شركة محاماة، RL | قانون الشركات في أنغولا',
      'JPires – Юридическая фирма, RL | Корпоративное право в Анголе',
      'JPires – Studio legale, RL | Diritto societario in Angola',
      'JPires – 律师事务所, RL | 安哥拉公司法'
    ],

    /* =================== NAVBAR =================== */
    'Sobre': ['About', 'À propos', 'Über uns', 'من نحن', 'О нас', 'Chi siamo', '关于我们'],
    'Áreas de Prática': ['Practice Areas', 'Domaines d’expertise', 'Tätigkeitsbereiche', 'مجالات الممارسة', 'Направления', 'Aree di attività', '业务领域'],
    'Sectores': ['Sectors', 'Secteurs', 'Branchen', 'القطاعات', 'Отрасли', 'Settori', '行业'],
    'Equipa': ['Team', 'Équipe', 'Team', 'الفريق', 'Команда', 'Team', '团队'],
    'Honorários': ['Fees', 'Honoraires', 'Honorare', 'الأتعاب', 'Гонорары', 'Onorari', '费用'],
    'Alianças': ['Alliances', 'Alliances', 'Allianzen', 'التحالفات', 'Альянсы', 'Alleanze', '合作联盟'],
    'Contactos': ['Contact', 'Contact', 'Kontakt', 'اتصل بنا', 'Контакты', 'Contatti', '联系方式'],
    'Marcar Sessão de Diagnóstico': [
      'Book a Diagnostic Session', 'Réserver une séance de diagnostic', 'Diagnosegespräch vereinbaren',
      'احجز جلسة تشخيصية', 'Записаться на диагностическую сессию', 'Prenota una sessione diagnostica', '预约诊断会谈'
    ],
    'Sociedade de Advogados, RL': [
      'Law Firm, RL', 'Société d’avocats, RL', 'Rechtsanwaltsgesellschaft, RL',
      'شركة محاماة، RL', 'Юридическая фирма, RL', 'Studio legale, RL', '律师事务所, RL'
    ],
    'Fechar': ['Close', 'Fermer', 'Schließen', 'إغلاق', 'Закрыть', 'Chiudi', '关闭'],
    'Abrir menu': ['Open menu', 'Ouvrir le menu', 'Menü öffnen', 'فتح القائمة', 'Открыть меню', 'Apri il menu', '打开菜单'],
    'Idioma': ['Language', 'Langue', 'Sprache', 'اللغة', 'Язык', 'Lingua', '语言'],

    /* =================== HERO =================== */
    'ESCRITÓRIO DE ADVOCACIA · ANGOLA': [
      'LAW FIRM · ANGOLA', 'CABINET D’AVOCATS · ANGOLA', 'ANWALTSKANZLEI · ANGOLA',
      'مكتب محاماة · أنغولا', 'ЮРИДИЧЕСКАЯ ФИРМА · АНГОЛА', 'STUDIO LEGALE · ANGOLA', '律师事务所 · 安哥拉'
    ],
    'Corporate Law para': [
      'Corporate Law for', 'Droit des affaires pour', 'Wirtschaftsrecht für',
      'قانون الشركات من أجل', 'Корпоративное право', 'Diritto societario per', '公司法服务于'
    ],
    'Angola': ['Angola', 'Angola', 'Angola', 'أنغولا', 'Ангола', 'Angola', '安哥拉'],
    'que cresce': ['that grows', 'en pleine croissance', 'im Wachstum', 'في نمو مستمر', 'которая растёт', 'in crescita', '持续增长的企业'],
    'Sociedade de Advogados, RL · Luanda, Angola': [
      'Law Firm, RL · Luanda, Angola',
      'Société d’avocats, RL · Luanda, Angola',
      'Rechtsanwaltsgesellschaft, RL · Luanda, Angola',
      'شركة محاماة، RL · لواندا، أنغولا',
      'Юридическая фирма, RL · Луанда, Ангола',
      'Studio legale, RL · Luanda, Angola',
      '律师事务所, RL · 安哥拉卢安达'
    ],
    'Rigor, independência e confidencialidade ao serviço de empresas, instituições e particulares — para grupos angolanos e investidores internacionais que crescem com segurança em Angola.': [
      'Rigour, independence and confidentiality at the service of companies, institutions and individuals — for Angolan groups and international investors growing with confidence in Angola.',
      'Rigueur, indépendance et confidentialité au service des entreprises, institutions et particuliers — pour les groupes angolais et les investisseurs internationaux qui se développent en toute confiance en Angola.',
      'Präzision, Unabhängigkeit und Vertraulichkeit im Dienst von Unternehmen, Institutionen und Privatpersonen — für angolanische Gruppen und internationale Investoren, die in Angola sicher wachsen.',
      'الدقة والاستقلالية والسرية في خدمة الشركات والمؤسسات والأفراد — للمجموعات الأنغولية والمستثمرين الدوليين الذين ينمون بأمان في أنغولا.',
      'Точность, независимость и конфиденциальность на службе компаний, учреждений и частных лиц — для ангольских групп и иностранных инвесторов, которые растут в Анголе с уверенностью.',
      'Rigore, indipendenza e riservatezza al servizio di aziende, istituzioni e privati — per gruppi angolani e investitori internazionali che crescono con fiducia in Angola.',
      '严谨、独立与保密，服务于企业、机构与个人——助力安哥拉企业集团和国际投资者在安哥拉安全发展。'
    ],
    'Corporate': ['Corporate', 'Corporate', 'Corporate', 'الشركات', 'Корпоративное', 'Societario', '公司法'],
    'Especialização': ['Specialisation', 'Spécialisation', 'Spezialisierung', 'التخصص', 'Специализация', 'Specializzazione', '专业领域'],
    'Áreas de prática': ['Practice areas', 'Domaines d’expertise', 'Tätigkeitsbereiche', 'مجالات الممارسة', 'Направления', 'Aree di attività', '业务领域'],
    'Mercado principal': ['Main market', 'Marché principal', 'Hauptmarkt', 'السوق الرئيسي', 'Основной рынок', 'Mercato principale', '主要市场'],
    'Escritório registado': ['Registered firm', 'Cabinet enregistré', 'Eingetragene Kanzlei', 'مكتب مسجّل', 'Зарегистрированная фирма', 'Studio registrato', '注册律所'],

    /* =================== SOBRE =================== */
    'REGISTADA': ['REGISTERED', 'ENREGISTRÉE', 'EINGETRAGEN', 'مسجّلة', 'ЗАРЕГИСТРИРОВАНА', 'REGISTRATO', '已注册'],
    'JPires – Sociedade de Advogados, RL': [
      'JPires – Law Firm, RL', 'JPires – Société d’avocats, RL', 'JPires – Rechtsanwaltsgesellschaft, RL',
      'JPires – شركة محاماة، RL', 'JPires – Юридическая фирма, RL', 'JPires – Studio legale, RL', 'JPires – 律师事务所, RL'
    ],
    '“Onde o direito serve o negócio.”': [
      '“Where the law serves business.”',
      '« Là où le droit sert l’entreprise. »',
      '„Wo das Recht dem Geschäft dient.“',
      '«حيث يخدم القانون الأعمال.»',
      '«Там, где право служит бизнесу.»',
      '«Dove il diritto serve il business.»',
      '“法律服务于商业。”'
    ],
    'SOBRE O ESCRITÓRIO': ['ABOUT THE FIRM', 'À PROPOS DU CABINET', 'ÜBER DIE KANZLEI', 'عن المكتب', 'О ФИРМЕ', 'LO STUDIO', '关于律所'],
    'Rigor Jurídico com': [
      'Legal Rigour with', 'Rigueur juridique et', 'Juristische Präzision mit',
      'الدقة القانونية مع', 'Юридическая точность и', 'Rigore giuridico con', '法律严谨与'
    ],
    'visão de negócio': [
      'business vision', 'vision stratégique', 'unternehmerischem Weitblick',
      'رؤية تجارية', 'деловое видение', 'visione di business', '商业视野'
    ],
    'A JPires Sociedade de Advogados, RL é uma sociedade vocacionada para a prestação de serviços jurídicos e o acompanhamento próximo de empresas, instituições e particulares. Combinamos conhecimento técnico, visão prática do negócio e organização por áreas de especialidade, com particular atenção a sectores regulados e estratégicos da economia.': [
      'JPires Sociedade de Advogados, RL is a law firm dedicated to providing legal services and close support to companies, institutions and individuals. We combine technical knowledge, a practical business vision and organisation by areas of expertise, with particular attention to regulated and strategic sectors of the economy.',
      'JPires Sociedade de Advogados, RL est une société vouée à la prestation de services juridiques et à l’accompagnement rapproché des entreprises, institutions et particuliers. Nous combinons connaissance technique, vision pratique du business et organisation par domaines de spécialité, avec une attention particulière aux secteurs régulés et stratégiques de l’économie.',
      'JPires Sociedade de Advogados, RL ist eine Kanzlei, die sich der Erbringung juristischer Dienstleistungen und der engen Begleitung von Unternehmen, Institutionen und Privatpersonen widmet. Wir verbinden technisches Know-how, praktische Geschäftsorientierung und Organisation nach Fachgebieten – mit besonderem Augenmerk auf regulierte und strategische Wirtschaftssektoren.',
      'JPires Sociedade de Advogados, RL شركة مخصصة لتقديم الخدمات القانونية والمرافقة القريبة للشركات والمؤسسات والأفراد. نجمع بين المعرفة التقنية والرؤية العملية للأعمال والتنظيم حسب مجالات التخصص، مع اهتمام خاص بالقطاعات المنظمة والاستراتيجية في الاقتصاد.',
      'JPires Sociedade de Advogados, RL — юридическая фирма, специализирующаяся на оказании юридических услуг и тесном сопровождении компаний, учреждений и частных лиц. Мы сочетаем технические знания, практическое понимание бизнеса и организацию по направлениям специализации, уделяя особое внимание регулируемым и стратегическим секторам экономики.',
      'JPires Sociedade de Advogados, RL è uno studio dedito alla prestazione di servizi legali e all’accompagnamento ravvicinato di aziende, istituzioni e privati. Uniamo conoscenza tecnica, visione pratica del business e organizzazione per aree di specializzazione, con particolare attenzione ai settori regolamentati e strategici dell’economia.',
      'JPires Sociedade de Advogados, RL 是一家致力于提供法律服务并紧密伴随企业、机构与个人的律所。我们结合专业知识、务实商业视角与按专业领域划分的组织架构，尤其关注受监管及战略性经济行业。'
    ],
    'Missão:': ['Mission:', 'Mission :', 'Mission:', 'المهمة:', 'Миссия:', 'Missione:', '使命：'],
    'prestar serviços jurídicos de excelência, com rigor, independência e confidencialidade, criando relações duradouras de confiança e contribuindo para decisões seguras, negócios sustentáveis e instituições mais fortes.': [
      'to provide legal services of excellence, with rigour, independence and confidentiality, building lasting relationships of trust and contributing to safer decisions, sustainable businesses and stronger institutions.',
      'fournir des services juridiques d’excellence, avec rigueur, indépendance et confidentialité, en créant des relations durables de confiance et en contribuant à des décisions sûres, des entreprises durables et des institutions plus fortes.',
      'juristische Dienstleistungen mit Präzision, Unabhängigkeit und Vertraulichkeit zu erbringen, dauerhafte Vertrauensbeziehungen aufzubauen und zu sicheren Entscheidungen, nachhaltigen Geschäften und stärkeren Institutionen beizutragen.',
      'تقديم خدمات قانونية متميزة، بدقة واستقلالية وسرية، وبناء علاقات ثقة دائمة والمساهمة في قرارات آمنة وأعمال مستدامة ومؤسسات أقوى.',
      'оказывать юридические услуги высочайшего уровня с точностью, независимостью и конфиденциальностью, создавая прочные доверительные отношения и способствуя безопасным решениям, устойчивому бизнесу и более сильным институтам.',
      'fornire servizi legali di eccellenza, con rigore, indipendenza e riservatezza, creando relazioni durature di fiducia e contribuendo a decisioni sicure, business sostenibili e istituzioni più solide.',
      '以严谨、独立和保密的方式提供卓越的法律服务，建立持久的信任关系，助力安全决策、可持续经营与更强大的机构。'
    ],
    'RIGOR': ['RIGOUR', 'RIGUEUR', 'PRÄZISION', 'الدقة', 'ТОЧНОСТЬ', 'RIGORE', '严谨'],
    'Excelência técnica em cada mandato.': [
      'Technical excellence in every mandate.', 'Excellence technique dans chaque mandat.', 'Fachliche Exzellenz in jedem Mandat.',
      'التميز التقني في كل تكليف.', 'Техническое совершенство в каждом поручении.', 'Eccellenza tecnica in ogni mandato.', '每一项委托都追求技术卓越。'
    ],
    'CONFIANÇA': ['TRUST', 'CONFIANCE', 'VERTRAUEN', 'الثقة', 'ДОВЕРИЕ', 'FIDUCIA', '信任'],
    'Confidencialidade e integridade.': [
      'Confidentiality and integrity.', 'Confidentialité et intégrité.', 'Vertraulichkeit und Integrität.',
      'السرية والنزاهة.', 'Конфиденциальность и добросовестность.', 'Riservatezza e integrità.', '保密与诚信。'
    ],
    'PRAGMATISMO': ['PRAGMATISM', 'PRAGMATISME', 'PRAGMATISMUS', 'الواقعية', 'ПРАГМАТИЗМ', 'PRAGMATISMO', '务实'],
    'Soluções práticas e accionáveis.': [
      'Practical, actionable solutions.', 'Des solutions pratiques et applicables.', 'Praxisnahe, umsetzbare Lösungen.',
      'حلول عملية وقابلة للتنفيذ.', 'Практичные и осуществимые решения.', 'Soluzioni pratiche e attuabili.', '切实可行的解决方案。'
    ],
    'PARCERIA': ['PARTNERSHIP', 'PARTENARIAT', 'PARTNERSCHAFT', 'الشراكة', 'ПАРТНЁРСТВО', 'PARTNERSHIP', '伙伴关系'],
    'Relações de longo prazo.': [
      'Long-term relationships.', 'Des relations durables.', 'Langfristige Beziehungen.',
      'علاقات طويلة الأمد.', 'Долгосрочные отношения.', 'Relazioni a lungo termine.', '长期合作关系。'
    ],

    /* =================== ÁREAS DE PRÁTICA (cabeçalho secção) =================== */
    'ÁREAS DE PRÁTICA E SERVIÇOS': [
      'PRACTICE AREAS AND SERVICES', 'DOMAINES D’EXPERTISE ET SERVICES', 'TÄTIGKEITSBEREICHE UND DIENSTLEISTUNGEN',
      'مجالات الممارسة والخدمات', 'НАПРАВЛЕНИЯ И УСЛУГИ', 'AREE DI ATTIVITÀ E SERVIZI', '业务领域与服务'
    ],
    'Competência jurídica': [
      'Specialised legal', 'Compétence juridique', 'Juristische Kompetenz',
      'الكفاءة القانونية', 'Юридическая компетенция', 'Competenza giuridica', '专业法律'
    ],
    'especializada': [
      'expertise', 'spécialisée', 'mit Spezialisierung',
      'متخصصة', 'специализированная', 'specializzata', '专长'
    ],
    'Compreensão dos sectores, dos negócios e dos desafios dos nossos clientes.': [
      'An understanding of our clients’ sectors, businesses and challenges.',
      'Compréhension des secteurs, des affaires et des défis de nos clients.',
      'Verständnis der Branchen, Geschäfte und Herausforderungen unserer Mandanten.',
      'فهم قطاعات عملائنا وأعمالهم وتحدياتهم.',
      'Понимание отраслей, бизнеса и задач наших клиентов.',
      'Comprensione dei settori, delle attività e delle sfide dei nostri clienti.',
      '深入了解客户的行业、业务与挑战。'
    ],

    /* =================== MÉTODO DE TRABALHO =================== */
    'MÉTODO DE TRABALHO': [
      'WORKING METHOD', 'MÉTHODE DE TRAVAIL', 'ARBEITSMETHODE',
      'منهجية العمل', 'МЕТОД РАБОТЫ', 'METODO DI LAVORO', '工作方法'
    ],
    'Do primeiro contacto': [
      'From first contact', 'Du premier contact', 'Vom ersten Kontakt',
      'من أول تواصل', 'С первого контакта', 'Dal primo contatto', '从第一次接触'
    ],
    'ao encerramento': [
      'to closing', 'à la clôture', 'bis zum Abschluss',
      'إلى الإغلاق', 'до завершения', 'alla chiusura', '到结案'
    ],
    'Um fluxo de trabalho claro e acompanhado.': [
      'A clear, closely monitored workflow.',
      'Un flux de travail clair et suivi.',
      'Ein klarer, eng begleiteter Arbeitsablauf.',
      'سير عمل واضح ومتابَع عن كثب.',
      'Чёткий и контролируемый рабочий процесс.',
      'Un flusso di lavoro chiaro e seguito.',
      '清晰、全程跟进的工作流程。'
    ],
    'Conhecimento': ['Knowledge', 'Connaissance', 'Kenntnis', 'المعرفة', 'Знакомство', 'Conoscenza', '了解'],
    'Compreensão do objectivo do cliente.': [
      'Understanding the client’s objective.', 'Compréhension de l’objectif du client.', 'Verständnis des Mandantenziels.',
      'فهم هدف العميل.', 'Понимание цели клиента.', 'Comprensione dell’obiettivo del cliente.', '了解客户目标。'
    ],
    'Verificação': ['Verification', 'Vérification', 'Prüfung', 'التحقق', 'Проверка', 'Verifica', '核实'],
    'Conflitos, enquadramento e documentos.': [
      'Conflicts, legal framework and documents.', 'Conflits, cadre juridique et documents.', 'Konflikte, rechtlicher Rahmen und Unterlagen.',
      'التعارضات والإطار القانوني والمستندات.', 'Конфликты, правовая база и документы.', 'Conflitti, inquadramento e documenti.', '冲突、法律框架与文件。'
    ],
    'Proposta': ['Proposal', 'Proposition', 'Angebot', 'العرض', 'Предложение', 'Proposta', '方案'],
    'Âmbito, honorários, prazos e responsabilidades.': [
      'Scope, fees, deadlines and responsibilities.', 'Périmètre, honoraires, délais et responsabilités.', 'Umfang, Honorare, Fristen und Verantwortlichkeiten.',
      'النطاق والأتعاب والمواعيد والمسؤوليات.', 'Объём, гонорары, сроки и обязанности.', 'Ambito, onorari, scadenze e responsabilità.', '范围、费用、期限与责任。'
    ],
    'Execução': ['Execution', 'Exécution', 'Umsetzung', 'التنفيذ', 'Исполнение', 'Esecuzione', '执行'],
    'Plano de trabalho e actualizações.': [
      'Work plan and updates.', 'Plan de travail et mises à jour.', 'Arbeitsplan und Aktualisierungen.',
      'خطة العمل والتحديثات.', 'План работы и обновления.', 'Piano di lavoro e aggiornamenti.', '工作计划与进展更新。'
    ],
    'Conclusão': ['Conclusion', 'Conclusion', 'Abschluss', 'الاختتام', 'Завершение', 'Conclusione', '收尾'],
    'Entrega, prestação de contas e encerramento.': [
      'Delivery, reporting and closing.', 'Livraison, reddition de comptes et clôture.', 'Übergabe, Rechenschaft und Abschluss.',
      'التسليم وتقديم الحسابات والإغلاق.', 'Передача, отчётность и закрытие.', 'Consegna, rendicontazione e chiusura.', '交付、结算与结案。'
    ],

    /* =================== EQUIPA =================== */
    'LIDERANÇA E EQUIPA': [
      'LEADERSHIP AND TEAM', 'DIRECTION ET ÉQUIPE', 'FÜHRUNG UND TEAM',
      'القيادة والفريق', 'РУКОВОДСТВО И КОМАНДА', 'LEADERSHIP E TEAM', '领导层与团队'
    ],
    'A Equipa': ['The Team', 'L’équipe', 'Das Team', 'الفريق', 'Команда', 'Il Team', '团队'],
    'CEO · Managing Partner': [
      'CEO · Managing Partner', 'PDG · Associé gérant', 'CEO · Managing Partner',
      'الرئيس التنفيذي · الشريك المدير', 'Генеральный директор · Управляющий партнёр', 'CEO · Managing Partner', '首席执行官 · 管理合伙人'
    ],
    'Senior Lawyer': ['Senior Lawyer', 'Avocat principal', 'Senior-Anwalt', 'محامٍ أول', 'Старший юрист', 'Avvocato senior', '资深律师'],
    'Associate Partner': ['Associate Partner', 'Associé', 'Associate Partner', 'شريك مساعد', 'Ассоциированный партнёр', 'Associate Partner', '副合伙人'],

    /* =================== HONORÁRIOS =================== */
    'MODELOS DE COLABORAÇÃO': [
      'COLLABORATION MODELS', 'MODÈLES DE COLLABORATION', 'ZUSAMMENARBEITSMODELLE',
      'نماذج التعاون', 'МОДЕЛИ СОТРУДНИЧЕСТВА', 'MODELLI DI COLLABORAZIONE', '合作模式'
    ],
    'Transparentes': ['& Transparent', '& transparents', '& transparent', 'والشفافية', 'и прозрачные', 'e trasparenti', '与透明'],
    'Os nossos honorários são definidos em função do perfil do cliente, da complexidade do mandato e das condições do mercado. Prezamos pela transparência, equilíbrio e valor real entregue — sempre com abertura para negociação.': [
      'Our fees are defined according to the client profile, the complexity of the mandate and market conditions. We value transparency, balance and real value delivered — always open to negotiation.',
      'Nos honoraires sont définis en fonction du profil du client, de la complexité du mandat et des conditions du marché. Nous privilégions la transparence, l’équilibre et la valeur réelle apportée — toujours ouverts à la négociation.',
      'Unsere Honorare richten sich nach dem Profil des Mandanten, der Komplexität des Mandats und den Marktbedingungen. Wir legen Wert auf Transparenz, Ausgewogenheit und echten Mehrwert — stets verhandlungsbereit.',
      'تُحدَّد أتعابنا بحسب ملف العميل وتعقيد التكليف وظروف السوق. نحرص على الشفافية والتوازن والقيمة الحقيقية المقدّمة — مع انفتاح دائم على التفاوض.',
      'Наши гонорары определяются с учётом профиля клиента, сложности поручения и рыночных условий. Мы ценим прозрачность, баланс и реальную ценность — всегда открыты к переговорам.',
      'I nostri onorari sono definiti in base al profilo del cliente, alla complessità del mandato e alle condizioni di mercato. Puntiamo su trasparenza, equilibrio e valore reale offerto — sempre aperti alla negoziazione.',
      '我们的费用根据客户情况、委托复杂度和市场条件确定。我们注重透明、公平和所创造的实际价值——始终愿意协商。'
    ],
    'AVENÇA MENSAL': ['MONTHLY RETAINER', 'FORFAIT MENSUEL', 'MONATLICHES MANDAT', 'اتفاقية شهرية', 'ЕЖЕМЕСЯЧНЫЙ АБОНЕМЕНТ', 'CANONE MENSILE', '月度委托'],
    '★ RECOMENDADO': ['★ RECOMMENDED', '★ RECOMMANDÉ', '★ EMPFOHLEN', '★ موصى به', '★ РЕКОМЕНДУЕМ', '★ CONSIGLIATO', '★ 推荐'],
    'DEDICAÇÃO PARCIAL': ['PART-TIME DEDICATION', 'DÉDICATION PARTIELLE', 'TEILZEIT-BETREUUNG', 'تفرغ جزئي', 'ЧАСТИЧНАЯ ЗАНЯТОСТЬ', 'DEDICAZIONE PARZIALE', '部分驻场服务'],
    'ESSENCIAL': ['ESSENTIAL', 'ESSENTIEL', 'ESSENTIAL', 'الأساسية', 'БАЗОВЫЙ', 'ESSENZIALE', '基础版'],
    'ESTRATÉGICO': ['STRATEGIC', 'STRATÉGIQUE', 'STRATEGISCH', 'الاستراتيجية', 'СТРАТЕГИЧЕСКИЙ', 'STRATEGICO', '战略版'],
    'PREMIUM': ['PREMIUM', 'PREMIUM', 'PREMIUM', 'بريميوم', 'ПРЕМИУМ', 'PREMIUM', '高级版'],
    'Sob Consulta': ['On Request', 'Sur demande', 'Auf Anfrage', 'عند الطلب', 'По запросу', 'Su richiesta', '面议'],
    'Adaptado ao cliente e ao mercado': [
      'Tailored to the client and the market', 'Adapté au client et au marché', 'Angepasst an Mandant und Markt',
      'مصمّم حسب العميل والسوق', 'Адаптировано под клиента и рынок', 'Su misura per cliente e mercato', '按客户与市场量身定制'
    ],
    'Até 8h de assessoria mensal': [
      'Up to 8h of advisory per month', 'Jusqu’à 8 h de conseil par mois', 'Bis zu 8 Std. Beratung pro Monat',
      'حتى 8 ساعات استشارة شهرياً', 'До 8 часов консультаций в месяц', 'Fino a 8 ore di consulenza al mese', '每月最多8小时咨询'
    ],
    'Revisão de contratos': ['Contract review', 'Révision de contrats', 'Vertragsprüfung', 'مراجعة العقود', 'Проверка договоров', 'Revisione dei contratti', '合同审查'],
    'Consultas urgentes incluídas': [
      'Urgent consultations included', 'Consultations urgentes incluses', 'Dringende Anfragen inklusive',
      'الاستشارات العاجلة مشمولة', 'Срочные консультации включены', 'Consulenze urgenti incluse', '包含紧急咨询'
    ],
    'Relatório mensal de risco jurídico': [
      'Monthly legal risk report', 'Rapport mensuel des risques juridiques', 'Monatlicher Rechtsrisikobericht',
      'تقرير شهري للمخاطر القانونية', 'Ежемесячный отчёт о юридических рисках', 'Report mensile sul rischio legale', '月度法律风险报告'
    ],
    'Plano à medida — detalhes sob consulta com consultoria dedicada.': [
      'Tailor-made plan — details on request with dedicated consultancy.',
      'Plan sur mesure — détails sur demande avec un conseil dédié.',
      'Maßgeschneiderter Plan — Details auf Anfrage mit eigener Betreuung.',
      'خطة مصمّمة حسب الطلب — التفاصيل عند الاستشارة مع فريق مخصص.',
      'Индивидуальный план — подробности по запросу у выделенного консультанта.',
      'Piano su misura — dettagli su richiesta con consulenza dedicata.',
      '定制方案——详情请咨询专属顾问。'
    ],
    'Presença regular na empresa': [
      'Regular presence at the company', 'Présence régulière dans l’entreprise', 'Regelmäßige Präsenz im Unternehmen',
      'حضور منتظم في الشركة', 'Регулярное присутствие в компании', 'Presenza regolare in azienda', '定期驻企业服务'
    ],
    'Representação em negociações': [
      'Representation in negotiations', 'Représentation lors des négociations', 'Vertretung in Verhandlungen',
      'التمثيل في المفاوضات', 'Представительство на переговорах', 'Rappresentanza nelle negoziazioni', '代表参与谈判'
    ],
    'Gestão jurídica completa': [
      'Full legal management', 'Gestion juridique complète', 'Umfassendes Rechtsmanagement',
      'إدارة قانونية متكاملة', 'Полное юридическое сопровождение', 'Gestione legale completa', '全面法律管理'
    ],
    'Acesso directo e prioritário': [
      'Direct, priority access', 'Accès direct et prioritaire', 'Direkter, bevorzugter Zugang',
      'وصول مباشر وذو أولوية', 'Прямой приоритетный доступ', 'Accesso diretto e prioritario', '直接优先联系渠道'
    ],
    'Relatórios executivos mensais': [
      'Monthly executive reports', 'Rapports exécutifs mensuels', 'Monatliche Management-Berichte',
      'تقارير تنفيذية شهرية', 'Ежемесячные управленческие отчёты', 'Report esecutivi mensili', '月度高管报告'
    ],
    'Solicitar Proposta': [
      'Request a Proposal', 'Demander une proposition', 'Angebot anfordern',
      'اطلب عرضاً', 'Запросить предложение', 'Richiedi una proposta', '申请报价方案'
    ],

    /* =================== ALIANÇAS =================== */
    'ALIANÇAS INTERNACIONAIS': [
      'INTERNATIONAL ALLIANCES', 'ALLIANCES INTERNATIONALES', 'INTERNATIONALE ALLIANZEN',
      'التحالفات الدولية', 'МЕЖДУНАРОДНЫЕ АЛЬЯНСЫ', 'ALLEANZE INTERNAZIONALI', '国际合作联盟'
    ],
    'Alianças em': ['Alliances across', 'Des alliances sur', 'Allianzen auf', 'تحالفات في', 'Альянсы на', 'Alleanze in', '联盟遍布'],
    'três continentes': ['three continents', 'trois continents', 'drei Kontinenten', 'ثلاث قارات', 'трёх континентах', 'tre continenti', '三大洲'],
    'A JPires mantém alianças estratégicas com parceiros na Europa, em África e na América.': [
      'JPires maintains strategic alliances with partners in Europe, Africa and the Americas.',
      'JPires entretient des alliances stratégiques avec des partenaires en Europe, en Afrique et en Amérique.',
      'JPires unterhält strategische Allianzen mit Partnern in Europa, Afrika und Amerika.',
      'تحتفظ JPires بتحالفات استراتيجية مع شركاء في أوروبا وأفريقيا والأمريكتين.',
      'JPires поддерживает стратегические альянсы с партнёрами в Европе, Африке и Америке.',
      'JPires mantiene alleanze strategiche con partner in Europa, Africa e America.',
      'JPires 与欧洲、非洲和美洲的合作伙伴保持战略联盟关系。'
    ],
    'África': ['Africa', 'Afrique', 'Afrika', 'أفريقيا', 'Африка', 'Africa', '非洲'],
    'Europa': ['Europe', 'Europe', 'Europa', 'أوروبا', 'Европа', 'Europa', '欧洲'],
    'América do Norte': ['North America', 'Amérique du Nord', 'Nordamerika', 'أمريكا الشمالية', 'Северная Америка', 'Nord America', '北美洲'],
    'América do Sul': ['South America', 'Amérique du Sud', 'Südamerika', 'أمريكا الجنوبية', 'Южная Америка', 'Sud America', '南美洲'],
    'Portugal': ['Portugal', 'Portugal', 'Portugal', 'البرتغال', 'Португалия', 'Portogallo', '葡萄牙'],
    'Brasil': ['Brazil', 'Brésil', 'Brasilien', 'البرازيل', 'Бразилия', 'Brasile', '巴西'],
    'Estados Unidos': ['United States', 'États-Unis', 'Vereinigte Staaten', 'الولايات المتحدة', 'США', 'Stati Uniti', '美国'],
    'Reino Unido': ['United Kingdom', 'Royaume-Uni', 'Vereinigtes Königreich', 'المملكة المتحدة', 'Великобритания', 'Regno Unito', '英国'],
    'Emirados Árabes Unidos': [
      'United Arab Emirates', 'Émirats arabes unis', 'Vereinigte Arabische Emirate',
      'الإمارات العربية المتحدة', 'ОАЭ', 'Emirati Arabi Uniti', '阿拉伯联合酋长国'
    ],
    'Alemanha': ['Germany', 'Allemagne', 'Deutschland', 'ألمانيا', 'Германия', 'Germania', '德国'],
    'Luanda (Sede)': [
      'Luanda (Headquarters)', 'Luanda (Siège)', 'Luanda (Hauptsitz)',
      'لواندا (المقر)', 'Луанда (штаб-квартира)', 'Luanda (sede)', '卢安达（总部）'
    ],

    /* =================== CONTACTOS =================== */
    'FALE CONNOSCO': ['CONTACT US', 'CONTACTEZ-NOUS', 'KONTAKT', 'تواصل معنا', 'СВЯЖИТЕСЬ С НАМИ', 'CONTATTACI', '联系我们'],
    'Comece com uma': ['Start with a', 'Commencez par une', 'Beginnen Sie mit einem', 'ابدأ بـ', 'Начните с', 'Inizia con una', '从一次'],
    'conversa': ['conversation', 'conversation', 'Gespräch', 'محادثة', 'разговора', 'conversazione', '交谈开始'],
    'Sessão de diagnóstico inicial gratuita — 60 minutos, sem compromisso. Avaliamos como podemos ser úteis ao seu negócio.': [
      'Free initial diagnostic session — 60 minutes, no commitment. We assess how we can be useful to your business.',
      'Séance de diagnostic initiale gratuite — 60 minutes, sans engagement. Nous évaluons comment nous pouvons être utiles à votre entreprise.',
      'Kostenloses Erstgespräch zur Diagnose — 60 Minuten, unverbindlich. Wir prüfen, wie wir Ihrem Unternehmen nützlich sein können.',
      'جلسة تشخيص أولية مجانية — 60 دقيقة، دون أي التزام. نقيّم كيف يمكننا خدمة أعمالك.',
      'Бесплатная первичная диагностическая сессия — 60 минут, без обязательств. Мы оценим, чем можем быть полезны вашему бизнесу.',
      'Sessione diagnostica iniziale gratuita — 60 minuti, senza impegno. Valutiamo come possiamo essere utili alla tua attività.',
      '免费初步诊断会谈——60分钟，无任何义务。我们将评估如何为您的业务提供帮助。'
    ],
    'ENDEREÇO': ['ADDRESS', 'ADRESSE', 'ADRESSE', 'العنوان', 'АДРЕС', 'INDIRIZZO', '地址'],
    'Loanda Towers, 11º Andar, Sala 04, Luanda, Angola': [
      'Loanda Towers, 11th Floor, Room 04, Luanda, Angola',
      'Loanda Towers, 11e étage, salle 04, Luanda, Angola',
      'Loanda Towers, 11. Stock, Raum 04, Luanda, Angola',
      'لواندا تاورز، الطابق 11، الغرفة 04، لواندا، أنغولا',
      'Loanda Towers, 11 этаж, офис 04, Луанда, Ангола',
      'Loanda Towers, 11º piano, sala 04, Luanda, Angola',
      '安哥拉卢安达 Loanda Towers 11层04室'
    ],
    'Luanda, Angola': ['Luanda, Angola', 'Luanda, Angola', 'Luanda, Angola', 'لواندا، أنغولا', 'Луанда, Ангола', 'Luanda, Angola', '安哥拉卢安达'],
    'TELEFONE': ['PHONE', 'TÉLÉPHONE', 'TELEFON', 'الهاتف', 'ТЕЛЕФОН', 'TELEFONO', '电话'],
    'Atendimento Corporativo': [
      'Corporate Service', 'Service entreprises', 'Unternehmensservice',
      'خدمة الشركات', 'Обслуживание корпоративных клиентов', 'Servizio aziende', '企业客户服务'
    ],
    'EMAIL': ['EMAIL', 'E-MAIL', 'E-MAIL', 'البريد الإلكتروني', 'ЭЛ. ПОЧТА', 'EMAIL', '电子邮件'],
    'Directório de Sócios': [
      'Partners Directory', 'Annuaire des associés', 'Partnerverzeichnis',
      'دليل الشركاء', 'Справочник партнёров', 'Elenco dei soci', '合伙人名录'
    ],

    /* =================== RODAPÉ =================== */
    'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Confidencial': [
      'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Confidential',
      'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Confidentiel',
      'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Vertraulich',
      'JPires – Sociedade de Advogados, RL · Corporate Law · لواندا، أنغولا · سري',
      'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Конфиденциально',
      'JPires – Sociedade de Advogados, RL · Corporate Law · Luanda, Angola · Riservato',
      'JPires – Sociedade de Advogados, RL · Corporate Law · 安哥拉卢安达 · 保密'
    ],

    /* =================== MODAL: ETIQUETAS FIXAS =================== */
    'JPires · Áreas de Prática': [
      'JPires · Practice Areas', 'JPires · Domaines d’expertise', 'JPires · Tätigkeitsbereiche',
      'JPires · مجالات الممارسة', 'JPires · Направления деятельности', 'JPires · Aree di attività', 'JPires · 业务领域'
    ],
    'JPires · Princípios': [
      'JPires · Principles', 'JPires · Principes', 'JPires · Grundsätze',
      'JPires · المبادئ', 'JPires · Принципы', 'JPires · Principi', 'JPires · 原则'
    ],
    'Serviços': ['Services', 'Services', 'Leistungen', 'الخدمات', 'Услуги', 'Servizi', '服务'],
    'Como se traduz no nosso trabalho': [
      'How it translates into our work', 'Comment cela se traduit dans notre travail', 'Wie sich das in unserer Arbeit zeigt',
      'كيف يترجم ذلك في عملنا', 'Как это отражается в нашей работе', 'Come si traduce nel nostro lavoro', '如何体现在我们的工作中'
    ],
    'Solicitar uma consulta': [
      'Request a consultation', 'Demander une consultation', 'Beratung anfragen',
      'اطلب استشارة', 'Запросить консультацию', 'Richiedi una consulenza', '预约咨询'
    ],
    'Falar com a JPires': [
      'Talk to JPires', 'Parler à JPires', 'Mit JPires sprechen',
      'تحدث مع JPires', 'Связаться с JPires', 'Parla con JPires', '联系 JPires'
    ],
    'Ver serviços': ['View services', 'Voir les services', 'Leistungen ansehen', 'عرض الخدمات', 'Посмотреть услуги', 'Vedi i servizi', '查看服务'],

    /* =================== MODAL: ÁREAS (títulos, resumos, serviços) =================== */
    'Banca e Seguros': ['Banking and Insurance', 'Banque et assurances', 'Banken und Versicherungen', 'البنوك والتأمين', 'Банковское дело и страхование', 'Banche e assicurazioni', '银行与保险'],
    'Operações bancárias e de crédito, garantias, financiamento, regulação, contratos de seguro, sinistros e gestão de litígios.': [
      'Banking and credit operations, guarantees, financing, regulation, insurance contracts, claims and dispute management.',
      'Opérations bancaires et de crédit, garanties, financement, réglementation, contrats d’assurance, sinistres et gestion des litiges.',
      'Bank- und Kreditgeschäfte, Garantien, Finanzierung, Regulierung, Versicherungsverträge, Schadensfälle und Streitbeilegung.',
      'العمليات المصرفية والائتمانية والضمانات والتمويل والتنظيم وعقود التأمين والمطالبات وإدارة المنازعات.',
      'Банковские и кредитные операции, гарантии, финансирование, регулирование, страховые договоры, страховые случаи и управление спорами.',
      'Operazioni bancarie e creditizie, garanzie, finanziamento, regolamentazione, contratti assicurativi, sinistri e gestione delle controversie.',
      '银行与信贷业务、担保、融资、监管、保险合同、理赔及争议管理。'
    ],
    'Assessoria em operações bancárias e de crédito.': [
      'Advisory on banking and credit operations.', 'Conseil en opérations bancaires et de crédit.', 'Beratung bei Bank- und Kreditgeschäften.',
      'الاستشارة في العمليات المصرفية والائتمانية.', 'Консультирование по банковским и кредитным операциям.', 'Consulenza su operazioni bancarie e creditizie.', '银行与信贷业务咨询。'
    ],
    'Análise e negociação de contratos de financiamento.': [
      'Analysis and negotiation of financing contracts.', 'Analyse et négociation de contrats de financement.', 'Analyse und Verhandlung von Finanzierungsverträgen.',
      'تحليل وتفاوض عقود التمويل.', 'Анализ и согласование договоров финансирования.', 'Analisi e negoziazione di contratti di finanziamento.', '融资合同的分析与谈判。'
    ],
    'Garantias bancárias, hipotecas, penhores e outras garantias admissíveis.': [
      'Bank guarantees, mortgages, pledges and other admissible guarantees.',
      'Garanties bancaires, hypothèques, nantissements et autres garanties admissibles.',
      'Bankbürgschaften, Hypotheken, Pfandrechte und andere zulässige Sicherheiten.',
      'الضمانات المصرفية والرهون العقارية والضمانات الأخرى المسموح بها.',
      'Банковские гарантии, ипотеки, залоги и иные допустимые обеспечения.',
      'Garanzie bancarie, ipoteche, pegni e altre garanzie ammissibili.',
      '银行担保、抵押、质押及其他可接受担保。'
    ],
    'Regulação e conformidade para instituições financeiras.': [
      'Regulation and compliance for financial institutions.', 'Réglementation et conformité pour les institutions financières.', 'Regulierung und Compliance für Finanzinstitute.',
      'التنظيم والامتثال للمؤسسات المالية.', 'Регулирование и комплаенс для финансовых учреждений.', 'Regolamentazione e compliance per le istituzioni finanziarie.', '金融机构的监管与合规。'
    ],
    'Análise de contratos de seguro, coberturas e exclusões.': [
      'Analysis of insurance contracts, coverages and exclusions.', 'Analyse des contrats d’assurance, garanties et exclusions.', 'Analyse von Versicherungsverträgen, Deckungen und Ausschlüssen.',
      'تحليل عقود التأمين والتغطيات والاستثناءات.', 'Анализ страховых договоров, покрытий и исключений.', 'Analisi di contratti assicurativi, coperture ed esclusioni.', '保险合同、保障与免责条款的分析。'
    ],
    'Sinistros e pedidos de indemnização.': [
      'Claims and indemnity requests.', 'Sinistres et demandes d’indemnisation.', 'Schadensfälle und Entschädigungsansprüche.',
      'المطالبات وطلبات التعويض.', 'Страховые случаи и требования о возмещении.', 'Sinistri e richieste di risarcimento.', '理赔与赔偿请求。'
    ],
    'Recuperação de créditos e gestão de litígios financeiros e seguradores.': [
      'Debt recovery and management of financial and insurance disputes.', 'Recouvrement de créances et gestion de litiges financiers et d’assurance.', 'Forderungseinzug und Führung von Finanz- und Versicherungsstreitigkeiten.',
      'تحصيل الديون وإدارة النزاعات المالية والتأمينية.', 'Взыскание задолженности и управление финансовыми и страховыми спорами.', 'Recupero crediti e gestione di contenziosi finanziari e assicurativi.', '债务追讨及金融与保险争议管理。'
    ],
    'Direito Empresarial': ['Corporate Law', 'Droit des affaires', 'Gesellschaftsrecht', 'قانون الشركات', 'Корпоративное право', 'Diritto societario', '公司法'],
    'Apoio jurídico ao ciclo de vida das empresas: constituição, governação societária, contratos comerciais, investimento, reorganizações e resolução de conflitos.': [
      'Legal support throughout the corporate life cycle: incorporation, corporate governance, commercial contracts, investment, reorganisations and dispute resolution.',
      'Assistance juridique sur tout le cycle de vie de l’entreprise : constitution, gouvernance, contrats commerciaux, investissement, réorganisations et résolution des litiges.',
      'Rechtliche Begleitung des gesamten Unternehmenszyklus: Gründung, Corporate Governance, Handelsverträge, Investitionen, Umstrukturierungen und Streitbeilegung.',
      'الدعم القانوني على امتداد دورة حياة الشركات: التأسيس والحوكمة والعقود التجارية والاستثمار وإعادة الهيكلة وتسوية النزاعات.',
      'Юридическое сопровождение на всех этапах жизненного цикла компаний: создание, корпоративное управление, коммерческие договоры, инвестиции, реорганизации и разрешение споров.',
      'Assistenza legale lungo tutto il ciclo di vita aziendale: costituzione, governance, contratti commerciali, investimenti, riorganizzazioni e risoluzione delle controversie.',
      '公司全生命周期的法律支持：设立、公司治理、商事合同、投资、重组及争议解决。'
    ],
    'Constituição de sociedades e acordos de accionistas.': [
      'Company incorporation and shareholders’ agreements.', 'Constitution de sociétés et pactes d’actionnaires.', 'Gründung von Gesellschaften und Gesellschaftervereinbarungen.',
      'تأسيس الشركات واتفاقيات المساهمين.', 'Создание компаний и акционерные соглашения.', 'Costituzione di società e patti parasociali.', '公司设立与股东协议。'
    ],
    'Governação societária e responsabilidade dos administradores.': [
      'Corporate governance and directors’ liability.', 'Gouvernance d’entreprise et responsabilité des administrateurs.', 'Corporate Governance und Haftung der Organe.',
      'حوكمة الشركات ومسؤولية المديرين.', 'Корпоративное управление и ответственность директоров.', 'Governance societaria e responsabilità degli amministratori.', '公司治理与董事责任。'
    ],
    'Contratos comerciais, de fornecimento e de prestação de serviços.': [
      'Commercial, supply and service contracts.', 'Contrats commerciaux, de fourniture et de prestation de services.', 'Handels-, Liefer- und Dienstleistungsverträge.',
      'العقود التجارية وعقود التوريد والخدمات.', 'Коммерческие договоры, договоры поставки и оказания услуг.', 'Contratti commerciali, di fornitura e di prestazione di servizi.', '商事合同、供应合同与服务合同。'
    ],
    'Investimento estrangeiro, parcerias e joint ventures.': [
      'Foreign investment, partnerships and joint ventures.', 'Investissement étranger, partenariats et joint ventures.', 'Auslandsinvestitionen, Partnerschaften und Joint Ventures.',
      'الاستثمار الأجنبي والشراكات والمشاريع المشتركة.', 'Иностранные инвестиции, партнёрства и совместные предприятия.', 'Investimenti esteri, partnership e joint venture.', '外国投资、合伙与合资企业。'
    ],
    'Reorganizações societárias, fusões, aquisições e due diligence.': [
      'Corporate reorganisations, mergers, acquisitions and due diligence.', 'Réorganisations sociétaires, fusions, acquisitions et due diligence.', 'Umstrukturierungen, Fusionen, Übernahmen und Due Diligence.',
      'إعادة الهيكلة والاندماج والاستحواذ والفحص النافي للجهالة.', 'Реорганизации, слияния, поглощения и комплексная проверка.', 'Riorganizzazioni societarie, fusioni, acquisizioni e due diligence.', '公司重组、合并、收购与尽职调查。'
    ],
    'Financiamento, garantias e reestruturação de dívida.': [
      'Financing, guarantees and debt restructuring.', 'Financement, garanties et restructuration de dette.', 'Finanzierung, Garantien und Umschuldung.',
      'التمويل والضمانات وإعادة هيكلة الديون.', 'Финансирование, гарантии и реструктуризация долга.', 'Finanziamento, garanzie e ristrutturazione del debito.', '融资、担保与债务重组。'
    ],
    'Contencioso comercial, arbitragem e mediação.': [
      'Commercial litigation, arbitration and mediation.', 'Contentieux commercial, arbitrage et médiation.', 'Handelsstreitigkeiten, Schiedsverfahren und Mediation.',
      'التقاضي التجاري والتحكيم والوساطة.', 'Коммерческие споры, арбитраж и медиация.', 'Contenzioso commerciale, arbitrato e mediazione.', '商事诉讼、仲裁与调解。'
    ],
    'Direito Imobiliário': ['Real Estate Law', 'Droit immobilier', 'Immobilienrecht', 'قانون العقارات', 'Право недвижимости', 'Diritto immobiliare', '房地产法'],
    'Transacções e projectos imobiliários, due diligence, titularidade e registo, arrendamento, empreitadas, urbanismo e contencioso.': [
      'Real estate transactions and projects, due diligence, title and registration, leasing, construction, planning and litigation.',
      'Transactions et projets immobiliers, due diligence, propriété et enregistrement, baux, construction, urbanisme et contentieux.',
      'Immobilientransaktionen und -projekte, Due Diligence, Eigentum und Registrierung, Vermietung, Bau, Stadtplanung und Streitigkeiten.',
      'الصفقات والمشاريع العقارية والفحص النافي للجهالة والملكية والتسجيل والإيجار والبناء والتخطيط العمراني والتقاضي.',
      'Сделки и проекты в сфере недвижимости, комплексная проверка, право собственности и регистрация, аренда, строительство, градостроительство и споры.',
      'Operazioni e progetti immobiliari, due diligence, proprietà e registrazione, locazioni, appalti, urbanistica e contenzioso.',
      '房地产交易与项目、尽职调查、产权与登记、租赁、工程承包、城市规划及诉讼。'
    ],
    'Compra, venda e arrendamento de imóveis.': [
      'Purchase, sale and lease of real estate.', 'Achat, vente et location de biens immobiliers.', 'Kauf, Verkauf und Vermietung von Immobilien.',
      'بيع وشراء وإيجار العقارات.', 'Купля-продажа и аренда недвижимости.', 'Compravendita e locazione di immobili.', '房地产的买卖与租赁。'
    ],
    'Due diligence, titularidade e registo.': [
      'Due diligence, title and registration.', 'Due diligence, propriété et enregistrement.', 'Due Diligence, Eigentum und Registrierung.',
      'الفحص النافي للجهالة والملكية والتسجيل.', 'Комплексная проверка, право собственности и регистрация.', 'Due diligence, proprietà e registrazione.', '尽职调查、产权与登记。'
    ],
    'Contratos de empreitada e subempreitada.': [
      'Construction and subcontracting contracts.', 'Contrats d’entreprise et de sous-traitance.', 'Werk- und Unterlieferverträge.',
      'عقود المقاولة والمقاولة من الباطن.', 'Договоры подряда и субподряда.', 'Contratti di appalto e subappalto.', '工程承包与分包合同。'
    ],
    'Urbanismo e licenciamento de projectos.': [
      'Planning and project licensing.', 'Urbanisme et autorisations de projets.', 'Stadtplanung und Projektgenehmigungen.',
      'التخطيط العمراني وترخيص المشاريع.', 'Градостроительство и лицензирование проектов.', 'Urbanistica e autorizzazioni di progetti.', '城市规划与项目许可。'
    ],
    'Investimento imobiliário e desenvolvimento de empreendimentos.': [
      'Real estate investment and development.', 'Investissement immobilier et développement de projets.', 'Immobilieninvestitionen und Projektentwicklung.',
      'الاستثمار العقاري وتطوير المشاريع.', 'Инвестиции в недвижимость и девелопмент.', 'Investimenti immobiliari e sviluppo di progetti.', '房地产投资与项目开发。'
    ],
    'Incumprimento contratual, defeitos de obra e indemnizações.': [
      'Contractual breach, construction defects and compensation.', 'Inexécution contractuelle, vices de construction et indemnisation.', 'Vertragsverletzung, Baumängel und Entschädigung.',
      'الإخلال بالعقد وعيوب البناء والتعويضات.', 'Нарушение договора, дефекты строительства и компенсации.', 'Inadempimento contrattuale, vizi di costruzione e risarcimenti.', '违约、工程瑕疵与赔偿。'
    ],
    'Contencioso imobiliário, condomínios e propriedade.': [
      'Real estate litigation, condominiums and property.', 'Contentieux immobilier, copropriétés et propriété.', 'Immobilienstreitigkeiten, WEG und Eigentum.',
      'التقاضي العقاري والملكية المشتركة والحقوق العينية.', 'Споры о недвижимости, кондоминиумы и собственность.', 'Contenzioso immobiliare, condomini e proprietà.', '房地产诉讼、公寓与产权。'
    ],
    'Direito dos Valores Mobiliários': [
      'Securities Law', 'Droit des valeurs mobilières', 'Wertpapierrecht',
      'قانون الأوراق المالية', 'Право ценных бумаг', 'Diritto dei valori mobiliari', '证券法'
    ],
    'Operações e instrumentos do mercado de capitais, ofertas, emissão e negociação de valores mobiliários, deveres de informação e conformidade regulatória.': [
      'Capital market operations and instruments, offerings, issuance and trading of securities, disclosure duties and regulatory compliance.',
      'Opérations et instruments de marché de capitaux, offres, émission et négociation de valeurs mobilières, obligations d’information et conformité réglementaire.',
      'Kapitalmarktgeschäfte und -instrumente, Angebote, Emission und Handel von Wertpapieren, Informationspflichten und regulatorische Compliance.',
      'عمليات وأدوات أسواق المال، والعروض، وإصدار وتداول الأوراق المالية، وواجبات الإفصاح والامتثال التنظيمي.',
      'Операции и инструменты рынка капитала, предложения, выпуск и обращение ценных бумаг, обязанности раскрытия информации и регуляторный комплаенс.',
      'Operazioni e strumenti dei mercati dei capitali, offerte, emissione e negoziazione di valori mobiliari, obblighi informativi e conformità normativa.',
      '资本市场业务与工具、证券发行与交易、信息披露义务及监管合规。'
    ],
    'Operações e instrumentos do mercado de capitais.': [
      'Capital market operations and instruments.', 'Opérations et instruments de marché de capitaux.', 'Kapitalmarktgeschäfte und -instrumente.',
      'عمليات وأدوات أسواق المال.', 'Операции и инструменты рынка капитала.', 'Operazioni e strumenti dei mercati dei capitali.', '资本市场业务与工具。'
    ],
    'Ofertas de valores mobiliários.': [
      'Securities offerings.', 'Offres de valeurs mobilières.', 'Wertpapierangebote.',
      'عروض الأوراق المالية.', 'Предложения ценных бумаг.', 'Offerte di valori mobiliari.', '证券发行。'
    ],
    'Emissão e negociação de valores mobiliários.': [
      'Issuance and trading of securities.', 'Émission et négociation de valeurs mobilières.', 'Emission und Handel von Wertpapieren.',
      'إصدار وتداول الأوراق المالية.', 'Выпуск и обращение ценных бумаг.', 'Emissione e negoziazione di valori mobiliari.', '证券的发行与交易。'
    ],
    'Deveres de informação.': [
      'Disclosure duties.', 'Obligations d’information.', 'Informationspflichten.',
      'واجبات الإفصاح.', 'Обязанности по раскрытию информации.', 'Obblighi informativi.', '信息披露义务。'
    ],
    'Conformidade regulatória.': [
      'Regulatory compliance.', 'Conformité réglementaire.', 'Regulatorische Compliance.',
      'الامتثال التنظيمي.', 'Регуляторный комплаенс.', 'Conformità normativa.', '监管合规。'
    ],
    'Direito Marítimo': ['Maritime Law', 'Droit maritime', 'Seerecht', 'القانون البحري', 'Морское право', 'Diritto marittimo', '海事法'],
    'Transporte marítimo, operações portuárias, contratos de afretamento, carga, seguros marítimos, responsabilidade e litígios do sector.': [
      'Maritime transport, port operations, charterparties, cargo, marine insurance, liability and sector disputes.',
      'Transport maritime, opérations portuaires, contrats d’affrètement, cargaison, assurances maritimes, responsabilité et litiges du secteur.',
      'Seetransport, Hafenbetrieb, Charterverträge, Ladung, Seetransportversicherung, Haftung und Branchenstreitigkeiten.',
      'النقل البحري والعمليات الميناوية وعقود الإيجار البحري والبضائع والتأمين البحري والمسؤولية والنزاعات في القطاع.',
      'Морские перевозки, портовые операции, договоры фрахтования, грузы, морское страхование, ответственность и отраслевые споры.',
      'Trasporto marittimo, operazioni portuali, contratti di noleggio, carico, assicurazioni marittime, responsabilità e contenziosi di settore.',
      '海上运输、港口作业、租船合同、货物、海上保险、责任及行业争议。'
    ],
    'Transporte marítimo e operações portuárias.': [
      'Maritime transport and port operations.', 'Transport maritime et opérations portuaires.', 'Seetransport und Hafenbetrieb.',
      'النقل البحري والعمليات الميناوية.', 'Морские перевозки и портовые операции.', 'Trasporto marittimo e operazioni portuali.', '海上运输与港口作业。'
    ],
    'Contratos de afretamento.': [
      'Charterparty contracts.', 'Contrats d’affrètement.', 'Charterverträge.',
      'عقود الإيجار البحري.', 'Договоры фрахтования.', 'Contratti di noleggio.', '租船合同。'
    ],
    'Carga e seguros marítimos.': [
      'Cargo and marine insurance.', 'Cargaison et assurances maritimes.', 'Ladung und Seetransportversicherung.',
      'البضائع والتأمين البحري.', 'Грузы и морское страхование.', 'Carico e assicurazioni marittime.', '货物与海上保险。'
    ],
    'Responsabilidade e litígios do sector marítimo.': [
      'Liability and disputes in the maritime sector.', 'Responsabilité et litiges du secteur maritime.', 'Haftung und Streitigkeiten im Seeverkehrssektor.',
      'المسؤولية والنزاعات في القطاع البحري.', 'Ответственность и споры в морском секторе.', 'Responsabilità e contenziosi del settore marittimo.', '海事领域的责任与争议。'
    ],
    'Direito do Petróleo e Gás': [
      'Oil & Gas Law', 'Droit du pétrole et du gaz', 'Öl- und Gasrecht',
      'قانون النفط والغاز', 'Нефтегазовое право', 'Diritto del petrolio e del gas', '石油与天然气法'
    ],
    'Projectos e contratos do sector energético, operações, prestação de serviços, cadeia de fornecimento, conformidade e gestão de riscos.': [
      'Energy sector projects and contracts, operations, service provision, supply chain, compliance and risk management.',
      'Projets et contrats du secteur de l’énergie, opérations, prestation de services, chaîne d’approvisionnement, conformité et gestion des risques.',
      'Projekte und Verträge im Energiesektor, Betrieb, Dienstleistungen, Lieferkette, Compliance und Risikomanagement.',
      'مشاريع وعقود قطاع الطاقة والعمليات وتقديم الخدمات وسلسلة التوريد والامتثال وإدارة المخاطر.',
      'Проекты и договоры в энергетическом секторе, операции, оказание услуг, цепочка поставок, комплаенс и управление рисками.',
      'Progetti e contratti del settore energetico, operazioni, prestazione di servizi, supply chain, compliance e gestione dei rischi.',
      '能源行业的项目与合同、运营、服务提供、供应链、合规及风险管理。'
    ],
    'Projectos e operações petrolíferas.': [
      'Oil and gas projects and operations.', 'Projets et opérations pétroliers et gaziers.', 'Erdöl- und Gasprojekte und -betrieb.',
      'المشاريع والعمليات النفطية والغازية.', 'Нефтегазовые проекты и операции.', 'Progetti e operazioni petrolifere e gasifere.', '石油与天然气项目及运营。'
    ],
    'Contratos de prestação de serviços, fornecimento, manutenção e logística.': [
      'Service, supply, maintenance and logistics contracts.', 'Contrats de prestation de services, de fourniture, de maintenance et de logistique.', 'Dienstleistungs-, Liefer-, Wartungs- und Logistikverträge.',
      'عقود الخدمات والتوريد والصيانة والخدمات اللوجستية.', 'Договоры оказания услуг, поставки, технического обслуживания и логистики.', 'Contratti di servizi, fornitura, manutenzione e logistica.', '服务、供应、维护与物流合同。'
    ],
    'Parcerias, joint ventures e investimento no sector energético.': [
      'Partnerships, joint ventures and investment in the energy sector.', 'Partenariats, joint ventures et investissement dans le secteur de l’énergie.', 'Partnerschaften, Joint Ventures und Investitionen im Energiesektor.',
      'الشراكات والمشاريع المشتركة والاستثمار في قطاع الطاقة.', 'Партнёрства, совместные предприятия и инвестиции в энергетике.', 'Partnership, joint venture e investimenti nel settore energetico.', '能源领域的合伙、合资与投资。'
    ],
    'Licenciamento, conformidade e obrigações regulatórias.': [
      'Licensing, compliance and regulatory obligations.', 'Autorisations, conformité et obligations réglementaires.', 'Genehmigungen, Compliance und regulatorische Pflichten.',
      'الترخيص والامتثال والالتزامات التنظيمية.', 'Лицензирование, комплаенс и регуляторные обязательства.', 'Autorizzazioni, conformità e obblighi normativi.', '许可、合规与监管义务。'
    ],
    'Gestão de riscos contratuais e resolução de litígios.': [
      'Contractual risk management and dispute resolution.', 'Gestion des risques contractuels et résolution des litiges.', 'Vertragsrisikomanagement und Streitbeilegung.',
      'إدارة المخاطر التعاقدية وتسوية النزاعات.', 'Управление договорными рисками и разрешение споров.', 'Gestione dei rischi contrattuali e risoluzione delle controversie.', '合同风险管理与争议解决。'
    ],
    'Direito Mineiro': ['Mining Law', 'Droit minier', 'Bergrecht', 'قانون التعدين', 'Горное право', 'Diritto minerario', '矿业法'],
    'Projectos mineiros, títulos e licenças, contratos de exploração e prestação de serviços, relações institucionais e conformidade sectorial.': [
      'Mining projects, titles and licences, exploration and service contracts, institutional relations and sector compliance.',
      'Projets miniers, titres et licences, contrats d’exploration et de services, relations institutionnelles et conformité sectorielle.',
      'Bergbauprojekte, Titel und Lizenzen, Explorations- und Dienstleistungsverträge, institutionelle Beziehungen und Branchen-Compliance.',
      'المشاريع التعدينية والألقاب والتراخيص وعقود الاستكشاف والخدمات والعلاقات المؤسسية والامتثال القطاعي.',
      'Горные проекты, титулы и лицензии, договоры на разведку и оказание услуг, институциональные отношения и отраслевой комплаенс.',
      'Progetti minerari, titoli e licenze, contratti di esplorazione e di servizi, relazioni istituzionali e conformità settoriale.',
      '矿业项目、权属与许可、勘探与服务合同、机构关系及行业合规。'
    ],
    'Acompanhamento jurídico de projectos mineiros.': [
      'Legal support for mining projects.', 'Accompagnement juridique de projets miniers.', 'Rechtliche Begleitung von Bergbauprojekten.',
      'المرافقة القانونية للمشاريع التعدينية.', 'Юридическое сопровождение горных проектов.', 'Assistenza legale ai progetti minerari.', '矿业项目的法律支持。'
    ],
    'Títulos, concessões e licenças.': [
      'Titles, concessions and licences.', 'Titres, concessions et licences.', 'Titel, Konzessionen und Lizenzen.',
      'الألقاب والامتيازات والتراخيص.', 'Титулы, концессии и лицензии.', 'Titoli, concessioni e licenze.', '权属、特许与许可。'
    ],
    'Contratos de exploração, prospecção e prestação de serviços.': [
      'Exploration, prospecting and service contracts.', 'Contrats d’exploitation, de prospection et de prestation de services.', 'Explorations-, Prospektions- und Dienstleistungsverträge.',
      'عقود الاستغلال والتنقيب وتقديم الخدمات.', 'Договоры на добычу, разведку и оказание услуг.', 'Contratti di sfruttamento, prospezione e prestazione di servizi.', '开采、勘探与服务合同。'
    ],
    'Parcerias entre investidores, operadores e empresas locais.': [
      'Partnerships between investors, operators and local companies.', 'Partenariats entre investisseurs, opérateurs et entreprises locales.', 'Partnerschaften zwischen Investoren, Betreibern und lokalen Unternehmen.',
      'الشراكات بين المستثمرين والمشغلين والشركات المحلية.', 'Партнёрства между инвесторами, операторами и местными компаниями.', 'Partnership tra investitori, operatori e imprese locali.', '投资者、运营商与本地企业之间的合作。'
    ],
    'Relações institucionais e conformidade sectorial.': [
      'Institutional relations and sector compliance.', 'Relations institutionnelles et conformité sectorielle.', 'Institutionelle Beziehungen und Branchen-Compliance.',
      'العلاقات المؤسسية والامتثال القطاعي.', 'Институциональные отношения и отраслевой комплаенс.', 'Relazioni istituzionali e conformità settoriale.', '机构关系与行业合规。'
    ],
    'Obrigações ambientais e gestão de riscos.': [
      'Environmental obligations and risk management.', 'Obligations environnementales et gestion des risques.', 'Umweltpflichten und Risikomanagement.',
      'الالتزامات البيئية وإدارة المخاطر.', 'Экологические обязательства и управление рисками.', 'Obblighi ambientali e gestione dei rischi.', '环境义务与风险管理。'
    ],

    /* =================== MODAL: ATRIBUTOS =================== */
    'Rigor': ['Rigour', 'Rigueur', 'Präzision', 'الدقة', 'Точность', 'Rigore', '严谨'],
    'Rigor técnico': ['Technical rigour', 'Rigueur technique', 'Technische Präzision', 'الدقة التقنية', 'Техническая точность', 'Rigore tecnico', '技术严谨'],
    'Análise cuidada dos factos, enquadramento jurídico e avaliação de riscos.': [
      'Careful analysis of the facts, legal framework and risk assessment.',
      'Analyse minutieuse des faits, cadre juridique et évaluation des risques.',
      'Sorgfältige Analyse der Fakten, rechtliche Einordnung und Risikobewertung.',
      'تحليل دقيق للوقائع والإطار القانوني وتقييم المخاطر.',
      'Тщательный анализ фактов, правовая квалификация и оценка рисков.',
      'Analisi accurata dei fatti, inquadramento giuridico e valutazione dei rischi.',
      '对事实的细致分析、法律框架梳理与风险评估。'
    ],
    'Verificação de conflitos, enquadramento e documentos logo no início do mandato.': [
      'Conflict checks, legal framing and document review at the start of the mandate.',
      'Vérification des conflits, cadrage juridique et revue documentaire dès le début du mandat.',
      'Konfliktprüfung, rechtliche Einordnung und Dokumentenprüfung zu Beginn des Mandats.',
      'فحص التعارضات والتأطير القانوني ومراجعة المستندات في بداية التكليف.',
      'Проверка конфликтов интересов, правовая квалификация и анализ документов в начале работы.',
      'Verifica dei conflitti, inquadramento e revisione documentale fin dall’inizio del mandato.',
      '委托开始即进行冲突核查、法律框架梳理及文件审阅。'
    ],
    'Gestão de processos, prazos e documentação com responsáveis identificados.': [
      'Management of matters, deadlines and documentation with identified owners.',
      'Gestion des dossiers, délais et documentation avec des responsables identifiés.',
      'Verwaltung von Verfahren, Fristen und Dokumentation mit benannten Verantwortlichen.',
      'إدارة الملفات والمواعيد والوثائق بمسؤولين محددين.',
      'Управление делами, сроками и документацией с назначенными ответственными.',
      'Gestione di fascicoli, scadenze e documentazione con responsabili identificati.',
      '案件、期限与文件的管理，并明确责任人。'
    ],
    'Respeito pelo segredo profissional, independência e regras da Ordem dos Advogados de Angola.': [
      'Respect for professional secrecy, independence and the rules of the Angolan Bar Association.',
      'Respect du secret professionnel, de l’indépendance et des règles de l’Ordre des avocats d’Angola.',
      'Achtung des Berufsgeheimnisses, der Unabhängigkeit und der Regeln der Anwaltskammer von Angola.',
      'احترام السر المهني والاستقلالية وقواعد نقابة المحامين الأنغولية.',
      'Соблюдение профессиональной тайны, независимости и правил Коллегии адвокатов Анголы.',
      'Rispetto del segreto professionale, dell’indipendenza e delle regole dell’Ordine degli avvocati dell’Angola.',
      '尊重职业保密、独立性及安哥拉律师协会规则。'
    ],
    'Acompanhamento e supervisão dos estagiários por advogados responsáveis.': [
      'Trainees are mentored and supervised by responsible lawyers.',
      'Accompagnement et supervision des stagiaires par des avocats responsables.',
      'Begleitung und Aufsicht der Referendare durch verantwortliche Anwälte.',
      'مرافقة المتدربين والإشراف عليهم من قِبل محامين مسؤولين.',
      'Сопровождение и надзор за стажёрами со стороны ответственных адвокатов.',
      'Accompagnamento e supervisione dei praticanti da parte di avvocati responsabili.',
      '由负责律师带教和监督实习律师。'
    ],
    'A confiança do cliente é construída em cada etapa do mandato.': [
      'Client trust is built at every stage of the mandate.',
      'La confiance du client se construit à chaque étape du mandat.',
      'Das Vertrauen des Mandanten wird in jeder Phase des Mandats aufgebaut.',
      'تُبنى ثقة العميل في كل مرحلة من مراحل التكليف.',
      'Доверие клиента строится на каждом этапе поручения.',
      'La fiducia del cliente si costruisce in ogni fase del mandato.',
      '客户信任在委托的每个阶段中积累。'
    ],
    'Confiança': ['Trust', 'Confiance', 'Vertrauen', 'الثقة', 'Доверие', 'Fiducia', '信任'],
    'Confidencialidade': ['Confidentiality', 'Confidentialité', 'Vertraulichkeit', 'السرية', 'Конфиденциальность', 'Riservatezza', '保密'],
    'Protecção da informação e respeito pelo segredo profissional.': [
      'Protection of information and respect for professional secrecy.',
      'Protection de l’information et respect du secret professionnel.',
      'Schutz der Informationen und Achtung des Berufsgeheimnisses.',
      'حماية المعلومات واحترام السر المهني.',
      'Защита информации и соблюдение профессиональной тайны.',
      'Protezione delle informazioni e rispetto del segreto professionale.',
      '信息保护与职业保密。'
    ],
    'Verificação de conflitos de interesses antes da aceitação de mandatos.': [
      'Conflict of interest checks before accepting mandates.',
      'Vérification des conflits d’intérêts avant l’acceptation des mandats.',
      'Prüfung von Interessenkonflikten vor Annahme von Mandaten.',
      'فحص تضارب المصالح قبل قبول التكليفات.',
      'Проверка конфликтов интересов до принятия поручений.',
      'Verifica dei conflitti di interesse prima dell’accettazione degli incarichi.',
      '接受委托前核查利益冲突。'
    ],
    'Procedimentos internos de confidencialidade, controlo de acessos e conservação documental.': [
      'Internal confidentiality procedures, access control and document retention.',
      'Procédures internes de confidentialité, contrôle des accès et conservation documentaire.',
      'Interne Vertraulichkeitsverfahren, Zugangskontrolle und Dokumentenaufbewahrung.',
      'إجراءات داخلية للسرية وضبط الوصول وحفظ الوثائق.',
      'Внутренние процедуры конфиденциальности, контроль доступа и хранение документов.',
      'Procedure interne di riservatezza, controllo degli accessi e conservazione documentale.',
      '内部保密程序、访问控制与文档保存。'
    ],
    'Protecção dos documentos, dados pessoais e informação sujeita a sigilo.': [
      'Protection of documents, personal data and information subject to secrecy.',
      'Protection des documents, des données personnelles et des informations soumises au secret.',
      'Schutz von Dokumenten, personenbezogenen Daten und geheimhaltungspflichtigen Informationen.',
      'حماية الوثائق والبيانات الشخصية والمعلومات الخاضعة للسرية.',
      'Защита документов, персональных данных и сведений, охраняемых тайной.',
      'Protezione di documenti, dati personali e informazioni coperte da segreto.',
      '文件、个人数据及受保密约束信息的保护。'
    ],
    'Actuação com transparência, independência e prevenção de conflitos.': [
      'Conduct with transparency, independence and conflict prevention.',
      'Agir avec transparence, indépendance et prévention des conflits.',
      'Handeln mit Transparenz, Unabhängigkeit und Konfliktprävention.',
      'العمل بشفافية واستقلالية والوقاية من النزاعات.',
      'Работа с прозрачностью, независимостью и предупреждением конфликтов.',
      'Agire con trasparenza, indipendenza e prevenzione dei conflitti.',
      '以透明、独立并防范冲突的方式行事。'
    ],
    'Relações duradouras de confiança, com rigor, independência e confidencialidade.': [
      'Lasting relationships of trust, with rigour, independence and confidentiality.',
      'Des relations de confiance durables, dans la rigueur, l’indépendance et la confidentialité.',
      'Dauerhafte Vertrauensbeziehungen mit Präzision, Unabhängigkeit und Vertraulichkeit.',
      'علاقات ثقة دائمة، بدقة واستقلالية وسرية.',
      'Прочные доверительные отношения, основанные на точности, независимости и конфиденциальности.',
      'Relazioni di fiducia durature, con rigore, indipendenza e riservatezza.',
      '以严谨、独立与保密构建长期信任。'
    ],
    'Pragmatismo': ['Pragmatism', 'Pragmatisme', 'Pragmatismus', 'الواقعية', 'Прагматизм', 'Pragmatismo', '务实'],
    'Responsabilidade e método': ['Responsibility and method', 'Responsabilité et méthode', 'Verantwortung und Methode', 'المسؤولية والمنهجية', 'Ответственность и методичность', 'Responsabilità e metodo', '责任与方法'],
    'Gestão organizada de prazos, tarefas, documentos e entregáveis, num fluxo de trabalho claro e acompanhado.': [
      'Organised management of deadlines, tasks, documents and deliverables, in a clear and monitored workflow.',
      'Gestion organisée des délais, tâches, documents et livrables, dans un flux de travail clair et suivi.',
      'Strukturierte Verwaltung von Fristen, Aufgaben, Dokumenten und Ergebnissen in einem klaren, begleiteten Arbeitsablauf.',
      'إدارة منظمة للمواعيد والمهام والمستندات والمخرجات، ضمن سير عمل واضح ومتابَع.',
      'Организованное управление сроками, задачами, документами и результатами в чётком контролируемом процессе.',
      'Gestione organizzata di scadenze, attività, documenti e deliverable, in un flusso di lavoro chiaro e seguito.',
      '在清晰、全程跟进的工作流程中有序管理期限、任务、文件与交付物。'
    ],
    'Conhecimento: compreensão do objectivo do cliente.': [
      'Knowledge: understanding the client’s objective.', 'Connaissance : compréhension de l’objectif du client.', 'Kenntnis: Verständnis des Mandantenziels.',
      'المعرفة: فهم هدف العميل.', 'Знакомство: понимание цели клиента.', 'Conoscenza: comprensione dell’obiettivo del cliente.', '了解：理解客户目标。'
    ],
    'Verificação: conflitos, enquadramento e documentos.': [
      'Verification: conflicts, legal framework and documents.', 'Vérification : conflits, cadre juridique et documents.', 'Prüfung: Konflikte, rechtlicher Rahmen und Unterlagen.',
      'التحقق: التعارضات والإطار القانوني والمستندات.', 'Проверка: конфликты, правовая база и документы.', 'Verifica: conflitti, inquadramento e documenti.', '核实：冲突、法律框架与文件。'
    ],
    'Proposta: âmbito, honorários, prazos e responsabilidades.': [
      'Proposal: scope, fees, deadlines and responsibilities.', 'Proposition : périmètre, honoraires, délais et responsabilités.', 'Angebot: Umfang, Honorare, Fristen und Verantwortlichkeiten.',
      'العرض: النطاق والأتعاب والمواعيد والمسؤوليات.', 'Предложение: объём, гонорары, сроки и обязанности.', 'Proposta: ambito, onorari, scadenze e responsabilità.', '方案：范围、费用、期限与责任。'
    ],
    'Execução: plano de trabalho e actualizações.': [
      'Execution: work plan and updates.', 'Exécution : plan de travail et mises à jour.', 'Umsetzung: Arbeitsplan und Aktualisierungen.',
      'التنفيذ: خطة العمل والتحديثات.', 'Исполнение: план работы и обновления.', 'Esecuzione: piano di lavoro e aggiornamenti.', '执行：工作计划与进展更新。'
    ],
    'Conclusão: entrega, prestação de contas e encerramento.': [
      'Conclusion: delivery, reporting and closing.', 'Conclusion : livraison, reddition de comptes et clôture.', 'Abschluss: Übergabe, Rechenschaft und Abschluss.',
      'الاختتام: التسليم وتقديم الحسابات والإغلاق.', 'Завершение: передача, отчётность и закрытие.', 'Conclusione: consegna, rendicontazione e chiusura.', '收尾：交付、结算与结案。'
    ],
    'Soluções juridicamente sólidas e ajustadas à realidade de cada cliente.': [
      'Legally sound solutions tailored to each client’s reality.',
      'Des solutions juridiquement solides et adaptées à la réalité de chaque client.',
      'Rechtlich fundierte Lösungen, angepasst an die Realität jedes Mandanten.',
      'حلول متينة قانونياً ومصممة حسب واقع كل عميل.',
      'Юридически обоснованные решения, адаптированные к реальности каждого клиента.',
      'Soluzioni giuridicamente solide e su misura per la realtà di ogni cliente.',
      '契合每位客户实际情况的、法律上扎实可靠的解决方案。'
    ],
    'Parceria': ['Partnership', 'Partenariat', 'Partnerschaft', 'الشراكة', 'Партнёрство', 'Partnership', '伙伴关系'],
    'Proximidade': ['Closeness', 'Proximité', 'Nähe', 'القرب', 'Близость', 'Vicinanza', '贴近'],
    'Comunicação clara, acompanhamento e definição de expectativas.': [
      'Clear communication, follow-up and defined expectations.',
      'Communication claire, suivi et définition des attentes.',
      'Klare Kommunikation, Begleitung und geklärte Erwartungen.',
      'تواصل واضح ومتابعة وتحديد للتوقعات.',
      'Чёткая коммуникация, сопровождение и определённые ожидания.',
      'Comunicazione chiara, follow-up e definizione delle aspettative.',
      '沟通清晰、持续跟进并明确预期。'
    ],
    'Definição do âmbito do serviço e dos responsáveis pelo assunto.': [
      'Definition of the scope of service and of those responsible for the matter.',
      'Définition du périmètre du service et des responsables du dossier.',
      'Festlegung des Leistungsumfangs und der Verantwortlichen für die Angelegenheit.',
      'تحديد نطاق الخدمة والمسؤولين عن الموضوع.',
      'Определение объёма услуги и ответственных за дело.',
      'Definizione dell’ambito del servizio e dei responsabili della pratica.',
      '明确服务范围与事项负责人。'
    ],
    'Proposta de honorários e despesas antes do início dos trabalhos, salvo urgência acordada.': [
      'Fee and expense proposal before work begins, save agreed urgency.',
      'Proposition d’honoraires et de frais avant le début des travaux, sauf urgence convenue.',
      'Honorar- und Kostenangebot vor Arbeitsbeginn, außer bei vereinbarter Dringlichkeit.',
      'عرض الأتعاب والمصاريف قبل بدء العمل، إلا في حالات الاستعجال المتفق عليها.',
      'Предложение по гонорарам и расходам до начала работ, кроме согласованной срочности.',
      'Proposta di onorari e spese prima dell’inizio dei lavori, salvo urgenza concordata.',
      '在工作开始前提交费用与开支方案，紧急情况另有约定者除外。'
    ],
    'Actualizações proporcionais à natureza, complexidade e fase do assunto.': [
      'Updates proportionate to the nature, complexity and stage of the matter.',
      'Mises à jour proportionnelles à la nature, la complexité et le stade du dossier.',
      'Aktualisierungen im Verhältnis zu Art, Komplexität und Phase der Angelegenheit.',
      'تحديثات متناسبة مع طبيعة الموضوع وتعقيده ومرحلته.',
      'Обновления, соразмерные характеру, сложности и стадии дела.',
      'Aggiornamenti proporzionati alla natura, complessità e fase della pratica.',
      '跟进频次与事项性质、复杂程度及阶段相匹配。'
    ],
    'Registo das instruções e validação do cliente para decisões relevantes.': [
      'Record of instructions and client validation for relevant decisions.',
      'Consignation des instructions et validation du client pour les décisions importantes.',
      'Aufzeichnung der Weisungen und Kundenvalidierung für wesentliche Entscheidungen.',
      'تسجيل التعليمات والحصول على موافقة العميل للقرارات المهمة.',
      'Фиксация инструкций и подтверждение клиентом значимых решений.',
      'Registrazione delle istruzioni e validazione del cliente per le decisioni rilevanti.',
      '记录客户指示，并就重要决策取得客户确认。'
    ],
    'Cooperação com instituições públicas e privadas, câmaras de comércio e associações de utilidade pública.': [
      'Cooperation with public and private institutions, chambers of commerce and public-interest associations.',
      'Coopération avec les institutions publiques et privées, chambres de commerce et associations d’utilité publique.',
      'Zusammenarbeit mit öffentlichen und privaten Einrichtungen, Handelskammern und gemeinnützigen Verbänden.',
      'التعاون مع المؤسسات العامة والخاصة وغرف التجارة والجمعيات ذات النفع العام.',
      'Сотрудничество с государственными и частными учреждениями, торговыми палатами и общественно полезными ассоциациями.',
      'Cooperazione con istituzioni pubbliche e private, camere di commercio e associazioni di utilità pubblica.',
      '与公共及私人机构、商会及公益社团合作。'
    ],
    'Valor para empresas, instituições e comunidades, com responsabilidades e objectivos bem definidos.': [
      'Value for companies, institutions and communities, with well-defined responsibilities and objectives.',
      'De la valeur pour les entreprises, institutions et communautés, avec des responsabilités et objectifs bien définis.',
      'Mehrwert für Unternehmen, Institutionen und Gemeinschaften – mit klar definierten Verantwortlichkeiten und Zielen.',
      'قيمة للشركات والمؤسسات والمجتمعات، مع مسؤوليات وأهداف محددة بوضوح.',
      'Ценность для компаний, учреждений и сообществ — с чётко определёнными обязанностями и целями.',
      'Valore per aziende, istituzioni e comunità, con responsabilità e obiettivi ben definiti.',
      '为企业、机构与社区创造价值，责任与目标清晰明确。'
    ]
  };

  let current = 'pt';
  const origText = new WeakMap();
  const origAttr = new WeakMap();
  const norm = (s) => s.replace(/\s+/g, ' ').trim();
  const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA']);
  const EYEBROW_AREA = /^JPires · Áreas de Prática · (\d+)$/;

  function t(pt, lang) {
    lang = lang || current;
    if (lang === 'pt') return pt;
    const key = norm(pt);
    const row = D[key];
    if (row && row[IDX[lang]]) return row[IDX[lang]];
    // Fallback dinâmico para "JPires · Áreas de Prática · 0X"
    const m = EYEBROW_AREA.exec(key);
    if (m) {
      const base = D['JPires · Áreas de Prática'];
      if (base && base[IDX[lang]]) return base[IDX[lang]] + ' · ' + m[1];
    }
    return pt;
  }

  function apply(root, lang) {
    root = root || document.body;
    lang = lang || current;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const p = n.parentElement;
        if (!p || SKIP.has(p.tagName) || p.closest('#world-map')) return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((n) => {
      let orig = origText.get(n);
      if (orig === undefined) { orig = n.nodeValue; origText.set(n, orig); }
      const m = orig.match(/^(\s*)([\s\S]*?)(\s*)$/);
      n.nodeValue = m[1] + t(m[2], lang) + m[3];
    });

    root.querySelectorAll('[aria-label]').forEach((el) => {
      let o = origAttr.get(el);
      if (o === undefined) { o = el.getAttribute('aria-label'); origAttr.set(el, o); }
      el.setAttribute('aria-label', t(o, lang));
    });
  }

  function updateSwitcherUI(lang) {
    const flag = document.getElementById('lang-current-flag');
    if (flag) {
      flag.src = `https://flagcdn.com/w40/${FLAGS[lang]}.png`;
      flag.srcset = `https://flagcdn.com/w80/${FLAGS[lang]}.png 2x`;
    }
    document.querySelectorAll('#lang-menu [data-lang]').forEach((b) => {
      b.setAttribute('aria-selected', String(b.dataset.lang === lang));
    });
  }

  function setLang(lang) {
    if (lang !== 'pt' && !(lang in IDX)) lang = 'pt';
    current = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL.includes(lang) ? 'rtl' : 'ltr';
    document.title = t(TITLE_PT, lang);
    apply(document.body, lang);
    updateSwitcherUI(lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent('jp:lang', { detail: { lang } }));
  }

  function missing() {
    const out = new Set();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const n = walker.currentNode;
      const p = n.parentElement;
      if (!p || SKIP.has(p.tagName) || p.closest('#world-map')) continue;
      const orig = origText.get(n) !== undefined ? origText.get(n) : n.nodeValue;
      const k = norm(orig);
      if (k.length > 2 && /[A-Za-zÀ-ÿ]/.test(k) && !D[k]) out.add(k);
    }
    return Array.from(out);
  }

  window.JPI18N = { t, apply, setLang, missing, get lang() { return current; } };

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('lang-btn');
    const menu = document.getElementById('lang-menu');

    function toggle(open) {
      if (!menu || !btn) return;
      menu.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
    }

    if (btn && menu) {
      btn.addEventListener('click', (e) => { e.stopPropagation(); toggle(menu.hidden); });
      menu.addEventListener('click', (e) => {
        const b = e.target.closest('[data-lang]');
        if (!b) return;
        setLang(b.dataset.lang);
        toggle(false);
      });
      document.addEventListener('click', (e) => { if (!menu.contains(e.target)) toggle(false); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggle(false); });
    }

    let saved = 'pt';
    try { saved = localStorage.getItem(STORAGE_KEY) || 'pt'; } catch (e) {}
    setLang(saved);
  });
})();