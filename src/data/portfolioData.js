export const portfolioData = {
  personal: {
    name: "Farras Fadhil Hassan",
    shortName: "Fadhil",
    tagline: "Software Engineering Technology Student | Full-Stack Web & Mobile Developer",
    bio: "Software Engineering Technology student at Politeknik Negeri Lampung specializing in modern web and native mobile application engineering. Passionate about solving complex challenges with clean code and robust software architectures.",
    location: "Bandar Lampung, Indonesia",
    status: {
      available: true,
      text: "Available for Internships & Engineering Collaboration",
    },
    contact: {
      github: "https://github.com/raztven",
      githubUsername: "raztven",
      email: "farrasfadhil.dev@gmail.com",
      linkedin: "https://www.linkedin.com/in/farras-fadhil-hassan-416a83441",
      whatsapp: "https://wa.me/6281234567890",
    },
    stats: [
      { label: "Projects Delivered", value: "6+" },
      { label: "National Certification", value: "BNSP RPL" },
      { label: "Institution", value: "Polinela" },
      { label: "Class Year", value: "2026" }
    ]
  },

  about: {
    story: [
      "My journey into software engineering began at SMK Negeri 3 Metro majoring in Software Engineering (RPL), where I established core foundations in programming, algorithmic logic, and relational database systems.",
      "I am currently pursuing a Bachelor of Applied Science (D4) in Software Engineering Technology at Politeknik Negeri Lampung (Class of 2026). I combine theoretical computing principles with real-world industry practices across modern frontends, high-performance backends, smart IoT architectures, and native Android development.",
      "For me, software engineering is not merely typing instructions for a machine; it is the craft of solving tangible human and industrial problems with high efficiency, reliability, and precision."
    ],
    education: [
      {
        institution: "Politeknik Negeri Lampung",
        degree: "Bachelor of Applied Science (D4) in Software Engineering Technology",
        period: "2026 - Present",
        badge: "Higher Education",
        description: "Specializing in large-scale software engineering, distributed systems, cloud & IoT architectures, and machine learning integrations.",
        highlight: "Class of 2026"
      },
      {
        institution: "SMK Negeri 3 Metro",
        degree: "Vocational Diploma in Software Engineering (RPL)",
        period: "Graduated",
        badge: "Secondary Vocational",
        description: "Mastered object-oriented programming fundamentals, relational database design, and full-cycle web and desktop application development.",
        highlight: "Strong SE Foundations"
      }
    ],
    interests: [
      {
        title: "Equity Markets & Valuation",
        category: "Fintech & Investing",
        icon: "TrendingUp",
        description: "Analyzing domestic and global equity dynamics, capital flow patterns, fundamental corporate metrics, and systematic risk management."
      },
      {
        title: "Coffee Science & Calibration",
        category: "Sensory & Science",
        icon: "Coffee",
        description: "Exploring specialty manual brew methods, burr grinder particle distribution, extraction yield dynamics, and coffee shop COGS calculation."
      },
      {
        title: "Physical Conditioning & Fitness",
        category: "Discipline & Health",
        icon: "Dumbbell",
        description: "Disciplined progressive overload strength training and active lifestyle routines to sustain sharp cognitive focus and engineering endurance."
      },
      {
        title: "Generative AI & Prompt Engineering",
        category: "Artificial Intelligence",
        icon: "Sparkles",
        description: "Experimenting with diffusion models, latent space rendering, and structured prompt engineering to streamline digital concept prototyping."
      },
      {
        title: "Industrial & Footwear Design",
        category: "Functional Aesthetics",
        icon: "Footprints",
        description: "Appreciation for modern industrial product design, ergonomic silhouettes, functional streetwear, and performance lifestyle gear."
      }
    ]
  },

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        description: "Building responsive, reactive, and accessible user interfaces with modern toolchains.",
        skills: [
          { name: "Vue.js", detail: "Vue 3, Composition API, Pinia, Vue Router", level: "Advanced", badge: "Primary" },
          { name: "React.js", detail: "Component Architecture, Hooks, State Lifecycle", level: "Intermediate" },
          { name: "JavaScript", detail: "Modern ES6+, Async/Await, DOM Manipulation", level: "Advanced" },
          { name: "Tailwind CSS", detail: "v3 & v4 Utility-first Architecture", level: "Advanced", badge: "Primary" },
          { name: "Bootstrap 5", detail: "Rapid Responsive UI Layouts & Grids", level: "Advanced" }
        ]
      },
      {
        id: "backend",
        name: "Backend & Database",
        description: "Engineering resilient RESTful services, data pipelines, and scalable database schemas.",
        skills: [
          { name: "Laravel", detail: "MVC Architecture, Eloquent ORM, RESTful API", level: "Advanced", badge: "Primary" },
          { name: "PHP", detail: "Modern PHP 8+, Object-Oriented Programming, PDO", level: "Advanced" },
          { name: "Python", detail: "Automation Scripting, Data Parsing, Backend Tools", level: "Intermediate" },
          { name: "C++", detail: "Algorithmic Logic & Memory Management Basics", level: "Foundational" },
          { name: "Express.js", detail: "Node.js REST Services, Routing & Middleware", level: "Intermediate" },
          { name: "MySQL & MariaDB", detail: "Schema Architecture, Indexing, Complex Queries", level: "Advanced" },
          { name: "Supabase", detail: "PostgreSQL, Realtime DB, Auth & Storage", level: "Advanced", badge: "Primary" }
        ]
      },
      {
        id: "mobile",
        name: "Mobile Development",
        description: "Developing native Android applications utilizing modern declarative UI paradigms.",
        skills: [
          { name: "Kotlin", detail: "Coroutines, StateFlow, Modern Kotlin Idioms", level: "Intermediate", badge: "Primary" },
          { name: "Jetpack Compose", detail: "Declarative UI, State Hoisting, Material 3", level: "Intermediate", badge: "Primary" },
          { name: "Android SDK", detail: "Lifecycle Architecture, Room Database, Navigation", level: "Intermediate" }
        ]
      },
      {
        id: "tools",
        name: "Tools & System Modeling",
        description: "Daily development workflows, version control protocols, and software design modeling.",
        skills: [
          { name: "Git & GitHub", detail: "Branching Strategies, Collaboration, CI/CD", level: "Advanced" },
          { name: "VS Code", detail: "Optimized Toolchains & Custom Debugging Environments", level: "Advanced" },
          { name: "Draw.io", detail: "UML Modeling: Use Case, Class, Activity, Sequence", level: "Advanced" },
          { name: "Flowgorithm", detail: "Algorithmic Flowchart Structure & Logic Tracing", level: "Advanced" },
          { name: "Laragon & XAMPP", detail: "Local Server Environments & Stack Provisioning", level: "Advanced" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "ecoquest",
      title: "EcoQuest",
      subtitle: "Gamified Environmental Action Web Platform",
      category: "Web Application",
      featured: true,
      competition: "International Innovation 4 Force Batch II 2026",
      subtheme: "Green Tech & Sustainable Future",
      summary: "An interactive gamified web application built to inspire tangible environmental actions through daily missions, real-time leaderboards, and a verified rewards ecosystem.",
      tags: ["Vue 3", "Vite", "Tailwind CSS", "Supabase", "Express.js", "Vercel"],
      demoUrl: "https://ecoquest-delta.vercel.app/",
      repoUrl: "https://github.com/raztven",
      colorGradient: "from-emerald-500 to-teal-700",
      details: {
        problem: "Environmental sustainability often feels abstract to youth. Without engaging feedback loops or measurable community incentives, sustaining daily eco-conscious habits remains challenging.",
        role: "Lead Full-Stack Web Developer & UI Designer. Spearheaded frontend development, reactive state modeling, Supabase real-time integration, and cloud deployment.",
        solution: "Engineered a gamified loop (leveling, streak multipliers, green impact points) synchronized in real-time via Supabase PostgreSQL. Leveraged Vue 3 Composition API for responsive rendering and Tailwind CSS for a sharp, accessible interface.",
        techStack: ["Vue 3 (Composition API)", "Vite", "Tailwind CSS v4", "Supabase Realtime & Auth", "Express.js", "Vercel"],
        highlights: [
          "Dynamic quest engine with multi-step action verification",
          "Real-time websocket competitive leaderboard across active users",
          "Automated carbon footprint reduction estimator based on completed actions",
          "Lightweight, mobile-first responsive architecture"
        ],
        results: "Officially registered and recognized as a participating project at the International Innovation 4 Force Batch II 2026 under the Green Tech & Sustainable Future category."
      }
    },
    {
      id: "fertiflow",
      title: "FertiFlow",
      subtitle: "Smart Fertigation IoT & AI System for Chili Agriculture",
      category: "IoT & AgriTech",
      featured: true,
      competition: "",
      badge: "Project-Based Learning",
      subtheme: "Smart Agriculture & IoT Project-Based Learning",
      summary: "Smart automated fertigation platform powered by IoT sensors and AI-driven dosage algorithms for precision chili farming — engineered through Project-Based Learning (PJBL) with intensive field requirements analysis and comprehensive UML architecture blueprints.",
      tags: ["IoT", "AI", "UML", "Python", "MQTT", "System Analysis"],
      demoUrl: "",
      repoUrl: "",
      colorGradient: "from-amber-500 to-red-600",
      details: {
        problem: "Chili crop farmers frequently experience volatile yields due to uncalibrated watering and manual fertilization methods, leading to excessive chemical costs and wasted irrigation water.",
        role: "System Analyst & UML Architect (Project-Based Learning Initiative). Conducted in-depth field observations and farmer interviews, defined software requirements specifications (SRS), and engineered complete UML architecture diagrams.",
        solution: "Designed an end-to-end system blueprint integrating soil sensor telemetry (moisture, pH, EC) with automated valve actuators via MQTT protocol, combined with predictive AI nutrient delivery models.",
        techStack: ["IoT Sensors & Microcontrollers", "AI Dosing Logic", "UML Modeling (Use Case, Class, Activity)", "MQTT Protocol"],
        highlights: [
          "Direct on-site field interviews and workflow observation with local agricultural growers",
          "Comprehensive UML structural and behavioral diagrams (Use Case, Activity, Sequence)",
          "Formulated weather-adaptive dosing algorithms tailored to chili crop lifecycles",
          "Structured standardized Software Requirements Specification (SRS) documentation"
        ],
        results: "Produced a production-ready architectural blueprint and validated functional specifications ready for hardware prototyping and agricultural field trials."
      }
    },
    {
      id: "keuangan-pribadi",
      title: "FinTrack",
      subtitle: "Native Android Personal Finance & Expense Manager",
      category: "Mobile Application",
      featured: true,
      competition: "",
      subtheme: "Personal Finance",
      summary: "A 100% native Android application built to streamline daily income/expense tracking, monthly budget planning, and savings goals with modern declarative UI.",
      tags: ["Kotlin", "Jetpack Compose", "Room Database", "Material 3"],
      demoUrl: "",
      repoUrl: "https://github.com/raztven",
      colorGradient: "from-blue-600 to-indigo-800",
      details: {
        problem: "Many existing financial apps suffer from clunky navigation, intrusive full-screen ads, and mandatory cloud logins that hinder swift daily expense logging.",
        role: "Android Developer. Architected the application following Clean Architecture principles and crafted declarative UI components using Jetpack Compose.",
        solution: "Engineered an offline-first native Android app using Kotlin and Jetpack Compose with local encrypted persistence via Room Database, instant category visualizations, and a friction-free 3-tap transaction input workflow.",
        techStack: ["Kotlin", "Jetpack Compose", "Room DB (SQLite)", "ViewModel & StateFlow", "Material Design 3"],
        highlights: [
          "Clean declarative UI in Jetpack Compose delivering smooth 60 FPS transitions",
          "Zero network dependencies with instantaneous local SQLite persistence",
          "Visual breakdown of monthly expense allocations by category",
          "Proactive budget tracking with customizable category warning thresholds"
        ],
        results: "Delivered a battery-efficient, lightweight, and distraction-free daily expense management application."
      }
    },
    {
      id: "absensiswa",
      title: "AbsenSiswa",
      subtitle: "Digital School Attendance & Academic Management System",
      category: "Web Application",
      featured: false,
      summary: "A web-based attendance tracking and student management platform featuring automated monthly summaries and role-based portals for educational institutions.",
      tags: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "REST API"],
      demoUrl: "",
      repoUrl: "https://github.com/raztven",
      colorGradient: "from-sky-500 to-blue-700",
      details: {
        problem: "Paper-based roll call systems are prone to tampering, require tedious manual consolidation at the end of each term, and prevent parents from tracking daily student presence in real time.",
        role: "Full-Stack Backend Developer. Designed the relational database schema, implemented role-based access control, and built automated export pipelines.",
        solution: "Developed an intuitive Laravel web application featuring role segregation (Administrators, Subject Teachers, Homeroom Teachers), structured attendance tracking, and instant report generation.",
        techStack: ["Laravel", "PHP 8", "MySQL", "Bootstrap 5", "Blade Templating"],
        highlights: [
          "Granular role-based permissions (Administrator, Teacher, Homeroom Advisor)",
          "Automated attendance aggregation across classes, dates, and semesters",
          "One-click spreadsheet (.xlsx) and PDF report generation",
          "Multi-status attendance tracking (Present, Sick, Excused, Absent)"
        ],
        results: "Reduced monthly attendance aggregation time from several hours to a single click with verified 100% data fidelity."
      }
    },
    {
      id: "v2peternak",
      title: "V2peternak",
      subtitle: "Livestock Management & Inventory Tracking Platform",
      category: "Web Platform",
      featured: false,
      summary: "An integrated web management platform for tracking livestock populations, vaccination and feeding schedules, and herd growth projections.",
      tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "REST API"],
      demoUrl: "",
      repoUrl: "https://github.com/raztven",
      colorGradient: "from-emerald-600 to-green-800",
      details: {
        problem: "Independent livestock breeders struggle with fragmented paper health logs, uncoordinated vaccination timelines, and untracked inventory turnover, leading to preventable livestock losses.",
        role: "Full-Stack Web Developer. Designed animal record management modules and interactive livestock health analytics dashboards.",
        solution: "Engineered a centralized Laravel platform with intuitive health timelines, proactive vaccination reminders, and feed conversion ratio (FCR) calculators.",
        techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
        highlights: [
          "Lineage tracing and biometric record logging for individual livestock",
          "Comprehensive medical and vaccination administration logs",
          "Visual health status and herd population monitoring dashboards",
          "Integrated sales and commercial stock transfer tracking"
        ],
        results: "Empowered agricultural breeders to digitize hundreds of livestock records and maintain punctuality in veterinary vaccination schedules."
      }
    },
    {
      id: "ecommerce-hardware",
      title: "RigCraft Store",
      subtitle: "Computer Hardware & High-Performance Peripherals Store",
      category: "E-Commerce",
      featured: false,
      summary: "An e-commerce storefront for custom PC components, gaming hardware, and professional displays featuring an integrated secure checkout system.",
      tags: ["WordPress", "WooCommerce", "PHP", "Custom CSS"],
      demoUrl: "",
      repoUrl: "https://github.com/raztven",
      colorGradient: "from-purple-600 to-slate-900",
      details: {
        problem: "PC building enthusiasts and digital creators require hardware storefronts with precise technical specification filtering and reliable payment flows.",
        role: "Web Developer & Store Integrator. Customized theme architectures, configured component attribute hierarchies, and optimized the checkout pipeline.",
        solution: "Built a robust WooCommerce store featuring multi-attribute parametric filters (CPU socket, chipset, monitor refresh rate), automatic shipping calculators, and payment gateway integrations.",
        techStack: ["WordPress", "WooCommerce", "PHP", "Custom Responsive CSS"],
        highlights: [
          "Multi-parameter technical specification filtering system",
          "High-resolution interactive product gallery with responsive layout",
          "Frictionless checkout experience with automated shipping computation",
          "Real-time stock availability and inventory replenishment alerts"
        ],
        results: "Successfully deployed a fully operational hardware store featuring 50+ component variants ready for live transactions."
      }
    }
  ],

  certifications: [
    {
      id: "bnsp-rpl",
      title: "BNSP National Competency Certification in Software Engineering",
      issuer: "National Professional Certification Agency (BNSP) Republic of Indonesia",
      date: "July 2026",
      status: "National Competency Assessment Passed",
      badge: "National Certification",
      icon: "ShieldCheck",
      color: "emerald",
      description: "Official Indonesian national competency certification standard in Software Engineering, verifying mastery in software architecture design, clean structured coding, systematic debugging, and unit/integration testing protocols.",
      skills: ["Software Engineering Standards", "Clean Code & Testing", "System Architecture"]
    },
    {
      id: "webinar-bug",
      title: "Live Production Bug Hunting & Profiling Workshop",
      issuer: "Tangerang Selatan Institute of Technology & .id Academy",
      date: "July 2025",
      status: "Certificate of Completion & Active Participation",
      badge: "Technical & Debugging",
      icon: "Bug",
      color: "purple",
      description: "Intensive deep-dive into live production bugs, failure isolation techniques, runtime performance profiling, and defensive coding best practices.",
      skills: ["Bug Fixing", "Profiling", "Code Optimization"]
    }
  ],

  journals: [
    {
      id: "jurnal-1",
      title: "Liquidity Analysis of IDX & Technology Sector Equity Valuation",
      category: "Trading & Markets",
      date: "October 2026",
      readTime: "5 min read",
      summary: "Observations on institutional capital flows (domestic vs foreign) in Indonesian capital markets and the macroeconomic impact of interest rate cycles on tech valuations.",
      tag: "Trading"
    },
    {
      id: "jurnal-2",
      title: "Coffee Extraction Science: Finding the Grinder Calibration Sweet Spot",
      category: "Coffee Notes",
      date: "September 2026",
      readTime: "4 min read",
      summary: "Exploring particle size distributions (fines vs boulders), water temperature effects on solubility rates, and COGS modeling for commercial specialty cafes.",
      tag: "Barista Notes"
    },
    {
      id: "jurnal-3",
      title: "Architecting Real-Time Gamification Loops with Vue 3 & Supabase",
      category: "Dev Notes",
      date: "August 2026",
      readTime: "6 min read",
      summary: "Engineering reflections from building EcoQuest: orchestrating client-side reactive state machines and managing Supabase real-time websocket channels for zero-latency leaderboards.",
      tag: "Software Engineering"
    }
  ]
};
