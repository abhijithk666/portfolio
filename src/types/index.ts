export interface ProjectShowcase {
  title: string;
  description: string;
  tags: string[];
  tech: string[];
  image: string; // empty → private-project placeholder
  liveUrl: string; // external URL, or an on-site anchor like '/#contact'
  cta: string;
  githubUrl: string;
  featured: boolean;
  achievements?: string[];
}
