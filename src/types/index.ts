export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface Skills {
  frontend: string[];
  stateManagement: string[];
  styling: string[];
  backend: string[];
  cloud: string[];
  tools: string[];
  databases: string[];
}

export interface Project {
  name: string;
  description: string;
  achievements: string[];
  link?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  projects: Project[];
}

export interface ProjectShowcase {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  achievements?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
