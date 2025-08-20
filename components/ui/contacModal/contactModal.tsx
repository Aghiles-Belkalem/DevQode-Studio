"use client";

import Modal from "@/components/ui/modal/modal";
import ContactForm from "@/components/ui/contact/contactForm";

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ContactForm />
    </Modal>
  );
}
