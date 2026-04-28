export type Language = "en" | "ig" | "fr";

export const translations = {
  en: {
    nav: {
      about: "About",
      resume: "Resume",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      name: "Dikeocha Gift",
      role: "Software Engineer",
      hireMe: "Hire Me",
      showContacts: "Show Contacts",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      bio1: "I'm a Software Engineer, UI/UX Designer & Social Media Manager. I create modern, responsive websites and digital experiences that are both visually appealing and highly functional. I blend design, development, and strategy to help brands stand out and grow online.",
      bio2: "My mission is to build digital experiences that are not only functional but also visually compelling and strategically impactful—bringing ideas to life through modern technologies, intuitive design, and audience-focused solutions that scale and engage.",
      whatIDo: "What I'm Doing",
      services: {
        web: {
          title: "Web Development",
          desc: "Modern, responsive websites with seamless backend functionality and API integrations.",
        },
        mobile: {
          title: "SEO Optimization",
          desc: "Improving search visibility, rankings, and organic traffic.",
        },
        api: {
          title: "UI/UX Design",
          desc: "Clean, user-focused interfaces designed to deliver smooth and engaging experiences.",
        },
        ui: {
          title: "Social Media Management",
          desc: "Creating, managing, and growing brand presence across social platforms to boost engagement and reach.",
        },
      },
      testimonials: "Testimonials",
    },
    resume: {
      title: "Resume",
      education: "Education",
      experience: "Experience",
      skills: "My Skills",
      edu: [
        {
          school: "Mbara Ozioma College of Technology (MOCTECH), Imo State",
          period: "2020 — 2022",
          detail: "N.D Computer Software Engineering | Upper Credit",
        },
        {
          school: "Aptech Computer Education, Owerri",
          period: "2023",
          detail: "Website Development | Credit",
        },
      ],
      exp: [
        {
          role: "Software Engineer & Program Manager",
          period: "2024 — Present",
          detail: "Finta Tech, Owerri, Imo State",
        },
        {
          role: "Social Media Manager, Video Editor & Website Manager",
          period: "2025 — Present",
          detail: "C & C Bespoke Fashion, Maryland, USA (Remote).",
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      filter: {
        all: "All",
        web: "Web Design",
        apps: "Applications",
        dev: "Web Development",
      },
      projects: [
        { title: "ShopEase | E-Commerce Platform", category: "web", tag: "Web Development" },
        { title: "TaskFlow | Task Management", category: "apps", tag: "Applications" },
        { title: "Quickchat | Real-time Chat", category: "dev", tag: "Web Development" },
        { title: "BlogSpace | Article Platform", category: "dev", tag: "Web Development" },
        { title: "PrepAI | Interview Agent", category: "apps", tag: "Applications" },
        { title: "FinTrack | Finance Dashboard", category: "web", tag: "Web Design" },
      ],
    },
    blog: {
      title: "Blog",
      posts: [
        {
          title: "Building Scalable APIs with Next.js",
          date: "Mar 12, 2025",
          category: "Development",
          excerpt: "How I structure large-scale API routes in Next.js App Router.",
        },
        {
          title: "Mastering Framer Motion",
          date: "Feb 5, 2025",
          category: "Design",
          excerpt: "Advanced animation patterns that will elevate your UI.",
        },
        {
          title: "TypeScript Best Practices in 2025",
          date: "Jan 20, 2025",
          category: "Engineering",
          excerpt: "Type-safe patterns every senior developer should know.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Reach Out to Me",
      reachOut: "Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and I'll get back to you within 24 hours.",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email Address",
      messagePlaceholder: "Your Message",
      send: "Send Message",
      email: "Email",
      phone: "Phone",
      location: "Location",
      emailValue: "giftdyk10@gmail.com",
      phoneValue: "+234 9076707294",
      locationValue: "Nigeria",
    },
  },

  ig: {
    nav: {
      about: "Maka Onwe M",
      resume: "Ihe Ọ Mụtara",
      portfolio: "Ọrụ M",
      blog: "Blọọgụ",
      contact: "Kpọtụrụ M",
    },
    hero: {
      name: "Dikeocha Gift",
      role: "Injinia Sọftụwia",
      hireMe: "Kpọọ m ọrụ",
      showContacts: "Gosi Kọntaktị",
      downloadCV: "Budata CV",
    },
    about: {
      title: "Maka Onwe M",
      bio1: "Abụ m Injinia Sọftụwia, Onye Nhazi UI/UX & Onye Njikwa Mgbasa Ozi. A na-ewu m weebụsaịtị ọhụrụ, na-azaghachi azaghachi yana ahụmịhe dijitalụ ndị dị mma na anya ma rụọ ọrụ nke ọma. A na-ejikọ m nhazi, mmepe, na atụmatụ iji nyere ndị ụlọ ọrụ aka ịpụta ìhè ma too n'ịntanetị.",
      bio2: "Ebumnobi m bụ iwu ahụmịhe dijitalụ ndị na-arụ ọrụ ma dịkwa mfe ịlụ ọgụ ma nwee mmetụta dị ukwuu—na-ewe echiche ndị mmadụ n'ụlọ site na teknụzụ ọhụrụ, nhazi dị mfe, yana ngwọta na-elekwasị anya na ndị ọbịa nke na-eto eto ma na-akpali akpali.",
      whatIDo: "Ihe M Na-arụ",
      services: {
        web: {
          title: "Mmepụta Weebụ",
          desc: "Weebụsaịtị ọhụrụ, na-azaghachi azaghachi nwere ọrụ azụ maazụ dị mma na njikọ API.",
        },
        mobile: {
          title: "Nkwalite SEO",
          desc: "Ịkwalite ọhụụ nchọta, ọkwa, na ọnọdụ ojii sitere n'ụzọ ọbụnọ.",
        },
        api: {
          title: "Nhazi UI/UX",
          desc: "Ihu dị ọcha, na-elekwasị anya na onye ojiji, nke emere iji nye ahụmịhe dị nro ma na-akpali akpali.",
        },
        ui: {
          title: "Njikwa Mgbasa Ozi",
          desc: "Imepụta, ijikwa, ma ito ọnọdụ ụlọ ọrụ n'elu ikpo okwu mgbasa ozi iji bulie mkpakọrịta na nso.",
        },
      },
      testimonials: "Ihe Ndị Ọzọ Kwuru",
    },
    resume: {
      title: "Ihe Ọ Mụtara",
      education: "Agụmakwụkwọ",
      experience: "Ahụmịhe",
      skills: "Nka M",
      edu: [
        {
          school: "Mbara Ozioma College of Technology (MOCTECH), Imo State",
          period: "2020 — 2022",
          detail: "N.D Injinia Sọftụwia Kọmputa | Upper Credit",
        },
        {
          school: "Aptech Computer Education, Owerri",
          period: "2023",
          detail: "Mmepe Weebụsaịtị | Credit",
        },
      ],
      exp: [
        {
          role: "Injinia Sọftụwia & Onye Njikwa Mmemme",
          period: "2024 — Ugbu a",
          detail: "Finta Tech, Owerri, Imo State",
        },
        {
          role: "Onye Njikwa Mgbasa Ozi, Onye Dezie Vidiyo & Onye Njikwa Weebụsaịtị",
          period: "2025 — Ugbu a",
          detail: "C & C Bespoke Fashion, Maryland, USA (Ọrụ n'ụlọ).",
        },
      ],
    },
    portfolio: {
      title: "Ọrụ M",
      filter: {
        all: "Niile",
        web: "Nhazi Weebụ",
        apps: "Ngwa",
        dev: "Mmepụta Weebụ",
      },
      projects: [
        { title: "ShopEase | Ọnụ Ahịa", category: "web", tag: "Mmepụta Weebụ" },
        { title: "TaskFlow | Njikwa Ọrụ", category: "apps", tag: "Ngwa" },
        { title: "Quickchat | Mkparịta Ụka", category: "dev", tag: "Mmepụta Weebụ" },
        { title: "BlogSpace | Ọdịnaya", category: "dev", tag: "Mmepụta Weebụ" },
        { title: "PrepAI | Onye Inyeaka", category: "apps", tag: "Ngwa" },
        { title: "FinTrack | Ọnọdụ Ego", category: "web", tag: "Nhazi Weebụ" },
      ],
    },
    blog: {
      title: "Blọọgụ",
      posts: [
        {
          title: "Iwu API dị elu na Next.js",
          date: "Maa 12, 2025",
          category: "Mmepụta",
          excerpt: "Otú m si edozi ụzọ API buru ibu na Next.js App Router.",
        },
        {
          title: "Isi Framer Motion",
          date: "Feb 5, 2025",
          category: "Nhazi",
          excerpt: "Ụkpụrụ mmegharị dị elu ga-ebuli UI gị.",
        },
        {
          title: "Ụzọ Kacha Mma TypeScript na 2025",
          date: "Jan 20, 2025",
          category: "Injinia",
          excerpt: "Ụkpụrụ nchekwa ụdị onye ọkachamara kwesịrị ịma.",
        },
      ],
    },
    contact: {
      title: "Kpọtụrụ M",
      subtitle: "Kpọtụrụ M",
      reachOut: "Ị nwere ọrụ n'echiche ma ọ bụ ịchọ mmekorita? Achọrọ m ịnụ site n'aka gị. Zitere m ozi ma m ga-azaghachi gị n'ime awa iri abụọ na anọ.",
      namePlaceholder: "Aha Gị",
      emailPlaceholder: "Adreesị Ozi-Eletron",
      messagePlaceholder: "Ozi Gị",
      send: "Zipu Ozi",
      email: "Ozi-Eletron",
      phone: "Ekwentị",
      location: "Ebe",
      emailValue: "giftdyk10@gmail.com",
      phoneValue: "+234 9076707294",
      locationValue: "Naịjirịa",
    },
  },

  fr: {
    nav: {
      about: "À Propos",
      resume: "CV",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      name: "Dikeocha Gift",
      role: "Ingénieur Logiciel",
      hireMe: "Engagez-Moi",
      showContacts: "Voir Contacts",
      downloadCV: "Télécharger CV",
    },
    about: {
      title: "À Propos de Moi",
      bio1: "Je suis Ingénieur Logiciel, Designer UI/UX & Gestionnaire de Réseaux Sociaux. Je crée des sites web modernes et réactifs ainsi que des expériences digitales à la fois visuellement attrayantes et hautement fonctionnelles. Je mélange design, développement et stratégie pour aider les marques à se démarquer et à croître en ligne.",
      bio2: "Ma mission est de construire des expériences numériques non seulement fonctionnelles, mais aussi visuellement percutantes et stratégiquement impactantes — donnant vie aux idées grâce aux technologies modernes, au design intuitif et à des solutions orientées audience qui évoluent et engagent.",
      whatIDo: "Ce Que Je Fais",
      services: {
        web: {
          title: "Développement Web",
          desc: "Sites web modernes et réactifs avec des fonctionnalités backend fluides et des intégrations API.",
        },
        mobile: {
          title: "Optimisation SEO",
          desc: "Amélioration de la visibilité dans les moteurs de recherche, des classements et du trafic organique.",
        },
        api: {
          title: "Design UI/UX",
          desc: "Interfaces épurées et centrées sur l'utilisateur, conçues pour offrir des expériences fluides et engageantes.",
        },
        ui: {
          title: "Gestion des Réseaux Sociaux",
          desc: "Créer, gérer et développer la présence d'une marque sur les plateformes sociales pour booster l'engagement et la portée.",
        },
      },
      testimonials: "Témoignages",
    },
    resume: {
      title: "Curriculum Vitae",
      education: "Formation",
      experience: "Expérience",
      skills: "Mes Compétences",
      edu: [
        {
          school: "Mbara Ozioma College of Technology (MOCTECH), Imo State",
          period: "2020 — 2022",
          detail: "Génie Logiciel Informatique | Mention Bien",
        },
        {
          school: "Aptech Computer Education, Owerri",
          period: "2023",
          detail: "Développement de Sites Web | Mention",
        },
      ],
      exp: [
        {
          role: "Ingénieur Logiciel & Responsable de Programme",
          period: "2024 — Présent",
          detail: "Finta Tech, Owerri, Imo State",
        },
        {
          role: "Gestionnaire des Réseaux Sociaux, Monteur Vidéo & Gestionnaire de Site Web",
          period: "2025 — Présent",
          detail: "C & C Bespoke Fashion, Maryland, USA (Télétravail).",
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      filter: {
        all: "Tout",
        web: "Design Web",
        apps: "Applications",
        dev: "Développement Web",
      },
      projects: [
        { title: "ShopEase | Plateforme E-Commerce", category: "web", tag: "Développement Web" },
        { title: "TaskFlow | Gestion des Tâches", category: "apps", tag: "Applications" },
        { title: "Quickchat | Chat en Temps Réel", category: "dev", tag: "Développement Web" },
        { title: "BlogSpace | Plateforme d'Articles", category: "dev", tag: "Développement Web" },
        { title: "PrepAI | Agent d'Entretien", category: "apps", tag: "Applications" },
        { title: "FinTrack | Tableau de Bord Financier", category: "web", tag: "Design Web" },
      ],
    },
    blog: {
      title: "Blog",
      posts: [
        {
          title: "Construire des APIs Évolutives avec Next.js",
          date: "12 Mar 2025",
          category: "Développement",
          excerpt: "Comment je structure les routes API à grande échelle.",
        },
        {
          title: "Maîtriser Framer Motion",
          date: "5 Fév 2025",
          category: "Design",
          excerpt: "Patterns d'animation avancés pour élever votre UI.",
        },
        {
          title: "Meilleures Pratiques TypeScript en 2025",
          date: "20 Jan 2025",
          category: "Ingénierie",
          excerpt: "Patterns type-safe que tout développeur senior doit connaître.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Contactez-Moi",
      reachOut: "Vous avez un projet en tête ou souhaitez collaborer? Je serais ravi d'avoir de vos nouvelles. Envoyez-moi un message et je vous répondrai dans les 24 heures.",
      namePlaceholder: "Nom Complet",
      emailPlaceholder: "Adresse E-mail",
      messagePlaceholder: "Votre Message",
      send: "Envoyer le Message",
      email: "E-mail",
      phone: "Téléphone",
      location: "Localisation",
      emailValue: "giftdyk10@gmail.com",
      phoneValue: "+234 9076707294",
      locationValue: "Nigeria",
    },
  },
} as const;