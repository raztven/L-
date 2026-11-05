export const portfolioData = {
  personal: {
    name: "Farras Fadhil Hassan",
    shortName: "Fadhil",
    callsign: "raztven",
    tagline: "Software Engineering Technology Student // Full-Stack Web & Native Android Engineer",
    bio: "Undergraduate student in Software Engineering Technology (D4) at Lampung State Polytechnic (Polinela, Class of 2026) and graduate of SMK Negeri 3 Metro (Software Engineering). Proficient in modern full-stack web engineering (Laravel, Supabase, Vue, Tailwind) and native Android mobile development (Kotlin, Jetpack Compose).",
    location: "Bandar Lampung, Indonesia",
    status: {
      available: true,
      text: "OPEN FOR INQUIRIES // READY FOR COLLABORATION",
      server: "ONLINE",
      uptime: "99.98%"
    },
    contact: {
      github: "https://github.com/raztven",
      githubUsername: "raztven",
      email: "farrasfadhil.dev@gmail.com",
      linkedin: "https://www.linkedin.com/in/farras-fadhil-hassan-416a83441",
      whatsapp: "https://wa.me/6281234567890",
    },
    stats: [
      { id: "location", label: "Location", value: "Bandar Lampung, ID", desc: "Coordinates: -5.3971, 105.2668" },
      { id: "institution", label: "Institution", value: "Polinela (TRPL '26)", desc: "B.App.Sc in Software Engineering" },
      { id: "credential", label: "Credential", value: "BNSP Certified RPL", desc: "National Professional Standard" },
      { id: "delivered", label: "Delivered", value: "6+", labelSuffix: "Production Projects", desc: "Web, Mobile & Smart IoT" }
    ]
  },

  about: {
    story: [
      "My software engineering journey began at SMK Negeri 3 Metro majoring in Software Engineering (RPL), where I built solid foundations in pure algorithmic logic, relational database architecture, and object-oriented design.",
      "Currently, I am pursuing my Bachelor of Applied Science (D4) in Software Engineering Technology at Lampung State Polytechnic (Polinela, Class of 2026). I bridge distributed computing principles with modern industry practices: from high-performance reactive interfaces and resilient backends to smart IoT automation and declarative native mobile systems.",
      "To me, software engineering is the craft of solving real-world challenges through clean code, uncompromising reliability, and architectures built to thrive in production."
    ],
    education: [
      {
        institution: "Lampung State Polytechnic (Polinela)",
        degree: "B.App.Sc in Software Engineering Technology (TRPL)",
        period: "2026 - Present",
        badge: "Higher Education",
        description: "Specializing in large-scale system engineering, distributed computing, cloud & IoT integration, and machine learning architectures.",
        highlight: "Class of 2026"
      },
      {
        institution: "SMK Negeri 3 Metro",
        degree: "Vocational Diploma in Software Engineering (RPL)",
        period: "Graduated",
        badge: "Vocational Secondary",
        description: "Mastery of structured programming logic, relational SQL database modeling, and end-to-end software development lifecycles.",
        highlight: "Solid Software Foundation"
      }
    ],
    interests: [
      {
        title: "Stock Trading & Market Analysis",
        category: "FINTECH & QUANT",
        icon: "TrendingUp",
        description: "Analyzing institutional market liquidity flows (IDX & US Equities), fundamental business valuation, and disciplined risk-adjusted portfolio management."
      },
      {
        title: "Coffee Science & Espresso Calibration",
        category: "EXTRACTION SENSORY",
        icon: "Coffee",
        description: "Precision espresso extraction, micron burr grinder particle distribution, TDS solution ratios, and cost-of-goods (COGS) margin optimization for specialty coffee."
      },
      {
        title: "Fitness Discipline & Strength Training",
        category: "ENDURANCE PROTOCOL",
        icon: "Dumbbell",
        description: "Structured progressive overload strength training to sustain mental focus, stamina, and cognitive resilience required for demanding engineering tasks."
      },
      {
        title: "Sneakers & Functional Aesthetics",
        category: "FUNCTIONAL AESTHETICS",
        icon: "Footprints",
        description: "Appreciating modern industrial silhouette design, ergonomic midsole cushioning technology, and functional streetwear cultures blending performance with style."
      }
    ]
  },

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        tag: "01_FRONTEND",
        description: "Building reactive, high-performance, and accessible web interfaces with modern toolchains.",
        skills: [
          { name: "Vue.js", detail: "Vue 3, Composition API, Pinia, Vue Router", level: "Proficient", badge: "Primary" },
          { name: "React.js", detail: "Component Architecture & Hooks Lifecycle", level: "Intermediate" },
          { name: "JavaScript", detail: "Modern ES6+, Async/Await, DOM Manipulation", level: "Proficient" },
          { name: "Tailwind CSS", detail: "v3 & v4 Utility-first Architecture", level: "Proficient", badge: "Primary" },
          { name: "Bootstrap 5", detail: "Rapid Responsive UI Prototyping & Grid", level: "Proficient" }
        ]
      },
      {
        id: "backend",
        name: "Backend & Database",
        tag: "02_BACKEND_DATABASE",
        description: "Architecting robust APIs, high-throughput business logic, and relational data schemas.",
        skills: [
          { name: "Laravel", detail: "MVC, Eloquent ORM, RESTful API Architecture", level: "Proficient", badge: "Primary" },
          { name: "PHP", detail: "Modern PHP 8+, Object-Oriented Programming, PDO", level: "Proficient" },
          { name: "Python", detail: "Automation Scripting, Data Parsing, Backend Tools", level: "Intermediate" },
          { name: "C++", detail: "Algorithmic Logic & Memory Fundamentals", level: "Basic" },
          { name: "Express.js", detail: "Node.js REST Services, Routing & Middleware", level: "Intermediate" },
          { name: "MySQL & MariaDB", detail: "Schema Architecture, Indexing, Complex Queries", level: "Proficient" },
          { name: "Supabase", detail: "PostgreSQL, Realtime DB, Auth & Storage", level: "Proficient", badge: "Primary" }
        ]
      },
      {
        id: "mobile",
        name: "Mobile Development",
        tag: "03_MOBILE_NATIVE",
        description: "Native Android mobile development utilizing modern declarative paradigms.",
        skills: [
          { name: "Kotlin", detail: "Coroutines, StateFlow, Modern Kotlin Idioms", level: "Intermediate", badge: "Primary" },
          { name: "Jetpack Compose", detail: "Declarative UI, State Hoisting, Material 3", level: "Intermediate", badge: "Primary" },
          { name: "Android SDK", detail: "Lifecycle Architecture, Room Database, Navigation", level: "Intermediate" }
        ]
      },
      {
        id: "tools",
        name: "Tools & Architecture",
        tag: "04_TOOLS_ARCHITECTURE",
        description: "Daily developer workflow, version control management, and system blueprint modeling.",
        skills: [
          { name: "Git & GitHub", detail: "Branching Strategies, CI/CD, Team Collaboration", level: "Proficient" },
          { name: "VS Code", detail: "Custom Extension Ecosystem & Debugging Environment", level: "Proficient" },
          { name: "Draw.io", detail: "UML Modeling: Use Case, Class, Activity, Sequence", level: "Proficient" },
          { name: "Flowgorithm", detail: "Algorithmic Flowchart Validation & Trace", level: "Proficient" },
          { name: "Laragon & XAMPP", detail: "Local Server Environments & Stack Provisioning", level: "Proficient" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "ecoquest",
      number: "01",
      title: "EcoQuest",
      subtitle: "Gamified Web Application for Environmental Action",
      category: "Web Application",
      categoryFilter: "web",
      featured: true,
      competition: "International Innovation 4 Force Batch II 2026",
      subtheme: "Green Tech & Sustainable Future",
      badge: "COMPETITION 2026",
      summary: "An interactive gamified web application driving actionable sustainability efforts through daily challenges, real-time leaderboards, and an emission-reduction reward ecosystem.",
      tags: ["Vue.js", "Vite", "Tailwind CSS", "Supabase", "Express.js", "Vercel"],
      demoUrl: "https://ecoquest-delta.vercel.app/",
      repoUrl: "https://github.com/raztven",
      details: {
        problem: "Communities and youth frequently perceive the environmental crisis as an abstract problem, lacking tangible incentives, peer motivation, and immediate tracking to sustain daily eco-friendly habits.",
        role: "Lead Full-Stack Web Developer & UI Designer. Spearheaded reactive interface development, client state management, Supabase real-time database synchronization, and automated Vercel deployment pipelines.",
        solution: "Engineered a dynamic gamification loop (leveling, daily streaks, carbon offset credits) synchronized instantly via Supabase PostgreSQL. Leveraged Vue 3 Composition API for 60 FPS rendering and Tailwind CSS for a futuristic, mobile-first design.",
        techStack: ["Vue 3 (Composition API)", "Vite", "Tailwind CSS v4", "Supabase Realtime & Auth", "Express.js", "Vercel"],
        highlights: [
          "Dynamic quest engine with tiered environmental action verification",
          "Competitive real-time leaderboard powered by Supabase WebSockets",
          "Automated calculator estimating carbon footprint offset per completed action",
          "High-performance responsive mobile-first architecture"
        ],
        results: "Selected to represent green tech innovation at the International Innovation 4 Force Batch II 2026 under the Green Tech & Sustainable Future category."
      }
    },
    {
      id: "fertiflow",
      number: "02",
      title: "FertiFlow",
      subtitle: "Smart Fertigation IoT & AI System for Precision Chili Cultivation",
      category: "IoT & AgriTech",
      categoryFilter: "iot",
      featured: true,
      competition: "",
      badge: "PJBL ENGINEERING",
      subtheme: "Automated Chili Fertigation System Driven by IoT & AI",
      summary: "An intelligent automated fertigation platform powered by IoT sensors and AI dosing logic for precision chili farming — developed through Project-Based Learning (PJBL) with extensive field research and comprehensive UML system architecture.",
      tags: ["IoT", "AI", "UML", "Python", "MQTT", "System Analysis"],
      demoUrl: "",
      repoUrl: "",
      details: {
        problem: "Chili farmers face volatile crop yields and surging operational expenses due to manual irrigation and fertilizer distribution unaligned with fluctuating soil moisture and micro-climate parameters.",
        role: "System Analyst & UML Architect (Project-Based Learning). Conducted on-site interviews with chili farmers, drafted standard Software Requirements Specifications (SRS), and modeled complete architectural UML blueprints.",
        solution: "Designed a telemetry architecture capturing soil moisture, pH, and electrical conductivity connected to microcontroller actuator valves via MQTT, guided by an AI-driven nutrient dosage prediction algorithm.",
        techStack: ["IoT Sensor Telemetry", "AI Dosing Logic", "UML Modeling (Use Case, Activity, Sequence)", "MQTT Protocol"],
        highlights: [
          "Direct field observation and end-to-end farmer workflow mapping",
          "Comprehensive structural and behavioral UML documentation",
          "Adaptive nutrition delivery algorithm tailored to chili growth phases",
          "Standardized Software Requirements Specification (SRS) documentation"
        ],
        results: "Produced a production-ready system architecture blueprint and functional specifications ready for hardware assembly and experimental field testing."
      }
    },
    {
      id: "fintrack",
      number: "03",
      title: "FinTrack Android",
      subtitle: "Native Android Personal Finance Management App",
      category: "Mobile Application",
      categoryFilter: "mobile",
      featured: true,
      competition: "",
      badge: "NATIVE ANDROID",
      subtheme: "Personal Finance & Expense Architecture",
      summary: "A native Android application crafted to manage daily cash flow, budget limits, and savings goals with modern declarative UI paradigms and offline-first storage.",
      tags: ["Kotlin", "Jetpack Compose", "Room Database", "Material 3"],
      demoUrl: "",
      repoUrl: "https://github.com/raztven",
      details: {
        problem: "Most consumer budget trackers are bloated with convoluted entry flows, intrusive advertisements, and forced cloud sign-ins for basic daily bookkeeping.",
        role: "Android Developer. Architected the application following Clean Architecture principles and implemented the entire declarative user interface using Jetpack Compose.",
        solution: "Constructed a 100% native Android application with Kotlin and Jetpack Compose featuring an offline-first Room Database (SQLite), instant category allocation charts, and a friction-free 3-tap transaction entry flow.",
        techStack: ["Kotlin", "Jetpack Compose", "Room DB (SQLite)", "ViewModel & StateFlow", "Material Design 3"],
        highlights: [
          "Fluid declarative Jetpack Compose UI running at 60 FPS",
          "Self-contained local offline storage with zero network dependency",
          "Interactive category expenditure allocation charts",
          "Proactive budget threshold alerts and expense limits"
        ],
        results: "Achieved a lightweight, battery-efficient application delivering a focused, distraction-free personal finance tracking experience."
      }
    },
    {
      id: "absensiswa",
      number: "04",
      title: "AbsenSiswa",
      subtitle: "Digital Attendance Management & Academic Portal",
      category: "Web Application",
      categoryFilter: "web",
      featured: false,
      badge: "ACADEMIC SYSTEM",
      summary: "A web-based attendance management system featuring automated monthly reconciliation and multi-role portals for educational institutions.",
      tags: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "REST API"],
      demoUrl: "",
      repoUrl: "https://github.com/raztven",
      details: {
        problem: "Paper-based attendance tracking is prone to manual record tampering, consumes significant administrative time each month, and delays parental notifications.",
        role: "Full-Stack Backend Developer. Designed the relational database schema, role-based access control, and automated report generation engine.",
        solution: "Developed an administrative web portal using the Laravel framework with role-based authentication (Admin, Teachers, Students), structured attendance logging, and real-time status reporting.",
        techStack: ["Laravel", "PHP 8", "MySQL", "Bootstrap 5", "Blade Templating"],
        highlights: [
          "Multi-role access hierarchy (Administrators, Subject Teachers, Homeroom Teachers)",
          "Automated monthly attendance reconciliation per classroom and semester",
          "One-click report exports in spreadsheet (.xlsx) and PDF formats",
          "Structured multi-status validation (Present, Sick, Excused, Absent)"
        ],
        results: "Reduced monthly attendance reporting time from several hours to a single click with 100% data integrity."
      }
    },
    {
      id: "v2peternak",
      number: "05",
      title: "V2peternak",
      subtitle: "Livestock Inventory & Healthcare Monitoring Platform",
      category: "Web Platform",
      categoryFilter: "web",
      featured: false,
      badge: "AGRI INVENTORY",
      summary: "An integrated management platform for livestock population tracking, vaccination and feed schedules, and animal growth metrics.",
      tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "REST API"],
      demoUrl: "",
      repoUrl: "https://github.com/raztven",
      details: {
        problem: "Independent livestock farmers struggle with disorganized paper records for animal health histories, vaccination cycles, and inventory turnover, resulting in preventable livestock losses.",
        role: "Full-Stack Web Developer. Built the core livestock record management modules and analytical inventory dashboards.",
        solution: "Engineered a web application featuring visual animal health indicators, integrated vaccination reminder alerts, and feed conversion ratio (FCR) calculators.",
        techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
        highlights: [
          "Livestock pedigree and biometric record tracking",
          "Structured logs for scheduled feed and medical treatments",
          "Comprehensive population, weight distribution, and mortality dashboards",
          "Transaction ledger for livestock purchases and sales"
        ],
        results: "Enabled farmers to digitize hundreds of livestock records and dramatically improve adherence to scheduled veterinary treatments."
      }
    },
    {
      id: "rigcraft",
      number: "06",
      title: "RigCraft Store",
      subtitle: "E-Commerce Store for High-Performance PC Hardware & Displays",
      category: "E-Commerce",
      categoryFilter: "web",
      featured: false,
      badge: "E-COMMERCE",
      summary: "An e-commerce catalog and ordering platform for custom PC components, gaming rigs, and high-refresh-rate displays with integrated checkout.",
      tags: ["WordPress", "WooCommerce", "PHP", "Custom CSS"],
      demoUrl: "",
      repoUrl: "https://github.com/raztven",
      details: {
        problem: "PC enthusiasts and digital creators require deep technical specification filtering and transparent component compatibility checks before committing to high-value hardware purchases.",
        role: "Web Developer & Store Integrator. Customized store theme layouts, component attribute taxonomy, and automated checkout pipelines.",
        solution: "Constructed a WooCommerce-powered online storefront with multi-attribute specification filters (CPU sockets, chipsets, display refresh rates, form factors), automated shipping calculators, and payment gateway integration.",
        techStack: ["WordPress", "WooCommerce", "PHP", "Custom CSS Responsive"],
        highlights: [
          "Multi-attribute technical specification filter system",
          "Responsive catalog with high-resolution hardware imagery",
          "Streamlined checkout with automatic postage calculation",
          "Real-time product stock inventory management"
        ],
        results: "Delivered a fully functional e-commerce platform showcasing 50+ hardware configurations ready for customer orders."
      }
    }
  ],

  certifications: [
    {
      id: "bnsp-rpl",
      hash: "c0mm1t_bnsp74",
      title: "BNSP Certified Software Engineering Specialist",
      issuer: "National Professional Certification Board (BNSP) of Indonesia",
      date: "July 2026",
      status: "VERIFIED // PASSED NATIONAL ASSESSMENT",
      badge: "NATIONAL STANDARD",
      color: "cyan",
      description: "Nationally recognized professional certification in Software Engineering, demonstrating proficiency in software architecture design, structured clean code authoring, systematic debugging, and comprehensive system testing.",
      skills: ["Software Engineering Standards", "Clean Code & Testing", "System Architecture"]
    },
    {
      id: "webinar-bug",
      hash: "c0mm1t_bug992",
      title: "Live Production Bug Diagnosis & Resolution Workshop",
      issuer: "South Tangerang Institute of Technology & .id Academy",
      date: "July 2025",
      status: "COMPLETED // PARTICIPATION CREDENTIAL",
      badge: "TECHNICAL & DEBUGGING",
      color: "magenta",
      description: "Intensive technical deep-dive into resolving critical production bugs, fault isolation techniques, runtime performance profiling, and defensive programming best practices.",
      skills: ["Bug Fixing", "Profiling", "Code Optimization"]
    }
  ],

  journals: [
    {
      id: "jurnal-1",
      title: "IDX Liquidity Flows & Tech Sector Stock Valuation",
      category: "MARKET_INTELLIGENCE",
      date: "October 2026",
      readTime: "5 min read",
      summary: "Observational notes on domestic vs. foreign institutional capital flows in Indonesian equities and the impact of benchmark interest rates on technology multiples.",
      tag: "Trading"
    },
    {
      id: "jurnal-2",
      title: "Grinder Calibration Science: Finding the Espresso Sweet Spot",
      category: "SENSORY_CALIBRATION",
      date: "September 2026",
      readTime: "4 min read",
      summary: "Understanding burr particle distribution (fines vs. boulders), water temperature solubility dynamics, and COGS margin calculations for specialty coffee.",
      tag: "Barista Notes"
    },
    {
      id: "jurnal-3",
      title: "Architecting Real-Time Gamification with Vue 3 & Supabase",
      category: "SYSTEM_ARCHITECTURE",
      date: "August 2026",
      readTime: "6 min read",
      summary: "Technical reflections behind developing EcoQuest: reactive client-side state management and Supabase WebSocket channels for instantaneous leaderboard sync.",
      tag: "Software Engineering"
    }
  ]
};
