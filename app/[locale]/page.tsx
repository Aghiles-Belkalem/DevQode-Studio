'use client';

import { useTranslations } from '../../hooks/useTranslations';
import HeroLanding from '../../components/ui/hero/Hero';
import { useRouter, usePathname } from 'next/navigation';
import ProjectsSection from '@/components/ui/projet/projets';

export default function HomePage() {
  useTranslations();
  const router = useRouter();
  const pathname = usePathname();


  return (
    <>
      <HeroLanding/>
      <ProjectsSection/>
    </>
  );
}
