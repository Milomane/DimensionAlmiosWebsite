/* =========================================================
   FLORENTIN ROBERGE — Main JS
   i18n · theme toggle · mobile nav · modal gallery
   ========================================================= */

'use strict';

/* ── TRANSLATIONS ─────────────────────────────────────── */
const i18n = {
  fr: {
    nav_about:       "À propos",
    nav_skills:      "Compétences",
    nav_exp:         "Expériences",
    nav_portfolio:   "Portfolio",
    nav_contact:     "Contact",

    hero_eyebrow:    "Game Developer",
    hero_subtitle:   "Développeur Gameplay Unity / C#",
    hero_desc:       "6 ans d'expérience · Mobile · VR · Multijoueur · Outils",
    hero_cta_portfolio: "Voir le Portfolio",
    hero_cta_cv:     "Télécharger le CV",
    hero_cta_contact:"Contact",

    about_title:     "À propos",
    about_p1:        "Développeur Unity / C# depuis plus de 6 ans, je travaille sur des jeux parce que c'est ce qui me passionne — des jeux mobiles AAA à la VR en passant par le multijoueur et les prototypes techniques. Chaque projet m'a appris quelque chose de différent, et c'est exactement ça qui me motive.",
    about_p2:        "Je suis polyvalent par nature : gameplay, intégration graphique, création d'outils, optimisation mobile... J'aime résoudre des problèmes concrets et construire des systèmes solides. J'enseigne aussi la programmation et le game design à des jeunes chez Studio XP — cette expérience m'a appris à structurer et expliquer clairement mes choix techniques, ce que je mets autant à profit en équipe qu'en code review. Si vous cherchez quelqu'un qui sait développer ET partager sa vision technique, je suis là pour ça.",
    about_p3:        "Jeux vidéo, musique electro, animés — et des projets perso qui tournent en permanence dans mon éditeur.",
    about_stat1_title: "6+ ans",
    about_stat1_desc:  "d'expérience Unity",
    about_stat2_title: "International",
    about_stat2_desc:  "Équipes FR & EN",
    about_stat3_title: "AAA Mobile",
    about_stat3_desc:  "Heroes of Mavia",
    about_stat4_title: "VR",
    about_stat4_desc:  "Enigmagic × Cyberith",

    skills_title:    "Compétences",
    skills_engines:  "Moteurs",
    skills_languages:"Langages",
    skills_domains:  "Domaines",
    skills_tools:    "Outils",

    domain_gameplay: "Gameplay Programming",
    domain_vfx:      "VFX & Shaders",
    domain_tools:    "Tool Development",
    domain_mobile:   "Optimisation Mobile",
    domain_vr:       "Réalité Virtuelle",
    domain_proc:     "Génération Procédurale",
    domain_net:      "Multijoueur / Réseau",
    domain_ui:       "UI/UX",
    domain_physic:   "Physique & Simulations",
    domain_debug:    "Debugging & Profiling",

    exp_title:       "Expériences",
    exp1_role:       "Développeur / Prototypage · Jeu Mobile 3D en ligne",
    exp1_company:    "Freelance · Collaboration internationale",
    exp1_desc:       "Contrat avec un indépendant américain pour la création d'un jeu vidéo mobile 3D en ligne de style party game. Seul développeur principal, prise en charge de l'ensemble de la stack Unity : architecture réseau server-authoritative, gameplay, prototypage et base technique.",
    exp1_highlight:  "Développement solo · Architecture réseau · Style Mario Party · Mobile 3D en ligne",
    exp2_role:       "Développeur Unity 3D / Tech Artist · Heroes of Mavia",
    exp2_desc:       "Développement de fonctionnalités de gameplay et d'effets visuels (VFX), intégration graphique, et création d'outils de développement sur mesure pour améliorer les workflows des artistes et des développeurs. Optimisation des processus de production et amélioration de l'expérience utilisateur en collaborant étroitement avec une équipe internationale.",
    exp2_highlight:  "Gameplay · VFX · Intégration graphique · Outils custom · Équipe internationale",
    exp3_role:       "Formateur — initiation au développement de jeux",
    exp3_desc:       "Initiation des jeunes aux fondamentaux de la création de jeux vidéo, de la logique et des logiciels de développement (Construct, Minecraft). Intervention chez Sercel pour une semaine d'innovation Unity.",
    exp4_role:       "Développeur Unity 3D · Lead développeur · Enigmagic",
    exp4_desc:       "Projet en collaboration entre E-Artsup et Cyberith, 9 mois à temps plein. Supervision d'une équipe de 9 développeurs et artistes. Chef de projet et lead développeur, avec un focus sur les sorts et les interactions du joueur. Compatible avec le walker VR Virtualizer 2 de Cyberith.",
    exp4_highlight:  "Chef de projet · Lead Dev · Virtualizer 2 · 9 personnes · Sorts & interactions VR",
    exp_see_project: "→ Voir le projet",
    edu_degree:      "Bachelor Game & Creative Coding",
    edu_desc:        "Spécialisation en développement de jeux vidéo avec Unity et C#. Game design, level design, UI/UX. Projets en équipe, dont 2 en tant que chef de projet.",

    portfolio_title: "Portfolio",
    portfolio_sub:   "Sélection de projets professionnels et personnels",
    portfolio_more:  "Voir tous les projets →",
    card_details:    "Voir les détails",
    card_pro:        "Professionnel",
    card_student:    "Étudiant",
    card_personal:   "Personnel",
    card_jam:        "Game Jam",
    card_freelance:  "Freelance",

    mobile3d_short:  "Jeu mobile 3D en ligne · Style party game · Freelance",
    mavia_short:     "Jeu mobile AAA de stratégie · Skrice Studio",
    enigmagic_short: "Escape game VR · E-Artsup × Cyberith",
    kbot_short:      "Puzzle-platformer 3D · E-Artsup",
    planet_title:    "Planète Procédurale",
    planet_short:    "Génération procédurale de planète avec LOD sphérique",
    voxel_title:     "Génération Procédurale Voxel",
    voxel_short:     "Clone Minecraft · Apprentissage Marching Cubes",
    city_short:      "Mecha · Unreal Engine Chaos System",
    sentry_short:    "Tower defense · Global Game Jam 2020",
    memories_short:  "Labyrinthe roguelike · Global Game Jam 2021",
    galactic_short:  "Jeu 2D gravité planétaire · Workshop 3 jours",
    komrog_short:    "Roguelike 2D · Première année E-Artsup",
    tron_short:      "Versus 3D · 2 à 4 joueurs · Moto + traînée",

    vfx_title:  "VFX",
    vfx_sub:    "Quelques aperçus de VFX réalisés sur mes projets",

    contact_title:    "Contact",
    contact_sub:      "Disponible pour des opportunités en développement gameplay",
    contact_email:    "Email",
    contact_phone:    "Téléphone",
    contact_cv:       "Télécharger le CV",
    contact_available:"Disponible",
    contact_location: "Basé à Vallet, Loire-Atlantique (44) · Remote OK",
    contact_cta:      "M'écrire un email",
    footer_made:      "Fait avec passion",

    pf_title:          "Portfolio",
    pf_sub:            "Tous mes projets — jeux, prototypes, expériences techniques",
    pf_filter_all:     "Tout",
    pf_filter_pro:     "Professionnel",
    pf_filter_unity:   "Unity",
    pf_filter_unreal:  "Unreal",
    pf_filter_vr:      "VR",
    pf_filter_proc:    "Procédural",
    pf_filter_jam:     "Game Jam",
    pf_filter_vfx:     "VFX",
    pf_filter_ld:      "Level Design",
    pf_ld_title:       "Level Design",
    pf_ld_sub:         "Voici quelques level design de ma création sur différents projets auxquels j'ai participé ou simplement des créations que j'ai réalisées pour m'amuser.",
    pf_ld_kbot:        "Level Design · K-Bot",
    pf_ld_kbot_desc:   "Plans des niveaux du jeu K-Bot avant construction 3D.",
    pf_ld_proc:        "Level Design · Génération Procédurale",
    pf_ld_proc_desc:   "Captures du projet de génération procédurale en voxel.",
    pf_ld_planet:      "Level Design · Planète Procédurale",
    pf_ld_planet_desc: "Captures de la planète procédurale et du système de LOD.",
    pf_ld_zelda:       "Level Design · Donjon Zelda Wind Waker",
    pf_ld_zelda_desc:  "Conception d'un donjon théorique de Zelda Wind Waker (3ème donjon), plans et réalisation 3D.",
    back_home:         "← Retour à l'accueil",
  },

  en: {
    nav_about:       "About",
    nav_skills:      "Skills",
    nav_exp:         "Experience",
    nav_portfolio:   "Portfolio",
    nav_contact:     "Contact",

    hero_eyebrow:    "Game Developer",
    hero_subtitle:   "Unity / C# Gameplay Developer",
    hero_desc:       "6 years experience · Mobile · VR · Multiplayer · Tools",
    hero_cta_portfolio: "View Portfolio",
    hero_cta_cv:     "Download CV",
    hero_cta_contact:"Contact",

    about_title:     "About",
    about_p1:        "I've been a Unity / C# developer for over 6 years — working on games because it's what I genuinely love. From AAA mobile to VR and online multiplayer prototypes, every project has taught me something different, and that's exactly what keeps me going.",
    about_p2:        "I'm versatile by nature: gameplay, graphical integration, tool development, mobile optimization... I enjoy solving concrete problems and building solid systems. I also teach programming and game design to young learners at Studio XP — that experience has sharpened my ability to structure and explain technical decisions clearly, something I bring just as much to team discussions and code reviews as to the code itself. If you're looking for someone who can both build and share a technical vision, I'm here for that.",
    about_p3:        "Video games, electronic music, anime — and personal projects always running somewhere in my editor.",
    about_stat1_title: "6+ years",
    about_stat1_desc:  "Unity experience",
    about_stat2_title: "International",
    about_stat2_desc:  "FR & EN teams",
    about_stat3_title: "AAA Mobile",
    about_stat3_desc:  "Heroes of Mavia",
    about_stat4_title: "VR",
    about_stat4_desc:  "Enigmagic × Cyberith",

    skills_title:    "Skills",
    skills_engines:  "Engines",
    skills_languages:"Languages",
    skills_domains:  "Domains",
    skills_tools:    "Tools",

    domain_gameplay: "Gameplay Programming",
    domain_vfx:      "VFX & Shaders",
    domain_tools:    "Tool Development",
    domain_mobile:   "Mobile Optimization",
    domain_vr:       "Virtual Reality",
    domain_proc:     "Procedural Generation",
    domain_net:      "Multiplayer / Networking",
    domain_ui:       "UI/UX",
    domain_physic:   "Physics & Simulations",
    domain_debug:    "Debugging & Profiling",

    exp_title:       "Experience",
    exp1_role:       "Developer / Prototyping · 3D Online Mobile Game",
    exp1_company:    "Freelance · International collaboration",
    exp1_desc:       "Contract with an American independent developer to create a 3D online mobile party game. Sole lead developer, responsible for the entire Unity stack: server-authoritative network architecture, gameplay, prototyping, and technical foundation.",
    exp1_highlight:  "Solo development · Network architecture · Mario Party style · 3D online mobile",
    exp2_role:       "Unity 3D Developer / Tech Artist · Heroes of Mavia",
    exp2_desc:       "Gameplay feature and visual effects (VFX) development, graphical integration, and creation of custom development tools to improve artist and developer workflows. Optimized production processes and user experience while collaborating closely with an international team.",
    exp2_highlight:  "Gameplay · VFX · Graphical integration · Custom tools · International team",
    exp3_role:       "Instructor — game development fundamentals",
    exp3_desc:       "Teaching young people the fundamentals of game creation, logic, and development tools (Construct, Minecraft). Intervention at Sercel for a Unity innovation week.",
    exp4_role:       "Unity 3D Developer · Lead Developer · Enigmagic",
    exp4_desc:       "Collaborative project between E-Artsup and Cyberith, 9 months full-time. Supervised a team of 9 developers and artists. Project manager and lead developer, focused on spells and player interactions. Compatible with the Virtualizer 2 VR walker by Cyberith.",
    exp4_highlight:  "Project Manager · Lead Dev · Virtualizer 2 · 9 people · VR spells & interactions",
    exp_see_project: "→ See project",
    edu_degree:      "Bachelor in Game & Creative Coding",
    edu_desc:        "Specialization in game development with Unity and C#. Game design, level design, UI/UX. Team projects, 2 as project manager.",

    portfolio_title: "Portfolio",
    portfolio_sub:   "Selection of professional and personal projects",
    portfolio_more:  "View all projects →",
    card_details:    "See details",
    card_pro:        "Professional",
    card_student:    "Student",
    card_personal:   "Personal",
    card_jam:        "Game Jam",
    card_freelance:  "Freelance",

    mobile3d_short:  "3D online mobile game · Party game style · Freelance",
    mavia_short:     "AAA mobile strategy game · Skrice Studio",
    enigmagic_short: "VR escape game · E-Artsup × Cyberith",
    kbot_short:      "3D puzzle-platformer · E-Artsup",
    planet_title:    "Procedural Planet",
    planet_short:    "Procedural planet generation with spherical LOD",
    voxel_title:     "Procedural Voxel Generation",
    voxel_short:     "Minecraft-like · Learning Marching Cubes",
    city_short:      "Mecha · Unreal Engine Chaos System",
    sentry_short:    "Tower defense · Global Game Jam 2020",
    memories_short:  "Roguelike maze · Global Game Jam 2021",
    galactic_short:  "2D planetary gravity game · 3-day workshop",
    komrog_short:    "2D roguelike · First year at E-Artsup",
    tron_short:      "3D versus · 2 to 4 players · Motorcycle + trail",

    vfx_title:  "VFX",
    vfx_sub:    "A few VFX previews created across my projects",

    contact_title:    "Contact",
    contact_sub:      "Available for gameplay development opportunities",
    contact_email:    "Email",
    contact_phone:    "Phone",
    contact_cv:       "Download CV",
    contact_available:"Available",
    contact_location: "Based in Vallet, Loire-Atlantique (44) · Remote OK",
    contact_cta:      "Send an email",
    footer_made:      "Made with passion",

    pf_title:          "Portfolio",
    pf_sub:            "All projects — games, prototypes, technical experiments",
    pf_filter_all:     "All",
    pf_filter_pro:     "Professional",
    pf_filter_unity:   "Unity",
    pf_filter_unreal:  "Unreal",
    pf_filter_vr:      "VR",
    pf_filter_proc:    "Procedural",
    pf_filter_jam:     "Game Jam",
    pf_filter_vfx:     "VFX",
    pf_filter_ld:      "Level Design",
    pf_ld_title:       "Level Design",
    pf_ld_sub:         "Here are some level designs I created for projects I worked on, or simply for practice.",
    pf_ld_kbot:        "Level Design · K-Bot",
    pf_ld_kbot_desc:   "K-Bot level plans before 3D construction.",
    pf_ld_proc:        "Level Design · Procedural Generation",
    pf_ld_proc_desc:   "Screenshots from the voxel procedural generation project.",
    pf_ld_planet:      "Level Design · Procedural Planet",
    pf_ld_planet_desc: "Screenshots of the procedural planet and LOD system.",
    pf_ld_zelda:       "Level Design · Zelda Wind Waker Dungeon",
    pf_ld_zelda_desc:  "Theoretical Zelda Wind Waker dungeon (3rd dungeon) with floor plans and 3D realization.",
    back_home:         "← Back to home",
  }
};

/* ── PROJECT DATA ──────────────────────────────────────── */
const projects = {
  mobile3d: {
    title: { fr: "Jeu Mobile 3D en ligne", en: "3D Online Mobile Game" },
    year: "2025–2026",
    type: { fr: "Professionnel", en: "Professional" },
    tags: ["Unity", "Mobile", "3D", "Multijoueur", "PurrNet", "Party Game"],
    categories: ["pro", "unity"],
    desc: {
      fr: "Contrat avec un indépendant américain pour la création d'un jeu vidéo mobile 3D en ligne de style party game. En tant que développeur principal, j'ai pris en charge l'ensemble de la stack Unity : architecture réseau server-authoritative, mécaniques de gameplay, prototypage et base technique.",
      en: "Contract with an American independent developer to create a 3D online mobile party game. As the sole lead developer, I handled the entire Unity stack: server-authoritative network architecture, gameplay mechanics, prototyping, and technical foundation."
    },
    bullets: {
      fr: ["Développeur principal sur l'ensemble du projet", "Architecture réseau server-authoritative (PurrNet)", "Gameplay mobile 3D en ligne · style party game", "Prototypage et mise en place de la base technique", "Collaboration internationale"],
      en: ["Sole lead developer across the entire project", "Server-authoritative network architecture (PurrNet)", "3D online mobile gameplay · party game style", "Prototyping and technical foundation", "International collaboration"]
    },
    images: ["assets/ProjetMobile3D/ProjetMobile3DEnLigne.png"],
    links: []
  },
  mavia: {
    title: "Heroes of Mavia",
    year: "2022–2024",
    type: { fr: "Professionnel", en: "Professional" },
    tags: ["Unity", "Mobile", "3D", "AAA", "Gameplay", "VFX", "Tools", "C#", "International"],
    categories: ["pro", "unity"],
    desc: {
      fr: "Jeu mobile AAA de stratégie en temps réel. Mon rôle sur ce projet a été le développement de fonctionnalités de gameplay et d'effets visuels (VFX), intégration graphique, et création d'outils de développement sur mesure pour améliorer les workflows des artistes et des développeurs. J'ai travaillé à l'optimisation des processus de production et à l'amélioration de l'expérience utilisateur en collaborant étroitement avec une équipe internationale.",
      en: "AAA real-time strategy mobile game. My role on this project was the development of gameplay features and visual effects (VFX), graphical integration, and creation of custom development tools to improve artist and developer workflows. I worked on optimizing production processes and improving user experience while collaborating closely with an international team."
    },
    bullets: {
      fr: ["Développement de fonctionnalités de gameplay", "Création d'effets visuels (VFX)", "Intégration graphique", "Outils de développement sur mesure", "Optimisation des processus de production", "Collaboration avec une équipe internationale"],
      en: ["Gameplay feature development", "Visual effects (VFX) creation", "Graphical integration", "Custom development tools", "Production process optimization", "Collaboration with an international team"]
    },
    images: [
      "assets/Heroes of Mavia/HeroesOfMaviaMain.png",
      "assets/Heroes of Mavia/HeroesOfMavia1.png",
      "assets/Heroes of Mavia/HeroesOfMavia2.png",
      "assets/Heroes of Mavia/HeroesOfMavia3.png"
    ],
    links: [
      { label: "Trailer", url: "https://www.youtube.com/watch?v=bYmpEeRG-_o" },
      { label: "heroesofmavia.com", url: "https://heroesofmavia.com" }
    ]
  },
  enigmagic: {
    title: "Enigmagic",
    year: "2021–2022",
    type: { fr: "Professionnel", en: "Professional" },
    tags: ["Unity", "VR", "3D", "C#", "Lead Dev", "Cyberith"],
    categories: ["pro", "unity", "vr"],
    desc: {
      fr: "Enigmagic est un escape game magique en VR que j'ai produit avec la collaboration de 9 collègues pour notre fin de cursus à E-Artsup. J'ai travaillé principalement en tant que chef de projet, lead développeur et développeur. J'ai également aidé l'équipe graphique pour les VFX ainsi que l'intégration. Le gros de ma production est centré sur les sorts et les interactions du joueur. La grosse particularité de ce projet est que nous devions le développer pour être compatible avec un walker VR, le Virtualizer 2 de Cyberith.",
      en: "Enigmagic is a magical VR escape game I produced with 9 colleagues for our final project at E-Artsup. I worked mainly as project manager, lead developer, and developer. I also helped the graphics team with VFX and integration. The bulk of my contribution is centered on spells and player interactions. The key feature of this project is that it had to be developed to be compatible with a VR walker, the Virtualizer 2 by Cyberith."
    },
    bullets: {
      fr: ["Chef de projet & Lead Développeur", "Sorts et interactions du joueur", "VFX et intégration graphique", "Compatibilité Virtualizer 2 de Cyberith", "Coordination d'une équipe de 9 personnes"],
      en: ["Project Manager & Lead Developer", "Spells and player interactions", "VFX and graphical integration", "Virtualizer 2 by Cyberith compatibility", "Coordinating a 9-person team"]
    },
    images: [
      "assets/Enigmagic/EnigmagicMain.png",
      "assets/Enigmagic/Enigmagic1.jpg",
      "assets/Enigmagic/Enigmagic2.jpg",
      "assets/Enigmagic/Enigmagic3.jpg",
      "assets/Enigmagic/Enigmagic4.jpg",
      "assets/Enigmagic/Enigmagic5.jpg",
      "assets/Enigmagic/testeurVirtualizer2.png",
      "assets/Enigmagic/Virtualizer-ELITE-2-and-Virtualizer-RD-Kit-VR-Treadmill-comparison.jpg"
    ],
    links: [
      { label: "Trailer", url: "https://www.youtube.com/watch?v=GU7NYKMZnUE" }
    ]
  },
  kbot: {
    title: "K-Bot",
    year: "2021",
    type: { fr: "Étudiant", en: "Student" },
    tags: ["Unity", "C#", "Puzzle-Platformer", "3D", "Gameplay"],
    categories: ["unity"],
    desc: {
      fr: "K-Bot est un puzzle-platformer en 3D dont le but est de détruire son personnage pour progresser. Il a été produit en fin de 2ème année à E-artsup, j'ai principalement participé à la création des contrôles et mouvements du personnage, ainsi que la plupart de ses capacités de destruction. J'ai également participé à la création du niveau principal du jeu, l'usine.",
      en: "K-Bot is a 3D puzzle-platformer where the goal is to destroy your character to progress. It was produced at the end of 2nd year at E-Artsup. I mainly contributed to creating the character's controls and movements, as well as most of its destruction abilities. I also participated in creating the main level of the game, the factory."
    },
    images: [
      "assets/K-Bot/K-BotMain.png",
      "assets/K-Bot/K-Bot1.png",
      "assets/K-Bot/K-Bot2.png",
      "assets/K-Bot/K-Bot3.png",
      "assets/K-Bot/K-Bot4.png",
      "assets/K-Bot/K-Bot5.png",
      "assets/K-Bot/K-Bot6.png",
      "assets/K-Bot/K-Bot7.png",
      "assets/K-Bot/K-Bot8.png",
      "assets/K-Bot/K-Bot9.png",
      "assets/K-Bot/K-Bot10.png",
      "assets/K-Bot/K-Bot11.png"
    ],
    links: [
      { label: "Trailer", url: "https://www.youtube.com/watch?v=Hg_KA5CRfTE" },
      { label: "itch.io", url: "https://rwaguen.itch.io/k-bot" }
    ]
  },
  planet: {
    title: { fr: "Planète Procédurale", en: "Procedural Planet" },
    year: "2021",
    type: { fr: "Personnel", en: "Personal" },
    tags: ["Unity", "C#", "3D", "Procedural", "LOD", "Solo"],
    categories: ["unity", "proc"],
    desc: {
      fr: "J'ai réalisé ce projet seul en me mettant au défi de générer une planète procéduralement et que l'on puisse descendre à sa surface tout en gardant une qualité correcte autour de la caméra. Pour ce faire, j'ai donc créé un système de LOD qui fonctionne pour un espace comme une planète.",
      en: "I created this project solo, challenging myself to procedurally generate a planet that you can descend to the surface of while maintaining correct quality around the camera. To do this, I created an LOD system that works for spherical space like a planet."
    },
    images: [
      "assets/GenerationPlanetProc/Planet3.gif",
      "assets/GenerationPlanetProc/planete-proc.png",
      "assets/GenerationPlanetProc/Planet1.PNG",
      "assets/GenerationPlanetProc/Planet2.PNG",
      "assets/GenerationPlanetProc/Planet4.PNG",
      "assets/GenerationPlanetProc/Planet5.PNG",
      "assets/GenerationPlanetProc/Planet6.PNG"
    ],
    links: []
  },
  voxel: {
    title: { fr: "Génération Procédurale Voxel", en: "Procedural Voxel Generation" },
    year: "2020",
    type: { fr: "Personnel", en: "Personal" },
    tags: ["Unity", "C#", "3D", "Voxel", "Procedural", "Marching Cubes", "Solo"],
    categories: ["unity", "proc"],
    desc: {
      fr: "Ce projet qui ressemble au clone de Minecraft est un projet que j'ai réalisé dans le but d'apprendre le fonctionnement de la génération procédurale en voxel.",
      en: "This project, which resembles a Minecraft clone, is a project I made to learn how voxel procedural generation works."
    },
    images: [
      "assets/GenerationProcVoxel/generation-proc.png",
      "assets/GenerationProcVoxel/procedural1.png",
      "assets/GenerationProcVoxel/procedural2.PNG",
      "assets/GenerationProcVoxel/procedural3.PNG",
      "assets/GenerationProcVoxel/procedural4.PNG",
      "assets/GenerationProcVoxel/procedural5.PNG"
    ],
    links: []
  },
  city: {
    title: "City Destroyer",
    year: "2022",
    type: { fr: "Étudiant", en: "Student" },
    tags: ["Unreal Engine", "Chaos", "3D", "Destruction", "Solo"],
    categories: ["unreal"],
    desc: {
      fr: "Un projet de mecha qui détruit \"Une ville\" pour s'améliorer et en détruire encore plus ! C'est un projet que j'ai réalisé seul, le but était de réussir à utiliser le système de Chaos d'Unreal Engine.",
      en: "A mecha project that destroys \"A city\" to improve itself and destroy even more! This is a project I made solo, with the goal of successfully using Unreal Engine's Chaos destruction system."
    },
    images: [
      "assets/City Destroyer/city-destroyer.png",
      "assets/City Destroyer/CityDestroyer1.png",
      "assets/City Destroyer/CityDestroyer2.png",
      "assets/City Destroyer/CityDestroyer3.png"
    ],
    links: []
  },
  sentry: {
    title: "Sentry Dawn",
    year: "GGJ 2020",
    type: { fr: "Game Jam", en: "Game Jam" },
    tags: ["Unity", "C#", "Tower Defense", "Game Jam"],
    categories: ["unity", "jam"],
    desc: {
      fr: "Sentry dawn est un jeu créé lors de la Global game jam 2020, c'est un tower defense où le joueur doit aller lui-même construire ses tours et récupérer l'argent qui apparait sur la carte.",
      en: "Sentry Dawn is a game created during Global Game Jam 2020. It's a tower defense where the player must go themselves to build their towers and collect the money that appears on the map."
    },
    images: [
      "assets/Sentry Dawn/sentry-down.png",
      "assets/Sentry Dawn/image.png",
      "assets/Sentry Dawn/image (1).png",
      "assets/Sentry Dawn/image (2).png",
      "assets/Sentry Dawn/image (3).png",
      "assets/Sentry Dawn/image (4).png"
    ],
    links: [
      { label: "Global Game Jam", url: "https://globalgamejam.org/2020/games/sentry-dawn-1" }
    ]
  },
  memories: {
    title: "Memories Uncovered",
    year: "GGJ 2021",
    type: { fr: "Game Jam", en: "Game Jam" },
    tags: ["Unity", "C#", "Maze", "Horror", "Jam"],
    categories: ["unity", "jam"],
    desc: {
      fr: "Memories Uncovered est un jeu créé lors de la Global Game jam 2021, elle met en scène un personnage qui cherche ses souvenirs dans un labyrinthe généré aléatoirement alors qu'il est poursuivi par des monstres.",
      en: "Memories Uncovered is a game created during Global Game Jam 2021. It features a character searching for their memories in a randomly generated maze while being chased by monsters."
    },
    images: [
      "assets/MemoriesUncovered/memories-uncovered.png",
      "assets/MemoriesUncovered/MemoriesUncovered1.png",
      "assets/MemoriesUncovered/MemoriesUncovered2.png",
      "assets/MemoriesUncovered/MemoriesUncovered3.png",
      "assets/MemoriesUncovered/MemoriesUncovered4.png",
      "assets/MemoriesUncovered/MemoriesUncovered5.png"
    ],
    links: [
      { label: "Global Game Jam", url: "https://globalgamejam.org/2021/games/lost-and-found-memories-uncovered-7" }
    ]
  },
  galactic: {
    title: "Galactic Jumping",
    year: "2020",
    type: { fr: "Étudiant", en: "Student" },
    tags: ["Unity", "C#", "2D", "Gravity", "Workshop"],
    categories: ["unity"],
    desc: {
      fr: "Galactic Jumping est un jeu en 2D créé en 3 jours à l'occasion d'un workshop. On contrôle un petit astronaute qui doit s'aider de la gravité des planètes pour atteindre la fin des niveaux !",
      en: "Galactic Jumping is a 2D game created in 3 days during a workshop. You control a little astronaut who must use the gravity of planets to reach the end of the levels!"
    },
    images: ["assets/GalacticJumping/galactic-jumping.png"],
    links: [
      { label: "Télécharger", url: "https://drive.google.com/file/d/1eDsjPd-umTmEgpn4DTefKdhCMQiAIjsd/view" }
    ]
  },
  komrog: {
    title: "KOMROG",
    year: "2019–2020",
    type: { fr: "Étudiant", en: "Student" },
    tags: ["Unity", "C#", "Roguelike", "2D", "Dungeon"],
    categories: ["unity"],
    desc: {
      fr: "Komrog est un projet de rogue like en 2D réalisé en première année d'école dont le but est d'explorer un donjon tout en récupérant des améliorations pour son arme et son personnage jusqu'à atteindre la fin du jeu.",
      en: "Komrog is a 2D roguelike project made in the first year of school, where the goal is to explore a dungeon while collecting upgrades for your weapon and character until you reach the end of the game."
    },
    images: [
      "assets/Komrog/komrog.png",
      "assets/Komrog/image.png",
      "assets/Komrog/image (1).png",
      "assets/Komrog/image (2).png",
      "assets/Komrog/image (3).png",
      "assets/Komrog/image (4).png",
      "assets/Komrog/image (5).png"
    ],
    links: [
      { label: "Télécharger", url: "https://drive.google.com/file/d/1cLqAv5-75650Bm8FUApQVTyl9aU7JxfX/view" }
    ]
  },
  tron: {
    title: "Projet Tron",
    year: "2020–2021",
    type: { fr: "Étudiant", en: "Student" },
    tags: ["Unity", "C#", "Multiplayer", "3D", "Versus"],
    categories: ["unity"],
    desc: {
      fr: "Le projet Tron est un jeu réalisé en cours. C'est un jeu de versus en 3D de 2 à 4 joueurs ou l'on contrôle une moto et dans lequel on doit éliminer les autres joueurs en leur passant devant grace à une trainée. On est aussi aidé par des power-up qui se génèrent sur le terrain.",
      en: "The Tron project is a game made in class. It's a 3D versus game for 2 to 4 players where you control a motorcycle and must eliminate other players by crossing in front of them with your trail. You are also helped by power-ups that spawn on the map."
    },
    images: ["assets/ProjetTron/projet-tron.png"],
    links: []
  }
};

/* ── STATE ─────────────────────────────────────────────── */
let currentLang    = localStorage.getItem('lang')
                    || (navigator.language && navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en');
let currentTheme   = localStorage.getItem('theme') || 'dark';
let currentProject = null;
let currentImgIdx  = 0;

/* ── INIT ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  initNav();
  initModal();
  initFilters();
  initScrollEffects();
});

/* Re-sync theme/lang if page is restored from bfcache
   (DOMContentLoaded does NOT re-fire in that case)       */
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    applyTheme(localStorage.getItem('theme') || 'dark');
    applyLang(localStorage.getItem('lang')
              || (navigator.language && navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en'));
  }
});

/* ── SYNC INTERNAL LINKS ──────────────────────────────── */
/* Decorates every .html link with ?lang=…&theme=… so that
   settings survive cross-page navigation even when
   localStorage is isolated per-file (file:// protocol).
   Also strips those params from the current URL bar so
   it stays clean after they have been consumed.          */
function syncLinks() {
  document.querySelectorAll('a[href]').forEach(function(a) {
    if (!a.getAttribute('href') || !/\.html/.test(a.getAttribute('href'))) return;
    try {
      const url = new URL(a.href, location.href);
      url.searchParams.set('lang',  currentLang);
      url.searchParams.set('theme', currentTheme);
      a.href = url.pathname + url.search + url.hash;
    } catch(e) {}
  });
  /* Clean params from address bar once they have been read */
  if (/[?&](lang|theme)=/.test(location.search)) {
    try { history.replaceState(null, '', location.pathname + location.hash); } catch(e) {}
  }
}

/* ── THEME ─────────────────────────────────────────────── */
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = theme === 'dark' ? '☀' : '🌙';
  syncLinks();
}
document.getElementById('theme-btn')?.addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

/* ── LANGUAGE ──────────────────────────────────────────── */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = lang === 'fr' ? 'EN' : 'FR';
  syncLinks();
}
document.getElementById('lang-btn')?.addEventListener('click', () => {
  applyLang(currentLang === 'fr' ? 'en' : 'fr');
});

/* ── NAV ───────────────────────────────────────────────── */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.textContent = '☰';
    });
  });
}

/* ── SCROLL ────────────────────────────────────────────── */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ── MODAL ─────────────────────────────────────────────── */
function initModal() {
  const overlay  = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const prevBtn  = document.getElementById('gallery-prev');
  const nextBtn  = document.getElementById('gallery-next');
  if (!overlay) return;

  document.querySelectorAll('[data-project]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.project));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.project); }
    });
  });

  closeBtn?.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  prevBtn?.addEventListener('click', (e) => { e.stopPropagation(); changeImage(-1); });
  nextBtn?.addEventListener('click', (e) => { e.stopPropagation(); changeImage(+1); });

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('hidden')) {
      if (e.key === 'Escape')     closeModal();
      if (e.key === 'ArrowLeft')  changeImage(-1);
      if (e.key === 'ArrowRight') changeImage(+1);
    }
  });
}

function openModal(id) {
  const p = projects[id];
  if (!p) return;
  currentProject = p;
  currentImgIdx  = 0;

  document.getElementById('modal-year').textContent  = p.year || '';
  document.getElementById('modal-type').textContent  = (p.type && p.type[currentLang]) || '';
  document.getElementById('modal-title').textContent = typeof p.title === 'object' ? p.title[currentLang] : p.title;

  const tagsEl = document.getElementById('modal-tags');
  tagsEl.innerHTML = '';
  (p.tags || []).forEach(tag => {
    const s = document.createElement('span');
    s.className = 'tag';
    s.textContent = tag;
    tagsEl.appendChild(s);
  });

  document.getElementById('modal-desc').textContent = (p.desc && p.desc[currentLang]) || '';

  const bulletsEl = document.getElementById('modal-bullets');
  bulletsEl.innerHTML = '';
  const bullets = p.bullets && p.bullets[currentLang];
  if (bullets && bullets.length) {
    bullets.forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      bulletsEl.appendChild(li);
    });
  }

  const linksEl = document.getElementById('modal-links');
  linksEl.innerHTML = '';
  (p.links || []).forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = link.label;
    linksEl.appendChild(a);
  });

  updateGalleryDots();
  showImage(0);

  const many = (p.images || []).length > 1;
  const prev = document.getElementById('gallery-prev');
  const next = document.getElementById('gallery-next');
  if (prev) prev.style.display = many ? 'flex' : 'none';
  if (next) next.style.display = many ? 'flex' : 'none';

  document.getElementById('modal-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
  currentProject = null;
}

function showImage(idx) {
  if (!currentProject || !currentProject.images) return;
  const imgs = currentProject.images;
  currentImgIdx = ((idx % imgs.length) + imgs.length) % imgs.length;
  const el = document.getElementById('modal-img');
  if (el) {
    el.src = imgs[currentImgIdx];
    el.alt = typeof currentProject.title === 'object' ? currentProject.title[currentLang] : currentProject.title;
  }
  document.querySelectorAll('.gallery-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentImgIdx);
  });
}

function changeImage(dir) { showImage(currentImgIdx + dir); }

function updateGalleryDots() {
  const dotsEl = document.getElementById('gallery-dots');
  if (!dotsEl || !currentProject) return;
  dotsEl.innerHTML = '';
  (currentProject.images || []).forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => showImage(i));
    dotsEl.appendChild(dot);
  });
}

/* ── PORTFOLIO FILTERS ─────────────────────────────────── */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('[data-categories]').forEach(card => {
        if (filter === 'all') {
          card.classList.remove('portfolio-item-hidden');
        } else {
          const cats = (card.dataset.categories || '').split(' ');
          card.classList.toggle('portfolio-item-hidden', !cats.includes(filter));
        }
      });
    });
  });
}
