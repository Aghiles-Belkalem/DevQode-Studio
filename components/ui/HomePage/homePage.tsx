"use client";
import HeroLanding from "../hero/Hero";
import ProjectsSection from "../projet/projets";
import ClientNav from "../../ClientNav";
import { useTranslations } from "../../../hooks/useTranslations";

export default function HomePageClient() {
  const t = useTranslations(); // Hook côté client pour traductions

  return (
    <>
      <HeroLanding />
      <ProjectsSection />
      <ClientNav />
    </>
  );
}
