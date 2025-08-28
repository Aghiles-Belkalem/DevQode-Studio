'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

import { useTranslations } from '../../../hooks/useTranslations';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const { t, locale } = useTranslations();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'dark'|'light'>('dark');
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Language switcher handler
  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    const newPath = pathname.replace(/^\/[a-z-]+/, `/${newLocale}`);
    router.push(newPath);
  };

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
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
          <Link href="/services" className={styles.menuLink}>{t.header?.services || 'Services'}</Link>
          <Link href="/about" className={styles.menuLink}>{t.header?.about || 'About'}</Link>
          <Link href="/legalMentions" className={styles.menuLink}>{t.header?.legalMentions || 'Legal Mentions'}</Link>

          {/* Lang switcher */}
          <div className={styles.langSwitcher}>
            {['fr','en','pt'].map(l => (
              <button
                key={l}
                className={`${styles.langBtn} ${locale===l ? styles.langActive:''}`}
                onClick={()=>handleLocaleChange(l)}
                aria-label={l.toUpperCase()}
                type="button"
              >{l==='fr'?'🇫🇷':l==='en'?'🇬🇧':'🇵🇹'} {l.toUpperCase()}</button>
            ))}
          </div>

          {/* Theme toggle */}
          <div className={styles.themeSwitch}>
            <input 
              type="checkbox" 
              id="theme-toggle" 
              checked={theme==='light'} 
              onChange={toggleTheme} 
              className={styles.themeCheckbox} 
            />
            <label htmlFor="theme-toggle" className={styles.themeLabel}>
              <span className={styles.ball}></span>
            </label>
          </div>
        </div>

        {/* Mobile burger and menu */}
        <button
          className={styles.burger}
          aria-expanded={open}
          onClick={(e) => { e.stopPropagation(); toggle(); }}
          aria-label="Ouvrir ou fermer le menu"
          type="button"
        >
          <span className={`${styles.bar} ${open ? styles.open1 : ''}`}></span>
          <span className={`${styles.bar} ${open ? styles.open2 : ''}`}></span>
          <span className={`${styles.bar} ${open ? styles.open3 : ''}`}></span>
        </button>

        {open && <div className={styles.overlay} onClick={close} />}

        {/* Mobile menu */}
        {open && (
          <div
            ref={menuRef}
            className={`${styles.mobileMenu} ${open ? styles.open : ''}`}
            onClick={(e) => e.stopPropagation()}>
            <Link href={`/`} className={styles.menuLink}>{t.header.home || "Home"}</Link>
            <Link href="/services" className={styles.menuLink} onClick={close}>{t.header?.services || 'Services'}</Link>
            <Link href="/about" className={styles.menuLink} onClick={close}>{t.header?.about || 'About'}</Link>
            <Link href="/legalMentions" className={styles.menuLink} onClick={close}>{t.header?.legalMentions || 'Legal Mentions'}</Link>

            <div className={styles.langSwitcherMobile}>
              {['fr','en','pt'].map(l => (
                <button
                  key={l}
                  className={`${styles.langBtn} ${locale===l ? styles.langActive:''}`}
                  onClick={() => { handleLocaleChange(l); close(); }}
                  aria-label={l.toUpperCase()}
                  type="button"
                >{l==='fr'?'🇫🇷':l==='en'?'🇬🇧':'🇵🇹'} {l.toUpperCase()}</button>
              ))}
            </div>

            {/* Mobile theme toggle */}
            <div className={styles.themeSwitchMobile}>
              <input 
                type="checkbox" 
                id="theme-toggle-mobile" 
                checked={theme==='light'} 
                onChange={toggleTheme} 
                className={styles.themeCheckbox} 
              />
              <label htmlFor="theme-toggle-mobile" className={styles.themeLabel}>
                <span className={styles.ball}></span>
              </label>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
