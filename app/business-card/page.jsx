"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./BusinessCard.module.css";

const CONTACT = {
  name: "Sayakoul Diyae Eddine",
  role: "Founder & CEO",
  email: "Diyae-eddine@smartdex.ma",
  phone: "+212 7074-58386",
  phoneHref: "tel:+212707458386",
  website: "smartdex.ma",
  websiteHref: "https://smartdex.ma",
  linkedIn: "https://www.linkedin.com/in/diyae-eddine-sayakoul/",
};

const VCARD_LINES = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "FN:Sayakoul Diyae Eddine",
  "N:Sayakoul;Diyae Eddine;;;",
  "ORG:SmartDex",
  "TITLE:Founder & CEO",
  "TEL;TYPE=CELL:+212707458386",
  "EMAIL:Diyae-eddine@smartdex.ma",
  "URL:https://smartdex.ma",
  "URL;type=LinkedIn:https://www.linkedin.com/in/diyae-eddine-sayakoul/",
  "ADR;TYPE=WORK:;;Casablanca;;;Morocco",
  "END:VCARD",
];

const iconProps = {
  className: styles.icon,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

function MailIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.65a16 16 0 0 0 6.09 6.09l1.56-1.56a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...iconProps}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.7A4.4 4.4 0 0 1 16 8z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ContactRow({ href, icon, children }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      className={styles.contactRow}
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      <span className={styles.contactIcon}>{icon}</span>
      {children}
    </a>
  );
}

function SmallButton({ children, href, icon, onClick }) {
  if (href) {
    return (
      <a className={styles.actionButton} href={href} rel="noreferrer" target="_blank">
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={styles.actionButton} onClick={onClick} type="button">
      {icon}
      {children}
    </button>
  );
}

function CardTexture() {
  return <div className={styles.texture} aria-hidden="true" />;
}

function ImagePlaceholder() {
  return (
    <div className={styles.placeholderFrame}>
      <div className={styles.placeholder}>Image In progresse ...</div>
    </div>
  );
}

export default function BusinessCard() {
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  const downloadVCard = () => {
    const blob = new Blob([VCARD_LINES.join("\r\n")], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "Sayakoul-Diyae-Eddine.vcf";
    link.click();

    URL.revokeObjectURL(url);
    showToast();
  };

  return (
    <>
      <main className={styles.cards} aria-label="SmartDex business card">
        <header className={styles.cardHeader}>
          <p className={styles.headerTitle}>Private Digital Card</p>
          <span className={styles.headerGlowLine} aria-hidden="true" />
          <p className={styles.headerLocation}>Casablanca — Morocco</p>
        </header>

        <section className={`${styles.cardFace} ${styles.backFace}`} aria-label="Contact details">
          <CardTexture />

          <div className={styles.leftColumn}>
            <div>
              <h1 className={styles.name}>{CONTACT.name}</h1>
              <p className={styles.role}>{CONTACT.role}</p>
              <p className={styles.tagline}>
                Building intelligent digital solutions
                <br />
                for businesses
              </p>
            </div>

            <div>
              <div className={styles.contactList}>
                <ContactRow href={`mailto:${CONTACT.email}`} icon={<MailIcon />}>
                  {CONTACT.email}
                </ContactRow>
                <ContactRow href={CONTACT.phoneHref} icon={<PhoneIcon />}>
                  {CONTACT.phone}
                </ContactRow>
                <ContactRow href={CONTACT.websiteHref} icon={<GlobeIcon />}>
                  {CONTACT.website}
                </ContactRow>
              </div>

              <div className={styles.actions}>
                <SmallButton href={CONTACT.linkedIn} icon={<LinkedInIcon />}>
                  LinkedIn
                </SmallButton>
                <SmallButton onClick={downloadVCard} icon={<DownloadIcon />}>
                  Save Contact
                </SmallButton>
              </div>
            </div>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.rightColumn}>
            <div className={styles.backLogoCrop}>
              <Image
                alt="SmartDex"
                className={styles.backLogo}
                height={1000}
                src="/images/logo smartdex.png"
                width={1000}
              />
            </div>

            <div className={styles.rightVisualGroup}>
              <ImagePlaceholder />
              <p className={styles.placeholderLabel}>Hello World !</p>
            </div>
          </div>
        </section>

        <section className={`${styles.cardFace} ${styles.frontFace}`} aria-label="SmartDex logo">
          <CardTexture />
          <Image
            alt="SmartDex"
            className={styles.frontLogo}
            height={1000}
            priority
            src="/images/logo smartdex.png"
            width={1000}
          />
        </section>

        <p className={styles.bottomQuote}>“You bring the business. We build the technology.”</p>
      </main>

      <div className={`${styles.toast} ${toastVisible ? styles.toastVisible : ""}`}>
        Contact saved
      </div>
    </>
  );
}
