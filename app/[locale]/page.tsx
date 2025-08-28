import { Metadata } from "next";
import HeroLanding from "../../components/ui/hero/Hero";
import ProjectsSection from "@/components/ui/projet/projets";
import ClientNav from "../../components/ClientNav";

// Texte SEO multi-langues
const SEO = {
  fr: {
    title: "DevQode Studio - Solutions Web & Apps Modernes",
    description:
      "Développons ensemble votre site, application ou e-commerce moderne et performant. DevQode Studio, votre partenaire digital.",
    ogLocale: "fr_FR",
    ogImage: "https://devqodestudio.com/images/logo-png.png",
  },
  en: {
    title: "DevQode Studio - Modern Web & App Solutions",
    description:
      "Let's build your modern and performant website, app, or e-commerce together. DevQode Studio, your digital partner.",
    ogLocale: "en_US",
    ogImage: "https://devqodestudio.com/images/logo-png.png",
  },
  pt: {
    title: "DevQode Studio - Soluções Web & Apps Modernas",
    description:
      "Desenvolvemos juntos o seu site, aplicação ou e-commerce moderno e eficiente. DevQode Studio, seu parceiro digital.",
    ogLocale: "pt_PT",
    ogImage: "https://devqodestudio.com/images/logo-png.png",
  },
};

// Metadata dynamique côté serveur (fallback FR)
export function generateMetadata(): Metadata {
  const seo = SEO.fr; // Valeur par défaut, on peut générer dynamique côté client si nécessaire

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: "https://devqodestudio.com",
      siteName: "DevQode Studio",
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: seo.ogLocale,
      type: "website",
    },
    alternates: { canonical: "https://devqodestudio.com" },
  };
}

// Page principale côté serveur
export default function HomePage() {
  return (
    <>
      <HeroLanding />
      <ProjectsSection />
      <ClientNav />
    </>
  );
}
