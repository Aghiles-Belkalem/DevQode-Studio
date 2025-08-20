"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import { useTranslations } from "@/hooks/useTranslations";

export default function ContactForm() {
  const { t } = useTranslations();
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSent(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/belkalemaghiles@gmail.com", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setIsSent(true);
        form.reset();
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>{t.contact?.title || 'Contactez-nous'}</h2>

      {isSent && (
        <p className={styles.successMessage}>
          {t.contact?.successMessage || 'Votre demande a été envoyée avec succès !'}
        </p>
      )}
      {isError && (
        <p className={styles.errorMessage}>
          {t.contact?.errorMessage || 'Une erreur s\'est produite. Veuillez réessayer.'}
        </p>
      )}

      <form 
        className={styles.form} 
        onSubmit={handleSubmit}
        action="https://formsubmit.co/belkalemaghiles@gmail.com"
        method="POST"
      >
        {/* FormSubmit configuration */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_next" value="https://devqode-studio.com/thank-you" />

        <label htmlFor="firstName" className={styles.label}>
          {t.contact?.firstName || 'Prénom'}
          <input 
            id="firstName" 
            name="Prénom" 
            type="text" 
            className={styles.input} 
            required 
            disabled={isLoading}
          />
        </label>

        <label htmlFor="lastName" className={styles.label}>
          {t.contact?.lastName || 'Nom'}
          <input 
            id="lastName" 
            name="Nom" 
            type="text" 
            className={styles.input} 
            required 
            disabled={isLoading}
          />
        </label>

        <label htmlFor="email" className={styles.label}>
          {t.contact?.email || 'Email'}
          <input 
            id="email" 
            name="Email" 
            type="email" 
            className={styles.input} 
            required 
            disabled={isLoading}
          />
        </label>

        <label htmlFor="message" className={styles.label}>
          {t.contact?.message || 'Message'}
          <textarea 
            id="message" 
            name="Message" 
            className={styles.textarea} 
            required
            disabled={isLoading}
            rows={5}
          ></textarea>
        </label>

        <button 
          type="submit" 
          className={styles.button}
          disabled={isLoading}
        >
          {isLoading 
            ? (t.contact?.sending || 'Envoi en cours...') 
            : (t.contact?.submit || 'Envoyer')}
        </button>
      </form>
    </section>
  );
}