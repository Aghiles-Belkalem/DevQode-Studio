import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création site web professionnel | DevQode Studio",
  description: "DevQode Studio : Expert en création de sites web modernes, développement sur mesure, optimisation SEO, design UX/UI. Services en France, Algérie, Belgique, UK, Portugal.",
  keywords: "création site web, développement web, agence web, design UX, SEO, site internet professionnel, freelance web, développement front-end, développement back-end, France, Algérie, Belgique, Portugal, Royaume-Uni",
  openGraph: {
    title: "Création site web professionnel | DevQode Studio",
    description: "Expert en création de sites web modernes, développement sur mesure et optimisation SEO. Présent en France, Algérie, Belgique, UK et Portugal.",
    url: "https://devqode-studio.com/",
    siteName: "DevQode Studio",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://devqode-studio.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevQode Studio - Création site web professionnel",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
