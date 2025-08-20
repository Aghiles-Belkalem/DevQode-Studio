'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import { useTranslations } from '../../../hooks/useTranslations';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ isOpen, children, onClose }: ModalProps) {
  const { t } = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Monte le composant et récupère la div #modal-root
    setModalRoot(document.getElementById('modal-root'));
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !isOpen) return;

    // Bloquer le scroll
    document.body.style.overflow = 'hidden';

    // Fermer avec ESC
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [mounted, isOpen, onClose]);

  if (!mounted || !modalRoot || !isOpen) return null;

  return createPortal(
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label={t.modal?.close || "Fermer"}
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}



