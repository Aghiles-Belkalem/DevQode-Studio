"use client";

import { useState, useEffect } from "react";
import styles from "./about.module.css";
import { useTranslations } from "../../../hooks/useTranslations";
import ContactForm from "@/components/ui/contact/contactForm";
import Modal from "@/components/ui/modal/modal";

export default function About() {
  const { t } = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation fade-up pour les skills
  useEffect(() => {
    const skills = document.querySelectorAll(`.${styles.skill}`);
    skills.forEach((skill, index) => {
      setTimeout(() => skill.classList.add(styles.show), index * 150);
    });
  }, []);

  return (
    <main className={styles.about}>
      {/* Section Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            {t.about?.title ||
              "Transformez vos idées en expériences digitales qui cartonnent"}
          </h1>
          <p>
            {t.about?.intro ||
              "Nous concevons des sites web et applications mobiles performants, modernes et centrés sur vos utilisateurs."}
          </p>
          <button
            className={styles.ctaButton}
            onClick={() =>
              window.open("https://calendly.com/belkalemaghiles/30min", "_blank")
            }
          >
            {t.about?.cta || "Parlez de votre projet"}
          </button>
        </div>
      </section>

      {/* Section Compétences */}
      <section className={styles.skills}>
        <h2>{t.about?.skillsTitle || "Expertise technique & créative"}</h2>
        <div className={styles.skillsGrid}>
          {Object.values(t.about.skills).map((skill: any, i: number) => (
            <div key={i} className={styles.skill}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Vision */}
      <section className={styles.vision}>
        <h2>{t.about?.visionTitle || "Notre vision"}</h2>
        <p>
          {t.about?.visionContent ||
            "Créer des solutions digitales qui allient esthétisme, performance et ROI. Votre succès en ligne est ma priorité."}
        </p>
      </section>

      {/* Call-to-action */}
      <aside className={styles.ctaSection}>
        <h2>{t.about?.ctaTitle || "Prêt à concrétiser votre projet ?"}</h2>
        <p>
          {t.about?.ctaContent ||
            "Échangeons sur vos besoins et construisons ensemble une solution digitale sur mesure, efficace et design."}
        </p>
        <button
          className={styles.ctaButton}
          onClick={() => setIsModalOpen(true)}
        >
          {t.about?.ctaButton || "Demander un devis gratuit"}
        </button>
      </aside>

      {/* Modale */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm />
      </Modal>
    </main>
  );
}

