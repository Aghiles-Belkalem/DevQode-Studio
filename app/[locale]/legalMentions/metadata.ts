import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | DevQode Studio",
  description: "Mentions légales du site DevQode Studio : informations sur l'éditeur, l'hébergement, la propriété intellectuelle et la gestion des données personnelles.",
  keywords: "mentions légales, éditeur, hébergement, propriété intellectuelle, données personnelles, DevQode Studio, site web",
  openGraph: {
    title: "Mentions légales | DevQode Studio",
    description: "Mentions légales du site DevQode Studio : éditeur, hébergement, propriété intellectuelle, données personnelles.",
    url: "https://devqodestudio.com/legalMentions",
    siteName: "DevQode Studio",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://devqodestudio.com/images/logo-v2.png",
        width: 1200,
        height: 630,
        alt: "DevQode Studio - Mentions légales",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
