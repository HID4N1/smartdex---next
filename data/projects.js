export const projects = [
// gensales operations erp
  {
    id: 'gensales-operations-erp',
    name: 'GenSales Operations ERP',
    type: 'erp',
    categoryLabel: 'ERP SUR MESURE + AUTOMATISATION DES OPÉRATIONS',
    client: 'Gen-Sales Morocco',
    stack: 'Django, Django REST Framework, React, PostgreSQL, IA, Document Intelligence',
    status: 'ongoing',
    imageKey: 'gensales-erp',
    imageAlt: 'ERP de gestion des opérations Gen-Sales Morocco développé par SmartDex',

    description:
      'ERP métier conçu pour centraliser les opérations terrain, automatiser le traitement documentaire et assurer le suivi financier et opérationnel de bout en bout.',

    highlight: "Des opérations terrain au pilotage décisionnel : un système métier centralisé conçu autour des processus réels de l'entreprise.",

    problem:
      'Les opérations reposaient sur plusieurs canaux et supports : suivi terrain, échanges opérationnels, fichiers Excel, documents papier ou images et reporting manuel. Cette fragmentation complexifiait la consolidation des données, le contrôle des opérations, la traçabilité documentaire et le suivi financier.',

    solution:
      "SmartDex a conçu et développé un ERP métier centralisant l'ensemble du cycle opérationnel. La plateforme structure les missions terrain, les agents et les TPVS, automatise le traitement des documents grâce à l'intelligence artificielle, rapproche les flux financiers et transforme les données opérationnelles en indicateurs de pilotage.",

    impact:
      "La plateforme fournit désormais un environnement unique pour piloter les opérations terrain, contrôler les flux documentaires et financiers, suivre l'avancement des missions et disposer d'une vision consolidée de l'activité.",

    features: [
      'Gestion des agents, missions et opérations terrain',
      'Traitement intelligent et extraction des documents par IA',
      'Gestion des FFS et workflows de validation',
      'Suivi des transactions, dépenses et rapprochements financiers',
      'Reporting opérationnel, tableaux de bord et BI',
      'Interface mobile dédiée aux agents terrain',
    ],
  },
// sareine craft
  {
    id: 'sareine-craft',
    name: 'Sareine Craft',
    type: 'website',
    categoryLabel: 'SITE VITRINE PREMIUM + EXPÉRIENCE DE MARQUE',
    client: 'Sareine Craft',
    stack: 'Next.js, React, Responsive Design, SEO',
    status: 'completed',
    imageKey: 'sareinecraft',
    imageAlt: 'Site web Sareine Craft conçu et développé par SmartDex',

    description:
      'Conception d’une expérience web premium pour une marque marocaine de créations artisanales et d’événements sur mesure.',

    highlight: 'Un univers digital pensé pour transformer l’identité artisanale de Sareine Craft en une expérience de marque élégante, visuelle et orientée conversion.',

    problem:
      'Sareine Craft réunit deux univers complémentaires : les créations artisanales et l’organisation d’événements sur mesure. Le principal enjeu consistait à présenter ces activités au sein d’une même expérience digitale sans diluer l’identité de la marque, tout en conservant une navigation claire, une forte dimension visuelle et un parcours simple vers la prise de contact.',

    solution:
      'SmartDex a conçu une expérience web sur mesure articulée autour de l’identité visuelle de Sareine Craft. L’interface associe une direction artistique chaleureuse et premium à une architecture claire permettant de découvrir les créations, explorer les prestations événementielles et contacter facilement la marque. Le site a été développé avec une approche responsive, performante et prête à évoluer.',

    impact:
      'Sareine Craft dispose désormais d’une présence digitale cohérente avec son positionnement, capable de valoriser visuellement ses créations et ses événements tout en offrant un parcours fluide de la découverte jusqu’à la prise de contact.',

    features: [
      'Direction artistique et expérience UI/UX sur mesure',
      'Présentation immersive des créations artisanales',
      'Mise en valeur des prestations événementielles',
      'Expérience responsive desktop, tablette et mobile',
      'Navigation multilingue français, anglais et arabe',
      'Parcours de conversion orienté vers WhatsApp',
    ],
  },
// sjm pilote
  {
    id: 'sjm-pilote-mdjs',
    name: 'Plateforme de suivi commercial SJM',
    type: 'webapp',
    categoryLabel: 'Suivi terrain & reporting',
    client: 'Master Blow / MDJS',
    stack: 'React, Node.js, OCR',
    status: 'completed',
    imageKey: 'pilote',

    description:
      'Plateforme web de suivi en temps réel des performances des agents commerciaux.',

    highlight: 'Suivi terrain en temps réel + reporting automatisé',

    problem:
      'Absence de suivi en temps réel des agents, génération de rapports lente et manuelle, aucune visualisation claire des performances.',

    solution:
      'Développement d’une plateforme web permettant aux agents de scanner les tickets de vente avec OCR, avec tableau de bord superviseur, KPI en temps réel et génération automatique des rapports.',

    impact:
      'Meilleure visibilité opérationnelle, réduction du temps de reporting et identification plus rapide des problèmes terrain.',

    features: [
      'Scan de tickets via OCR',
      'Dashboard KPI en temps réel',
      'Suivi des performances agents',
      'Génération automatique de rapports',
      'Interface superviseur',
    ],
  },
// lmatch pro
  {
    id: 'lmatch-pro',
    name: 'Lmatch Pro',
    type: 'mobile-webapp',
    categoryLabel: 'Animation commerciale & jeu digital',
    client: 'MasterBlow/SISAL',
    stack: 'React, Node.js, Mobile, Dashboard',
    status: 'completed',
    imageKey: 'lmatch',

    description:
      'Solution digitale dédiée à l’animation commerciale, avec gestion des participants, sessions de jeu et suivi des performances.',

    highlight: 'Expérience interactive + pilotage commercial centralisé',

    problem:
      'Les animations commerciales nécessitaient un suivi manuel des participations, des performances terrain et des résultats, ce qui limitait la visibilité en temps réel.',

    solution:
      'Mise en place d’une plateforme permettant aux agents de gérer les sessions, suivre les participants, centraliser les résultats et offrir aux superviseurs une vue claire sur l’activité.',

    impact:
      'Meilleur contrôle des opérations terrain, amélioration de l’expérience participant et suivi instantané des performances commerciales.',

    features: [
      'Gestion des sessions d’animation',
      'Suivi des participants',
      'Dashboard superviseur',
      'Statistiques en temps réel',
      'Interface agent simple et rapide',
    ],
  },
// quattroplus
  {
    id: 'quattro-plus',
    name: 'Quattro Plus',
    type: 'mobile-webapp',
    categoryLabel: 'Campagne promotionnelle & instant win',
    client: 'MasterBlow / MDJS',
    stack: 'React, Django REST, MySQL, Expo',
    status: 'completed',
    imageKey: 'quattro',

    description:
      'Plateforme de gestion d’une campagne promotionnelle avec mécanique de gain instantané, quotas journaliers et suivi terrain.',

    highlight: 'Instant win contrôlé + gestion avancée des quotas',

    problem:
      'La campagne nécessitait une distribution contrôlée des cadeaux, un suivi précis des agents et une gestion fiable des quotas par jour et par catégorie.',

    solution:
      'Développement d’un système complet permettant de gérer les tickets, les gains, les stocks, les quotas, les agents et les rapports quotidiens à travers une interface admin et mobile.',

    impact:
      'Distribution maîtrisée des cadeaux, reporting fiable, réduction des erreurs terrain et meilleure visibilité sur l’avancement de la campagne.',

    features: [
      'Mécanique instant win',
      'Gestion des quotas journaliers',
      'Suivi des stocks cadeaux',
      'Application mobile agent',
      'Exports et rapports détaillés',
    ],
  },
// casamyway
  {
    id: 'casamyway',
    name: 'CasaMyWay',
    type: 'saas',
    categoryLabel: 'Réservation & renouvellement d’abonnement',
    client: 'GenSales / RATP',
    stack: 'Next.js, Django REST, MySQL, OCR, WhatsApp API',
    status: 'in-progress',
    imageKey: 'casamyway',

    description:
      'Plateforme SaaS pour la réservation et le renouvellement d’abonnements de transport avec agents terrain et notifications WhatsApp.',

    highlight: 'Réservation publique + gestion terrain + automatisation WhatsApp',

    problem:
      'Le processus de renouvellement reposait sur des échanges manuels, une affectation peu centralisée des agents et un manque de visibilité sur les rendez-vous et opérations terrain.',

    solution:
      'Création d’une plateforme complète avec réservation publique, back-office admin, gestion des agents, affectation des points de vente, OCR des tickets et notifications WhatsApp automatisées.',

    impact:
      'Processus plus fluide pour les clients, meilleure organisation terrain, réduction des tâches manuelles et suivi centralisé des opérations.',

    features: [
      'Réservation publique en ligne',
      'Gestion des agents et missions',
      'Scan OCR des tickets',
      'Notifications WhatsApp',
      'Dashboard administratif',
    ],
  },
// site web gensales
  {
    id: 'site-web-gensales',
    name: 'Site web GenSales',
    type: 'website',
    categoryLabel: 'Site vitrine & présence digitale',
    client: 'GenSales',
    stack: 'Next.js, React, Tailwind CSS',
    status: 'completed',
    imageKey: 'gen',

    description:
      'Site vitrine professionnel conçu pour renforcer la présence digitale de GenSales et présenter ses services.',

    highlight: 'Image de marque premium + présence digitale structurée',

    problem:
      'GenSales avait besoin d’une présence digitale plus professionnelle pour présenter clairement ses services, ses expertises et renforcer sa crédibilité commerciale.',

    solution:
      'Conception et développement d’un site web moderne, responsive et orienté conversion, avec une structure claire des services, une identité visuelle professionnelle et une navigation fluide.',

    impact:
      'Amélioration de l’image de marque, meilleure lisibilité de l’offre et support digital solide pour les actions commerciales.',

    features: [
      'Landing page professionnelle',
      'Présentation des services',
      'Design responsive',
      'Optimisation de la navigation',
      'Identité visuelle premium',
    ],
  },
];
