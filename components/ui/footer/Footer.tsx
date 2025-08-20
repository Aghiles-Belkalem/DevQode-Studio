"use client";

import Link from 'next/link';
import { useTranslations } from '../../../hooks/useTranslations';
import styles from './footer.module.css';

export default function Footer() {
  const { t } = useTranslations();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.main}>
        {/* Logo + tagline */}
        <div className={styles.column}>
          <div className={styles.logo}>
            <img src="/logo-transparent-svg.svg" alt="DevQode Studio logo" />
          </div>
          <p className={styles.tagline}>{t.footer?.tagline || "Création de sites web haut de gamme"}</p>
        </div>

        {/* Navigation */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Navigation</h3>
          <ul className={styles.navList}>
             <Link href={`/`} className={styles.menuLink}>{t.header.home || "Home"}</Link>
          <Link href="/services" className={styles.menuLink}>{t.header?.services || 'Services'}</Link>
          <Link href="/about" className={styles.menuLink}>{t.header?.about || 'About'}</Link>
          <Link href="/legalMentions" className={styles.menuLink}>{t.header?.legalMentions || 'Legal Mentions'}</Link>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h3 className={styles.heading}>{t.footer?.contactUs || 'Contact'}</h3>
          <a
            className={styles.contactLink}
            href="https://wa.me/33615406661"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact WhatsApp France +33 6 15 40 66 61"
          >
            <WhatsappIcon />
            +33 6 15 40 66 61
          </a>
          <a
            className={styles.contactLink}
            href="https://wa.me/351926576544"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact WhatsApp France +351 926 576 544"
          >
              <WhatsappIcon />
            +351 926 576 544
          </a>
          <a
            className={styles.contactLink}
            href="https://www.linkedin.com/in/aghiles-belkalem-10871323b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn DevQode Studio"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>{new Date().getFullYear()} {t.footer?.copyright || "DevQode Studio — Tous droits réservés."}</p>
        <button onClick={scrollToTop} aria-label="Retour en haut" className={styles.backToTop}>
          ↑
        </button>
      </div>
    </footer>
  );
}

function WhatsappIcon() {
  return (
    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.52 3.48A11.78 11.78 0 0012.01 0a11.82 11.82 0 00-10.5 17.8L0 24l6.46-1.69A11.82 11.82 0 0023.96 5.32a11.68 11.68 0 00-3.44-1.84zm-8.51 17.14a9.42 9.42 0 01-4.78-1.39l-.34-.2-3.05.8.82-3.02-.22-.32a9.43 9.43 0 1110.02 3.1 9.34 9.34 0 01-3.83.03zm5.03-6.66c-.28-.14-1.65-.82-1.9-.91-.25-.09-.43-.13-.62.14s-.71.9-.87 1.08-.32.21-.6.07a7.37 7.37 0 01-2.18-1.35 8.16 8.16 0 01-1.52-1.88c-.16-.27 0-.41.12-.54.12-.13.26-.32.39-.48a1.63 1.63 0 00.24-.4.33.33 0 000-.4c-.06-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48a1.34 1.34 0 00-.58-.07c-.2 0-.48.07-.73.35a2.87 2.87 0 00-1 1.23 4.35 4.35 0 001.24 5.35 6.53 6.53 0 004.18 1.72c1.1 0 1.9-.45 2.28-.77a2.37 2.37 0 00.7-1.75c0-.33-.13-.56-.28-.7z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.64 1.34 2.98 2.98 2.98s2.98-1.34 2.98-2.98C7.96 4.84 6.62 3.5 4.98 3.5zM2.4 21.5h5.16v-11H2.4v11zM9.8 10.5h4.95v1.5h.07c.69-1.3 2.38-2.68 4.9-2.68 5.25 0 6.22 3.45 6.22 7.94v8.24h-5.16v-7.3c0-1.74-.03-3.98-2.43-3.98-2.44 0-2.82 1.91-2.82 3.88v7.4H9.8v-11z"/>
    </svg>
  );
}



