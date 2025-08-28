import { Metadata } from "next";
import { useTranslations } from "../../hooks/useTranslations";
import HeroLanding from "../../components/ui/hero/Hero";
import { useRouter, usePathname } from "next/navigation";
import ProjectsSection from "@/components/ui/projet/projets";

// 👇 Ici directement dans ton composant/page
export const metadata: Metadata = {
  title: "DevQode Studio - Solutions Web & Apps Modernes",
  description:
    "Développons ensemble votre site, application ou e-commerce moderne et performant. DevQode Studio, votre partenaire digital.",
  openGraph: {
    title: "DevQode Studio",
    description:
      "Sites, Apps & E-commerce modernes et performants.",
    url: "https://devqodestudio.com",
    siteName: "DevQode Studio",
    images: [
      {
        url: "https://devqodestudio.com/logo-png.png",
        width: 1200,
        height: 630,
        alt: "DevQode Studio - Digital Solutions",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://devqodestudio.com",
  },
};

export default function HomePage() {
  useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <HeroLanding />
      <ProjectsSection />
    </>
  );
}

