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
    // Remplace le segment de langue au début de l’URL
    const newPath = pathname.replace(/^\/[a-z-]+/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroLanding />

      {/* Sélecteur de langue */}
      <div style={{ textAlign: "right", margin: "1rem" }}>
        <label htmlFor="locale" style={{ marginRight: "0.5rem" }}>
          🌍 {t.header?.language || "Langue"} :
        </label>
        <select
          id="locale"
          value={locale}
          onChange={handleLocaleChange}
          style={{ padding: "0.3rem", borderRadius: "6px" }}
        >
          <option value="fr">🇫🇷 Français</option>
          <option value="en">🇬🇧 English</option>
          <option value="pt">🇵🇹 Português</option>
        </select>
      </div>

      {/* Section Projets */}
      <ProjectsSection />
    </>
  );
}

