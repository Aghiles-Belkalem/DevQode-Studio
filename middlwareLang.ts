import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED_LOCALES = ["pt", "fr", "en"];
const DEFAULT_LOCALE = "en"; // fallback

// Associer pays → langue
function getLocaleFromCountry(country: string | null | undefined): string {
  if (!country) return DEFAULT_LOCALE;

  switch (country.toUpperCase()) {
    case "PT":
      return "pt";
    case "FR":
    case "BE":
    case "CA":
      return "fr";
    default:
      return DEFAULT_LOCALE;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignorer les fichiers statiques et API
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next")
  ) {
    return NextResponse.next();
  }

  // Si l'URL a déjà une locale → laisser passer
  const pathLocale = pathname.split("/")[1];
  if (SUPPORTED_LOCALES.includes(pathLocale)) {
    return NextResponse.next();
  }

  // Sinon, détecter la langue via IP/pays
  const country = req.headers.get("x-vercel-ip-country");
  const locale = getLocaleFromCountry(country);

  // Rediriger vers la bonne locale
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next|.*\\..*|favicon.ico).*)",
  ],
};
