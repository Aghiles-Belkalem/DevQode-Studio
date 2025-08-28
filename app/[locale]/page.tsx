import HeroLanding from '../../components/ui/hero/Hero';
import ProjectsSection from '@/components/ui/projet/projets';
import ClientNav from '../../components/ClientNav';

export default function HomePage() {
  return (
    <>
      <HeroLanding />
      <ProjectsSection />
      <ClientNav />
    </>
  );
}