// app/[locale]/about/metadata.ts
import { Metadata } from "next";

// SEO statique pour la page About
const SEO = {
  title: "DevQode Studio - À propos",
  description:
    "Découvrez DevQode Studio, votre partenaire digital pour créer des sites web et applications performants, modernes et centrés utilisateurs.",
  url: "https://devqodestudio.com/about",
  ogImage: "https://devqodestudio.com/images/logo-v2.png",
  ogLocale: "fr_FR",
};

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.url,
    siteName: "DevQode Studio",
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: SEO.title,
      },
    ],
    locale: SEO.ogLocale,
    type: "website",
  },
  alternates: { canonical: SEO.url },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
};
