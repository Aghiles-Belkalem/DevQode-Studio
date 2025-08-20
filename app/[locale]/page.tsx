'use client';

import { useTranslations } from '../../hooks/useTranslations';
import HeroLanding from '../../components/ui/hero/Hero';
import { useRouter, usePathname } from 'next/navigation';
import ProjectsSection from '@/components/ui/projet/projets';

export default function HomePage() {
  const { t, locale } = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    // Replace the locale segment in the pathname
    const newPath = pathname.replace(/^\/[a-z-]+/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <>
      <HeroLanding/>
      <ProjectsSection/>
    </>
  );
}
