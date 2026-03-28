export const personalInfo = {
  name: "Abhijith K",
  title: "Frontend Engineer",
  subtitle: "React • TypeScript • Next.js • JavaScript",
  email: "abhijithkizhakkethodi@gmail.com",
  phone: "+91-6282448436",
  location: "Bengaluru, Karnataka, India",
  linkedin: "https://linkedin.com/in/abhijith-k-1b11061a0/",
  github: "https://github.com/abhijithk666/",
  calendarUrl: "https://cal.com/abhijith-k-vqq3xz/30min",
  summary:
    "Frontend Engineer with 3+ years of experience building secure, high-performance web applications using modern JavaScript frameworks. Specialized in React.js with solid understanding of modern component-based frameworks including Next.js and Gatsby. Proven track record in collaborating with cross-functional teams, implementing best practices through code reviews, and optimizing frontend performance. Experience with RESTful API design, CDN infrastructure, and delivering scalable solutions in Agile environments.",
};

export const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "Vue.js",
    "Gatsby",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
  ],
  stateManagement: ["Redux", "Recoil", "Zustand", "TanStack Query"],
  styling: ["Tailwind CSS", "Bootstrap", "Framer Motion"],
  backend: ["Node.js", "NestJS", "SpringBoot", "RESTful APIs", "Microservices"],
  cloud: ["Git", "CI/CD", "AWS", "CDN", "Docker", "Kafka", "Vercel", "Netlify"],
  buildTools: ["Webpack", "Vite", "Monorepo Architecture", "JAMstack Architecture"],
  tools: [
    "Strapi CMS",
    "Jest",
    "Storybook",
    "Shadcn UI",
    "SharePoint Framework (SPFx)",
    "Figma",
  ],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
};

export const experience = [
  {
    title: "Senior Software Engineer",
    company: "Tarento Technologies Pvt Ltd",
    location: "Bangalore, India",
    period: "Nov 2025 - Present",
    projects: [
      {
        name: "ProactiveForHer",
        url: "https://proactiveforher.com",
        description:
          "Healthcare platform built with React.js and Next.js for women's health",
        achievements: [
          "Collaborated with Product Managers and Designers to implement features for healthcare platform using React.js and Next.js",
          "Designed and integrated RESTful APIs using NestJS to support frontend functionality and enable secure data flow",
          "Led performance optimization initiatives including code splitting, lazy loading, and CDN configuration, improving load times",
          "Optimized AWS infrastructure and implemented monitoring solutions, reducing server costs by 20%",
          "Triaged and debugged production issues, ensuring rapid resolution and minimal downtime",
          "Earned the Customer Delight Award for delivering high-quality results and process improvements",
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
        description:
          "Modern, type-safe web application built with React, TypeScript and Vite",
        achievements: [
          "Built modern, type-safe web application using React, TypeScript and Vite, leveraging Shadcn UI component library and Tailwind CSS for rapid UI development",
          "Developed reusable, accessible component architecture following React best practices and design system principles",
          "Integrated Lovable for AI-powered code generation to accelerate feature development and maintain consistent code quality",
          "Established streamlined deployment workflow with automated GitHub integration and Netlify CI/CD pipeline, enabling continuous delivery",
          "Optimized build performance using Vite's fast HMR and tree-shaking capabilities for improved developer experience",
        ],
      },
      {
        name: "Spinverse AI",
        url: "",
        description:
          "Modern, responsive frontend to automate EU grant proposal creation using React, TypeScript, and SPFx",
        achievements: [
          "Developed modern, responsive frontend to automate EU grant proposal creation using React, TypeScript, and SPFx, integrating enterprise knowledge sources to deliver intelligent document generation capabilities",
          "Built reusable, modular UI components for SharePoint Framework (SPFx), ensuring seamless integration and consistent user experience across the SharePoint ecosystem",
          "Integrated RESTful APIs to enable AI-driven content generation features, enhancing functionality and user productivity",
          "Implemented comprehensive debugging and testing workflows using Chrome DevTools and Jest, ensuring robust performance and reliability",
          "Contributed to UI ideation and iterative design improvements to deliver an intuitive and engaging user experience",
          "Implemented performance optimizations including debouncing for API calls and throttling for user inputs, ensuring responsive UI during AI content generation while reducing server load and preventing redundant requests",
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
        description:
          "High-performance website built from scratch using JAMstack with React.js, Gatsby, and CDN deployment",
        achievements: [
          "Built high-performance website from scratch using JAMstack with React.js, Gatsby, and CDN deployment",
          "Implemented frontend performance monitoring and optimization techniques, achieving fast load times across devices",
          "Designed reusable, accessible UI components following software engineering best practices and semantic HTML standards",
          "Leveraged Strapi CMS for content management with custom RESTful API integrations for dynamic content delivery",
        ],
      },
      {
        name: "Tarento",
        url: "https://tarento.com",
        description:
          "Corporate website migrated to JAMstack architecture with Strapi as headless CMS and Gatsby as SSG",
        achievements: [
          "Led architecture migration to JAMstack with Strapi as the headless CMS and Gatsby as the SSG",
          "Developed and maintained comprehensive React component library and design system, ensuring consistency across the platform",
          "Implemented SEO optimization techniques and performance enhancements, improving search visibility and user engagement",
          "Optimized for performance and accessibility, achieving excellent Lighthouse scores across all metrics",
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: "ProactiveForHer",
    description:
      "A women's healthcare platform with telehealth consultations, appointment booking, and personalised health tracking — built for scale on AWS with a NestJS backend.",
    tech: ["Next.js", "NestJS", "TypeScript", "AWS"],
    image: "/images/projects/proactiveforher.png",
    liveUrl: "https://proactiveforher.com",
    githubUrl: "",
    featured: true,
    achievements: ["20% cost reduction", "Customer Delight Award"],
  },
  {
    title: "Bihar Museum",
    description:
      "High-performance public website for one of India's largest museums, delivering dynamic content at speed via a JAMstack architecture and CDN-backed Strapi CMS.",
    tech: ["Gatsby", "React.js", "Strapi CMS", "Tailwind CSS"],
    image: "/images/projects/biharmuseum.png",
    liveUrl: "https://biharmuseum.org",
    githubUrl: "",
    featured: true,
    achievements: ["Excellent Lighthouse scores", "Fast load times"],
  },
  {
    title: "IVF Access",
    description:
      "Type-safe web app for an IVF access platform, built with a focus on accessible UI components, fast build tooling, and continuous delivery via Netlify.",
    tech: ["React", "TypeScript", "Vite", "Shadcn UI"],
    image: "/images/projects/ivfa.png",
    liveUrl: "https://ivfaccess.com/",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Tarento",
    description:
      "Corporate site for a tech consultancy, migrated to a JAMstack architecture with a headless CMS, a reusable component library, and strong Lighthouse scores.",
    tech: ["Gatsby", "React.js", "Strapi CMS", "SEO"],
    image: "/images/projects/tarento.png",
    liveUrl: "https://tarento.com",
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
