// server/getTranslations.ts
import {fr} from "../locales/fr";
import {pt} from "../locales/pt";
import {en} from "../locales/en"

export async function getTranslations(locale: string) {
  switch (locale) {
    case "pt":
      return pt;
    case "fr":
    default:
      return fr;
       case "en":
      return en;
  }
}
