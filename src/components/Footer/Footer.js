import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const solutionLinks = [
  { href: '/solutions', label: 'AI Customer Support' },
  { href: '/solutions', label: 'Lead Qualification AI' },
  { href: '/solutions', label: 'CRM Automation' },
  { href: '/solutions', label: 'WhatsApp Automation' },
];

const companyLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/nuclipp_?igsh=MTZ0bHVyMnY0czVocA==', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/company/nuclipp-productions', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              <Image src="/nuclipp-logo.svg" alt="Nuclipp Logo" width={32} height={32} className={styles.logoMarkImage} />
              <span className={styles.logoText}>Nuclipp</span>
            </Link>
            <p className={styles.brandDesc}>
              AI Automation Agency building custom AI systems that save businesses
              100+ hours per month. From chatbots to full workflow automation.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Solutions</h4>
            {solutionLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.footerLink}>
                {link.label}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>

          {/* Company Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            {companyLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.footerLink}>
                {link.label}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>

          {/* Contact Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Get in Touch</h4>
            <a href="mailto:business.nuclipp@gmail.com" className={styles.contactLink}>
              <Mail size={16} />
              business.nuclipp@gmail.com
            </a>
            <a href="https://wa.me/917903118040" className={styles.contactLink}>
              <Phone size={16} />
              +91 7903118040
            </a>
            <p className={styles.contactNote}>
              Free AI audit for qualifying businesses. Let&apos;s discuss how automation can transform your operations.
            </p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Nuclipp. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Building intelligent systems for modern businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
