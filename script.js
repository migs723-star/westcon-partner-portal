/* ===========================
   Westcon Partner Landing Page
   - Simple local login for now (swap for API/SSO later)
   - Multi-user + role routing
   - Language switching
=========================== */

const LOGIN_USERS = [
  {
    login: "demo.partner@westcon.ai",
    password: "WestconDemo2026",
    name: "Demo Partner",
    role: "partner",
    redirect: "userdashboard.html"
  },
  {
    login: "WestconAdmin",
    password: "NewGenIT.ai2026",
    name: "Westcon Admin",
    role: "admin",
    redirect: "WestconAdmin.html"
  },
];

const TRANSLATIONS = {
  en: {
    pageTitle: "Westcon - Comstor AI Partner Enablement Platform",
    navWhat: "What it is",
    navFeatures: "Features",
    navSecurity: "Security",
    navFaq: "FAQ",
    partnerLogin: "Partner Login",
    requestAccess: "Request Access",
    eyebrow: "Partner-first • Secure access • AI-enabled services",
    heroTitle: "Westcon - Comstor AI Partner Enablement Platform",
    heroLead: "A secure, single gateway where partners log in to access their dashboard, enablement resources, and AI services — from knowledge support to automation-driven tools — all in one clean interface.",
    loginToDashboard: "Login to Dashboard",
    requestPartnerAccess: "Request Partner Access",
    trustSso: "SSO-ready",
    trustRole: "Role-based access",
    trustAudit: "Audit-friendly",
    trustUx: "Enterprise-grade UX",
    loginPanelText: "Use your approved credentials to access AI services and dashboards.",
    emailOrUsername: "Email or Username",
    emailPlaceholder: "name@company.com or WestconAdmin",
    password: "Password",
    passwordPlaceholder: "••••••••••",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    signIn: "Sign in",
    loginHint: "Tip: set your allowed logins in <code>script.js</code>.",
    loginSuccessful: "Login successful",
    successSub: "You can proceed to your partner dashboard.",
    continueToDashboard: "Continue to Dashboard",
    continueToAdminPortal: "Continue to Admin Portal",
    miniAiAssist: "AI Assist",
    miniAiAssistDesc: "Knowledge + service guidance",
    miniAutomation: "Automation",
    miniAutomationDesc: "Workflow-driven partner tasks",
    miniInsights: "Insights",
    miniInsightsDesc: "Dashboards & usage visibility",
    featuresTitle: "Everything partners need, in one place",
    featuresSub: "Designed to be fast, legible, and enterprise-clean — with a focus on self-serve enablement.",
    cardDashboard: "Partner Dashboard",
    cardDashboardDesc: "Access key tools, links, service modules, and usage metrics from a single hub.",
    cardDashboardMeta: "Centralised • Role-based",
    cardKnowledge: "AI Knowledge Support",
    cardKnowledgeDesc: "Ask questions, get guided answers, and speed up enablement with AI-backed assistance.",
    cardKnowledgeMeta: "RAG-ready • Searchable",
    cardWorkflows: "Service Workflows",
    cardWorkflowsDesc: "Automate common partner tasks with structured flows and approvals.",
    cardWorkflowsMeta: "n8n-friendly • Auditable",
    cardResources: "Enablement Resources",
    cardResourcesDesc: "Surface learning, playbooks, product updates, and announcements for partners.",
    cardResourcesMeta: "Organised • Discoverable",
    secureByDesign: "Secure by design",
    secureByDesignDesc: "Built for partner access control: login-gated content, clear user states, and room for SSO / IAM expansion. You can start simple now and upgrade to enterprise identity later.",
    tick1: "Role-based sections (Partner, Admin, Vendor)",
    tick2: "Session handling + optional “remember me”",
    tick3: "Ready for SSO integration patterns",
    loginFlowOverview: "Login flow overview",
    loginFlowSteps: "1) Validate credentials\n2) Create session token\n3) Redirect to dashboard\n4) Gate AI services behind auth",
    cleanUx: "Clean UX that scales",
    cleanUxDesc: "Keep the page professional and legible: strong hierarchy, simple spacing, and card-based sections that can grow into a full portal experience.",
    contactPartnerOps: "Contact Partner Ops",
    badgeFastLoad: "Fast load",
    badgeClearCtas: "Clear CTAs",
    badgeModular: "Modular structure",
    faqTitle: "Frequently asked questions",
    faq1Q: "Who can access this portal?",
    faq1A: "Approved partner users, admins, and authorised stakeholders with valid login credentials.",
    faq2Q: "Can this connect to SSO later?",
    faq2A: "Yes. This front end is ready to be extended into SSO / IAM flows when needed.",
    faq3Q: "Can AI tools be added here?",
    faq3A: "Yes. The portal is designed to link dashboards, knowledge bots, workflows, and AI modules.",
    requestTitle: "Need partner access?",
    requestSub: "Request onboarding or speak to the Westcon team to enable your organisation.",
    requestButton: "Request Access",
    forgotPasswordAlert: "Password reset isn’t wired yet. Connect this to your IAM/SSO or support flow.",
    enterCredentialsAlert: "Please enter both email/username and password.",
    invalidCredentialsAlert: "Invalid credentials. Check your login/password or request access.",
    signedInAs: "Signed in as"
  },

  af: {
    pageTitle: "Westcon - Comstor AI Vennoot Enablement Platform",
    navWhat: "Wat dit is",
    navFeatures: "Kenmerke",
    navSecurity: "Sekuriteit",
    navFaq: "VGV",
    partnerLogin: "Vennoot Aanmelding",
    requestAccess: "Versoek Toegang",
    eyebrow: "Vennoot-eerste • Veilige toegang • AI-gedrewe dienste",
    heroTitle: "Westcon - Comstor AI Vennoot Enablement Platform",
    heroLead: "’n Veilige, enkel toegangspunt waar vennote inteken om hul dashboard, enablement-hulpbronne en AI-dienste te gebruik — van kennisondersteuning tot outomatiseringsgedrewe hulpmiddels — alles in een skoon koppelvlak.",
    loginToDashboard: "Meld aan by Dashboard",
    requestPartnerAccess: "Versoek Vennoottoegang",
    trustSso: "SSO-gereed",
    trustRole: "Rolgebaseerde toegang",
    trustAudit: "Oudit-vriendelik",
    trustUx: "Enterprise-graad UX",
    loginPanelText: "Gebruik jou goedgekeurde geloofsbriewe om toegang tot AI-dienste en dashboards te kry.",
    emailOrUsername: "E-pos of Gebruikersnaam",
    emailPlaceholder: "naam@maatskappy.com of WestconAdmin",
    password: "Wagwoord",
    passwordPlaceholder: "••••••••••",
    rememberMe: "Onthou my",
    forgotPassword: "Wagwoord vergeet?",
    signIn: "Meld aan",
    loginHint: "Wenk: stel jou toegelate aanmeldings in <code>script.js</code>.",
    loginSuccessful: "Aanmelding suksesvol",
    successSub: "Jy kan voortgaan na jou vennoot-dashboard.",
    continueToDashboard: "Gaan na Dashboard",
    continueToAdminPortal: "Gaan na Admin Portaal",
    miniAiAssist: "AI Hulp",
    miniAiAssistDesc: "Kennis + diensleiding",
    miniAutomation: "Outomatisering",
    miniAutomationDesc: "Werkvloei-gedrewe vennoottake",
    miniInsights: "Insigte",
    miniInsightsDesc: "Dashboards & gebruiksigbaarheid",
    featuresTitle: "Alles wat vennote nodig het, op een plek",
    featuresSub: "Ontwerp om vinnig, leesbaar en ondernemingskoon te wees — met fokus op selfdiens-enableering.",
    cardDashboard: "Vennoot Dashboard",
    cardDashboardDesc: "Kry toegang tot belangrike hulpmiddels, skakels, diensmodules en gebruiksmetrieke vanaf een spilpunt.",
    cardDashboardMeta: "Gesentraliseerd • Rolgebaseer",
    cardKnowledge: "AI Kennis Ondersteuning",
    cardKnowledgeDesc: "Vra vrae, kry begeleide antwoorde en versnel enablement met AI-ondersteunde hulp.",
    cardKnowledgeMeta: "RAG-gereed • Deursoekbaar",
    cardWorkflows: "Diens Werkvloeie",
    cardWorkflowsDesc: "Outomatiseer algemene vennoottake met gestruktureerde vloei en goedkeurings.",
    cardWorkflowsMeta: "n8n-vriendelik • Ouditbaar",
    cardResources: "Enablement Hulpbronne",
    cardResourcesDesc: "Wys leerinhoud, speelboeke, produkopdaterings en aankondigings vir vennote.",
    cardResourcesMeta: "Georganiseerd • Ontdekbaar",
    secureByDesign: "Veilig ontwerp",
    secureByDesignDesc: "Gebou vir vennoottoegangsbeheer: inhoud agter aanmelding, duidelike gebruikertoestande en ruimte vir SSO / IAM-uitbreiding. Jy kan nou eenvoudig begin en later opgradeer na ondernemingsidentiteit.",
    tick1: "Rolgebaseerde afdelings (Vennoot, Admin, Verskaffer)",
    tick2: "Sessiehantering + opsionele “onthou my”",
    tick3: "Gereed vir SSO-integrasiepatrone",
    loginFlowOverview: "Aanmeldvloei oorsig",
    loginFlowSteps: "1) Valideer geloofsbriewe\n2) Skep sessietoken\n3) Herlei na dashboard\n4) Beskerm AI-dienste agter aanmelding",
    cleanUx: "Skoon UX wat skaal",
    cleanUxDesc: "Hou die blad professioneel en leesbaar: sterk hiërargie, eenvoudige spasiëring en kaartgebaseerde afdelings wat kan groei tot ’n volledige portaalervaring.",
    contactPartnerOps: "Kontak Partner Ops",
    badgeFastLoad: "Vinnige laai",
    badgeClearCtas: "Duidelike CTA's",
    badgeModular: "Modulêre struktuur",
    faqTitle: "Gereelde vrae",
    faq1Q: "Wie kan hierdie portaal gebruik?",
    faq1A: "Goedgekeurde vennootgebruikers, admins en gemagtigde belanghebbendes met geldige aanmeldbesonderhede.",
    faq2Q: "Kan dit later aan SSO koppel?",
    faq2A: "Ja. Hierdie front-end is gereed om later na SSO / IAM-vloei uitgebrei te word.",
    faq3Q: "Kan AI-hulpmiddels hier bygevoeg word?",
    faq3A: "Ja. Die portaal is ontwerp om dashboards, kennisbots, werkvloeie en AI-modules te verbind.",
    requestTitle: "Het jy vennoottoegang nodig?",
    requestSub: "Versoek onboarding of praat met die Westcon-span om jou organisasie te aktiveer.",
    requestButton: "Versoek Toegang",
    forgotPasswordAlert: "Wagwoordherstel is nog nie gekoppel nie. Verbind dit met jou IAM/SSO of ondersteuningsvloei.",
    enterCredentialsAlert: "Voer asseblief beide e-pos/gebruikersnaam en wagwoord in.",
    invalidCredentialsAlert: "Ongeldige geloofsbriewe. Kontroleer jou aanmelding/wagwoord of versoek toegang.",
    signedInAs: "Aangemeld as"
  },

  zu: {
    pageTitle: "I-Westcon - Comstor AI Partner Enablement Platform",
    navWhat: "Iyini",
    navFeatures: "Izici",
    navSecurity: "Ezokuphepha",
    navFaq: "Imibuzo Evamile",
    partnerLogin: "Ukungena KoZakakwethu",
    requestAccess: "Cela Ukufinyelela",
    eyebrow: "Uzakwethu kuqala • Ukufinyelela okuphephile • Izinsiza ezinikwe amandla yi-AI",
    heroTitle: "I-Westcon - Comstor AI Partner Enablement Platform",
    heroLead: "Isango eliphephile, elilodwa lapho ozakwethu bengena khona ukuze bafinyelele i-dashboard yabo, izinsiza ze-enablement, nezinsiza ze-AI — kusukela ekusekelweni kolwazi kuya kumathuluzi aqhutshwa yi-automation — konke kusendaweni eyodwa ehlanzekile.",
    loginToDashboard: "Ngena ku-Dashboard",
    requestPartnerAccess: "Cela Ukufinyelela KoZakakwethu",
    trustSso: "I-SSO ilungile",
    trustRole: "Ukufinyelela okusekelwe endimeni",
    trustAudit: "Kulungele ukuhlolwa",
    trustUx: "I-UX yezinga le-enterprise",
    loginPanelText: "Sebenzisa imininingwane yakho egunyaziwe ukuze ufinyelele izinsiza ze-AI nama-dashboard.",
    emailOrUsername: "I-imeyili noma Igama Lomsebenzisi",
    emailPlaceholder: "igama@inkampani.com noma WestconAdmin",
    password: "Iphasiwedi",
    passwordPlaceholder: "••••••••••",
    rememberMe: "Ngikhumbule",
    forgotPassword: "Ukhohlwe iphasiwedi?",
    signIn: "Ngena",
    loginHint: "Ithiphu: sungula ama-login avunyelwe ku-<code>script.js</code>.",
    loginSuccessful: "Ungene ngempumelelo",
    successSub: "Ungaqhubekela ku-dashboard yakho yozakwethu.",
    continueToDashboard: "Qhubeka uye ku-Dashboard",
    continueToAdminPortal: "Qhubeka uye ku-Admin Portal",
    miniAiAssist: "Usizo lwe-AI",
    miniAiAssistDesc: "Ulwazi + ukuqondiswa kwensiza",
    miniAutomation: "I-Automation",
    miniAutomationDesc: "Imisebenzi yozakwethu eqhutshwa yi-workflow",
    miniInsights: "Ukuqonda",
    miniInsightsDesc: "Ama-dashboard nokubonakala kokusetshenziswa",
    featuresTitle: "Konke okudingwa ozakwethu, endaweni eyodwa",
    featuresSub: "Yakhelwe ukuba isheshe, ifundeke kalula, futhi ihlanzeke njenge-enterprise — kugxilwe ekuzisizeni.",
    cardDashboard: "I-Partner Dashboard",
    cardDashboardDesc: "Finyelela amathuluzi abalulekile, izixhumanisi, amamojula ezinsiza, namamethrikhi okusetshenziswa kusuka endaweni eyodwa.",
    cardDashboardMeta: "Kumaphakathi • Kusekelwe endimeni",
    cardKnowledge: "Ukusekelwa Kolwazi lwe-AI",
    cardKnowledgeDesc: "Buza imibuzo, uthole izimpendulo eziqondisiwe, futhi usheshise i-enablement ngosizo olusekelwe yi-AI.",
    cardKnowledgeMeta: "I-RAG ilungile • Iyasesheka",
    cardWorkflows: "Ama-Workflow Ezinsiza",
    cardWorkflowsDesc: "Yenza ngokuzenzakalela imisebenzi evamile yozakwethu ngemifudlana ehlelekile nezimvume.",
    cardWorkflowsMeta: "n8n-friendly • Iyahlolwa",
    cardResources: "Izinsiza ze-Enablement",
    cardResourcesDesc: "Veza ukufunda, ama-playbook, izibuyekezo zomkhiqizo, nezaziso zozakwethu.",
    cardResourcesMeta: "Kuhleliwe • Kuyatholakala",
    secureByDesign: "Kuphephile ngokwakheka",
    secureByDesignDesc: "Kwakhelwe ukulawula ukufinyelela kozakwethu: okuqukethwe okuvinjwe ukungena, izimo zomsebenzisi ezicacile, nendawo yokwandisa i-SSO / IAM. Ungaqala kalula manje bese uthuthukela ku-enterprise identity kamuva.",
    tick1: "Izigaba ezisekelwe endimeni (Uzakwethu, Admin, Vendor)",
    tick2: "Ukuphathwa kweseshini + inketho ethi “ngikhumbule”",
    tick3: "Kulungele amaphethini okuhlanganisa i-SSO",
    loginFlowOverview: "Uhlolojikelele lwe-login flow",
    loginFlowSteps: "1) Qinisekisa imininingwane\n2) Dala i-session token\n3) Qondisa ku-dashboard\n4) Vimba izinsiza ze-AI ngemuva kokungena",
    cleanUx: "I-UX ehlanzekile ekhula",
    cleanUxDesc: "Gcina ikhasi libukeka njengelobuchwepheshe futhi lifundeke: ukuhleleka okuqinile, izikhala ezilula, nezigaba ezisuselwe kumakhadi ezingakhula zibe isipiliyoni se-portal esigcwele.",
    contactPartnerOps: "Xhumana ne-Partner Ops",
    badgeFastLoad: "Ilayisha ngokushesha",
    badgeClearCtas: "Ama-CTA acacile",
    badgeModular: "Isakhiwo semojula",
    faqTitle: "Imibuzo evame ukubuzwa",
    faq1Q: "Ubani ongafinyelela le portal?",
    faq1A: "Abasebenzisi bozakwethu abagunyaziwe, ama-admin, kanye nababambiqhaza abagunyaziwe abanemininingwane efanele yokungena.",
    faq2Q: "Ingabe lokhu kungaxhuma ku-SSO kamuva?",
    faq2A: "Yebo. Le front end ilungele ukunwetshwa ibe ama-flow e-SSO / IAM uma kudingeka.",
    faq3Q: "Ingabe amathuluzi e-AI angangezwa lapha?",
    faq3A: "Yebo. I-portal yakhelwe ukuxhumanisa ama-dashboard, ama-knowledge bots, ama-workflow, namamojula e-AI.",
    requestTitle: "Udinga ukufinyelela kozakwethu?",
    requestSub: "Cela i-onboarding noma ukhulume neqembu le-Westcon ukuze uvumele inhlangano yakho.",
    requestButton: "Cela Ukufinyelela",
    forgotPasswordAlert: "Ukusetha kabusha iphasiwedi akukaxhunywa okwamanje. Xhuma lokhu ku-IAM/SSO yakho noma ku-support flow.",
    enterCredentialsAlert: "Sicela ufake kokubili i-imeyili/igama lomsebenzisi nephasiwedi.",
    invalidCredentialsAlert: "Imininingwane ayilungile. Hlola ukungena kwakho/iphasiwedi noma ucele ukufinyelela.",
    signedInAs: "Ungene njengo"
  },

  fr: {
    pageTitle: "Plateforme d’Activation Partenaire IA Westcon - Comstor",
    navWhat: "Qu’est-ce que c’est",
    navFeatures: "Fonctionnalités",
    navSecurity: "Sécurité",
    navFaq: "FAQ",
    partnerLogin: "Connexion Partenaire",
    requestAccess: "Demander l’accès",
    eyebrow: "Partenaire d’abord • Accès sécurisé • Services activés par l’IA",
    heroTitle: "Plateforme d’Activation Partenaire IA Westcon - Comstor",
    heroLead: "Une passerelle unique et sécurisée où les partenaires se connectent pour accéder à leur tableau de bord, aux ressources d’activation et aux services IA — du support de connaissances aux outils pilotés par l’automatisation — dans une interface claire et unique.",
    loginToDashboard: "Se connecter au tableau de bord",
    requestPartnerAccess: "Demander un accès partenaire",
    trustSso: "Compatible SSO",
    trustRole: "Accès basé sur les rôles",
    trustAudit: "Compatible audit",
    trustUx: "UX niveau entreprise",
    loginPanelText: "Utilisez vos identifiants approuvés pour accéder aux services IA et aux tableaux de bord.",
    emailOrUsername: "Email ou nom d’utilisateur",
    emailPlaceholder: "nom@entreprise.com ou WestconAdmin",
    password: "Mot de passe",
    passwordPlaceholder: "••••••••••",
    rememberMe: "Se souvenir de moi",
    forgotPassword: "Mot de passe oublié ?",
    signIn: "Se connecter",
    loginHint: "Astuce : définissez vos connexions autorisées dans <code>script.js</code>.",
    loginSuccessful: "Connexion réussie",
    successSub: "Vous pouvez accéder à votre tableau de bord partenaire.",
    continueToDashboard: "Continuer vers le tableau de bord",
    continueToAdminPortal: "Continuer vers le portail admin",
    miniAiAssist: "Assistant IA",
    miniAiAssistDesc: "Connaissance + assistance de service",
    miniAutomation: "Automatisation",
    miniAutomationDesc: "Tâches partenaires pilotées par workflow",
    miniInsights: "Analyses",
    miniInsightsDesc: "Tableaux de bord et visibilité d’usage",
    featuresTitle: "Tout ce dont les partenaires ont besoin, au même endroit",
    featuresSub: "Conçue pour être rapide, lisible et propre au niveau entreprise — avec un accent sur l’auto-assistance.",
    cardDashboard: "Tableau de bord partenaire",
    cardDashboardDesc: "Accédez aux outils clés, liens, modules de service et métriques d’usage depuis un hub unique.",
    cardDashboardMeta: "Centralisé • Basé sur les rôles",
    cardKnowledge: "Support de connaissances IA",
    cardKnowledgeDesc: "Posez des questions, obtenez des réponses guidées et accélérez l’activation grâce à l’assistance IA.",
    cardKnowledgeMeta: "Prêt pour RAG • Recherchable",
    cardWorkflows: "Workflows de service",
    cardWorkflowsDesc: "Automatisez les tâches partenaires courantes avec des flux structurés et des approbations.",
    cardWorkflowsMeta: "Compatible n8n • Auditables",
    cardResources: "Ressources d’activation",
    cardResourcesDesc: "Mettez en avant apprentissage, playbooks, mises à jour produit et annonces pour les partenaires.",
    cardResourcesMeta: "Organisé • Découvrable",
    secureByDesign: "Sécurisé par conception",
    secureByDesignDesc: "Conçue pour le contrôle d’accès partenaire : contenu protégé par connexion, états utilisateurs clairs et possibilité d’extension SSO / IAM. Vous pouvez commencer simplement maintenant et évoluer vers une identité entreprise plus tard.",
    tick1: "Sections basées sur les rôles (Partenaire, Admin, Fournisseur)",
    tick2: "Gestion de session + option “se souvenir de moi”",
    tick3: "Prêt pour les schémas d’intégration SSO",
    loginFlowOverview: "Vue d’ensemble du flux de connexion",
    loginFlowSteps: "1) Valider les identifiants\n2) Créer le jeton de session\n3) Rediriger vers le tableau de bord\n4) Protéger les services IA derrière l’authentification",
    cleanUx: "Une UX propre qui évolue",
    cleanUxDesc: "Gardez la page professionnelle et lisible : hiérarchie forte, espacement simple et sections à base de cartes pouvant évoluer vers une expérience portail complète.",
    contactPartnerOps: "Contacter Partner Ops",
    badgeFastLoad: "Chargement rapide",
    badgeClearCtas: "CTA clairs",
    badgeModular: "Structure modulaire",
    faqTitle: "Questions fréquentes",
    faq1Q: "Qui peut accéder à ce portail ?",
    faq1A: "Les utilisateurs partenaires approuvés, les administrateurs et les parties prenantes autorisées disposant d’identifiants valides.",
    faq2Q: "Peut-il se connecter au SSO plus tard ?",
    faq2A: "Oui. Cette interface est prête à être étendue vers des flux SSO / IAM lorsque nécessaire.",
    faq3Q: "Peut-on ajouter des outils IA ici ?",
    faq3A: "Oui. Le portail est conçu pour relier tableaux de bord, bots de connaissance, workflows et modules IA.",
    requestTitle: "Besoin d’un accès partenaire ?",
    requestSub: "Demandez l’onboarding ou contactez l’équipe Westcon pour activer votre organisation.",
    requestButton: "Demander l’accès",
    forgotPasswordAlert: "La réinitialisation du mot de passe n’est pas encore connectée. Reliez-la à votre flux IAM/SSO ou support.",
    enterCredentialsAlert: "Veuillez saisir à la fois l’email/nom d’utilisateur et le mot de passe.",
    invalidCredentialsAlert: "Identifiants invalides. Vérifiez votre connexion/mot de passe ou demandez l’accès.",
    signedInAs: "Connecté en tant que"
  },

  pt: {
    pageTitle: "Plataforma de Enablement de Parceiros com IA Westcon - Comstor",
    navWhat: "O que é",
    navFeatures: "Funcionalidades",
    navSecurity: "Segurança",
    navFaq: "FAQ",
    partnerLogin: "Login do Parceiro",
    requestAccess: "Solicitar Acesso",
    eyebrow: "Parceiro em primeiro lugar • Acesso seguro • Serviços com IA",
    heroTitle: "Plataforma de Enablement de Parceiros com IA Westcon - Comstor",
    heroLead: "Uma porta de entrada única e segura onde os parceiros iniciam sessão para aceder ao seu dashboard, recursos de enablement e serviços de IA — desde suporte de conhecimento até ferramentas orientadas por automação — tudo numa interface limpa.",
    loginToDashboard: "Entrar no Dashboard",
    requestPartnerAccess: "Solicitar Acesso de Parceiro",
    trustSso: "Pronto para SSO",
    trustRole: "Acesso baseado em funções",
    trustAudit: "Compatível com auditoria",
    trustUx: "UX de nível empresarial",
    loginPanelText: "Use as suas credenciais aprovadas para aceder aos serviços de IA e dashboards.",
    emailOrUsername: "Email ou Nome de Utilizador",
    emailPlaceholder: "nome@empresa.com ou WestconAdmin",
    password: "Palavra-passe",
    passwordPlaceholder: "••••••••••",
    rememberMe: "Lembrar-me",
    forgotPassword: "Esqueceu-se da palavra-passe?",
    signIn: "Entrar",
    loginHint: "Dica: defina os logins permitidos em <code>script.js</code>.",
    loginSuccessful: "Login efetuado com sucesso",
    successSub: "Pode continuar para o seu dashboard de parceiro.",
    continueToDashboard: "Continuar para o Dashboard",
    continueToAdminPortal: "Continuar para o Portal Admin",
    miniAiAssist: "Assistente IA",
    miniAiAssistDesc: "Conhecimento + orientação de serviço",
    miniAutomation: "Automação",
    miniAutomationDesc: "Tarefas de parceiros orientadas por workflow",
    miniInsights: "Insights",
    miniInsightsDesc: "Dashboards e visibilidade de utilização",
    featuresTitle: "Tudo o que os parceiros precisam, num só lugar",
    featuresSub: "Desenhado para ser rápido, legível e limpo ao nível empresarial — com foco em enablement self-service.",
    cardDashboard: "Dashboard do Parceiro",
    cardDashboardDesc: "Aceda a ferramentas principais, links, módulos de serviço e métricas de utilização a partir de um único hub.",
    cardDashboardMeta: "Centralizado • Baseado em funções",
    cardKnowledge: "Suporte de Conhecimento com IA",
    cardKnowledgeDesc: "Faça perguntas, obtenha respostas guiadas e acelere o enablement com assistência apoiada por IA.",
    cardKnowledgeMeta: "Pronto para RAG • Pesquisável",
    cardWorkflows: "Workflows de Serviço",
    cardWorkflowsDesc: "Automatize tarefas comuns dos parceiros com fluxos estruturados e aprovações.",
    cardWorkflowsMeta: "Compatível com n8n • Auditável",
    cardResources: "Recursos de Enablement",
    cardResourcesDesc: "Apresente aprendizagem, playbooks, atualizações de produto e anúncios para parceiros.",
    cardResourcesMeta: "Organizado • Fácil de descobrir",
    secureByDesign: "Seguro desde a origem",
    secureByDesignDesc: "Construído para controlo de acesso de parceiros: conteúdo protegido por login, estados de utilizador claros e espaço para expansão SSO / IAM. Pode começar de forma simples agora e evoluir para identidade empresarial mais tarde.",
    tick1: "Secções baseadas em funções (Parceiro, Admin, Vendor)",
    tick2: "Gestão de sessão + opção “lembrar-me”",
    tick3: "Pronto para padrões de integração SSO",
    loginFlowOverview: "Visão geral do fluxo de login",
    loginFlowSteps: "1) Validar credenciais\n2) Criar token de sessão\n3) Redirecionar para o dashboard\n4) Proteger os serviços de IA com autenticação",
    cleanUx: "UX limpa que escala",
    cleanUxDesc: "Mantenha a página profissional e legível: hierarquia forte, espaçamento simples e secções baseadas em cartões que podem crescer para uma experiência completa de portal.",
    contactPartnerOps: "Contactar Partner Ops",
    badgeFastLoad: "Carregamento rápido",
    badgeClearCtas: "CTAs claros",
    badgeModular: "Estrutura modular",
    faqTitle: "Perguntas frequentes",
    faq1Q: "Quem pode aceder a este portal?",
    faq1A: "Utilizadores parceiros aprovados, administradores e partes autorizadas com credenciais válidas.",
    faq2Q: "Isto pode ligar-se a SSO mais tarde?",
    faq2A: "Sim. Este front-end está pronto para ser expandido para fluxos de SSO / IAM quando necessário.",
    faq3Q: "As ferramentas de IA podem ser adicionadas aqui?",
    faq3A: "Sim. O portal foi desenhado para ligar dashboards, bots de conhecimento, workflows e módulos de IA.",
    requestTitle: "Precisa de acesso de parceiro?",
    requestSub: "Solicite onboarding ou fale com a equipa Westcon para ativar a sua organização.",
    requestButton: "Solicitar Acesso",
    forgotPasswordAlert: "A reposição da palavra-passe ainda não está ligada. Ligue isto ao seu fluxo IAM/SSO ou de suporte.",
    enterCredentialsAlert: "Por favor introduza o email/nome de utilizador e a palavra-passe.",
    invalidCredentialsAlert: "Credenciais inválidas. Verifique o seu login/palavra-passe ou solicite acesso.",
    signedInAs: "Sessão iniciada como"
  },

  ha: {
    pageTitle: "Dandalin Westcon - Comstor AI na Abokan Hulɗa",
    navWhat: "Menene shi",
    navFeatures: "Siffofi",
    navSecurity: "Tsaro",
    navFaq: "Tambayoyi",
    partnerLogin: "Shiga Abokin Hulɗa",
    requestAccess: "Nemi Izini",
    eyebrow: "Abokin hulɗa a gaba • Shiga cikin tsaro • Ayyuka masu amfani da AI",
    heroTitle: "Dandalin Westcon - Comstor AI na Abokan Hulɗa",
    heroLead: "Ƙofa guda mai tsaro inda abokan hulɗa ke shiga don samun dashboard ɗinsu, kayan enablement, da ayyukan AI — daga tallafin ilimi zuwa kayan aikin automation — duk a wuri guda mai tsabta.",
    loginToDashboard: "Shiga Dashboard",
    requestPartnerAccess: "Nemi Izinin Abokin Hulɗa",
    trustSso: "A shirye don SSO",
    trustRole: "Izini bisa rawa",
    trustAudit: "Mai sauƙin tantancewa",
    trustUx: "UX na matakin kamfani",
    loginPanelText: "Yi amfani da bayanan shigarka da aka amince da su don samun ayyukan AI da dashboards.",
    emailOrUsername: "Imel ko Sunan Mai Amfani",
    emailPlaceholder: "suna@kamfani.com ko WestconAdmin",
    password: "Kalmar sirri",
    passwordPlaceholder: "••••••••••",
    rememberMe: "Ka tuna da ni",
    forgotPassword: "Ka manta kalmar sirri?",
    signIn: "Shiga",
    loginHint: "Shawara: saita logins da aka yarda da su a cikin <code>script.js</code>.",
    loginSuccessful: "An shiga cikin nasara",
    successSub: "Za ka iya ci gaba zuwa dashboard ɗin abokin hulɗarka.",
    continueToDashboard: "Ci gaba zuwa Dashboard",
    continueToAdminPortal: "Ci gaba zuwa Admin Portal",
    miniAiAssist: "Taimakon AI",
    miniAiAssistDesc: "Ilimi + jagorar sabis",
    miniAutomation: "Automation",
    miniAutomationDesc: "Ayyukan abokan hulɗa masu tafiya da workflow",
    miniInsights: "Bayanan Fahimta",
    miniInsightsDesc: "Dashboards da ganin amfani",
    featuresTitle: "Duk abin da abokan hulɗa ke buƙata, a wuri guda",
    featuresSub: "An tsara shi ya zama mai sauri, mai sauƙin karantawa, kuma mai tsari kamar kamfani — tare da mai da hankali kan self-service enablement.",
    cardDashboard: "Dashboard na Abokin Hulɗa",
    cardDashboardDesc: "Samun manyan kayan aiki, links, modules na sabis, da bayanan amfani daga wuri guda.",
    cardDashboardMeta: "A tsakiya • Bisa rawa",
    cardKnowledge: "Tallafin Ilimi na AI",
    cardKnowledgeDesc: "Yi tambayoyi, sami amsoshi masu jagora, kuma ka hanzarta enablement da taimakon AI.",
    cardKnowledgeMeta: "RAG a shirye • Ana iya bincika",
    cardWorkflows: "Service Workflows",
    cardWorkflowsDesc: "Sarrafa ayyukan yau da kullum na abokan hulɗa ta atomatik tare da tsararrun flows da approvals.",
    cardWorkflowsMeta: "n8n-friendly • Ana iya dubawa",
    cardResources: "Kayan Enablement",
    cardResourcesDesc: "Bayyana ilmantarwa, playbooks, sabunta kayayyaki, da sanarwa ga abokan hulɗa.",
    cardResourcesMeta: "An tsara • Ana iya ganowa",
    secureByDesign: "Tsaro tun daga ƙira",
    secureByDesignDesc: "An gina shi don kula da izinin shiga na abokan hulɗa: abun ciki mai kariya da login, bayyanannun yanayin mai amfani, da damar faɗaɗa zuwa SSO / IAM. Za ka iya farawa da sauƙi yanzu ka haɓaka zuwa tsarin kamfani daga baya.",
    tick1: "Sassan bisa rawa (Abokin Hulɗa, Admin, Vendor)",
    tick2: "Gudanar da session + zaɓin “ka tuna da ni”",
    tick3: "A shirye don tsarin haɗin SSO",
    loginFlowOverview: "Taƙaitaccen tsarin login",
    loginFlowSteps: "1) Tabbatar da bayanai\n2) Ƙirƙiri session token\n3) Tura zuwa dashboard\n4) Kare ayyukan AI da auth",
    cleanUx: "Tsabtataccen UX mai faɗaɗa",
    cleanUxDesc: "Ka sa shafin ya kasance ƙwararre kuma mai sauƙin karantawa: tsari mai ƙarfi, sarari mai kyau, da sassan katuna da za su iya girma zuwa cikakken portal.",
    contactPartnerOps: "Tuntuɓi Partner Ops",
    badgeFastLoad: "Saurin lodi",
    badgeClearCtas: "CTA masu bayyana",
    badgeModular: "Tsarin module",
    faqTitle: "Tambayoyin da aka fi yi",
    faq1Q: "Wa zai iya shiga wannan portal?",
    faq1A: "Abokan hulɗa da aka amince da su, admins, da masu ruwa da tsaki masu izini tare da ingantattun bayanan shiga.",
    faq2Q: "Za a iya haɗa shi da SSO daga baya?",
    faq2A: "Eh. Wannan front end yana shirye don faɗaɗawa zuwa SSO / IAM idan an buƙata.",
    faq3Q: "Za a iya ƙara kayan AI a nan?",
    faq3A: "Eh. An tsara portal ɗin don haɗa dashboards, knowledge bots, workflows, da modules na AI.",
    requestTitle: "Kana buƙatar izinin abokin hulɗa?",
    requestSub: "Nemi onboarding ko yi magana da ƙungiyar Westcon don kunna ƙungiyarka.",
    requestButton: "Nemi Izini",
    forgotPasswordAlert: "Ba a haɗa reset na kalmar sirri ba tukuna. Haɗa shi da IAM/SSO ko support flow ɗinka.",
    enterCredentialsAlert: "Da fatan za a shigar da imel/sunan mai amfani da kalmar sirri.",
    invalidCredentialsAlert: "Bayanan shiga ba daidai ba ne. Duba login/password ɗinka ko ka nemi izini.",
    signedInAs: "An shiga a matsayin"
  },

  yo: {
    pageTitle: "Westcon - Comstor AI Portal Fun Awọn Alábàáṣiṣẹ́pọ̀",
    navWhat: "Kí ni ó jẹ́",
    navFeatures: "Àwọn Ẹya",
    navSecurity: "Ààbò",
    navFaq: "FAQ",
    partnerLogin: "Wọlé Alábàáṣiṣẹ́pọ̀",
    requestAccess: "Béèrè Ìwọlé",
    eyebrow: "Alábàáṣiṣẹ́pọ̀ kọ́kọ́ • Ìwọlé ààbò • Àwọn iṣẹ́ tó lo AI",
    heroTitle: "Westcon - Comstor AI Portal Fun Awọn Alábàáṣiṣẹ́pọ̀",
    heroLead: "Ẹnu-ọna kan ṣoṣo tó ní ààbò níbi tí àwọn alábàáṣiṣẹ́pọ̀ ti ń wọlé láti wọ dashboard wọn, àwọn ohun èlò enablement, àti iṣẹ́ AI — láti ìrànlọ́wọ́ ìmọ̀ sí àwọn irinṣẹ́ automation — gbogbo rẹ̀ ní inú interface tó mọ́.",
    loginToDashboard: "Wọlé sí Dashboard",
    requestPartnerAccess: "Béèrè Ìwọlé Alábàáṣiṣẹ́pọ̀",
    trustSso: "Ṣetán fún SSO",
    trustRole: "Ìwọlé tó dá lórí ipa",
    trustAudit: "Ó rọrùn fún audit",
    trustUx: "UX ipele ilé-iṣẹ́",
    loginPanelText: "Lo àwọn credential tí a fọwọ́sí láti wọ àwọn iṣẹ́ AI àti dashboards.",
    emailOrUsername: "Email tàbí Orúkọ Olùmúlò",
    emailPlaceholder: "oruko@ileisẹ.com tàbí WestconAdmin",
    password: "Ọ̀rọ̀ aṣínà",
    passwordPlaceholder: "••••••••••",
    rememberMe: "Rántí mi",
    forgotPassword: "Ṣe o gbàgbé ọ̀rọ̀ aṣínà?",
    signIn: "Wọlé",
    loginHint: "Àbá: ṣètò àwọn login tí a gba láàyè sínú <code>script.js</code>.",
    loginSuccessful: "Wọlé ṣáṣeyọrí",
    successSub: "O lè tẹ̀síwájú sí dashboard alábàáṣiṣẹ́pọ̀ rẹ.",
    continueToDashboard: "Tẹ̀síwájú sí Dashboard",
    continueToAdminPortal: "Tẹ̀síwájú sí Admin Portal",
    miniAiAssist: "Iranlọwọ AI",
    miniAiAssistDesc: "Ìmọ̀ + ìtọ́sọ́nà iṣẹ́",
    miniAutomation: "Automation",
    miniAutomationDesc: "Àwọn iṣẹ́ alábàáṣiṣẹ́pọ̀ tó dá lórí workflow",
    miniInsights: "Ìmòye",
    miniInsightsDesc: "Dashboards àti hihan ìlò",
    featuresTitle: "Gbogbo ohun tí àwọn alábàáṣiṣẹ́pọ̀ nílò, ní ibi kan",
    featuresSub: "A ṣe é kí ó yara, kó rọrùn láti ka, kí ó sì mọ́ ní ìpele ilé-iṣẹ́ — pẹ̀lú ìfọkànsìn sí self-service enablement.",
    cardDashboard: "Dashboard Alábàáṣiṣẹ́pọ̀",
    cardDashboardDesc: "Wọlé sí àwọn irinṣẹ́ pàtàkì, links, modules iṣẹ́, àti metrics ìlò láti ibi kan ṣoṣo.",
    cardDashboardMeta: "Aarin kan • Dá lórí ipa",
    cardKnowledge: "Iranlọwọ Ìmọ̀ AI",
    cardKnowledgeDesc: "Beere àwọn ìbéèrè, gba àwọn ìdáhùn tó ní ìtọ́sọ́nà, kí o sì mú enablement yara pẹ̀lú iranlọwọ AI.",
    cardKnowledgeMeta: "Ṣetán fún RAG • A lè wá a",
    cardWorkflows: "Àwọn Workflow Iṣẹ́",
    cardWorkflowsDesc: "Ṣe automate àwọn iṣẹ́ alábàáṣiṣẹ́pọ̀ tó wọ́pọ̀ pẹ̀lú àwọn flow tó ṣètò dáadáa àti approvals.",
    cardWorkflowsMeta: "n8n-friendly • A lè ṣàyẹ̀wò",
    cardResources: "Àwọn Ohun Èlò Enablement",
    cardResourcesDesc: "Fi ẹ̀kọ́, playbooks, updates ọja, àti announcements hàn fún àwọn alábàáṣiṣẹ́pọ̀.",
    cardResourcesMeta: "Tó ṣètò • Rọrùn láti rí",
    secureByDesign: "Ààbò láti inú onírúurú",
    secureByDesignDesc: "A kọ́ ọ́ fún iṣakoso ìwọlé alábàáṣiṣẹ́pọ̀: akoonu tó wà lẹ́yìn login, ipo olùmúlò tó mọ́, àti àyè fún SSO / IAM ní ọjọ́ iwájú. O lè bẹ̀rẹ̀ lọ́nà tó rọrùn báyìí kí o sì gòkè sí enterprise identity lọ́jọ́ iwájú.",
    tick1: "Àwọn apá tó dá lórí ipa (Alábàáṣiṣẹ́pọ̀, Admin, Vendor)",
    tick2: "Ìṣàkóso session + aṣayan “rántí mi”",
    tick3: "Ṣetán fún àwọn àpẹẹrẹ integration SSO",
    loginFlowOverview: "Akopọ login flow",
    loginFlowSteps: "1) Ṣàyẹ̀wò credentials\n2) Dá session token sílẹ̀\n3) Dari lọ sí dashboard\n4) Dáàbò bo àwọn iṣẹ́ AI lẹ́yìn auth",
    cleanUx: "UX tó mọ́ tó sì lè gbooro",
    cleanUxDesc: "Jẹ́ kí ojú-ìwé naa jẹ́ amọ̀ja, kí o sì rọrùn láti ka: hierarchy tó dáa, spacing tó mọ́, àti àwọn section tó dá lórí kaadi tó lè dagba sí portal pipe.",
    contactPartnerOps: "Kan sí Partner Ops",
    badgeFastLoad: "Ìkójọpọ̀ yara",
    badgeClearCtas: "CTA tó mọ́",
    badgeModular: "Eto modular",
    faqTitle: "Àwọn ìbéèrè tí a máa ń béèrè",
    faq1Q: "Ta ni ó lè wọ portal yìí?",
    faq1A: "Àwọn olùmúlò alábàáṣiṣẹ́pọ̀ tí a fọwọ́sí, admins, àti àwọn ẹni tó ní aṣẹ pẹ̀lú credential tó pé.",
    faq2Q: "Ṣé ó lè so mọ́ SSO ní ọjọ́ iwájú?",
    faq2A: "Bẹ́ẹ̀ ni. Front end yìí ti ṣetán fún fífi SSO / IAM kun nígbà tó bá yẹ.",
    faq3Q: "Ṣé a lè fi àwọn irinṣẹ́ AI kun nínú rẹ?",
    faq3A: "Bẹ́ẹ̀ ni. A ṣe portal yìí láti so dashboards, knowledge bots, workflows, àti AI modules pọ̀.",
    requestTitle: "Ṣé o nílò ìwọlé alábàáṣiṣẹ́pọ̀?",
    requestSub: "Béèrè onboarding tàbí bá ẹgbẹ́ Westcon sọ̀rọ̀ láti mu ilé iṣẹ́ rẹ ṣiṣẹ́.",
    requestButton: "Béèrè Ìwọlé",
    forgotPasswordAlert: "Password reset kò tíì sopọ̀. So ó mọ́ IAM/SSO tàbí support flow rẹ.",
    enterCredentialsAlert: "Jọ̀wọ́ tẹ email/orúkọ olùmúlò àti ọ̀rọ̀ aṣínà rẹ.",
    invalidCredentialsAlert: "Credentials kò tọ́. Ṣàyẹ̀wò login/password rẹ tàbí béèrè ìwọlé.",
    signedInAs: "O ti wọlé gẹ́gẹ́ bí"
  }
};

const session = {
  key: "weston_partner_session",
  set(data, remember) {
    const payload = { ...data, ts: Date.now() };
    if (remember) localStorage.setItem(this.key, JSON.stringify(payload));
    else sessionStorage.setItem(this.key, JSON.stringify(payload));
  },
  clear() {
    localStorage.removeItem(this.key);
    sessionStorage.removeItem(this.key);
  },
  get() {
    const a = localStorage.getItem(this.key);
    const b = sessionStorage.getItem(this.key);
    return a ? JSON.parse(a) : (b ? JSON.parse(b) : null);
  }
};

const $ = (id) => document.getElementById(id);

function show(el){ if (el) el.classList.remove("hidden"); }
function hide(el){ if (el) el.classList.add("hidden"); }

function getCurrentLanguage() {
  return localStorage.getItem("siteLanguage") || "en";
}

function updateTranslations(lang = "en") {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  document.documentElement.lang = lang;
  document.title = t.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) {
      el.setAttribute("placeholder", t[key]);
    }
  });

  const select = $("languageSelect");
  if (select) select.value = lang;
}

function setLanguage(lang) {
  localStorage.setItem("siteLanguage", lang);
  updateTranslations(lang);
}

function setAlert(message){
  const alert = $("alert");
  if (!alert) return;
  alert.textContent = message;
  show(alert);
}

function clearAlert(){
  const alert = $("alert");
  if (!alert) return;
  alert.textContent = "";
  hide(alert);
}

function setSuccess(){
  show($("successBox"));
}

function clearSuccess(){
  hide($("successBox"));
}

function normalizeLogin(val){
  return String(val || "").trim().toLowerCase();
}

function findUser(login, password){
  const l = normalizeLogin(login);
  const p = String(password || "");
  return LOGIN_USERS.find(u => normalizeLogin(u.login) === l && u.password === p);
}

function updateSuccessCTA(user){
  const btn = document.querySelector("#successBox a.btn");
  if (!btn) return;

  const t = TRANSLATIONS[getCurrentLanguage()] || TRANSLATIONS.en;

  btn.href = user.redirect;
  btn.textContent = user.role === "admin"
    ? t.continueToAdminPortal
    : t.continueToDashboard;
}

document.addEventListener("DOMContentLoaded", () => {
  if ($("year")) {
    $("year").textContent = new Date().getFullYear();
  }

  const savedLanguage = getCurrentLanguage();
  updateTranslations(savedLanguage);

  $("languageSelect")?.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });

  const hamburger = $("hamburger");
  const mobileNav = $("mobileNav");
  hamburger?.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });

  const goLogin = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    $("email")?.focus();
  };

  $("openLoginTop")?.addEventListener("click", goLogin);
  $("openLoginHero")?.addEventListener("click", goLogin);
  $("openLoginMobile")?.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
    goLogin();
  });

  $("togglePw")?.addEventListener("click", () => {
    const pw = $("password");
    if (!pw) return;
    pw.type = pw.type === "password" ? "text" : "password";
  });

  $("forgotLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    clearSuccess();
    const t = TRANSLATIONS[getCurrentLanguage()] || TRANSLATIONS.en;
    setAlert(t.forgotPasswordAlert);
  });

  const existing = session.get();
  if (existing?.login){
    clearAlert();
    setSuccess();
    const t = TRANSLATIONS[getCurrentLanguage()] || TRANSLATIONS.en;
    if ($("loginHint")) {
      $("loginHint").innerHTML = `${t.signedInAs} <b>${existing.login}</b>.`;
    }
    updateSuccessCTA(existing);
  }

  $("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    clearAlert();
    clearSuccess();

    const t = TRANSLATIONS[getCurrentLanguage()] || TRANSLATIONS.en;
    const login = $("email")?.value;
    const password = $("password")?.value;
    const remember = $("remember")?.checked;

    if (!login || !password){
      setAlert(t.enterCredentialsAlert);
      return;
    }

    const user = findUser(login, password);
    if (!user){
      setAlert(t.invalidCredentialsAlert);
      return;
    }

    const sessionData = {
      login: user.login,
      name: user.name,
      role: user.role,
      redirect: user.redirect
    };

    session.set(sessionData, !!remember);

    if ($("loginHint")) {
      $("loginHint").innerHTML = `${t.signedInAs} <b>${user.login}</b>.`;
    }

    updateSuccessCTA(user);
    setSuccess();

    if (user.role === "admin") {
      window.location.href = user.redirect;
    }
  });
});
