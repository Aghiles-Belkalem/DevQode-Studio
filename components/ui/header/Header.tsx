'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

import { useTranslations } from '../../../hooks/useTranslations';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const { t, locale } = useTranslations();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Language switcher handler
  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    const newPath = pathname.replace(/^\/[a-z-]+/, `/${newLocale}`);
    router.push(newPath);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);

  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} onClick={close}>
          <img src="/logo-transparent-svg.svg" alt="Qode Studio" className={styles.logoIcon} />
        </Link>

        {/* Desktop navigation links */}
        <div className={styles.menu}>
         <Link href={`/`} className={styles.menuLink}>{t.header.home || "Home"}</Link>
          <Link href="/services" locale={locale}className={styles.menuLink}>{t.header?.services || 'Services'}</Link>
          <Link href="/about" locale={locale}className={styles.menuLink}>{t.header?.about || 'About'}</Link>
          <Link href="/legalMentions" locale={locale}className={styles.menuLink}>{t.header?.legalMentions || 'Legal Mentions'}</Link>
          <div className={styles.langSwitcher}>
            <button
              className={`${styles.langBtn} ${locale === 'fr' ? styles.langActive : ''}`}
              onClick={() => handleLocaleChange('fr')}
              aria-label="Français"
              type="button"
            >🇫🇷 FR</button>
            <button
              className={`${styles.langBtn} ${locale === 'en' ? styles.langActive : ''}`}
              onClick={() => handleLocaleChange('en')}
              aria-label="English"
              type="button"
            >🇬🇧 EN</button>
            <button
              className={`${styles.langBtn} ${locale === 'pt' ? styles.langActive : ''}`}
              onClick={() => handleLocaleChange('pt')}
              aria-label="Português"
              type="button"
            >🇵🇹 PT</button>
          </div>
        </div>

        {/* Mobile burger and menu */}
        <button
          className={styles.burger}
          aria-expanded={open}
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          aria-label="Ouvrir ou fermer le menu"
          type="button"
        >
          <span className={`${styles.bar} ${open ? styles.open1 : ''}`}></span>
          <span className={`${styles.bar} ${open ? styles.open2 : ''}`}></span>
          <span className={`${styles.bar} ${open ? styles.open3 : ''}`}></span>
        </button>

        {open && <div className={styles.overlay} onClick={close} />}

        {/* Mobile menu, only visible when open */}
        {open && (
          <div
            ref={menuRef}
            className={`${styles.mobileMenu} ${open ? styles.open : ''}`}
            onClick={(e) => e.stopPropagation()}>
            <Link href={`/`} locale={locale}className={styles.menuLink}>{t.header.home || "Home"}</Link>
            <Link href="/services" locale={locale}className={styles.menuLink} onClick={close}>{t.header?.services || 'Services'}</Link>
            <Link href="/about" locale={locale}className={styles.menuLink} onClick={close}>{t.header?.about || 'About'}</Link>
            <Link href="/legalMentions" locale={locale}className={styles.menuLink} onClick={close}>{t.header?.legalMentions || 'Legal Mentions'}</Link>
            <div className={styles.langSwitcherMobile}>
              <button
                className={`${styles.langBtn} ${locale === 'fr' ? styles.langActive : ''}`}
                onClick={() => { handleLocaleChange('fr'); close(); }}
                aria-label="Français"
                type="button"
              >🇫🇷 FR</button>
              <button
                className={`${styles.langBtn} ${locale === 'en' ? styles.langActive : ''}`}
                onClick={() => { handleLocaleChange('en'); close(); }}
                aria-label="English"
                type="button"
              >🇬🇧 EN</button>
              <button
                className={`${styles.langBtn} ${locale === 'pt' ? styles.langActive : ''}`}
                onClick={() => { handleLocaleChange('pt'); close(); }}
                aria-label="Português"
                type="button"
              >🇵🇹 PT</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

