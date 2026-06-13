'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services/video-editing', label: 'Video Editing' },
  { href: '/services/graphic-design', label: 'Graphic Design' },
  { href: '/services/development', label: 'Development' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/nuclipp-logo.svg" alt="Nuclipp" width={40} height={40} className={styles.logoImage} />
          <span className={styles.logoText}>Nuclipp</span>
        </Link>

        <div className={`${styles.navLinks} ${isMobileOpen ? styles.mobileOpen : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
              {pathname === link.href && <span className={styles.activeIndicator} />}
            </Link>
          ))}
          <Link href="/contact" className={styles.ctaButton}>
            Get a Quote
          </Link>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileOpen && (
        <div className={styles.mobileOverlay} onClick={() => setIsMobileOpen(false)} />
      )}
    </nav>
  );
}
