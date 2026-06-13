import Link from 'next/link';
import Image from 'next/image';
import { Mail, Video, Phone, ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const serviceLinks = [
  { href: '/services/video-editing', label: 'Video Editing' },
  { href: '/services/graphic-design', label: 'Graphic Design' },
  { href: '/services/development', label: 'Development' },
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
              <Image src="/nuclipp-logo.svg" alt="Nuclipp" width={36} height={36} className={styles.logoImage} />
              <span className={styles.logoText}>Nuclipp</span>
            </Link>
            <p className={styles.brandDesc}>
              Premium creative services network specializing in video editing,
              graphic design, and software development. Turning your vision into
              digital reality since 2019.
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

          {/* Services Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>

          {/* Company Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <Link href="/" className={styles.footerLink}>
              Home <ArrowUpRight size={14} />
            </Link>
            <Link href="/about" className={styles.footerLink}>
              About <ArrowUpRight size={14} />
            </Link>
            <Link href="/contact" className={styles.footerLink}>
              Contact <ArrowUpRight size={14} />
            </Link>
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
              Available for freelance projects worldwide. Let&apos;s create something amazing together.
            </p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Nuclipp. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Crafted with passion for creative excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
