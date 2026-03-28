import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
