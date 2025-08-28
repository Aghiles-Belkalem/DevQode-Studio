'use client';

import Image from 'next/image';
import styles from './projets.module.css';
import { useTranslations } from '../../../hooks/useTranslations';

type Project = { title: string; description: string; image: string; url?: string };

export default function ProjectsSection() {
  const { t } = useTranslations();

  const projects: Project[] = [
    {
      title: t.projects?.awa?.title || 'AWA Consulting',
      description: t.projects?.awa?.description || 'Conseil haut de gamme pour créateurs et dirigeants d’entreprise.',
      image: '/images/projetcs/www.awaconsultinggroup.com_.png',
      url: 'https://www.awaconsultinggroup.com/'
    },
    {
      title: t.projects?.graille?.title || 'Graille Zone',
      description: t.projects?.graille?.description || 'Landing page futuriste pour un resto concept',
      image: '/images/projetcs/graille-zone33.vercel.app_ (5).png',
      url: 'https://graille-zone33.vercel.app/'
    },
    {
      title: t.projects?.mk?.title || 'MK Detailing',
      description: t.projects?.mk?.description || 'Site vitrine moderne et SEO optimisé',
      image: '/images/projetcs/MK Detailing Garage Azazga.png',
      url: 'https://mk-detailing-garageazazga.vercel.app/'
    }
  ];
  
  return (
    <section className={styles.projectsSection}>
     <h2>{t.projects?.title || "Nos Réalisations"}</h2>
<p>{t.projects?.intro || "Quelques exemples de projets récents qui illustrent notre savoir-faire."}</p>


      <div className={styles.projectsGrid}>
        {projects.map(({ title, description, image, url }, i) => (
          <article key={i} className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={image}
                alt={`Projet ${title}`}
                width={500}
                height={300}
                className={styles.projectImage}
              />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                {t.projects?.cta || 'Voir le projet →'}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
