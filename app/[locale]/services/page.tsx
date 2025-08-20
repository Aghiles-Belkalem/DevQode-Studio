"use client";

import { useState } from "react";
import styles from "./services.module.css";
import { useTranslations } from "../../../hooks/useTranslations";
import ContactForm from "@/components/ui/contact/contactForm";
import Modal from "@/components/ui/modal/modal"; // la modale optimisée

export default function Services() {
  const { t } = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={styles.services}>
      {/* Titre principal SEO */}
      <header className={styles.header}>
        <h1>
          {t.services?.title ||
            "Services de développement web sur mesure – Création de sites performants et optimisés"}
        </h1>
        <p>
          {t.services?.intro ||
            "En tant que développeur web full stack expérimenté, je conçois des sites et applications qui allient design, performance et optimisation SEO pour vous aider à atteindre vos objectifs en ligne."}
        </p>
      </header>

      {/* Sections services */}
      <section className={styles.section}>
        <h2>
          {t.services?.block1Title ||
            "Création de sites vitrines modernes et optimisés"}
        </h2>
        <p>
          {t.services?.block1Content ||
            "Donnez à votre entreprise une image professionnelle avec un site vitrine rapide, responsive et pensé pour convertir vos visiteurs en clients. Design unique, mobile first et optimisé pour Google."}
        </p>
      </section>

      <section className={styles.section}>
        <h2>
          {t.services?.block2Title ||
            "Développement d’applications web sur mesure"}
        </h2>
        <p>
          {t.services?.block2Content ||
            "De l’idée au produit fini, je développe des applications web performantes avec Next.js, React et TypeScript. Fonctionnalités personnalisées, sécurité renforcée et évolutivité garantie."}
        </p>
      </section>

      <section className={styles.section}>
        <h2>
          {t.services?.block3Title ||
            "Refonte et optimisation de sites existants"}
        </h2>
        <p>
          {t.services?.block3Content ||
            "Améliorez les performances, le design et le référencement de votre site actuel. Audit complet, optimisation du temps de chargement, amélioration UX et mise à jour des technologies."}
        </p>
      </section>

      <section className={styles.section}>
        <h2>
          {t.services?.block4Title ||
            "SEO technique et optimisation de la performance"}
        </h2>
        <p>
          {t.services?.block4Content ||
            "Maximisez votre visibilité sur les moteurs de recherche grâce à un code optimisé, une structure claire et un contenu ciblé. Analyse des mots-clés, optimisation des balises et stratégie SEO sur mesure."}
        </p>
      </section>

      <section className={styles.section}>
        <h2>
          {t.services?.block5Title || "Maintenance et support technique"}
        </h2>
        <p>
          {t.services?.block5Content ||
            "Assurez la stabilité et la sécurité de votre site grâce à un suivi régulier, des mises à jour techniques et un support réactif en cas de problème."}
        </p>
      </section>

      {/* Call-to-action */}
      <aside className={styles.cta}>
        <h2>
          {t.services?.ctaTitle || "Prêt à booster votre présence en ligne ?"}
        </h2>
        <p>
          {t.services?.ctaContent ||
            "Contactez-moi dès aujourd’hui pour discuter de votre projet et obtenir un devis gratuit."}
        </p>
        <button
          className={styles.ctaButton}
          onClick={() => setIsModalOpen(true)}
        >
          {t.services?.ctaButton || "Demander un devis"}
        </button>
      </aside>

      {/* Modale */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm />
      </Modal>
    </main>
  );
}