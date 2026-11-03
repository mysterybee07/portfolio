// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Biraj Pudasaini",
  role: "Backend Engineer",
  location: "Kathmandu, Nepal",
  email: "biraj2019pudasaini@gmail.com",
  github: "https://github.com/mysterybee07",
  githubHandle: "mysterybee07",
  linkedin: "https://www.linkedin.com/in/biraj-pudasaini-10b712251/",
  resume: "/Biraj_Pudasaini_CV.pdf",
  chess: { handle: "deadlypawn7", url: "https://www.chess.com/member/deadlypawn7" },
  current: { company: "Himalayan Vedic", since: "May 2025" },
};

// Skill-focused: what I can build, not where I built it.
export const capabilities = [
  { title: "Architecture", body: "Microservices and modular monoliths." },
  { title: "Clean code", body: "Clean Architecture, repository pattern and DI." },
  { title: "API design", body: "REST and WebSocket APIs with clear contracts." },
  { title: "Data", body: "Solid schemas, transactions and safe migrations." },
  { title: "Real-time", body: "Concurrent Go with goroutines and WebSockets." },
  { title: "Security", body: "JWT, OAuth 2.0, RBAC and vulnerability scans." },
  { title: "Integrations", body: "Payments, push, analytics and object storage." },
  { title: "DevOps", body: "Docker, CI/CD, Nginx and Linux." },
];

export const experience = [
  {
    role: "Backend Engineer",
    company: "Himalayan Vedic Pvt. Ltd.",
    place: "Kathmandu",
    period: "May 2025 — Present",
    current: true,
    points: [
      "Designed and built the Go backends of Nava Kundali (Mero Jyotish) and its western version, Himvega (Astroway), from scratch.",
      "Own features end to end across Go APIs, the website and admin panel, and the Flutter mobile app.",
      "Integrated eSewa, Khalti, Fonepay, ConnectIPS and in-app purchases; built microservices, real-time chat, video calls and push notifications.",
      "Deploy and run services on Linux VPS with Nginx reverse proxy, SSL, systemd and Git-based deployment.",
    ],
    stack: ["Go", "Gin", "PostgreSQL", "GORM", "WebSocket", "Flutter"],
  },
  {
    role: "Backend Development Intern",
    company: "Ideapreneur Nepal",
    place: "Lalitpur",
    period: "Oct 2024 — May 2025",
    points: [
      "Built and maintained REST APIs in Python (Django, DRF) and Go, backed by PostgreSQL.",
      "Shipped work on Creators Headquarters, the Restaurant Management System and MoneyMitra.",
      "Worked on Flaw Snap, an in-house platform for bug reporting, session recording and analytics.",
    ],
    stack: ["Go", "Django", "DRF", "PostgreSQL", "React"],
  },
  {
    role: "PHP / Laravel Developer",
    company: "CAB-Tech Software Development",
    place: "Nepal",
    period: "Sep 2023 — Aug 2024",
    points: [
      "Delivered Library and Student Management Systems with authentication, role-based access and validation, using modular MVC, Git and Jira.",
    ],
    stack: ["PHP", "Laravel", "MySQL"],
  },
];

export const featured = [
  {
    name: "Nava Kundali & Himvega",
    org: "Himalayan Vedic",
    kind: "Production · Built from scratch",
    link: "https://navakundali.com",
    linkLabel: "navakundali.com",
    summary:
      "An astrology platform for consultations, pooja bookings and products, plus Himvega, its western version. I designed and built both Go backends.",
    highlights: [
      "WebSocket service for one-to-one consultation chat: goroutines, channels, broadcasting and connection lifecycle.",
      "Transactional coupon redemption and refunds with row-level locking and coordinated token or stock changes.",
      "Booking-status state machine for astrologer appointments, with role-separated access.",
      "Kundali, matchmaking, patro, rashifal, catalogue, cart, orders and pooja-booking APIs.",
      "Data-quality fixes: duplicate-cleanup migrations, partial unique constraints and composite indexes.",
    ],
    stack: ["Go", "Gin", "PostgreSQL", "GORM", "WebSocket", "PostHog", "Cloudflare R2"],
    flow: ["Flutter / Web", "Gin API", "Payments", "PostgreSQL"],
  },
  {
    name: "Creators Headquarters",
    org: "Ideapreneur Nepal",
    kind: "Production",
    link: "https://creatorshqnepal.com",
    linkLabel: "creatorshqnepal.com",
    summary:
      "A platform where creators find collaborators, brands and campaigns, and book podcast and video studios.",
    highlights: [
      "Set up the Go modular-monolith backend and the React admin (moved from Next.js to a Vite static build).",
      "Studio booking: resource types, booking policies, entry passes, check-ins and member-code sequences.",
      "CI kept green with race-detector tests and govulncheck; idempotent VPS provisioning.",
    ],
    stack: ["Go", "pgx", "PostgreSQL", "Atlas", "React", "Vite", "CI/CD"],
  },
  {
    name: "Restaurant Management System",
    org: "Ideapreneur Nepal",
    kind: "Production",
    link: "https://hms.ideapreneurnepal.com.np",
    linkLabel: "hms.ideapreneurnepal.com.np",
    summary:
      "Multi-outlet restaurant operations for owners, managers, waiters and kitchen staff.",
    highlights: [
      "Order-to-kitchen routing and the billing workflow.",
      "Recipe-based stock deduction in transactions, with row-level locks and stock-movement records.",
      "Role-based access for four roles, and sales reports by item and category.",
    ],
    stack: ["Python", "Django", "PostgreSQL"],
  },
  {
    name: "SportsBee",
    org: "Personal project",
    kind: "Multi-tenant SaaS",
    link: "https://sportsbee.birajpudasaini.com.np",
    linkLabel: "sportsbee.birajpudasaini.com.np",
    summary:
      "Multi-tenant sports venue booking: venues, playable areas, formats, bookings and matches.",
    highlights: [
      "Booking and rescheduling transactions with overlap checks and format-capacity validation.",
      "Retry-safe payment completion under database locks.",
      "Venue-scoped operations with super-admin oversight.",
    ],
    stack: ["Go", "PostgreSQL", "React"],
  },
];

export const projects = [
  {
    name: "Procurement Management System",
    summary:
      "Requisitions, configurable multi-step approvals, EOI publishing, vendor submissions and automated vendor ranking.",
    stack: ["Laravel 12", "React", "TypeScript", "Inertia.js"],
    link: "https://github.com/mysterybee07/procurement",
  },
  {
    name: "Exam & Result Distribution",
    summary:
      "Assigns exam centres by Haversine distance and capacity, and generates routines with gap and weekend rules.",
    stack: ["Go", "Fiber", "GORM", "MySQL", "Docker"],
    link: "https://github.com/mysterybee07/result-distribution",
  },
  {
    name: "kundali-yog",
    summary:
      "A Go library that finds astrological yogas in a kundali chart. Install it with go get and call kundali.GetYogas(chart).",
    stack: ["Go", "Library"],
    link: "https://github.com/mysterybee07/kundali-yog",
  },
];

export const skills = [
  { group: "Languages", items: ["Go", "Python", "PHP", "SQL", "TypeScript", "Dart"] },
  { group: "Architecture", items: ["Microservices", "Modular monolith", "Clean Architecture", "MVC", "Repository pattern", "Service layer", "Dependency injection"] },
  { group: "APIs & auth", items: ["REST", "WebSockets", "JWT", "OAuth 2.0", "RBAC", "API contracts"] },
  { group: "Frameworks", items: ["Gin", "Fiber", "Django", "DRF", "Laravel", "React", "Flutter"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "GORM", "sqlc", "pgx", "Atlas", "Django ORM"] },
  { group: "Integrations", items: ["eSewa", "Khalti", "Fonepay", "ConnectIPS", "PostHog", "Cloudflare R2"] },
  { group: "Infra & tooling", items: ["Linux", "Nginx", "Docker", "systemd", "Jenkins", "CI/CD", "Git", "Postman"] },
  { group: "Quality", items: ["go test -race", "govulncheck", "Postman", "Code review", "API & DB debugging"] },
  { group: "AI-assisted dev", items: ["Claude Code", "OpenAI Codex", "AI code review", "Test generation"] },
];

export const education = {
  degree: "B.Sc. Computer Science & Information Technology (CSIT)",
  school: "College of Applied Business, Kathmandu",
  year: "2024",
};
