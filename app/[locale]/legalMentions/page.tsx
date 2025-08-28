'use client';

import styles from './legalMention.module.css';
import { useTranslations } from '../../../hooks/useTranslations';

export default function MentionsLegales() {
  const { t } = useTranslations();
  return (
    <main className={styles.mentions}>
      {/* HEADER PRINCIPAL */}
      <header className={styles.header}>
        <h1>{t.legalMentions?.title || 'Mentions légales – DevQode Studio'}</h1>
        <p>{t.legalMentions?.intro || 'Informations légales obligatoires conformément à la loi.'}</p>
      </header>

      {/* CONTENEUR GRID POUR LES SECTIONS */}
      <div className={styles.sectionsGrid}>
        <section className={styles.section}>
          <h2>{t.legalMentions?.editorTitle || 'Éditeur du site'}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t.legalMentions?.editorContent || 'Le site DevQode Studio est édité par ...'}</p>
        </section>

        <section className={styles.section}>
          <h2>{t.legalMentions?.hostingTitle || 'Hébergement'}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{t.legalMentions?.hostingContent || 'Le site est hébergé par ...'}</p>
        </section>

        <section className={styles.section}>
          <h2>{t.legalMentions?.ipTitle || 'Propriété intellectuelle'}</h2>
          <p>{t.legalMentions?.ipContent || 'L’ensemble des contenus présents sur ce site ...'}</p>
        </section>

        <section className={styles.section}>
          <h2>{t.legalMentions?.liabilityTitle || 'Limitation de responsabilité'}</h2>
          <p>{t.legalMentions?.liabilityContent || 'DevQode Studio ne pourra être tenu responsable ...'}</p>
        </section>

        <section className={styles.section}>
          <h2>{t.legalMentions?.personalDataTitle || 'Données personnelles'}</h2>
          <p>{t.legalMentions?.personalDataContent || 'Les informations personnelles collectées via les formulaires de contact ...'}</p>
        </section>
      </div>
    </main>
  );
}

