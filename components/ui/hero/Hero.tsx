'use client';

import Image from 'next/image';
import styles from './Hero.module.css';
import { useTranslations } from '../../../hooks/useTranslations';
import { useState } from 'react';
import ContactForm from '../contact/contactForm';
import Modal from '../modal/modal';

interface SocialProofItem {
  value: string;
  label: string;
}

export default function HeroLandingImproved() {
  const { t } = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clientsLogos = [
    { src: '/images/logoMK.png', alt: 'Logo MK Detailing' },
    { src: '/images/LogoOff Graille zone.png', alt: 'Logo Graille Zone' },
    { src: '/images/Capture_d_écran_2025-07-29_004817-removebg-preview.png', alt: 'Logo Nouchka' },
     { src: '/images/logo-awa.jpg', alt: 'Logo Awa Consulting' },
  ];

  const calendlyUrl = 'https://calendly.com/belkalemaghiles/30min';

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.container}>
        {/* Texte principal */}
        <div className={styles.textContent}>
          <h1 id="hero-title" className={styles.title}>
            {t.hero?.title || 'Propulsez votre business avec '}
            <span className={styles.highlight}>DevQode Studio</span>
          </h1>
          <p className={styles.subtitle}>
            {t.hero?.subtitle ||
              'Création de sites web performants, SEO optimisé et design sur mesure pour convertir vos visiteurs en clients fidèles.'}
          </p>

          {/* CTA */}
          <div className={styles.ctaGroup}>
            <a href="/services" className={styles.ctaPrimary}>
              {t.hero?.ctaDiscover || 'Découvrez nos services'}
            </a>
            <button
              className={styles.ctaSecondary}
              onClick={() => setIsModalOpen(true)}
            >
              {t.services?.ctaButton || "Devis gratuit en 1 clic"}
            </button>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaCalendly}
            >
              {t.hero?.ctaCalendly || "Planifiez un rendez-vous"}
            </a>
          </div>

          {/* Garanties */}
          <div className={styles.guarantees}>
            {t.hero?.guarantees?.map((text: string, i: number) => (
              <span key={i}>{text}</span>
            ))}
          </div>

          {/* Preuves sociales */}
          <div className={styles.socialProof}>
            {t.hero?.socialProof?.map((item: SocialProofItem, i: number) => (
              <div key={i}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Logos Clients */}
          <p className={styles.clientsLabel}>
            {t.hero?.confidence || "Ils nous font confiance"}
          </p>
          <div className={styles.clientsLogos}>
            {clientsLogos.map(({ src, alt }, i) => (
              <Image key={i} src={src} alt={alt} width={80} height={80} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal contact */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm />
      </Modal>
    </section>
  );
}
