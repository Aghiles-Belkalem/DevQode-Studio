"use client";
import HeroLanding from "../hero/Hero";
import ProjectsSection from "../projet/projets";
import ClientNav from "../../ClientNav";

export default function HomePageClient() {
  return (
    <>
      <HeroLanding />
      <ProjectsSection />
      <ClientNav />
    </>
  );
}
