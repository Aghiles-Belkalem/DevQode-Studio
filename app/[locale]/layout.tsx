import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
import { Providers } from "./providers";

import { getTranslations } from "../../hooks/getTranslations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; // ✅ params doit être await
  const t = await getTranslations(locale);

  const baseUrl = "https://devqodestudio.com";
  const imageUrl = `${baseUrl}/images/logo-v2.png`; // ✅ nouvelle image

  return {
    title: t.seo?.title || "DevQode Studio",
    description: t.seo?.description || "Solutions web & mobile haut de gamme.",
    alternates: {
      canonical: baseUrl,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
        pt: `${baseUrl}/pt`,
      },
    },
    openGraph: {
      title: t.seo?.title,
      description: t.seo?.description,
      url: baseUrl,
      siteName: "DevQode Studio",
      locale: locale === "fr" ? "fr_FR" : locale === "pt" ? "pt_PT" : "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: t.seo?.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.seo?.title,
      description: t.seo?.description,
      creator: "@DevQodeStudio",
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
  };
}

export default async function RootLayout(props: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { children } = props;
  const { locale } = await props.params; // ✅ params doit être await
  const t = await getTranslations(locale);

  const baseUrl = "https://devqodestudio.com";
  const imageUrl = `${baseUrl}/images/logo-v2.png`; // ✅ nouvelle image

  // JSON-LD Organisation
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DevQode Studio",
    url: baseUrl,
    logo: imageUrl,
    sameAs: [
      "https://www.linkedin.com/company/devqodestudio/",
      "https://www.instagram.com/devqode.studio",
    ],
    description: t.seo?.description,
  };

  // JSON-LD Breadcrumbs
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.header?.home || "Accueil", item: baseUrl },
      { "@type": "ListItem", position: 2, name: t.header?.services || "Services", item: `${baseUrl}/services` },
      { "@type": "ListItem", position: 3, name: t.header?.about || "À propos", item: `${baseUrl}/about` },
      { "@type": "ListItem", position: 4, name: t.header?.legalMentions || "Mentions légales", item: `${baseUrl}/legalMentions` },
    ],
  };

  return (
    <html lang={locale || "fr"}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/logo-transparent-svg.svg" />
        <link rel="apple-touch-icon" href="/logo-transparent-png.png" />
        <meta name="theme-color" content="#101010" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers locale={locale}>
          <Header />
          {children}
          <Footer />
        </Providers>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}



