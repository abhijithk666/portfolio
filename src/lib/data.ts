export const personalInfo = {
  name: "Abhijith K",
  title: "Full Stack Developer",
  subtitle: "React.js, Next.js, TypeScript, Node.js | AI-Powered Web Applications",
  email: "abhijithkizhakkethodi@gmail.com",
  location: "Bengaluru, Karnataka, India",
  linkedin: "https://linkedin.com/in/abhijith-k-1b11061a0/",
  github: "https://github.com/abhijithk666/",
  calendarUrl: "https://cal.com/abhijith-k-vqq3xz/30min",
  interests: "Playing football on the turf, and being somewhere outside chasing good weather",
  summary:
    "Software Engineer with 4+ years of experience building and modernizing enterprise-grade, responsive web applications with React.js, Next.js, TypeScript, JavaScript (ES6+) and Node.js on RESTful, microservices-based systems. Builds AI-powered products end-to-end, from LLM integration and agentic AI workflows (LangGraph) to the UIs that use them, and works daily with AI-assisted development tools (Claude Code). Experienced in SSO, GitLab CI/CD, legacy modernization, performance, accessibility, and unit, integration, and E2E testing in Agile/Scrum teams.",
};

export const skills = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "SASS/SCSS", "Angular", "Gatsby", "Flutter", "Responsive Design"],
  },
  {
    label: "Backend & APIs",
    items: ["Node.js", "NestJS", "FastAPI", "SpringBoot", "RESTful API Design & Integration", "Microservices"],
  },
  {
    label: "AI & LLM Engineering",
    items: ["LLM Integration (Claude, LiteLLM)", "Agentic AI", "LangGraph", "AI Agents", "Human-in-the-Loop", "Prompt Engineering"],
  },
  {
    label: "AI-Assisted Development",
    items: ["Claude Code", "Cursor", "AI-Assisted Code & Test Generation"],
  },
  {
    label: "Security & Auth",
    items: ["OAuth2", "OIDC", "JWT", "SSO"],
  },
  {
    label: "Testing & Quality",
    items: ["Jest", "Playwright", "Storybook", "Unit / Integration / End-to-End Testing", "Code Reviews"],
  },
  {
    label: "State & UI",
    items: ["Redux", "Zustand", "TanStack Query", "Recoil", "NgRx", "Tailwind CSS", "Shadcn UI", "Angular Material", "Framer Motion", "Figma"],
  },
  {
    label: "DevOps & Tooling",
    items: ["Git", "GitLab", "GitHub", "GitLab CI/CD", "Docker", "AWS", "CDN", "Nginx", "Vercel", "Netlify", "Vite", "Webpack"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    label: "Methodologies",
    items: ["Agile/Scrum"],
  },
];

export const experience = [
  {
    title: "Senior Software Engineer",
    company: "Tarento Technologies Pvt Ltd",
    location: "Bangalore, India",
    period: "Nov 2025 - Present",
    projects: [
      {
        name: "Mimir AI",
        url: "",
        description: "AI-powered Learning & Development platform integrated with Moodle LMS",
        achievements: [
          "Built the Mimir AI web app with React, TypeScript, and Vite, delivering responsive, accessible UIs for AI course generation",
          "Integrated LLMs (Claude via LiteLLM) to power AI-generated SCORM courses and modernize legacy SCORM 1.2 content",
          "Integrated a microservices backend (FastAPI, Celery, PostgreSQL, Redis) via REST APIs, with Azure AD SSO (OAuth2 / OIDC)",
          "Built a Moodle integration plugin with 19 xAPI event observers and a SCORM push service, feeding AI-driven skills-gap analytics",
          "Set up GitLab CI/CD pipelines with Docker Compose deployments and branch-based environment releases",
          "Built agentic AI tools with LangGraph (API Contract Designer, Frontend Test Generator) with HITL, using Claude Code",
        ],
      },
      {
        name: "ProactiveForHer",
        url: "https://proactiveforher.com",
        description: "Healthcare platform for women's health built with React.js, Next.js and NestJS",
        achievements: [
          "Built accessible, responsive healthcare platform features from Figma using React.js and Next.js, with NestJS (Node.js) REST APIs",
          "Led performance optimization with code splitting, lazy loading, and CDN configuration, improving load times",
          "Optimized AWS infrastructure and implemented monitoring, reducing server costs by 20%; earned the Customer Delight Award",
        ],
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Tarento Technologies Pvt Ltd",
    location: "Bangalore, India",
    period: "Nov 2023 - Nov 2025",
    projects: [
      {
        name: "IVF Access",
        url: "https://ivfaccess.com",
        description: "Type-safe web application built with React, TypeScript and Vite",
        achievements: [
          "Built a complex, type-safe web application from scratch using React, TypeScript and Vite, with Shadcn UI and Tailwind CSS",
          "Developed reusable, accessible component architecture with Jest unit and integration tests and Playwright end-to-end tests",
          "Used Lovable for AI-assisted code generation and set up a GitHub + Netlify CI/CD pipeline for continuous delivery",
        ],
      },
      {
        name: "Spinverse AI",
        url: "",
        description: "AI-powered EU grant proposal generator built with React, TypeScript and SPFx",
        achievements: [
          "Built the frontend of an AI-powered EU grant proposal generator (React, TypeScript, SPFx) with LLM-driven generation",
          "Built reusable SPFx components, integrated RESTful APIs, and used debouncing and throttling for UI responsiveness",
        ],
      },
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Tarento Technologies Pvt Ltd",
    location: "Bangalore, India",
    period: "Aug 2022 - Nov 2023",
    projects: [
      {
        name: "Bihar Museum",
        url: "https://biharmuseum.org",
        description: "High-performance JAMstack website built with React.js, Gatsby, Strapi CMS and CDN",
        achievements: [
          "Built a high-performance, cross-browser compatible website with JAMstack (React.js, Gatsby, Strapi CMS, CDN)",
        ],
      },
      {
        name: "Tarento",
        url: "https://tarento.com",
        description: "Corporate website modernized to JAMstack with Strapi and Gatsby",
        achievements: [
          "Led legacy website modernization to JAMstack (Strapi, Gatsby) and built a React component library with top Lighthouse scores",
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: "Mimir AI",
    description:
      "AI-powered learning platform plugged into Moodle: LLMs generate SCORM courses, and LangGraph agents help the team design APIs and write tests. It's an internal build, so there's no public link, but I'm happy to walk you through it.",
    tags: ["Full Stack", "AI / LLM"],
    tech: ["React", "TypeScript", "FastAPI", "LangGraph"],
    image: "",
    liveUrl: "/#contact",
    cta: "Book a call to see it",
    githubUrl: "",
    featured: true,
  },
  {
    title: "ProactiveForHer",
    description:
      "A women's healthcare platform with telehealth consultations, appointment booking, and personalised health tracking — built for scale on AWS with a NestJS backend.",
    tags: ["Full Stack", "Performance"],
    tech: ["Next.js", "NestJS", "TypeScript", "AWS"],
    image: "/images/projects/proactiveforher.png",
    liveUrl: "https://proactiveforher.com",
    cta: "Visit website",
    githubUrl: "",
    featured: true,
    achievements: ["20% cost reduction", "Customer Delight Award"],
  },
  {
    title: "IVF Access",
    description:
      "Type-safe web app for an IVF access platform, built with accessible UI components, Jest and Playwright test coverage, and continuous delivery via Netlify.",
    tags: ["Frontend", "End-to-end shipping"],
    tech: ["React", "TypeScript", "Vite", "Shadcn UI"],
    image: "/images/projects/ivfa.png",
    liveUrl: "https://ivfaccess.com/",
    cta: "Visit website",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Spinverse AI",
    description:
      "Frontend for an AI tool that drafts EU grant proposals, built right inside SharePoint (SPFx). It's a client project, so it isn't public, but I can show you how it works.",
    tags: ["Frontend", "AI / LLM"],
    tech: ["React", "TypeScript", "SPFx"],
    image: "",
    liveUrl: "/#contact",
    cta: "Book a call to see it",
    githubUrl: "",
    featured: false,
  },
  {
    title: "Bihar Museum",
    description:
      "High-performance public website for one of India's largest museums, delivering dynamic content at speed via a JAMstack architecture and CDN-backed Strapi CMS.",
    tags: ["Frontend", "JAMstack"],
    tech: ["Gatsby", "React.js", "Strapi CMS", "Tailwind CSS"],
    image: "/images/projects/biharmuseum.png",
    liveUrl: "https://biharmuseum.org",
    cta: "Visit website",
    githubUrl: "",
    featured: true,
    achievements: ["Excellent Lighthouse scores", "Fast load times"],
  },
  {
    title: "Tarento",
    description:
      "Corporate site for a tech consultancy, migrated to a JAMstack architecture with a headless CMS, a reusable component library, and strong Lighthouse scores.",
    tags: ["Frontend", "Modernization"],
    tech: ["Gatsby", "React.js", "Strapi CMS", "SEO"],
    image: "/images/projects/tarento.png",
    liveUrl: "https://tarento.com",
    cta: "Visit website",
    githubUrl: "",
    featured: false,
  },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  institution: "Govt. Engineering College Palakkad",
  location: "Kerala, India",
  period: "2018 - 2022",
};
